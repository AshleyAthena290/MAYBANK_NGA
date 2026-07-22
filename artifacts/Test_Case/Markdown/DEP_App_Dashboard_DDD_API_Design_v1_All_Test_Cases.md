# DEP App Dashboard API Validation Test Cases

**Reference Document:** DEP_App_Dashboard_DDD_API_Design_v1.xlsx  
**Generated Date:** 2026-07-21 11:21:07  
**Total APIs Covered:** 21  
**Total Test Cases:** 197  

---

## 1. TEST SUMMARY

### Overview Statistics
| Metric | Count |
|--------|-------|
| **Total APIs** | 21 |
| **Total Test Cases** | 197 |
| **Positive Test Cases** | 21 |
| **Negative Test Cases** | 176 |

### APIs Identified
| # | API Name | HTTP Method | Endpoint |
|---|---|---|---|
| 1 | Get_Onboarding_Accounts | GET | /wealth/v1/onboarding/accounts |
| 2 | getDashboardState | GET | /v1/dashboard/state |
| 3 | init | GET | https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init |
| 4 | getMenu | GET | https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu |
| 5 | getUserHeader | GET | https:////{IP}:{PORT}/dep/dashboard/v1/user-header |
| 6 | getActionList | GET | https:////{IP}:{PORT}/dep/dashboard/v1/action-list |
| 7 | getTempBanner | GET | https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner |
| 8 | getMainPreview | GET | /dep/dashboard/v1/main-preview |
| 9 | getForYouTiles | GET | https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles |
| 10 | getQuickActions | GET | https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions |
| 11 | getSmallWidget | GET | https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget |
| 12 | getMediumWidget | GET | https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget |
| 13 | getLargeWidget | GET | https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget |
| 14 | getHomeDashboardManagement | GET | https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard |
| 15 | updateHomeDashboardManagement | POST | https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard |
| 16 | getMainPreviewManagement | GET | https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview |
| 17 | updateMainPreviewManagement | PUT | https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview |
| 18 | getQuickActionsManagement | GET | https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/ |
| 19 | updateQuickActionsManagement | POST | https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/ |
| 20 | getLargeWidgetManagement | GET | https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/ |
| 21 | updateLargeWidgetManagement | PUT | https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget |

### Key Validation Areas Covered
- **Happy Path / Valid Request** - Valid requests with all mandatory fields
- **Authentication / Missing Header** - Missing Authorization header
- **Authentication / Invalid Token** - Invalid or expired authentication tokens
- **HTTP Protocol / Invalid Method** - Incorrect HTTP method usage
- **Format / Malformed Payload** - Malformed JSON in request body
- **Parameter Validation / Missing Field** - Missing mandatory query parameters
- **Data Validation / Type Mismatch** - Invalid data types in requests
- **Security / SQL Injection** - SQL injection payload handling
- **Security / XSS Attack** - XSS payload handling and prevention
- **Input Validation / Special Characters** - Special character handling
- **Boundary Testing / Range Validation** - Out-of-range and boundary violations

### Assumptions Made
1. **Authentication:** Tests assume Bearer token format for Authorization header
2. **Error Handling:** Standard HTTP status codes (400, 401, 405) with descriptive error messages
3. **JSON Format:** All API communications use application/json content type
4. **Input Sanitization:** API implements input sanitization for security testing
5. **Token Validity:** Expired tokens have clear TTL validation mechanisms

---

## 2. TEST CASES BY API

