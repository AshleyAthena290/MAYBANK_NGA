# ECLIPSE Account Dashboard - Credit Card Detailed API Specifications
## Backend ECLIPSE API Detailed Specifications

**Generated:** 2026-07-17 10:50:47

## Executive Summary
---

- **Total ECLIPSE APIs:** 10
- **These are backend ECLIPSE DDD APIs** that power the Credit Card Dashboard
- Each API has detailed specifications for request/response structures, validations, and error handling

## API List
---

| No. | API Name | Method | URL |
|-----|----------|--------|-----|
| 1 | creditCardPinValidation | POST | https: //{Eclipse-IP}:{Eclipse-PORT}/info/card/v1/... |
| 2 | getCreditLimits | GET | https: //{Eclipse-IP}:{Eclipse-PORT}/info/card/v1/... |
| 3 | getCreditLimitConfigurations | GET | https: //{Eclipse-IP}:{Eclipse-PORT}/info/maintena... |
| 4 | getInstalmentConversionSchedule | GET | https: //{Eclipse-IP}:{Eclipse-PORT}/info/card/v1/... |
| 5 | creditCardBlock | POST | https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/e... |
| 6 | creditCardUnblock | POST | https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/e... |
| 7 | creditCardActivation | POST | https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/e... |
| 8 | increaseCreditLimit | POST | https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/e... |
| 9 | replaceCreditCard | POST | https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/e... |
| 10 | creditCardResetPin | POST | https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/e... |

## Detailed API Specifications
---

### 1. creditCardPinValidation

#### API Overview
- **Sheet:** creditCardPinValidation
- **HTTP Method:** `POST`
- **URL:** `https: //{Eclipse-IP}:{Eclipse-PORT}/info/card/v1/external/credit-card/validate-pin`
- **Message Type:** JSON

#### Response Structure
| Field | Type | Description |
|-------|------|-------------|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

#### Request Sample
```json
GET https: //{Eclipse-IP}:{Eclipse-PORT}/info/card/v1/external/credit-card/validate-pin
```

#### Response Sample
```json
{
    "status": 200,
    "message": "Request processed successfully",
    "timestamp": "2026-01-13T12:00:00",
    "correlationId": "abc123-correlation-id",
    "meta": {
        "provider": "erp"
    },
    "data": {
    }
}
```

---

### 2. getCreditLimits

#### API Overview
- **Sheet:** getCreditLimits
- **HTTP Method:** `GET`
- **URL:** `https: //{Eclipse-IP}:{Eclipse-PORT}/info/card/v1/external/credit-card/{cardNumber}/credit-limits`
- **Message Type:** JSON

#### Response Structure
| Field | Type | Description |
|-------|------|-------------|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

#### Request Sample
```json
GET https: //{Eclipse-IP}:{Eclipse-PORT}/info/card/v1/external/credit-card/1111222233334444/credit-limits?limitType=PERMANENT
```

#### Response Sample
```json
{
    "status": 200,
    "message": "Request processed successfully",
    "timestamp": "2026-01-13T12:00:00",
    "correlationId": "abc123-correlation-id",
    "meta": {
        "provider": "erp"
    },
    "data": {
        "currency": "IDR",
        "newCreditLimits": [
            81000000,
            82000000,
            83000000,
            84000000,
            85000000,
            86000000,
            87000000,
            88000000,
            89000000
        ]
    }
}
```

---

### 3. getCreditLimitConfigurations

#### API Overview
- **Sheet:** getCreditLimitConfigurations
- **HTTP Method:** `GET`
- **URL:** `https: //{Eclipse-IP}:{Eclipse-PORT}/info/maintenance/v1/internal/credit-card/credit-limit-configurations`
- **Message Type:** JSON

#### Response Structure
| Field | Type | Description |
|-------|------|-------------|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

#### Request Sample
```json
GET https: //{Eclipse-IP}:{Eclipse-PORT}/info/maintenance/v1/internal/credit-card/credit-limit-configurations
```

