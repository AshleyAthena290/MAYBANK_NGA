# API Validation Test Cases

**Generated**: 2026-07-21 14:45:24

**Reference**: PT_Scan_and_Pay_DDD_API_Spec_v2_working.xlsx

## TEST SUMMARY

### Statistics
- **Total APIs**: 20
- **Total Test Cases**: 240
  - Positive: 40
  - Negative: 200

### APIs Identified

1. **GetScanPayActivationStatus**
   - Method: `POST`
   - Endpoint: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/activation/status`
   - Request Fields: 0
   - Response Fields: 0

2. **ExecuteActivation**
   - Method: `POST`
   - Endpoint: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/activation/execute`
   - Request Fields: 0
   - Response Fields: 0

3. **InitDomesticScanPay**
   - Method: `POST`
   - Endpoint: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-local/init`
   - Request Fields: 0
   - Response Fields: 0

4. **ValidateDomesticScanPay**
   - Method: `POST`
   - Endpoint: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-local/validate`
   - Request Fields: 0
   - Response Fields: 0

5. **SubmitDomesticScanPay**
   - Method: `POST`
   - Endpoint: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-local/submit`
   - Request Fields: 0
   - Response Fields: 0

6. **GetDomesticScanPayStatus**
   - Method: `POST`
   - Endpoint: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-local/status/{txnRef}`
   - Request Fields: 0
   - Response Fields: 0

7. **GetDomesticScanPayReceipt**
   - Method: `POST`
   - Endpoint: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-local/receipt/{txnRef}`
   - Request Fields: 0
   - Response Fields: 0

8. **InitOverseasScanPay**
   - Method: `POST`
   - Endpoint: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-overseas/init`
   - Request Fields: 0
   - Response Fields: 0

9. **ValidateOverseasScanPay**
   - Method: `POST`
   - Endpoint: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-overseas/validate`
   - Request Fields: 0
   - Response Fields: 0

10. **SubmitOverseasScanPay**
   - Method: `POST`
   - Endpoint: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-overseas/submit`
   - Request Fields: 0
   - Response Fields: 0

11. **GetOverseasScanPayStatus**
   - Method: `POST`
   - Endpoint: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-overseas/status/{txnRef}`
   - Request Fields: 0
   - Response Fields: 0

12. **GetOverseasScanPayReceipt**
   - Method: `POST`
   - Endpoint: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-overseas/receipt/{txnRef}`
   - Request Fields: 0
   - Response Fields: 0

13. **InitCashWithdrawal**
   - Method: `POST`
   - Endpoint: `{Payment-IP}:{Payment-PORT}/pt/qr/v1/cash-withdrawal/init`
   - Request Fields: 0
   - Response Fields: 0

14. **ValidateCashWithdrawal**
   - Method: `POST`
   - Endpoint: `{Payment-IP}:{Payment-PORT}/pt/qr/v1/cash-withdrawal/validate`
   - Request Fields: 0
   - Response Fields: 0

15. **SubmitCashWithdrawal**
   - Method: `POST`
   - Endpoint: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/cash-withdrawal/submit`
   - Request Fields: 0
   - Response Fields: 0

16. **GetCashWithdrawalStatus**
   - Method: `POST`
   - Endpoint: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/cash-withdrawal/status/{txnRef}`
   - Request Fields: 0
   - Response Fields: 0

17. **GetCashWithdrawalReceipt**
   - Method: `POST`
   - Endpoint: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/cash-withdrawal/receipt/{txnRef}`
   - Request Fields: 0
   - Response Fields: 0

18. **GetPreLoginLimit**
   - Method: `POST`
   - Endpoint: `https://{Payment-IP}:{Payment-PORT}/qr/v1/pre-login/limit`
   - Request Fields: 0
   - Response Fields: 0

19. **GetPrimaryAccountSetting**
   - Method: `POST`
   - Endpoint: `https://{Payment-IP}:{Payment-PORT}/qr/v1/primary-account/setting?journeyType={journeyType}`
   - Request Fields: 0
   - Response Fields: 0

20. **UpdatePrimaryAccount**
   - Method: `POST`
   - Endpoint: `{Payment-IP}:{Payment-PORT}/pt/qr/v1/primary-account/update`
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

