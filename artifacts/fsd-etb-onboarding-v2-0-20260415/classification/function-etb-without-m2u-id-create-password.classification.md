# Test Layer Classification - Function: ETB without M2U ID - Create Password

- Generated At: 2026-07-05T13:38:25.037Z
- Schema Version: 1.0.0
- Total Requirements Classified: 9

## Classification Details

### Requirement: Create Password | Error Handling

- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Title | N/A | Alphanumeric | Display | Integration | Display "Create your password" | CMS 1. Retrieve Title

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | New Password | Yes | Alphanumeric | Textbox X(20) | Input | 1. Allows alphanumeric & special character 2. Not allowed for space 3. Must fulfill all validation below, and turn to green icon for condition that met, else remain as grey icon. a. Length: 8-20 chars b. Must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character - Special character allowed: - !@#$%^&*()-_+=?.,:;'"/\|~[]{} - If input contains restricted special char, display inline error "Unsupported special character used." c. Must not match M2U Username d. First character must not be a number.

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | Confirm Password | Yes | Alphanumeric | Textbox X(20) | Input | 1. Must fulfill all validation below, and turn to green icon for condition that met, else remain as grey icon. a. New password & Confirm password match

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 4 | Checklist Icon | N/A | Image | Display | Integration | Display default icon color as grey, if criteria met change respective icon to green | CMS: 1. Retrieve validation icon - grey & green

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- VisualRegression: Requirement includes presentational consistency assertions.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 5 | Validation Text | N/A | Alphanumeric | Display | Integration | Display below: 1. Must contain 8-20 characters 2. Must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character 3. Must not match your username 4. First character must not be a number 5. New passwords match | CMS 1. Retrieve validation text

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | When tap on Confirm button, perform validation below: 1. Mandatory validation 2. Password values validation as per checklist (validation rules is not maintainable) 3. Any other validation on Prohibited values, if failed display inline error - contains Date of Birth, display error "Password cannot contain date of birth" >> Restrict if password contains date (dd),month (mm), and year (yy/yyyy) combination, regardless digits are continous or separated by characters | IAM: 1. Password value validation

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.
