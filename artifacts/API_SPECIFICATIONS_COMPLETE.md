# ECLIPSE Account Dashboard API - Comprehensive Specifications
## Document: ECLIPSE_Account Dashboard_Casa_DDD_API_Design_v1_Workshop.xlsx
**Total Endpoints: 21**

## Table of Contents
1. [Screen](#12-account-listing)
2. [Screen](#121-casa)
3. [Screen](#1211-transaction-details)
4. [Screen](#1212-viewalltrans)
5. [Screen](#1213-managelinkedcard)
6. [Screen](#1214-blockaccount)
7. [Screen](#1215-dormantaccount)
8. [Screen](#1216-inactive-account)
9. [Screen](#1217-closed-account)
10. [Screen](#126-global-access)
11. [Screen](#1263-remove-currency)
12. [Screen](#127-giro-multicurrency)
13. [Unknown](#xp-apis->>)
14. [getManageDebitCard](#getmanagedebitcard)
15. [Unknown](#eclipse-apis->>)
16. [getAutoSweep](#getautosweep)
17. [Unknown](#s2u-apis->>)
18. [setAutoSweep](#setautosweep)
19. [setLinkedCard](#setlinkedcard)
20. [blockAccounts](#blockaccounts)
21. [reactivateAccount](#reactivateaccount)

---

## Screen

**Sheet Name:** `1.2 Account Listing`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `Unknown` |
| **URL** | `Unknown` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## Screen

**Sheet Name:** `1.2.1 CASA`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `Unknown` |
| **URL** | `Unknown` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## Screen

**Sheet Name:** `1.2.1.1 Transaction Details`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `Unknown` |
| **URL** | `Unknown` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## Screen

**Sheet Name:** `1.2.1.2 ViewAllTrans`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `Unknown` |
| **URL** | `Unknown` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## Screen

**Sheet Name:** `1.2.1.3 ManageLinkedCard`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `Unknown` |
| **URL** | `Unknown` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## Screen

**Sheet Name:** `1.2.1.4 BlockAccount`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `Unknown` |
| **URL** | `Unknown` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## Screen

**Sheet Name:** `1.2.1.5 DormantAccount`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `Unknown` |
| **URL** | `Unknown` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## Screen

**Sheet Name:** `1.2.1.6 Inactive Account`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `Unknown` |
| **URL** | `Unknown` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## Screen

**Sheet Name:** `1.2.1.7 Closed Account`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `Unknown` |
| **URL** | `Unknown` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## Screen

**Sheet Name:** `1.2.6 Global Access`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `Unknown` |
| **URL** | `Unknown` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## Screen

**Sheet Name:** `1.2.6.3 Remove Currency`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `Unknown` |
| **URL** | `Unknown` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## Screen

**Sheet Name:** `1.2.7 Giro Multicurrency`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `Unknown` |
| **URL** | `Unknown` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## Unknown

**Sheet Name:** `XP APIs >>`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `Unknown` |
| **URL** | `Unknown` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## getManageDebitCard

**Sheet Name:** `getManageDebitCard`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `GET` |
| **URL** | `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/manage` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## Unknown

**Sheet Name:** `ECLIPSE APIs >>`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `Unknown` |
| **URL** | `Unknown` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## getAutoSweep

**Sheet Name:** `getAutoSweep`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `GET` |
| **URL** | `https: //{Eclipse-IP}:{Eclipse-PORT}/info/casa/v1/external/accounts/{accountId}/auto-sweep` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## Unknown

**Sheet Name:** `S2U APIs >>`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `Unknown` |
| **URL** | `Unknown` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## setAutoSweep

**Sheet Name:** `setAutoSweep`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `POST` |
| **URL** | `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/auto-sweep` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## setLinkedCard

**Sheet Name:** `setLinkedCard`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `POST` |
| **URL** | `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/linked-card` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## blockAccounts

**Sheet Name:** `blockAccounts`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `POST` |
| **URL** | `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/block` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## reactivateAccount

**Sheet Name:** `reactivateAccount`

### Request Details

| Property | Value |
|----------|-------|
| **HTTP Method** | `POST` |
| **URL** | `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/reactivate` |
| **Message Type** | `JSON` |

### Response Details

#### Business Rules & Validations


---

## API Specifications Summary

### Endpoints by HTTP Method

**GET**: 2 endpoints
  - getManageDebitCard
  - getAutoSweep

**POST**: 4 endpoints
  - setAutoSweep
  - setLinkedCard
  - blockAccounts
  - reactivateAccount

**Unknown**: 15 endpoints
  - Screen
  - Screen
  - Screen
  - Screen
  - Screen
  - Screen
  - Screen
  - Screen
  - Screen
  - Screen
  - Screen
  - Screen
  - Unknown
  - Unknown
  - Unknown

