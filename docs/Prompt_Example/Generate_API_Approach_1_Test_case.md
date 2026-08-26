You are a QA/API Test Engineer. Using the generated API test-case YAML files, generate a complete Excel workbook of API Validation Test Cases.

CONTEXT:

- Scope: Validate all APIs defined in this DDD, including endpoints, request/response schemas, 
   field-level validations, business rules, error handling, and status codes described in the document.
- Primary generated-test-case input folder:
   `MAYBANK_NGA\\artifacts\\api\\Latest-Batch-1\\depmaintenancengaapiappdashboarddesignv12\\`
- Excel test-case output folder:
   `MAYBANK_NGA\\artifacts\\api\\Latest-Batch-1\\depmaintenancengaapiappdashboarddesignv12\\test cases\\`
- Read the YAML files recursively from this folder. Each immediate subfolder represents one API,
   and each API folder contains the YAML scenarios generated for that API.
- Read only the existing YAML folders and files inside the generated API folders as input. Do not read
   the `test cases` output folder as YAML input.
- Treat the YAML input directory and every YAML file inside it as read-only.
- Do not create, generate, regenerate, modify, overwrite, rename, move, or delete any YAML file or YAML folder.
- Do not run the BDD YAML generator, batch BDD generator, or any command that produces YAML files.
- Do not create missing YAML files. If an API folder or YAML scenario is missing, continue using the
   available YAML files and record the missing item as an `Assumption` or reconciliation note in the workbook.
- Treat the scenario YAML files as the primary source for the Excel test-case rows. Use the DDD as
   the supporting source for validation rules, endpoint details, business context, and assumptions.
- Ignore `_index.yaml` when creating test-case rows because it is an API scenario index, not an executable test case. Include its scenario count or metadata only when useful for reconciliation.
- Generate a business-readable Excel workbook containing the test cases. Do not generate only a narrative,
  markdown table, or YAML files.
- Preserve traceability from every test case to its API endpoint, source worksheet, and source DDD file.

EXPECTED YAML INPUT STRUCTURE:

```text
MAYBANK_NGA\\artifacts\\api\\Latest-Batch-1\\depmaintenancengaapiappdashboarddesignv12\\
├── <api-folder-1>\\
│   ├── _index.yaml
│   ├── <api-name>-001-positive.yaml
│   ├── <api-name>-002-missing-auth.yaml
│   ├── <api-name>-003-invalid-auth.yaml
│   └── ... boundary and edge-case YAML files
├── <api-folder-2>\\
│   └── ...
└── <api-folder-n>\\
      └── ...
```

EXPECTED OUTPUT LOCATION:

```text
MAYBANK_NGA\\artifacts\\api\\Latest-Batch-1\\depmaintenancengaapiappdashboarddesignv12\\
└── test cases\\
   └── DEP_Maintenance_NGA_API_App_Dashboard_Design_v1.2.xlsx
```

Save the completed Excel workbook inside the `test cases` folder. Create the folder if it does not
already exist. Do not save the workbook beside the YAML API folders or overwrite any generated YAML files.
The Excel workbook is the only file this task is allowed to create or modify.

For each executable YAML scenario, map the fields as follows:
- YAML `id` -> Excel `Test Case ID`.
- YAML `title` -> Excel `Test Case Title`.
- YAML `tags` -> Excel `Test Type` and `Test Category`; classify `positive`, `negative`, `boundary`,
   and `edge-case` consistently.
- YAML `request.method` -> Excel `HTTP Method`.
- YAML `request.url` or `request.endpoint` -> Excel `Endpoint`.
- YAML `preconditions` -> Excel `Pre-conditions`.
- YAML request headers, path parameters, query parameters, and body -> Excel `Input Data`.
- YAML `assertions`, `response.successStatusCode`, `response.schema`, `response.expectedFields`,
   and `response.errorScenarios` -> Excel `Expected Result`.
- YAML `priority` -> Excel `Priority`, converting `P1` to High, `P2` to Medium, and `P3` to Low.
- YAML `references.sourceWorksheet` and `references.apiSpecFile` -> preserve as traceability in the
   relevant worksheet or workbook metadata.

OUTPUT STRUCTURE (please follow exactly):

1. TEST SUMMARY
   - Total number of APIs covered
   - Total number of test cases, including positive, negative, boundary, and edge/resilience cases
   - Breakdown by test type and category
   - List of APIs/endpoints identified from the DDD
   - Key validation areas covered (e.g., field validation, authentication, business logic, 
     data type checks, boundary conditions, error handling)
   - Any assumptions made where the DDD is ambiguous or incomplete

