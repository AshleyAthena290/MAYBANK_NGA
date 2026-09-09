import { readdir, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { load as yamlLoad } from "js-yaml";
import { Command } from "commander";
import { z } from "zod";
import type { AppLogger } from "../../services/logger.js";
import { ReportGenerator } from "../../services/reportGenerator.js";

const execFileAsync = promisify(execFile);

type AssertionType =
  | "status"
  | "field-exists"
  | "field-type"
  | "field-mandatory"
  | "field-value"
  | "constraint"
  | "custom";

interface YamlAssertion {
  description: string;
  type: AssertionType;
  target?: string;
  expectedValue?: unknown;
  constraint?: string;
}

interface YamlApiTestCase {
  id: string;
  title?: string;
  feature?: string;
  tags?: string[];
  request?: {
    method?: string;
    url?: string;
    endpoint?: string;
    headers?: Record<string, string>;
    body?: unknown;
  };
  response?: {
    successStatusCode?: number;
  };
  assertions?: YamlAssertion[];
  references?: {
    apiSpecFile?: string;
    sourceWorksheet?: string;
  };
}

interface LoadedYamlTestCase {
  filePath: string;
  testCase: YamlApiTestCase;
}

interface AssertionResult {
  description: string;
  passed: boolean;
  details?: string;
}

interface TestExecutionResult {
  id: string;
  title?: string;
  feature?: string;
  tags?: string[];
  filePath: string;
  method: string;
  url: string;
  expectedStatusCode?: number;
  statusCode: number;
  passed: boolean;
  assertionResults: AssertionResult[];
  error?: string;
}

const ApiTestRunOptionsSchema = z.object({
  file: z.string().optional(),
  inputDir: z.string().default("./artifacts/api"),
  feature: z.string().optional(),
  api: z.string().optional(),
  id: z.string().optional(),
  baseUrl: z.string().optional(),
  timeoutMs: z.coerce.number().int().positive().default(15000),
  failFast: z.coerce.boolean().default(false),
  reportDir: z.string().optional(),
  header: z.array(z.string()).default([]),
  transport: z.enum(["fetch", "curl"]).default("fetch"),
  insecure: z.coerce.boolean().default(false),
  verbose: z.coerce.boolean().default(false)
});

type ApiTestRunOptions = z.infer<typeof ApiTestRunOptionsSchema>;

/** Bundles the per-run execution settings that every test case needs, instead of a long positional
 *  parameter list that grows every time a new runner flag is added. */
interface RunnerRuntimeOptions {
  timeoutMs: number;
  baseUrl?: string;
  headerOverrides: Record<string, string>;
  transport: "fetch" | "curl";
  insecure: boolean;
  verbose: boolean;
}

/** Accumulates repeated `--header name=value` flags into an array (commander's default behavior
 *  for a repeatable option is to keep only the last value, so this collector is required). */
function collectHeader(value: string, previous: string[]): string[] {
  previous.push(value);
  return previous;
}

/** Parses `--header` values ("name=value") into a lookup map keyed by lowercased header name, so
 *  overrides can be matched against a YAML's headers case-insensitively regardless of how the
 *  header is cased there (e.g. "env" vs "Env"). Silently skips malformed entries missing "=". */
function parseHeaderOverrides(values: string[]): Record<string, string> {
  const overrides: Record<string, string> = {};
  for (const entry of values) {
    const separatorIndex = entry.indexOf("=");
    if (separatorIndex <= 0) continue;
    const name = entry.slice(0, separatorIndex).trim();
    const value = entry.slice(separatorIndex + 1).trim();
    if (name) {
      overrides[name.toLowerCase()] = value;
    }
  }
  return overrides;
}

/** Overrides a header's value only if that exact header already exists in the YAML's own
 *  request.headers — e.g. an API whose spec never included an "env" header is left untouched,
 *  since there's nothing to override and adding one would send a header the real API never expects. */
function applyHeaderOverrides(
  headers: Record<string, string> | undefined,
  overrides: Record<string, string>
): Record<string, string> | undefined {
  if (!headers || Object.keys(overrides).length === 0) {
    return headers;
  }

  const result = { ...headers };
  for (const key of Object.keys(result)) {
    const overrideValue = overrides[key.toLowerCase()];
    if (overrideValue !== undefined) {
      result[key] = overrideValue;
    }
  }
  return result;
}

export function registerApiTestRunnerCommand(program: Command, logger: AppLogger): void {
  program
    .command("api-test-run")
    .description("Run API tests directly from generated BDD YAML files")
    .option("-f, --file <path>", "Run a single YAML file")
    .option("-d, --inputDir <path>", "Root YAML directory", "./artifacts/api")
    .option("--feature <name>", "Run all tests under a feature name")
    .option("--api <name>", "Run all tests for a specific API name")
    .option("--id <test-id>", "Run a specific test id")
    .option("--baseUrl <url>", "Override host, keep endpoint path from YAML")
    .option("--timeoutMs <ms>", "HTTP timeout in milliseconds", "15000")
    .option("--failFast", "Stop on first failure", false)
    .option("--reportDir <path>", "Output directory for HTML/Excel reports", "./artifacts/reports")
    .option(
      "--header <name=value>",
      "Override a header's value if that header already exists in the YAML (repeatable), e.g. --header env=SIT",
      collectHeader,
      [] as string[]
    )
    .option("--transport <type>", "HTTP transport to use: fetch (default) or curl", "fetch")
    .option("--insecure", "Skip TLS certificate verification (both transports)", false)
    .option("--verbose", "Print request and response details for each test case", false)
    .action(async (rawOptions: unknown) => {
      try {
        const options = ApiTestRunOptionsSchema.parse(rawOptions);
        await executeApiTestRunnerCommand(options, logger);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        logger.error({ error }, "API YAML runner failed");
        console.error(`API YAML runner failed: ${message}`);
        process.exitCode = 1;
      }
    });
}

async function executeApiTestRunnerCommand(options: ApiTestRunOptions, logger: AppLogger): Promise<void> {
  const startTime = Date.now();
  
  const yamlFiles = options.file
    ? [resolve(options.file)]
    : await findYamlFiles(resolve(options.inputDir));

  if (yamlFiles.length === 0) {
    throw new Error("No YAML files found for execution");
  }

  const loadedCases = await loadYamlCases(yamlFiles);
  const selectedCases = filterTestCases(loadedCases, options);

  if (selectedCases.length === 0) {
    throw new Error("No YAML test cases matched the provided filters");
  }

  const headerOverrides = parseHeaderOverrides(options.header);

  if (options.insecure) {
    // Node's fetch (undici) and curl both honor this for every request in the current process,
    // so setting it once here covers whichever transport is selected for this run.
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    logger.warn("TLS certificate verification disabled (--insecure) for this run");
  }

  const runtime: RunnerRuntimeOptions = {
    timeoutMs: options.timeoutMs,
    ...(options.baseUrl !== undefined ? { baseUrl: options.baseUrl } : {}),
    headerOverrides,
    transport: options.transport,
    insecure: options.insecure,
    verbose: options.verbose
  };

  logger.info(
    {
      selected: selectedCases.length,
      file: options.file,
      feature: options.feature,
      api: options.api,
      id: options.id,
      baseUrl: options.baseUrl,
      headerOverrides: Object.keys(headerOverrides),
      transport: options.transport,
      insecure: options.insecure
    },
    "Starting API YAML test execution"
  );

  const results: TestExecutionResult[] = [];
  for (const entry of selectedCases) {
    const result = await runSingleYamlTest(entry, runtime);
    results.push(result);

    const status = result.passed ? "PASS" : "FAIL";
    console.log(`[${status}] ${result.id} -> ${result.method} ${result.url} (${result.statusCode})`);

    if (!result.passed) {
      for (const assertion of result.assertionResults.filter((item) => !item.passed)) {
        const detail = assertion.details ? ` (${assertion.details})` : "";
        console.log(`  - ${assertion.description}${detail}`);
      }
      if (result.error) {
        console.log(`  - execution error: ${result.error}`);
      }

      if (options.failFast) {
        break;
      }
    }
  }

  const executionTime = Date.now() - startTime;
  const passedCount = results.filter((result) => result.passed).length;
  const failedCount = results.length - passedCount;
  console.log(`\nExecution summary: ${passedCount} passed, ${failedCount} failed, ${results.length} total`);
  console.log(`Execution time: ${(executionTime / 1000).toFixed(2)}s`);

  // Generate reports
  try {
    const reportGenerator = new ReportGenerator();
    const reportPaths = await reportGenerator.generateReports(results, {
      outputDir: options.reportDir ?? "./artifacts/reports",
      executionTime
    });
    
    console.log(`\n✓ Reports generated:`);
    console.log(`  HTML: ${reportPaths.htmlPath}`);
    console.log(`  Excel: ${reportPaths.excelPath}`);
    
    logger.info({ htmlPath: reportPaths.htmlPath, excelPath: reportPaths.excelPath }, "Reports generated successfully");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    logger.warn({ error }, "Failed to generate reports");
    console.warn(`Warning: Failed to generate reports: ${message}`);
  }

  if (failedCount > 0) {
    process.exitCode = 1;
  }
}

async function findYamlFiles(rootDir: string): Promise<string[]> {
  const entries = await readdir(rootDir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = join(rootDir, entry.name);
      if (entry.isDirectory()) {
        return findYamlFiles(fullPath);
      }
      if (entry.isFile() && (entry.name.endsWith(".yaml") || entry.name.endsWith(".yml"))) {
        return [fullPath];
      }
      return [] as string[];
    })
  );

  return nested.flat();
}

