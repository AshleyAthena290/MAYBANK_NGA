# Feature: FUNCTION 7: NOTIFICATION

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Notification Centre - ID (Transaction) | Notification - Apple | Notification - Android
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks
## Business Rules
- No. | Description | Integration | Remarks
- 1 | For successful transaction, notification is available for below: a. Interbank: (i) Push & Email notification to sender, if defined in Settings > Notification > Transactions. (ii) Email notification to beneficiary, if recipient email is entered b. Intrabank (i) Push & Email notification to sender, if defined in Settings > Notification > Transactions. (ii) Push notification to beneficiary. (iii) Email notification to beneficiary, if recipient email is entered . c. Transfer to Own: (i) Push & Email notification to sender, if defined in Settings > Notification > Transactions. | MBPNS: 1. To trigger notification via: - email - push.
- 2 | Push & Email notificaton content to Sender (Immediate, Scheduled, Recurring) to be provided & documented separately: a. Intrabank b. Interbank (i) BI-FAST (ii) RTOL (iii) BI-SKN (iv) RTGS c. Own
- 3 | Email notification content to Beneficiary to be provided & documented separately: a. Intrabank a. Intrabank b. Interbank (i) BI-FAST (ii) RTOL (iii) BI-SKN (iv) RTGS
## APIs
- Not specified
## Dependencies
- Not specified
## Error Messages
- Not specified
## Navigation
- Not specified
## Remarks
- Not specified

## Prompting Hints
- Keep requirement statements atomic.
- Map validations to positive, negative, and boundary tests.
- Use dependencies and APIs to derive integration scenarios.