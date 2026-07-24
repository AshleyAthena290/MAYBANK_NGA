You are a QA/API Test Engineer. Using the attached DDD (Design Detail Document) file 
"DEP_App_Dashboard_DDD_API_Design_v1", generate a complete set of API Validation Test Cases.

CONTEXT:
- Reference document: DEP_App_Dashboard_DDD_API_Design_v1
- Scope: Validate all APIs defined in this DDD, including endpoints, request/response schemas, 
  field-level validations, business rules, error handling, and status codes described in the document.

OUTPUT STRUCTURE (please follow exactly):

1. TEST SUMMARY
   - Total number of APIs covered
   - Total number of test cases (positive + negative)
   - List of APIs/endpoints identified from the DDD
   - Key validation areas covered (e.g., field validation, authentication, business logic, 
     data type checks, boundary conditions, error handling)
   - Any assumptions made where the DDD is ambiguous or incomplete

2. DETAILED TEST CASES
   For EACH API/endpoint in the DDD, provide test cases in a table with these columns:
   - Test Case ID (e.g., TC_API01_001)
   - Test Case Title
   - Test Type (Positive / Negative)
   - Test Category (e.g., Field Validation, Auth, Business Rule, Boundary, Error Handling)
   - Pre-conditions
   - Test Steps
   - Input Data / Request Payload (sample JSON if applicable)
   - Expected Result (including expected HTTP status code and response body/error message)
   - Priority (High/Medium/Low)

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

FORMAT:
- Present the Test Summary first, then Detailed Test Cases grouped by API/endpoint.
- Use a markdown and excel table for test cases.
- Keep language clear and testable (no vague expected results).
- If any validation rule is not explicitly stated in the DDD, flag it as "Assumption" rather 
  than guessing silently.

Please generate the full output now based on the attached DDD file.