async function loadYamlCases(filePaths: string[]): Promise<LoadedYamlTestCase[]> {
  const loaded = await Promise.all(
    filePaths.map(async (filePath) => {
      const raw = await readFile(filePath, "utf-8");
      const parsed = yamlLoad(raw) as YamlApiTestCase;
      return {
        filePath,
        testCase: parsed
      };
    })
  );

  return loaded.filter((entry) => Boolean(entry.testCase.id && entry.testCase.request?.url));
}

function filterTestCases(entries: LoadedYamlTestCase[], options: ApiTestRunOptions): LoadedYamlTestCase[] {
  return entries.filter((entry) => {
    const { testCase } = entry;

    if (options.id && testCase.id !== options.id) {
      return false;
    }

    if (options.feature && testCase.feature !== options.feature) {
      return false;
    }

    if (options.api) {
      const apiName = (testCase.references?.apiSpecFile ?? testCase.references?.sourceWorksheet ?? "").toLowerCase();
      const optionApi = options.api.toLowerCase();
      if (!apiName.includes(optionApi) && !testCase.id.toLowerCase().includes(optionApi)) {
        return false;
      }
    }

    return true;
  });
}

async function runSingleYamlTest(
  entry: LoadedYamlTestCase,
  runtime: RunnerRuntimeOptions
): Promise<TestExecutionResult> {
  const { testCase, filePath } = entry;
  const method = (testCase.request?.method ?? "GET").toUpperCase();
  const resolvedUrl = resolveTargetUrl(testCase, runtime.baseUrl);
  const requestBody = sanitizeRequestBody(testCase.request?.body);
  const headers = testCase.request?.headers
    ? applyHeaderOverrides(testCase.request.headers, runtime.headerOverrides)
    : undefined;

  if (runtime.verbose) {
    console.log(`  [request] ${method} ${resolvedUrl}`);
    if (headers) console.log(`  [request] headers: ${JSON.stringify(headers)}`);
    if (shouldSendBody(method)) console.log(`  [request] body: ${JSON.stringify(requestBody ?? {})}`);
  }

  try {
    const { statusCode, bodyText } =
      runtime.transport === "curl"
        ? await runCurlRequest(method, resolvedUrl, headers, requestBody, runtime.timeoutMs, runtime.insecure)
        : await runFetchRequest(method, resolvedUrl, headers, requestBody, runtime.timeoutMs);

    if (runtime.verbose) {
      console.log(`  [response] status: ${statusCode}`);
      console.log(`  [response] body: ${bodyText.slice(0, 2000)}`);
    }

    const parsedBody = safeJsonParse(bodyText);
    const assertionResults = evaluateAssertions(
      testCase.assertions ?? [],
      statusCode,
      parsedBody,
      testCase.response?.successStatusCode
    );

    return {
      id: testCase.id,
      ...(testCase.title !== undefined ? { title: testCase.title } : {}),
      ...(testCase.feature !== undefined ? { feature: testCase.feature } : {}),
      ...(testCase.tags !== undefined ? { tags: testCase.tags } : {}),
      filePath,
      method,
      url: resolvedUrl,
      ...(testCase.response?.successStatusCode !== undefined
        ? { expectedStatusCode: testCase.response.successStatusCode }
        : {}),
      statusCode,
      passed: assertionResults.every((result) => result.passed),
      assertionResults
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (runtime.verbose) {
      console.log(`  [response] error: ${message}`);
    }
    return {
      id: testCase.id,
      ...(testCase.title !== undefined ? { title: testCase.title } : {}),
      ...(testCase.feature !== undefined ? { feature: testCase.feature } : {}),
      ...(testCase.tags !== undefined ? { tags: testCase.tags } : {}),
      filePath,
      method,
      url: resolvedUrl,
      ...(testCase.response?.successStatusCode !== undefined
        ? { expectedStatusCode: testCase.response.successStatusCode }
        : {}),
      statusCode: 0,
      passed: false,
      assertionResults: [],
      error: message
    };
  }
}

/** Sends the request using Node's built-in fetch. TLS verification is toggled process-wide via
 *  NODE_TLS_REJECT_UNAUTHORIZED before any requests run (see executeApiTestRunnerCommand), since
 *  undici's fetch doesn't take a per-request "insecure" option. */
async function runFetchRequest(
  method: string,
  url: string,
  headers: Record<string, string> | undefined,
  body: unknown,
  timeoutMs: number
): Promise<{ statusCode: number; bodyText: string }> {
  const controller = new AbortController();
  const timeoutHandle = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const fetchInit: RequestInit = { method, signal: controller.signal };
    if (headers) {
      fetchInit.headers = headers;
    }
    if (shouldSendBody(method)) {
      fetchInit.body = JSON.stringify(body ?? {});
    }

    const response = await fetch(url, fetchInit);
    const bodyText = await response.text();
    return { statusCode: response.status, bodyText };
  } finally {
    clearTimeout(timeoutHandle);
  }
}