### API: GetScanPayActivationStatus

**Method**: POST | **Endpoint**: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/activation/status`

**Description**: Retrieves the QR activation status for the current user. Returns a map of activation type (SCAN_TO_PAY, OVERSEAS_SCAN_PAY, ATM_CASH_OUT) and their respective statuses. Used as the entry-point check across all QR journeys and pre-login routing.

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETSCANPAY_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETSCANPAY_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETSCANPAY_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETSCANPAY_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETSCANPAY_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETSCANPAY_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETSCANPAY_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETSCANPAY_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETSCANPAY_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETSCANPAY_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETSCANPAY_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETSCANPAY_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: ExecuteActivation

**Method**: POST | **Endpoint**: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/activation/execute`

**Description**: Executes the QR activation for the specified activation type after successful S2U authorization. Persists activation record in TBL_QR_ACTIVATION and sets the default primary account in TBL_QR_PRIMARY_ACCOUNT. Triggers async MBPNS notification and FMS data push.

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_EXECUTEACT_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_EXECUTEACT_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_EXECUTEACT_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_EXECUTEACT_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_EXECUTEACT_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_EXECUTEACT_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_EXECUTEACT_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_EXECUTEACT_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_EXECUTEACT_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_EXECUTEACT_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_EXECUTEACT_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_EXECUTEACT_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: InitDomesticScanPay

**Method**: POST | **Endpoint**: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-local/init`

**Description**: Initializes the domestic QR Pay journey by receiving and decoding the raw QRIS MPM payload. Parses merchant information per ASPI QRIS spec, determines QR type (Static/Dynamic) and routing (On-Us/Off-Us). Retrieves eligible SoF accounts and pre-populates default primary account. Stores context in Hazelcast pre_txn_flow cache (TTL=10 min).

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_INITDOMEST_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_INITDOMEST_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_INITDOMEST_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_INITDOMEST_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_INITDOMEST_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_INITDOMEST_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_INITDOMEST_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_INITDOMEST_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_INITDOMEST_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_INITDOMEST_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_INITDOMEST_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_INITDOMEST_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: ValidateDomesticScanPay

**Method**: POST | **Endpoint**: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-local/validate`

**Description**: Validates the domestic QR Pay transaction before proceeding to the Confirmation screen. Performs QR context validation, amount validation, SoF eligibility check, and limit check (per-transaction and daily) against P&T DB. Derives CPAN for Off-Us QR. Optionally validates promo code via Alphabit. Updates Hazelcast txn_flow cache (TTL=10 min).

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_VALIDATEDO_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_VALIDATEDO_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_VALIDATEDO_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_VALIDATEDO_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_VALIDATEDO_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_VALIDATEDO_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_VALIDATEDO_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_VALIDATEDO_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VALIDATEDO_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VALIDATEDO_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_VALIDATEDO_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_VALIDATEDO_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: SubmitDomesticScanPay

**Method**: POST | **Endpoint**: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-local/submit`

**Description**: Submits the domestic QR Pay transaction to downstream after successful S2U authorization. Performs final limit check, routes to ESB eChannelServices (DE003: 26XX00) > Vynamic Payment > Systematics. On success, updates limit, triggers async MBPNS notification, and sends data to FMS. Stores result in Hazelcast txn_flow cache.

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_SUBMITDOME_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_SUBMITDOME_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_SUBMITDOME_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_SUBMITDOME_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_SUBMITDOME_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_SUBMITDOME_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_SUBMITDOME_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_SUBMITDOME_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SUBMITDOME_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SUBMITDOME_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_SUBMITDOME_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_SUBMITDOME_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: GetDomesticScanPayStatus

**Method**: POST | **Endpoint**: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-local/status/{txnRef}`

