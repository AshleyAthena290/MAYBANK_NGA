# API Validation Test Cases

**Generated**: 2026-07-21 15:02:19

**Reference**: PT_Scan_and_Pay_DDD_API_Spec_v2_working.xlsx

## TEST SUMMARY

### Statistics
- **Total APIs**: 23
- **Total Test Cases**: 276
  - Positive: 46
  - Negative: 230

### APIs Identified

1. **README**
   - Method: `POST`
   - Endpoint: `/README`
   - Request Fields: 0
   - Response Fields: 0

2. **1.2 Account Listing**
   - Method: `POST`
   - Endpoint: `/1.2 Account Listing`
   - Request Fields: 0
   - Response Fields: 0

3. **1.2.1 CASA**
   - Method: `POST`
   - Endpoint: `/1.2.1 CASA`
   - Request Fields: 0
   - Response Fields: 0

4. **1.2.1.1 Transaction Details**
   - Method: `POST`
   - Endpoint: `/1.2.1.1 Transaction Details`
   - Request Fields: 0
   - Response Fields: 0

5. **1.2.1.2 ViewAllTrans**
   - Method: `POST`
   - Endpoint: `/1.2.1.2 ViewAllTrans`
   - Request Fields: 0
   - Response Fields: 0

6. **1.2.1.3 ManageLinkedCard**
   - Method: `POST`
   - Endpoint: `/1.2.1.3 ManageLinkedCard`
   - Request Fields: 0
   - Response Fields: 0

7. **1.2.1.4 BlockAccount**
   - Method: `POST`
   - Endpoint: `/1.2.1.4 BlockAccount`
   - Request Fields: 0
   - Response Fields: 0

8. **1.2.1.5 DormantAccount**
   - Method: `POST`
   - Endpoint: `/1.2.1.5 DormantAccount`
   - Request Fields: 0
   - Response Fields: 0

9. **1.2.1.6 Inactive Account**
   - Method: `POST`
   - Endpoint: `/1.2.1.6 Inactive Account`
   - Request Fields: 0
   - Response Fields: 0

10. **1.2.1.7 Closed Account**
   - Method: `POST`
   - Endpoint: `/1.2.1.7 Closed Account`
   - Request Fields: 0
   - Response Fields: 0

11. **1.2.6 Global Access**
   - Method: `POST`
   - Endpoint: `/1.2.6 Global Access`
   - Request Fields: 0
   - Response Fields: 0

12. **1.2.6.3 Remove Currency**
   - Method: `POST`
   - Endpoint: `/1.2.6.3 Remove Currency`
   - Request Fields: 0
   - Response Fields: 0

13. **1.2.7 Giro Multicurrency**
   - Method: `POST`
   - Endpoint: `/1.2.7 Giro Multicurrency`
   - Request Fields: 0
   - Response Fields: 0

14. **XP APIs >>**
   - Method: `POST`
   - Endpoint: `/XP APIs >>`
   - Request Fields: 0
   - Response Fields: 0

15. **getManageDebitCard**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/manage`
   - Request Fields: 0
   - Response Fields: 0

16. **ECLIPSE APIs >>**
   - Method: `POST`
   - Endpoint: `/ECLIPSE APIs >>`
   - Request Fields: 0
   - Response Fields: 0

17. **getAutoSweep**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/info/casa/v1/external/accounts/{accountId}/auto-sweep`
   - Request Fields: 0
   - Response Fields: 0

18. **S2U APIs >>**
   - Method: `POST`
   - Endpoint: `/S2U APIs >>`
   - Request Fields: 0
   - Response Fields: 0

19. **setAutoSweep**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/auto-sweep`
   - Request Fields: 0
   - Response Fields: 0

20. **setLinkedCard**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/linked-card`
   - Request Fields: 0
   - Response Fields: 0

21. **blockAccounts**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/block`
   - Request Fields: 0
   - Response Fields: 0

22. **reactivateAccount**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/reactivate`
   - Request Fields: 0
   - Response Fields: 0

