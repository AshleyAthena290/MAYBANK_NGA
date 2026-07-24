# API Validation Test Cases

**Generated**: 2026-07-21 14:50:27

**Reference**: PT_Scan_and_Pay_DDD_API_Spec_v2_working.xlsx

## TEST SUMMARY

### Statistics
- **Total APIs**: 30
- **Total Test Cases**: 360
  - Positive: 60
  - Negative: 300

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

10. **initConfig**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v2/init`
   - Request Fields: 0
   - Response Fields: 0

11. **verifyUsername**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/user/verify-username`
   - Request Fields: 0
   - Response Fields: 0

12. **getLanguagePreferences**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/user/language-preferences`
   - Request Fields: 0
   - Response Fields: 0

13. **getUserConsents**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/user/consents`
   - Request Fields: 0
   - Response Fields: 0

14. **loginWithPassword**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/login/password`
   - Request Fields: 0
   - Response Fields: 0

15. **storeConsent**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/mcm/v1/consent/accept`
   - Request Fields: 0
   - Response Fields: 0

16. **getUserStatus**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/user/status`
   - Request Fields: 0
   - Response Fields: 0

17. **verifyPasscode**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/user/verify-passcode`
   - Request Fields: 0
   - Response Fields: 0

18. **generateOtp**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/otp/generate`
   - Request Fields: 0
   - Response Fields: 0

19. **registerBiometric**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/user/biometric`
   - Request Fields: 0
   - Response Fields: 0

20. **generateOtp (TAC)**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/tac/v1/otp/generate`
   - Request Fields: 0
   - Response Fields: 0

21. **verifyOtp**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/otp/verify`
   - Request Fields: 0
   - Response Fields: 0

22. **verifyOtp (TAC)**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/tac/v1/otp/verify`
   - Request Fields: 0
   - Response Fields: 0

23. **verifyChallenge (TAC)**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/tac/v1/challenge/verify`
   - Request Fields: 0
   - Response Fields: 0

24. **setPrimaryAccount**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/account/primary`
   - Request Fields: 0
   - Response Fields: 0

25. **getAccountList**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/account/list`
   - Request Fields: 0
   - Response Fields: 0

26. **verifyCard**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/cards/verify`
   - Request Fields: 0
   - Response Fields: 0

27. **verifyPassword**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/user/verify-password`
   - Request Fields: 0
   - Response Fields: 0

28. **getSecurityImageList**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/security-image/list`
   - Request Fields: 0
   - Response Fields: 0

29. **getCOPStatus**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/api/v1/cool-period/{id}`
   - Request Fields: 0
   - Response Fields: 0

30. **COP**
   - Method: `POST`
   - Endpoint: `https: //{Identity-IP}:{Identity-PORT}/identity/cop/v1/cooldown`
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

