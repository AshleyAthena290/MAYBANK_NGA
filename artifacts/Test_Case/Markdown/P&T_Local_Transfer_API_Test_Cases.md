# P&T Local Transfer API - Comprehensive Test Cases

**Generated:** 2026-07-21 14:17:17

---

## TEST SUMMARY

### Overview
- **Total APIs Covered:** 18
- **Total Test Cases:** 216 (Positive: 36, Negative: 180)
- **Test Case Format:** Positive + Negative scenarios per API
- **Coverage Ratio:** ~12 test cases per API

### APIs Covered

| No | API Name | Method | Endpoint |
|----|----|--------|---------|
|  1 | GetPTMaintenanceTransferInit             | GET    | pt/maintenance/v1/transfers/init                   |
|  2 | GetPTMaintenanceCountries                | GET    | pt/maintenance/v1/transfers/countries              |
|  3 | GetPTMaintenanceBankListing              | GET    | pt/maintenance/v1/ext/banks                        |
|  4 | GetSourceAccountList                     | GET    | pt/{product}/v1/ext/source-accounts                |
|  3 | IntraPreMonetaryCheck                    | POST   | pt/intrabank/v1/pre-check                          |
|  4 | InitiateIntraTransfer                    | POST   | pt/intrabank/v1/initiate                           |
|  5 | ExecuteIntraTransfer                     | POST   | pt/intrabank/v1/transfers                          |
|  6 | InterPreMonetaryCheck                    | POST   | pt/interbank/v1/pre-check                          |
|  7 | InquireTransferFee                       | GET    | pt/interbank/v1/ext/fee-inquiry                    |
|  8 | InitiateInterTransfer                    | POST   | pt/interbank/v1/initiate                           |
|  9 | ExecuteInterTransfer                     | POST   | pt/interbank/v1/transfers                          |
| 10 | GetPTMaintenanceBankListing              | GET    | pt/maintenance/v1/banks                            |
| 11 | GetScheduledListing                      | GET    | pt/recurring/v1/transfer/listing                   |
| 12 | GetScheduledDetails                      | GET    | pt/recurring/v1/transfer/{transactionRefId}        |
| 13 | RemoveScheduled                          | POST   | pt/recurring/v1/transfer/{transactionRefId}/remove |
| 14 | LimitSettingInquiry                      | GET    | pt/limits/v1/external/settings?productCodes=productCodes |
| 15 | LimitSettingUpdate                       | POST   | pt/limits/v1/external/settings                     |
| 16 | LimitSettingMaintanenceList              | GET    | pt/limit/v1/setting/maintenance/list?productIds=productIds |


### Key Validation Areas
- **Field Validation:** Mandatory/optional fields, data types, format validation
- **Authentication:** Invalid/missing tokens, expired credentials
- **Business Rules:** Duplicate submissions, business logic validation
- **Boundary Conditions:** Min/max values, string length, numeric ranges
- **Error Handling:** Error codes, error messages, status codes
- **Data Type Checks:** Type mismatches, invalid formats
- **Required Fields:** Missing mandatory parameters

### Assumptions
1. All APIs require proper authentication tokens in headers
2. Request/Response format is JSON
3. Standard HTTP status codes apply (200, 400, 401, 404, 500)
4. Validation rules follow REST API best practices
5. Rate limiting/throttling may apply (as per service configuration)

---

## DETAILED TEST CASES


### API 1: GetPTMaintenanceTransferInit

**Method:** `GET`  
**Endpoint:** `pt/maintenance/v1/transfers/init`  
**Description:** Transfer Initialization  
**Ownership:** pt-maintenance

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API01_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API01_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API01_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API01_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API01_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API01_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API01_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API01_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API01_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API01_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API01_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API01_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API01_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API01_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of GET | HTTP 405, Method not allowed | Medium |

### API 2: GetPTMaintenanceCountries

