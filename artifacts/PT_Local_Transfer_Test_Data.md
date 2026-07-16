# P&T Local Transfer DDD API - Test Data

**Generated Date:** 2026-07-15T06:05:29.359Z

---

## Overview

- **Total Endpoints:** 18
- **Total Test Cases (Positive):** 18
- **Total Test Cases (Negative):** 21
- **Total Test Cases:** 39

---

## Table of Contents

1. [API_SPECS_INDEX_001 - Transfer Initialization](#api_specs_index_001)
2. [API_SPECS_INDEX_002 - Retrieve Country List](#api_specs_index_002)
3. [API_SPECS_INDEX_003 - Retrieve Bank Listing](#api_specs_index_003)
4. [API_SPECS_INDEX_004 - Get Source Account List](#api_specs_index_004)
5. [API_SPECS_INDEX_005 - Intrabank Pre Monetary Check](#api_specs_index_005)
6. [API_SPECS_INDEX_006 - Intrabank Transfer Initiation](#api_specs_index_006)
7. [API_SPECS_INDEX_007 - Intrabank Transfer Execution](#api_specs_index_007)
8. [API_SPECS_INDEX_008 - Interbank Pre Monetary Check](#api_specs_index_008)
9. [API_SPECS_INDEX_009 - Inquire Transfer Fee](#api_specs_index_009)
10. [API_SPECS_INDEX_010 - Interbank Transfer Initiation](#api_specs_index_010)
11. [API_SPECS_INDEX_011 - Interbank Transfer Execution](#api_specs_index_011)
12. [API_SPECS_INDEX_012 - Get Scheduled Listing](#api_specs_index_012)
13. [API_SPECS_INDEX_013 - Get Scheduled Details](#api_specs_index_013)
14. [API_SPECS_INDEX_014 - Cancel Scheduled Transfer](#api_specs_index_014)
15. [API_SPECS_INDEX_015 - Get Limit Setting Page](#api_specs_index_015)
16. [API_SPECS_INDEX_016 - Update Limit Settings](#api_specs_index_016)
17. [API_SPECS_INDEX_017 - Get Product Maintenance Limit](#api_specs_index_017)
18. [API_SPECS_INDEX_018 - Remove Scheduled Transfer](#api_specs_index_018)

---

## API_SPECS_INDEX_001 - Transfer Initialization

**Method:** `GET`  
**Endpoint:** `pt/maintenance/v1/transfers/init`  
**Priority:** P1  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json",
  "X-API-Key": "test-api-key-123"
},
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "transferId": "TXN20260715001",
  "timestamp": "2026-07-15T09:30:00Z",
  "status": "INITIATED"
}
```

### Negative Test Scenarios

#### Scenario 1: Missing Authorization

**Request Data:**
```json
{
  "Content-Type": "application/json"
}
```

**Expected Status:** `401`
**Expected Error:** Unauthorized

#### Scenario 2: Invalid API Key

**Request Data:**
```json
{
  "Authorization": "Bearer <TOKEN>",
  "X-API-Key": "invalid-key"
}
```

**Expected Status:** `403`
**Expected Error:** Forbidden

---

## API_SPECS_INDEX_002 - Retrieve Country List

**Method:** `GET`  
**Endpoint:** `pt/maintenance/v1/transfers/countries`  
**Priority:** P1  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
},
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "countries": [
    {
      "countryCode": "MY",
      "countryName": "Malaysia",
      "active": true
    },
    {
      "countryCode": "SG",
      "countryName": "Singapore",
      "active": true
    },
    {
      "countryCode": "ID",
      "countryName": "Indonesia",
      "active": true
    }
  ],
  "totalCount": 3
}
```

### Negative Test Scenarios

#### Scenario 1: Unauthorized Request

**Request Data:**
```json
{}
```

**Expected Status:** `401`
**Expected Error:** Unauthorized

---

## API_SPECS_INDEX_003 - Retrieve Bank Listing

**Method:** `GET`  
**Endpoint:** `pt/maintenance/v1/transfers/banks`  
**Priority:** P3  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
},
  "queryParams": {
  "countryCode": "MY"
},
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "banks": [
    {
      "bankCode": "001",
      "bankName": "Bank 1",
      "country": "MY",
      "supportedPaymentRails": [
        "RTGS",
        "GIRO"
      ]
    },
    {
      "bankCode": "002",
      "bankName": "Bank 2",
      "country": "MY",
      "supportedPaymentRails": [
        "GIRO"
      ]
    }
  ],
  "totalCount": 2
}
```

### Negative Test Scenarios

#### Scenario 1: Invalid Country Code

**Request Data:**
```json
{
  "countryCode": "XX"
}
```

**Expected Status:** `400`
**Expected Error:** Invalid country code

---

## API_SPECS_INDEX_004 - Get Source Account List

**Method:** `GET`  
**Endpoint:** `pt/{product}/v1/ext/source-accounts`  
**Priority:** P3  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
},
  "pathParams": {
  "product": "localtransfer"
},
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "accounts": [
    {
      "accountId": "123456789",
      "accountNumber": "1234567890",
      "accountName": "Savings Account",
      "balance": 50000,
      "currency": "MYR"
    }
  ],
  "totalCount": 1
}
```

### Negative Test Scenarios

#### Scenario 1: Invalid Product

**Request Data:**
```json
{}
```

**Expected Status:** `404`
**Expected Error:** Product not found

---

## API_SPECS_INDEX_005 - Intrabank Pre Monetary Check

**Method:** `POST`  
**Endpoint:** `pt/intrabank/v1/pre-check`  
**Priority:** P1  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
},
  "body": {
  "sourceAccountId": "123456789",
  "destinationAccountId": "987654321",
  "transferAmount": 5000,
  "currency": "MYR"
}
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "sourceAccount": {
    "accountId": "123456789",
    "balance": 50000,
    "availableBalance": 45000
  },
  "destinationAccount": {
    "accountId": "987654321",
    "accountName": "Destination Account"
  },
  "transferLimit": 100000,
  "availableLimit": 95000,
  "canProceed": true
}
```

### Negative Test Scenarios

#### Scenario 1: Insufficient Balance

**Request Data:**
```json
{
  "sourceAccountId": "123456789",
  "destinationAccountId": "987654321",
  "transferAmount": 100000,
  "currency": "MYR"
}
```

**Expected Status:** `422`
**Expected Error:** Insufficient balance

#### Scenario 2: Invalid Account

**Request Data:**
```json
{
  "sourceAccountId": "invalid",
  "destinationAccountId": "987654321",
  "transferAmount": 5000,
  "currency": "MYR"
}
```

**Expected Status:** `400`
**Expected Error:** Invalid account ID

---

## API_SPECS_INDEX_006 - Intrabank Transfer Initiation

**Method:** `POST`  
**Endpoint:** `pt/intrabank/v1/initiate`  
**Priority:** P1  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
},
  "body": {
  "sourceAccountId": "123456789",
  "destinationAccountId": "987654321",
  "transferAmount": 5000,
  "currency": "MYR",
  "referenceNumber": "REF20260715001",
  "remarks": "Payment for services"
}
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "transactionId": "TXN20260715001",
  "referenceNumber": "REF20260715001",
  "status": "PENDING",
  "initiatedAt": "2026-07-15T09:30:00Z",
  "estimatedProcessingTime": "5 minutes"
}
```

### Negative Test Scenarios

#### Scenario 1: Duplicate Reference Number

**Request Data:**
```json
{
  "sourceAccountId": "123456789",
  "destinationAccountId": "987654321",
  "transferAmount": 5000,
  "currency": "MYR",
  "referenceNumber": "REF20260715001"
}
```

**Expected Status:** `409`
**Expected Error:** Duplicate transaction

---

## API_SPECS_INDEX_007 - Intrabank Transfer Execution

**Method:** `POST`  
**Endpoint:** `pt/intrabank/v1/execute`  
**Priority:** P1  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
},
  "body": {
  "transactionId": "TXN20260715001",
  "otp": "123456",
  "deviceId": "DEVICE123"
}
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "transactionId": "TXN20260715001",
  "status": "COMPLETED",
  "executedAt": "2026-07-15T09:35:00Z",
  "transactionReference": "REF20260715001"
}
```

### Negative Test Scenarios

#### Scenario 1: Invalid OTP

**Request Data:**
```json
{
  "transactionId": "TXN20260715001",
  "otp": "000000",
  "deviceId": "DEVICE123"
}
```

**Expected Status:** `401`
**Expected Error:** Invalid OTP

#### Scenario 2: Transaction Not Found

**Request Data:**
```json
{
  "transactionId": "INVALID_TXN",
  "otp": "123456",
  "deviceId": "DEVICE123"
}
```

**Expected Status:** `404`
**Expected Error:** Transaction not found

---

## API_SPECS_INDEX_008 - Interbank Pre Monetary Check

**Method:** `POST`  
**Endpoint:** `pt/interbank/v1/pre-check`  
**Priority:** P1  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
},
  "body": {
  "sourceAccountId": "123456789",
  "destinationBankCode": "002",
  "destinationAccountNumber": "9876543210",
  "transferAmount": 10000,
  "currency": "MYR"
}
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "sourceAccount": {
    "accountId": "123456789",
    "balance": 50000,
    "availableBalance": 40000
  },
  "destinationBank": {
    "bankCode": "002",
    "bankName": "Bank 2"
  },
  "estimatedFee": 5,
  "totalAmount": 10005,
  "canProceed": true
}
```

### Negative Test Scenarios

#### Scenario 1: Interbank Limit Exceeded

**Request Data:**
```json
{
  "sourceAccountId": "123456789",
  "destinationBankCode": "002",
  "destinationAccountNumber": "9876543210",
  "transferAmount": 500000,
  "currency": "MYR"
}
```

**Expected Status:** `422`
**Expected Error:** Interbank limit exceeded

---

## API_SPECS_INDEX_009 - Inquire Transfer Fee

**Method:** `POST`  
**Endpoint:** `pt/interbank/v1/fee-inquiry`  
**Priority:** P2  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
},
  "body": {
  "transferAmount": 10000,
  "destinationBankCode": "002",
  "transferType": "INTERBANK"
}
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "transferAmount": 10000,
  "baseFee": 5,
  "additionalFee": 0,
  "totalFee": 5,
  "currency": "MYR"
}
```

### Negative Test Scenarios

#### Scenario 1: Invalid Bank Code

**Request Data:**
```json
{
  "transferAmount": 10000,
  "destinationBankCode": "INVALID",
  "transferType": "INTERBANK"
}
```

**Expected Status:** `400`
**Expected Error:** Invalid bank code

---

## API_SPECS_INDEX_010 - Interbank Transfer Initiation

**Method:** `POST`  
**Endpoint:** `pt/interbank/v1/initiate`  
**Priority:** P1  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
},
  "body": {
  "sourceAccountId": "123456789",
  "destinationBankCode": "002",
  "destinationAccountNumber": "9876543210",
  "destinationAccountName": "John Doe",
  "transferAmount": 10000,
  "currency": "MYR",
  "referenceNumber": "REF20260715002",
  "remarks": "Interbank transfer"
}
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "transactionId": "TXN20260715002",
  "referenceNumber": "REF20260715002",
  "status": "PENDING",
  "initiatedAt": "2026-07-15T10:00:00Z",
  "estimatedDeliveryTime": "1 business day"
}
```

### Negative Test Scenarios

#### Scenario 1: Invalid Destination Account

**Request Data:**
```json
{
  "sourceAccountId": "123456789",
  "destinationBankCode": "002",
  "destinationAccountNumber": "INVALID",
  "destinationAccountName": "John Doe",
  "transferAmount": 10000,
  "currency": "MYR"
}
```

**Expected Status:** `400`
**Expected Error:** Invalid destination account

---

## API_SPECS_INDEX_011 - Interbank Transfer Execution

**Method:** `POST`  
**Endpoint:** `pt/interbank/v1/execute`  
**Priority:** P1  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
},
  "body": {
  "transactionId": "TXN20260715002",
  "otp": "123456",
  "deviceId": "DEVICE123"
}
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "transactionId": "TXN20260715002",
  "status": "COMPLETED",
  "executedAt": "2026-07-15T10:05:00Z",
  "transactionReference": "REF20260715002"
}
```

### Negative Test Scenarios

#### Scenario 1: Transaction Already Executed

**Request Data:**
```json
{
  "transactionId": "TXN20260715001",
  "otp": "123456",
  "deviceId": "DEVICE123"
}
```

**Expected Status:** `409`
**Expected Error:** Transaction already executed

---

## API_SPECS_INDEX_012 - Get Scheduled Listing

**Method:** `GET`  
**Endpoint:** `pt/{product}/v1/scheduled`  
**Priority:** P2  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
},
  "pathParams": {
  "product": "localtransfer"
},
  "queryParams": {
  "status": "ACTIVE",
  "limit": 10
},
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "scheduledTransfers": [
    {
      "scheduleId": "SCH001",
      "referenceNumber": "REF20260715001",
      "frequency": "MONTHLY",
      "nextExecutionDate": "2026-08-15",
      "status": "ACTIVE"
    }
  ],
  "totalCount": 1
}
```

### Negative Test Scenarios

#### Scenario 1: Invalid Status

**Request Data:**
```json
{
  "status": "INVALID"
}
```

**Expected Status:** `400`
**Expected Error:** Invalid status

---

## API_SPECS_INDEX_013 - Get Scheduled Details

**Method:** `GET`  
**Endpoint:** `pt/{product}/v1/scheduled/{scheduleId}`  
**Priority:** P2  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
},
  "pathParams": {
  "product": "localtransfer",
  "scheduleId": "SCH001"
},
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "scheduleId": "SCH001",
  "sourceAccountId": "123456789",
  "destinationAccountId": "987654321",
  "transferAmount": 5000,
  "frequency": "MONTHLY",
  "startDate": "2026-07-15",
  "status": "ACTIVE"
}
```

### Negative Test Scenarios

#### Scenario 1: Schedule Not Found

**Request Data:**
```json
{}
```

**Expected Status:** `404`
**Expected Error:** Schedule not found

---

## API_SPECS_INDEX_014 - Cancel Scheduled Transfer

**Method:** `DELETE`  
**Endpoint:** `pt/{product}/v1/scheduled/{scheduleId}`  
**Priority:** P2  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
},
  "pathParams": {
  "product": "localtransfer",
  "scheduleId": "SCH001"
},
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "scheduleId": "SCH001",
  "status": "CANCELLED",
  "cancelledAt": "2026-07-15T11:00:00Z"
}
```

### Negative Test Scenarios

#### Scenario 1: Already Cancelled

**Request Data:**
```json
{}
```

**Expected Status:** `409`
**Expected Error:** Schedule already cancelled

---

## API_SPECS_INDEX_015 - Get Limit Setting Page

**Method:** `GET`  
**Endpoint:** `pt/{product}/v1/limits`  
**Priority:** P3  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
},
  "pathParams": {
  "product": "localtransfer"
},
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "intrabankLimit": 100000,
  "interbankLimit": 50000,
  "dailyLimit": 200000,
  "monthlyLimit": 1000000,
  "currency": "MYR"
}
```

### Negative Test Scenarios

#### Scenario 1: Invalid Product

**Request Data:**
```json
{}
```

**Expected Status:** `404`
**Expected Error:** Product not found

---

## API_SPECS_INDEX_016 - Update Limit Settings

**Method:** `PUT`  
**Endpoint:** `pt/{product}/v1/limits`  
**Priority:** P3  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
},
  "pathParams": {
  "product": "localtransfer"
},
  "body": {
  "intrabankLimit": 150000,
  "interbankLimit": 75000,
  "dailyLimit": 250000
}
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "intrabankLimit": 150000,
  "interbankLimit": 75000,
  "dailyLimit": 250000,
  "monthlyLimit": 1000000,
  "updatedAt": "2026-07-15T11:30:00Z"
}
```

### Negative Test Scenarios

#### Scenario 1: Limit Exceeds Maximum

**Request Data:**
```json
{
  "intrabankLimit": 9999999,
  "interbankLimit": 75000,
  "dailyLimit": 250000
}
```

**Expected Status:** `422`
**Expected Error:** Limit exceeds maximum allowed

---

## API_SPECS_INDEX_017 - Get Product Maintenance Limit

**Method:** `GET`  
**Endpoint:** `pt/{product}/v1/maintenance/limits`  
**Priority:** P3  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
},
  "pathParams": {
  "product": "localtransfer"
},
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "product": "localtransfer",
  "maxSingleTransactionLimit": 500000,
  "maxDailyLimit": 2000000,
  "maxMonthlyLimit": 10000000,
  "minTransactionAmount": 1,
  "currency": "MYR"
}
```

### Negative Test Scenarios

#### Scenario 1: Product Maintenance Not Available

**Request Data:**
```json
{}
```

**Expected Status:** `503`
**Expected Error:** Service temporarily unavailable

---

## API_SPECS_INDEX_018 - Remove Scheduled Transfer

**Method:** `DELETE`  
**Endpoint:** `pt/{product}/v1/scheduled/{scheduleId}`  
**Priority:** P2  

### Positive Test Data

#### Request

```json
{
  "headers": {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
},
  "pathParams": {
  "product": "localtransfer",
  "scheduleId": "SCH003"
},
}
```

#### Expected Response

**Status Code:** `200`

```json
{
  "scheduleId": "SCH003",
  "status": "REMOVED",
  "removedAt": "2026-07-15T12:00:00Z"
}
```

### Negative Test Scenarios

#### Scenario 1: Already Removed

**Request Data:**
```json
{}
```

**Expected Status:** `409`
**Expected Error:** Schedule already removed

---