**Description**: Polls the actual posting status of a domestic QR Pay transaction. Triggered only when SubmitDomesticScanPay returns RC_300 or RC68 timeout. Calls ESB eChannelServices (DE003: 27XX00) to retrieve definitive status. Updates Hazelcast txn_flow cache with final result.

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETDOMESTI_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETDOMESTI_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETDOMESTI_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETDOMESTI_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETDOMESTI_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETDOMESTI_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETDOMESTI_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETDOMESTI_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETDOMESTI_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETDOMESTI_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETDOMESTI_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETDOMESTI_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_GETDOMESTI_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETDOMESTI_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETDOMESTI_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETDOMESTI_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETDOMESTI_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETDOMESTI_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETDOMESTI_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETDOMESTI_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETDOMESTI_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETDOMESTI_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETDOMESTI_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETDOMESTI_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: GetDomesticScanPayReceipt

**Method**: POST | **Endpoint**: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-local/receipt/{txnRef}`

**Description**: Retrieves full receipt data for a completed domestic QR Pay transaction. Data is served from Hazelcast txn_flow cache populated during SubmitDomesticScanPay. No new downstream ESB call is made at this step. Supports share receipt as native PDF/image per country config.

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETDOMESTI_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETDOMESTI_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETDOMESTI_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETDOMESTI_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETDOMESTI_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETDOMESTI_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETDOMESTI_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETDOMESTI_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETDOMESTI_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETDOMESTI_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETDOMESTI_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETDOMESTI_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_GETDOMESTI_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETDOMESTI_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETDOMESTI_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETDOMESTI_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETDOMESTI_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETDOMESTI_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETDOMESTI_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETDOMESTI_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETDOMESTI_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETDOMESTI_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETDOMESTI_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETDOMESTI_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: InitOverseasScanPay

**Method**: POST | **Endpoint**: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-overseas/init`

**Description**: Initializes the overseas QR Pay journey by decoding the cross-border QR payload. Detects overseas routing from Tag 58 (Country Code ≠ ID). Retrieves eligible IDR CASA accounts (CC not supported for overseas). Fetches indicative FX rate from ESB > Systematics Closing Rate × (1 + service fee%). Stores context in Hazelcast pre_txn_flow cache (TTL=10 min).

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_INITOVERSE_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_INITOVERSE_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_INITOVERSE_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_INITOVERSE_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_INITOVERSE_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_INITOVERSE_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_INITOVERSE_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_INITOVERSE_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_INITOVERSE_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_INITOVERSE_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_INITOVERSE_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_INITOVERSE_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: ValidateOverseasScanPay

**Method**: POST | **Endpoint**: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-overseas/validate`

**Description**: Validates the overseas QR Pay transaction after the user taps [Next] on the amount input screen. Fetches the actual FX rate from ALTO via ESB > Vynamic Payment. Calculates final IDR debit amount = merchant amount × actual ALTO rate × (1 + service fee%). Validates SoF eligibility (IDR CASA only), amount, and limits. Stores ALTO rate reference number in Hazelcast for use in posting.

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_VALIDATEOV_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_VALIDATEOV_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_VALIDATEOV_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_VALIDATEOV_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_VALIDATEOV_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_VALIDATEOV_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_VALIDATEOV_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_VALIDATEOV_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VALIDATEOV_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VALIDATEOV_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_VALIDATEOV_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_VALIDATEOV_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: SubmitOverseasScanPay

**Method**: POST | **Endpoint**: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-overseas/submit`

**Description**: Submits the overseas QR Pay transaction to downstream after successful S2U authorization. Retrieves cached ALTO rate reference number from Hazelcast. Routes to ESB > Vynamic Payment > Systematics (debit IDR CASA) > ALTO (cross-border posting). Rate reference number must be echoed in ESB posting field D32. Triggers async limit update, MBPNS, and FMS.

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_SUBMITOVER_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_SUBMITOVER_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_SUBMITOVER_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_SUBMITOVER_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_SUBMITOVER_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_SUBMITOVER_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_SUBMITOVER_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_SUBMITOVER_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SUBMITOVER_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SUBMITOVER_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_SUBMITOVER_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_SUBMITOVER_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: GetOverseasScanPayStatus

