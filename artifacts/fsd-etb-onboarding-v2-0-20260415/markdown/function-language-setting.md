# Feature: Function: Language Setting

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Language Setting
- Fields
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
- 1 | Select Language title | N/A | Alphanumeric | Display | Integration | 1. Display "Select Language" | CMS 1. Retrieve title content
- 2 | Language Option | No | Alphanumeric | Selection | Integration | 1. Retrieve language options: (i) Bahasa Indonesia (ii) English 2. Pre-select based on the selected language option from Onboarding Landing Page. | CMS : 1. Retrieve available language options
- Actions
- No. | Action | Description | Integration | Remark
- 1 | Language Option | Tap anywhere in language option to save language preference, close language selection pop up, navigate back to Onboarding screen and reflect all NGA screen with selected language
- 2 | [x] Button | Upon tapping, close popup without saving changes and navigate back to Onboarding Screen
## Validation Rules
- Not specified
## Business Rules
- No. | Description | Integration | Remark
- 1 | 1. Upon selecting Language Option, store the selected language in device cache. 2. IF customer uninstalls application THEN all device cache storage will be removed. 3. IF onboarding process is not completed, and customer opens app again, language will follows latest language preference (retrieve from device cache)
- 2 | Applicable to anyone who has installed the app but has not onboarded/binded.
- 3 | If user changes devices, the system should still retain the selected language preference. Selected language will be applied consistently across all NGA screens.
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