23. **Sheet1**
   - Method: `POST`
   - Endpoint: `/Sheet1`
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

### API: 1.2 Account Listing

**Method**: POST | **Endpoint**: `/1.2 Account Listing`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_12_ACCOUNT_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.2 Account ... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_12_ACCOUNT_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.2 Account Listing with min/max values... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_12_ACCOUNT_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.2 Account Listing with malformed date... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_12_ACCOUNT_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.2 Account Listing with values below m... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_12_ACCOUNT_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.2 Account Listing WITHOUT Authorizati... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_12_ACCOUNT_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.2 Account Listing with invalid/expire... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_12_ACCOUNT_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2 Account Listing with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_12_ACCOUNT_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.2 Account Listing with SQL injection ... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_12_ACCOUNT_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.2 Account Listing with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_12_ACCOUNT_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2 Account Listing with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_12_ACCOUNT_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.2 Account Listing (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_12_ACCOUNT_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.2 Account Listing... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.2.1 CASA

**Method**: POST | **Endpoint**: `/1.2.1 CASA`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_121_CASA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.2.1 CASA w... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_121_CASA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.2.1 CASA with min/max values for nume... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_121_CASA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.2.1 CASA with malformed date/email... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_121_CASA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.2.1 CASA with values below min or abo... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_121_CASA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.2.1 CASA WITHOUT Authorization header... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_121_CASA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.2.1 CASA with invalid/expired token... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_121_CASA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1 CASA with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_121_CASA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.2.1 CASA with SQL injection in text f... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_121_CASA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.2.1 CASA with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_121_CASA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1 CASA with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_121_CASA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.2.1 CASA (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_121_CASA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.2.1 CASA... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.2.1.1 Transaction Details

**Method**: POST | **Endpoint**: `/1.2.1.1 Transaction Details`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_1211_TRANS_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.2.1.1 Tran... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_1211_TRANS_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.2.1.1 Transaction Details with min/ma... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_1211_TRANS_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.2.1.1 Transaction Details with malfor... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_1211_TRANS_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.2.1.1 Transaction Details with values... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_1211_TRANS_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.2.1.1 Transaction Details WITHOUT Aut... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_1211_TRANS_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.2.1.1 Transaction Details with invali... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_1211_TRANS_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1.1 Transaction Details with invali... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_1211_TRANS_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.2.1.1 Transaction Details with SQL in... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1211_TRANS_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.2.1.1 Transaction Details with XSS pa... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1211_TRANS_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1.1 Transaction Details with empty ... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_1211_TRANS_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.2.1.1 Transaction Details (should be P... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_1211_TRANS_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.2.1.1 Transaction... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.2.1.2 ViewAllTrans

**Method**: POST | **Endpoint**: `/1.2.1.2 ViewAllTrans`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_1212_VIEWA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.2.1.2 View... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_1212_VIEWA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.2.1.2 ViewAllTrans with min/max value... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_1212_VIEWA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.2.1.2 ViewAllTrans with malformed dat... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_1212_VIEWA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.2.1.2 ViewAllTrans with values below ... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_1212_VIEWA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.2.1.2 ViewAllTrans WITHOUT Authorizat... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_1212_VIEWA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.2.1.2 ViewAllTrans with invalid/expir... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_1212_VIEWA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1.2 ViewAllTrans with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_1212_VIEWA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.2.1.2 ViewAllTrans with SQL injection... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1212_VIEWA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.2.1.2 ViewAllTrans with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1212_VIEWA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1.2 ViewAllTrans with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_1212_VIEWA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.2.1.2 ViewAllTrans (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_1212_VIEWA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.2.1.2 ViewAllTran... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.2.1.3 ManageLinkedCard

**Method**: POST | **Endpoint**: `/1.2.1.3 ManageLinkedCard`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_1213_MANAG_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.2.1.3 Mana... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_1213_MANAG_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.2.1.3 ManageLinkedCard with min/max v... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_1213_MANAG_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.2.1.3 ManageLinkedCard with malformed... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_1213_MANAG_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.2.1.3 ManageLinkedCard with values be... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_1213_MANAG_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.2.1.3 ManageLinkedCard WITHOUT Author... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_1213_MANAG_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.2.1.3 ManageLinkedCard with invalid/e... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_1213_MANAG_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1.3 ManageLinkedCard with invalid J... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_1213_MANAG_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.2.1.3 ManageLinkedCard with SQL injec... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1213_MANAG_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.2.1.3 ManageLinkedCard with XSS paylo... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1213_MANAG_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1.3 ManageLinkedCard with empty JSO... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_1213_MANAG_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.2.1.3 ManageLinkedCard (should be POST... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_1213_MANAG_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.2.1.3 ManageLinke... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.2.1.4 BlockAccount

**Method**: POST | **Endpoint**: `/1.2.1.4 BlockAccount`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_1214_BLOCK_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.2.1.4 Bloc... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_1214_BLOCK_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.2.1.4 BlockAccount with min/max value... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_1214_BLOCK_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.2.1.4 BlockAccount with malformed dat... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_1214_BLOCK_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.2.1.4 BlockAccount with values below ... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_1214_BLOCK_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.2.1.4 BlockAccount WITHOUT Authorizat... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_1214_BLOCK_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.2.1.4 BlockAccount with invalid/expir... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_1214_BLOCK_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1.4 BlockAccount with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_1214_BLOCK_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.2.1.4 BlockAccount with SQL injection... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1214_BLOCK_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.2.1.4 BlockAccount with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1214_BLOCK_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1.4 BlockAccount with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_1214_BLOCK_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.2.1.4 BlockAccount (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_1214_BLOCK_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.2.1.4 BlockAccoun... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.2.1.5 DormantAccount

**Method**: POST | **Endpoint**: `/1.2.1.5 DormantAccount`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_1215_DORMA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.2.1.5 Dorm... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_1215_DORMA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.2.1.5 DormantAccount with min/max val... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_1215_DORMA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.2.1.5 DormantAccount with malformed d... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_1215_DORMA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.2.1.5 DormantAccount with values belo... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_1215_DORMA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.2.1.5 DormantAccount WITHOUT Authoriz... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_1215_DORMA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.2.1.5 DormantAccount with invalid/exp... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_1215_DORMA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1.5 DormantAccount with invalid JSO... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_1215_DORMA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.2.1.5 DormantAccount with SQL injecti... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1215_DORMA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.2.1.5 DormantAccount with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1215_DORMA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1.5 DormantAccount with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_1215_DORMA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.2.1.5 DormantAccount (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_1215_DORMA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.2.1.5 DormantAcco... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.2.1.6 Inactive Account

**Method**: POST | **Endpoint**: `/1.2.1.6 Inactive Account`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_1216_INACT_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.2.1.6 Inac... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_1216_INACT_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.2.1.6 Inactive Account with min/max v... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_1216_INACT_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.2.1.6 Inactive Account with malformed... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_1216_INACT_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.2.1.6 Inactive Account with values be... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_1216_INACT_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.2.1.6 Inactive Account WITHOUT Author... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_1216_INACT_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.2.1.6 Inactive Account with invalid/e... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_1216_INACT_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1.6 Inactive Account with invalid J... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_1216_INACT_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.2.1.6 Inactive Account with SQL injec... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1216_INACT_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.2.1.6 Inactive Account with XSS paylo... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1216_INACT_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1.6 Inactive Account with empty JSO... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_1216_INACT_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.2.1.6 Inactive Account (should be POST... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_1216_INACT_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.2.1.6 Inactive Ac... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.2.1.7 Closed Account

**Method**: POST | **Endpoint**: `/1.2.1.7 Closed Account`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_1217_CLOSE_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.2.1.7 Clos... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_1217_CLOSE_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.2.1.7 Closed Account with min/max val... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_1217_CLOSE_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.2.1.7 Closed Account with malformed d... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_1217_CLOSE_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.2.1.7 Closed Account with values belo... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_1217_CLOSE_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.2.1.7 Closed Account WITHOUT Authoriz... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_1217_CLOSE_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.2.1.7 Closed Account with invalid/exp... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_1217_CLOSE_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1.7 Closed Account with invalid JSO... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_1217_CLOSE_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.2.1.7 Closed Account with SQL injecti... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1217_CLOSE_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.2.1.7 Closed Account with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1217_CLOSE_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1.7 Closed Account with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_1217_CLOSE_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.2.1.7 Closed Account (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_1217_CLOSE_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.2.1.7 Closed Acco... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.2.6 Global Access

**Method**: POST | **Endpoint**: `/1.2.6 Global Access`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_126_GLOBAL_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.2.6 Global... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_126_GLOBAL_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.2.6 Global Access with min/max values... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_126_GLOBAL_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.2.6 Global Access with malformed date... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_126_GLOBAL_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.2.6 Global Access with values below m... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_126_GLOBAL_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.2.6 Global Access WITHOUT Authorizati... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_126_GLOBAL_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.2.6 Global Access with invalid/expire... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_126_GLOBAL_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.6 Global Access with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_126_GLOBAL_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.2.6 Global Access with SQL injection ... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_126_GLOBAL_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.2.6 Global Access with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_126_GLOBAL_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.6 Global Access with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_126_GLOBAL_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.2.6 Global Access (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_126_GLOBAL_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.2.6 Global Access... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.2.6.3 Remove Currency

**Method**: POST | **Endpoint**: `/1.2.6.3 Remove Currency`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_1263_REMOV_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.2.6.3 Remo... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_1263_REMOV_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.2.6.3 Remove Currency with min/max va... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_1263_REMOV_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.2.6.3 Remove Currency with malformed ... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_1263_REMOV_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.2.6.3 Remove Currency with values bel... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_1263_REMOV_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.2.6.3 Remove Currency WITHOUT Authori... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_1263_REMOV_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.2.6.3 Remove Currency with invalid/ex... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_1263_REMOV_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.6.3 Remove Currency with invalid JS... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_1263_REMOV_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.2.6.3 Remove Currency with SQL inject... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1263_REMOV_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.2.6.3 Remove Currency with XSS payloa... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_1263_REMOV_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.6.3 Remove Currency with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_1263_REMOV_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.2.6.3 Remove Currency (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_1263_REMOV_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.2.6.3 Remove Curr... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.2.7 Giro Multicurrency

**Method**: POST | **Endpoint**: `/1.2.7 Giro Multicurrency`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_127_GIRO_M_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.2.7 Giro M... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_127_GIRO_M_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.2.7 Giro Multicurrency with min/max v... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_127_GIRO_M_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.2.7 Giro Multicurrency with malformed... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_127_GIRO_M_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.2.7 Giro Multicurrency with values be... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_127_GIRO_M_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.2.7 Giro Multicurrency WITHOUT Author... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_127_GIRO_M_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.2.7 Giro Multicurrency with invalid/e... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_127_GIRO_M_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.7 Giro Multicurrency with invalid J... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_127_GIRO_M_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.2.7 Giro Multicurrency with SQL injec... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_127_GIRO_M_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.2.7 Giro Multicurrency with XSS paylo... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_127_GIRO_M_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.7 Giro Multicurrency with empty JSO... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_127_GIRO_M_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.2.7 Giro Multicurrency (should be POST... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_127_GIRO_M_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.2.7 Giro Multicur... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

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

### API: getManageDebitCard

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/manage`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETMANAGED_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETMANAGED_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETMANAGED_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETMANAGED_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETMANAGED_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETMANAGED_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETMANAGED_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETMANAGED_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETMANAGED_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETMANAGED_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETMANAGED_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETMANAGED_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: ECLIPSE APIs >>

**Method**: POST | **Endpoint**: `/ECLIPSE APIs >>`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_ECLIPSE_AP_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /ECLIPSE APIs... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_ECLIPSE_AP_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /ECLIPSE APIs >> with min/max values for... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_ECLIPSE_AP_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /ECLIPSE APIs >> with malformed date/ema... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_ECLIPSE_AP_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /ECLIPSE APIs >> with values below min o... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_ECLIPSE_AP_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /ECLIPSE APIs >> WITHOUT Authorization h... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_ECLIPSE_AP_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /ECLIPSE APIs >> with invalid/expired to... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_ECLIPSE_AP_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /ECLIPSE APIs >> with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_ECLIPSE_AP_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /ECLIPSE APIs >> with SQL injection in t... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_ECLIPSE_AP_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /ECLIPSE APIs >> with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_ECLIPSE_AP_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /ECLIPSE APIs >> with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_ECLIPSE_AP_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /ECLIPSE APIs >> (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_ECLIPSE_AP_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /ECLIPSE APIs >>... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getAutoSweep

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/info/casa/v1/external/accounts/{accountId}/auto-sweep`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETAUTOSWE_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETAUTOSWE_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETAUTOSWE_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETAUTOSWE_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETAUTOSWE_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETAUTOSWE_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETAUTOSWE_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETAUTOSWE_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETAUTOSWE_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETAUTOSWE_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETAUTOSWE_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/info... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETAUTOSWE_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

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

### API: setAutoSweep

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/auto-sweep`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_SETAUTOSWE_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_SETAUTOSWE_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_SETAUTOSWE_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_SETAUTOSWE_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_SETAUTOSWE_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_SETAUTOSWE_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_SETAUTOSWE_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_SETAUTOSWE_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SETAUTOSWE_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SETAUTOSWE_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_SETAUTOSWE_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_SETAUTOSWE_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: setLinkedCard

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/linked-card`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_SETLINKEDC_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_SETLINKEDC_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_SETLINKEDC_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_SETLINKEDC_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_SETLINKEDC_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_SETLINKEDC_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_SETLINKEDC_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_SETLINKEDC_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SETLINKEDC_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SETLINKEDC_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_SETLINKEDC_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_SETLINKEDC_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: blockAccounts

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/block`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_BLOCKACCOU_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_BLOCKACCOU_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_BLOCKACCOU_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_BLOCKACCOU_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_BLOCKACCOU_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_BLOCKACCOU_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_BLOCKACCOU_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_BLOCKACCOU_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_BLOCKACCOU_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_BLOCKACCOU_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_BLOCKACCOU_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_BLOCKACCOU_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: reactivateAccount

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/reactivate`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_REACTIVATE_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_REACTIVATE_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_REACTIVATE_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_REACTIVATE_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_REACTIVATE_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_REACTIVATE_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_REACTIVATE_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_REACTIVATE_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_REACTIVATE_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_REACTIVATE_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_REACTIVATE_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_REACTIVATE_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: Sheet1

**Method**: POST | **Endpoint**: `/Sheet1`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_SHEET1_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /Sheet1 with ... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_SHEET1_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /Sheet1 with min/max values for numeric/... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_SHEET1_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /Sheet1 with malformed date/email... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_SHEET1_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /Sheet1 with values below min or above m... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_SHEET1_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /Sheet1 WITHOUT Authorization header... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_SHEET1_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /Sheet1 with invalid/expired token... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_SHEET1_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /Sheet1 with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_SHEET1_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /Sheet1 with SQL injection in text field... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SHEET1_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /Sheet1 with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SHEET1_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /Sheet1 with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_SHEET1_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /Sheet1 (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_SHEET1_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /Sheet1... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

