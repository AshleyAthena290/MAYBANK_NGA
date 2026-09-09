import { Command } from 'commander';
import { z } from 'zod';
import { createLogger } from '../../services/logger.js';
import { ApiSpecSheetParserService } from '../../services/parser/ApiSpecSheetParserService.js';
import { BddYamlTestCaseGeneratorService } from '../../services/output/BddYamlTestCaseGeneratorService.js';
import { ApiScenario } from '../../types/apiSpec.js';

const logger = createLogger();

// Parse and validate command options
const optionsSchema = z.object({
  input: z.string().describe('Path to API spec Excel file'),
  sheet: z.string().describe('Sheet name to parse'),
  outDir: z.string().default('./artifacts').describe('Output directory for YAML files'),
});

type CommandOptions = z.infer<typeof optionsSchema>;

/**
 * CLI command: bdd-gen
 *
 * Generates BDD-style YAML test cases from API specification sheets.
 * Creates folder structure: artifacts/<feature>/<api-name>/ with individual YAML files per scenario.
 *
 * Usage:
 *   npm run dev -- bdd-gen --input "./input/api/spec.xlsx" --sheet "GetUserInfo" --outDir ./artifacts
 */
export function registerBddGenCommand(program: any): void {
  program
    .command('bdd-gen')
    .description('Generate BDD YAML test cases from API spec sheets')
    .requiredOption('-i, --input <path>', 'Path to API spec Excel workbook')
    .requiredOption('-s, --sheet <name>', 'Name of the sheet to parse')
    .option('-o, --outDir <dir>', 'Output directory', './artifacts')
    .action(async (options: unknown) => {
      try {
        await executeBddGenCommand(options);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        logger.error(`BDD generation failed: ${message}`);
        process.exit(1);
      }
    });
}

async function executeBddGenCommand(options: unknown): Promise<void> {
  // Validate options
  const opts = optionsSchema.parse(options);
  logger.info(`Starting BDD test case generation from ${opts.input} sheet ${opts.sheet}`);

  // Parse the API spec sheet
  const parser = new ApiSpecSheetParserService();
  const apiSpec = await parser.parseSheet(opts.input, opts.sheet);

  const effectiveApiName = opts.sheet || apiSpec.apiName || 'API';
  logger.info(`API spec parsed: ${effectiveApiName} (${apiSpec.method}) with ${apiSpec.requestHeaders.length} request headers and ${apiSpec.responseFields.length} response fields`);

  // Convert ApiSpecMetadata to ApiScenario
  const scenario = convertToApiScenario(apiSpec, opts.sheet, effectiveApiName);

  // Generate BDD test cases
  const generator = new BddYamlTestCaseGeneratorService();
  const testCases = generator.generateTestCases(
    scenario,
    extractFeatureName(opts.input),
    effectiveApiName,
    apiSpec.url,
    apiSpec.responseFields // Pass response fields for field-level validation
  );

  logger.info(`Generated ${testCases.length} test case scenarios (positive + negative + edge cases + boundaries)`);

  // Write to disk
  const outputFiles = generator.writeTestCasesToDisk(
    testCases,
    opts.outDir,
    extractFeatureName(opts.input),
    effectiveApiName
  );

  logger.info(`Test case files written: ${outputFiles.length} files to ${opts.outDir}`);

  console.log(`\n✅ BDD test cases generated successfully!`);
  console.log(`📁 Output directory: ${opts.outDir}`);
  console.log(`📊 Total scenarios: ${testCases.length}`);
  console.log(`📄 Files created: ${outputFiles.length}`);
}

function tryParseLenientJson(raw: string): unknown {
  try {
    return JSON.parse(raw);
  } catch {
    // fall through to a repair attempt below
  }

  const repaired = raw
    .replace(/([}\]"\d]|true|false|null)(\s*\n\s*)("(?:\\.|[^"\\])*"\s*:)/g, '$1,$2$3')
    .replace(/,(\s*[}\]])/g, '$1');

  try {
    return JSON.parse(repaired);
  } catch {
    return undefined;
  }
}

function buildNestedRequestBody(
  fields: Array<{ name: string; parentField?: string; sampleValue?: string }>,
  sampleJson?: string
): Record<string, unknown> {
  const root: Record<string, unknown> = {};
  const containers = new Map<string, Record<string, unknown>>();
  const fieldByName = new Map<string, { name: string; parentField?: string }>();

  for (const field of fields) {
    fieldByName.set(field.name, field);
    if (field.parentField && !containers.has(field.parentField)) {
      containers.set(field.parentField, {});
    }
  }

  const parsedSample = sampleJson ? tryParseLenientJson(sampleJson) : undefined;

  for (const field of fields) {
    const isContainer = containers.has(field.name);
    let value: unknown;

    if (isContainer) {
      value = containers.get(field.name);
    } else {
      // The "Request Sample" JSON is the actual request body that gets sent, so it takes priority
      // over the HTTP Body table's own per-field "Sample Value" column — that column is just
      // documentation of an example value for the field in isolation, and can disagree with (or
      // be a stale duplicate of) what the Request Sample actually shows for that same field.
      const path = buildFieldPath(field, fieldByName);
      const sampleValue = parsedSample !== undefined ? getValueAtPath(parsedSample, path) : undefined;
      value = sampleValue !== undefined ? sampleValue : field.sampleValue ?? '<value>';
    }

    if (field.parentField) {
      const parentContainer = containers.get(field.parentField);
      if (parentContainer) {
        parentContainer[field.name] = value;
      } else {
        // Defensive fallback: parent name didn't resolve to a container (shouldn't happen given
        // pass 1, but avoids silently dropping the field if it ever does).
        root[field.name] = value;
      }
    } else {
      root[field.name] = value;
    }
  }

  return pruneDuplicateFlatFields(root);
}

