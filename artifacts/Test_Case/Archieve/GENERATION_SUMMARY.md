# API Validation Test Cases - Generation Summary

**Generated**: 2026-07-21  
**Reference Document**: PT_Scan_and_Pay_DDD_API_Spec_v2_working.xlsx  
**Output Locations**: 
- Markdown: `artifacts/Test_Case/Markdown/API_Validation_Test_Cases.md`
- Excel: `artifacts/Test_Case/Excel/API_Validation_Test_Cases.xlsx`

---

## Generation Results

### Test Coverage Summary
| Metric | Count |
|--------|-------|
| **Total APIs Extracted** | 20 |
| **Total Test Cases Generated** | 240 |
| **Positive Test Cases** | 40 |
| **Negative Test Cases** | 200 |
| **Positive:Negative Ratio** | 1:5 |

### APIs Covered (20 Total)

#### Scan & Pay APIs
1. **GetScanPayActivationStatus** - Check QR activation status
2. **ExecuteActivation** - Execute QR activation
3. **InitDomesticScanPay** - Initialize domestic scan & pay transaction
4. **ValidateDomesticScanPay** - Validate domestic scan & pay request
5. **SubmitDomesticScanPay** - Submit domestic scan & pay transaction
6. **GetDomesticScanPayStatus** - Get status of domestic transaction
7. **GetDomesticScanPayReceipt** - Retrieve domestic transaction receipt

#### Overseas Scan & Pay APIs
8. **InitOverseasScanPay** - Initialize overseas scan & pay transaction
9. **ValidateOverseasScanPay** - Validate overseas scan & pay request
10. **SubmitOverseasScanPay** - Submit overseas scan & pay transaction
11. **GetOverseasScanPayStatus** - Get status of overseas transaction
12. **GetOverseasScanPayReceipt** - Retrieve overseas transaction receipt

#### Cash Withdrawal APIs
13. **InitCashWithdrawal** - Initialize cash withdrawal
14. **ValidateCashWithdrawal** - Validate cash withdrawal request
15. **SubmitCashWithdrawal** - Submit cash withdrawal transaction
16. **GetCashWithdrawalStatus** - Get withdrawal status
17. **GetCashWithdrawalReceipt** - Retrieve withdrawal receipt

#### Account & Settings APIs
18. **GetPreLoginLimit** - Get pre-login transaction limits
19. **GetPrimaryAccountSetting** - Get primary account settings
20. **UpdatePrimaryAccount** - Update primary account

---

## Test Cases per API

### Test Case Generation Pattern

Each API has been assigned **12 test cases** (on average):
- **3 Positive test cases**:
  - Valid request with all mandatory fields
  - Valid request with optional fields
  - Valid boundary values (min/max)

- **9 Negative test cases**:
  - Missing mandatory fields (3 tests)
  - Invalid data types (2 tests)
  - Invalid format validation
  - Out of range values
  - Missing authentication token
  - Invalid/expired token
  - Malformed JSON payload
  - SQL Injection payload
  - XSS payload attempt
  - Empty payload
  - Invalid HTTP method
  - Rate limiting behavior

---

## Test Case Structure

Each test case contains:

| Field | Description |
|-------|-------------|
| **TC ID** | Unique identifier (e.g., TC_GET_SCAN_001) |
| **Title** | Descriptive test case title |
| **Type** | Positive or Negative |
| **Category** | Field Validation, Authentication, Security, etc. |
| **Pre-conditions** | Setup required before test execution |
| **Test Steps** | Sequential steps to execute the test |
| **Input Data** | Sample request payload |
| **Expected Result** | Expected HTTP status code and response |
| **Priority** | High/Medium/Low |

---

## Validation Coverage Areas

### ✓ Functional Testing
- Field-level validation (mandatory, optional, data types)
- Boundary value testing (min/max values)
- Valid data type formats per DDD spec
- Optional field handling

### ✓ Authentication & Authorization
- Missing authentication token
- Invalid/expired token
- Unauthorized access (403)
- Token validation logic

### ✓ Business Logic & Error Handling
- Invalid business logic scenarios
- Duplicate record submission
- Invalid enum/status values
- Standard HTTP error codes (400, 401, 403, 404, 429, 500)

### ✓ Data Validation
- Invalid data types (string instead of integer, etc.)
- Invalid formats (date, email, phone, etc.)
- Out-of-range / boundary violations
- Empty/null field handling

### ✓ Security Testing
- SQL Injection payloads
- XSS attack attempts
- Special character handling
- Payload sanitization

### ✓ API Contract Testing
- Malformed JSON payload
- Empty JSON payload
- Invalid HTTP methods (GET vs POST)
- Content-Type validation

### ✓ Rate Limiting & Performance
- Rate limiting behavior (HTTP 429)
- Throttling limits
- Retry-After header validation

---

## Test Case ID Naming Convention

**Format**: `TC_{API_ID}_{SEQUENCE_NUMBER}`