### Get_Onboarding_Accounts
**Endpoint:** `GET /wealth/v1/onboarding/accounts`  
**Test Cases Count:** 9  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API01_001 | Get_Onboarding_Accounts - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API01_002 | Get_Onboarding_Accounts - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API01_003 | Get_Onboarding_Accounts - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API01_004 | Get_Onboarding_Accounts - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API01_005 | Get_Onboarding_Accounts - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API01_006 | Get_Onboarding_Accounts - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API01_007 | Get_Onboarding_Accounts - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API01_008 | Get_Onboarding_Accounts - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API01_009 | Get_Onboarding_Accounts - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API01_001  
**Title:** Get_Onboarding_Accounts - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `GET /wealth/v1/onboarding/accounts`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare GET request to /wealth/v1/onboarding/accounts
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
GET /wealth/v1/onboarding/accounts
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: N/A
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API01_002  
**Title:** Get_Onboarding_Accounts - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `GET /wealth/v1/onboarding/accounts`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /wealth/v1/onboarding/accounts
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
GET /wealth/v1/onboarding/accounts
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API01_003  
**Title:** Get_Onboarding_Accounts - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `GET /wealth/v1/onboarding/accounts`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /wealth/v1/onboarding/accounts
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
GET /wealth/v1/onboarding/accounts
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API01_004  
**Title:** Get_Onboarding_Accounts - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `GET /wealth/v1/onboarding/accounts`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of GET)
2. Target endpoint: /wealth/v1/onboarding/accounts
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
POST /wealth/v1/onboarding/accounts
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API01_005  
**Title:** Get_Onboarding_Accounts - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `GET /wealth/v1/onboarding/accounts`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /wealth/v1/onboarding/accounts
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET /wealth/v1/onboarding/accounts
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API01_006  
**Title:** Get_Onboarding_Accounts - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `GET /wealth/v1/onboarding/accounts`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /wealth/v1/onboarding/accounts
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
GET /wealth/v1/onboarding/accounts
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API01_007  
**Title:** Get_Onboarding_Accounts - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `GET /wealth/v1/onboarding/accounts`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /wealth/v1/onboarding/accounts
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
GET /wealth/v1/onboarding/accounts
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API01_008  
**Title:** Get_Onboarding_Accounts - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `GET /wealth/v1/onboarding/accounts`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /wealth/v1/onboarding/accounts
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
GET /wealth/v1/onboarding/accounts
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API01_009  
**Title:** Get_Onboarding_Accounts - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `GET /wealth/v1/onboarding/accounts`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /wealth/v1/onboarding/accounts
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET /wealth/v1/onboarding/accounts
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### getActionList
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list`  
**Test Cases Count:** 9  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API06_046 | getActionList - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API06_047 | getActionList - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API06_048 | getActionList - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API06_049 | getActionList - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API06_050 | getActionList - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API06_051 | getActionList - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API06_052 | getActionList - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API06_053 | getActionList - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API06_054 | getActionList - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API06_046  
**Title:** getActionList - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare GET request to https:////{IP}:{PORT}/dep/dashboard/v1/action-list
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: N/A
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API06_047  
**Title:** getActionList - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{IP}:{PORT}/dep/dashboard/v1/action-list
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API06_048  
**Title:** getActionList - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{IP}:{PORT}/dep/dashboard/v1/action-list
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API06_049  
**Title:** getActionList - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of GET)
2. Target endpoint: https:////{IP}:{PORT}/dep/dashboard/v1/action-list
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
POST https:////{IP}:{PORT}/dep/dashboard/v1/action-list
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API06_050  
**Title:** getActionList - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{IP}:{PORT}/dep/dashboard/v1/action-list
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API06_051  
**Title:** getActionList - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{IP}:{PORT}/dep/dashboard/v1/action-list
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API06_052  
**Title:** getActionList - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{IP}:{PORT}/dep/dashboard/v1/action-list
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API06_053  
**Title:** getActionList - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{IP}:{PORT}/dep/dashboard/v1/action-list
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API06_054  
**Title:** getActionList - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{IP}:{PORT}/dep/dashboard/v1/action-list
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{IP}:{PORT}/dep/dashboard/v1/action-list
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### getDashboardState
**Endpoint:** `GET /v1/dashboard/state`  
**Test Cases Count:** 9  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API02_010 | getDashboardState - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API02_011 | getDashboardState - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API02_012 | getDashboardState - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API02_013 | getDashboardState - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API02_014 | getDashboardState - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API02_015 | getDashboardState - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API02_016 | getDashboardState - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API02_017 | getDashboardState - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API02_018 | getDashboardState - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API02_010  
**Title:** getDashboardState - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `GET /v1/dashboard/state`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare GET request to /v1/dashboard/state
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
GET /v1/dashboard/state
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: N/A
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API02_011  
**Title:** getDashboardState - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `GET /v1/dashboard/state`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /v1/dashboard/state
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
GET /v1/dashboard/state
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API02_012  
**Title:** getDashboardState - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `GET /v1/dashboard/state`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /v1/dashboard/state
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
GET /v1/dashboard/state
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API02_013  
**Title:** getDashboardState - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `GET /v1/dashboard/state`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of GET)
2. Target endpoint: /v1/dashboard/state
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
POST /v1/dashboard/state
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API02_014  
**Title:** getDashboardState - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `GET /v1/dashboard/state`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /v1/dashboard/state
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET /v1/dashboard/state
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API02_015  
**Title:** getDashboardState - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `GET /v1/dashboard/state`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /v1/dashboard/state
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
GET /v1/dashboard/state
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API02_016  
**Title:** getDashboardState - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `GET /v1/dashboard/state`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /v1/dashboard/state
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
GET /v1/dashboard/state
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API02_017  
**Title:** getDashboardState - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `GET /v1/dashboard/state`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /v1/dashboard/state
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
GET /v1/dashboard/state
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API02_018  
**Title:** getDashboardState - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `GET /v1/dashboard/state`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /v1/dashboard/state
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET /v1/dashboard/state
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### getForYouTiles
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles`  
**Test Cases Count:** 9  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API09_073 | getForYouTiles - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API09_074 | getForYouTiles - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API09_075 | getForYouTiles - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API09_076 | getForYouTiles - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API09_077 | getForYouTiles - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API09_078 | getForYouTiles - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API09_079 | getForYouTiles - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API09_080 | getForYouTiles - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API09_081 | getForYouTiles - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API09_073  
**Title:** getForYouTiles - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: N/A
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API09_074  
**Title:** getForYouTiles - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API09_075  
**Title:** getForYouTiles - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API09_076  
**Title:** getForYouTiles - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of GET)
2. Target endpoint: https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API09_077  
**Title:** getForYouTiles - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API09_078  
**Title:** getForYouTiles - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API09_079  
**Title:** getForYouTiles - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API09_080  
**Title:** getForYouTiles - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API09_081  
**Title:** getForYouTiles - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/for-you-tiles
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### getHomeDashboardManagement
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  
**Test Cases Count:** 9  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API14_118 | getHomeDashboardManagement - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API14_119 | getHomeDashboardManagement - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API14_120 | getHomeDashboardManagement - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API14_121 | getHomeDashboardManagement - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API14_122 | getHomeDashboardManagement - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API14_123 | getHomeDashboardManagement - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API14_124 | getHomeDashboardManagement - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API14_125 | getHomeDashboardManagement - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API14_126 | getHomeDashboardManagement - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API14_118  
**Title:** getHomeDashboardManagement - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: N/A
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API14_119  
**Title:** getHomeDashboardManagement - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API14_120  
**Title:** getHomeDashboardManagement - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API14_121  
**Title:** getHomeDashboardManagement - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of GET)
2. Target endpoint: https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API14_122  
**Title:** getHomeDashboardManagement - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API14_123  
**Title:** getHomeDashboardManagement - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API14_124  
**Title:** getHomeDashboardManagement - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API14_125  
**Title:** getHomeDashboardManagement - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API14_126  
**Title:** getHomeDashboardManagement - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### getLargeWidget
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget`  
**Test Cases Count:** 9  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API13_109 | getLargeWidget - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API13_110 | getLargeWidget - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API13_111 | getLargeWidget - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API13_112 | getLargeWidget - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API13_113 | getLargeWidget - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API13_114 | getLargeWidget - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API13_115 | getLargeWidget - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API13_116 | getLargeWidget - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API13_117 | getLargeWidget - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API13_109  
**Title:** getLargeWidget - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: N/A
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API13_110  
**Title:** getLargeWidget - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API13_111  
**Title:** getLargeWidget - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API13_112  
**Title:** getLargeWidget - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of GET)
2. Target endpoint: https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API13_113  
**Title:** getLargeWidget - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API13_114  
**Title:** getLargeWidget - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API13_115  
**Title:** getLargeWidget - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API13_116  
**Title:** getLargeWidget - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API13_117  
**Title:** getLargeWidget - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/large-widget
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### getLargeWidgetManagement
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/`  
**Test Cases Count:** 9  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API20_178 | getLargeWidgetManagement - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API20_179 | getLargeWidgetManagement - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API20_180 | getLargeWidgetManagement - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API20_181 | getLargeWidgetManagement - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API20_182 | getLargeWidgetManagement - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API20_183 | getLargeWidgetManagement - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API20_184 | getLargeWidgetManagement - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API20_185 | getLargeWidgetManagement - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API20_186 | getLargeWidgetManagement - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API20_178  
**Title:** getLargeWidgetManagement - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: N/A
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API20_179  
**Title:** getLargeWidgetManagement - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API20_180  
**Title:** getLargeWidgetManagement - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API20_181  
**Title:** getLargeWidgetManagement - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of GET)
2. Target endpoint: https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API20_182  
**Title:** getLargeWidgetManagement - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API20_183  
**Title:** getLargeWidgetManagement - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API20_184  
**Title:** getLargeWidgetManagement - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API20_185  
**Title:** getLargeWidgetManagement - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API20_186  
**Title:** getLargeWidgetManagement - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget/
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### getMainPreview
**Endpoint:** `GET /dep/dashboard/v1/main-preview`  
**Test Cases Count:** 9  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API08_064 | getMainPreview - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API08_065 | getMainPreview - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API08_066 | getMainPreview - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API08_067 | getMainPreview - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API08_068 | getMainPreview - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API08_069 | getMainPreview - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API08_070 | getMainPreview - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API08_071 | getMainPreview - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API08_072 | getMainPreview - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API08_064  
**Title:** getMainPreview - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `GET /dep/dashboard/v1/main-preview`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare GET request to /dep/dashboard/v1/main-preview
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
GET /dep/dashboard/v1/main-preview
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: N/A
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API08_065  
**Title:** getMainPreview - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `GET /dep/dashboard/v1/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /dep/dashboard/v1/main-preview
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
GET /dep/dashboard/v1/main-preview
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API08_066  
**Title:** getMainPreview - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `GET /dep/dashboard/v1/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /dep/dashboard/v1/main-preview
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
GET /dep/dashboard/v1/main-preview
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API08_067  
**Title:** getMainPreview - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `GET /dep/dashboard/v1/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of GET)
2. Target endpoint: /dep/dashboard/v1/main-preview
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
POST /dep/dashboard/v1/main-preview
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API08_068  
**Title:** getMainPreview - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `GET /dep/dashboard/v1/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /dep/dashboard/v1/main-preview
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET /dep/dashboard/v1/main-preview
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API08_069  
**Title:** getMainPreview - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `GET /dep/dashboard/v1/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /dep/dashboard/v1/main-preview
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
GET /dep/dashboard/v1/main-preview
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API08_070  
**Title:** getMainPreview - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `GET /dep/dashboard/v1/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /dep/dashboard/v1/main-preview
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
GET /dep/dashboard/v1/main-preview
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API08_071  
**Title:** getMainPreview - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `GET /dep/dashboard/v1/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /dep/dashboard/v1/main-preview
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
GET /dep/dashboard/v1/main-preview
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API08_072  
**Title:** getMainPreview - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `GET /dep/dashboard/v1/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to /dep/dashboard/v1/main-preview
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET /dep/dashboard/v1/main-preview
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### getMainPreviewManagement
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  
**Test Cases Count:** 9  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API16_138 | getMainPreviewManagement - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API16_139 | getMainPreviewManagement - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API16_140 | getMainPreviewManagement - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API16_141 | getMainPreviewManagement - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API16_142 | getMainPreviewManagement - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API16_143 | getMainPreviewManagement - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API16_144 | getMainPreviewManagement - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API16_145 | getMainPreviewManagement - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API16_146 | getMainPreviewManagement - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API16_138  
**Title:** getMainPreviewManagement - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: N/A
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API16_139  
**Title:** getMainPreviewManagement - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API16_140  
**Title:** getMainPreviewManagement - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API16_141  
**Title:** getMainPreviewManagement - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of GET)
2. Target endpoint: https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API16_142  
**Title:** getMainPreviewManagement - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API16_143  
**Title:** getMainPreviewManagement - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API16_144  
**Title:** getMainPreviewManagement - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API16_145  
**Title:** getMainPreviewManagement - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API16_146  
**Title:** getMainPreviewManagement - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### getMediumWidget
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget`  
**Test Cases Count:** 9  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API12_100 | getMediumWidget - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API12_101 | getMediumWidget - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API12_102 | getMediumWidget - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API12_103 | getMediumWidget - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API12_104 | getMediumWidget - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API12_105 | getMediumWidget - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API12_106 | getMediumWidget - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API12_107 | getMediumWidget - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API12_108 | getMediumWidget - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API12_100  
**Title:** getMediumWidget - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: N/A
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API12_101  
**Title:** getMediumWidget - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API12_102  
**Title:** getMediumWidget - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API12_103  
**Title:** getMediumWidget - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of GET)
2. Target endpoint: https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API12_104  
**Title:** getMediumWidget - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API12_105  
**Title:** getMediumWidget - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API12_106  
**Title:** getMediumWidget - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API12_107  
**Title:** getMediumWidget - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API12_108  
**Title:** getMediumWidget - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/medium-widget
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### getMenu
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu`  
**Test Cases Count:** 9  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API04_028 | getMenu - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API04_029 | getMenu - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API04_030 | getMenu - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API04_031 | getMenu - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API04_032 | getMenu - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API04_033 | getMenu - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API04_034 | getMenu - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API04_035 | getMenu - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API04_036 | getMenu - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API04_028  
**Title:** getMenu - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: N/A
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API04_029  
**Title:** getMenu - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API04_030  
**Title:** getMenu - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API04_031  
**Title:** getMenu - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of GET)
2. Target endpoint: https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API04_032  
**Title:** getMenu - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API04_033  
**Title:** getMenu - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API04_034  
**Title:** getMenu - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API04_035  
**Title:** getMenu - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API04_036  
**Title:** getMenu - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/menu
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### getQuickActions
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions`  
**Test Cases Count:** 9  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API10_082 | getQuickActions - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API10_083 | getQuickActions - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API10_084 | getQuickActions - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API10_085 | getQuickActions - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API10_086 | getQuickActions - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API10_087 | getQuickActions - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API10_088 | getQuickActions - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API10_089 | getQuickActions - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API10_090 | getQuickActions - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API10_082  
**Title:** getQuickActions - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: N/A
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API10_083  
**Title:** getQuickActions - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API10_084  
**Title:** getQuickActions - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API10_085  
**Title:** getQuickActions - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of GET)
2. Target endpoint: https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API10_086  
**Title:** getQuickActions - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API10_087  
**Title:** getQuickActions - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API10_088  
**Title:** getQuickActions - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API10_089  
**Title:** getQuickActions - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API10_090  
**Title:** getQuickActions - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/quick-actions
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### getQuickActionsManagement
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  
**Test Cases Count:** 9  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API18_158 | getQuickActionsManagement - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API18_159 | getQuickActionsManagement - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API18_160 | getQuickActionsManagement - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API18_161 | getQuickActionsManagement - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API18_162 | getQuickActionsManagement - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API18_163 | getQuickActionsManagement - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API18_164 | getQuickActionsManagement - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API18_165 | getQuickActionsManagement - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API18_166 | getQuickActionsManagement - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API18_158  
**Title:** getQuickActionsManagement - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: N/A
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API18_159  
**Title:** getQuickActionsManagement - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API18_160  
**Title:** getQuickActionsManagement - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API18_161  
**Title:** getQuickActionsManagement - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of GET)
2. Target endpoint: https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API18_162  
**Title:** getQuickActionsManagement - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API18_163  
**Title:** getQuickActionsManagement - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API18_164  
**Title:** getQuickActionsManagement - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API18_165  
**Title:** getQuickActionsManagement - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API18_166  
**Title:** getQuickActionsManagement - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### getSmallWidget
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget`  
**Test Cases Count:** 9  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API11_091 | getSmallWidget - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API11_092 | getSmallWidget - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API11_093 | getSmallWidget - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API11_094 | getSmallWidget - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API11_095 | getSmallWidget - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API11_096 | getSmallWidget - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API11_097 | getSmallWidget - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API11_098 | getSmallWidget - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API11_099 | getSmallWidget - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API11_091  
**Title:** getSmallWidget - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: N/A
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API11_092  
**Title:** getSmallWidget - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API11_093  
**Title:** getSmallWidget - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API11_094  
**Title:** getSmallWidget - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of GET)
2. Target endpoint: https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API11_095  
**Title:** getSmallWidget - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API11_096  
**Title:** getSmallWidget - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API11_097  
**Title:** getSmallWidget - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API11_098  
**Title:** getSmallWidget - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API11_099  
**Title:** getSmallWidget - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/small-widget
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### getTempBanner
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner`  
**Test Cases Count:** 9  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API07_055 | getTempBanner - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API07_056 | getTempBanner - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API07_057 | getTempBanner - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API07_058 | getTempBanner - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API07_059 | getTempBanner - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API07_060 | getTempBanner - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API07_061 | getTempBanner - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API07_062 | getTempBanner - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API07_063 | getTempBanner - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API07_055  
**Title:** getTempBanner - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: N/A
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API07_056  
**Title:** getTempBanner - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API07_057  
**Title:** getTempBanner - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API07_058  
**Title:** getTempBanner - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of GET)
2. Target endpoint: https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API07_059  
**Title:** getTempBanner - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API07_060  
**Title:** getTempBanner - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API07_061  
**Title:** getTempBanner - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API07_062  
**Title:** getTempBanner - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API07_063  
**Title:** getTempBanner - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/temp-banner
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### getUserHeader
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header`  
**Test Cases Count:** 9  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API05_037 | getUserHeader - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API05_038 | getUserHeader - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API05_039 | getUserHeader - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API05_040 | getUserHeader - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API05_041 | getUserHeader - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API05_042 | getUserHeader - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API05_043 | getUserHeader - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API05_044 | getUserHeader - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API05_045 | getUserHeader - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API05_037  
**Title:** getUserHeader - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare GET request to https:////{IP}:{PORT}/dep/dashboard/v1/user-header
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: N/A
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API05_038  
**Title:** getUserHeader - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{IP}:{PORT}/dep/dashboard/v1/user-header
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API05_039  
**Title:** getUserHeader - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{IP}:{PORT}/dep/dashboard/v1/user-header
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API05_040  
**Title:** getUserHeader - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of GET)
2. Target endpoint: https:////{IP}:{PORT}/dep/dashboard/v1/user-header
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
POST https:////{IP}:{PORT}/dep/dashboard/v1/user-header
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API05_041  
**Title:** getUserHeader - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{IP}:{PORT}/dep/dashboard/v1/user-header
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API05_042  
**Title:** getUserHeader - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{IP}:{PORT}/dep/dashboard/v1/user-header
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API05_043  
**Title:** getUserHeader - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{IP}:{PORT}/dep/dashboard/v1/user-header
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API05_044  
**Title:** getUserHeader - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{IP}:{PORT}/dep/dashboard/v1/user-header
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API05_045  
**Title:** getUserHeader - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{IP}:{PORT}/dep/dashboard/v1/user-header
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{IP}:{PORT}/dep/dashboard/v1/user-header
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### init
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init`  
**Test Cases Count:** 9  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API03_019 | init - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API03_020 | init - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API03_021 | init - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API03_022 | init - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API03_023 | init - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API03_024 | init - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API03_025 | init - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API03_026 | init - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API03_027 | init - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API03_019  
**Title:** init - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: N/A
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API03_020  
**Title:** init - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API03_021  
**Title:** init - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API03_022  
**Title:** init - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of GET)
2. Target endpoint: https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API03_023  
**Title:** init - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API03_024  
**Title:** init - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API03_025  
**Title:** init - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API03_026  
**Title:** init - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API03_027  
**Title:** init - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare GET request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/init
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### updateHomeDashboardManagement
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  
**Test Cases Count:** 11  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API15_127 | updateHomeDashboardManagement - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API15_128 | updateHomeDashboardManagement - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API15_129 | updateHomeDashboardManagement - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API15_130 | updateHomeDashboardManagement - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API15_131 | updateHomeDashboardManagement - Malformed JSON in request body | Negative | Format / Malformed Payload | High |
| TC_API15_132 | updateHomeDashboardManagement - Empty request body | Negative | Format / Empty Payload | Medium |
| TC_API15_133 | updateHomeDashboardManagement - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API15_134 | updateHomeDashboardManagement - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API15_135 | updateHomeDashboardManagement - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API15_136 | updateHomeDashboardManagement - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API15_137 | updateHomeDashboardManagement - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API15_127  
**Title:** updateHomeDashboardManagement - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: API body parameters
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API15_128  
**Title:** updateHomeDashboardManagement - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API15_129  
**Title:** updateHomeDashboardManagement - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API15_130  
**Title:** updateHomeDashboardManagement - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of POST)
2. Target endpoint: https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API15_131  
**Title:** updateHomeDashboardManagement - Malformed JSON in request body  
**Type:** Negative  
**Category:** Format / Malformed Payload  
**Priority:** High  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Send malformed JSON body (missing closing bracket, extra comma)
3. Include valid headers
4. Send the request
5. Verify error response

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Headers: Valid headers
Body: {"key": "value", }
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates malformed JSON/invalid payload; Error details provided

---

**Test ID:** TC_API15_132  
**Title:** updateHomeDashboardManagement - Empty request body  
**Type:** Negative  
**Category:** Format / Empty Payload  
**Priority:** Medium  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Send empty or null request body
3. Include valid headers
4. Send the request
5. Verify error response

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Headers: Valid headers
Body: (empty)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates empty or invalid request body; Descriptive error message

---

**Test ID:** TC_API15_133  
**Title:** updateHomeDashboardManagement - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API15_134  
**Title:** updateHomeDashboardManagement - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API15_135  
**Title:** updateHomeDashboardManagement - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API15_136  
**Title:** updateHomeDashboardManagement - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API15_137  
**Title:** updateHomeDashboardManagement - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/home-dashboard
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### updateLargeWidgetManagement
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget`  
**Test Cases Count:** 11  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API21_187 | updateLargeWidgetManagement - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API21_188 | updateLargeWidgetManagement - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API21_189 | updateLargeWidgetManagement - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API21_190 | updateLargeWidgetManagement - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API21_191 | updateLargeWidgetManagement - Malformed JSON in request body | Negative | Format / Malformed Payload | High |
| TC_API21_192 | updateLargeWidgetManagement - Empty request body | Negative | Format / Empty Payload | Medium |
| TC_API21_193 | updateLargeWidgetManagement - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API21_194 | updateLargeWidgetManagement - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API21_195 | updateLargeWidgetManagement - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API21_196 | updateLargeWidgetManagement - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API21_197 | updateLargeWidgetManagement - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API21_187  
**Title:** updateLargeWidgetManagement - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: API body parameters
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API21_188  
**Title:** updateLargeWidgetManagement - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API21_189  
**Title:** updateLargeWidgetManagement - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API21_190  
**Title:** updateLargeWidgetManagement - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of PUT)
2. Target endpoint: https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API21_191  
**Title:** updateLargeWidgetManagement - Malformed JSON in request body  
**Type:** Negative  
**Category:** Format / Malformed Payload  
**Priority:** High  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
2. Send malformed JSON body (missing closing bracket, extra comma)
3. Include valid headers
4. Send the request
5. Verify error response

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
Headers: Valid headers
Body: {"key": "value", }
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates malformed JSON/invalid payload; Error details provided

