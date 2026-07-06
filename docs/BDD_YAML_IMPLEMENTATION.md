# BDD YAML Test Case Generation - Implementation Summary

## What Was Accomplished

You now have a complete **BDD-style YAML test case generator** for API specifications that produces business-readable, test-runner-friendly YAML files suitable for QA, BA, and business users.

## Key Features Delivered

### 1. **Single API Endpoint Generation**
Generate comprehensive test cases for one specific API endpoint:

```bash
npm run dev -- bdd-gen --input "input/api/P&T_Local_Transfer_DDD_API_Spec_v1.xlsx" --sheet "GetPTMaintenanceTransferInit" --outDir ./artifacts
```

**Output:** 7 test scenarios (1 positive + 3 negative + 3 edge cases) + index file

### 2. **Batch Generation (All APIs)**
Process all API endpoints in a workbook at once:

```bash
node scripts/batch-bdd-gen.mjs --input "input/api/P&T_Local_Transfer_DDD_API_Spec_v1.xlsx" --outDir ./artifacts
```

### 3. **Business-Readable YAML Structure**

Each test case includes:
- **Identification:** id, title, feature, description
- **Classification:** tags, priority, environment
- **Setup:** authentication, preconditions, testData
- **Specification:** request (method, endpoint, headers, body), response (status, schema, error scenarios)
- **Validation:** assertions, cleanup instructions
- **Traceability:** references to source documentation

### 4. **Organized Folder Structure**

```
artifacts/api/p-tlocaltransferdddapispecv1/
├── getptmaintenancetransferinit/
│   ├── _index.yaml                              # Summary of all scenarios
│   ├── GetPTMaintenanceTransferInit-001-positive.yaml
│   ├── GetPTMaintenanceTransferInit-002-missing-auth.yaml
│   ├── GetPTMaintenanceTransferInit-003-invalid-auth.yaml
│   ├── GetPTMaintenanceTransferInit-004-invalid-content-type.yaml
│   ├── GetPTMaintenanceTransferInit-005-duplicate-correlation-id.yaml
│   ├── GetPTMaintenanceTransferInit-006-request-timeout.yaml
│   └── GetPTMaintenanceTransferInit-007-empty-request-body.yaml
├── getsourceaccountlist/
│   └── ... (same 8-file structure)
└── initiateintratransfer/
    └── ... (same 8-file structure)
```

### 5. **Comprehensive Test Scenario Coverage**

**Positive Scenario (Happy Path):**
- Valid API call with all required headers
- Expected 200 response with success message

**Negative Scenarios (3 total):**
1. Missing authentication headers → 401
2. Invalid authentication token → 401
3. Invalid Content-Type header → 400

**Edge Cases (3 total):**
1. Duplicate correlation ID (idempotency)
2. Request timeout (504 Gateway Timeout)
3. Empty/malformed request body (400 Bad Request)

## Technical Implementation

### New Services Created

1. **ApiSpecSheetParserService** (`src/services/parser/`)
   - Reads API spec Excel sheets
   - Extracts metadata (API name, method, URL, etc.)
   - Parses request headers and body fields
   - Parses response fields and structure
   - Handles hierarchical field parsing with parent-child relationships

2. **BddYamlTestCaseGeneratorService** (`src/services/output/`)
   - Generates 7 test scenarios per endpoint
   - Creates YAML files with business-friendly language
   - Generates index files for scenario summaries
   - Produces human-readable headers with purpose statements

3. **bddGenCommand** (`src/cli/commands/`)
   - CLI interface for single sheet generation
   - Input validation with Zod
   - Orchestrates parsing and generation
   - Provides detailed logging and feedback

### Utilities Created

- **batch-bdd-gen.mjs** (`scripts/`)
  - Batch processing script for all APIs
  - Optional sheet filtering with `--skip-sheets`
  - Sequential processing to avoid resource conflicts
  - Detailed summary reporting

## File Examples

### Positive Test Case (Happy Path)
```yaml
id: GetPTMaintenanceTransferInit-001-positive
title: GET /init - Happy Path
priority: P1
tags: [positive, smoke, regression]
authentication: OAuth2
request:
  method: GET
  endpoint: /init
  headers:
    Authorization: Bearer <token>
    X-Correlation-Id: test-correlation-id-1782991492319
response:
  successStatusCode: 200
  schema: { transferModes: Array, recurringOptions: Object }
assertions:
  - Response status code is 200
  - Response body schema matches specification
  - All mandatory response fields are present
```

