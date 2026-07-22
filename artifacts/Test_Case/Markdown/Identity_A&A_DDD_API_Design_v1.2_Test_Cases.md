# API Validation Test Cases

**Generated**: 2026-07-21 14:55:46

**Reference**: PT_Scan_and_Pay_DDD_API_Spec_v2_working.xlsx

## TEST SUMMARY

### Statistics
- **Total APIs**: 27
- **Total Test Cases**: 324
  - Positive: 54
  - Negative: 270

### APIs Identified

1. **featureRule**
   - Method: `POST`
   - Endpoint: `/featureRule`
   - Request Fields: 0
   - Response Fields: 0

2. **AccountGroupRule**
   - Method: `POST`
   - Endpoint: `/AccountGroupRule`
   - Request Fields: 0
   - Response Fields: 0

3. **CustomerType&Class**
   - Method: `POST`
   - Endpoint: `/CustomerType&Class`
   - Request Fields: 0
   - Response Fields: 0

4. **README**
   - Method: `POST`
   - Endpoint: `/README`
   - Request Fields: 0
   - Response Fields: 0

5. **Manage_Dashboard**
   - Method: `POST`
   - Endpoint: `/Manage_Dashboard`
   - Request Fields: 0
   - Response Fields: 0

6. **Manage_2P**
   - Method: `POST`
   - Endpoint: `/Manage_2P`
   - Request Fields: 0
   - Response Fields: 0

7. **Manage_Small_Bento**
   - Method: `POST`
   - Endpoint: `/Manage_Small_Bento`
   - Request Fields: 0
   - Response Fields: 0

8. **Manage_Medium_Bento**
   - Method: `POST`
   - Endpoint: `/Manage_Medium_Bento`
   - Request Fields: 0
   - Response Fields: 0

9. **Manage_Large_Bento**
   - Method: `POST`
   - Endpoint: `/Manage_Large_Bento`
   - Request Fields: 0
   - Response Fields: 0

10. **getPrimary**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/xp-dashboard/v1/external/accounts/primary`
   - Request Fields: 0
   - Response Fields: 0

11. **getRelationshipManager**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/customer/v1/external/relationship-manager`
   - Request Fields: 0
   - Response Fields: 0

12. **getAggregatedExpenses**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/xp-dashboard/v1/external/pfm/expenses`
   - Request Fields: 0
   - Response Fields: 0

13. **getAggregatedInvestment**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/xp-dashboard/v1/external/investment/funds`
   - Request Fields: 0
   - Response Fields: 0

14. **getTopCategoriesExpenses**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/xp-dashboard/v1/external/pfm/expenses/top-categories`
   - Request Fields: 0
   - Response Fields: 0

15. **getRecentExpenses**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/xp-dashboard/v1/external/pfm/expenses/recent`
   - Request Fields: 0
   - Response Fields: 0

16. **getForeignExchangeRate**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/maintenance/v1/external/exchange-rate`
   - Request Fields: 0
   - Response Fields: 0

17. **getTabung**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/xp-dashboard/v1/external/tabung`
   - Request Fields: 0
   - Response Fields: 0

18. **getGbi**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/xp-dashboard/v1/external/goal/gbi`
   - Request Fields: 0
   - Response Fields: 0

19. **checkS2UStatus**
   - Method: `POST`
   - Endpoint: `https: //{s2u-IP}:{s2u-PORT}/s2u/v3/check/status`
   - Request Fields: 0
   - Response Fields: 0

20. **Cerebro >>**
   - Method: `POST`
   - Endpoint: `/Cerebro >>`
   - Request Fields: 0
   - Response Fields: 0

21. **securityInit**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/security/init`
   - Request Fields: 0
   - Response Fields: 0

22. **sessionInit**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/session/init`
   - Request Fields: 0
   - Response Fields: 0

23. **usernameValidate**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/identity/username/validate`
   - Request Fields: 0
   - Response Fields: 0

24. **loginPassword**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/identity/login/password`
   - Request Fields: 0
   - Response Fields: 0

