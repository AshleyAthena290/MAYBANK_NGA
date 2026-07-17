# ECLIPSE Account Dashboard - Credit Card API
## Comprehensive Test Generation Analysis
### Master Reference Document

**Document Generated:** 2026-07-17 10:58:51
**Source Excel:** ECLIPSE_Account Dashboard_Credit_Card_DDD_API_Design_v1_Workshop.xlsx

---

# 1. EXECUTIVE SUMMARY

## Overview
This document provides a comprehensive analysis of all Credit Card Dashboard APIs for the ECLIPSE Account Dashboard system, designed to support 150+ test cases covering all functional, security, and edge-case scenarios.

## API Architecture
- **Frontend APIs:** User-facing APIs for dashboard, transactions, and card management
- **Backend ECLIPSE APIs:** Microservice-based DDD APIs for core business operations
- **Architecture:** RESTful APIs with JSON request/response payloads
- **Authentication:** OAuth2 Bearer tokens with client-id header
- **Communication Pattern:** Request-Response with standardized error handling

## Key Testing Areas
1. **Positive Testing** - Happy path scenarios with valid data
2. **Negative Testing** - Error conditions, missing fields, invalid values
3. **Boundary Testing** - Min/max values, edge cases
4. **Security Testing** - Authentication, authorization, injection attacks
5. **Validation Testing** - Field-level and business rule validations
6. **Integration Testing** - Cross-API data consistency
7. **Error Handling** - Proper error codes and messages
8. **Performance Testing** - Response times and load handling

## Test Coverage Target
- **Total Test Cases:** 150+
- **API Coverage:** 100% (all documented APIs)
- **Parameter Coverage:** All mandatory and optional parameters
- **Error Scenario Coverage:** All documented error codes and scenarios
- **Business Rule Coverage:** All documented business rules

---

# 2. API ARCHITECTURE & ENDPOINTS

## API Inventory

**Total Documented APIs:** 23

### Distribution by HTTP Method

| Method | Count | Purpose |
|--------|-------|----------|
| DELETE | 1 | Delete data |
| GET | 12 | Retrieve data |
| PATCH | 1 | Create/Update |
| POST | 9 | Create/Update |

### API Endpoints by Category

