# Test Layer Classification - Function: ETB with M2U ID - Login Page - Password

- Generated At: 2026-07-05T13:38:24.985Z
- Schema Version: 1.0.0
- Total Requirements Classified: 17

## Classification Details

### Requirement: Login Page - Password

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Fields

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Maybank logo & Name | N/A | Alphanumeric | Display | Integration | Display Maybank Logo & Name image | CMS: 1. Retrieve maybank Logo & Name image

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Security Image | N/A | Image | Display | Integration | Retrieve and display security image - IF user input invalid username in Login Username screen, Random image will be displayed | IAM: 1. Retrieve selected security image by username

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | Username Display | N/A | Alphanumeric | Display | Local Server | Display masked username - display first 2 and last 2 characters in plain text, and mask characters in between. E.g. Username is Dodo5050, then it will display Do****50

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 4 | Password | Yes | Alphanumeric | Textbox X(20) | Input | 1. Field is auto-focused & keyboard is shown on drawer opening 2. Input masked by default

- UI: Requirement references end-user interface behavior.
- Accessibility: Requirement indicates accessibility conformance behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Actions

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Action | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | [Forgot password?] hyperlink | Upon tapping hyperlink, navigate to [A&A] Forgot Password

- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Eye Icon (Show/Hide Password) | Press to hold to display input. Input is masked if user does not continue to tap and hold.

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | [Log in] Button | Upon password authentication successful: 1. If user switch using same device, navigate to Change App Notice Screen 2. If user switch to new device, navigate to Change Device Notice Screen

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 4 | [<] Button | Upon tapping, navigate back to [A&A] Security Image Verification screen

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 5 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen.

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | When tap on Log In button, perform validation below: 1. Password mandatory check 2. Username validity, else display snackbar error "Username & password do not match" 3. Password validity (i) Password incorrect AND attempt < 3x: Display snackbar error "Incorrect password. Your account will be locked after [Remaining no. of attempts] more unsuccessful attempts." (ii) Password incorrect AND attempt = 3x : Navigate to [A&A] Locked Account Screen. (No of attempts counter to be discussed in DDD.) 4. If password authenticated successfully, IAM will also perform account status validation. (i) Status = "locked" OR "disabled": Navigate to [A&A] Locked Account / Disabled Account Screen 5. If all the above passed, navigate to Notice screen | IAM: 1. Username and Password authentication by username with possible outcome: - Invalid Username - Invalid password - Authenticated but Account Locked or Disable. Existing integration point (ID): RHDS 1. Username verification

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Upon Log In, perform below: 1.Regardless successful or unsuccessful login, send data to FMS 2. If successful login, retrieve customer info (Full Name for Nickname screen) | FMS 1. Fraud Monitoring DCIF: 1. Retrieve Customer Info (Full Name) to be used in Nickname screen

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.