**Method**: POST | **Endpoint**: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-overseas/status/{txnRef}`

**Description**: Polls the actual posting status of an overseas QR Pay transaction. Triggered only when SubmitOverseasScanPay returns RC_300 or RC68 timeout. Calls ESB eChannelServices (DE003: 27XX00) for definitive status. Updates Hazelcast txn_flow cache with final result.

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETOVERSEA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETOVERSEA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETOVERSEA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETOVERSEA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETOVERSEA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETOVERSEA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETOVERSEA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETOVERSEA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETOVERSEA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETOVERSEA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETOVERSEA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETOVERSEA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_GETOVERSEA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETOVERSEA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETOVERSEA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETOVERSEA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETOVERSEA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETOVERSEA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETOVERSEA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETOVERSEA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETOVERSEA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETOVERSEA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETOVERSEA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETOVERSEA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: GetOverseasScanPayReceipt

**Method**: POST | **Endpoint**: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/scan-overseas/receipt/{txnRef}`

**Description**: Initializes a cash withdrawal transaction request by validating customer and transaction details, generating a transaction reference, and storing the initial transaction state for further processing. This API prepares the withdrawal flow before authorization and cash disbursement execution.

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETOVERSEA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETOVERSEA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETOVERSEA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETOVERSEA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETOVERSEA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETOVERSEA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETOVERSEA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETOVERSEA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETOVERSEA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETOVERSEA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETOVERSEA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETOVERSEA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_GETOVERSEA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETOVERSEA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETOVERSEA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETOVERSEA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETOVERSEA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETOVERSEA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETOVERSEA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETOVERSEA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETOVERSEA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETOVERSEA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETOVERSEA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETOVERSEA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: InitCashWithdrawal

**Method**: POST | **Endpoint**: `{Payment-IP}:{Payment-PORT}/pt/qr/v1/cash-withdrawal/init`

