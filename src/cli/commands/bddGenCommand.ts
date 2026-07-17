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

  const effectiveApiName = apiSpec.apiName || opts.sheet || 'API';
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

  logger.info(`Generated ${testCases.length} test case scenarios (1 positive + 3 negative + 3 edge cases)`);

  // Write to disk
  const outputFiles = generator.writeTestCasesToDisk(
    testCases,
    opts.outDir,
    extractFeatureName(opts.input),
    apiSpec.apiName
  );

  logger.info(`Test case files written: ${outputFiles.length} files to ${opts.outDir}`);

  console.log(`\n✅ BDD test cases generated successfully!`);
  console.log(`📁 Output directory: ${opts.outDir}`);
  console.log(`📊 Total scenarios: ${testCases.length}`);
  console.log(`📄 Files created: ${outputFiles.length}`);
}

function convertToApiScenario(apiSpec: any, sheetName: string, apiName: string): ApiScenario {
  // Extract endpoint from URL
  const urlMatch = apiSpec.url?.match(/\/([^/]+)(?:\?|$)/);
  const endpoint = urlMatch ? `/${urlMatch[1]}` : apiSpec.url || '/api/endpoint';

  // Build request/response objects
  const request = {
    headers: Object.fromEntries(apiSpec.requestHeaders.map((h: any) => [h.name, '<value>'])),
    pathParams: {},
    queryParams: {},
    body: Object.fromEntries(apiSpec.requestBodyFields.map((f: any) => [f.name, '<value>'])),
  };

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
    negativeScenarios: [
      'Missing authentication headers',
      'Invalid request parameters',
      'Server unavailable',
    ],
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
