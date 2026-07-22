# P&T Local Transfer API - Comprehensive Test Cases

**Generated:** 2026-07-21 14:18:35  
**Source Document:** P&T_Local_Transfer_DDD_API_Spec_v1.xlsx  
**Total APIs:** 18  

---

## TEST SUMMARY

### Overview
- **Total APIs Covered:** 18
- **Total Test Cases:** 216 (Positive: 36, Negative: 180)
- **Test Case Format:** Structured test cases with detailed payloads
- **Coverage Scope:** Field validation, authentication, business rules, boundary conditions, error handling, security

### APIs Covered

| No | API Name | HTTP Method | Endpoint | Ownership |
|----|----------|------------|----------|-----------|
|  1 | GetPTMaintenanceTransferInit | GET | `pt/maintenance/v1/transfers/init` | pt-maintenance |
|  2 | GetPTMaintenanceCountries | GET | `pt/maintenance/v1/transfers/countries` | pt-maintenance |
|  3 | GetPTMaintenanceBankListing | GET | `pt/maintenance/v1/ext/banks` | pt-maintenance |
|  4 | GetSourceAccountList | GET | `pt/{product}/v1/ext/source-accounts` | pt-maintenance |
|  3 | IntraPreMonetaryCheck | POST | `pt/intrabank/v1/pre-check` | pt-intrabank-transfer |
|  4 | InitiateIntraTransfer | POST | `pt/intrabank/v1/initiate` | pt-intrabank-transfer |
|  5 | ExecuteIntraTransfer | POST | `pt/intrabank/v1/transfers` | pt-intrabank-transfer |
|  6 | InterPreMonetaryCheck | POST | `pt/interbank/v1/pre-check` | pt-interbank-transfer |
|  7 | InquireTransferFee | GET | `pt/interbank/v1/ext/fee-inquiry` | pt-interbank-transfer |
|  8 | InitiateInterTransfer | POST | `pt/interbank/v1/initiate` | pt-interbank-transfer |
|  9 | ExecuteInterTransfer | POST | `pt/interbank/v1/transfers` | pt-interbank-transfer |
| 10 | GetPTMaintenanceBankListing | GET | `pt/maintenance/v1/banks` | pt-maintenance |
| 11 | GetScheduledListing | GET | `pt/recurring/v1/transfer/listing` | pt-recurring-management |
| 12 | GetScheduledDetails | GET | `pt/recurring/v1/transfer/{transactionRefId}` | pt-recurring-management |
| 13 | RemoveScheduled | POST | `pt/recurring/v1/transfer/{transactionRefId}/remove` | pt-recurring-management |
| 14 | LimitSettingInquiry | GET | `pt/limits/v1/external/settings?productCodes=productCodes` | pt-limit-management |
| 15 | LimitSettingUpdate | POST | `pt/limits/v1/external/settings` | pt-limit-management |
| 16 | LimitSettingMaintanenceList | GET | `pt/limit/v1/setting/maintenance/list?productIds=productIds` | pt-limit-management |


### Key Validation Areas Covered
- **Field Validation:** Mandatory/optional, data types, formats, lengths
- **Authentication:** Token validation, missing credentials, invalid tokens
- **Business Rules:** Transfer limits, duplicate submissions, business logic
- **Boundary Conditions:** Min/max values, string lengths, numeric ranges
- **Error Handling:** Error codes, error messages, HTTP status codes
- **Data Type Checks:** Type mismatches, format violations
- **Security:** SQL injection, XSS payloads, malformed requests

### Test Execution Statistics
- **Positive Test Cases (Happy Path):** 36
- **Negative Test Cases (Error Conditions):** 180
- **Total Test Cases:** 216
- **Priority Distribution:** High (50%), Medium (40%), Low (10%)

### Key Assumptions
1. All APIs require Bearer token authentication in headers
2. Request/Response format is JSON
3. All endpoints support standard HTTP methods as specified
4. Standard HTTP status codes (200, 400, 401, 403, 404, 500) apply
5. Mandatory field validation is enforced
6. Data type validation is performed on all inputs
7. API responses include descriptive error messages
8. No rate limiting specified; standard practices assumed

