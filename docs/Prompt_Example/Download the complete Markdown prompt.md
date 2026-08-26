# Prompt: Link ECLIPSE DDD API Designs to NGA Batch 1 QA Test Cases with Common API Fallback

## Role

You are a senior QA analyst, API test specialist, and Excel traceability expert.

Your task is to update an existing QA test workbook by linking each applicable test case to the relevant ECLIPSE API specification. Use the listed Account Dashboard and Maintenance DDD API Design workbooks as the primary sources. Use the Dashboard Common API Design workbook only when the required API information cannot be found in the primary sources.

Do not overwrite the original input files. Create a new output workbook.

---

## Input Files

You will receive the QA workbook, the primary API source workbooks, and the fallback API source workbook:

1. **QA test workbook**
   - Expected filename: `input/Journey_Test_cases/Finance and Non Financing Dashboard.xlsx`
   - Contains a worksheet named `Test Cases`.
   - May also contain `README`, `Coverage Summary`, `Test Scenarios`, `Open Questions`, and requirement-source worksheets.

2. **Primary API source**
   Use these DDD API Design workbooks as the authoritative primary sources, selecting the source that matches the test case journey or feature:
   - Expected filename: `ECLIPSE_Account Dashboard_Credit_Card_DDD_API_Design_v1_Workshop.xlsx`
   - Expected filename: `ECLIPSE_Account Dashboard_Debit_Card_DDD_API_Design_v1_Workshop (1).xlsx`
   - Expected filename: `ECLIPSE_Account Dashboard_Insurance_DDD_API_Design_v1_Workshop.xlsx`
   - Expected filename: `ECLIPSE_Account Dashboard_Loan_DDD_API_Design_v1_Workshop.xlsx`
   - Expected filename: `ECLIPSE_Account Dashboard_Casa_DDD_API_Design_v1_Workshop.xlsx`
   - Expected filename: `ECLIPSE_Maintenance_DDD_API_Design_v1.xlsx`
   - Search all applicable primary source workbooks before using the fallback source.

3. **Fallback API source**
   - Expected filename: `ECLIPSE_Dashboard_Common_DDD_API_Design_v1_Workshop.xlsx`
   - Use this workbook only when applicable information is not available in any primary DDD API Design workbook.

If filenames differ slightly, identify the files by their content and purpose rather than refusing the task.

---

## Primary Objective

Create a new Excel workbook that preserves the QA workbook and adds API traceability to the `Test Cases` sheet.

The mapping priority must be:

1. Search the applicable **Account Dashboard or Maintenance DDD API Design workbooks** first.
2. If a suitable mapping is found, use it and label the source with the applicable primary API design, such as `Loan API Design`, `Credit Card API Design`, `Debit Card API Design`, `Insurance API Design`, `Casa API Design`, or `Maintenance API Design`.
3. If no suitable information is found in the primary sources, search the **Dashboard Common API Design workbook**.
4. If a suitable fallback mapping is found, use it and label the source as `Common API Design (Fallback)`.
5. If neither the primary sources nor the fallback workbook contains a defensible mapping, label the test case as `Not Mapped`.
6. Never invent an API, endpoint, method, field, ownership value, or source reference.

---

## Scope and Mapping Principles

### A. Loan-specific cases

For test cases related to Personal Loan, Shariah Personal Loan, Auto Loan, Shariah Auto Loan, Mortgage Loan, or Shariah Mortgage Loan, prioritize the Loan DDD API Design workbook.

Typical loan-specific mappings may include:

- Loan dashboard landing or listing
- Loan transaction history
- View all loan transactions
- Search loan transactions
- Filter loan transactions
- Export loan transaction history or statements
- Loan detail and summary
- Add loan nickname
- Update loan nickname
- Delete loan nickname
- Loan dashboard CMS configuration
- Loan dashboard translation or i18n configuration

### B. Common or cross-journey cases

Use the Common API Design workbook as fallback for functions not defined in the applicable primary DDD API Design workbooks, such as:

- General account dashboard aggregation
- App banking dashboard aggregation
- Common account listing
- Common account details
- Generic transaction history
- Generic transaction search
- Statement export
- Receipt retrieval
- Set or get primary account
- Common nickname maintenance
- Customer information and profile APIs
- Customer holdings
- Customer identifier resolution
- Post-transaction processing
- Beneficiary post-transaction processing
- PFM or categorisation processing

### C. Cases that may remain unmapped

Do not force an API mapping for cases that are only about:

- UI layout or visual presentation with no documented API dependency
- Copywriting or static labels without a documented CMS or API source
- Manual operational procedures
- Pure authentication behaviour where no relevant API is defined in either source workbook
- Device or OS behaviour
- Business rules with no documented API interaction
- Notifications when no notification API is documented
- External journeys outside the supplied API specifications
- Requirements awaiting PO or BA clarification

For these cases, use `Not Mapped` and explain why in the mapping rationale.

---

## Required Analysis Process

### Step 1: Inspect all workbooks