### API: initConfig

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v2/init`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_INITCONFIG_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_INITCONFIG_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_INITCONFIG_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_INITCONFIG_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_INITCONFIG_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_INITCONFIG_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_INITCONFIG_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_INITCONFIG_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_INITCONFIG_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_INITCONFIG_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_INITCONFIG_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_INITCONFIG_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: verifyUsername

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/user/verify-username`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_VERIFYUSER_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_VERIFYUSER_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_VERIFYUSER_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_VERIFYUSER_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_VERIFYUSER_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_VERIFYUSER_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_VERIFYUSER_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_VERIFYUSER_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYUSER_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYUSER_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_VERIFYUSER_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_VERIFYUSER_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getLanguagePreferences

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/user/language-preferences`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETLANGUAG_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETLANGUAG_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETLANGUAG_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETLANGUAG_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETLANGUAG_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETLANGUAG_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETLANGUAG_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETLANGUAG_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETLANGUAG_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETLANGUAG_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETLANGUAG_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETLANGUAG_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getUserConsents

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/user/consents`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETUSERCON_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETUSERCON_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETUSERCON_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETUSERCON_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETUSERCON_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETUSERCON_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETUSERCON_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETUSERCON_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETUSERCON_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETUSERCON_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETUSERCON_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETUSERCON_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: loginWithPassword

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/login/password`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_LOGINWITHP_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_LOGINWITHP_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_LOGINWITHP_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_LOGINWITHP_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_LOGINWITHP_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_LOGINWITHP_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_LOGINWITHP_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_LOGINWITHP_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_LOGINWITHP_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_LOGINWITHP_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_LOGINWITHP_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_LOGINWITHP_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: storeConsent

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/mcm/v1/consent/accept`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_STORECONSE_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_STORECONSE_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_STORECONSE_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_STORECONSE_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_STORECONSE_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_STORECONSE_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_STORECONSE_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_STORECONSE_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_STORECONSE_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_STORECONSE_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_STORECONSE_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_STORECONSE_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getUserStatus

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/user/status`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETUSERSTA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETUSERSTA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETUSERSTA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETUSERSTA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETUSERSTA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETUSERSTA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETUSERSTA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETUSERSTA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETUSERSTA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETUSERSTA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETUSERSTA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETUSERSTA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: verifyPasscode

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/user/verify-passcode`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_VERIFYPASS_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_VERIFYPASS_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_VERIFYPASS_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_VERIFYPASS_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_VERIFYPASS_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_VERIFYPASS_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_VERIFYPASS_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_VERIFYPASS_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYPASS_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYPASS_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_VERIFYPASS_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_VERIFYPASS_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_VERIFYPASS_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_VERIFYPASS_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_VERIFYPASS_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_VERIFYPASS_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_VERIFYPASS_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_VERIFYPASS_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_VERIFYPASS_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_VERIFYPASS_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYPASS_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYPASS_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_VERIFYPASS_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_VERIFYPASS_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: generateOtp

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/otp/generate`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GENERATEOT_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GENERATEOT_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GENERATEOT_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GENERATEOT_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GENERATEOT_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GENERATEOT_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GENERATEOT_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GENERATEOT_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GENERATEOT_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GENERATEOT_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GENERATEOT_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GENERATEOT_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_GENERATEOT_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GENERATEOT_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GENERATEOT_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GENERATEOT_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GENERATEOT_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GENERATEOT_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GENERATEOT_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GENERATEOT_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GENERATEOT_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GENERATEOT_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GENERATEOT_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GENERATEOT_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: registerBiometric

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/user/biometric`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_REGISTERBI_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_REGISTERBI_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_REGISTERBI_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_REGISTERBI_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_REGISTERBI_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_REGISTERBI_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_REGISTERBI_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_REGISTERBI_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_REGISTERBI_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_REGISTERBI_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_REGISTERBI_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_REGISTERBI_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: generateOtp (TAC)

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/tac/v1/otp/generate`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GENERATEOT_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GENERATEOT_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GENERATEOT_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GENERATEOT_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GENERATEOT_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GENERATEOT_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GENERATEOT_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GENERATEOT_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GENERATEOT_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GENERATEOT_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GENERATEOT_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GENERATEOT_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_GENERATEOT_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GENERATEOT_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GENERATEOT_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GENERATEOT_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GENERATEOT_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GENERATEOT_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GENERATEOT_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GENERATEOT_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GENERATEOT_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GENERATEOT_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GENERATEOT_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GENERATEOT_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: verifyOtp

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/otp/verify`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_VERIFYOTP_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_VERIFYOTP_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_VERIFYOTP_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_VERIFYOTP_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_VERIFYOTP_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_VERIFYOTP_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_VERIFYOTP_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_VERIFYOTP_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYOTP_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYOTP_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_VERIFYOTP_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_VERIFYOTP_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_VERIFYOTP__001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_VERIFYOTP__002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_VERIFYOTP__003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_VERIFYOTP__004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_VERIFYOTP__005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_VERIFYOTP__006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_VERIFYOTP__007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_VERIFYOTP__008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYOTP__009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYOTP__010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_VERIFYOTP__011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_VERIFYOTP__012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: verifyOtp (TAC)

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/tac/v1/otp/verify`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_VERIFYOTP_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_VERIFYOTP_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_VERIFYOTP_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_VERIFYOTP_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_VERIFYOTP_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_VERIFYOTP_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_VERIFYOTP_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_VERIFYOTP_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYOTP_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYOTP_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_VERIFYOTP_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_VERIFYOTP_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_VERIFYOTP__001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_VERIFYOTP__002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_VERIFYOTP__003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_VERIFYOTP__004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_VERIFYOTP__005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_VERIFYOTP__006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_VERIFYOTP__007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_VERIFYOTP__008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYOTP__009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYOTP__010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_VERIFYOTP__011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_VERIFYOTP__012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: verifyChallenge (TAC)

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/tac/v1/challenge/verify`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_VERIFYCHAL_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_VERIFYCHAL_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_VERIFYCHAL_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_VERIFYCHAL_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_VERIFYCHAL_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_VERIFYCHAL_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_VERIFYCHAL_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_VERIFYCHAL_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYCHAL_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYCHAL_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_VERIFYCHAL_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_VERIFYCHAL_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: setPrimaryAccount

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/account/primary`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_SETPRIMARY_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_SETPRIMARY_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_SETPRIMARY_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_SETPRIMARY_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_SETPRIMARY_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_SETPRIMARY_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_SETPRIMARY_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_SETPRIMARY_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SETPRIMARY_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SETPRIMARY_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_SETPRIMARY_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_SETPRIMARY_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getAccountList

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/account/list`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETACCOUNT_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETACCOUNT_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETACCOUNT_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETACCOUNT_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETACCOUNT_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETACCOUNT_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETACCOUNT_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETACCOUNT_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETACCOUNT_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETACCOUNT_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETACCOUNT_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETACCOUNT_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: verifyCard

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/cards/verify`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_VERIFYCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_VERIFYCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_VERIFYCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_VERIFYCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_VERIFYCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_VERIFYCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_VERIFYCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_VERIFYCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_VERIFYCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_VERIFYCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: verifyPassword

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/user/verify-password`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_VERIFYPASS_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_VERIFYPASS_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_VERIFYPASS_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_VERIFYPASS_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_VERIFYPASS_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_VERIFYPASS_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_VERIFYPASS_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_VERIFYPASS_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYPASS_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYPASS_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_VERIFYPASS_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_VERIFYPASS_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_VERIFYPASS_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_VERIFYPASS_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_VERIFYPASS_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_VERIFYPASS_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_VERIFYPASS_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_VERIFYPASS_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_VERIFYPASS_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_VERIFYPASS_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYPASS_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VERIFYPASS_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_VERIFYPASS_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_VERIFYPASS_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getSecurityImageList

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cerebro/v1/security-image/list`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETSECURIT_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETSECURIT_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETSECURIT_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETSECURIT_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETSECURIT_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETSECURIT_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETSECURIT_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETSECURIT_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETSECURIT_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETSECURIT_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETSECURIT_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETSECURIT_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getCOPStatus

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/api/v1/cool-period/{id}`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETCOPSTAT_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETCOPSTAT_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETCOPSTAT_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETCOPSTAT_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETCOPSTAT_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETCOPSTAT_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETCOPSTAT_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETCOPSTAT_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCOPSTAT_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCOPSTAT_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETCOPSTAT_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETCOPSTAT_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: COP

**Method**: POST | **Endpoint**: `https: //{Identity-IP}:{Identity-PORT}/identity/cop/v1/cooldown`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_COP_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ide... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_COP_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_COP_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_COP_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_COP_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_COP_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_COP_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_COP_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_COP_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_COP_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Identity-IP}:{Identity-PORT}/i... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_COP_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Identity-IP}:{Identity-PORT}/id... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_COP_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Identity-I... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