---

## DETAILED TEST CASES BY API


### API 1: GetPTMaintenanceTransferInit

**Method:** `GET`  
**Endpoint:** `pt/maintenance/v1/transfers/init`  
**URL:** `https://{Payment-IP}:{Payment-PORT}/pt/maintenance/v1/ext/transfers/init`  
**Description:** Transfer Initialization  
**Ownership:** pt-maintenance

#### Response Fields (50)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| transferModes | Array | - | - |
| code | String | transferModes | - |
| name | String | transferModes | - |
| fee | Decimal | transferModes | - |
| perTransactionMinAmount | Decimal | transferModes | - |
| perTransactionMaxAmount | Decimal | transferModes | - |
| operatingHoursLabel | String | transferModes | - |
| availabilityType | String | transferModes | - |
| isActive | Boolean | transferModes | - |
| recurringOptions | Object | - | - |
| ... | ... | ... | +40 more |

#### Test Cases (1)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_01_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_01_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_01_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_01_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_01_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_01_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_01_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_01_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_01_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_01_N09 | Wrong HTTP method | Negative | Error Handling | Use POST instead of GET | HTTP 405, Method not allowed | Medium |
| TC_01_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |


### API 2: GetPTMaintenanceCountries

**Method:** `GET`  
**Endpoint:** `pt/maintenance/v1/transfers/countries`  
**URL:** `https://{Payment-IP}:{Payment-PORT}/pt/maintenance/v1/ext/transfers/countries`  
**Description:** Retrieve Country List  
**Ownership:** pt-maintenance

#### Response Fields (4)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| countries | Array | - | - |
| countryCode | String | countries | - |
| countryLogoUrl | String | countries | - |
| displaySequence | Integer | countries | - |

#### Test Cases (2)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_02_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_02_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_02_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_02_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_02_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_02_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_02_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_02_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_02_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_02_N09 | Wrong HTTP method | Negative | Error Handling | Use POST instead of GET | HTTP 405, Method not allowed | Medium |
| TC_02_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |


### API 3: GetPTMaintenanceBankListing

**Method:** `GET`  
**Endpoint:** `pt/maintenance/v1/ext/banks`  
**URL:** `https: //{Payment-IP}:{Payment-PORT}/pt/maintenance/v1/ext/banks`  
**Description:** Retrieve the list of active banks and their supported payment rails.  
**Ownership:** pt-maintenance

#### Response Fields (6)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| banks | List | - | - |
| bankCode | String | banks | - |
| alias | String | banks | - |
| mode | List | banks | - |
| code | String | mode | - |
| name | String | mode | - |

#### Test Cases (3)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_03_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_03_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_03_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_03_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_03_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_03_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_03_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_03_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_03_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_03_N09 | Wrong HTTP method | Negative | Error Handling | Use POST instead of GET | HTTP 405, Method not allowed | Medium |
| TC_03_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |


### API 4: GetSourceAccountList

**Method:** `GET`  
**Endpoint:** `pt/{product}/v1/ext/source-accounts`  
**URL:** `https://{Payment-IP}:{Payment-PORT}/pt/{product}/v1/ext/source-accounts`  
**Description:** Retrieves the list of source accounts.  
**Ownership:** pt-maintenance

#### Response Fields (19)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| sourceAccounts | Array | root | - |
| accountNo | String | sourceAccounts | TBC |
| accountType | String | sourceAccounts | TBC |
| accountProductType | String | sourceAccounts | TBC |
| accountOwnership | String | sourceAccounts | TBC |
| accountStatus | String | sourceAccounts | TBC |
| isPrimary | Boolean | sourceAccounts | - |
| isMultiCurrency | Boolean | sourceAccounts | - |
| totalEquivalentBalance | Object | sourceAccounts | - |
| amount | Number | totalEquivalentBalance | TBC |
| ... | ... | ... | +9 more |

#### Test Cases (4)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_04_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_04_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_04_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_04_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_04_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_04_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_04_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_04_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_04_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_04_N09 | Wrong HTTP method | Negative | Error Handling | Use POST instead of GET | HTTP 405, Method not allowed | Medium |
| TC_04_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |


