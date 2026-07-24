# API Validation Test Cases

**Generated**: 2026-07-21 15:06:44

**Reference**: PT_Scan_and_Pay_DDD_API_Spec_v2_working.xlsx

## TEST SUMMARY

### Statistics
- **Total APIs**: 29
- **Total Test Cases**: 348
  - Positive: 58
  - Negative: 290

### APIs Identified

1. **README**
   - Method: `POST`
   - Endpoint: `/README`
   - Request Fields: 0
   - Response Fields: 0

2. **2.1 CC Dashboard - Landing**
   - Method: `POST`
   - Endpoint: `/2.1 CC Dashboard - Landing`
   - Request Fields: 0
   - Response Fields: 0

3. **2.1.2 Card Details**
   - Method: `POST`
   - Endpoint: `/2.1.2 Card Details`
   - Request Fields: 0
   - Response Fields: 0

4. **2.1.3 CC Activation**
   - Method: `POST`
   - Endpoint: `/2.1.3 CC Activation`
   - Request Fields: 0
   - Response Fields: 0

5. **2.2 CC > Transactions**
   - Method: `POST`
   - Endpoint: `/2.2 CC > Transactions`
   - Request Fields: 0
   - Response Fields: 0

6. **2.2.1 CC View All Trans**
   - Method: `POST`
   - Endpoint: `/2.2.1 CC View All Trans`
   - Request Fields: 0
   - Response Fields: 0

7. **2.2.1.2 View Receipt**
   - Method: `POST`
   - Endpoint: `/2.2.1.2 View Receipt`
   - Request Fields: 0
   - Response Fields: 0

8. **2.4 CC > Manage**
   - Method: `POST`
   - Endpoint: `/2.4 CC > Manage`
   - Request Fields: 0
   - Response Fields: 0

9. **2.4.2 Instalment Convert**
   - Method: `POST`
   - Endpoint: `/2.4.2 Instalment Convert`
   - Request Fields: 0
   - Response Fields: 0

10. **2.4.3 Increase Credit Limit**
   - Method: `POST`
   - Endpoint: `/2.4.3 Increase Credit Limit`
   - Request Fields: 0
   - Response Fields: 0

11. **2.4.3.1 ICL Permanent**
   - Method: `POST`
   - Endpoint: `/2.4.3.1 ICL Permanent`
   - Request Fields: 0
   - Response Fields: 0

12. **2.4.4 Block Card**
   - Method: `POST`
   - Endpoint: `/2.4.4 Block Card`
   - Request Fields: 0
   - Response Fields: 0

13. **2.4.5 Unblock Card**
   - Method: `POST`
   - Endpoint: `/2.4.5 Unblock Card`
   - Request Fields: 0
   - Response Fields: 0

14. **2.4.6 Replace & Renew Card**
   - Method: `POST`
   - Endpoint: `/2.4.6 Replace & Renew Card`
   - Request Fields: 0
   - Response Fields: 0

15. **2.4.7 Reset PIN**
   - Method: `POST`
   - Endpoint: `/2.4.7 Reset PIN`
   - Request Fields: 0
   - Response Fields: 0

16. **ECLIPSE APIs >>**
   - Method: `POST`
   - Endpoint: `/ECLIPSE APIs >>`
   - Request Fields: 0
   - Response Fields: 0

17. **creditCardPinValidation**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/info/card/v1/external/credit-card/validate-pin`
   - Request Fields: 0
   - Response Fields: 0

18. **getCreditLimits**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/info/card/v1/external/credit-card/{cardNumber}/credit-limits`
   - Request Fields: 0
   - Response Fields: 0

19. **getCreditLimitConfigurations**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/info/maintenance/v1/internal/credit-card/credit-limit-configurations`
   - Request Fields: 0
   - Response Fields: 0

20. **getInstalmentConversionSchedule**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/info/card/v1/external/credit-card/instalment-conversion`
   - Request Fields: 0
   - Response Fields: 0

21. **S2U APIs >>**
   - Method: `POST`
   - Endpoint: `/S2U APIs >>`
   - Request Fields: 0
   - Response Fields: 0

22. **creditCardBlock**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/block`
   - Request Fields: 0
   - Response Fields: 0

23. **creditCardUnblock**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/unblock`
   - Request Fields: 0
   - Response Fields: 0

24. **cvvInquiry**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/cvv-inquiry`
   - Request Fields: 0
   - Response Fields: 0

25. **creditCardActivation**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/activate`
   - Request Fields: 0
   - Response Fields: 0

