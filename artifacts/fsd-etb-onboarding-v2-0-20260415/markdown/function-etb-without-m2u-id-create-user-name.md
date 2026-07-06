# Feature: Function: ETB without M2U ID - Create User Name

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Create Username
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
- 1 | Title | N/A | Alphanumeric | Display | Integration | Display "Create your username" | CMS: 1. Retrieve Title
- 2 | Username | Yes | Alphanumeric | Textbox X(20) | Input | 1. Allows alphanumeric only 2. Not allowed for space and special character 3. Must fulfill all validation below, and turn to green icon for condition that met, else remain as grey icon. a. Must contain: 8-20 characters b. Must contain at least 1 letter and 1 number
- 3 | Checklist Icon | N/A | Image | Display | Integration | Display default icon color as grey, if criteria met change respective icon to green | CMS: 1. Retrieve validation icon - grey & green
- 4 | Validation Text | N/A | Alphanumeric | Display | Integration | Display below: 1. Must contain 8-20 characters 2. Must contain at least 1 letter and 1 number | CMS 1. Retrieve validation text
- Actions
- No. | Action | Description | Integration | Remark
- 1 | [Confirm] Button | Upon tapping and validation passed, navigate to [CASA/CC - w/o M2U ID] create password screen
- 2 | [<] Button | Upon tapping, navigate back to [CASA/CC - w/o M2U ID] Account details screen
- 3 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen
## Business Rules
- No. | Description | Integration | Remark
- 1 | When tap on Confirm button, perform validation below: 1. Mandatory validation 2. Username values validation as per checklist (validation rules is not maintainable) 3. Username duplication, if failed display snackbar error message - If username already exists, display error "This username isn't available. Please choose another." - Deleted user ID in the last 30 days (<=30) can't be used, display error "This username isn't available. Please choose another." | IAM: 1. Validation on: - Username is existing - Username use deleted user ID <=30 days
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