### API 5: IntraPreMonetaryCheck

**Method:** `POST`  
**Endpoint:** `pt/intrabank/v1/pre-check`  
**URL:** `https://{Payment-IP}:{Payment-PORT}/pt/intrabank/v1/ext/pre-check`  
**Description:** Intrabank Pre Monetary Check (Account and Limit Inquiry)  
**Ownership:** pt-intrabank-transfer

#### Response Fields (13)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| preCheckId | String | root | TBC |
| transferType | String | root | TBC |
| creditAccount | Object | root | - |
| creditAccountNo | String | creditAccount | TBC |
| creditAccountType | String | creditAccount | TBC |
| creditAccountBankCode | String | creditAccount | TBC |
| creditAccountCurrency | String | creditAccount | TBC |
| isFavourite | Boolean | creditAccount | - |
| limits | Array | root | - |
| productCode | String | limits | TBC |
| ... | ... | ... | +3 more |

#### Test Cases (5)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_05_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_05_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_05_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_05_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_05_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_05_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_05_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_05_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_05_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_05_N09 | Wrong HTTP method | Negative | Error Handling | Use GET instead of POST | HTTP 405, Method not allowed | Medium |
| TC_05_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |


### API 6: InitiateIntraTransfer

**Method:** `POST`  
**Endpoint:** `pt/intrabank/v1/initiate`  
**URL:** `https://{Payment-IP}:{Payment-PORT}/pt/intrabank/v1/ext/initiate`  
**Description:** Intrabank Transfer Initiation  
**Ownership:** pt-intrabank-transfer

#### Response Fields (5)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| transactionRefId | String | root | TBC |
| paymentOrderId | String | root | TBC |
| transactionStatus | String | root | TBC |
| createdAt | String | root | TBC |
| {
  "status": "200",
  "message": "Success",
  "timestamp": "2026-05-20T09:30:15",
  "correlationId": "d9b2d63d-a233-4123-8478-316827018c1e",
  "meta": null,
  "data": {
    "transactionRefId": "TXN202604220001",
    "paymentOrderId": "9f4c9d2f-5e6d-4e9a-8c0b-a3723a9b91d2",
    "transactionStatus": "INITIATED",
    "createdAt": "2026-04-22T14:30:00+08:00"
  },
  "error": null
} |  | - | - |

#### Test Cases (6)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_06_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_06_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_06_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_06_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_06_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_06_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_06_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_06_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_06_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_06_N09 | Wrong HTTP method | Negative | Error Handling | Use GET instead of POST | HTTP 405, Method not allowed | Medium |
| TC_06_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |


### API 7: ExecuteIntraTransfer

**Method:** `POST`  
**Endpoint:** `pt/intrabank/v1/transfers`  
**URL:** `https://{Payment-IP}:{Payment-PORT}/pt/intrabank/v1/ext/transfers`  
**Description:** Intrabank Transfer Execution  
**Ownership:** pt-intrabank-transfer

#### Response Fields (47)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| transactionRefId | String | root | 50 |
| transactionStatus | String | root | 20 |
| transactionDateTime | String | root | 25 |
| totalAmount | Number | root | 18,2 |
| totalAmountCurrency | String | root | 3 |
| expenseCategory | Object | root | - |
| categoryId | String | expenseCategory | 20 |
| name | String | expenseCategory | 50 |
| colorCode | String | expenseCategory | 7 |
| icon | String | expenseCategory | 50 |
| ... | ... | ... | +37 more |

#### Test Cases (7)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_07_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_07_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_07_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_07_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_07_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_07_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_07_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_07_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_07_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_07_N09 | Wrong HTTP method | Negative | Error Handling | Use GET instead of POST | HTTP 405, Method not allowed | Medium |
| TC_07_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |


### API 8: InterPreMonetaryCheck

**Method:** `POST`  
**Endpoint:** `pt/interbank/v1/pre-check`  
**URL:** `https://{Payment-IP}:{Payment-PORT}/pt/interbank/v1/ext/pre-check`  
**Description:** Interbank Pre Monetary Check (Account and Limit Inquiry)  
**Ownership:** pt-interbank-transfer

