# Feature: Function: ETB with M2U ID - Login Page - Password

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Login Page - Password
- Fields
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
- 1 | Maybank logo & Name | N/A | Alphanumeric | Display | Integration | Display Maybank Logo & Name image | CMS: 1. Retrieve maybank Logo & Name image
- 2 | Security Image | N/A | Image | Display | Integration | Retrieve and display security image - IF user input invalid username in Login Username screen, Random image will be displayed | IAM: 1. Retrieve selected security image by username
- 3 | Username Display | N/A | Alphanumeric | Display | Local Server | Display masked username - display first 2 and last 2 characters in plain text, and mask characters in between. E.g. Username is Dodo5050, then it will display Do****50
- 4 | Password | Yes | Alphanumeric | Textbox X(20) | Input | 1. Field is auto-focused & keyboard is shown on drawer opening 2. Input masked by default
- Actions
- No. | Action | Description | Integration | Remark
- 1 | [Forgot password?] hyperlink | Upon tapping hyperlink, navigate to [A&A] Forgot Password
- 2 | Eye Icon (Show/Hide Password) | Press to hold to display input. Input is masked if user does not continue to tap and hold.
- 3 | [Log in] Button | Upon password authentication successful: 1. If user switch using same device, navigate to Change App Notice Screen 2. If user switch to new device, navigate to Change Device Notice Screen
- 4 | [<] Button | Upon tapping, navigate back to [A&A] Security Image Verification screen
- 5 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen.
## Validation Rules
- Not specified
## Business Rules
- No. | Description | Integration | Remark
- 1 | When tap on Log In button, perform validation below: 1. Password mandatory check 2. Username validity, else display snackbar error "Username & password do not match" 3. Password validity (i) Password incorrect AND attempt < 3x: Display snackbar error "Incorrect password. Your account will be locked after [Remaining no. of attempts] more unsuccessful attempts." (ii) Password incorrect AND attempt = 3x : Navigate to [A&A] Locked Account Screen. (No of attempts counter to be discussed in DDD.) 4. If password authenticated successfully, IAM will also perform account status validation. (i) Status = "locked" OR "disabled": Navigate to [A&A] Locked Account / Disabled Account Screen 5. If all the above passed, navigate to Notice screen | IAM: 1. Username and Password authentication by username with possible outcome: - Invalid Username - Invalid password - Authenticated but Account Locked or Disable. Existing integration point (ID): RHDS 1. Username verification
- 2 | Upon Log In, perform below: 1.Regardless successful or unsuccessful login, send data to FMS 2. If successful login, retrieve customer info (Full Name for Nickname screen) | FMS 1. Fraud Monitoring DCIF: 1. Retrieve Customer Info (Full Name) to be used in Nickname screen
## APIs
- Not specified
## Dependencies
- Not specified
## Error Messages
- Fields
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
- 1 | Maybank logo & Name | N/A | Alphanumeric | Display | Integration | Display Maybank Logo & Name image | CMS: 1. Retrieve maybank Logo & Name image
- 2 | Security Image | N/A | Image | Display | Integration | Retrieve and display security image - IF user input invalid username in Login Username screen, Random image will be displayed | IAM: 1. Retrieve selected security image by username
- 3 | Username Display | N/A | Alphanumeric | Display | Local Server | Display masked username - display first 2 and last 2 characters in plain text, and mask characters in between. E.g. Username is Dodo5050, then it will display Do****50
- 4 | Password | Yes | Alphanumeric | Textbox X(20) | Input | 1. Field is auto-focused & keyboard is shown on drawer opening 2. Input masked by default
- Actions
- No. | Action | Description | Integration | Remark
- 1 | [Forgot password?] hyperlink | Upon tapping hyperlink, navigate to [A&A] Forgot Password
- 2 | Eye Icon (Show/Hide Password) | Press to hold to display input. Input is masked if user does not continue to tap and hold.
- 3 | [Log in] Button | Upon password authentication successful: 1. If user switch using same device, navigate to Change App Notice Screen 2. If user switch to new device, navigate to Change Device Notice Screen
- 4 | [<] Button | Upon tapping, navigate back to [A&A] Security Image Verification screen
- 5 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen.
## Navigation
- Not specified
## Remarks
- Not specified

## Prompting Hints
- Keep requirement statements atomic.
- Map validations to positive, negative, and boundary tests.
- Use dependencies and APIs to derive integration scenarios.