/** Sends the request by shelling out to the system `curl` binary instead of Node's fetch — useful
 *  in environments where corporate proxies/root CAs or NTLM auth are already configured for curl
 *  but not for Node. Uses `-i` so curl prints the status line and headers before the body, letting
 *  us recover the status code without needing curl's separate `-w`/`-D` plumbing. */
async function runCurlRequest(
  method: string,
  url: string,
  headers: Record<string, string> | undefined,
  body: unknown,
  timeoutMs: number,
  insecure: boolean
): Promise<{ statusCode: number; bodyText: string }> {
  const args = ["-i", "-s", "-S", "-X", method.toUpperCase(), url, "--max-time", String(Math.max(1, Math.ceil(timeoutMs / 1000)))];

  if (insecure) {
    args.push("--insecure");
  }

  if (headers) {
    for (const [name, value] of Object.entries(headers)) {
      args.push("-H", `${name}: ${value}`);
    }
  }

  if (shouldSendBody(method)) {
    args.push("--data-raw", JSON.stringify(body ?? {}));
  }

  try {
    const { stdout } = await execFileAsync("curl", args, { timeout: timeoutMs, maxBuffer: 1024 * 1024 * 20 });
    return parseCurlOutput(stdout);
  } catch (error) {
    const execError = error as { stdout?: string; stderr?: string; message?: string };
    // curl exits non-zero for HTTP error statuses too when certain flags are set, but even without
    // those flags a failed *connection* still lands here — only fall back to parsing stdout if it
    // actually looks like a captured HTTP response, otherwise surface curl's own error message.
    if (execError.stdout && /^HTTP\/\d/.test(execError.stdout)) {
      return parseCurlOutput(execError.stdout);
    }
    throw new Error(execError.stderr?.trim() || execError.message || "curl request failed");
  }
}

