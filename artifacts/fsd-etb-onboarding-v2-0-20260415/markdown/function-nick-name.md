# Feature: Function: Nick Name

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Nickname
- Back Button Permutation: Previous screen is Verification
- Fields
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
- 1 | Greeting Title & First Name Display | N/A | Alphanumeric | Display | Integration | 1. Display “Welcome back, {First Name}” - First name will be retrieved from DCIF - full name, system to take the "first name" (before first space) - IF "first name" > 17 char, trim and display first 17 chars. | CMS 1. Retrieve title 2. Retrieve description
- 2 | Display name | Yes | Alphanumeric | Textbox X(17) | Input | 1. Minimum 3 characters, else display inline error "Minimum 3 characters required." 2. Alphabetical and spaces only (no special characters or numbers allowed), else display inline error "Only alphabets are allowed" 3. Display real-time counter "x/17", max 17 characters. 4. Trim leading and trailing space, >1 space to single space in between characters 5. Format and store display name in title case format.
- Actions
- No. | Action | Description | Integration | Remark
- 1 | [Save & next] Button | If nickname is valid, navigate to App Permission
- 2 | [<] Button | Upon tapping, navigate to Notice Screen.
- 3 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen.
## Validation Rules
- Not specified
## Business Rules
- No. | Description | Integration | Remark
- 1 | Preview Nickname entered: 1. Immediately update display greeting as nickname is typed 2. If user types then removes all inputs to default back to previous state with first name
- 2 | Back button permutation will follow rules below: 1. If the previous screen is a verification process (e.g., SMS OTP), the Back [<] icon will not be displayed. 2. If the previous screen is the Notice screen, the Back [<] icon will be displayed.
- 3 | Save & Next button will perform: 1. Mandatory check 2. Field validation 3. If validation passed, proceed to App Permission screen
- 4 | If user quits: 1. User with M2U ID, will have to go thru the onboarding process from start. 2. User without M2U ID (registered in NGA & completed 1st verification), will continue from Login screen, i.e. will not be prompted the Consent Screen again.
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