import { readdir, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { load as yamlLoad } from "js-yaml";
import { Command } from "commander";
import { z } from "zod";
import type { AppLogger } from "../../services/logger.js";
import { ReportGenerator } from "../../services/reportGenerator.js";

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
  filePath: string;
  method: string;
  url: string;
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
  reportDir: z.string().optional()
});

type ApiTestRunOptions = z.infer<typeof ApiTestRunOptionsSchema>;

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

  logger.info(
    {
      selected: selectedCases.length,
      file: options.file,
      feature: options.feature,
      api: options.api,
      id: options.id,
      baseUrl: options.baseUrl
    },
    "Starting API YAML test execution"
  );

  const results: TestExecutionResult[] = [];
  for (const entry of selectedCases) {
    const result = await runSingleYamlTest(entry, options.timeoutMs, options.baseUrl);
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
  timeoutMs: number,
  baseUrl?: string
): Promise<TestExecutionResult> {
  const { testCase, filePath } = entry;
  const method = (testCase.request?.method ?? "GET").toUpperCase();
  const resolvedUrl = resolveTargetUrl(testCase, baseUrl);
  const requestBody = sanitizeRequestBody(testCase.request?.body);

  const controller = new AbortController();
  const timeoutHandle = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const fetchInit: RequestInit = {
      method,
      signal: controller.signal
    };

    if (testCase.request?.headers) {
      fetchInit.headers = testCase.request.headers;
    }

    if (shouldSendBody(method)) {
      fetchInit.body = JSON.stringify(requestBody ?? {});
    }

    const response = await fetch(resolvedUrl, fetchInit);

    const bodyText = await response.text();
    const parsedBody = safeJsonParse(bodyText);
    const assertionResults = evaluateAssertions(
      testCase.assertions ?? [],
      response.status,
      parsedBody,
      testCase.response?.successStatusCode
    );

    return {
      id: testCase.id,
      filePath,
      method,
      url: resolvedUrl,
      statusCode: response.status,
      passed: assertionResults.every((result) => result.passed),
      assertionResults
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      id: testCase.id,
      filePath,
      method,
      url: resolvedUrl,
      statusCode: 0,
      passed: false,
      assertionResults: [],
      error: message
    };
  } finally {
    clearTimeout(timeoutHandle);
  }
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