| No. | API Name | Method | Endpoint | Test Priority |
|-----|----------|--------|----------|---------------|
| 1 | Cards dashboard | GET | /v1/external/accounts?accountGroup={acco... | P2 |
| 2 | Credit card detail | GET | /v1/external/accounts/account-type/{acco... | P2 |
| 3 | Credit card detail icon (CVV) | POST | /v1/external/credit-card/cvv-inquiry | P2 |
| 4 | Credit card activation + set card pin | POST | /v1/external/credit-card/activate | P2 |
| 5 | Credit card transaction history | GET | /v1/external/accounts/account-type/{acco... | P1 |
| 6 | Credit card view all transaction history | GET | /v1/external/accounts/account-type/{acco... | P1 |
| 7 | Credit card search all transaction history | GET | /v1/external/accounts/account-type/{acco... | P1 |
| 8 | Credit card filter transaction history | GET | /v1/external/accounts/account-type/{acco... | P1 |
| 9 | Credit card export transaction history | GET | /v1/external/accounts/account-type/{acco... | P2 |
| 10 | Credit card transaction detail | GET | /v1/external/transaction/detail/{transac... | P2 |
| 11 | Credit card view receipt | GET | /v1/external/receipts/{transactionRefere... | P2 |
| 12 | Credit card detail | GET | /v1/external/accounts/account-type/{acco... | P2 |
| 13 | Add credit card nickname | POST | /v1/external/accounts/nickname | P2 |
| 14 | Update credit card nickname | PATCH | /v1/external/accounts/nickname | P2 |
| 15 | Delete credit card nickname | DELETE | /v1/external/accounts/{accountId}/nickna... | P2 |
| 16 | Installment convertion schedule | GET | /v1/external/credit-card/instalment-conv... | P2 |
| 17 | Apply installment convertion | POST | /v1/external/credit-card/apply-instalmen... | P2 |
| 18 | Increase credit limit permanent | POST | /v1/external/credit-card/increase-credit... | P1 |
| 19 | Block credit card | POST | /v1/external/cards/block | P1 |
| 20 | Unblock credit card | POST | /v1/external/cards/unblock | P1 |
| 21 | Credit card replacement | POST | /v1/external/credit-card/replacement | P2 |
| 22 | Get customer information | GET | /v1/external/information | P2 |
| 23 | Reset credit card PIN | POST | /v1/external/cards/reset-pin | P1 |

---

# 3. AUTHENTICATION & AUTHORIZATION FRAMEWORK

## Authentication Requirements

### Standard Headers
All APIs require the following headers:

| Header | Type | Mandatory | Value | Purpose |
|--------|------|-----------|-------|----------|
| Authorization | String | YES | Bearer {ACCESS_TOKEN} | OAuth2 authentication token |
| client-id | String | YES | pnt-17ht3 | Unique client identifier |
| api-key | String | NO | a7dfa879sd8a7sd8 | Additional API key (optional) |
| env | String | YES | UAT/DEV/PROD | Environment identifier |
| accept | String | NO | application/json | Content type acceptance |

## Authentication Test Scenarios

### Positive Cases
- ✓ Valid Bearer token → HTTP 200
- ✓ All required headers present → HTTP 200
- ✓ Valid client-id format → HTTP 200

### Negative Cases
- ✗ Missing Authorization header → HTTP 401
  - Expected Error: 'Missing or invalid authorization header'
- ✗ Invalid Bearer token → HTTP 401
  - Expected Error: 'Invalid authentication token'
- ✗ Expired Bearer token → HTTP 401
  - Expected Error: 'Authentication token expired'
- ✗ Missing client-id header → HTTP 401
  - Expected Error: 'Missing required header: client-id'
- ✗ Invalid client-id → HTTP 403
  - Expected Error: 'Client not authorized'
- ✗ Missing env header → HTTP 400
  - Expected Error: 'Missing required header: env'
- ✗ Invalid env value → HTTP 400
  - Expected Error: 'Invalid environment value'

## Authorization Rules

- Users can only access their own account data
- Cross-customer access attempts → HTTP 403
- Admin users have elevated access to all accounts
- Read operations (GET) require lower privileges than write operations (POST/PUT/DELETE)

---

# 4. ERROR HANDLING FRAMEWORK

## HTTP Status Codes Reference

### Success Codes (2xx)
| Code | Status | When Used | Example |
|------|--------|-----------|----------|
| 200 | OK | Successful GET, PATCH | Retrieved card details |
| 201 | Created | Successful resource creation via POST | Created new nickname |
| 202 | Accepted | Request accepted for async processing | Scheduled card replacement |
| 204 | No Content | Successful operation with no response body | Deleted nickname |

### Client Error Codes (4xx)
| Code | Status | When Used | Test Case |
|------|--------|-----------|----------|
| 400 | Bad Request | Invalid request format/parameters | Missing mandatory field |
| 401 | Unauthorized | Missing/invalid authentication | Invalid Bearer token |
| 403 | Forbidden | Authorized but no permission | Access denied - insufficient role |
| 404 | Not Found | Resource doesn't exist | Non-existent card number |
| 409 | Conflict | Request conflicts with current state | Card already blocked |
| 410 | Gone | Resource no longer available | Deleted card |
| 422 | Unprocessable Entity | Request format valid, semantic error | Invalid business logic |

### Server Error Codes (5xx)
| Code | Status | When Used | Test Case |
|------|--------|-----------|----------|
| 500 | Internal Server Error | Unexpected server error | Database connection failure |
| 503 | Service Unavailable | Server/service temporarily down | Timeout scenario |

## Error Response Structure

```json
{
  "errorCode": "INVALID_CARD_NUMBER",
  "errorMessage": "The provided card number is invalid",
  "httpStatusCode": 400,
  "timestamp": "2026-07-17T10:30:00Z",
  "details": {
    "field": "cardNumber",
    "value": "invalid",
    "constraint": "Must be 16 digits"
  }
}
```

## Common Error Scenarios by Category

### Parameter Validation Errors
- Missing mandatory parameter → HTTP 400, errorCode: MISSING_PARAMETER
- Invalid data type → HTTP 422, errorCode: INVALID_DATA_TYPE
- Out of range value → HTTP 422, errorCode: OUT_OF_RANGE
- Invalid format → HTTP 400, errorCode: INVALID_FORMAT

### Business Logic Errors
- Card already blocked → HTTP 409, errorCode: CARD_ALREADY_BLOCKED
- Credit limit below minimum → HTTP 422, errorCode: LIMIT_BELOW_MINIMUM
- Insufficient permissions → HTTP 403, errorCode: INSUFFICIENT_PERMISSIONS

### Authentication/Authorization Errors
- Invalid token → HTTP 401, errorCode: INVALID_TOKEN
- Token expired → HTTP 401, errorCode: TOKEN_EXPIRED
- Access denied → HTTP 403, errorCode: ACCESS_DENIED
- Missing credentials → HTTP 401, errorCode: MISSING_CREDENTIALS

---

# 5. TEST CASE GENERATION FRAMEWORK

## 5.1 Test Case Categories

### A. Positive (Happy Path) Tests - ~35-40 test cases
**Objective:** Verify APIs work correctly with valid inputs

**Coverage:**
- Each GET API with valid parameters → HTTP 200
- Each POST API with valid payload → HTTP 201
- Each state-changing operation (block, unblock, PIN reset) → HTTP 202
- Response contains all expected fields
- Response data matches request parameters
- Business logic constraints are satisfied

**Test Template:**
```
Test: [API_NAME]_Valid_[Parameter_Combination]
Preconditions:
  - User is authenticated with valid token
  - Valid test data is prepared
Steps:
  1. Call API with valid parameters
  2. Verify HTTP response code is 200/201/202
  3. Verify response contains all expected fields
  4. Verify data in response matches expectations
Expected Result: API succeeds and returns expected data
```

### B. Negative (Error) Tests - ~60-70 test cases
**Objective:** Verify APIs handle errors gracefully

**Coverage by Error Type:**

**B1. Missing/Invalid Parameters (~20 tests)**
- Missing each mandatory parameter → HTTP 400
- Invalid data type for each parameter
- Empty string for required fields
- Null values for required fields
- Max length exceeded

**B2. Invalid Values (~15 tests)**
- Invalid card number format
- Invalid currency code
- Invalid status value
- Invalid date format
- Out-of-range numeric values

**B3. Authentication/Authorization (~15 tests)**
- Missing Authorization header → HTTP 401
- Invalid Bearer token → HTTP 401
- Missing client-id → HTTP 401
- Invalid client-id → HTTP 403
- Cross-customer access → HTTP 403
- Missing env header → HTTP 400

**B4. Business Logic Violations (~15 tests)**
- Blocking already blocked card → HTTP 409
- Unblocking non-blocked card → HTTP 409
- Exceeding credit limit → HTTP 422
- Operation on closed/deleted account → HTTP 410

**B5. Resource Not Found (~5 tests)**
- Non-existent card number → HTTP 404
- Non-existent account → HTTP 404
- Deleted resource → HTTP 410

### C. Boundary Value Tests - ~15-20 test cases
**Objective:** Verify correct handling of edge values

**Coverage:**
- Numeric fields: min, max, min-1, max+1
- String fields: empty, 1 char, max length, max+1 length
- Date fields: today, tomorrow, past, future
- Amount fields: 0, 0.01, very large amounts

### D. Security Tests - ~20-25 test cases
**Objective:** Verify security controls

**Coverage:**
- SQL Injection attempts in string fields
- XSS injection attempts
- Cross-customer data access
- Token expiration handling
- Rate limiting (if applicable)

### E. Integration Tests - ~10-15 test cases
**Objective:** Verify data consistency across APIs

**Coverage:**
- Block card → Verify 'blocked' status appears in Get details
- Update credit limit → Verify limit appears in Get limits
- Create transaction → Verify appears in transaction list

### F. Performance Tests - ~5-10 test cases
**Objective:** Verify acceptable performance

**Coverage:**
- Response time < 2 seconds for simple GET
- Response time < 5 seconds for complex GET
- Response time < 3 seconds for POST/PATCH

---

# 6. TEST DATA TEMPLATES

## 6.1 Valid Test Data Sets

### Valid Credit Card Numbers (Test Format)
- `4532123456789010` - Visa test card
- `5425233010103026` - Mastercard test card
- `378282246310005` - Amex test card

### Valid Account Numbers
- `1234567890` - Format: 10 digits
- `9876543210` - Format: 10 digits

### Valid Parameters
- Customer ID: numeric, non-zero (e.g., 12345, 98765)
- Limit Type: `PERMANENT`, `TEMPORARY`
- Currency: `IDR`, `USD`, `SGD`, `MYR`, `EUR`
- Status: `ACTIVE`, `BLOCKED`, `INACTIVE`, `DORMANT`, `CLOSED`
- Amount: decimal with 2 decimal places (e.g., 1000.00, 50000.50)

### Valid Headers
- Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (mock token)
- client-id: `pnt-17ht3`, `pnt-bank123`
- env: `UAT`, `DEV`, `PROD`

## 6.2 Invalid Test Data Sets

### Invalid Credit Card Numbers
- `123456789` - Too short (9 digits)
- `12345678901234567` - Too long (17 digits)
- `123456789abcdef10` - Contains letters
- `0000000000000000` - All zeros
- `` - Empty string

### Invalid Amounts
- `-1000.00` - Negative
- `0` - Zero
- `abc` - Non-numeric
- `1000.001` - More than 2 decimal places
- `99999999999.99` - Excessive amount

### Injection Payloads
**SQL Injection:**
- `'; DROP TABLE cards--`
- `' OR '1'='1`
- `UNION SELECT * FROM users--`

**XSS Injection:**
- `<script>alert('XSS')</script>`
- `<img src=x onerror="alert('XSS')">`
- `javascript:alert('XSS')`

---

# 7. DETAILED API SPECIFICATIONS

## Cards dashboard

**HTTP Method:** GET
**Endpoint:** /v1/external/accounts?accountGroup={accountGroup}
**Sheet Reference:** 2.1 CC Dashboard - Landing

### Headers
| Field | Mandatory | Sample |
|-------|-----------|--------|
| authorization | YES | Bearer TOKEN |
| client-id | YES | pnt-17ht3 |
| env | YES | UAT |

### Key Parameters
*Refer to detailed specification sheets for complete parameters*

---

## Credit card detail

**HTTP Method:** GET
**Endpoint:** /v1/external/accounts/account-type/{accountType}/account-id/{accountId}/detail
**Sheet Reference:** 2.1.2 Card Details

### Headers
| Field | Mandatory | Sample |
|-------|-----------|--------|
| authorization | YES | Bearer TOKEN |
| client-id | YES | pnt-17ht3 |
| env | YES | UAT |

### Key Parameters
*Refer to detailed specification sheets for complete parameters*

---

## Credit card activation + set card pin

**HTTP Method:** POST
**Endpoint:** /v1/external/credit-card/activate
**Sheet Reference:** 2.1.3 CC Activation

### Headers
| Field | Mandatory | Sample |
|-------|-----------|--------|
| authorization | YES | Bearer TOKEN |
| client-id | YES | pnt-17ht3 |
| env | YES | UAT |

### Key Parameters
*Refer to detailed specification sheets for complete parameters*

---

## Credit card transaction history

**HTTP Method:** GET
**Endpoint:** /v1/external/accounts/account-type/{accountType}/account-id/{accountId}/transactions?startDate={startDate}&endDate={endDate}&page={page}&limit={limit}
**Sheet Reference:** 2.2 CC > Transactions

### Headers
| Field | Mandatory | Sample |
|-------|-----------|--------|
| authorization | YES | Bearer TOKEN |
| client-id | YES | pnt-17ht3 |
| env | YES | UAT |

### Key Parameters
*Refer to detailed specification sheets for complete parameters*

---

## Credit card view all transaction history

**HTTP Method:** GET
**Endpoint:** /v1/external/accounts/account-type/{accountType}/account-id/{accountId}/transactions?startDate={startDate}&endDate={endDate}&page={page}&limit={limit}
**Sheet Reference:** 2.2.1 CC View All Trans

### Headers
| Field | Mandatory | Sample |
|-------|-----------|--------|
| authorization | YES | Bearer TOKEN |
| client-id | YES | pnt-17ht3 |
| env | YES | UAT |

### Key Parameters
*Refer to detailed specification sheets for complete parameters*

---

## Credit card view receipt

**HTTP Method:** GET
**Endpoint:** /v1/external/receipts/{transactionReferenceId}
**Sheet Reference:** 2.2.1.2 View Receipt

### Headers
| Field | Mandatory | Sample |
|-------|-----------|--------|
| authorization | YES | Bearer TOKEN |
| client-id | YES | pnt-17ht3 |
| env | YES | UAT |

### Key Parameters
*Refer to detailed specification sheets for complete parameters*

---

## Credit card detail

**HTTP Method:** GET
**Endpoint:** /v1/external/accounts/account-type/{accountType}/account-id/{accountId}/detail
**Sheet Reference:** 2.3 CC > Summary

### Headers
| Field | Mandatory | Sample |
|-------|-----------|--------|
| authorization | YES | Bearer TOKEN |
| client-id | YES | pnt-17ht3 |
| env | YES | UAT |

### Key Parameters
*Refer to detailed specification sheets for complete parameters*

---

## Add credit card nickname

**HTTP Method:** POST
**Endpoint:** /v1/external/accounts/nickname
**Sheet Reference:** 2.4 CC > Manage

### Headers
| Field | Mandatory | Sample |
|-------|-----------|--------|
| authorization | YES | Bearer TOKEN |
| client-id | YES | pnt-17ht3 |
| env | YES | UAT |

### Key Parameters
*Refer to detailed specification sheets for complete parameters*

---

## Installment convertion schedule

**HTTP Method:** GET
**Endpoint:** /v1/external/credit-card/instalment-conversion
**Sheet Reference:** 2.4.2 Instalment Convert

### Headers
| Field | Mandatory | Sample |
|-------|-----------|--------|
| authorization | YES | Bearer TOKEN |
| client-id | YES | pnt-17ht3 |
| env | YES | UAT |

### Key Parameters
*Refer to detailed specification sheets for complete parameters*

---

# 8. TEST CASE SUMMARY MATRIX

## Test Case Distribution

| Category | Qty | Test Focus | Examples |
|----------|-----|-----------|----------|
| Positive | 35-40 | Happy path, valid inputs | Valid card details, successful blocks |
| Negative | 60-70 | Error handling, invalid inputs | Missing params, invalid values |
| Boundary | 15-20 | Edge values, limits | Min/max amounts, empty strings |
| Security | 20-25 | Auth, injection, access control | SQL injection, XSS, cross-access |
| Integration | 10-15 | Data consistency | State propagation, cascading effects |
| Performance | 5-10 | Response times | Load testing, large payloads |
| **Total** | **145-180** | **Complete coverage** | **All scenarios** |

## Test Priority Pyramid

```
              Performance (P3)
           Integration (P2-P3)
           Security (P1-P2)
        Boundary (P1-P2)
       Negative (P1)
    Positive (P0-P1)
```

## Test Execution Strategy

### Phase 1: Smoke Tests (P0)
- 5-10 critical positive tests
- Verify basic API functionality
- Duration: < 15 minutes

### Phase 2: Core Tests (P1)
- 50-60 tests covering all APIs
- Positive, negative, and boundary tests
- Duration: 1-2 hours

### Phase 3: Extended Tests (P2)
- 40-50 security and integration tests
- Data consistency validation
- Duration: 1-2 hours

### Phase 4: Performance & Regression (P3)
- 10-20 performance and edge case tests
- Full regression suite
- Duration: 30 minutes - 1 hour

---

