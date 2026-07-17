# ECLIPSE API Quick Reference Guide

## 🔐 Authentication (All Requests)

```
Headers Required:
  • authorization: Bearer <TOKEN>
  • client-id: <channel-id>
  • env: UAT|PROD
```

---

## 📋 API Summary (6 Primary APIs with Implementation)

### 1️⃣ **getManageDebitCard** 💳
```
GET /dep/card/v1/external/debit-card/manage
Query: accountId={accountId}

Response: List of linked/unlinked debit cards for account
Sample: https://api.eclipse.com/dep/card/v1/external/debit-card/manage?accountId=900000097152
```

### 2️⃣ **getAutoSweep** 🔄
```
GET /info/casa/v1/external/accounts/{accountId}/auto-sweep

Response: Auto-sweep configuration (flag, currency, limit)
```

### 3️⃣ **setAutoSweep** ⚙️
```
POST /dep/casa/v1/external/casa/auto-sweep

Body: {
  "accountId": "123456789012",
  "autoSweepFlag": "Y|N",
  "primaryCurrency": "IDR",
  "primaryLimit": 200000
}

Returns: S2U confirmation required
```

### 4️⃣ **setLinkedCard** 🔗
```
POST /dep/casa/v1/external/casa/linked-card

Body: Complex nested object with:
  • account: {accountId, branchCode, currency, type, openingDateTime}
  • customer: {name, phoneNumber}
  • address: {address1, province, city, district, subDistrict, postcode, ...}
  • card: {linkedCardNumber, unlinkedCardNumber, primaryFlag}

Returns: S2U confirmation required
```

### 5️⃣ **blockAccounts** 🚫
```
POST /dep/casa/v1/external/casa/block

Body: {
  "accounts": [
    {"accountId": "183476335222"},
    {"accountId": "898876334567"}
  ]
}

Returns: S2U confirmation required
Status: INACTIVE after successful block
```

### 6️⃣ **reactivateAccount** ♻️
```
POST /dep/casa/v1/external/casa/reactivate

Body: {
  "accountId": "183476335222",
  "email": "user@email.com",
  "contact": [{type: "MB", number: "628xxxxxxx"}],
  "employment": {
    "occupationCode": "ACCOUNTING",
    "industryCode": "FINANCE",
    "companyName": "Maybank",
    "positionCode": "MANAGER",
    "categoryCode": "TECHNOLOGY",
    "startDate": "2000-05-30",
    "sourceOfIncomeCode": "SALARY",
    "annualIncome": 10000000000
  },
  "address": [{type: "HOME|OFFICE|MAILING", address1: "...", ...}]
}

Returns: S2U confirmation required
Status: ACTIVE after successful reactivation
```

---

## 📊 Account Status Reference

| Status | Accessible | Modifiable | Reactivatable |
|--------|-----------|-----------|---------------|
| ACTIVE | ✓ | ✓ | N/A |
| INACTIVE | ✗ | ✗ | ✓ |
| CLOSED | ✗ | ✗ | ✗ |
| DORMANT | ✗ | ✗ | ✓ |

---

## 🔄 Other 26 APIs (Informational/Read-Only)

These APIs are primarily for data retrieval and follow standard GET patterns:

**Account Information**:
- Casa dashboard - GET /v1/external/accounts
- Casa detail - GET /v1/external/accounts/account-type/{type}/account-id/{id}/detail
- Casa transaction history - GET /v1/external/accounts/.../transactions
- Global access detail/history - GET endpoints

**Transaction Queries**:
- View all transactions with pagination (page, limit)
- Search transactions (keyword filter)
- Filter transactions (date range: startDate, endDate)
- Export transactions (statementFormat: PDF/CSV)
- View receipt - GET /v1/external/receipts/{transactionReferenceId}
- Transaction detail - GET /v1/external/transaction/detail/{refId}

**Account Management**:
- Manage account nickname - POST/PATCH/DELETE /v1/external/accounts/nickname
- Manage auto-sweep (GET) - View current settings
- Remove currency - DELETE /v1/external/accounts/{id}/currency/{currency}
- Personal information - GET /v1/external/information