- Identify all worksheet names.
- Confirm that the QA workbook contains `Test Cases`.
- Inspect the headers and data structure of the `Test Cases` sheet.
- Inspect the loan API index and detailed loan journey sheets.
- Inspect the common API index and detailed API sheets.
- Preserve all existing worksheets, formulas, formatting, filters, data validations, hyperlinks, execution results, and comments where possible.

### Step 2: Build an API inventory

Build a structured inventory from all primary DDD API Design workbooks and the fallback API workbook.

For every API, capture where available:

- API name
- HTTP method
- Endpoint or URL
- Microservice ownership
- Journey or feature
- Source workbook
- Source worksheet
- Source cell or range
- API status
- Remarks
- Request parameters
- Mandatory headers
- Response fields
- Validation rules
- Known limitations or pending discussions

Maintain the source priority in the inventory, with all primary DDD API Design workbooks before the fallback source:

- `Credit Card API Design`, `Debit Card API Design`, `Insurance API Design`, `Loan API Design`, `Casa API Design`, or `Maintenance API Design`
- `Common API Design (Fallback)`

Do not merge two APIs merely because they have similar names. Treat differing methods or endpoints as separate API definitions.

### Step 3: Interpret each test case

For each row in `Test Cases`, assess at least:

- Module
- Journey
- Test Case Title
- Test Type
- Preconditions
- Test Data or Variants
- Test Steps
- Expected Result
- Existing Source Reference
- Authentication Requirement
- Possible Final Status
- Notes

Determine the user action, system behaviour, data requirement, and likely integration dependency.

### Step 4: Perform primary-source-first mapping

For each test case:

1. Search for a direct match in the applicable primary DDD API Design workbook.
2. Prefer exact journey and action matches over keyword-only matches.
3. Check the detailed API sheet, not only the API index.
4. Map all APIs genuinely required by the test case when multiple API calls are documented.
5. If no applicable primary API is found, search the Common API Design workbook.
6. Use fallback APIs only when none of the primary DDD API Design workbooks contains the needed information.
7. If no reliable mapping exists, mark the case `Not Mapped`.

### Step 5: Assign mapping confidence

Use these values:

- `High`: Exact journey, action, method, and endpoint match from the API specification.
- `Medium`: Strong functional match, but the relationship is inferred from the journey or a common API fallback.
- `Low`: Partial match that requires BA, API owner, or developer confirmation.
- `Not Mapped`: No defensible API relationship exists in either supplied API workbook.

Do not label a fallback mapping as High unless the common specification explicitly states that it is used by the exact journey and action.

---

## Required Updates to the `Test Cases` Sheet

Append the following columns to the right of the existing columns. Do not delete or rename existing columns.

1. `API Source Priority`
2. `API Name`
3. `HTTP Method`
4. `Endpoint`
5. `Microservice Ownership`
6. `API Source Workbook`
7. `API Source Sheet`
8. `API Source Reference`
9. `Traceability Link`
10. `Mapping Rationale`
11. `Mapping Confidence`
12. `API Validation / Notes`

### Column rules

#### API Source Priority

Allowed values:

- `Loan API Design`
- `Common API Design (Fallback)`
- `Mixed: Loan Primary + Common Fallback`
- `Not Mapped`

#### API Name, HTTP Method, Endpoint, and Ownership

- If one API applies, enter one value.
- If multiple APIs apply, list them in the same order and separate them consistently using line breaks or semicolons.
- Keep API name, method, endpoint, ownership, source sheet, and traceability link aligned in the same sequence.

#### API Source Workbook

Use the actual filename for each source.

#### API Source Sheet

Use the exact worksheet name from the source workbook.

#### API Source Reference

Include a useful source cell or range when it can be determined, for example:

```text
API_Specs_Index!C2:H11
```

or

```text
1.2.1 View All Trans!A1:O4
```

#### Traceability Link

Create an internal Excel hyperlink to the matching row in the new `ECLIPSE API Catalog` sheet.

If multiple APIs are mapped, link to the primary API and list the remaining catalog references in the cell text or notes.

#### Mapping Rationale

Write a short, specific explanation, such as:

```text
Mapped to the loan transaction-history API because the test validates retrieval of transactions for a selected personal loan account.
```

Avoid vague explanations such as `Relevant API`.

#### API Validation / Notes

Capture specification facts that affect testing, including:

- Mandatory path or query parameters
- Account ownership validation
- Date format requirements
- Pagination limits
- Minimum search keyword length
- Feature flag dependencies
- ESB specification pending status
- Missing fields under discussion
- Expected empty-state behaviour
- Closed-account conditions
- Common fallback reason
- PO or BA clarification required

---

## Expected Loan-Specific Mapping Examples

Use the actual API names and endpoints found in the workbook. The following are examples of mapping intent, not permission to fabricate values.

### Loan dashboard landing

Potential dependencies:

- Loan dashboard aggregation or listing API
- Loan account summary API
- Account dashboard CMS module API
- Account dashboard i18n content API

Use CMS APIs only when the test case validates tab configuration, enablement, labels, translations, menu settings, or promotional content.

### Loan account transaction tab

Map to the documented loan transaction-history API when the test validates:

- Opening a loan account
- Default Transactions tab
- Latest transaction list
- Empty transaction state
- Closed-loan transaction behaviour

### View all transactions

Map according to the actual function being tested:

- Standard view-all transaction retrieval
- Search endpoint for keyword search
- Transaction endpoint for filters
- Statement or export endpoint for downloads

Do not map all four APIs to every View All Transactions case. Map only the API calls relevant to that test case.

### Loan summary

Map to the loan-detail API when validating fields such as:

- Remaining tenure
- Monthly instalment
- Next payment date
- Unpaid instalment
- Late fee or penalty
- Administration or provision fee
- Principal amount
- Interest or indicative rate
- Maturity date
- Auto-debit account

### Loan manage and nickname

Map based on the action:

- Add nickname to POST
- Update nickname to PATCH
- Delete nickname to DELETE

Do not map nickname APIs to a generic Manage-tab display test unless the test actually invokes or validates nickname functionality.

---

## New Worksheet: `ECLIPSE API Catalog`

Create a worksheet named `ECLIPSE API Catalog` containing one row per distinct API definition.

Recommended columns:

1. API ID
2. Source Priority
3. Journey / Feature
4. API Name
5. HTTP Method
6. Endpoint
7. Microservice Ownership
8. Source Workbook
9. Source Sheet
10. Source Reference
11. Status
12. Remarks / Limitations
13. Mapped Test Case Count

### Catalog requirements

- Put all primary DDD API Design records before Common fallback records.
- Use unique API IDs such as `API-001`, `API-002`, and so on.
- Do not duplicate an identical API from the same source.
- Preserve APIs with the same name when their endpoints or methods differ.
- Add a mapped-test-case count.
- Make the count or API ID link back to the `Test Cases` sheet if practical.

---

## New Worksheet: `API Link Summary`

Create a summary worksheet containing at least:

- Total test cases
- Test cases linked to one or more APIs
- Test cases mapped from Loan API Design
- Test cases mapped using Common API Design fallback
- Cases using both primary and fallback sources
- Unmapped test cases
- Overall API traceability percentage
- Mapping count by module
- Mapping count by API source priority
- Mapping count by confidence
- Top APIs by mapped test-case count

Use Excel formulas for calculated summary values when practical.

---

## README Update

Add an `API Traceability` section to the existing `README` sheet that explains:

- The applicable Account Dashboard or Maintenance DDD API Design workbook is the primary source.
- The Common API Design workbook is used only as fallback.
- Unmapped cases have no defensible API mapping in the supplied sources.
- Mapping confidence should be reviewed before execution or sign-off.
- Exact counts of primary, fallback, mixed, and unmapped test cases.

---

## Formatting Requirements

- Preserve the existing workbook's visual style where possible.
- Apply clear header formatting to new columns and worksheets.
- Freeze header rows.
- Enable filters on the complete `Test Cases` range, including the new columns.
- Wrap long text.
- Set readable column widths.
- Use professional colors consistently.
- Keep hyperlinks visibly formatted.
- Do not create excessively tall rows unless necessary.
- Ensure text does not spill into adjacent cells.
- Keep execution status dropdowns and existing conditional formatting intact.

---

## Data Integrity and Quality Rules

- Do not modify existing test-case IDs or scenario IDs.
- Do not remove test cases.
- Do not change execution results, actual results, defect IDs, or notes entered by users.
- Do not overwrite the source workbook.
- Do not invent missing API information.
- Do not silently treat a common API as a loan-specific API.
- Clearly label fallback mappings.
- Do not map APIs based only on one generic word such as `dashboard`, `manage`, or `final`.
- Confirm that the API function matches the test action and expected result.
- Where the source specification is pending or ambiguous, retain the mapping but lower confidence and note the issue.
- Verify that every mapped API has a valid catalog entry.
- Verify that every traceability hyperlink points to the correct catalog row.
- Verify that multi-API values are aligned in the same order across columns.
- Ensure there are no broken formulas or references.
- Ensure the final file opens correctly in Microsoft Excel.

---

## Output Filename

Save the completed workbook as:

```text
NGA_Batch1_QA_Test_Scenarios_and_Cases_4_Loan_API_Linked.xlsx
```

If that filename already exists, create a new version without overwriting it, for example:

```text
NGA_Batch1_QA_Test_Scenarios_and_Cases_4_Loan_API_Linked_v2.xlsx
```

---

## Required Completion Report

After creating the workbook, provide a concise completion report containing:

- Output filename
- Total number of test cases
- Number linked to each primary DDD API Design source
- Number linked through Common API Design fallback
- Number using mixed sources, if any
- Number not mapped
- Overall mapping percentage
- Worksheets created or updated
- Important assumptions
- Any significant API gaps, pending specifications, or items requiring BA/API-owner review

Do not claim that every test case has an API dependency. Accuracy and traceability are more important than achieving 100% mapping coverage.

---

## Final Instruction

Execute the task directly using the supplied files. Do not ask for confirmation between processing steps. If a workbook structure differs from expectations, adapt carefully, document the assumption in the README and completion report, and continue without damaging the original content.
