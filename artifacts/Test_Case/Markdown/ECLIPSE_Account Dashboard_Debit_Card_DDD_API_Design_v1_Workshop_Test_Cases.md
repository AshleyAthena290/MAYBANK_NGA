# API Validation Test Cases

**Generated**: 2026-07-21 15:11:12

**Reference**: PT_Scan_and_Pay_DDD_API_Spec_v2_working.xlsx

## TEST SUMMARY

### Statistics
- **Total APIs**: 20
- **Total Test Cases**: 240
  - Positive: 40
  - Negative: 200

### APIs Identified

1. **README**
   - Method: `POST`
   - Endpoint: `/README`
   - Request Fields: 0
   - Response Fields: 0

2. **1.3 Debit Card Dashboard**
   - Method: `POST`
   - Endpoint: `/1.3 Debit Card Dashboard`
   - Request Fields: 0
   - Response Fields: 0

3. **1.3.1 Card Activation**
   - Method: `POST`
   - Endpoint: `/1.3.1 Card Activation`
   - Request Fields: 0
   - Response Fields: 0

4. **1.3.2 Card Details**
   - Method: `POST`
   - Endpoint: `/1.3.2 Card Details`
   - Request Fields: 0
   - Response Fields: 0

5. **1.3.2.1 Linked Accounts**
   - Method: `POST`
   - Endpoint: `/1.3.2.1 Linked Accounts`
   - Request Fields: 0
   - Response Fields: 0

6. **1.3.2.2 Reset Card PIN**
   - Method: `POST`
   - Endpoint: `/1.3.2.2 Reset Card PIN`
   - Request Fields: 0
   - Response Fields: 0

7. **1.3.2.3 Block & Unblock Card**
   - Method: `POST`
   - Endpoint: `/1.3.2.3 Block & Unblock Card`
   - Request Fields: 0
   - Response Fields: 0

8. **1.3.2.4 Replace Card**
   - Method: `POST`
   - Endpoint: `/1.3.2.4 Replace Card`
   - Request Fields: 0
   - Response Fields: 0

9. **XP APIs >>**
   - Method: `POST`
   - Endpoint: `/XP APIs >>`
   - Request Fields: 0
   - Response Fields: 0

10. **getLinkedAccounts**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/info/card/v1/external/accounts/debit-card/account-id/{accountId}/linked-accounts`
   - Request Fields: 0
   - Response Fields: 0

11. **getManageCasa**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/info/casa/v1/external/casa/manage`
   - Request Fields: 0
   - Response Fields: 0

12. **debitCardReplacementChargeRule**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/replacement-charge-rules`
   - Request Fields: 0
   - Response Fields: 0

13. **S2U APIs >>**
   - Method: `POST`
   - Endpoint: `/S2U APIs >>`
   - Request Fields: 0
   - Response Fields: 0

14. **cvvInquiry**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/cvv-inquiry`
   - Request Fields: 0
   - Response Fields: 0

15. **debitCardActivation**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/activate`
   - Request Fields: 0
   - Response Fields: 0

16. **linkAccountToCard**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/linked-account`
   - Request Fields: 0
   - Response Fields: 0

17. **replaceDebitCard**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/replacement`
   - Request Fields: 0
   - Response Fields: 0

18. **debitCardBlock**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/block`
   - Request Fields: 0
   - Response Fields: 0

19. **debitCardUnblock**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/unblock`
   - Request Fields: 0
   - Response Fields: 0

20. **debitCardResetPin**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/reset-pin`
   - Request Fields: 0
   - Response Fields: 0

### Coverage Areas

- ✓ Field Validation (mandatory, optional, types)
- ✓ Boundary Testing (min/max values)
- ✓ Authentication & Authorization
- ✓ Error Handling & Status Codes
- ✓ Security (SQL Injection, XSS)
- ✓ Rate Limiting
- ✓ Payload Validation
- ✓ HTTP Method Validation

### Assumptions

1. Bearer Token authentication
2. Content-Type: application/json
3. ISO 8601 timestamps
4. Standard HTTP status codes
5. All monetary values in decimal format

---

## DETAILED TEST CASES

### API: README