26. **increaseCreditLimit**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/increase-credit-limit`
   - Request Fields: 0
   - Response Fields: 0

27. **replaceCreditCard**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/replacement`
   - Request Fields: 0
   - Response Fields: 0

28. **applyInstalmentConversion**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/apply-instalment-conversion`
   - Request Fields: 0
   - Response Fields: 0

29. **creditCardResetPin**
   - Method: `POST`
   - Endpoint: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/reset-pin`
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

### API: 2.1 CC Dashboard - Landing

**Method**: POST | **Endpoint**: `/2.1 CC Dashboard - Landing`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_21_CC_DASH_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /2.1 CC Dashb... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_21_CC_DASH_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /2.1 CC Dashboard - Landing with min/max... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_21_CC_DASH_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /2.1 CC Dashboard - Landing with malform... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_21_CC_DASH_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /2.1 CC Dashboard - Landing with values ... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_21_CC_DASH_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /2.1 CC Dashboard - Landing WITHOUT Auth... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_21_CC_DASH_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /2.1 CC Dashboard - Landing with invalid... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_21_CC_DASH_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.1 CC Dashboard - Landing with invalid... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_21_CC_DASH_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /2.1 CC Dashboard - Landing with SQL inj... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_21_CC_DASH_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /2.1 CC Dashboard - Landing with XSS pay... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_21_CC_DASH_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.1 CC Dashboard - Landing with empty J... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_21_CC_DASH_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /2.1 CC Dashboard - Landing (should be PO... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_21_CC_DASH_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /2.1 CC Dashboard - ... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 2.1.2 Card Details

**Method**: POST | **Endpoint**: `/2.1.2 Card Details`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_212_CARD_D_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /2.1.2 Card D... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_212_CARD_D_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /2.1.2 Card Details with min/max values ... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_212_CARD_D_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /2.1.2 Card Details with malformed date/... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_212_CARD_D_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /2.1.2 Card Details with values below mi... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_212_CARD_D_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /2.1.2 Card Details WITHOUT Authorizatio... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_212_CARD_D_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /2.1.2 Card Details with invalid/expired... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_212_CARD_D_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.1.2 Card Details with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_212_CARD_D_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /2.1.2 Card Details with SQL injection i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_212_CARD_D_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /2.1.2 Card Details with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_212_CARD_D_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.1.2 Card Details with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_212_CARD_D_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /2.1.2 Card Details (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_212_CARD_D_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /2.1.2 Card Details... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 2.1.3 CC Activation

**Method**: POST | **Endpoint**: `/2.1.3 CC Activation`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_213_CC_ACT_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /2.1.3 CC Act... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_213_CC_ACT_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /2.1.3 CC Activation with min/max values... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_213_CC_ACT_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /2.1.3 CC Activation with malformed date... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_213_CC_ACT_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /2.1.3 CC Activation with values below m... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_213_CC_ACT_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /2.1.3 CC Activation WITHOUT Authorizati... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_213_CC_ACT_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /2.1.3 CC Activation with invalid/expire... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_213_CC_ACT_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.1.3 CC Activation with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_213_CC_ACT_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /2.1.3 CC Activation with SQL injection ... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_213_CC_ACT_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /2.1.3 CC Activation with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_213_CC_ACT_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.1.3 CC Activation with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_213_CC_ACT_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /2.1.3 CC Activation (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_213_CC_ACT_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /2.1.3 CC Activation... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 2.2 CC > Transactions

**Method**: POST | **Endpoint**: `/2.2 CC > Transactions`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_22_CC__TRA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /2.2 CC > Tra... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_22_CC__TRA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /2.2 CC > Transactions with min/max valu... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_22_CC__TRA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /2.2 CC > Transactions with malformed da... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_22_CC__TRA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /2.2 CC > Transactions with values below... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_22_CC__TRA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /2.2 CC > Transactions WITHOUT Authoriza... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_22_CC__TRA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /2.2 CC > Transactions with invalid/expi... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_22_CC__TRA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.2 CC > Transactions with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_22_CC__TRA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /2.2 CC > Transactions with SQL injectio... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_22_CC__TRA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /2.2 CC > Transactions with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_22_CC__TRA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.2 CC > Transactions with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_22_CC__TRA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /2.2 CC > Transactions (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_22_CC__TRA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /2.2 CC > Transactio... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 2.2.1 CC View All Trans

**Method**: POST | **Endpoint**: `/2.2.1 CC View All Trans`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_221_CC_VIE_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /2.2.1 CC Vie... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_221_CC_VIE_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /2.2.1 CC View All Trans with min/max va... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_221_CC_VIE_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /2.2.1 CC View All Trans with malformed ... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_221_CC_VIE_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /2.2.1 CC View All Trans with values bel... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_221_CC_VIE_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /2.2.1 CC View All Trans WITHOUT Authori... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_221_CC_VIE_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /2.2.1 CC View All Trans with invalid/ex... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_221_CC_VIE_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.2.1 CC View All Trans with invalid JS... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_221_CC_VIE_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /2.2.1 CC View All Trans with SQL inject... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_221_CC_VIE_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /2.2.1 CC View All Trans with XSS payloa... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_221_CC_VIE_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.2.1 CC View All Trans with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_221_CC_VIE_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /2.2.1 CC View All Trans (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_221_CC_VIE_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /2.2.1 CC View All T... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 2.2.1.2 View Receipt

**Method**: POST | **Endpoint**: `/2.2.1.2 View Receipt`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_2212_VIEW__001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /2.2.1.2 View... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_2212_VIEW__002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /2.2.1.2 View Receipt with min/max value... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_2212_VIEW__003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /2.2.1.2 View Receipt with malformed dat... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_2212_VIEW__004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /2.2.1.2 View Receipt with values below ... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_2212_VIEW__005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /2.2.1.2 View Receipt WITHOUT Authorizat... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_2212_VIEW__006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /2.2.1.2 View Receipt with invalid/expir... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_2212_VIEW__007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.2.1.2 View Receipt with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_2212_VIEW__008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /2.2.1.2 View Receipt with SQL injection... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_2212_VIEW__009 | XSS payload in input | Negative | Security | Valid token... | Send POST /2.2.1.2 View Receipt with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_2212_VIEW__010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.2.1.2 View Receipt with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_2212_VIEW__011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /2.2.1.2 View Receipt (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_2212_VIEW__012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /2.2.1.2 View Receip... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 2.4 CC > Manage

**Method**: POST | **Endpoint**: `/2.4 CC > Manage`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_24_CC__MAN_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /2.4 CC > Man... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_24_CC__MAN_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /2.4 CC > Manage with min/max values for... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_24_CC__MAN_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /2.4 CC > Manage with malformed date/ema... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_24_CC__MAN_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /2.4 CC > Manage with values below min o... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_24_CC__MAN_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /2.4 CC > Manage WITHOUT Authorization h... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_24_CC__MAN_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /2.4 CC > Manage with invalid/expired to... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_24_CC__MAN_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.4 CC > Manage with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_24_CC__MAN_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /2.4 CC > Manage with SQL injection in t... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_24_CC__MAN_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /2.4 CC > Manage with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_24_CC__MAN_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.4 CC > Manage with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_24_CC__MAN_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /2.4 CC > Manage (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_24_CC__MAN_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /2.4 CC > Manage... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 2.4.2 Instalment Convert

**Method**: POST | **Endpoint**: `/2.4.2 Instalment Convert`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_242_INSTAL_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /2.4.2 Instal... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_242_INSTAL_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /2.4.2 Instalment Convert with min/max v... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_242_INSTAL_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /2.4.2 Instalment Convert with malformed... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_242_INSTAL_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /2.4.2 Instalment Convert with values be... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_242_INSTAL_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /2.4.2 Instalment Convert WITHOUT Author... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_242_INSTAL_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /2.4.2 Instalment Convert with invalid/e... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_242_INSTAL_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.4.2 Instalment Convert with invalid J... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_242_INSTAL_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /2.4.2 Instalment Convert with SQL injec... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_242_INSTAL_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /2.4.2 Instalment Convert with XSS paylo... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_242_INSTAL_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.4.2 Instalment Convert with empty JSO... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_242_INSTAL_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /2.4.2 Instalment Convert (should be POST... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_242_INSTAL_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /2.4.2 Instalment Co... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 2.4.3 Increase Credit Limit

**Method**: POST | **Endpoint**: `/2.4.3 Increase Credit Limit`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_243_INCREA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /2.4.3 Increa... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_243_INCREA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /2.4.3 Increase Credit Limit with min/ma... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_243_INCREA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /2.4.3 Increase Credit Limit with malfor... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_243_INCREA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /2.4.3 Increase Credit Limit with values... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_243_INCREA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /2.4.3 Increase Credit Limit WITHOUT Aut... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_243_INCREA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /2.4.3 Increase Credit Limit with invali... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_243_INCREA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.4.3 Increase Credit Limit with invali... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_243_INCREA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /2.4.3 Increase Credit Limit with SQL in... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_243_INCREA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /2.4.3 Increase Credit Limit with XSS pa... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_243_INCREA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.4.3 Increase Credit Limit with empty ... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_243_INCREA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /2.4.3 Increase Credit Limit (should be P... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_243_INCREA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /2.4.3 Increase Cred... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 2.4.3.1 ICL Permanent

**Method**: POST | **Endpoint**: `/2.4.3.1 ICL Permanent`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_2431_ICL_P_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /2.4.3.1 ICL ... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_2431_ICL_P_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /2.4.3.1 ICL Permanent with min/max valu... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_2431_ICL_P_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /2.4.3.1 ICL Permanent with malformed da... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_2431_ICL_P_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /2.4.3.1 ICL Permanent with values below... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_2431_ICL_P_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /2.4.3.1 ICL Permanent WITHOUT Authoriza... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_2431_ICL_P_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /2.4.3.1 ICL Permanent with invalid/expi... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_2431_ICL_P_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.4.3.1 ICL Permanent with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_2431_ICL_P_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /2.4.3.1 ICL Permanent with SQL injectio... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_2431_ICL_P_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /2.4.3.1 ICL Permanent with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_2431_ICL_P_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.4.3.1 ICL Permanent with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_2431_ICL_P_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /2.4.3.1 ICL Permanent (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_2431_ICL_P_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /2.4.3.1 ICL Permane... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 2.4.4 Block Card

**Method**: POST | **Endpoint**: `/2.4.4 Block Card`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_244_BLOCK__001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /2.4.4 Block ... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_244_BLOCK__002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /2.4.4 Block Card with min/max values fo... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_244_BLOCK__003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /2.4.4 Block Card with malformed date/em... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_244_BLOCK__004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /2.4.4 Block Card with values below min ... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_244_BLOCK__005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /2.4.4 Block Card WITHOUT Authorization ... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_244_BLOCK__006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /2.4.4 Block Card with invalid/expired t... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_244_BLOCK__007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.4.4 Block Card with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_244_BLOCK__008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /2.4.4 Block Card with SQL injection in ... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_244_BLOCK__009 | XSS payload in input | Negative | Security | Valid token... | Send POST /2.4.4 Block Card with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_244_BLOCK__010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.4.4 Block Card with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_244_BLOCK__011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /2.4.4 Block Card (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_244_BLOCK__012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /2.4.4 Block Card... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 2.4.5 Unblock Card

**Method**: POST | **Endpoint**: `/2.4.5 Unblock Card`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_245_UNBLOC_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /2.4.5 Unbloc... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_245_UNBLOC_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /2.4.5 Unblock Card with min/max values ... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_245_UNBLOC_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /2.4.5 Unblock Card with malformed date/... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_245_UNBLOC_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /2.4.5 Unblock Card with values below mi... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_245_UNBLOC_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /2.4.5 Unblock Card WITHOUT Authorizatio... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_245_UNBLOC_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /2.4.5 Unblock Card with invalid/expired... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_245_UNBLOC_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.4.5 Unblock Card with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_245_UNBLOC_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /2.4.5 Unblock Card with SQL injection i... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_245_UNBLOC_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /2.4.5 Unblock Card with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_245_UNBLOC_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.4.5 Unblock Card with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_245_UNBLOC_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /2.4.5 Unblock Card (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_245_UNBLOC_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /2.4.5 Unblock Card... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 2.4.6 Replace & Renew Card

**Method**: POST | **Endpoint**: `/2.4.6 Replace & Renew Card`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_246_REPLAC_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /2.4.6 Replac... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_246_REPLAC_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /2.4.6 Replace & Renew Card with min/max... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_246_REPLAC_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /2.4.6 Replace & Renew Card with malform... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_246_REPLAC_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /2.4.6 Replace & Renew Card with values ... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_246_REPLAC_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /2.4.6 Replace & Renew Card WITHOUT Auth... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_246_REPLAC_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /2.4.6 Replace & Renew Card with invalid... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_246_REPLAC_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.4.6 Replace & Renew Card with invalid... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_246_REPLAC_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /2.4.6 Replace & Renew Card with SQL inj... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_246_REPLAC_009 | XSS payload in input | Negative | Security | Valid token... | Send POST /2.4.6 Replace & Renew Card with XSS pay... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_246_REPLAC_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.4.6 Replace & Renew Card with empty J... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_246_REPLAC_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /2.4.6 Replace & Renew Card (should be PO... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_246_REPLAC_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /2.4.6 Replace & Ren... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: 2.4.7 Reset PIN

**Method**: POST | **Endpoint**: `/2.4.7 Reset PIN`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_247_RESET__001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST /2.4.7 Reset ... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_247_RESET__002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST /2.4.7 Reset PIN with min/max values for... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_247_RESET__003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST /2.4.7 Reset PIN with malformed date/ema... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_247_RESET__004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST /2.4.7 Reset PIN with values below min o... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_247_RESET__005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST /2.4.7 Reset PIN WITHOUT Authorization h... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_247_RESET__006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST /2.4.7 Reset PIN with invalid/expired to... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_247_RESET__007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.4.7 Reset PIN with invalid JSON... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_247_RESET__008 | SQL Injection payload | Negative | Security | Valid token... | Send POST /2.4.7 Reset PIN with SQL injection in t... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_247_RESET__009 | XSS payload in input | Negative | Security | Valid token... | Send POST /2.4.7 Reset PIN with XSS payload... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_247_RESET__010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST /2.4.7 Reset PIN with empty JSON... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_247_RESET__011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET /2.4.7 Reset PIN (should be POST)... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_247_RESET__012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to /2.4.7 Reset PIN... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

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

### API: creditCardPinValidation

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/info/card/v1/external/credit-card/validate-pin`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/info... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getCreditLimits

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/info/card/v1/external/credit-card/{cardNumber}/credit-limits`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETCREDITL_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETCREDITL_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETCREDITL_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETCREDITL_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETCREDITL_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETCREDITL_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETCREDITL_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETCREDITL_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCREDITL_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCREDITL_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETCREDITL_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/info... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETCREDITL_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_GETCREDITL_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETCREDITL_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETCREDITL_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETCREDITL_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETCREDITL_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETCREDITL_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETCREDITL_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETCREDITL_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCREDITL_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCREDITL_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETCREDITL_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/info... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETCREDITL_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getCreditLimitConfigurations

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/info/maintenance/v1/internal/credit-card/credit-limit-configurations`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETCREDITL_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETCREDITL_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETCREDITL_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETCREDITL_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETCREDITL_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETCREDITL_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETCREDITL_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETCREDITL_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCREDITL_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCREDITL_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETCREDITL_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/info... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETCREDITL_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_GETCREDITL_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETCREDITL_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETCREDITL_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETCREDITL_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETCREDITL_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETCREDITL_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETCREDITL_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETCREDITL_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCREDITL_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCREDITL_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETCREDITL_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/info... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETCREDITL_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: getInstalmentConversionSchedule

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/info/card/v1/external/credit-card/instalment-conversion`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETINSTALM_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETINSTALM_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETINSTALM_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETINSTALM_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETINSTALM_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETINSTALM_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETINSTALM_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETINSTALM_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETINSTALM_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETINSTALM_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETINSTALM_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/info... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETINSTALM_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

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

### API: creditCardBlock

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/block`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/info... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: creditCardUnblock

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/unblock`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/info... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: cvvInquiry

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/cvv-inquiry`

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

### API: creditCardActivation

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/activate`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/info... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: increaseCreditLimit

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/increase-credit-limit`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_INCREASECR_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_INCREASECR_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_INCREASECR_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_INCREASECR_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_INCREASECR_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_INCREASECR_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_INCREASECR_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_INCREASECR_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_INCREASECR_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_INCREASECR_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_INCREASECR_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_INCREASECR_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: replaceCreditCard

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/replacement`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_REPLACECRE_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_REPLACECRE_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_REPLACECRE_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_REPLACECRE_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_REPLACECRE_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_REPLACECRE_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_REPLACECRE_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_REPLACECRE_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_REPLACECRE_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_REPLACECRE_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_REPLACECRE_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_REPLACECRE_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: applyInstalmentConversion

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/apply-instalment-conversion`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_APPLYINSTA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_APPLYINSTA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_APPLYINSTA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_APPLYINSTA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_APPLYINSTA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_APPLYINSTA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_APPLYINSTA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_APPLYINSTA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_APPLYINSTA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_APPLYINSTA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_APPLYINSTA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_APPLYINSTA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: creditCardResetPin

**Method**: POST | **Endpoint**: `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/reset-pin`

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/inf... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/info... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_CREDITCARD_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https: //{Ecl... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_CREDITCARD_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_CREDITCARD_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_CREDITCARD_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_CREDITCARD_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_CREDITCARD_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_CREDITCARD_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_CREDITCARD_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_CREDITCARD_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https: //{Eclipse-IP}:{Eclipse-PORT}/dep... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_CREDITCARD_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https: //{Eclipse-IP}:{Eclipse-PORT}/dep/... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_CREDITCARD_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https: //{Eclipse-IP... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