**Method:** `GET`  
**Endpoint:** `pt/maintenance/v1/transfers/countries`  
**Description:** Retrieve Country List  
**Ownership:** pt-maintenance

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API02_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API02_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API02_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API02_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API02_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API02_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API02_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API02_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API02_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API02_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API02_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API02_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API02_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API02_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of GET | HTTP 405, Method not allowed | Medium |

### API 3: GetPTMaintenanceBankListing

**Method:** `GET`  
**Endpoint:** `pt/maintenance/v1/ext/banks`  
**Description:** Retrieve the list of active banks and their supported payment rails.  
**Ownership:** pt-maintenance

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API03_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API03_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API03_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API03_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API03_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API03_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API03_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API03_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API03_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API03_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API03_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API03_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API03_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API03_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of GET | HTTP 405, Method not allowed | Medium |

### API 4: GetSourceAccountList

**Method:** `GET`  
**Endpoint:** `pt/{product}/v1/ext/source-accounts`  
**Description:** Retrieves the list of source accounts.  
**Ownership:** pt-maintenance

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API04_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API04_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API04_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API04_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API04_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API04_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API04_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API04_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API04_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API04_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API04_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API04_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API04_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API04_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of GET | HTTP 405, Method not allowed | Medium |

### API 5: IntraPreMonetaryCheck

**Method:** `POST`  
**Endpoint:** `pt/intrabank/v1/pre-check`  
**Description:** Intrabank Pre Monetary Check (Account and Limit Inquiry)  
**Ownership:** pt-intrabank-transfer

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API05_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API05_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API05_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API05_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API05_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API05_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API05_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API05_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API05_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API05_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API05_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API05_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API05_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API05_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of POST | HTTP 405, Method not allowed | Medium |

### API 6: InitiateIntraTransfer

**Method:** `POST`  
**Endpoint:** `pt/intrabank/v1/initiate`  
**Description:** Intrabank Transfer Initiation  
**Ownership:** pt-intrabank-transfer

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API06_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API06_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API06_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API06_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API06_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API06_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API06_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API06_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API06_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API06_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API06_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API06_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API06_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API06_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of POST | HTTP 405, Method not allowed | Medium |

### API 7: ExecuteIntraTransfer

**Method:** `POST`  
**Endpoint:** `pt/intrabank/v1/transfers`  
**Description:** Intrabank Transfer Execution  
**Ownership:** pt-intrabank-transfer

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API07_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API07_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API07_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API07_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API07_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API07_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API07_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API07_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API07_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API07_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API07_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API07_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API07_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API07_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of POST | HTTP 405, Method not allowed | Medium |

### API 8: InterPreMonetaryCheck

**Method:** `POST`  
**Endpoint:** `pt/interbank/v1/pre-check`  
**Description:** Interbank Pre Monetary Check (Account and Limit Inquiry)  
**Ownership:** pt-interbank-transfer

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API08_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API08_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API08_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API08_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API08_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API08_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API08_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API08_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API08_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API08_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API08_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API08_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API08_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API08_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of POST | HTTP 405, Method not allowed | Medium |

### API 9: InquireTransferFee

**Method:** `GET`  
**Endpoint:** `pt/interbank/v1/ext/fee-inquiry`  
**Description:** Inquire Service Fee for Interbank Transfer  
**Ownership:** pt-interbank-transfer

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API09_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API09_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API09_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API09_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API09_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API09_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API09_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API09_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API09_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API09_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API09_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API09_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API09_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API09_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of GET | HTTP 405, Method not allowed | Medium |

### API 10: InitiateInterTransfer

**Method:** `POST`  
**Endpoint:** `pt/interbank/v1/initiate`  
**Description:** Interbank Transfer Initiation  
**Ownership:** pt-interbank-transfer

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API10_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API10_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API10_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API10_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API10_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API10_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API10_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API10_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API10_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API10_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API10_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API10_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API10_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API10_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of POST | HTTP 405, Method not allowed | Medium |