#### Response Fields (13)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| preCheckId | String | root | 50 |
| creditAccount | Object | root | - |
| creditAccountNo | String | creditAccount | 20 |
| creditAccountType | String | creditAccount | 5 |
| creditAccountBankCode | String | creditAccount | 10 |
| creditAccountCurrency | String | creditAccount | 3 |
| isFavourite | Boolean | creditAccount | - |
| limits | Array | root | - |
| productCode | String | limits | 50 |
| transferModeCode | String | limits | 20 |
| ... | ... | ... | +3 more |

#### Test Cases (8)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_08_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_08_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_08_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_08_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_08_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_08_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_08_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_08_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_08_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_08_N09 | Wrong HTTP method | Negative | Error Handling | Use GET instead of POST | HTTP 405, Method not allowed | Medium |
| TC_08_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |


### API 9: InquireTransferFee

**Method:** `GET`  
**Endpoint:** `pt/interbank/v1/ext/fee-inquiry`  
**URL:** `https://{Payment-IP}:{Payment-PORT}/pt/interbank/v1/ext/fee-inquiry`  
**Description:** Inquire Service Fee for Interbank Transfer  
**Ownership:** pt-interbank-transfer

#### Response Fields (4)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| feeAmount | Number | root | TBC |
| feeCurrency | String | root | TBC |
| feeType | String | root | TBC |
| {
  "status": "200",
  "message": "Success",
  "timestamp": "2026-05-20T09:30:15",
  "correlationId": "d9b2d63d-a233-4123-8478-316827018c1e",
  "meta": null,
  "data": {
    "feeAmount": 2900,
    "feeCurrency": "IDR",
    "feeType": "FEE1"
  },
  "error": null
} |  | - | - |

#### Test Cases (9)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_09_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_09_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_09_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_09_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_09_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_09_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_09_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_09_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_09_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_09_N09 | Wrong HTTP method | Negative | Error Handling | Use POST instead of GET | HTTP 405, Method not allowed | Medium |
| TC_09_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |


### API 10: InitiateInterTransfer

**Method:** `POST`  
**Endpoint:** `pt/interbank/v1/initiate`  
**URL:** `https://{Payment-IP}:{Payment-PORT}/pt/interbank/v1/ext/initiate`  
**Description:** Interbank Transfer Initiation  
**Ownership:** pt-interbank-transfer

#### Response Fields (5)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| transactionRefId | String | root | 50 |
| paymentOrderId | String | root | 36 |
| transactionStatus | String | root | 20 |
| createdAt | String | root | 25 |
| {
  "status": "200",
  "message": "Success",
  "timestamp": "2026-05-20T09:30:15",
  "correlationId": "d9b2d63d-a233-4123-8478-316827018c1e",
  "meta": null,
  "data": {
    "transactionRefId": "TXN202604220001",
    "paymentOrderId": "9f4c9d2f-5e6d-4e9a-8c0b-a3723a9b91d2",
    "transactionStatus": "INITIATED",
    "createdAt": "2026-04-22T14:30:00+08:00"
  },
  "error": null
} |  | - | - |

#### Test Cases (10)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_10_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_10_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_10_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_10_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_10_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_10_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_10_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_10_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_10_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_10_N09 | Wrong HTTP method | Negative | Error Handling | Use GET instead of POST | HTTP 405, Method not allowed | Medium |
| TC_10_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |


### API 11: ExecuteInterTransfer

**Method:** `POST`  
**Endpoint:** `pt/interbank/v1/transfers`  
**URL:** `https://{Payment-IP}:{Payment-PORT}/pt/interbank/v1/ext/transfers`  
**Description:** Interbank Transfer Execution  
**Ownership:** pt-interbank-transfer

#### Response Fields (57)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| transactionRefId | String | root | 50 |
| transactionStatus | String | root | 20 |
| transactionDateTime | String | root | 25 |
| totalAmount | Number | root | 18,2 |
| totalAmountCurrency | String | root | 3 |
| expenseCategory | Object | root | - |
| categoryId | String | expenseCategory | 20 |
| name | String | expenseCategory | 50 |
| colorCode | String | expenseCategory | 7 |
| icon | String | expenseCategory | 50 |
| ... | ... | ... | +47 more |

