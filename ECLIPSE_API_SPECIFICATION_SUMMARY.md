# ECLIPSE Account Dashboard API Specifications - Summary

**Document Generated**: 2026-07-17  
**Source File**: ECLIPSE_Account Dashboard_Casa_DDD_API_Design_v1_Workshop.xlsx  
**Total APIs**: 32 unique APIs

---

## Table of Contents
1. [API Overview](#api-overview)
2. [Common Elements](#common-elements)
3. [Detailed API Specifications](#detailed-api-specifications)
4. [Business Rules & Validations](#business-rules--validations)
5. [Error Codes & Exception Handling](#error-codes--exception-handling)

---

## API Overview

### Complete API List

| No. | API Name | HTTP Method | Microservice | Endpoint |
|-----|----------|-------------|--------------|----------|
| 1 | Casa dashboard | GET | dep-dashboard | `/v1/external/accounts?accountGroup={accountGroup}` |
| 2 | Casa detail | GET | info-casa | `/v1/external/accounts/account-type/{accountType}/account-id/{accountId}/detail` |
| 3 | Casa transaction history | GET | info-casa | `/v1/external/accounts/account-type/{accountType}/account-id/{accountId}/transactions` |
| 4 | Casa view linked card | GET | info-casa | `/v1/external/accounts/account-type/{accountType}/account-id/{accountId}/detail` |
| 5 | Manage - add casa nickname | POST | info-casa | `/v1/external/accounts/nickname` |
| 6 | Manage - update casa nickname | PATCH | info-casa | `/v1/external/accounts/nickname` |
| 7 | Manage - delete casa nickname | DELETE | info-casa | `/v1/external/accounts/{accountId}/nickname` |
| 8 | Casa transaction detail | GET | info-customer | `/v1/external/transaction/detail/{transactionReferenceId}` |
| 9 | Casa view receipt | GET | dep-receipt | `/v1/external/receipts/{transactionReferenceId}` |
| 10 | Casa view all transaction history | GET | info-casa | `/v1/external/accounts/account-type/{accountType}/account-id/{accountId}/transactions?startDate={startDate}&endDate={endDate}&page={page}&limit={limit}` |
| 11 | Casa search all transaction history | GET | info-casa | `/v1/external/accounts/account-type/{accountType}/account-id/{accountId}/transactions/search?startDate={startDate}&endDate={endDate}&keyword={keyword}&page={page}&limit={limit}` |
| 12 | Casa filter transaction history | GET | info-casa | `/v1/external/accounts/account-type/{accountType}/account-id/{accountId}/transactions?startDate={startDate}&endDate={endDate}&page={page}&limit={limit}` |
| 13 | Casa export transaction history | GET | info-casa | `/v1/external/accounts/account-type/{accountType}/account-id/{accountId}/statement?statementType={statementType}&statementFormat={statementFormat}` |
| 14 | Casa manage linked card | GET | dep-card | `/v1/external/debit-card/manage?accountId={accountId}` |
| 15 | Debit card dashboard | GET | dep-dashboard | `/v1/external/accounts?accountGroup={accountGroup}` |
| 16 | Casa linked debit card | POST | dep-casa | `/v1/external/casa/linked-card` |
| 17 | Casa block account | POST | dep-casa | `/v1/external/casa/block` |
| 18 | Personal information | GET | info-customer | `/v1/external/information` |
| 19 | Casa reactivate account | POST | dep-casa | `/v1/external/casa/reactivate` |
| 20 | Global access detail | GET | info-casa | `/v1/external/accounts/account-type/{accountType}/account-id/{accountId}/detail` |
| 21 | Global access transaction history | GET | info-casa | `/v1/external/accounts/account-type/{accountType}/account-id/{accountId}/transactions` |
| 22 | Manage - auto sweep | GET | info-casa | `/v1/external/accounts/{accountId}/auto-sweep` |
| 23 | Manage - update auto sweep | POST | dep-casa | `/v1/external/casa/auto-sweep` |
| 24 | Manage - remove currency | DELETE | info-casa | `/v1/external/accounts/{accountId}/currency/{currency}` |
| 25 | Giro detail | GET | info-casa | `/v1/external/accounts/account-type/{accountType}/account-id/{accountId}/detail` |
| 26 | Giro access transaction history | GET | info-casa | `/v1/external/accounts/account-type/{accountType}/account-id/{accountId}/transactions` |

---

## Common Elements

### Authentication & Standard Headers

All APIs require the following HTTP headers:

| Header | Type | Mandatory | Description | Example |
|--------|------|-----------|-------------|---------|
| `authorization` | String | ✓ | Bearer token for authentication | `Bearer <ACCESS_TOKEN>` |
| `client-id` | String | ✓ | Unique Client ID per channel | `pnt-17ht3` |
| `api-key` | String | ✗ | Unique ID per channel | `a7dfa879sd8a7sd8` |
| `env` | String | ✓ | Environment (UAT/PROD) | `UAT` |
| `accept` | String | ✗ | Content type | `application/json` |

### Message Format
- **Type**: JSON
- **Encoding**: UTF-8

### Standard Response Structure

All APIs return responses with the following envelope structure:

```json
{
  "status": 200,
  "message": "Request processed successfully",
  "timestamp": "2026-01-13T12:00:00",
  "correlationId": "abc123-correlation-id",
  "meta": {
    "provider": "esb"
  },
  "data": {
    // API-specific response data
  },
  "links": {
    "url": "https://api.example.com/v1/resource/42"
  }
}
```

---

## Detailed API Specifications

### 1. **blockAccounts** - Block Account(s)

**Endpoint**: `POST https://{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/block`

**Purpose**: Block one or multiple CASA accounts

#### Request Body

| Field | Type | Mandatory | Description | Sample |
|-------|------|-----------|-------------|--------|
| `accounts[]` | Array | ✓ | List of accounts to block | - |
| `accounts[].accountId` | String | ✓ | Account ID to block | `"183476335222"` |

#### Request Sample
```json
{
  "accounts": [
    {
      "accountId": "183476335222"
    },
    {
      "accountId": "898876334567"
    }
  ]
}
```

#### Response Structure

| Field | Type | Description |
|-------|------|-------------|
| `status` | String | Status of S2U transaction (S2U acknowledgment) |
| `header` | String | S2U transaction header |
| `desc` | String | S2U transaction description (if applicable) |
| `details` | String | S2U transaction details |
| `note` | String | S2U transaction acknowledgment note (if applicable) |
| `receipt` | String | S2U receipt body (if applicable) |
| `extra` | String | Extra information |

---

### 2. **getAutoSweep** - Get Auto-Sweep Configuration

**Endpoint**: `GET https://{Eclipse-IP}:{Eclipse-PORT}/info/casa/v1/external/accounts/{accountId}/auto-sweep`

**Purpose**: Retrieve auto-sweep settings for an account

#### Path Parameters

| Parameter | Type | Mandatory | Description |
|-----------|------|-----------|-------------|
| `accountId` | String | ✓ | Account ID | `"123456789012"` |

#### Response Structure

| Field | Type | Description |
|-------|------|-------------|
| `meta` | Object | Metadata object |
| `data` | Object | Response data wrapper |
| `autoSweep` | Object | Auto-sweep configuration |
| `autoSweep.flag` | String | Auto-sweep flag (Y/N) |
| `autoSweep.primaryCurrency` | String | Primary currency code |
| `autoSweep.primaryLimit` | String | Primary sweep limit |
| `links` | Object | Pagination/navigation links |

---

### 3. **getManageDebitCard** - Manage Debit Card

**Endpoint**: `GET https://{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/manage`

**Purpose**: Retrieve linked debit cards for an account

#### Query Parameters

| Parameter | Type | Mandatory | Description | Sample |
|-----------|------|-----------|-------------|--------|
| `accountId` | String | ✓ | Account ID | `"900000097152"` |

#### Response Structure

| Field | Type | Description |
|-------|------|-------------|
| `meta` | Object | Metadata object |
| `data` | Object | Response data wrapper |
| `accounts[]` | Array | List of debit cards |
| `accounts[].accountId` | String | Account ID |
| `accounts[].cardNumber` | String | Card number (masked) |
| `accounts[].nickname` | String | Card nickname |
| `accounts[].name` | String | Card product name |
| `accounts[].status` | String | Account status (ACTIVE, INACTIVE, CLOSED) |
| `accounts[].isLinked` | Boolean | Whether card is linked |
| `links` | Object | HATEOAS links (self, next, previous) |

---

### 4. **setAutoSweep** - Update Auto-Sweep Configuration

**Endpoint**: `POST https://{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/auto-sweep`

**Purpose**: Configure or update auto-sweep settings

#### Request Body

| Field | Type | Mandatory | Description | Sample |
|-------|------|-----------|-------------|--------|
| `accountId` | String | ✓ | Target account ID | `"123456789012"` |
| `autoSweepFlag` | String | ✓ | Enable/Disable (Y/N) | `"Y"` |
| `primaryCurrency` | String | ✓ | Currency code | `"IDR"` |
| `primaryLimit` | Number | ✓ | Sweep threshold amount | `200000` |

#### Request Sample
```json
{
  "primaryCurrency": "IDR",
  "primaryLimit": 200000,
  "accountId": "123456789012",
  "autoSweepFlag": "Y"
}
```

#### Response Structure
Same S2U-based response structure as blockAccounts:
- `status`, `header`, `desc`, `details`, `note`, `receipt`, `extra`

---

### 5. **setLinkedCard** - Link Debit Card to Account

**Endpoint**: `POST https://{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/linked-card`

**Purpose**: Link or unlink a debit card to/from a CASA account

#### Request Body Structure

```json
{
  "account": {
    "accountId": "514013314526",          // [Mandatory] Account ID
    "branchCode": "001",                  // [Mandatory] Branch code
    "currency": "IDR",                    // [Mandatory] Account currency
    "type": "CA",                         // [Mandatory] Account type (CA = Checking)
    "openingDateTime": "2026-02-27 14:57:38"  // [Mandatory] Account opening date/time
  },
  "customer": {
    "name": "DDEV SIX",                   // [Mandatory] Customer name
    "phoneNumber": "800225556814"         // [Mandatory] Phone number
  },
  "address": {
    "address1": "Jl. Asia Afrika Sentral Senayan 3",  // [Mandatory]
    "province": "Jakarta Selatan",        // [Mandatory]
    "city": "Kebayoran Baru",             // [Mandatory]
    "district": "Bendungan Hilir",        // [Mandatory]
    "subDistrict": "Gelora",              // [Mandatory]
    "neighborhoodUnit": "001",            // [Mandatory]
    "communityUnit": "004",               // [Mandatory]
    "postcode": "10270"                   // [Mandatory]
  },
  "card": {
    "linkedCardNumber": "5140133145267596",     // Card to link
    "unlinkedCardNumber": "5140133145267788",   // Card to unlink
    "primaryFlag": true,                  // [Mandatory] Set as primary card
    "classCode": "J1",                    // Card class
    "designCode": "01",                   // Card design
    "feeCode": "00"                       // Fee code
  }
}
```

#### Response Structure
S2U-based acknowledgment response with transaction confirmation details.

---

### 6. **reactivateAccount** - Reactivate Inactive Account

**Endpoint**: `POST https://{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/reactivate`

**Purpose**: Reactivate an inactive or dormant CASA account

#### Request Body

| Field | Type | Mandatory | Description |
|-------|------|-----------|-------------|
| `accountId` | String | ✓ | Account to reactivate |
| `email` | String | ✓ | Contact email |
| `contact[]` | Array | ✓ | Contact information array |
| `contact[].type` | String | ✓ | Contact type (MB = Mobile Bank) |
| `contact[].number` | String | ✓ | New contact number |
| `contact[].oldNumber` | String | ✗ | Previous contact number |
| `employment` | Object | ✓ | Employment details |
| `employment.occupationCode` | String | ✓ | Occupation code |
| `employment.industryCode` | String | ✓ | Industry code |
| `employment.companyName` | String | ✓ | Company name |
| `employment.positionCode` | String | ✓ | Position/Job title |
| `employment.categoryCode` | String | ✓ | Employment category |
| `employment.startDate` | Date | ✓ | Employment start date (YYYY-MM-DD) |
| `employment.sourceOfIncomeCode` | String | ✓ | Income source code |
| `employment.annualIncome` | Number | ✓ | Annual income amount |
| `address[]` | Array | ✓ | Address information (HOME, OFFICE, MAILING) |

#### Response Structure
S2U-based acknowledgment response with reactivation confirmation.

---

## Business Rules & Validations

### Account Status Rules

Extracted from the API documentation:

1. **Account Status Levels**:
   - `ACTIVE`: Account is active and operational
   - `INACTIVE`: Account temporarily inactive (can be reactivated)
   - `CLOSED`: Account permanently closed (cannot be reactivated)
   - `DORMANT`: Account with no transactions for extended period

   Reference: [Confluence - Account Status](https://confluence.maybank.com.my/display/NEXTGENDIGP/Account+Status)

2. **Block Account Rules**:
   - Multiple accounts can be blocked in a single request (batch operation)
   - Blocked accounts remain in INACTIVE status until reactivated
   - Requires S2U (Secure2U) authentication confirmation

3. **Reactivate Account Rules**:
   - Can only reactivate accounts in INACTIVE status
   - CLOSED accounts cannot be reactivated
   - Requires updated employment and address information
   - Must be confirmed via S2U transaction

4. **Auto-Sweep Rules**:
   - Can be configured per account and per currency
   - Sweep amount is threshold-based
   - Only available for CASA (Current/Checking) accounts
   - Can be toggled on/off via flag (Y/N)

5. **Card Linking Rules**:
   - Debit cards must belong to valid card holder
   - Can set one card as primary per account
   - Card linking requires address and customer verification
   - Physical and mailing addresses may differ

6. **Transaction Limits**:
   - Query parameters support pagination: `page`, `limit`
   - Date range filtering: `startDate`, `endDate` (format: YYYY-MM-DD or ISO-8601)
   - Search filtering available on transactions
   - Export formats: PDF, CSV, etc. (via `statementFormat` parameter)

### Authentication & Authorization Rules

1. **Required Headers**: All requests must include:
   - `authorization` (Bearer token)
   - `client-id` (Channel identifier)
   - `env` (Environment specifier)

2. **Token Lifecycle**:
   - Bearer tokens are time-limited
   - Token refresh mechanism required for long-lived connections
   - Token should be obtained from authentication service

3. **Rate Limiting** (if applicable):
   - Implied by environment-based separation (UAT/PROD)
   - Consider API quotas per client-id

---

## Error Codes & Exception Handling

### Standard Error Response Structure

```json
{
  "status": 400,
  "message": "Error description",
  "timestamp": "2026-01-13T12:00:00",
  "correlationId": "abc123-correlation-id",
  "errorCode": "ERROR_CODE_NAME",
  "errorDetails": "Additional context about the error"
}
```

### Common HTTP Status Codes

| Code | Meaning | Scenario |
|------|---------|----------|
| `200` | OK | Request successful |
| `201` | Created | Resource created |
| `400` | Bad Request | Invalid parameters or malformed request |
| `401` | Unauthorized | Missing or invalid authentication token |
| `403` | Forbidden | Insufficient permissions for operation |
| `404` | Not Found | Account/resource not found |
| `422` | Unprocessable Entity | Business rule violation |
| `500` | Internal Server Error | Server error |
| `503` | Service Unavailable | Service temporarily down |

### Known Business Exception Scenarios

1. **Account Not Found**
   - `accountId` does not exist
   - Account may be deleted or belongs to different entity
   - HTTP: 404

2. **Invalid Account Status Transition**
   - Cannot block an already blocked account
   - Cannot reactivate a closed account
   - HTTP: 422 (Unprocessable Entity)

3. **S2U Transaction Failed**
   - User rejected S2U confirmation
   - S2U timeout or verification failure
   - Returns S2U error details in response

4. **Insufficient Permissions**
   - `client-id` not authorized for operation
   - User role insufficient for requested action
   - HTTP: 403

5. **Invalid Currency/Account Mismatch**
   - Attempting to sweep non-existent currency
   - Currency not available for account
   - HTTP: 422

6. **Data Validation Errors**
   - Missing mandatory fields
   - Invalid format (email, phone, dates)
   - Invalid enum values (status, types)
   - HTTP: 400

### S2U (Secure2U) Integration

Several APIs require S2U confirmation:
- `blockAccounts`
- `setAutoSweep`
- `setLinkedCard`
- `reactivateAccount`

**S2U Response Fields**:
- `status`: S2U status (pending, confirmed, rejected, expired)
- `header`: Transaction summary for user
- `desc`: Detailed description shown in app
- `details`: Additional transaction information
- `note`: Acknowledgment message
- `receipt`: Receipt data (if transaction confirmed)
- `extra`: Additional metadata

---

## Implementation Notes

### Microservice Architecture

| Microservice | Responsibilities |
|--------------|------------------|
| `dep-dashboard` | Dashboard and account overview APIs |
| `info-casa` | CASA account information and details |
| `info-customer` | Customer personal information |
| `dep-casa` | CASA account management (block, reactivate, etc.) |
| `dep-card` | Debit card management |
| `dep-receipt` | Transaction receipts |

### URL Construction

Base URLs follow this pattern:
```
https://{Eclipse-IP}:{Eclipse-PORT}/{microservice-prefix}/v1/{access-level}/{resource-path}
```

- `{Eclipse-IP}`: Eclipse API gateway IP
- `{Eclipse-PORT}`: Eclipse API gateway port (typically 443 for HTTPS)
- `{microservice-prefix}`: Microservice identifier (e.g., `dep`, `info`)
- `{access-level}`: `external` (public) or `internal` (backend-only)
- `{resource-path}`: API-specific endpoint path

### Date/Time Formats

- **Timestamps**: ISO 8601 format (e.g., `2026-01-13T12:00:00`)
- **Dates**: YYYY-MM-DD format
- **DateTime**: Combined format with optional seconds

### Pagination

Supported for list APIs:

Query Parameters:
- `page`: Page number (1-indexed)
- `limit`: Items per page (e.g., 10, 20, 50)

Response Links (HATEOAS):
- `links.self`: Current page URL
- `links.next`: Next page URL
- `links.previous`: Previous page URL

---

## References & Related Documentation

1. **Account Status Reference**: [Confluence Link](https://confluence.maybank.com.my/display/NEXTGENDIGP/Account+Status)
2. **ESB API Specifications**:
   - ESB_API_Spec_AccountInfo_v2.8
   - ESB_API_Spec_DebitCard_v1.1
   - ESB_API_Spec_CustomerInformation_v1.1
3. **Related Endpoints**:
   - Internal customer information API
   - Receipt service API
   - Transaction detail API

---

**Document Version**: 1.0  
**Last Updated**: 2026-07-17  
**Status**: Ready for Development