---

**Test ID:** TC_API21_192  
**Title:** updateLargeWidgetManagement - Empty request body  
**Type:** Negative  
**Category:** Format / Empty Payload  
**Priority:** Medium  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
2. Send empty or null request body
3. Include valid headers
4. Send the request
5. Verify error response

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
Headers: Valid headers
Body: (empty)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates empty or invalid request body; Descriptive error message

---

**Test ID:** TC_API21_193  
**Title:** updateLargeWidgetManagement - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API21_194  
**Title:** updateLargeWidgetManagement - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API21_195  
**Title:** updateLargeWidgetManagement - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API21_196  
**Title:** updateLargeWidgetManagement - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API21_197  
**Title:** updateLargeWidgetManagement - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/large-widget
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### updateMainPreviewManagement
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  
**Test Cases Count:** 11  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API17_147 | updateMainPreviewManagement - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API17_148 | updateMainPreviewManagement - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API17_149 | updateMainPreviewManagement - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API17_150 | updateMainPreviewManagement - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API17_151 | updateMainPreviewManagement - Malformed JSON in request body | Negative | Format / Malformed Payload | High |
| TC_API17_152 | updateMainPreviewManagement - Empty request body | Negative | Format / Empty Payload | Medium |
| TC_API17_153 | updateMainPreviewManagement - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API17_154 | updateMainPreviewManagement - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API17_155 | updateMainPreviewManagement - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API17_156 | updateMainPreviewManagement - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API17_157 | updateMainPreviewManagement - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API17_147  
**Title:** updateMainPreviewManagement - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: API body parameters
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API17_148  
**Title:** updateMainPreviewManagement - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API17_149  
**Title:** updateMainPreviewManagement - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API17_150  
**Title:** updateMainPreviewManagement - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of PUT)
2. Target endpoint: https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API17_151  
**Title:** updateMainPreviewManagement - Malformed JSON in request body  
**Type:** Negative  
**Category:** Format / Malformed Payload  
**Priority:** High  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Send malformed JSON body (missing closing bracket, extra comma)
3. Include valid headers
4. Send the request
5. Verify error response

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Headers: Valid headers
Body: {"key": "value", }
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates malformed JSON/invalid payload; Error details provided

