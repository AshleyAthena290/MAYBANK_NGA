# ECLIPSE Account Dashboard - Credit Card API Specifications
## Comprehensive Analysis for Test Case Generation

**Generated:** 2026-07-17 10:46:18

**Excel Source:** ECLIPSE_Account Dashboard_Credit_Card_DDD_API_Design_v1_Workshop.xlsx

## Executive Summary
---

- **Total APIs Analyzed:** 14

- **API Distribution by Method:**
  - GET: 7
  - POST: 7

## 1. API Endpoints Summary
---

| No. | API Name | Method | Endpoint | Microservice | Status |
|-----|----------|--------|----------|--------------|--------|
| 1 | Cards dashboard | GET | /v1/external/accounts?accountGroup={acco... | dep-dashboard | None |
| 2 | Credit card detail | GET | /v1/external/accounts/account-type/{acco... | info-card | None |
| 3 | Credit card activation + set card pin | POST | /v1/external/credit-card/activate | dep-card | None |
| 4 | Credit card transaction history | GET | /v1/external/accounts/account-type/{acco... | info-card | None |
| 5 | Credit card view all transaction history | GET | /v1/external/accounts/account-type/{acco... | info-card | None |
| 6 | Credit card view receipt | GET | /v1/external/receipts/{transactionRefere... | dep-receipt | None |
| 7 | Credit card detail | GET | /v1/external/accounts/account-type/{acco... | info-card | None |
| 8 | Add credit card nickname | POST | /v1/external/accounts/nickname | info-card | None |
| 9 | Installment convertion schedule | GET | /v1/external/credit-card/instalment-conv... | dep-card | None |
| 10 | Increase credit limit permanent | POST | /v1/external/credit-card/increase-credit... | dep-card | None |
| 11 | Block credit card | POST | /v1/external/cards/block | dep-card | None |
| 12 | Unblock credit card | POST | /v1/external/cards/unblock | dep-card | None |
| 13 | Credit card replacement | POST | /v1/external/credit-card/replacement | dep-card | None |
| 14 | Reset credit card PIN | POST | /v1/external/cards/reset-pin | dep-card | None |

## 2. Detailed API Specifications
---

### 2.1 Cards dashboard

#### Basic Information
- **HTTP Method:** `GET`
- **Endpoint URL:** `None`
- **Endpoint Path:** `/v1/external/accounts?accountGroup={accountGroup}`
- **Microservice:** dep-dashboard
- **Message Type:** None

---

### 2.2 Credit card detail

#### Basic Information
- **HTTP Method:** `GET`
- **Endpoint URL:** `None`
- **Endpoint Path:** `/v1/external/accounts/account-type/{accountType}/account-id/{accountId}/detail`
- **Microservice:** info-card
- **Message Type:** None
- **Remarks:** ESB_API_Spec_AccountInfo_v2.8 -> Account Balance Details

---

### 2.3 Credit card activation + set card pin

#### Basic Information
- **HTTP Method:** `POST`
- **Endpoint URL:** `None`
- **Endpoint Path:** `/v1/external/credit-card/activate`
- **Microservice:** dep-card
- **Message Type:** None
- **Remarks:** ESB_API_Spec_CreditCard_v1.0 -> Card Maintenance (Msg.MsgBody.actionCode = 3)

---

### 2.4 Credit card transaction history

#### Basic Information
- **HTTP Method:** `GET`
- **Endpoint URL:** `None`
- **Endpoint Path:** `/v1/external/accounts/account-type/{accountType}/account-id/{accountId}/transactions?startDate={startDate}&endDate={endDate}&page={page}&limit={limit}`
- **Microservice:** info-card
- **Message Type:** None
- **Remarks:** ESB_API_Spec_AccountInfo_v2.8 -> Transaction History

---

### 2.5 Credit card view all transaction history

#### Basic Information
- **HTTP Method:** `GET`
- **Endpoint URL:** `None`
- **Endpoint Path:** `/v1/external/accounts/account-type/{accountType}/account-id/{accountId}/transactions?startDate={startDate}&endDate={endDate}&page={page}&limit={limit}`
- **Microservice:** info-card
- **Message Type:** None
- **Remarks:** ESB_API_Spec_AccountInfo_v2.8 -> Transaction History

---

### 2.6 Credit card view receipt

#### Basic Information
- **HTTP Method:** `GET`
- **Endpoint URL:** `None`
- **Endpoint Path:** `/v1/external/receipts/{transactionReferenceId}`
- **Microservice:** dep-receipt
- **Message Type:** None

---

### 2.7 Credit card detail

#### Basic Information
- **HTTP Method:** `GET`
- **Endpoint URL:** `None`
- **Endpoint Path:** `/v1/external/accounts/account-type/{accountType}/account-id/{accountId}/detail`
- **Microservice:** info-card
- **Message Type:** None

---

### 2.8 Add credit card nickname

#### Basic Information
- **HTTP Method:** `POST`
- **Endpoint URL:** `None`
- **Endpoint Path:** `/v1/external/accounts/nickname`
- **Microservice:** info-card
- **Message Type:** None

---

### 2.9 Installment convertion schedule

#### Basic Information
- **HTTP Method:** `GET`
- **Endpoint URL:** `None`
- **Endpoint Path:** `/v1/external/credit-card/instalment-conversion`
- **Microservice:** dep-card
- **Message Type:** None
- **Remarks:** Pending ESB Spec

---

### 2.10 Increase credit limit permanent

#### Basic Information
- **HTTP Method:** `POST`
- **Endpoint URL:** `None`
- **Endpoint Path:** `/v1/external/credit-card/increase-credit-limit`
- **Microservice:** dep-card
- **Message Type:** None

---

### 2.11 Block credit card

#### Basic Information
- **HTTP Method:** `POST`
- **Endpoint URL:** `None`
- **Endpoint Path:** `/v1/external/cards/block`
- **Microservice:** dep-card
- **Message Type:** None
- **Remarks:** ESB_API_Spec_CreditCard_v1.0 > Update Block Code (Msg.MsgBody.blockCode = Y)

---

### 2.12 Unblock credit card

#### Basic Information
- **HTTP Method:** `POST`
- **Endpoint URL:** `None`
- **Endpoint Path:** `/v1/external/cards/unblock`
- **Microservice:** dep-card
- **Message Type:** None
- **Remarks:** ESB_API_Spec_CreditCard_v1.0 > Update Block Code (Msg.MsgBody.blockCode = space)

---

### 2.13 Credit card replacement

#### Basic Information
- **HTTP Method:** `POST`
- **Endpoint URL:** `None`
- **Endpoint Path:** `/v1/external/credit-card/replacement`
- **Microservice:** dep-card
- **Message Type:** None
- **Remarks:** ESB_API_Spec_CreditCard_v1.0 > Update Block Code (Msg.MsgBody.blockCode = L)

---

### 2.14 Reset credit card PIN

#### Basic Information
- **HTTP Method:** `POST`
- **Endpoint URL:** `None`
- **Endpoint Path:** `/v1/external/cards/reset-pin`
- **Microservice:** dep-card
- **Message Type:** None
- **Remarks:** ESB_API_Spec_CreditCard_v1.0 -> Card Maintenance (Msg.MsgBody.actionCode = 2)

---

## 3. Test Case Generation Framework
---

### 3.1 Positive Test Cases (Happy Path)
Expected: Valid requests succeed with HTTP 200/201
- Test each API with all required parameters
- Verify response structure matches specification
- Verify response data types
- Verify response codes are as documented

### 3.2 Negative Test Cases
**Missing Parameters:**
- Remove each mandatory parameter → Expect HTTP 400/422
- Verify error message identifies missing field

**Invalid Parameter Values:**
- Use wrong data type (string instead of number, etc.)
- Use invalid values (e.g., invalid status code)
- Use out-of-range values
- Expect HTTP 400/422 with descriptive error

**Authentication/Authorization:**
- Missing Authorization header → HTTP 401
- Invalid/expired Bearer token → HTTP 401
- Invalid client-id → HTTP 401
- Cross-customer access attempt → HTTP 403
- Insufficient permissions → HTTP 403

**Resource Not Found:**
- Non-existent card number → HTTP 404
- Non-existent account → HTTP 404
- Non-existent resource ID → HTTP 404

### 3.3 Boundary Value Testing
For numeric fields:
- Minimum value (0, -1, minimum allowed)
- Maximum value (max allowed)
- Just beyond boundaries

For string fields:
- Empty string ''
- Single character
- Maximum length
- Beyond maximum length (if applicable)
- Null value

For date fields:
- Minimum date
- Maximum date
- Invalid dates (e.g., Feb 30)
- Past/future dates (as applicable)

### 3.4 Field Validation Testing
For each documented field validation rule:
- Test data that satisfies the rule
- Test data that violates the rule → Expect error
- Test edge cases
- Verify error message identifies violated field

### 3.5 Business Logic Testing
For each documented business rule:
- Test scenarios where rule allows operation
- Test scenarios where rule blocks operation
- Test rule combinations
- Verify business error codes

### 3.6 Security Testing
SQL Injection:
- Test with SQL injection payloads in string fields
- Example: `'; DROP TABLE--`, `1' OR '1'='1`

XSS Injection:
- Test with XSS payloads in string fields
- Example: `<script>alert('XSS')</script>`, `<img src=x onerror=alert(1)>`

Cross-Customer Access:
- Attempt to access another customer's data
- Attempt to modify another customer's data
- Expect HTTP 403 or 404

### 3.7 Performance Testing
- Measure response time for typical requests
- Test with large payloads
- Test batch operations with multiple records
- Verify response time is within SLA

### 3.8 Integration Testing
- Verify data consistency across dependent APIs
- Verify state propagation after operations
- Test cascading operations
- Test rollback/error scenarios

### 3.9 Error Code Mapping
For each documented error scenario:
- Trigger the error condition
- Verify correct error code is returned
- Verify correct HTTP status code
- Verify error message is present and descriptive
- Verify error response structure matches specification

### 3.10 Test Data Requirements
- Valid customer IDs (numeric, non-zero)
- Valid credit card numbers (real or test format)
- Valid account numbers
- Valid currency codes (IDR, USD, SGD, MYR, EUR)
- Valid status values (ACTIVE, BLOCKED, INACTIVE, etc.)
- Valid date formats (YYYY-MM-DD or per spec)
- Valid Bearer tokens (test/mock tokens)
- Valid client IDs
- Test environment values (UAT, DEV, PROD)