### API 11: ExecuteInterTransfer

**Method:** `POST`  
**Endpoint:** `pt/interbank/v1/transfers`  
**Description:** Interbank Transfer Execution  
**Ownership:** pt-interbank-transfer

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API11_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API11_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API11_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API11_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API11_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API11_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API11_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API11_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API11_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API11_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API11_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API11_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API11_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API11_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of POST | HTTP 405, Method not allowed | Medium |

### API 12: GetPTMaintenanceBankListing

**Method:** `GET`  
**Endpoint:** `pt/maintenance/v1/banks`  
**Description:** Retrieve Bank List  
**Ownership:** pt-maintenance

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API12_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API12_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API12_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API12_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API12_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API12_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API12_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API12_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API12_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API12_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API12_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API12_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API12_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API12_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of GET | HTTP 405, Method not allowed | Medium |

### API 13: GetScheduledListing

**Method:** `GET`  
**Endpoint:** `pt/recurring/v1/transfer/listing`  
**Description:** Retrieve Scheduled Setting Page  
**Ownership:** pt-recurring-management

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API13_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API13_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API13_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API13_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API13_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API13_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API13_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API13_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API13_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API13_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API13_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API13_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API13_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API13_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of GET | HTTP 405, Method not allowed | Medium |

### API 14: GetScheduledDetails

**Method:** `GET`  
**Endpoint:** `pt/recurring/v1/transfer/{transactionRefId}`  
**Description:** Retrieve Scheduled Detailed Record  
**Ownership:** pt-recurring-management

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API14_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API14_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API14_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API14_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API14_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API14_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API14_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API14_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API14_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API14_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API14_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API14_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API14_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API14_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of GET | HTTP 405, Method not allowed | Medium |

### API 15: RemoveScheduled

**Method:** `POST`  
**Endpoint:** `pt/recurring/v1/transfer/{transactionRefId}/remove`  
**Description:** Cancel Scheduled Transfer  
**Ownership:** pt-recurring-management

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API15_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API15_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API15_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API15_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API15_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API15_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API15_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API15_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API15_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API15_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API15_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API15_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API15_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API15_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of POST | HTTP 405, Method not allowed | Medium |

### API 16: LimitSettingInquiry

**Method:** `GET`  
**Endpoint:** `pt/limits/v1/external/settings?productCodes=productCodes`  
**Description:** Retrieve Limit Setting Page  
**Ownership:** pt-limit-management

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API16_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API16_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API16_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API16_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API16_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API16_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API16_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API16_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API16_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API16_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API16_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API16_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API16_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API16_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of GET | HTTP 405, Method not allowed | Medium |

### API 17: LimitSettingUpdate

**Method:** `POST`  
**Endpoint:** `pt/limits/v1/external/settings`  
**Description:** Modify Limit Settings  
**Ownership:** pt-limit-management

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API17_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API17_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API17_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API17_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API17_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API17_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API17_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API17_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API17_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API17_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API17_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API17_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API17_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API17_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of POST | HTTP 405, Method not allowed | Medium |

### API 18: LimitSettingMaintanenceList

**Method:** `GET`  
**Endpoint:** `pt/limit/v1/setting/maintenance/list?productIds=productIds`  
**Description:** Retrieve Product Maintanence Limit  
**Ownership:** pt-limit-management

#### Test Cases

