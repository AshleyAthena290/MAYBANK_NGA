# ECLIPSE Account Dashboard - Complete API Specifications
**Generated:** 2026-07-20 09:42:22
**Source:** ECLIPSE_Account Dashboard_Casa_DDD_API_Design_v1_Workshop.xlsx

## Table of Contents

1. [getManageDebitCard](#getmanagedebitcard)
2. [getAutoSweep](#getautosweep)
3. [setAutoSweep](#setautosweep)
4. [setLinkedCard](#setlinkedcard)
5. [blockAccounts](#blockaccounts)
6. [reactivateAccount](#reactivateaccount)

---

## getManageDebitCard

### Request

| Attribute | Value |
|-----------|-------|
| **Method** | `GET` |
| **URL** | `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/debit-card/manage` |
| **Content-Type** | `JSON` |

#### HTTP Headers

| Header | Type | Mandatory | Sample Value | Description |
|--------|------|-----------|--------------|-------------|
| `Name` | Type | ✗ | `Sample Value` | Description |
| `authorization` | String | ✓ | `Bearer <ACCESS_TOKEN>` | Authentication Access Token required for channel calls (e.g. PNT app calls Eclipse) |
| `client-id` | String | ✓ | `pnt-17ht3` | Unique Client Id per channel |
| `api-key` | String | ✗ | `a7dfa879sd8a7sd8` | Unique Id per channel |
| `env` | String | ✓ | `UAT` | Environment values |
| `accept` | String | ✗ | `application/json` | Content type |

#### Request Body

| Parameter | Type | Mandatory | Description |
|-----------|------|-----------|-------------|
| `Name` | Type | ✗ | Description |

#### Request Parameters

| Parameter | Type | Mandatory | Sample | Description |
|-----------|------|-----------|--------|-------------|
| `Name` | Type | ✗ | Sample Value | Description |
| `accountId` | String | ✓ | 900000097152 | - |

---

## getAutoSweep

### Request

| Attribute | Value |
|-----------|-------|
| **Method** | `GET` |
| **URL** | `https: //{Eclipse-IP}:{Eclipse-PORT}/info/casa/v1/external/accounts/{accountId}/auto-sweep` |
| **Content-Type** | `JSON` |

#### HTTP Headers

| Header | Type | Mandatory | Sample Value | Description |
|--------|------|-----------|--------------|-------------|
| `Name` | Type | ✗ | `Sample Value` | Description |
| `authorization` | String | ✓ | `Bearer <ACCESS_TOKEN>` | Authentication Access Token required for channel calls (e.g. PNT app calls Eclipse) |
| `client-id` | String | ✓ | `pnt-17ht3` | Unique Client Id per channel |
| `api-key` | String | ✗ | `a7dfa879sd8a7sd8` | Unique Id per channel |
| `env` | String | ✓ | `UAT` | Environment values |
| `accept` | String | ✗ | `application/json` | Content type |

#### Path Variables

| Variable | Type | Mandatory | Description |
|----------|------|-----------|-------------|
| `Name` | Type | ✗ | Description |
| `accountId` | String | ✓ | - |

#### Request Body

| Parameter | Type | Mandatory | Description |
|-----------|------|-----------|-------------|
| `Name` | Type | ✗ | Description |

---

## setAutoSweep

### Request

| Attribute | Value |
|-----------|-------|
| **Method** | `POST` |
| **URL** | `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/auto-sweep` |
| **Content-Type** | `JSON` |

#### HTTP Headers

| Header | Type | Mandatory | Sample Value | Description |
|--------|------|-----------|--------------|-------------|
| `Name` | Type | ✗ | `Sample Value` | Description |
| `authorization` | String | ✓ | `Bearer <ACCESS_TOKEN>` | Authentication Access Token required for channel calls (e.g. PNT app calls Eclipse) |
| `client-id` | String | ✓ | `pnt-17ht3` | Unique Client Id per channel |
| `api-key` | String | ✗ | `a7dfa879sd8a7sd8` | Unique Id per channel |
| `env` | String | ✓ | `UAT` | Environment values |
| `accept` | String | ✗ | `application/json` | Content type |

#### Path Variables

| Variable | Type | Mandatory | Description |
|----------|------|-----------|-------------|
| `Name` | Type | ✗ | Description |

#### Request Body

| Parameter | Type | Mandatory | Description |
|-----------|------|-----------|-------------|
| `Name` | Type | ✗ | Description |
| `primaryCurrency` | String | ✓ | - |
| `primaryLimit` | String | ✓ | - |
| `accountId` | String | ✓ | - |
| `autoSweepFlag` | String | ✓ | - |

---

## setLinkedCard

### Request

| Attribute | Value |
|-----------|-------|
| **Method** | `POST` |
| **URL** | `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/linked-card` |
| **Content-Type** | `JSON` |

#### HTTP Headers

| Header | Type | Mandatory | Sample Value | Description |
|--------|------|-----------|--------------|-------------|
| `Name` | Type | ✗ | `Sample Value` | Description |
| `authorization` | String | ✓ | `Bearer <ACCESS_TOKEN>` | Authentication Access Token required for channel calls (e.g. PNT app calls Eclipse) |
| `client-id` | String | ✓ | `pnt-17ht3` | Unique Client Id per channel |
| `api-key` | String | ✗ | `a7dfa879sd8a7sd8` | Unique Id per channel |
| `env` | String | ✓ | `UAT` | Environment values |
| `accept` | String | ✗ | `application/json` | Content type |

#### Request Body

| Parameter | Type | Mandatory | Description |
|-----------|------|-----------|-------------|
| `Name` | Type | ✗ | Description |

#### Request Parameters

| Parameter | Type | Mandatory | Sample | Description |
|-----------|------|-----------|--------|-------------|
| `Name` | Type | ✗ | Sample Value | Description |
| `> account (object)` | - | ✗ | - | - |
| `accountId` | String | ✓ | - | - |
| `branchCode` | String | ✓ | - | - |
| `currency` | String | ✓ | - | - |
| `type` | String | ✓ | - | - |
| `openingDateTime` | DateTime | ✓ | - | - |
| `> customer (object)` | - | ✗ | - | - |
| `name` | String | ✓ | - | - |
| `phoneNumber` | String | ✓ | - | - |
| `> address (object)` | - | ✗ | - | - |
| `address1` | String | ✓ | - | - |
| `province` | String | ✓ | - | - |
| `city` | String | ✓ | - | - |
| `district` | String | ✓ | - | - |
| `subDistrict` | String | ✓ | - | - |
| `neighborhoodUnit` | String | ✓ | - | - |
| `communityUnit` | String | ✓ | - | - |
| `postcode` | String | ✓ | - | - |
| `> card (object)` | - | ✗ | - | - |
| `cardNumber` | String | ✓ | - | - |
| `primaryFlag` | Boolean | ✓ | - | - |

---

## blockAccounts

### Request

| Attribute | Value |
|-----------|-------|
| **Method** | `POST` |
| **URL** | `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/block` |
| **Content-Type** | `JSON` |

#### HTTP Headers

| Header | Type | Mandatory | Sample Value | Description |
|--------|------|-----------|--------------|-------------|
| `Name` | Type | ✗ | `Sample Value` | Description |
| `authorization` | String | ✓ | `Bearer <ACCESS_TOKEN>` | Authentication Access Token required for channel calls (e.g. PNT app calls Eclipse) |
| `client-id` | String | ✓ | `pnt-17ht3` | Unique Client Id per channel |
| `api-key` | String | ✗ | `a7dfa879sd8a7sd8` | Unique Id per channel |
| `env` | String | ✓ | `UAT` | Environment values |
| `accept` | String | ✗ | `application/json` | Content type |

#### Request Body

| Parameter | Type | Mandatory | Description |
|-----------|------|-----------|-------------|
| `Name` | Type | ✗ | Description |
| `accounts[] (list)` | - | ✗ | - |
| `accountId` | String | ✓ | - |

#### Request Parameters

| Parameter | Type | Mandatory | Sample | Description |
|-----------|------|-----------|--------|-------------|
| `Name` | Type | ✗ | Sample Value | Description |

---

## reactivateAccount

### Request

| Attribute | Value |
|-----------|-------|
| **Method** | `POST` |
| **URL** | `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/casa/v1/external/casa/reactivate` |
| **Content-Type** | `JSON` |

#### HTTP Headers

| Header | Type | Mandatory | Sample Value | Description |
|--------|------|-----------|--------------|-------------|
| `Name` | Type | ✗ | `Sample Value` | Description |
| `authorization` | String | ✓ | `Bearer <ACCESS_TOKEN>` | Authentication Access Token required for channel calls (e.g. PNT app calls Eclipse) |
| `client-id` | String | ✓ | `pnt-17ht3` | Unique Client Id per channel |
| `api-key` | String | ✗ | `a7dfa879sd8a7sd8` | Unique Id per channel |
| `env` | String | ✓ | `UAT` | Environment values |
| `accept` | String | ✗ | `application/json` | Content type |

#### Request Body

| Parameter | Type | Mandatory | Description |
|-----------|------|-----------|-------------|
| `Name` | Type | ✗ | Description |
| `accountId` | String | ✓ | - |

#### Request Parameters

| Parameter | Type | Mandatory | Sample | Description |
|-----------|------|-----------|--------|-------------|
| `Name` | Type | ✗ | Sample Value | Description |

---

## API Summary

**Total Endpoints:** 6

### Endpoints by Method

**GET** (2 endpoints):
- getAutoSweep
- getManageDebitCard

**POST** (4 endpoints):
- blockAccounts
- reactivateAccount
- setAutoSweep
- setLinkedCard

### Common Requirements

All endpoints require the following headers:
- `authorization`: Bearer token for authentication
- `client-id`: Client identifier per channel
- `env`: Environment (UAT, PROD, etc.)

