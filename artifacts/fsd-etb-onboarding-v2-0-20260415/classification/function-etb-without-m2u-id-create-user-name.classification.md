# Test Layer Classification - Function: ETB without M2U ID - Create User Name

- Generated At: 2026-07-05T13:38:25.033Z
- Schema Version: 1.0.0
- Total Requirements Classified: 13

## Classification Details

### Requirement: Create Username

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Title | N/A | Alphanumeric | Display | Integration | Display "Create your username" | CMS: 1. Retrieve Title

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Username | Yes | Alphanumeric | Textbox X(20) | Input | 1. Allows alphanumeric only 2. Not allowed for space and special character 3. Must fulfill all validation below, and turn to green icon for condition that met, else remain as grey icon. a. Must contain: 8-20 characters b. Must contain at least 1 letter and 1 number

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | Checklist Icon | N/A | Image | Display | Integration | Display default icon color as grey, if criteria met change respective icon to green | CMS: 1. Retrieve validation icon - grey & green

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- VisualRegression: Requirement includes presentational consistency assertions.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 4 | Validation Text | N/A | Alphanumeric | Display | Integration | Display below: 1. Must contain 8-20 characters 2. Must contain at least 1 letter and 1 number | CMS 1. Retrieve validation text

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Actions

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Action | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | [Confirm] Button | Upon tapping and validation passed, navigate to [CASA/CC - w/o M2U ID] create password screen

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | [<] Button | Upon tapping, navigate back to [CASA/CC - w/o M2U ID] Account details screen

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | When tap on Confirm button, perform validation below: 1. Mandatory validation 2. Username values validation as per checklist (validation rules is not maintainable) 3. Username duplication, if failed display snackbar error message - If username already exists, display error "This username isn't available. Please choose another." - Deleted user ID in the last 30 days (<=30) can't be used, display error "This username isn't available. Please choose another." | IAM: 1. Validation on: - Username is existing - Username use deleted user ID <=30 days

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.