| TC ID | Test Title | Type | Category | Pre-conditions | Test Steps | Input/Payload | Expected Result | Priority |
|-------|-----------|------|----------|---|---|---|---|----------|
| TC_API18_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token | Send valid request | All mandatory params populated correctly | HTTP 200, Valid response object | High |
| TC_API18_P02 | Valid request with optional fields | Positive | Field Validation | Valid auth token | Send request with optional params | Mandatory + optional params | HTTP 200, Response includes all fields | High |
| TC_API18_N01 | Missing mandatory field | Negative | Field Validation | Valid auth token | Omit required parameter | Remove one mandatory field | HTTP 400, Error message indicates missing field | High |
| TC_API18_N02 | Invalid data type | Negative | Data Type Check | Valid auth token | Send string in numeric field | String value in numeric parameter | HTTP 400, Type validation error | High |
| TC_API18_N03 | Invalid format | Negative | Field Validation | Valid auth token | Send incorrectly formatted data | Invalid format (e.g., wrong date) | HTTP 400, Format validation error | High |
| TC_API18_N04 | Missing authentication token | Negative | Authentication | No auth token | Send request without token | Request without Authorization header | HTTP 401, Unauthorized error | High |
| TC_API18_N05 | Invalid authentication token | Negative | Authentication | Invalid token | Send expired/invalid token | Authorization: Bearer invalid_token | HTTP 401, Invalid token error | High |
| TC_API18_N06 | Boundary value - below minimum | Negative | Boundary Condition | Valid auth token | Send value below minimum | Min value - 1 | HTTP 400, Out of range error | Medium |
| TC_API18_N07 | Boundary value - above maximum | Negative | Boundary Condition | Valid auth token | Send value above maximum | Max value + 1 | HTTP 400, Out of range error | Medium |
| TC_API18_N08 | Malformed JSON | Negative | Error Handling | Valid auth token | Send invalid JSON | Incomplete/broken JSON structure | HTTP 400, Malformed JSON error | Medium |
| TC_API18_N09 | SQL Injection attempt | Negative | Security | Valid auth token | Inject SQL in string field | '; DROP TABLE--; | HTTP 400, Invalid input error | High |
| TC_API18_N10 | XSS payload | Negative | Security | Valid auth token | Inject XSS payload | <script>alert('xss')</script> | HTTP 400, Invalid input error | High |
| TC_API18_N11 | Empty payload | Negative | Error Handling | Valid auth token | Send empty request body | {} (empty object) | HTTP 400, Missing required fields error | Medium |
| TC_API18_N12 | Invalid HTTP method | Negative | Error Handling | Valid auth token | Use wrong HTTP method | Use POST instead of GET | HTTP 405, Method not allowed | Medium |


---

## TEST EXECUTION SUMMARY

### Test Case Distribution
- **Total Positive Test Cases:** 36
- **Total Negative Test Cases:** 180
- **Total Test Cases:** 216

### Priority Breakdown
- **High Priority:** 144 (Field validation, Auth, Security)
- **Medium Priority:** 72 (Boundary conditions, Error handling)
- **Low Priority:** 0

### Recommended Test Execution Order
1. Positive test cases (validation of happy path)
2. High-priority negative test cases (auth, security, required fields)
3. Medium-priority negative test cases (boundary, error handling)

---

## NOTES AND ASSUMPTIONS

### General Assumptions
- All endpoints require valid Bearer token authentication
- Request/Response format is JSON
- Content-Type: application/json for all requests
- Standard HTTP status codes (200, 400, 401, 404, 500) apply
- API responses include error codes and descriptive error messages
- No specific rate limiting mentioned in DDD - standard practices assumed

### Field Validation Rules
- Mandatory fields must be present in request
- Data types must match specification
- String fields follow specified length constraints
- Numeric fields follow specified min/max ranges
- Date fields follow ISO 8601 format (YYYY-MM-DD)
- Enum fields accept only specified values

### Test Environment Setup
1. Ensure test environment is isolated from production
2. Use test credentials with proper permissions
3. Clear any cached data before each test run
4. Validate both positive and negative cases
5. Verify error messages are clear and actionable

### Known Limitations
- Test cases are template-based; specific payloads should be populated during test execution
- Boundary values should be confirmed from actual API implementation
- Error codes may vary based on backend implementation
- Response time SLAs not specified in test cases

---

**Document Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}  
**Source Document:** P&T_Local_Transfer_DDD_API_Spec_v1.xlsx  
**Total Pages:** Generated from {len(apis)} API specifications