/** Splits curl's `-i` output (status line + headers, blank line, body) and extracts the status
 *  code from the last status line — "last" because curl also prints one status line per redirect
 *  hop if `-L` were used; here it just future-proofs against that without needing extra flags. */
function parseCurlOutput(rawOutput: string): { statusCode: number; bodyText: string } {
  const headerEnd = rawOutput.search(/\r?\n\r?\n/);
  const separatorMatch = headerEnd === -1 ? null : rawOutput.slice(headerEnd).match(/^\r?\n\r?\n/);
  const headerBlock = headerEnd === -1 ? rawOutput : rawOutput.slice(0, headerEnd);
  const bodyText = headerEnd === -1 ? "" : rawOutput.slice(headerEnd + (separatorMatch?.[0].length ?? 2));

  const statusLines = headerBlock.split(/\r?\n/).filter((line) => /^HTTP\/\d(\.\d)?\s+\d{3}/.test(line));
  const statusMatch = statusLines[statusLines.length - 1]?.match(/(\d{3})/);

  return { statusCode: statusMatch ? Number(statusMatch[1]) : 0, bodyText };
}

function shouldSendBody(method: string): boolean {
  return !["GET", "HEAD"].includes(method.toUpperCase());
}

function resolveTargetUrl(testCase: YamlApiTestCase, baseUrl?: string): string {
  const url = testCase.request?.url ?? testCase.request?.endpoint;
  if (!url) {
    throw new Error(`Missing request URL for ${testCase.id}`);
  }

  if (!baseUrl) {
    if (url.includes("{")) {
      throw new Error(
        `URL contains placeholders. Provide --baseUrl to execute this case: ${url}`
      );
    }
    return url;
  }

  const path = extractPathFromUrl(url);
  return `${baseUrl.replace(/\/$/, "")}${path}`;
}