---

**Test ID:** TC_API17_152  
**Title:** updateMainPreviewManagement - Empty request body  
**Type:** Negative  
**Category:** Format / Empty Payload  
**Priority:** Medium  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Send empty or null request body
3. Include valid headers
4. Send the request
5. Verify error response

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Headers: Valid headers
Body: (empty)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates empty or invalid request body; Descriptive error message

---

**Test ID:** TC_API17_153  
**Title:** updateMainPreviewManagement - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API17_154  
**Title:** updateMainPreviewManagement - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API17_155  
**Title:** updateMainPreviewManagement - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API17_156  
**Title:** updateMainPreviewManagement - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API17_157  
**Title:** updateMainPreviewManagement - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare PUT request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
PUT https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/main-preview
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

### updateQuickActionsManagement
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  
**Test Cases Count:** 11  

#### Test Case Summary
| Test ID | Title | Type | Category | Priority |
|---------|-------|------|----------|----------|
| TC_API19_167 | updateQuickActionsManagement - Valid request with all mandatory headers | Positive | Happy Path / Valid Request | High |
| TC_API19_168 | updateQuickActionsManagement - Missing Authorization header | Negative | Authentication / Missing Header | High |
| TC_API19_169 | updateQuickActionsManagement - Invalid/Expired authentication token | Negative | Authentication / Invalid Token | High |
| TC_API19_170 | updateQuickActionsManagement - Incorrect HTTP method | Negative | HTTP Protocol / Invalid Method | High |
| TC_API19_171 | updateQuickActionsManagement - Malformed JSON in request body | Negative | Format / Malformed Payload | High |
| TC_API19_172 | updateQuickActionsManagement - Empty request body | Negative | Format / Empty Payload | Medium |
| TC_API19_173 | updateQuickActionsManagement - Invalid data type in request | Negative | Data Validation / Type Mismatch | Medium |
| TC_API19_174 | updateQuickActionsManagement - SQL Injection payload in request | Negative | Security / SQL Injection | High |
| TC_API19_175 | updateQuickActionsManagement - XSS payload in request | Negative | Security / XSS Attack | High |
| TC_API19_176 | updateQuickActionsManagement - Special characters in request parameter | Negative | Input Validation / Special Characters | Medium |
| TC_API19_177 | updateQuickActionsManagement - Out-of-range / Boundary violation | Negative | Boundary Testing / Range Validation | Medium |