function pruneDuplicateFlatFields(root: Record<string, unknown>): Record<string, unknown> {
  const nestedKeys = new Set<string>();
  const collectKeys = (value: unknown): void => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return;
    for (const [key, nestedValue] of Object.entries(value as Record<string, unknown>)) {
      nestedKeys.add(key);
      collectKeys(nestedValue);
    }
  };
  for (const value of Object.values(root)) {
    collectKeys(value);
  }

  const pruned: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(root)) {
    const isObjectContainer = !!value && typeof value === 'object' && !Array.isArray(value);
    const isDuplicatePlaceholder = !isObjectContainer && value === '<value>' && nestedKeys.has(key);
    if (isDuplicatePlaceholder) {
      continue;
    }
    pruned[key] = value;
  }
  return pruned;
}

/** Walks a field's parentField chain up to the root, building its full dot path
 *  (e.g. ["device", "deviceId"]) for looking up its value in the sample JSON. Guards against
 *  cycles and stops gracefully if a referenced parent name has no corresponding field row. */
function buildFieldPath(
  field: { name: string; parentField?: string },
  fieldByName: Map<string, { name: string; parentField?: string }>
): string[] {
  const path: string[] = [field.name];
  let current = field;
  const visited = new Set<string>([field.name]);

  while (current.parentField) {
    if (visited.has(current.parentField)) break;
    path.unshift(current.parentField);
    visited.add(current.parentField);
    const parent = fieldByName.get(current.parentField);
    if (!parent) break;
    current = parent;
  }

  return path;
}

/** Looks up a value at a dot path within a parsed JSON object (e.g. path ["device", "deviceId"]
 *  against { device: { deviceId: "..." } }). Returns undefined if any segment along the way is
 *  missing, not an object, or an array (array-indexed sample lookups aren't supported here). */
