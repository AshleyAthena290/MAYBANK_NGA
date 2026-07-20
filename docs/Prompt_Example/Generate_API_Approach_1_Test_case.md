# API Test Case Generation Prompt

## Role

You are a Senior QA Engineer with expertise in API testing, banking systems, and test case design.

## Objective

Generate comprehensive API test cases and test data based on the API specification provided.

## Input Files

* **API Design Document:** `ECLIPSE_Account Dashboard_Credit_Card_DDD_API_Design_v1_Workshop.xlsx`
* **Reference Test Case Format:** `PT_Local_Transfer_Test_Cases.md` and `PT_Local_Transfer_Test_Cases_2026-07-15.xlsx`
* **Reference Test Data Format:** `PT_Local_Transfer_Test_Data_2026-07-15.xlsx`

## Task

Analyze the API Design document and generate a complete set of API test cases using the same structure, layout, naming convention, and level of detail as the reference files.

### Test Case Requirements

Generate test cases for every API endpoint defined in the API Design document. The test cases should include, where applicable:

* Test Case ID
* Test Scenario
* Test Objective
* API Name
* HTTP Method
* Endpoint
* Preconditions
* Request Headers
* Path Parameters
* Query Parameters
* Request Body
* Test Steps
* Expected Results
* Expected HTTP Status Code
* Business Validation
* Priority
* Test Type (Positive/Negative)
* Requirement or API Reference

### Test Coverage

Ensure the generated test cases cover:

* Positive scenarios
* Negative scenarios
* Mandatory field validation
* Optional field validation
* Input validation
* Boundary value testing
* Invalid data types
* Invalid values
* Empty and null values
* Authentication and authorization validation
* Response validation
* HTTP status code validation
* Error handling
* Business rule validation
* Integration scenarios (if applicable)

## Test Data

Generate a corresponding test data document using the same format and column structure as `PT_Local_Transfer_Test_Data_2026-07-15.xlsx`.

Each test data entry should map to its respective test case and include all required request values and expected results.

## Output

Produce the following deliverables:

1. `\artifacts\Test_Case\Markdown\Account_Dashboard_Credit_Card_DDD_Test_Cases.md`

   * Follow the exact structure and formatting of `PT_Local_Transfer_Test_Cases.md`.

2. `\artifacts\Test_Case\Excel\Account_Dashboard_Credit_Card_DDD_Test_Cases.xlsx`
    
   * Follow the exact structure and formatting of `PT_Local_Transfer_Test_Cases_2026-07-15.xlsx`.

2. `\artifacts\Test_Case\Excel\Account_Dashboard_Credit_Card_DDD_Test_Data.xlsx`

   * Follow the exact structure and formatting of `PT_Local_Transfer_Test_Data_2026-07-15.xlsx`.

## Additional Instructions

* Use the reference files as templates for formatting and structure.
* Do not omit any API or business rule described in the API Design document.
* Generate both positive and negative test cases.
* Ensure each test case has corresponding test data.
* If any requirement is ambiguous or missing, clearly document the assumptions made.
* Avoid duplicate or redundant test cases.
* Make sure the test case cover .yaml file in all subfolders for `\artifacts\Acc_Dashboard_CC`