2. EXCEL TEST CASE WORKBOOK
    Generate one `.xlsx` workbook using this exact worksheet structure:

    - `Summary`: overall report title, generated date, total API count, total test-case count,
       positive count, negative count, boundary count, edge/resilience count, and API inventory.
    - `Validation Areas`: key validation areas covered, including field validation, authentication,
       authorization, business rules, data types, boundary conditions, error handling, security,
       HTTP protocol, and rate limiting/performance where applicable.
    - One worksheet for EACH API/endpoint identified in the DDD.
    - `All Test Cases`: a combined worksheet containing every test case from every API.

    Each API worksheet and the `All Test Cases` worksheet must use these columns in this order:

    | Test Case ID | Test Case Title | Test Type | Test Category | HTTP Method | Endpoint | Pre-conditions | Test Steps | Input Data | Expected Result | Priority |
    |---|---|---|---|---|---|---|---|---|---|---|

    Column requirements:
    - `Test Case ID`: unique and stable, for example `TC_API01_001`.
    - `Test Case Title`: clear, specific scenario title.
    - `Test Type`: `Positive`, `Negative`, `Boundary`, or `Edge/Resilience`.
    - `Test Category`: for example `Field Validation`, `Data Type Validation`, `Authentication`,
       `Authorization`, `Business Rule`, `Boundary Testing`, `Format Validation`, `Security`,
       `Error Handling`, `HTTP Protocol`, or `Rate Limiting`.
    - `HTTP Method` and `Endpoint`: copied from the DDD where defined.
    - `Pre-conditions`: required users, tokens, accounts, records, permissions, and environment setup.
    - `Test Steps`: numbered, sequential, and executable steps.
    - `Input Data`: sample JSON request payload, headers, query parameters, or path parameters where applicable.
    - `Expected Result`: specific expected HTTP status code, response fields, error code, and error message;
       do not use vague wording.
    - `Priority`: `High`, `Medium`, or `Low`.

    Excel formatting requirements:
    - Use a clear title and professional formatting on every worksheet.
    - Use dark-blue header cells with white bold text.
    - Enable text wrapping for long steps, input data, and expected results.
    - Freeze the header row on API and `All Test Cases` worksheets.
    - Set readable column widths and row heights.
    - Apply color coding to priority values.
    - Keep the workbook usable for manual execution, including space for testers to record results,
       comments, or defect references if those columns are added by the project convention.

REQUIREMENTS FOR TEST CASE COVERAGE:
Positive test cases:
   - Valid request with all mandatory fields
   - Valid request with optional fields included
   - Valid boundary values (min/max length, min/max numeric range)
   - Valid data type formats as per DDD spec

Negative test cases:
   - Missing mandatory fields
   - Invalid data types (e.g., string in numeric field)
   - Invalid formats (e.g., wrong date format, invalid email)
   - Out-of-range / boundary violations (below min, above max)
   - Invalid/expired/missing authentication token
   - Duplicate record submission (if applicable)
   - Invalid enum/status values
   - Special characters/SQL injection/XSS payloads in input fields
   - Empty payload / malformed JSON
   - Unauthorized access / incorrect role permissions
   - Incorrect HTTP method usage
   - Rate limiting / throttling behavior (if defined in DDD)

Boundary test cases:
   - Required field set to null
   - Required field omitted from the request
   - Minimum numeric value and maximum numeric value, including below-minimum and above-maximum violations
   - Minimum string length and maximum string length, including one character below and above the limit
   - Invalid enum value
   - Invalid format value, such as an invalid date, email, identifier, or code format

Edge and resilience test cases:
   - Duplicate correlation or idempotency key, if applicable
   - Request timeout or downstream failure behavior, if applicable
   - Empty or malformed request body

For every boundary, format, enum, or business-rule scenario, use the exact rule and value from the DDD
when available. If the DDD does not define the rule, value, limit, or expected status code, mark the
field as `Assumption` in the description or assertion and do not present the value as DDD-confirmed.

FORMAT:
- Present the Test Summary first in the `Summary` worksheet, then detailed test cases grouped by API/endpoint
   in the API worksheets and repeated in `All Test Cases`.
- Generate only the final `.xlsx` Excel workbook and save it under:
   `MAYBANK_NGA\\artifacts\\api\\Latest-Batch-1\\depmaintenancengaapiappdashboarddesignv12\\test cases\\`.
- Do not output YAML, Markdown, JSON, CSV, scripts, or any other generated file.
- Keep language clear and testable; avoid vague expected results.
- Include the expected HTTP status code and response body or error fields for every scenario.
- Use consistent test types and categories: `Positive`, `Negative`, `Boundary`, and `Edge/Resilience`.
- If any validation rule is not explicitly stated in the DDD, flag it as `Assumption` rather
   than guessing silently.

Please recursively read only the existing generated YAML files from the specified input folder, reconcile
their contents with the attached DDD where available, and generate only the Excel workbook now. Do not
generate or change any YAML files, including when scenarios or API folders are missing.