# Test Layer Classification - Function: Nick Name

- Generated At: 2026-07-05T13:38:24.999Z
- Schema Version: 1.0.0
- Total Requirements Classified: 16

## Classification Details

### Requirement: Nickname

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: Back Button Permutation: Previous screen is Verification

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Fields

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Greeting Title & First Name Display | N/A | Alphanumeric | Display | Integration | 1. Display “Welcome back, {First Name}” - First name will be retrieved from DCIF - full name, system to take the "first name" (before first space) - IF "first name" > 17 char, trim and display first 17 chars. | CMS 1. Retrieve title 2. Retrieve description

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Display name | Yes | Alphanumeric | Textbox X(17) | Input | 1. Minimum 3 characters, else display inline error "Minimum 3 characters required." 2. Alphabetical and spaces only (no special characters or numbers allowed), else display inline error "Only alphabets are allowed" 3. Display real-time counter "x/17", max 17 characters. 4. Trim leading and trailing space, >1 space to single space in between characters 5. Format and store display name in title case format.

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Actions

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Action | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | [Save & next] Button | If nickname is valid, navigate to App Permission

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | [<] Button | Upon tapping, navigate to Notice Screen.

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen.

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Preview Nickname entered: 1. Immediately update display greeting as nickname is typed 2. If user types then removes all inputs to default back to previous state with first name

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Back button permutation will follow rules below: 1. If the previous screen is a verification process (e.g., SMS OTP), the Back [<] icon will not be displayed. 2. If the previous screen is the Notice screen, the Back [<] icon will be displayed.

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | Save & Next button will perform: 1. Mandatory check 2. Field validation 3. If validation passed, proceed to App Permission screen

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 4 | If user quits: 1. User with M2U ID, will have to go thru the onboarding process from start. 2. User without M2U ID (registered in NGA & completed 1st verification), will continue from Login screen, i.e. will not be prompted the Consent Screen again.

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.