#### Response Sample
```json
{
    "status": 200,
    "message": "Request processed successfully",
    "timestamp": "2026-01-13T12:00:00",
    "correlationId": "abc123-correlation-id",
    "meta": {
        "provider": "erp"
    },
    "data": [
        {
            "limitType": "PERMANENT",
            "configurations": [
                {
                    "minMob": 0,
                    "maxMob": 3,
                    "maxLimitIncreasePercentage": 10,
                    "nominalMaxIncrease": 80000000,
                    "adminFee": 25000,
                    "mid": "1"
                },
                {
                    "minMob": 4,
                    "maxMob": 6,
                    "maxLimitIncreasePercentage": 20,
                    "nominalMaxIncrease": 100000000,
                    "adminFee": 25000,
                    "mid": "1"
                },
                {
                    "minMob": 7,
                    "maxMob": 9,
                    "maxLimitIncreasePercentage": 30,
                    "nominalMaxIncrease": 100000000,
                    "adminFee": 50000,
                    "mid": "1"
                },
                {
                    "minMob": 10,
                    "maxMob": 12,
                    "maxLimitIncreasePercentage": 50,
                    "nominalMaxIncrease": 150000000,
                    "adminFee": 50000,
                    "mid": "1"
                }
            ]
        },
        {
            "limitType": "TEMPORARY",
            "configurations": [
                {
                    "minMob": 0,
                    "maxMob": 3,
                    "maxLimitIncreasePercentage": 10,
                    "nominalMaxIncrease": 80000000,
                    "adminFee": 25000,
                    "mid": "1"
                },
                {
                    "minMob": 4,
                    "maxMob": 6,
                    "maxLimitIncreasePercentage": 20,
                    "nominalMaxIncrease": 100000000,
                    "adminFee": 25000,
                    "mid": "1"
                },
                {
                    "minMob": 7,
                    "maxMob": 9,
                    "maxLimitIncreasePercentage": 30,
                    "nominalMaxIncrease": 100000000,
                    "adminFee": 50000,
                    "mid": "1"
                },
                {
                    "minMob": 10,
                    "maxMob": 12,
                    "maxLimitIncreasePercentage": 50,
                    "nominalMaxIncrease": 150000000,
                    "adminFee": 50000,
                    "mid": "1"
                }
            ]
        }
    ]
}
```

---

### 4. getInstalmentConversionSchedule

#### API Overview
- **Sheet:** getInstalmentConversionSchedule
- **HTTP Method:** `GET`
- **URL:** `https: //{Eclipse-IP}:{Eclipse-PORT}/info/card/v1/external/credit-card/instalment-conversion`
- **Message Type:** JSON

#### Response Structure
| Field | Type | Description |
|-------|------|-------------|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

#### Request Sample
```json
GET https: //{Eclipse-IP}:{Eclipse-PORT}/info/card/v1/external/credit-card/instalment-conversion

{
    "cardNumber": "4047760034916300"
}
```

#### Response Sample
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
        "transactions": [
            {
                "referenceId": "1234567890",
                "dateTime": "20-04-2025 20:25:33",
                "description": "175200 7648 - 175200 \n764800940 QR PAY-GUTEN \nMORGEN 00000",
                "status": "posted",
                "amounts": [
                    {
                        "key": "local",
                        "currency": "IDR",
                        "amount": 100
                    }
                ],
                "tenures": [
                    {
                        "tenure": 3,
                        "interest": 1,
                        "monthlyInstalment": 337833.33,
                        "adminFee": 10000,
                        "conversionFee": 3500,
                        "mid": 22,
                        "plan": 7
                    },
                    {
                        "tenure": 6,
                        "interest": 1.5,
                        "monthlyInstalment": 169750,
                        "adminFee": 10000,
                        "conversionFee": 3500,
                        "mid": 22,
                        "plan": 7
                    },
                    {
                        "tenure": 9,
                        "interest": 1.5,
                        "monthlyInstalment": 113166.67,
                        "adminFee": 15000,
                        "conversionFee": 3500,
                        "mid": 22,
                        "plan": 7
                    },
                    {
                        "tenure": 12,
                        "interest": 2,
                        "monthlyInstalment": 85291.67,
                        "adminFee": 20000,
                        "conversionFee": 3500,
                        "mid": 22,
                        "plan": 7
                    }
                ]
            }
        ]
    },
    "link": {}
}
```

---

### 5. creditCardBlock

#### API Overview
- **Sheet:** creditCardBlock
- **HTTP Method:** `POST`
- **URL:** `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/block`
- **Message Type:** JSON

#### Response Structure
| Field | Type | Description |
|-------|------|-------------|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

#### Request Sample
```json
POST  https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/block

{
    "cardNumber": "4966092287163342"
}
```

#### Response Sample
```json
{
    "status": "success",
    "extra": "",
    "note": "",
    "header": "card_temporary_block_successful_header",
    "desc": "",
    "details": "{\"reference_id\":\"268614863M\",\"date_time\":\"07 May 2026, 04:05 PM\",\"transaction_type\":\"block_card\",\"blocked_card\":\"Maybank U Debit Card\n**** **** **** 5678\"}",
    "receipt": ""
}
```

---

### 6. creditCardUnblock

#### API Overview
- **Sheet:** creditCardUnblock
- **HTTP Method:** `POST`
- **URL:** `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/unblock`
- **Message Type:** JSON

#### Response Structure
| Field | Type | Description |
|-------|------|-------------|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

#### Request Sample
```json
POST  https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/unblock

{
    "cardNumber": "4966092287163342"
}
```

#### Response Sample
```json
{
    "status": "success",
    "extra": "",
    "note": "",
    "header": "card_unblock_successful_header",
    "desc": "",
    "details": "{\"reference_id\":\"268614863M\",\"date_time\":\"07 May 2026, 04:05 PM\",\"transaction_type\":\"block_card\",\"unblocked_card\":\"Maybank U Debit Card\n**** **** **** 5678\"}",
    "receipt": ""
}
```

---

### 7. creditCardActivation

#### API Overview
- **Sheet:** creditCardActivation
- **HTTP Method:** `POST`
- **URL:** `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/activate`
- **Message Type:** JSON

#### Response Structure
| Field | Type | Description |
|-------|------|-------------|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

#### Request Sample
```json
POST  https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/activate