### Negative Test Case (Missing Auth)
```yaml
id: GetPTMaintenanceTransferInit-002-missing-auth
title: GET /init - Missing Authentication
priority: P2
tags: [negative, authentication, security]
description: Request without authentication credentials should fail
request:
  headers: {}  # No auth
response:
  successStatusCode: 401
  schema: { error: string, message: string }
assertions:
  - Response status code is 401
  - Error message indicates missing authentication
```

### Edge Case (Idempotency)
```yaml
id: InitiateIntraTransfer-005-duplicate-correlation-id
title: POST /initiate - Duplicate Correlation ID
tags: [edge-case, idempotency]
preconditions:
  - First request with correlation ID has been processed
description: Same request with duplicate correlation ID should be idempotent
request:
  headers:
    X-Correlation-Id: duplicate-correlation-123
assertions:
  - Response status code is 200 (or 202 for idempotent)
  - Same response as first request
  - No duplicate processing occurred
```

## Usage Workflows

### For Manual QA Testing
1. Generate YAML for all APIs: `node scripts/batch-bdd-gen.mjs`
2. Export scenarios to test management tool (TestRail, Zephyr, etc.)
3. QA executes scenarios manually
4. Results tracked in test management system

### For Test Automation
1. Parse generated YAML with test automation framework
2. Generate Playwright, REST-assured, or Postman tests
3. Maintain single source of truth (the YAML)
4. Run tests in CI/CD pipeline

### For BDD/Gherkin Workflows
1. Convert YAML scenarios to Gherkin syntax
2. Feed into Cucumber or SpecFlow
3. Create executable specifications
4. Share with business stakeholders

### For Documentation
1. Include YAML files in API documentation
2. Create audit trails of test coverage
3. Release notes showing test scenarios covered
4. Stakeholder communication of quality assurance

## How To Use

### Quick Start

1. Place API spec file in `input/api/`:
   ```bash
   input/api/P&T_Local_Transfer_DDD_API_Spec_v1.xlsx
   ```

2. Generate test cases for one endpoint:
   ```bash
   npm run dev -- bdd-gen --input "input/api/P&T_Local_Transfer_DDD_API_Spec_v1.xlsx" --sheet "GetPTMaintenanceTransferInit" --outDir ./artifacts
   ```

3. Or generate for all endpoints at once:
   ```bash
   node scripts/batch-bdd-gen.mjs --input "input/api/P&T_Local_Transfer_DDD_API_Spec_v1.xlsx" --outDir ./artifacts
   ```

4. Review generated YAML files in:
   ```bash
   artifacts/p-tlocaltransferdddapispecv1/[api-name]/
   ```

### Command Options

**Single Endpoint:**
```bash
npm run dev -- bdd-gen \
  --input <path>        # Excel spec file (required)
  --sheet <name>        # Sheet name (required)
  --outDir <dir>        # Output directory (default: ./artifacts)
```

**Batch All Endpoints:**
```bash
node scripts/batch-bdd-gen.mjs \
  --input <path>            # Excel spec file (required)
  --outDir <dir>            # Output directory (default: ./artifacts)
  --skip-sheets sheet1,sheet2 # Comma-separated sheet names to skip (optional)
```

## Generated Artifacts (Current Run)

Successfully generated test cases for:
- ✅ GetPTMaintenanceTransferInit (GET)
- ✅ GetSourceAccountList (GET)
- ✅ InitiateIntraTransfer (POST)

**Total Files:**
- 24 YAML test case files (8 per endpoint)
- 3 index files (1 per endpoint)
- All organized in feature-name/api-name hierarchy

## Next Steps (Optional)

1. **Generate for All 18 APIs** in P&T spec workbook
2. **Import YAML to Test Management Tool** (TestRail, Zephyr, etc.)
3. **Convert to Gherkin** for BDD/Cucumber workflows
4. **Set Up Test Automation** to consume YAML and generate test code
5. **CI/CD Integration** to run automated tests on every commit

## Documentation

Full usage guide available in: [HOW_TO_USE.md](./docs/HOW_TO_USE.md)

Sections included:
- Prerequisites and setup
- Single endpoint generation
- Batch generation
- Output structure explanation
- YAML file structure breakdown
- Use cases for different teams (QA, BA, Automation, etc.)
- Troubleshooting tips

---

**Status:** ✨ Complete and Ready for Production Use

The BDD YAML test case generator is fully functional and ready to generate comprehensive, business-readable test specifications for your API endpoints!
