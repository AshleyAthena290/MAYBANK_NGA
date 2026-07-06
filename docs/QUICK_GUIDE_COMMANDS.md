# Quick Guide - Commands for FSD Parser and API Parser

This is a fast command reference for daily usage.

## 1) One-time setup

    npm install

## 2) FSD Parser (non-API workbooks under input)

Use this flow for mobile UI and functional FSD files.

Run full pipeline for one FSD workbook:

    npm run dev -- run --input ./input/FSD_ETB_Onboarding_v2.0@20260415.xlsx --outDir ./artifacts

Another example:

    npm run dev -- run --input ./input/FSD_Local_Transfer_v2.0@20260612.xlsx --outDir ./artifacts

What it generates under a namespaced folder:

1. markdown
2. json
3. analysis (both *.analysis.json and *.analysis.md)
4. classification (both *.classification.json and *.classification.md)
5. test-cases
6. playwright scaffolding

## 3) API Parser - Generate API YAML

Use this flow for API spec workbooks under input/api.

### 3.1 Parse full API workbook into business YAML scenarios

    npm run dev -- api-spec --input "input/api/P&T_Local_Transfer_DDD_API_Spec_v1.xlsx" --outDir ./artifacts

### 3.2 Parse one API sheet into comprehensive YAML

    npm run dev -- api-spec-sheet --input "input/api/P&T_Local_Transfer_DDD_API_Spec_v1.xlsx" --sheet "GetPTMaintenanceTransferInit" --outDir ./artifacts

### 3.3 Generate BDD YAML test cases for one API sheet

    npm run dev -- bdd-gen --input "input/api/P&T_Local_Transfer_DDD_API_Spec_v1.xlsx" --sheet "GetPTMaintenanceTransferInit" --outDir ./artifacts

### 3.4 Batch BDD YAML generation for all API sheets

    node scripts/batch-bdd-gen.mjs --input "input/api/P&T_Local_Transfer_DDD_API_Spec_v1.xlsx" --outDir ./artifacts

## 4) API Test Runner - Execute generated YAML directly

Run a single YAML test file:

    npm run dev -- api-test-run --file "artifacts/api/p-tlocaltransferdddapispecv1/getptmaintenancetransferinit/GetPTMaintenanceTransferInit-001-positive.yaml" --baseUrl "http://localhost:3000"

Run by API name:

    npm run dev -- api-test-run --api "getptmaintenancetransferinit" --baseUrl "http://localhost:3000"

Run by feature:

    npm run dev -- api-test-run --feature "p-tlocaltransferdddapispecv1" --baseUrl "http://localhost:3000"

Run by test case id:

    npm run dev -- api-test-run --id "GetPTMaintenanceTransferInit-001-positive" --baseUrl "http://localhost:3000"

Run by folder:

    npm run dev -- api-test-run --inputDir "./artifacts/api" --baseUrl "http://localhost:3000"

Optional controls:

1. Add --timeoutMs 30000 to increase timeout
2. Add --failFast to stop at first failure

## 5) Validation and checks

Type check:

    npm run lint:types

Run unit tests:

    npm test

Build:

    npm run build

## 6) Typical day-to-day sequence

1. Generate from source workbook
2. Inspect YAML output
3. Run API tests against mock or target base URL
4. Review pass/fail summary
5. Re-run filtered by API or feature after fixes

## 7) Quick troubleshooting

404 during api-test-run:

1. Check printed URL in runner output
2. Ensure mock route method and path match exactly

No tests selected:

1. Check --api, --feature, --id values
2. Try broad run with --inputDir first

Type assertion failures:

1. Align mock payload value types to YAML expected field types