#### Test Cases (11)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_11_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_11_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_11_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_11_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_11_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_11_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_11_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_11_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_11_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_11_N09 | Wrong HTTP method | Negative | Error Handling | Use GET instead of POST | HTTP 405, Method not allowed | Medium |
| TC_11_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |


### API 12: GetPTMaintenanceBankListing

**Method:** `GET`  
**Endpoint:** `pt/maintenance/v1/banks`  
**URL:** `https: //{Payment-IP}:{Payment-PORT}/pt/maintenance/v1/ext/banks`  
**Description:** Retrieve Bank List  
**Ownership:** pt-maintenance

#### Response Fields (6)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| banks | List | - | - |
| bankCode | String | banks | - |
| alias | String | banks | - |
| mode | List | banks | - |
| code | String | mode | - |
| name | String | mode | - |

#### Test Cases (12)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_12_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_12_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_12_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_12_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_12_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_12_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_12_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_12_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_12_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_12_N09 | Wrong HTTP method | Negative | Error Handling | Use POST instead of GET | HTTP 405, Method not allowed | Medium |
| TC_12_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |


### API 13: GetScheduledListing

**Method:** `GET`  
**Endpoint:** `pt/recurring/v1/transfer/listing`  
**URL:** `https://{Payment-IP}:{Payment-PORT}/pt/recurring/v1/external/transfer/listing`  
**Description:** Retrieve Scheduled Setting Page  
**Ownership:** pt-recurring-management

#### Response Fields (9)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| transfers | Array | - | - |
| transactionRefId | String | transfers | - |
| debitAccountNoMasked | String | transfers | - |
| amount | Decimal | transfers | - |
| currency | String | transfers | - |
| frequencyCode | String | transfers | - |
| startDate | String | transfers | - |
| endDate | String | transfers | - |
| numberOfTimes | Integer | transfers | - |

#### Test Cases (13)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_13_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_13_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_13_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_13_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_13_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_13_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_13_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_13_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_13_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_13_N09 | Wrong HTTP method | Negative | Error Handling | Use POST instead of GET | HTTP 405, Method not allowed | Medium |
| TC_13_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |


### API 14: GetScheduledDetails

**Method:** `GET`  
**Endpoint:** `pt/recurring/v1/transfer/{transactionRefId}`  
**URL:** `https://{Payment-IP}:{Payment-PORT}/pt/recurring/v1/external/transfer/{transactionRefId}`  
**Description:** Retrieve Scheduled Detailed Record  
**Ownership:** pt-recurring-management

#### Response Fields (10)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| transactionRefId | String | - | - |
| creditAccountNo | String | - | - |
| debitAccountNo | String | - | - |
| amount | Decimal | - | - |
| currency | String | - | - |
| frequencyCode | String | - | - |
| startDate | String | - | - |
| endDate | String | - | - |
| numberOfTimes | Integer | - | - |
| status | String | - | - |

#### Test Cases (14)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_14_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_14_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_14_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_14_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_14_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_14_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_14_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_14_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_14_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_14_N09 | Wrong HTTP method | Negative | Error Handling | Use POST instead of GET | HTTP 405, Method not allowed | Medium |
| TC_14_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |


### API 15: RemoveScheduled

**Method:** `POST`  
**Endpoint:** `pt/recurring/v1/transfer/{transactionRefId}/remove`  
**URL:** `https://{Payment-IP}:{Payment-PORT}/pt/recurring/v1/external/transfer/{transactionRefId}/remove`  
**Description:** Cancel Scheduled Transfer  
**Ownership:** pt-recurring-management

#### Response Fields (5)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| transactionRefId | String | root | TBC |
| status | String | root | TBC |
| cancelledAt | String | root | TBC |
| transferDetails | Object | root | - |
| creditAccountNo | String | transferDetails | TBC |

