# API Validation Test Cases

**Generated**: 2026-07-21 15:36:02

**Reference**: PT_Scan_and_Pay_DDD_API_Spec_v2_working.xlsx

## TEST SUMMARY

### Statistics
- **Total APIs**: 5
- **Total Test Cases**: 60
  - Positive: 10
  - Negative: 50

### APIs Identified

1. **README**
   - Method: `POST`
   - Endpoint: `/README`
   - Request Fields: 0
   - Response Fields: 0

2. **1.1 Loan Dashboard - Landing**
   - Method: `POST`
   - Endpoint: `/1.1 Loan Dashboard - Landing`
   - Request Fields: 0
   - Response Fields: 0

3. **1.2 Personal Loan Acc**
   - Method: `POST`
   - Endpoint: `/1.2 Personal Loan Acc`
   - Request Fields: 0
   - Response Fields: 0

4. **1.2.1 View All Trans**
   - Method: `POST`
   - Endpoint: `/1.2.1 View All Trans`
   - Request Fields: 0
   - Response Fields: 0

5. **1.2.3 PL Convent Manage**
   - Method: `POST`
   - Endpoint: `/1.2.3 PL Convent Manage`
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

### API: 1.1 Loan Dashboard - Landing

**Method**: POST | **Endpoint**: `/1.1 Loan Dashboard - Landing`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_11_LOAN_DA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.1 Loan Das... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_11_LOAN_DA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.1 Loan Dashboard - Landing with min/m... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_11_LOAN_DA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.1 Loan Dashboard - Landing with malfo... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_11_LOAN_DA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.1 Loan Dashboard - Landing with value... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_11_LOAN_DA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.1 Loan Dashboard - Landing WITHOUT Au... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_11_LOAN_DA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.1 Loan Dashboard - Landing with inval... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_11_LOAN_DA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.1 Loan Dashboard - Landing with inval... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_11_LOAN_DA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.1 Loan Dashboard - Landing with SQL i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_11_LOAN_DA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.1 Loan Dashboard - Landing with XSS p... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_11_LOAN_DA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.1 Loan Dashboard - Landing with empty... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_11_LOAN_DA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.1 Loan Dashboard - Landing (should be ... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_11_LOAN_DA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.1 Loan Dashboard ... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.2 Personal Loan Acc

**Method**: POST | **Endpoint**: `/1.2 Personal Loan Acc`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_12_PERSONA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.2 Personal... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_12_PERSONA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.2 Personal Loan Acc with min/max valu... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_12_PERSONA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.2 Personal Loan Acc with malformed da... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_12_PERSONA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.2 Personal Loan Acc with values below... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_12_PERSONA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.2 Personal Loan Acc WITHOUT Authoriza... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_12_PERSONA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.2 Personal Loan Acc with invalid/expi... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_12_PERSONA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2 Personal Loan Acc with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_12_PERSONA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.2 Personal Loan Acc with SQL injectio... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_12_PERSONA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.2 Personal Loan Acc with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_12_PERSONA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2 Personal Loan Acc with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_12_PERSONA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.2 Personal Loan Acc (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_12_PERSONA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.2 Personal Loan A... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.2.1 View All Trans

**Method**: POST | **Endpoint**: `/1.2.1 View All Trans`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_121_VIEW_A_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.2.1 View A... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_121_VIEW_A_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.2.1 View All Trans with min/max value... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_121_VIEW_A_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.2.1 View All Trans with malformed dat... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_121_VIEW_A_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.2.1 View All Trans with values below ... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_121_VIEW_A_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.2.1 View All Trans WITHOUT Authorizat... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_121_VIEW_A_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.2.1 View All Trans with invalid/expir... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_121_VIEW_A_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1 View All Trans with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_121_VIEW_A_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.2.1 View All Trans with SQL injection... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_121_VIEW_A_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.2.1 View All Trans with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_121_VIEW_A_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.1 View All Trans with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_121_VIEW_A_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.2.1 View All Trans (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_121_VIEW_A_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.2.1 View All Tran... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 1.2.3 PL Convent Manage

**Method**: POST | **Endpoint**: `/1.2.3 PL Convent Manage`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_123_PL_CON_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /1.2.3 PL Con... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_123_PL_CON_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /1.2.3 PL Convent Manage with min/max va... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_123_PL_CON_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /1.2.3 PL Convent Manage with malformed ... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_123_PL_CON_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /1.2.3 PL Convent Manage with values bel... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_123_PL_CON_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /1.2.3 PL Convent Manage WITHOUT Authori... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_123_PL_CON_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /1.2.3 PL Convent Manage with invalid/ex... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_123_PL_CON_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.3 PL Convent Manage with invalid JS... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_123_PL_CON_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /1.2.3 PL Convent Manage with SQL inject... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_123_PL_CON_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /1.2.3 PL Convent Manage with XSS payloa... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_123_PL_CON_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /1.2.3 PL Convent Manage with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_123_PL_CON_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /1.2.3 PL Convent Manage (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_123_PL_CON_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /1.2.3 PL Convent Ma... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