function getValueAtPath(sample: unknown, path: string[]): unknown {
  let current: unknown = sample;
  for (const key of path) {
    if (current === null || current === undefined || typeof current !== 'object' || Array.isArray(current)) {
      return undefined;
    }
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

/** Converts the flat parsed field list into dot-path field specs (e.g. "device.deviceId") carrying
 *  whatever constraints were actually captured from the sheet. Fields with no constraints are
 *  still included (with `constraints` left undefined) so callers can see the full field set if
 *  needed, but the generator only produces boundary tests for fields with real constraint data. */
function buildRequestBodyFieldSpecs(
  fields: Array<{
    name: string;
    type: string;
    mandatory?: boolean;
    parentField?: string;
    constraints?: { minLength?: number; maxLength?: number; minValue?: number; maxValue?: number };
  }>
): Array<{
  fieldPath: string;
  type: string;
  mandatory: boolean;
  constraints?: { minLength?: number; maxLength?: number; minValue?: number; maxValue?: number } | undefined;
}> {
  const fieldByName = new Map<string, { name: string; parentField?: string }>();
  for (const field of fields) {
    fieldByName.set(field.name, field);
  }

  return fields.map((field) => ({
    fieldPath: buildFieldPath(field, fieldByName).join('.'),
    type: field.type,
    mandatory: field.mandatory ?? false,
    constraints: field.constraints,
  }));
}

/** True when a Request Parameter row's declared type is a Java-style MultiValueMap (e.g.
 *  "MultiValueMap<String, String>") \u2014 these document one illustrative pre-built query string as
 *  their "Sample Value" (with possibly-repeated real keys) rather than a name/value pair for the
 *  row's own literal name. */
function isMultiValueMapType(type: string | undefined): boolean {
  return /multivaluemap/i.test(type || '');
}

/** Parses a MultiValueMap parameter's sample value (e.g.
 *  "CASA_CIF=000784756&CASA_CIF=000123122&CARD_CIF=000987867") into its real query keys. A
 *  repeated key's values are joined with a comma, since the target queryParams shape here is a
 *  flat map, not a true multi-map \u2014 this preserves every example value from the sheet instead of
 *  the last one silently overwriting the rest. Returns an empty map if the sample doesn't look
 *  like a query string at all. */
function parseMultiValueMapSample(sampleValue: string): Record<string, string> {
  const result: Record<string, string> = {};
  if (!sampleValue.includes('=')) return result;

  for (const pair of sampleValue.split('&')) {
    const separatorIndex = pair.indexOf('=');
    if (separatorIndex <= 0) continue;
    const key = pair.slice(0, separatorIndex).trim();
    const value = pair.slice(separatorIndex + 1).trim();
    if (!key) continue;
    result[key] = result[key] !== undefined ? `${result[key]},${value}` : value;
  }
  return result;
}

/** Splits the sheet's "Request Parameter" section into pathParams vs queryParams, without needing
 *  a separate column to say which is which: if the parameter's name appears as a literal "{name}"
 *  token in the URL (e.g. "id" for ".../dismiss/{id}"), it's a path param; otherwise it's treated
 *  as a query param. Uses the parameter's own Sample Value when the sheet provides one, falling
 *  back to "<value>" per-parameter when it doesn't. A MultiValueMap-typed parameter is expanded
 *  into its real keys (see parseMultiValueMapSample) instead of being emitted as a single query
 *  key literally named e.g. "*MultiValueMap". */
function splitRequestParameters(
  parameters: Array<{ name: string; type?: string; sampleValue?: string }>,
  url: string
): { pathParams: Record<string, string>; queryParams: Record<string, string> } {
  const pathParams: Record<string, string> = {};
  const queryParams: Record<string, string> = {};
  const urlLower = url.toLowerCase();

  for (const param of parameters) {
    const isPathParam = urlLower.includes(`{${param.name.toLowerCase()}}`);

    if (isPathParam) {
      pathParams[param.name] = param.sampleValue && param.sampleValue.trim().length > 0 ? param.sampleValue.trim() : '<value>';
      continue;
    }

    if (isMultiValueMapType(param.type) && param.sampleValue) {
      const expanded = parseMultiValueMapSample(param.sampleValue.trim());
      if (Object.keys(expanded).length > 0) {
        Object.assign(queryParams, expanded);
        continue;
      }
    }

    queryParams[param.name] = param.sampleValue && param.sampleValue.trim().length > 0 ? param.sampleValue.trim() : '<value>';
  }

  return { pathParams, queryParams };
}

function convertToApiScenario(apiSpec: any, sheetName: string, apiName: string): ApiScenario {
  // Extract endpoint from URL
  const urlMatch = apiSpec.url?.match(/\/([^/]+)(?:\?|$)/);
  const endpoint = urlMatch ? `/${urlMatch[1]}` : apiSpec.url || '/api/endpoint';

  // Build request/response objects
  const { pathParams, queryParams } = splitRequestParameters(apiSpec.requestParameters || [], apiSpec.url || '');

  const request = {
    headers: Object.fromEntries(
      apiSpec.requestHeaders.map((h: any) => [h.name, h.sampleValue && h.sampleValue.trim().length > 0 ? h.sampleValue.trim() : '<value>'])
    ),
    pathParams,
    queryParams,
    body: buildNestedRequestBody(apiSpec.requestBodyFields, apiSpec.requestSampleJson),
  };

  const requestBodyFieldSpecs = buildRequestBodyFieldSpecs(apiSpec.requestBodyFields);

  const response = {
    successStatusCode: 200,
    successDescription: 'Success',
    bodySchema: Object.fromEntries(
      apiSpec.responseFields.map((f: any) => [f.name, f.type || 'string'])
    ),
    errorStatusCodes: [
      { code: 400, description: 'Bad Request' },
      { code: 401, description: 'Unauthorized' },
      { code: 500, description: 'Internal Server Error' },
    ],
  };

  return {
    id: apiName,
    title: `${apiSpec.method} ${endpoint}`,
    feature: extractFeatureName(''),
    description: apiSpec.apiDescription || 'API endpoint test scenario',
    method: apiSpec.method || 'GET',
    endpoint,
    authentication: 'OAuth2',
    environment: ['SIT', 'UAT', 'PROD'],
    tags: ['api', apiName.toLowerCase().replace(/\s+/g, '-')],
    priority: 'P1',
    preconditions: [
      'Service is operational',
      'Valid authentication credentials available',
    ],
    testData: {},
    request,
    response,
    assertions: [
      'Response status code is 200',
      'Response body schema matches specification',
      'All mandatory response fields are present',
    ],
    cleanup: [],
    references: {
      fsdFeature: extractFeatureName(''),
      sourceWorksheet: sheetName,
      sourceRows: '',
      apiSpecFile: apiName,
    },
    // Left empty rather than hardcoded: no column in the sheet currently documents real,
    // API-specific negative scenarios. Leaving this empty lets the generator's Tier 2
    // auto-derivation take over — deriving real missing/invalid header and query-param negative
    // tests from whatever this specific API's spec actually contains, instead of applying the
    // same 3 generic labels to every API regardless of what it actually needs.
    negativeScenarios: [],
    requestBodyFieldSpecs,
    ...(apiSpec.placeholderEnums ? { placeholderEnums: apiSpec.placeholderEnums } : {}),
  };
}

function extractFeatureName(filePath: string): string {
  // Extract feature name from filepath
  // E.g., "P&T_Local_Transfer_..." -> "p-t-local-transfer"
  const filename = filePath.split(/[/\\]/).pop() || 'api-spec';
  return filename
    .replace(/\.[^.]+$/, '') // Remove extension
    .toLowerCase()
    .replace(/[&\s]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}