**Method**: POST | **Endpoint**: `/README`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_README_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /README with ... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_README_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /README with min/max values for numeric/... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_README_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /README with malformed date/email... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_README_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /README with values below min or above m... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_README_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /README WITHOUT Authorization header... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_README_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /README with invalid/expired token... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_README_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /README with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_README_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /README with SQL injection in text field... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_README_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /README with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_README_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /README with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_README_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /README (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_README_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /README... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.3 Debit Card Dashboard

**Method**: POST | **Endpoint**: `/1.3 Debit Card Dashboard`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_13_DEBIT_C_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.3 Debit Ca... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_13_DEBIT_C_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.3 Debit Card Dashboard with min/max v... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_13_DEBIT_C_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.3 Debit Card Dashboard with malformed... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_13_DEBIT_C_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.3 Debit Card Dashboard with values be... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_13_DEBIT_C_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.3 Debit Card Dashboard WITHOUT Author... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_13_DEBIT_C_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.3 Debit Card Dashboard with invalid/e... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_13_DEBIT_C_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.3 Debit Card Dashboard with invalid J... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_13_DEBIT_C_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.3 Debit Card Dashboard with SQL injec... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_13_DEBIT_C_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.3 Debit Card Dashboard with XSS paylo... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_13_DEBIT_C_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.3 Debit Card Dashboard with empty JSO... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_13_DEBIT_C_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.3 Debit Card Dashboard (should be POST... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_13_DEBIT_C_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.3 Debit Card Dash... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.3.1 Card Activation

**Method**: POST | **Endpoint**: `/1.3.1 Card Activation`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_131_CARD_A_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.3.1 Card A... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_131_CARD_A_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.3.1 Card Activation with min/max valu... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_131_CARD_A_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.3.1 Card Activation with malformed da... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_131_CARD_A_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.3.1 Card Activation with values below... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_131_CARD_A_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.3.1 Card Activation WITHOUT Authoriza... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_131_CARD_A_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.3.1 Card Activation with invalid/expi... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_131_CARD_A_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.3.1 Card Activation with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_131_CARD_A_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.3.1 Card Activation with SQL injectio... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_131_CARD_A_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.3.1 Card Activation with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_131_CARD_A_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.3.1 Card Activation with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_131_CARD_A_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.3.1 Card Activation (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_131_CARD_A_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.3.1 Card Activati... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.3.2 Card Details

**Method**: POST | **Endpoint**: `/1.3.2 Card Details`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_132_CARD_D_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.3.2 Card D... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_132_CARD_D_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.3.2 Card Details with min/max values ... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_132_CARD_D_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.3.2 Card Details with malformed date/... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_132_CARD_D_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.3.2 Card Details with values below mi... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_132_CARD_D_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.3.2 Card Details WITHOUT Authorizatio... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_132_CARD_D_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.3.2 Card Details with invalid/expired... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_132_CARD_D_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.3.2 Card Details with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_132_CARD_D_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.3.2 Card Details with SQL injection i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_132_CARD_D_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.3.2 Card Details with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_132_CARD_D_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.3.2 Card Details with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_132_CARD_D_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.3.2 Card Details (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_132_CARD_D_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.3.2 Card Details... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.3.2.1 Linked Accounts

**Method**: POST | **Endpoint**: `/1.3.2.1 Linked Accounts`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_1321_LINKE_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.3.2.1 Link... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_1321_LINKE_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.3.2.1 Linked Accounts with min/max va... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_1321_LINKE_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.3.2.1 Linked Accounts with malformed ... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_1321_LINKE_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.3.2.1 Linked Accounts with values bel... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_1321_LINKE_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.3.2.1 Linked Accounts WITHOUT Authori... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_1321_LINKE_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.3.2.1 Linked Accounts with invalid/ex... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_1321_LINKE_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.3.2.1 Linked Accounts with invalid JS... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_1321_LINKE_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.3.2.1 Linked Accounts with SQL inject... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1321_LINKE_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.3.2.1 Linked Accounts with XSS payloa... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1321_LINKE_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.3.2.1 Linked Accounts with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_1321_LINKE_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.3.2.1 Linked Accounts (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_1321_LINKE_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.3.2.1 Linked Acco... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.3.2.2 Reset Card PIN

**Method**: POST | **Endpoint**: `/1.3.2.2 Reset Card PIN`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_1322_RESET_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.3.2.2 Rese... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_1322_RESET_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.3.2.2 Reset Card PIN with min/max val... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_1322_RESET_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.3.2.2 Reset Card PIN with malformed d... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_1322_RESET_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.3.2.2 Reset Card PIN with values belo... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_1322_RESET_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.3.2.2 Reset Card PIN WITHOUT Authoriz... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_1322_RESET_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.3.2.2 Reset Card PIN with invalid/exp... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_1322_RESET_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.3.2.2 Reset Card PIN with invalid JSO... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_1322_RESET_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.3.2.2 Reset Card PIN with SQL injecti... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1322_RESET_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.3.2.2 Reset Card PIN with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1322_RESET_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.3.2.2 Reset Card PIN with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_1322_RESET_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.3.2.2 Reset Card PIN (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_1322_RESET_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.3.2.2 Reset Card ... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.3.2.3 Block & Unblock Card

**Method**: POST | **Endpoint**: `/1.3.2.3 Block & Unblock Card`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_1323_BLOCK_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.3.2.3 Bloc... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_1323_BLOCK_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.3.2.3 Block & Unblock Card with min/m... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_1323_BLOCK_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.3.2.3 Block & Unblock Card with malfo... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_1323_BLOCK_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.3.2.3 Block & Unblock Card with value... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_1323_BLOCK_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.3.2.3 Block & Unblock Card WITHOUT Au... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_1323_BLOCK_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.3.2.3 Block & Unblock Card with inval... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_1323_BLOCK_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.3.2.3 Block & Unblock Card with inval... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_1323_BLOCK_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.3.2.3 Block & Unblock Card with SQL i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1323_BLOCK_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.3.2.3 Block & Unblock Card with XSS p... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1323_BLOCK_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.3.2.3 Block & Unblock Card with empty... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_1323_BLOCK_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.3.2.3 Block & Unblock Card (should be ... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_1323_BLOCK_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.3.2.3 Block & Unb... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.3.2.4 Replace Card

**Method**: POST | **Endpoint**: `/1.3.2.4 Replace Card`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_1324_REPLA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.3.2.4 Repl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_1324_REPLA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.3.2.4 Replace Card with min/max value... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_1324_REPLA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.3.2.4 Replace Card with malformed dat... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_1324_REPLA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.3.2.4 Replace Card with values below ... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_1324_REPLA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.3.2.4 Replace Card WITHOUT Authorizat... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_1324_REPLA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.3.2.4 Replace Card with invalid/expir... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_1324_REPLA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.3.2.4 Replace Card with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_1324_REPLA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.3.2.4 Replace Card with SQL injection... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1324_REPLA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.3.2.4 Replace Card with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1324_REPLA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.3.2.4 Replace Card with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_1324_REPLA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.3.2.4 Replace Card (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_1324_REPLA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.3.2.4 Replace Car... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: XP APIs >>

**Method**: POST | **Endpoint**: `/XP APIs >>`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_XP_APIS__001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /XP APIs >> w... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_XP_APIS__002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /XP APIs >> with min/max values for nume... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_XP_APIS__003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /XP APIs >> with malformed date/email... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_XP_APIS__004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /XP APIs >> with values below min or abo... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_XP_APIS__005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /XP APIs >> WITHOUT Authorization header... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_XP_APIS__006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /XP APIs >> with invalid/expired token... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_XP_APIS__007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /XP APIs >> with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_XP_APIS__008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /XP APIs >> with SQL injection in text f... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_XP_APIS__009 | XSS payload in input | Negative | Security | Valid token... | Send POST /XP APIs >> with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_XP_APIS__010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /XP APIs >> with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_XP_APIS__011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /XP APIs >> (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_XP_APIS__012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /XP APIs >>... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getLinkedAccounts

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/info/card/v1/external/accounts/debit-card/account-id/{accountId}/linked-accounts`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETLINKEDA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETLINKEDA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETLINKEDA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETLINKEDA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETLINKEDA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETLINKEDA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETLINKEDA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETLINKEDA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETLINKEDA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETLINKEDA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETLINKEDA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/info... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETLINKEDA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getManageCasa

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/info/casa/v1/external/casa/manage`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETMANAGEC_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETMANAGEC_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETMANAGEC_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETMANAGEC_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETMANAGEC_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETMANAGEC_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETMANAGEC_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETMANAGEC_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETMANAGEC_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETMANAGEC_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETMANAGEC_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/info... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETMANAGEC_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: debitCardReplacementChargeRule

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/replacement-charge-rules`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_DEBITCARDR_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_DEBITCARDR_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_DEBITCARDR_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_DEBITCARDR_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_DEBITCARDR_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_DEBITCARDR_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_DEBITCARDR_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_DEBITCARDR_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_DEBITCARDR_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_DEBITCARDR_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_DEBITCARDR_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_DEBITCARDR_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_DEBITCARDR_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_DEBITCARDR_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_DEBITCARDR_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_DEBITCARDR_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_DEBITCARDR_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_DEBITCARDR_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_DEBITCARDR_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_DEBITCARDR_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_DEBITCARDR_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_DEBITCARDR_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_DEBITCARDR_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_DEBITCARDR_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: S2U APIs >>

**Method**: POST | **Endpoint**: `/S2U APIs >>`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_S2U_APIS__001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /S2U APIs >> ... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_S2U_APIS__002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /S2U APIs >> with min/max values for num... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_S2U_APIS__003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /S2U APIs >> with malformed date/email... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_S2U_APIS__004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /S2U APIs >> with values below min or ab... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_S2U_APIS__005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /S2U APIs >> WITHOUT Authorization heade... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_S2U_APIS__006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /S2U APIs >> with invalid/expired token... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_S2U_APIS__007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /S2U APIs >> with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_S2U_APIS__008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /S2U APIs >> with SQL injection in text ... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_S2U_APIS__009 | XSS payload in input | Negative | Security | Valid token... | Send POST /S2U APIs >> with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_S2U_APIS__010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /S2U APIs >> with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_S2U_APIS__011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /S2U APIs >> (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_S2U_APIS__012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /S2U APIs >>... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: cvvInquiry

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/cvv-inquiry`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_CVVINQUIRY_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CVVINQUIRY_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CVVINQUIRY_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CVVINQUIRY_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CVVINQUIRY_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CVVINQUIRY_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CVVINQUIRY_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CVVINQUIRY_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CVVINQUIRY_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CVVINQUIRY_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CVVINQUIRY_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CVVINQUIRY_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: debitCardActivation

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/activate`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_DEBITCARDA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_DEBITCARDA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_DEBITCARDA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_DEBITCARDA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_DEBITCARDA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_DEBITCARDA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_DEBITCARDA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_DEBITCARDA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_DEBITCARDA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_DEBITCARDA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_DEBITCARDA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_DEBITCARDA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: linkAccountToCard

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/linked-account`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_LINKACCOUN_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_LINKACCOUN_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_LINKACCOUN_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_LINKACCOUN_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_LINKACCOUN_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_LINKACCOUN_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_LINKACCOUN_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_LINKACCOUN_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_LINKACCOUN_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_LINKACCOUN_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_LINKACCOUN_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_LINKACCOUN_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: replaceDebitCard

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/replacement`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_REPLACEDEB_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_REPLACEDEB_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_REPLACEDEB_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_REPLACEDEB_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_REPLACEDEB_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_REPLACEDEB_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_REPLACEDEB_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_REPLACEDEB_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_REPLACEDEB_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_REPLACEDEB_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_REPLACEDEB_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_REPLACEDEB_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: debitCardBlock

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/block`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_DEBITCARDB_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_DEBITCARDB_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_DEBITCARDB_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_DEBITCARDB_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_DEBITCARDB_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_DEBITCARDB_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_DEBITCARDB_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_DEBITCARDB_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_DEBITCARDB_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_DEBITCARDB_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_DEBITCARDB_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_DEBITCARDB_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: debitCardUnblock

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/unblock`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_DEBITCARDU_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_DEBITCARDU_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_DEBITCARDU_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_DEBITCARDU_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_DEBITCARDU_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_DEBITCARDU_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_DEBITCARDU_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_DEBITCARDU_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_DEBITCARDU_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_DEBITCARDU_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_DEBITCARDU_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_DEBITCARDU_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: debitCardResetPin

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/reset-pin`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_DEBITCARDR_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_DEBITCARDR_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_DEBITCARDR_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_DEBITCARDR_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_DEBITCARDR_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_DEBITCARDR_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_DEBITCARDR_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_DEBITCARDR_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_DEBITCARDR_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_DEBITCARDR_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_DEBITCARDR_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_DEBITCARDR_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_DEBITCARDR_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_DEBITCARDR_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_DEBITCARDR_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_DEBITCARDR_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_DEBITCARDR_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_DEBITCARDR_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_DEBITCARDR_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_DEBITCARDR_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_DEBITCARDR_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_DEBITCARDR_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_DEBITCARDR_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_DEBITCARDR_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