---

## ✅ Common Validation Rules

### Mandatory Fields by API

| API | Required Fields |
|-----|-----------------|
| blockAccounts | accounts[] with accountId |
| setAutoSweep | accountId, autoSweepFlag, primaryCurrency, primaryLimit |
| setLinkedCard | account, customer, address, card data (see structure) |
| reactivateAccount | accountId, email, contact[], employment, address[] |
| getAutoSweep | accountId (path param) |
| getManageDebitCard | accountId (query param) |

### Field Formats

- **accountId**: String, numeric, e.g., "183476335222"
- **Dates**: YYYY-MM-DD format
- **DateTime**: ISO 8601, e.g., "2026-02-27T14:57:38"
- **Currency**: 3-letter ISO code, e.g., "IDR", "MYR"
- **Phone**: Country code + number, e.g., "628xxxxxxx"
- **Email**: Standard format, e.g., "user@example.com"

---

## ⚠️ Error Handling

### S2U APIs (blockAccounts, setAutoSweep, setLinkedCard, reactivateAccount)

Require user confirmation via Secure2U:
- User receives push notification
- Must confirm in mobile app
- Returns transaction status in response
- Response includes: `status`, `header`, `desc`, `details`, `receipt`

### Error Response Format

```json
{
  "status": 400,
  "message": "Error description",
  "errorCode": "ERROR_CODE",
  "correlationId": "correlation-id",
  "timestamp": "2026-01-13T12:00:00"
}
```

### Common Error Scenarios

| Error | Status | Reason |
|-------|--------|--------|
| Account not found | 404 | Invalid accountId |
| Unauthorized | 401 | Invalid/missing token |
| Invalid status transition | 422 | Cannot block already blocked account |
| Missing field | 400 | Mandatory field not provided |
| S2U timeout | 408 | User didn't confirm in time |
| Insufficient permissions | 403 | client-id not authorized |

---

## 🏗️ Microservice Mapping

- **dep-dashboard**: Account dashboard & overview
- **info-casa**: CASA account data
- **info-customer**: Customer information
- **dep-casa**: CASA management (block, reactivate)
- **dep-card**: Card management
- **dep-receipt**: Transaction receipts

---

## 📝 Request Examples

### Example 1: Block Multiple Accounts

```bash
curl -X POST https://api.eclipse.com/dep/casa/v1/external/casa/block \
  -H "Authorization: Bearer abc123token" \
  -H "client-id: pnt-app" \
  -H "env: UAT" \
  -H "Content-Type: application/json" \
  -d '{
    "accounts": [
      {"accountId": "183476335222"},
      {"accountId": "898876334567"}
    ]
  }'
```

### Example 2: Get Auto-Sweep Settings

```bash
curl -X GET https://api.eclipse.com/info/casa/v1/external/accounts/123456789012/auto-sweep \
  -H "Authorization: Bearer abc123token" \
  -H "client-id: pnt-app" \
  -H "env: UAT"
```

### Example 3: Update Auto-Sweep

```bash
curl -X POST https://api.eclipse.com/dep/casa/v1/external/casa/auto-sweep \
  -H "Authorization: Bearer abc123token" \
  -H "client-id: pnt-app" \
  -H "env: UAT" \
  -H "Content-Type: application/json" \
  -d '{
    "accountId": "123456789012",
    "autoSweepFlag": "Y",
    "primaryCurrency": "IDR",
    "primaryLimit": 200000
  }'
```

---

## 🔗 Useful Links

- Account Status Reference: [Confluence](https://confluence.maybank.com.my/display/NEXTGENDIGP/Account+Status)
- ESB Specifications:
  - AccountInfo_v2.8
  - DebitCard_v1.1
  - CustomerInformation_v1.1

---

## 📞 Support Information

- **API Base URL**: https://{Eclipse-IP}:{Eclipse-PORT}
- **Message Format**: JSON only
- **Authentication Method**: Bearer Token (OAuth 2.0)
- **Rate Limiting**: Per client-id (environment-aware)
- **Timeout**: Standard HTTP timeout policies

---

**Quick Reference v1.0** | Updated: 2026-07-17