#### Detailed Test Cases

**Test ID:** TC_API19_167  
**Title:** updateQuickActionsManagement - Valid request with all mandatory headers  
**Type:** Positive  
**Category:** Happy Path / Valid Request  
**Priority:** High  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
User is authenticated; Valid bearer token available; System is operational

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Include all mandatory headers with valid values
3. Ensure Content-Type is application/json
4. Send the API request
5. Verify response is received within expected time

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Headers: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE
Body: API body parameters
```

**Expected Result:**  
HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema

---

**Test ID:** TC_API19_168  
**Title:** updateQuickActionsManagement - Missing Authorization header  
**Type:** Negative  
**Category:** Authentication / Missing Header  
**Priority:** High  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Omit the Authorization header
3. Include other required headers
4. Send the API request
5. Verify error response

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Headers: (All except Authorization)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned

---

**Test ID:** TC_API19_169  
**Title:** updateQuickActionsManagement - Invalid/Expired authentication token  
**Type:** Negative  
**Category:** Authentication / Invalid Token  
**Priority:** High  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Set Authorization header with expired/invalid token
3. Include other required headers
4. Send the API request
5. Verify authentication failure response

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Headers: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)
```

**Expected Result:**  
HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned

---

**Test ID:** TC_API19_170  
**Title:** updateQuickActionsManagement - Incorrect HTTP method  
**Type:** Negative  
**Category:** HTTP Protocol / Invalid Method  
**Priority:** High  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare request with incorrect HTTP method (e.g., POST instead of POST)
2. Target endpoint: https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
3. Include valid headers and body
4. Send the request
5. Verify method not allowed error

