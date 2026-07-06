# Feature: Function: ETB with M2U ID - Login Page - UserName

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Login Page - Username
- Fields
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
- 1 | Maybank logo & Name | N/A | Alphanumeric | Display | Integration | Display Maybank Logo & Name image | CMS: 1. Retrieve maybank Logo & Name image
- 2 | Title | N/A | Alphanumeric | Display | Integration | Display "Let's get you logged in" | CMS 1. Retrieve Title
- 3 | Username | Yes | Alphanumeric | Textbox X(20) | Input | Enter NGA username
- 4 | "No online banking access yet?" | N/A | Alphanumeric | Display | Integration | Display "No online banking access yet?" description. | CMS: 1. Retrieve "No online banking access yet?" description
- Actions
- No. | Action | Description | Integration | Remark
- 1 | [Forgot login details?] hyperlink | Upon tapping, navigate to [A&A] Forgot Login flow
- 2 | [Next] Button | Upon tapping, navigate to [A&A] Security Image Verification screen
- 3 | [Register with credit card] Button | Upon tapping, navigate to [CC - w/o M2U ID] Enter Account Details screen
- 4 | [Register with debit card] Button | Upon tapping, navigate to [CASA - w/o M2U ID] Enter Account Details screen
- 5 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen and followed by Consent screen
## Validation Rules
- Not specified
## Business Rules
- No. | Description | Integration | Remark
- 1 | 1. Next button will trigger username mandatory field check only. 2. Security image verification screen will be prompted (refer to [A&A]). *No verification on username and will navigate to Login Password screen
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