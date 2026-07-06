# Feature: FUNCTION 53: TRANSFER SETTINGS - MANAGE LIMITS DETAIL

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Manage Limits - INTRABANK | Failed update limit
- 5 | Status Image & Status | N/A | Image | Display | Integration | 1. Display Image based on status: a. Successful b. Unsuccessful 2. Display transaction status | CMS 1. Retrieve Image & status: - successful - unsuccessful
- 6 | Transaction Date & Timestamp | N/A | Alphanumeric | Display | Local Server | Display transaction date and time.
- 7 | Ref ID | N/A | Alphanumeric | Display | Local Server | Display generated Reference ID.
- Limit Info (Applicable ONLY for successful)
- 8 | New Limit | N/A | Alphanumeric | Display | Local Server | Populate new user defined limit.
- 9 | Limit Type | N/A | Alphanumeric | Display | Local Server | Populate transfer mode from previous screen.
- Transaction Type (Applicable ONLY for unsuccessful)
- 10 | Transaction Type | N/A | Alphanumeric | Display | Local Server | Populate transaction type - Manage Limit
- Actions
- No. | Action | Description | Integration | Remarks
- 1 | [<] icon | Upon tapping [<] icon, system to navigate to manage limit list screen
- 2 | Select new limit selection | Upon tapping, system to populate value to New Limit field.
- 3 | [Save] Button | Upon tapping, trigger [A&A] Secure2u authorisation screeen
- 4 | [Done] | Upon tapping, navigates to Transfer Limit Dashboard screen.
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks
## Business Rules
- No. | Description | Integration | Remarks
- 1 | 1. Upon selecting the new limit & tap on [Save] button. a. System navigates to S2U authorisation screen. Once passed, navigate to Status End Screen. - updated successfully - navigate to Limit Updated screen. - Update unsuccessful - navigate to Update Unsuccessful screen, no change. | IAM: 1. S2U Auth P&T: - Update user daily limit by transfer mode
- 2 | 1. For ID, successful update: a. New limit value will be effective immediately without any cooling off period per transaction rail. (Cooling off period = 0) b. Changes of limits is allowed for multiple times (no restriction) per transaction rail, per day. (Frequency = 0) NBGO: By Country - Cooling off period (defined in HH:MM) - for increase, decrease, OR increase and decrease. If set to 0 indicates no cooling off period required. - Daily limit Change Frequencies per Day. If set to 0 indicates no limit to change frequecies per day. | NGBO: 1. By Country - Cooling off period for Daily Limit Change, in HH:MM for increase and/or decrease of limit
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