**Input Data:**  
```
GET https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Headers: All required headers
```

**Expected Result:**  
HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method

---

**Test ID:** TC_API19_171  
**Title:** updateQuickActionsManagement - Malformed JSON in request body  
**Type:** Negative  
**Category:** Format / Malformed Payload  
**Priority:** High  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Send malformed JSON body (missing closing bracket, extra comma)
3. Include valid headers
4. Send the request
5. Verify error response

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Headers: Valid headers
Body: {"key": "value", }
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates malformed JSON/invalid payload; Error details provided

---

**Test ID:** TC_API19_172  
**Title:** updateQuickActionsManagement - Empty request body  
**Type:** Negative  
**Category:** Format / Empty Payload  
**Priority:** Medium  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Send empty or null request body
3. Include valid headers
4. Send the request
5. Verify error response

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Headers: Valid headers
Body: (empty)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates empty or invalid request body; Descriptive error message

---

**Test ID:** TC_API19_173  
**Title:** updateQuickActionsManagement - Invalid data type in request  
**Type:** Negative  
**Category:** Data Validation / Type Mismatch  
**Priority:** Medium  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Send parameter with incorrect data type (string instead of number, etc.)
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Headers: Valid headers
Body/Query: Parameter with wrong data type (e.g., "abc" for numeric field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message

---

**Test ID:** TC_API19_174  
**Title:** updateQuickActionsManagement - SQL Injection payload in request  
**Type:** Negative  
**Category:** Security / SQL Injection  
**Priority:** High  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm no SQL injection executed

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Payload: "; DROP TABLE users; --
```

**Expected Result:**  
HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs

---

**Test ID:** TC_API19_175  
**Title:** updateQuickActionsManagement - XSS payload in request  
**Type:** Negative  
**Category:** Security / XSS Attack  
**Priority:** High  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)
3. Send the request with valid headers
4. Verify API safely handles input
5. Confirm script is not executed

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Payload: <script>alert("XSS")</script>
```

**Expected Result:**  
HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe

---

**Test ID:** TC_API19_176  
**Title:** updateQuickActionsManagement - Special characters in request parameter  
**Type:** Negative  
**Category:** Input Validation / Special Characters  
**Priority:** Medium  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Include special characters in parameter (e.g., @#$%^&*())
3. Send the request with valid headers
4. Verify response
5. Check if input is properly encoded/escaped

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Payload with special characters: @#$%^&*()
```

**Expected Result:**  
HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result

---

**Test ID:** TC_API19_177  
**Title:** updateQuickActionsManagement - Out-of-range / Boundary violation  
**Type:** Negative  
**Category:** Boundary Testing / Range Validation  
**Priority:** Medium  
**Endpoint:** `POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/`  

**Pre-conditions:**  
N/A

**Test Steps:**  
1. Prepare POST request to https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
2. Set numeric parameter to value exceeding defined limits
3. Include valid headers
4. Send the request
5. Verify validation error

**Input Data:**  
```
POST https:////{EXP-IP}:{EXP-PORT}/dep/dashboard/v1/management/quick-action/
Payload: Parameter value exceeds max length/range (e.g., negative for positive-only field)
```

**Expected Result:**  
HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error

---

