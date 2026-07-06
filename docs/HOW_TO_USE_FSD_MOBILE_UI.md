# FSD Mobile UI Workflow - How To Use

## Audience

This guide is for users working with non-API FSD files (mobile UI and business flow content), especially:

1. QA engineers
2. Business analysts
3. Product owners
4. Automation engineers

## Scope

Use this guide when your source file is a functional specification workbook in input and not an API specification workbook.

Examples:

1. input/FSD_ETB_Onboarding_v2.0@20260415.xlsx
2. input/FSD_Local_Transfer_v2.0@20260612.xlsx

Do not use this flow for API spec files under input/api.

## What this flow does

The run command executes the full FSD pipeline:

1. Parse workbook into normalized feature models
2. Generate markdown artifacts
3. Generate json artifacts
4. Generate requirement analysis
5. Generate test-layer classification
6. Generate test-case bundles
7. Generate Playwright automation scaffolding (UI-focused templates)

## Prerequisites

1. Node.js 20+
2. npm

Install dependencies once:

    npm install

## Input placement

Place non-API FSD workbooks under input.

Recommended convention:

1. Keep one workbook per feature or release
2. Use descriptive file names with version/date

## Run the mobile UI FSD flow

Run one workbook:

    npm run dev -- run --input ./input/FSD_ETB_Onboarding_v2.0@20260415.xlsx --outDir ./artifacts

Run another workbook:

    npm run dev -- run --input ./input/FSD_Local_Transfer_v2.0@20260612.xlsx --outDir ./artifacts

## Output structure

Each run is namespaced by input file name so outputs do not overlap.

Example namespace:

1. artifacts/fsd-etb-onboarding-v2-0-20260415/

Within each namespace:

1. markdown/
2. json/
3. analysis/
4. classification/
5. test-cases/
6. playwright/

## How QA users should consume outputs

### 1) Start with analysis

Review analysis files to identify unclear requirements and missing validations.

Analysis outputs are generated in both machine and human-readable formats:

1. *.analysis.json
2. *.analysis.md

Location:

1. artifacts/<namespace>/analysis/

### 2) Review classification

Confirm whether each scenario is unit, integration, or e2e candidate.

Classification outputs are generated in both machine and human-readable formats:

1. *.classification.json
2. *.classification.md

Location:

1. artifacts/<namespace>/classification/

### 3) Validate test-cases

Use generated test-cases for manual review and traceability before implementation.

Location:

1. artifacts/<namespace>/test-cases/

### 4) Inspect Playwright scaffolding

The pipeline generates UI-oriented scaffolding:

1. tests/
2. page-objects/
3. fixtures/
4. helpers/
5. data/

Location:

1. artifacts/<namespace>/playwright/

## Notes on Playwright output

Generated Playwright files are scaffolds and may contain placeholders.

Typical next actions for automation engineers:

1. Replace placeholder selectors with real locators
2. Replace generic navigation with actual app routes/screens
3. Enrich assertions for business-critical behavior
4. Add stable test data and fixtures per environment

## Suggested team workflow

1. BA updates FSD workbook
2. QA runs pipeline with run command
3. QA and BA review analysis and test-cases together
4. Automation engineer hardens generated Playwright scaffolding
5. Team executes smoke/regression on target environment

## Troubleshooting

### Input file not found

1. Verify exact file path in --input
2. Confirm file exists under input

### Workbook parsed but outputs look incomplete

1. Check section naming consistency in workbook
2. Ensure workbook is not protected
3. Ensure required feature sections are present in sheets

### Old or mixed artifacts

1. Outputs are namespaced by input file name
2. Compare by namespace instead of mixing root folders

## Commands for maintainers

Type checks:

    npm run lint:types

Unit tests:

    npm test

## Related documentation

1. docs/HOW_TO_USE.md (API YAML generation and API test runner)
2. docs/BDD_YAML_IMPLEMENTATION.md (API BDD YAML implementation details)
3. README.md (project overview)