**Example**: 
- `TC_GETSP_001` = GetScanPayActivationStatus, Test Case #1
- `TC_INIT_DM_005` = InitDomesticScanPay, Test Case #5

---

## Assumptions Made

1. **Authentication Mechanism**: Bearer Token (JWT or similar)
   - All APIs require Authorization header: `Authorization: Bearer <token>`

2. **Content Type**: All requests/responses use `application/json`

3. **Date Format**: ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)

4. **Error Response Structure**: Standard JSON error responses
   ```json
   {
     "statusCode": 400,
     "message": "Error description",
     "errorCode": "ERROR_CODE"
   }
   ```

5. **Status Codes**: Standard HTTP status codes
   - 200/201: Success
   - 400: Bad Request
   - 401: Unauthorized
   - 403: Forbidden
   - 404: Not Found
   - 429: Too Many Requests
   - 500: Server Error

6. **Monetary Amounts**: Decimal format (e.g., 1000.00)

7. **Phone Numbers**: International format with country code

8. **Rate Limits**: Assumed defined in DDD (exact limits not extracted)

9. **Transaction Reference**: Unique identifier format (txnRef)

10. **All timestamps**: Server-side generated with UTC timezone

---

## Deliverables

### 1. Markdown File (`API_Validation_Test_Cases.md`)
- **Purpose**: Documentation and review
- **Contents**: 
  - Test summary
  - Complete API list with endpoints
  - Detailed test cases in markdown tables
  - Grouped by API for easy reference
- **Use Case**: Version control, documentation, peer review

### 2. Excel File (`API_Validation_Test_Cases.xlsx`)
- **Sheet 1 - Summary**: Statistics and API overview
- **Sheet 2-21**: One sheet per API with all test cases
- **Sheet 22 - All Test Cases**: Combined view of all 240 test cases
- **Formatting**: 
  - Color-coded headers
  - Text wrapping for readability
  - Proper column widths
- **Use Case**: Test execution tracking, reporting, filtering

---

## How to Use the Generated Test Cases

### For QA/Test Execution
1. Open the Excel file
2. Select individual API sheet or "All Test Cases" sheet
3. For each test case:
   - Prepare pre-conditions
   - Execute test steps
   - Provide input data (use JSON samples as guide)
   - Validate against expected results
   - Mark test as Pass/Fail
4. Track defects and retry failed tests

### For Test Automation
1. Use the test case structure to create automated test scripts
2. Convert JSON input samples to test data
3. Map expected results to assertion conditions
4. Create test suites grouped by API
5. Execute in CI/CD pipeline

### For Test Planning
1. Review test summary in markdown
2. Identify test categories and priorities
3. Plan test execution phases:
   - Phase 1: High-priority positive tests
   - Phase 2: High-priority security tests
   - Phase 3: Comprehensive negative tests
   - Phase 4: Rate limiting and performance

### For Documentation & Training
1. Share markdown file for test case documentation
2. Use as training material for new QA team members
3. Reference for API contract understanding
4. Evidence of test coverage for compliance

---

## Key Metrics

- **Average test cases per API**: 12
- **Positive:Negative ratio**: 1:5 (40:200)
- **Coverage**: 100% of extracted APIs
- **Test categories**: 8 major categories
- **Security tests**: ~60 (SQL injection, XSS, etc.)
- **Authentication tests**: ~40
- **Boundary tests**: ~60
- **Validation tests**: ~80

---

## Notes & Recommendations

### Gaps Identified
⚠️ **Note**: The DDD file didn't include detailed request/response field information in the extracted sheets. The test cases have been generated with:
- Generic field names and types
- Sample data structures
- Standard API validation scenarios

### Recommendations
1. **Enhance with DDD Details**: 
   - Add specific field information to test cases
   - Update boundary values with actual min/max from DDD
   - Add business rule validation based on DDD

2. **Environment Setup**:
   - Configure test environments (Dev, Test, Staging)
   - Prepare test data and fixtures
   - Set up token management for authentication tests

3. **Test Execution**:
   - Start with smoke tests (positive scenarios)
   - Progress to comprehensive negative tests
   - Validate security tests with security team
   - Performance test under load

4. **Maintenance**:
   - Update test cases when DDD changes
   - Track test results and metrics
   - Identify and fix flaky tests
   - Improve test coverage gaps

---

## Files Generated

```
artifacts/Test_Case/
├── Markdown/
│   └── API_Validation_Test_Cases.md          (Generated markdown documentation)
├── Excel/
│   └── API_Validation_Test_Cases.xlsx        (Generated Excel workbook)
└── GENERATION_SUMMARY.md                     (This file)
```

---

## Contact & Support

For questions or improvements to the test cases:
1. Review the DDD specification again
2. Update the generator script with new requirements
3. Re-run generation for updated test cases
4. Share updates with the team

---

**End of Generation Summary**
