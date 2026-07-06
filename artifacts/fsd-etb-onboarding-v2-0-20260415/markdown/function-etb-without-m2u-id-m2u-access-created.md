# Feature: Function: ETB without M2U ID - M2U Access created

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Maybank2u Access created
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
- 1 | Status Message | N/A | Alphanumeric | Display | Integration | Display "Maybank2u access created" | CMS 1. Retrieve Successful Message
- 2 | Status Icon/GIF | N/A | Alphanumeric | Display | Integration | Display status icon/gif | CMS 1. Retrieve status icon
- 3 | Application Date and Time | N/A | Alphanumeric | Display | Local Server | Display application date and time.
- Actions
- No. | Action | Description | Integration | Remark
- 1 | [Proceed] button | Upon tapping, navigate to Nickname screen
## Business Rules
- No. | Description | Integration | Remark
- 1 | Dropped off: 1. If user dropped off from this point onwards, since Username has already been created, user should subsequently go through Login via Onboarding Landing - "I'm a Maybank customer" 2. If user dropped off prior to this, nothing will be saved and user will have to go through the onboarding from the beginning.
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