25. **deviceStatus**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/identity/device/status`
   - Request Fields: 0
   - Response Fields: 0

26. **otpGenerate**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/identity/otp/generate`
   - Request Fields: 0
   - Response Fields: 0

27. **otpVerify**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/identity/otp/verify`
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

### API: featureRule

**Method**: POST | **Endpoint**: `/featureRule`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_FEATURERUL_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /featureRule ... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_FEATURERUL_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /featureRule with min/max values for num... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_FEATURERUL_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /featureRule with malformed date/email... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_FEATURERUL_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /featureRule with values below min or ab... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_FEATURERUL_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /featureRule WITHOUT Authorization heade... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_FEATURERUL_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /featureRule with invalid/expired token... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_FEATURERUL_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /featureRule with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_FEATURERUL_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /featureRule with SQL injection in text ... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_FEATURERUL_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /featureRule with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_FEATURERUL_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /featureRule with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_FEATURERUL_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /featureRule (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_FEATURERUL_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /featureRule... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: AccountGroupRule

**Method**: POST | **Endpoint**: `/AccountGroupRule`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_ACCOUNTGRO_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /AccountGroup... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_ACCOUNTGRO_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /AccountGroupRule with min/max values fo... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_ACCOUNTGRO_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /AccountGroupRule with malformed date/em... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_ACCOUNTGRO_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /AccountGroupRule with values below min ... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_ACCOUNTGRO_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /AccountGroupRule WITHOUT Authorization ... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_ACCOUNTGRO_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /AccountGroupRule with invalid/expired t... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_ACCOUNTGRO_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /AccountGroupRule with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_ACCOUNTGRO_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /AccountGroupRule with SQL injection in ... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_ACCOUNTGRO_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /AccountGroupRule with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_ACCOUNTGRO_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /AccountGroupRule with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_ACCOUNTGRO_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /AccountGroupRule (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_ACCOUNTGRO_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /AccountGroupRule... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: CustomerType&Class

**Method**: POST | **Endpoint**: `/CustomerType&Class`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_CUSTOMERTY_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /CustomerType... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CUSTOMERTY_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /CustomerType&Class with min/max values ... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CUSTOMERTY_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /CustomerType&Class with malformed date/... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CUSTOMERTY_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /CustomerType&Class with values below mi... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CUSTOMERTY_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /CustomerType&Class WITHOUT Authorizatio... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CUSTOMERTY_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /CustomerType&Class with invalid/expired... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CUSTOMERTY_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /CustomerType&Class with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CUSTOMERTY_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /CustomerType&Class with SQL injection i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CUSTOMERTY_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /CustomerType&Class with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CUSTOMERTY_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /CustomerType&Class with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CUSTOMERTY_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /CustomerType&Class (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CUSTOMERTY_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /CustomerType&Class... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

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

### API: Manage_Dashboard

**Method**: POST | **Endpoint**: `/Manage_Dashboard`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_MANAGE_DAS_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /Manage_Dashb... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_MANAGE_DAS_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /Manage_Dashboard with min/max values fo... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_MANAGE_DAS_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /Manage_Dashboard with malformed date/em... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_MANAGE_DAS_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /Manage_Dashboard with values below min ... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_MANAGE_DAS_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /Manage_Dashboard WITHOUT Authorization ... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_MANAGE_DAS_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /Manage_Dashboard with invalid/expired t... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_MANAGE_DAS_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /Manage_Dashboard with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_MANAGE_DAS_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /Manage_Dashboard with SQL injection in ... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_MANAGE_DAS_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /Manage_Dashboard with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_MANAGE_DAS_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /Manage_Dashboard with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_MANAGE_DAS_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /Manage_Dashboard (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_MANAGE_DAS_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /Manage_Dashboard... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: Manage_2P

**Method**: POST | **Endpoint**: `/Manage_2P`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_MANAGE_2P_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /Manage_2P wi... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_MANAGE_2P_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /Manage_2P with min/max values for numer... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_MANAGE_2P_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /Manage_2P with malformed date/email... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_MANAGE_2P_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /Manage_2P with values below min or abov... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_MANAGE_2P_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /Manage_2P WITHOUT Authorization header... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_MANAGE_2P_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /Manage_2P with invalid/expired token... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_MANAGE_2P_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /Manage_2P with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_MANAGE_2P_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /Manage_2P with SQL injection in text fi... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_MANAGE_2P_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /Manage_2P with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_MANAGE_2P_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /Manage_2P with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_MANAGE_2P_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /Manage_2P (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_MANAGE_2P_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /Manage_2P... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: Manage_Small_Bento

**Method**: POST | **Endpoint**: `/Manage_Small_Bento`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_MANAGE_SMA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /Manage_Small... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_MANAGE_SMA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /Manage_Small_Bento with min/max values ... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_MANAGE_SMA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /Manage_Small_Bento with malformed date/... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_MANAGE_SMA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /Manage_Small_Bento with values below mi... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_MANAGE_SMA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /Manage_Small_Bento WITHOUT Authorizatio... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_MANAGE_SMA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /Manage_Small_Bento with invalid/expired... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_MANAGE_SMA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /Manage_Small_Bento with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_MANAGE_SMA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /Manage_Small_Bento with SQL injection i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_MANAGE_SMA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /Manage_Small_Bento with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_MANAGE_SMA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /Manage_Small_Bento with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_MANAGE_SMA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /Manage_Small_Bento (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_MANAGE_SMA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /Manage_Small_Bento... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: Manage_Medium_Bento

**Method**: POST | **Endpoint**: `/Manage_Medium_Bento`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_MANAGE_MED_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /Manage_Mediu... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_MANAGE_MED_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /Manage_Medium_Bento with min/max values... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_MANAGE_MED_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /Manage_Medium_Bento with malformed date... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_MANAGE_MED_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /Manage_Medium_Bento with values below m... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_MANAGE_MED_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /Manage_Medium_Bento WITHOUT Authorizati... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_MANAGE_MED_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /Manage_Medium_Bento with invalid/expire... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_MANAGE_MED_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /Manage_Medium_Bento with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_MANAGE_MED_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /Manage_Medium_Bento with SQL injection ... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_MANAGE_MED_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /Manage_Medium_Bento with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_MANAGE_MED_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /Manage_Medium_Bento with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_MANAGE_MED_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /Manage_Medium_Bento (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_MANAGE_MED_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /Manage_Medium_Bento... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: Manage_Large_Bento

**Method**: POST | **Endpoint**: `/Manage_Large_Bento`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_MANAGE_LAR_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /Manage_Large... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_MANAGE_LAR_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /Manage_Large_Bento with min/max values ... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_MANAGE_LAR_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /Manage_Large_Bento with malformed date/... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_MANAGE_LAR_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /Manage_Large_Bento with values below mi... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_MANAGE_LAR_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /Manage_Large_Bento WITHOUT Authorizatio... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_MANAGE_LAR_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /Manage_Large_Bento with invalid/expired... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_MANAGE_LAR_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /Manage_Large_Bento with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_MANAGE_LAR_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /Manage_Large_Bento with SQL injection i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_MANAGE_LAR_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /Manage_Large_Bento with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_MANAGE_LAR_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /Manage_Large_Bento with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_MANAGE_LAR_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /Manage_Large_Bento (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_MANAGE_LAR_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /Manage_Large_Bento... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getPrimary

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/xp-dashboard/v1/external/accounts/primary`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETPRIMARY_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETPRIMARY_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETPRIMARY_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETPRIMARY_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETPRIMARY_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETPRIMARY_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETPRIMARY_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETPRIMARY_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETPRIMARY_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETPRIMARY_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETPRIMARY_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/xp-d... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETPRIMARY_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getRelationshipManager

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/customer/v1/external/relationship-manager`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETRELATIO_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETRELATIO_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/cus... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETRELATIO_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/cus... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETRELATIO_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/cus... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETRELATIO_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/cus... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETRELATIO_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/cus... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETRELATIO_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/cus... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETRELATIO_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/cus... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETRELATIO_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/cus... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETRELATIO_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/cus... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETRELATIO_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/cust... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETRELATIO_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getAggregatedExpenses

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/xp-dashboard/v1/external/pfm/expenses`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETAGGREGA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETAGGREGA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETAGGREGA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETAGGREGA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETAGGREGA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETAGGREGA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETAGGREGA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETAGGREGA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETAGGREGA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETAGGREGA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETAGGREGA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/xp-d... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETAGGREGA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_GETAGGREGA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETAGGREGA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETAGGREGA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETAGGREGA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETAGGREGA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETAGGREGA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETAGGREGA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETAGGREGA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETAGGREGA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETAGGREGA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETAGGREGA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/xp-d... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETAGGREGA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getAggregatedInvestment

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/xp-dashboard/v1/external/investment/funds`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETAGGREGA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETAGGREGA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETAGGREGA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETAGGREGA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETAGGREGA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETAGGREGA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETAGGREGA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETAGGREGA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETAGGREGA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETAGGREGA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETAGGREGA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/xp-d... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETAGGREGA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_GETAGGREGA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETAGGREGA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETAGGREGA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETAGGREGA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETAGGREGA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETAGGREGA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETAGGREGA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETAGGREGA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETAGGREGA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETAGGREGA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETAGGREGA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/xp-d... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETAGGREGA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getTopCategoriesExpenses

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/xp-dashboard/v1/external/pfm/expenses/top-categories`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETTOPCATE_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETTOPCATE_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETTOPCATE_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETTOPCATE_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETTOPCATE_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETTOPCATE_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETTOPCATE_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETTOPCATE_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETTOPCATE_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETTOPCATE_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETTOPCATE_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/xp-d... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETTOPCATE_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getRecentExpenses

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/xp-dashboard/v1/external/pfm/expenses/recent`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETRECENTE_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETRECENTE_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETRECENTE_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETRECENTE_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETRECENTE_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETRECENTE_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETRECENTE_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETRECENTE_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETRECENTE_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETRECENTE_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETRECENTE_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/xp-d... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETRECENTE_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getForeignExchangeRate

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/maintenance/v1/external/exchange-rate`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETFOREIGN_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETFOREIGN_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/mai... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETFOREIGN_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/mai... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETFOREIGN_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/mai... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETFOREIGN_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/mai... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETFOREIGN_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/mai... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETFOREIGN_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/mai... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETFOREIGN_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/mai... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETFOREIGN_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/mai... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETFOREIGN_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/mai... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETFOREIGN_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/main... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETFOREIGN_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getTabung

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/xp-dashboard/v1/external/tabung`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETTABUNG_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETTABUNG_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETTABUNG_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETTABUNG_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETTABUNG_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETTABUNG_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETTABUNG_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETTABUNG_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETTABUNG_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETTABUNG_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETTABUNG_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/xp-d... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETTABUNG_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getGbi

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/xp-dashboard/v1/external/goal/gbi`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETGBI_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETGBI_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETGBI_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETGBI_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETGBI_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETGBI_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETGBI_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETGBI_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETGBI_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETGBI_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/xp-... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETGBI_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/xp-d... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETGBI_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: checkS2UStatus