{
    "pinBlock": "80H287H678A",
    "cardNumber": "2944809912348888"
}
```

#### Response Sample
```json
{
    "status": "success",
    "extra": "",
    "note": "",
    "header": "credit_card_activation_header",
    "desc": "",
    "details": "{\"reference_id\":\"268614863M\",\"date_time\":\"07 May 2026, 04:05 PM\",\"transaction_type\":\"credit_card_activation\",\"card\":\"Maybank U Debit Card\n**** **** **** 5678\"}",
    "receipt": ""
}
```

---

### 8. increaseCreditLimit

#### API Overview
- **Sheet:** increaseCreditLimit
- **HTTP Method:** `POST`
- **URL:** `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/increase-credit-limit`
- **Message Type:** JSON

#### Response Structure
| Field | Type | Description |
|-------|------|-------------|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

#### Request Sample
```json
POST  https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/increase-credit-limit

Examples of permanent increase limit with NPWP uploaded
{
    "cardNumber": "4047760034916300",
    "newCreditLimit": 110000000.0,
    "increaseLimitType": "PERMANENT",
    "identification": {
        "type": "NPWP",
        "id": "3676011607931145"
    },
    "document": {
        "type": "image/png",
        "data": "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
    }
}

Examples of temporary increase limit if NPWP same with e-KTP
{
    "cardNumber": "4047760034916300",
    "newCreditLimit": 110000000.0,
    "increaseLimitType": "TEMPORARY",
    "startDate": "2026-05-06 20:25:33",
    "endDate": "2027-05-06 20:25:33",
    "identification": {
        "type": "EKTP",
        "id": "3676011607931145"
    }
}
```

#### Response Sample
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
        "status": "success",
        "extra": "",
        "note": "",
        "header": "increase_credit_limit_successful_header",
        "desc": "",
        "details": "{\"reference_id\":\"IO000000428\",\"date_time\":\"07 May 2026, 04:05 PM\",\"transaction_type\":\"increase_credit_card_limit\",\"limit_type\":\"permenant\",\"new_credit_limit\":\"IDR 80,000,000.00\",\"start_date\":\"7 Oct 2025\",\"end_date\":\"1 Nov 2025\",\"admin_fee\":\"IDR 75,000.00\"}"
    },
    "link": {}
}
```

---

### 9. replaceCreditCard

#### API Overview
- **Sheet:** replaceCreditCard
- **HTTP Method:** `POST`
- **URL:** `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/replacement`
- **Message Type:** JSON

#### Response Structure
| Field | Type | Description |
|-------|------|-------------|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

#### Request Sample
```json
POST  https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/replacement

{
    "cardNumber": "3243937423432434",
    "replacementMethod": "DELIVER_TO_ADDRESS",
    "address": {
        "type": "MAILING",
        "address1": "Jl. Asia Afrika Sentral Senayan 3",
        "province": "Jakarta Selatan",
        "city": "Kebayoran Baru",
        "district": "Bendungan Hilir",
        "subDistrict": "Gelora",
        "neighborhoodUnit": "001",
        "communityUnit": "004",
        "postcode": "10270"
    }
}
```

#### Response Sample
```json
{
    "status": "success",
    "extra": "",
    "note": "",
    "header": "card_replacement_request_successful_header",
    "desc": "card_replacement_request_successful_desc",
    "details": "{\"reference_id\":\"268614863M\",\"date_time\":\"07 May 2026, 04:05 PM\",\"transaction_type\":\"card_replacement\"}",
    "receipt": ""
}
```

---

### 10. creditCardResetPin

#### API Overview
- **Sheet:** creditCardResetPin
- **HTTP Method:** `POST`
- **URL:** `https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/reset-pin`
- **Message Type:** JSON

#### Response Structure
| Field | Type | Description |
|-------|------|-------------|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

#### Request Sample
```json
POST  https: //{Eclipse-IP}:{Eclipse-PORT}/dep/card/v1/external/credit-card/reset-pin

{
    "cardNumber": "4966092287163342",
    "cardExpiry": "0128",
    "pinBlock": "80H287H678A",
    "actionCode": "1"
}
```

#### Response Sample
```json
{
    "status": "success",
    "extra": "",
    "note": "",
    "header": "temporary_block_successful_header",
    "desc": "",
    "details": "{\"reference_id\":\"268614863M\",\"date_time\":\"07 May 2026, 04:05 PM\",\"transaction_type\":\"block_card\",\"blocked_card\":\"Maybank U Debit Card\n**** **** **** 5678\"}",
    "receipt": ""
}
```

---