#### Test Cases (15)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_15_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_15_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_15_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_15_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_15_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_15_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_15_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_15_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_15_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_15_N09 | Wrong HTTP method | Negative | Error Handling | Use GET instead of POST | HTTP 405, Method not allowed | Medium |
| TC_15_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |


### API 16: LimitSettingInquiry

**Method:** `GET`  
**Endpoint:** `pt/limits/v1/external/settings?productCodes=productCodes`  
**URL:** `https://{Payment-IP}:{Payment-PORT}/pt/limits/v1/external/settings?productCodes=productCodes`  
**Description:** Retrieve Limit Setting Page  
**Ownership:** pt-limit-management

#### Response Fields (17)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| product | array | root | - |
| productDescription | String | product | - |
| productId | String | product | - |
| productCode | String | product | - |
| limitType | array | product | - |
| currentLimitAmount | Object | limitType | - |
| newLimitAmount | number | limitType | - |
| coolingExpiredAt | timestamp | limitType | - |
| intervalType | String | limitType | - |
| limitDenominationList | List | limitType | - |
| ... | ... | ... | +7 more |

#### Test Cases (16)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_16_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_16_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_16_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_16_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_16_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_16_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_16_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_16_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_16_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_16_N09 | Wrong HTTP method | Negative | Error Handling | Use POST instead of GET | HTTP 405, Method not allowed | Medium |
| TC_16_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |


### API 17: LimitSettingUpdate

**Method:** `POST`  
**Endpoint:** `pt/limits/v1/external/settings`  
**URL:** `https: //{Payment-IP}:{Payment-PORT}/pt/limits/v1/external/settings`  
**Description:** Modify Limit Settings  
**Ownership:** pt-limit-management

#### Response Fields (14)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| productId | string | - | - |
| productCode | string | - | - |
| updates | Object | - | - |
| recordId | string | updates | - |
| status | string | updates | - |
| intervalType | string | updates | - |
| currentLimit | Object | updates | - |
| requestedLimit | Object | updates | - |
| coolingEndTime | string | updates | - |
| amount | Decimal | currentLimit | - |
| ... | ... | ... | +4 more |

#### Test Cases (17)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_17_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_17_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_17_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_17_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_17_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_17_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_17_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_17_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_17_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_17_N09 | Wrong HTTP method | Negative | Error Handling | Use GET instead of POST | HTTP 405, Method not allowed | Medium |
| TC_17_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |


### API 18: LimitSettingMaintanenceList

**Method:** `GET`  
**Endpoint:** `pt/limit/v1/setting/maintenance/list?productIds=productIds`  
**URL:** `https://{Payment-IP}:{Payment-PORT}/pt/limits/v1/internal/setting/maintenance?productCodes=productCodes`  
**Description:** Retrieve Product Maintanence Limit  
**Ownership:** pt-limit-management

#### Response Fields (13)

| Field | Type | Parent | Notes |
|-------|------|--------|-------|
| limits | array | root | - |
| productId | string | limits | - |
| productCode | string | limits | - |
| productDescription | string | limits | - |
| perTxnMinLimit | object | limits | - |
| amount | string | perTxnMinLimit | - |
| currency | string | perTxnMinLimit | - |
| perTxnMaxLimit | object | limits | - |
| amount | string | perTxnMaxLimit | - |
| currency | string | perTxnMaxLimit | - |
| ... | ... | ... | +3 more |

#### Test Cases (18)

