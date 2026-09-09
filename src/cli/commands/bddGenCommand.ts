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

/** Rebuilds a nested body object from a flat list of fields carrying immediate-parent names
 *  (e.g. "deviceId" with parentField "device"), instead of flattening everything to the top level.
 *  Pre-creates a container object for every distinct parent name referenced (pass 1) so children
 *  attach correctly regardless of what order the sheet rows appear in, then attaches each field
 *  either into its parent's container or at the root, reusing the pre-created container by
 *  reference if the field is itself a parent of other fields (pass 2). This supports arbitrary
 *  nesting depth as long as the sheet consistently uses the same name for a given parent.
 *
 *  When `sampleJson` is provided and parses successfully, each leaf field's value is looked up in
 *  the real sample at its full dot path (e.g. "device.deviceId") instead of using the "<value>"
 *  placeholder — so generated YAML comes pre-filled with realistic data straight from the "Request
 *  Sample" cell. Fields the sample doesn't cover (or when no sample exists at all) still fall back
 *  to "<value>" individually, so a partially-covering sample doesn't block the rest. */
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

  let parsedSample: unknown;
  if (sampleJson) {
    try {
      parsedSample = JSON.parse(sampleJson);
    } catch {
      parsedSample = undefined;
    }
  }

  for (const field of fields) {
    const isContainer = containers.has(field.name);
    let value: unknown;

    if (isContainer) {
      value = containers.get(field.name);
    } else if (field.sampleValue) {
      // An explicit per-field sample (from the field's own "Sample Value" column) takes priority
      // over a whole-JSON-sample lookup, since it's a direct, intentional value for this field.
      value = field.sampleValue;
    } else if (parsedSample !== undefined) {
      const path = buildFieldPath(field, fieldByName);
      const sampleValue = getValueAtPath(parsedSample, path);
      value = sampleValue !== undefined ? sampleValue : '<value>';
    } else {
      value = '<value>';
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

/** Drops top-level fields that are (a) still unfilled "<value>" placeholders, and (b) whose name
 *  already appears as a key somewhere inside another already-built nested object at the root.
 *  This handles sheets that list a nested object's children as their own separate rows without a
 *  "Parent" column value linking them back — e.g. "device" resolves correctly as a full nested
 *  object via a sample-JSON match, but the sheet also separately lists "deviceId", "hardwareId",
 *  etc. as independent top-level rows with no parent info. Those end up unmatched at the (wrong)
 *  root level and fall back to "<value>", duplicating data already present inside "device". Only
 *  placeholder duplicates are removed — a field with a real, distinct value is always kept, so this
 *  never silently discards genuine data even if a name happens to collide. */
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

/** Splits the sheet's "Request Parameter" section into pathParams vs queryParams, without needing
 *  a separate column to say which is which: if the parameter's name appears as a literal "{name}"
 *  token in the URL (e.g. "id" for ".../dismiss/{id}"), it's a path param; otherwise it's treated
 *  as a query param. Uses the parameter's own Sample Value when the sheet provides one, falling
 *  back to "<value>" per-parameter when it doesn't. */
function splitRequestParameters(
  parameters: Array<{ name: string; sampleValue?: string }>,
  url: string
): { pathParams: Record<string, string>; queryParams: Record<string, string> } {
  const pathParams: Record<string, string> = {};
  const queryParams: Record<string, string> = {};
  const urlLower = url.toLowerCase();

  for (const param of parameters) {
    const value = param.sampleValue && param.sampleValue.trim().length > 0 ? param.sampleValue.trim() : '<value>';
    const isPathParam = urlLower.includes(`{${param.name.toLowerCase()}}`);

    if (isPathParam) {
      pathParams[param.name] = value;
    } else {
      queryParams[param.name] = value;
    }
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