**Description**: Initializes a QR-based cash withdrawal transaction by parsing and validating the QR payload, identifying the withdrawal type, retrieving ATM and source-of-fund account information, and calculating the withdrawal amount and applicable service fee. The API returns transaction reference details, ATM information, eligible customer accounts, and default source-of-fund account for the next withdrawal authorization step.  Stores context in Hazelcast pre_txn_flow cache (TTL=10 min).

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_INITCASHWI_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST {Payment-IP}:... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_INITCASHWI_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_INITCASHWI_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_INITCASHWI_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_INITCASHWI_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_INITCASHWI_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_INITCASHWI_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_INITCASHWI_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_INITCASHWI_009 | XSS payload in input | Negative | Security | Valid token... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_INITCASHWI_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_INITCASHWI_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET {Payment-IP}:{Payment-PORT}/pt/qr/v1/cash... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_INITCASHWI_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to {Payment-IP}:{Paymen... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: ValidateCashWithdrawal

**Method**: POST | **Endpoint**: `{Payment-IP}:{Payment-PORT}/pt/qr/v1/cash-withdrawal/validate`

**Description**: Validates a QR cash withdrawal transaction before proceeding to Confirmation Screen by verifying the selected source-of-fund account, withdrawal amount, currency, transaction limits, and applicable service fee. Updates Hazelcast txn_flow cache (TTL=10 min).

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_VALIDATECA_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST {Payment-IP}:... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_VALIDATECA_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_VALIDATECA_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_VALIDATECA_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_VALIDATECA_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_VALIDATECA_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_VALIDATECA_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_VALIDATECA_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VALIDATECA_009 | XSS payload in input | Negative | Security | Valid token... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_VALIDATECA_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/cas... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_VALIDATECA_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET {Payment-IP}:{Payment-PORT}/pt/qr/v1/cash... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_VALIDATECA_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to {Payment-IP}:{Paymen... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: SubmitCashWithdrawal

**Method**: POST | **Endpoint**: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/cash-withdrawal/submit`

**Description**: Submits the Cardless Withdrawal transaction to downstream after successful S2U authorization. Performs final limit validation, routes transaction to ESB eChannelServices based on withdrawal type (On-Us: DE003 26XX00 > Vynamic Payment > Systematics, Off-Us: DE003 41XX00 > Vynamic Payment > TCICO). Stores transaction result in Hazelcast txn_flow cache, updates limit asynchronously, triggers MBPNS notification, and sends fraud monitoring data to FMS.

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_SUBMITCASH_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_SUBMITCASH_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_SUBMITCASH_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_SUBMITCASH_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_SUBMITCASH_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_SUBMITCASH_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_SUBMITCASH_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_SUBMITCASH_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SUBMITCASH_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_SUBMITCASH_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_SUBMITCASH_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_SUBMITCASH_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: GetCashWithdrawalStatus

**Method**: POST | **Endpoint**: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/cash-withdrawal/status/{txnRef}`

**Description**: Retrieves the latest Cardless Withdrawal transaction posting status when submitCashWithdrawal returns RC_300 or timeout (RC68 scenario). pt-qr-id calls ESB eChannelServices (DE003: 27XX00) to determine the actual posting result from downstream systems, updates the transaction result in Hazelcast txn_flow cache, and returns the latest transaction status to NGA App.

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETCASHWIT_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETCASHWIT_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETCASHWIT_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETCASHWIT_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETCASHWIT_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETCASHWIT_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETCASHWIT_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETCASHWIT_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCASHWIT_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCASHWIT_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETCASHWIT_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETCASHWIT_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_GETCASHWIT_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETCASHWIT_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETCASHWIT_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETCASHWIT_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETCASHWIT_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETCASHWIT_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETCASHWIT_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETCASHWIT_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCASHWIT_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCASHWIT_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETCASHWIT_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETCASHWIT_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: GetCashWithdrawalReceipt

**Method**: POST | **Endpoint**: `https://{Payment-IP}:{Payment-PORT}/pt/qr/v1/cash-withdrawal/receipt/{txnRef}`

**Description**: Retrieves Cardless Withdrawal receipt details for Receipt screen display after successful transaction posting. pt-qr-id retrieves the cached transaction result from Hazelcast txn_flow cache and returns structured receipt data including withdrawal details, source-of-fund account, ATM location, reference ID, and disclaimer information.

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETCASHWIT_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETCASHWIT_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETCASHWIT_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETCASHWIT_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETCASHWIT_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETCASHWIT_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETCASHWIT_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETCASHWIT_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCASHWIT_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCASHWIT_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETCASHWIT_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETCASHWIT_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |
| TC_GETCASHWIT_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETCASHWIT_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETCASHWIT_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETCASHWIT_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETCASHWIT_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETCASHWIT_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETCASHWIT_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETCASHWIT_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCASHWIT_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETCASHWIT_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/pt/q... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETCASHWIT_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/pt/qr... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETCASHWIT_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: GetPreLoginLimit

**Method**: POST | **Endpoint**: `https://{Payment-IP}:{Payment-PORT}/qr/v1/pre-login/limit`

**Description**: Retrieves the configured pre-login transaction limit for QR Pay transactions. The pre-login limit is used by NGA App during the Confirmation step of the QR Pre-Login (L1) journey to determine whether step-up authentication is required before Secure2U (S2U) authorization.

If:

transactionAmount > preLoginLimit → user must perform step-up authentication (L1 → L3)
transactionAmount <= preLoginLimit → user may proceed directly to S2U authorization

This API supports QR Pay Domestic and QR Pay Overseas only. Cardless Withdrawal (ATM Cash Out) is excluded from pre-login flow eligibility.

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETPRELOGI_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETPRELOGI_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETPRELOGI_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETPRELOGI_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETPRELOGI_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETPRELOGI_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETPRELOGI_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETPRELOGI_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETPRELOGI_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETPRELOGI_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETPRELOGI_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/qr/v1... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETPRELOGI_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: GetPrimaryAccountSetting

**Method**: POST | **Endpoint**: `https://{Payment-IP}:{Payment-PORT}/qr/v1/primary-account/setting?journeyType={journeyType}`

**Description**: Retrieves the currently configured primary account for the selected journey type (Scan & Pay, Overseas Scan & Pay, or Cardless Withdrawal). Response is used by NGA to pre-select and highlight the existing primary account on the account selection screen.

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_GETPRIMARY_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST https://{Paym... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_GETPRIMARY_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_GETPRIMARY_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_GETPRIMARY_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_GETPRIMARY_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_GETPRIMARY_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_GETPRIMARY_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_GETPRIMARY_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETPRIMARY_009 | XSS payload in input | Negative | Security | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_GETPRIMARY_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST https://{Payment-IP}:{Payment-PORT}/qr/v... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_GETPRIMARY_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET https://{Payment-IP}:{Payment-PORT}/qr/v1... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_GETPRIMARY_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to https://{Payment-IP}... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

### API: UpdatePrimaryAccount

**Method**: POST | **Endpoint**: `{Payment-IP}:{Payment-PORT}/pt/qr/v1/primary-account/update`

**Description**: Updates the customer’s primary source-of-fund account for a selected transaction journey. The API validates the selected account and persists the updated primary account preference.

#### Test Cases

| TC ID | Title | Type | Category | Pre-Conditions | Steps | Input | Expected | Priority |
|-------|-------|------|----------|---|---|---|---|---|
| TC_UPDATEPRIM_001 | Valid request with all mandatory fields | Positive | Field Validation | Valid authentication token; User has req... | Set Authorization header → Send POST {Payment-IP}:... | Valid JSON with all mandatory fields pop... | HTTP 200/201; Valid response schema; All... | High |
| TC_UPDATEPRIM_002 | Valid boundary values (min/max) | Positive | Boundary Testing | Knowledge of min/max from DDD... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/pri... | Numeric fields at min/max boundaries; St... | HTTP 200/201; Boundary values accepted... | High |
| TC_UPDATEPRIM_003 | Invalid date/email format | Negative | Format Validation | Valid token... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/pri... | {"date": "2024-13-45", "email": "invalid... | HTTP 400; Error: "Invalid format"... | Medium |
| TC_UPDATEPRIM_004 | Out of range values | Negative | Boundary Testing | Knowledge of ranges... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/pri... | Numeric value outside [min-max] range... | HTTP 400; Error: "Value out of range"... | Medium |
| TC_UPDATEPRIM_005 | Missing authentication token | Negative | Authentication | API requires authentication... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/pri... | Valid payload; NO Authorization header... | HTTP 401; Error: "Missing authentication... | High |
| TC_UPDATEPRIM_006 | Invalid/expired token | Negative | Authentication | Invalid token available... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/pri... | Authorization: Bearer invalid_token_1234... | HTTP 401; Error: "Invalid or expired tok... | High |
| TC_UPDATEPRIM_007 | Malformed JSON payload | Negative | Payload Validation | Valid token... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/pri... | {{"field": "value", }}  // Trailing comm... | HTTP 400; Error: "Invalid JSON format"... | Medium |
| TC_UPDATEPRIM_008 | SQL Injection payload | Negative | Security | Valid token... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/pri... | {"name": "' OR '1'='1'; DROP TABLE users... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_UPDATEPRIM_009 | XSS payload in input | Negative | Security | Valid token... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/pri... | {"message": "<script>alert('XSS')</scrip... | HTTP 400/422; Payload rejected/sanitized... | High |
| TC_UPDATEPRIM_010 | Empty JSON payload | Negative | Payload Validation | Valid token... | Send POST {Payment-IP}:{Payment-PORT}/pt/qr/v1/pri... | {}... | HTTP 400; Error: "Missing required field... | Medium |
| TC_UPDATEPRIM_011 | Invalid HTTP method (GET instead of POST) | Negative | HTTP Method | API expects POST... | Send GET {Payment-IP}:{Payment-PORT}/pt/qr/v1/prim... | Valid payload sent via GET... | HTTP 405; Error: "Method Not Allowed"... | Medium |
| TC_UPDATEPRIM_012 | Rate limiting behavior | Negative | Rate Limiting | Rate limit defined in DDD... | Send 100+ requests rapidly to {Payment-IP}:{Paymen... | Rapid succession of valid requests... | HTTP 429; Error: "Too Many Requests"; Re... | Medium |

---