**Method**: POST | **Endpoint**: `https: //{s2u-IP}:{s2u-PORT}/s2u/v3/check/status`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_CHECKS2UST_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{s2u... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CHECKS2UST_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{s2u-IP}:{s2u-PORT}/s2u/v3/chec... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CHECKS2UST_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{s2u-IP}:{s2u-PORT}/s2u/v3/chec... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CHECKS2UST_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{s2u-IP}:{s2u-PORT}/s2u/v3/chec... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CHECKS2UST_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{s2u-IP}:{s2u-PORT}/s2u/v3/chec... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CHECKS2UST_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{s2u-IP}:{s2u-PORT}/s2u/v3/chec... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CHECKS2UST_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{s2u-IP}:{s2u-PORT}/s2u/v3/chec... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CHECKS2UST_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{s2u-IP}:{s2u-PORT}/s2u/v3/chec... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CHECKS2UST_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{s2u-IP}:{s2u-PORT}/s2u/v3/chec... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CHECKS2UST_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{s2u-IP}:{s2u-PORT}/s2u/v3/chec... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CHECKS2UST_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{s2u-IP}:{s2u-PORT}/s2u/v3/check... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CHECKS2UST_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{s2u-IP}:{s... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: Cerebro >>

**Method**: POST | **Endpoint**: `/Cerebro >>`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_CEREBRO__001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /Cerebro >> w... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CEREBRO__002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /Cerebro >> with min/max values for nume... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CEREBRO__003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /Cerebro >> with malformed date/email... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CEREBRO__004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /Cerebro >> with values below min or abo... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CEREBRO__005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /Cerebro >> WITHOUT Authorization header... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CEREBRO__006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /Cerebro >> with invalid/expired token... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CEREBRO__007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /Cerebro >> with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CEREBRO__008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /Cerebro >> with SQL injection in text f... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CEREBRO__009 | XSS payload in input | Negative | Security | Valid token... | Send POST /Cerebro >> with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CEREBRO__010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /Cerebro >> with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CEREBRO__011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /Cerebro >> (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CEREBRO__012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /Cerebro >>... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: securityInit

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/security/init`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_SECURITYIN_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_SECURITYIN_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_SECURITYIN_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_SECURITYIN_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_SECURITYIN_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_SECURITYIN_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_SECURITYIN_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_SECURITYIN_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SECURITYIN_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SECURITYIN_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_SECURITYIN_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_SECURITYIN_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: sessionInit

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/session/init`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_SESSIONINI_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_SESSIONINI_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_SESSIONINI_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_SESSIONINI_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_SESSIONINI_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_SESSIONINI_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_SESSIONINI_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_SESSIONINI_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SESSIONINI_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SESSIONINI_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_SESSIONINI_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_SESSIONINI_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: usernameValidate

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/identity/username/validate`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_USERNAMEVA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_USERNAMEVA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_USERNAMEVA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_USERNAMEVA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_USERNAMEVA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_USERNAMEVA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_USERNAMEVA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_USERNAMEVA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_USERNAMEVA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_USERNAMEVA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_USERNAMEVA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_USERNAMEVA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: loginPassword

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/identity/login/password`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_LOGINPASSW_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_LOGINPASSW_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_LOGINPASSW_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_LOGINPASSW_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_LOGINPASSW_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_LOGINPASSW_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_LOGINPASSW_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_LOGINPASSW_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_LOGINPASSW_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_LOGINPASSW_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_LOGINPASSW_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_LOGINPASSW_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: deviceStatus

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/identity/device/status`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_DEVICESTAT_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_DEVICESTAT_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_DEVICESTAT_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_DEVICESTAT_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_DEVICESTAT_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_DEVICESTAT_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_DEVICESTAT_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_DEVICESTAT_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_DEVICESTAT_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_DEVICESTAT_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_DEVICESTAT_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_DEVICESTAT_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: otpGenerate

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/identity/otp/generate`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_OTPGENERAT_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_OTPGENERAT_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_OTPGENERAT_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_OTPGENERAT_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_OTPGENERAT_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_OTPGENERAT_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_OTPGENERAT_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_OTPGENERAT_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_OTPGENERAT_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_OTPGENERAT_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_OTPGENERAT_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_OTPGENERAT_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: otpVerify

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/identity/otp/verify`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_OTPVERIFY_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_OTPVERIFY_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_OTPVERIFY_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_OTPVERIFY_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_OTPVERIFY_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_OTPVERIFY_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_OTPVERIFY_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_OTPVERIFY_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_OTPVERIFY_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_OTPVERIFY_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_OTPVERIFY_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_OTPVERIFY_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