function extractPathFromUrl(url: string): string {
  const match = url.match(/^https?:\/\/[^/]+(\/.*)$/i);
  if (match?.[1]) {
    return match[1];
  }
  return url.startsWith("/") ? url : `/${url}`;
}

function sanitizeRequestBody(body: unknown): unknown {
  if (body === null || body === undefined) {
    return undefined;
  }

  if (Array.isArray(body)) {
    return body.map((item) => sanitizeRequestBody(item));
  }

  if (typeof body === "object") {
    const entries = Object.entries(body as Record<string, unknown>)
      .filter(([key]) => {
        const trimmed = key.trim();
        return trimmed.length > 0 && !trimmed.startsWith("{") && !trimmed.startsWith("?");
      })
      .map(([key, value]) => [key, sanitizeRequestBody(value)] as const);

    return Object.fromEntries(entries);
  }

  if (typeof body === "string" && body.trim() === "<value>") {
    return "sample-value";
  }

  return body;
}

function safeJsonParse(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function evaluateAssertions(
  assertions: YamlAssertion[],
  statusCode: number,
  responseBody: unknown,
  fallbackStatusCode?: number
): AssertionResult[] {
  if (assertions.length === 0 && fallbackStatusCode !== undefined) {
    return [
      {
        description: `Status code equals ${fallbackStatusCode}`,
        passed: statusCode === fallbackStatusCode,
        details: `actual=${statusCode}`
      }
    ];
  }

  return assertions.map((assertion) => {
    switch (assertion.type) {
      case "status": {
        const expected = toNumber(assertion.expectedValue) ?? fallbackStatusCode;
        const passed = expected !== undefined ? statusCode === expected : false;
        return {
          description: assertion.description,
          passed,
          details: `expected=${expected ?? "n/a"}, actual=${statusCode}`
        };
      }
      case "field-exists": {
        const value = assertion.target ? getValueAtPath(responseBody, assertion.target) : undefined;
        return {
          description: assertion.description,
          passed: value !== undefined,
          details: assertion.target ? `target=${assertion.target}` : "missing target"
        };
      }
      case "field-type": {
        const value = assertion.target ? getValueAtPath(responseBody, assertion.target) : undefined;
        const expectedType = parseExpectedType(assertion.expectedValue);
        const actualType = detectRuntimeType(value);
        return {
          description: assertion.description,
          passed: expectedType.length > 0 && expectedType === actualType,
          details: `expected=${expectedType || "n/a"}, actualType=${actualType || "undefined"}, actualValue=${String(value)}`
        };
      }
      case "field-mandatory": {
        const value = assertion.target ? getValueAtPath(responseBody, assertion.target) : undefined;
        const passed = !(
          value === undefined ||
          value === null ||
          value === "" ||
          (Array.isArray(value) && value.length === 0)
        );
        return {
          description: assertion.description,
          passed,
          details: assertion.target ? `target=${assertion.target}` : "missing target"
        };
      }
      case "field-value": {
        const value = assertion.target ? getValueAtPath(responseBody, assertion.target) : undefined;
        const passed = value === assertion.expectedValue;
        return {
          description: assertion.description,
          passed,
          details: `expected=${String(assertion.expectedValue)}, actual=${String(value)}`
        };
      }
      case "constraint": {
        return {
          description: assertion.description,
          passed: true,
          details: assertion.constraint ? `skipped constraint: ${assertion.constraint}` : "skipped"
        };
      }
      case "custom":
      default: {
        return {
          description: assertion.description,
          passed: true,
          details: "custom assertion requires project-specific implementation"
        };
      }
    }
  });
}

function getValueAtPath(source: unknown, path: string): unknown {
  if (!path || source === null || source === undefined) {
    return undefined;
  }

  const normalizedPath = path.replace(/\[(\d+)\]/g, ".$1").replace(/\[\]/g, "");
  return normalizedPath.split(".").reduce<unknown>((current, key) => {
    if (current === null || current === undefined) {
      return undefined;
    }
    if (Array.isArray(current)) {
      const index = Number(key);
      return Number.isNaN(index) ? undefined : current[index];
    }
    if (typeof current === "object") {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, source);
}

function parseExpectedType(value: unknown): string {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";

  if (typeof value === "string") {
    const lowered = value.toLowerCase().trim();
    if (lowered.startsWith("array")) return "array";
    if (lowered === "integer" || lowered === "decimal" || lowered === "number") return "number";
    if (lowered === "object") return "object";
    if (lowered === "boolean") return "boolean";
    if (lowered === "string") return "string";
    if (lowered === "null") return "null";
    return lowered;
  }

  return typeof value;
}

function detectRuntimeType(value: unknown): string {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

function toNumber(value: unknown): number | undefined {
  if (typeof value === "number") {
    return value;
  }
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isNaN(parsed) ? undefined : parsed;
  }
  return undefined;
}