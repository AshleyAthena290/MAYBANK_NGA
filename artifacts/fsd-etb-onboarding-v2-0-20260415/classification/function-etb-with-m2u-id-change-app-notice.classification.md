# Test Layer Classification - Function : ETB with M2U ID - Change App Notice

- Generated At: 2026-07-05T13:38:24.993Z
- Schema Version: 1.0.0
- Total Requirements Classified: 13

## Classification Details

### Requirement: Change App Notice | Change Device Notice

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Notice Icon | N/A | Alphanumeric | Display | Integration | 1. Display icon showing: a. Change App b. Change Device | CMS 1. Retrieve Icon

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Title | N/A | Alphanumeric | Display | Integration | Display Title for notice : 1. Change App - "You are loggin into [NextGen]" 2. Change device - "You are moving to a new device" | CMS 1. Retrieve Title - Chg App - Chg Device.

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | Information | N/A | Alphanumeric | Display | Integration | Display Information for notice : 1. Change App - "You will still be logged into [Maybank2u ID App]." 2. Change device - "Your [NextGen] credentials will be bound to this device." | CMS 1. Retrieve Information for: - Chg App - Chg Device.

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 4 | Registered Device | N/A | Alphanumeric | Display | Integration | 1. Display only for change device notice 2. Display "Your previous device will be logged out" 3. Display previous registered device name and type | CMS 1. Retrieve device icon IAM 1. Retrieve previous registered device name and type

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 5 | Description | N/A | Alphanumeric | Display | Integration | Display description of switching app or device | CMS 1. Retrieve Description - Chg App - Chg Device.

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Actions

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Action | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | [Proceed] Button | Upon tapping, navigate to Nickname Screen

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | [X] Button | Upon tapping, exit & return to Onboarding Landing screen.

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Rules Checking & Notification content: Checking will be performed in following sequence: 1. If user is NGA user and onboard with new device, display Change Device Notice 2. If user is NGA user and onboard with old device, bypass Change Device & Change App Notice 3. If user is RMBP & have not onboarded to NGA before, display Change App Notice | IAM: - User is existing M2U App user, option to proceed or cancel. - Check registered device

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.
