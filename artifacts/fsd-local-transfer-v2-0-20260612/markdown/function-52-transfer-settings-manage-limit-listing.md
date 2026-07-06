# Feature: FUNCTION 52: TRANSFER SETTINGS - MANAGE LIMIT LISTING

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Entry Point 1 via Transfer Landing Page (PRE-REQUISITE) | Manage Limits List screen
- Entry Point 2 to via Setting Page (PRE-REQUISITE)
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks
- 1 | Title header | N/A | Alphanumeric | Display | Local Server | Display "Transfer limit" as title | CMS: 1. Retrieve title header. 2. Retrieve reminder content CMS: 1. To retrieve transfer modes
- 2 | Reminder message | N/A | Alphanumeric | Display | Integration | Display reminder message "You can only update one limit at a time." | CMS: 1. Retrieve title header. 2. Retrieve reminder content CMS: 1. To retrieve transfer modes
- 3 | Transfer mode selections | N/A | Alphanumeric | Selection | Integration | Display selection of transfer modes: a. Transfer Within Maybank b. BI-FAST c. Transfer Online c. BI-SKN d. RTGS | CMS: 1. Retrieve title header. 2. Retrieve reminder content CMS: 1. To retrieve transfer modes
- Actions
- No. | Action | Description | Integration | Remarks
- 1 | [<] icon | Upon tapping [<] icon, system to perform: 1. For Entry Point 1 navigates to Transfer Landing Page . 2. For Entry Point 2 navigates to Settings Page.
- 2 | Menu Transfer Mode | Upon tapping option, navigate to Manage Limit Details screen per Transfer Mode.
## Business Rules
- No. | Description | Integration | Remarks
- 1 | For Transfer Limit update: 1. No cooling off period 2. Changes of limits is allowed multiple times (no restriction) per day.
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