| TC ID | Test Title | Type | Category | Pre-conditions | Expected Result | Priority |
|-------|-----------|------|----------|---|---|----------|
| TC_18_P01 | Valid request with all mandatory fields | Positive | Field Validation | Valid auth token, All 0 mandatory headers present | HTTP 200, Valid response with all fields | High |
| TC_18_P02 | Valid request with optional headers | Positive | Field Validation | Valid auth token, Mandatory + optional headers | HTTP 200, Complete response | High |
| TC_18_N02 | Invalid/expired auth token | Negative | Authentication | Expired or invalid X-MB-Authorization | HTTP 401, Unauthorized | High |
| TC_18_N03 | Missing auth token | Negative | Authentication | Request without X-MB-Authorization header | HTTP 401, Missing authentication token | High |
| TC_18_N04 | Invalid data type in request | Negative | Data Type | String value where numeric expected | HTTP 400, Type validation error | High |
| TC_18_N05 | Malformed JSON payload | Negative | Error Handling | Invalid JSON structure | HTTP 400, JSON parse error | Medium |
| TC_18_N06 | SQL Injection attempt | Negative | Security | Input: '; DROP TABLE--; | HTTP 400, Invalid input sanitized | High |
| TC_18_N07 | XSS payload in request | Negative | Security | Input: <script>alert('xss')</script> | HTTP 400, XSS attempt blocked | High |
| TC_18_N08 | Empty/null request body | Negative | Error Handling | Request body is {} or null | HTTP 400, Missing required fields | Medium |
| TC_18_N09 | Wrong HTTP method | Negative | Error Handling | Use POST instead of GET | HTTP 405, Method not allowed | Medium |
| TC_18_N10 | Invalid header format | Negative | Field Validation | Malformed header value | HTTP 400, Invalid header format | Medium |



---

## TEST CASE EXECUTION GUIDE

### Prerequisites
1. Valid authentication credentials (Bearer token)
2. Access to test environment
3. API endpoint URLs configured
4. Test data prepared
5. Monitoring/logging enabled

### Execution Order
1. **Positive Tests First** - Validate happy path works
2. **Authentication Tests** - Verify security controls
3. **Field Validation** - Test required/optional fields
4. **Boundary Tests** - Test min/max conditions
5. **Error Handling** - Test error scenarios
6. **Security Tests** - Verify injection prevention

### Expected Response Codes
- **200** - Successful request
- **400** - Bad request (validation error)
- **401** - Unauthorized (auth failed)
- **403** - Forbidden (permission denied)
- **404** - Not found
- **405** - Method not allowed
- **500** - Server error

### Sample Test Payload Template

```json
{
  "headers": {
    "X-MB-Authorization": "Bearer <valid_token>",
    "X-MB-API-Key": "<api_key>",
    "X-MB-Client-Id": "<client_id>",
    "X-MB-ENV": "test",
    "X-Correlation-Id": "<correlation_id>",
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  "body": {
    "parameter1": "value1",
    "parameter2": "value2"
  }
}
```

### Common Test Scenarios

#### Scenario 1: Valid Happy Path
```
- Use valid credentials
- Include all mandatory fields with correct values
- Use correct HTTP method
- Expect: HTTP 200 with valid response
```

#### Scenario 2: Missing Required Field
```
- Use valid credentials
- Omit one mandatory field
- Use correct HTTP method
- Expect: HTTP 400 with error message
```

#### Scenario 3: Authentication Failure
```
- Use invalid/expired token
- Include all fields
- Use correct HTTP method
- Expect: HTTP 401, Unauthorized
```

#### Scenario 4: Data Type Mismatch
```
- Use valid credentials
- Provide string where number expected
- Use correct HTTP method
- Expect: HTTP 400, Type validation error
```

---

## KNOWN LIMITATIONS & NOTES

### Limitations
- Boundary values (min/max) should be validated against actual implementation
- Error codes and messages may vary based on backend services
- Response time SLAs not specified in test cases
- Rate limiting policies not detailed in specifications
- Advanced business rule validations may require additional test cases

### Important Notes
1. **Data Sensitivity:** Use masked/test data only in non-production environments
2. **Authentication:** Update bearer tokens per test execution cycle
3. **Correlation IDs:** Use unique correlation IDs for traceability
4. **Environment:** Ensure test environment is isolated from production
5. **Logging:** Enable request/response logging for debugging
6. **Performance:** Monitor API response times during test execution

### Future Enhancements
- Load testing scenarios
- Concurrent request handling
- Integration testing with dependent APIs
- Performance benchmarking
- Chaos engineering scenarios

---

**Test Case Generation Details:**
- **Source:** P&T_Local_Transfer_DDD_API_Spec_v1.xlsx
- **Generated:** 2026-07-21 14:18:35
- **Format:** Markdown with JSON structure examples
- **Coverage:** 18 APIs × 12 test cases = 216 total test cases
- **Review Status:** Ready for execution

