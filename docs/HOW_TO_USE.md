# FSD Parser Framework - How To Use

## Audience

This guide is for:

1. QA engineers
2. Business analysts
3. Product owners
4. Automation engineers

It explains how to use the framework from Excel/API spec input to executable API test runs using generated Business YAML.

## What the framework provides

The framework supports two major usage flows:

1. FSD workbook pipeline:
  - Parse FSD workbook
  - Generate markdown/json/analysis/classification/test-cases/playwright artifacts
  - Analysis and classification are emitted as both JSON and Markdown files for machine + human use

2. API spec to Business YAML to execution flow:
  - Generate BDD YAML from API spec workbook
  - Execute YAML tests directly with the built-in API runner

## Prerequisites

1. Node.js 20+
2. npm
3. A local mock endpoint (recommended for SIT dry runs), e.g. Mockoon on http://localhost:3000

Install dependencies:

```bash
npm install
```

## Project structure you will use most

1. Input files:
  - input/
  - input/api/

2. API YAML outputs:
  - artifacts/api/<feature>/<api-name>/*.yaml

3. Main commands are defined in:
  - src/cli/program.ts

## Quick start for QA users

### Step 1: Generate Business YAML from API spec

Single API sheet:

```bash
npm run dev -- bdd-gen --input "input/api/P&T_Local_Transfer_DDD_API_Spec_v1.xlsx" --sheet "GetPTMaintenanceTransferInit" --outDir ./artifacts
```

Batch all API sheets:

```bash
node scripts/batch-bdd-gen.mjs --input "input/api/P&T_Local_Transfer_DDD_API_Spec_v1.xlsx" --outDir ./artifacts
```

### Step 2: Run tests directly from YAML

Run one YAML file:

```bash
npm run dev -- api-test-run --file "artifacts/api/p-tlocaltransferdddapispecv1/getptmaintenancetransferinit/GetPTMaintenanceTransferInit-001-positive.yaml" --baseUrl "http://localhost:3000"
```

Run by API name:

```bash
npm run dev -- api-test-run --api "getptmaintenancetransferinit" --baseUrl "http://localhost:3000"
```

Run by feature:

```bash
npm run dev -- api-test-run --feature "p-tlocaltransferdddapispecv1" --baseUrl "http://localhost:3000"
```

Run by test case id:

```bash
npm run dev -- api-test-run --id "GetPTMaintenanceTransferInit-001-positive" --baseUrl "http://localhost:3000"
```

## Command reference

### Command: run

Purpose: End-to-end FSD pipeline.

```bash
npm run dev -- run --input ./input/FSD_Local_Transfer_v2.0@20260612.xlsx --outDir ./artifacts
```

### Command: bdd-gen

Purpose: Generate 1 positive + negative + edge scenarios for one API sheet.

Required options:

1. --input
2. --sheet

Optional:

1. --outDir (default ./artifacts)

### Command: api-test-run

Purpose: Execute API tests from generated YAML files.

Options:

1. --file <path>
2. --inputDir <path> (default ./artifacts/api)
3. --feature <name>
4. --api <name>
5. --id <test-id>
6. --baseUrl <url>
7. --timeoutMs <ms> (default 15000)
8. --failFast

## How YAML execution works

For each YAML test case:

1. Reads request.method and request.url/request.endpoint
2. If --baseUrl is provided, host is replaced but endpoint path is kept
3. Sends HTTP request with headers and body
4. Evaluates assertions:
  - status
  - field-exists
  - field-type
  - field-mandatory
  - field-value
  - constraint (currently informational)
  - custom (currently informational)

## Best practice for mock endpoints

1. Ensure Mockoon route method and path exactly match YAML request method/path.
2. Prefer matching YAML path exactly instead of changing YAML manually.
3. Keep mock payload types aligned with YAML expected field types.

Example:

If YAML expects:

1. status: String

Mock response should use:

1. "status": "SUCCESS"

Not:

1. "status": 200

## Business-friendly testing workflow

Recommended weekly cycle:

1. BA updates API spec workbook
2. QA regenerates YAML via bdd-gen or batch script
3. QA executes smoke by API name using api-test-run
4. QA executes regression by feature using api-test-run
5. QA shares pass/fail summary with business users

## Output interpretation

Runner output format:

1. [PASS] or [FAIL]
2. Test case id
3. Method and resolved URL
4. HTTP status code
5. Failed assertion details
6. Execution summary

## Known behavior notes

1. For GET requests, invalid Content-Type is usually not a strong validation scenario unless gateway rules enforce it.
2. custom assertions are currently placeholders and should be implemented project-specifically if strict validation is needed.
3. There is currently no persisted report file (JSON/HTML/JUnit) for api-test-run; output is console summary.

## Troubleshooting

### 404 on api-test-run

Cause: Mock route path mismatch.

Fix:

1. Compare runner printed URL with your mock route
2. Update mock route to exact path and method

### Type assertion failures

Cause: Response payload type does not match YAML type.

Fix:

1. Align mock payload types with YAML expected types
2. Regenerate YAML if API contract changed

### No tests selected

Cause: filter mismatch for --feature/--api/--id.

Fix:

1. Check feature/id values in YAML files
2. Use a broader filter first, then narrow down

## Validation commands for maintainers

```bash
npm run lint:types
npm test
```

## Related docs

1. docs/BDD_YAML_IMPLEMENTATION.md
2. README.md
