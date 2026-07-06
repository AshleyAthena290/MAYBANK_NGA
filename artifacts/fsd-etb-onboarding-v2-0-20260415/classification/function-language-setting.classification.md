# Test Layer Classification - Function: Language Setting

- Generated At: 2026-07-05T13:38:24.954Z
- Schema Version: 1.0.0
- Total Requirements Classified: 13

## Classification Details

### Requirement: Language Setting

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: Fields

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Select Language title | N/A | Alphanumeric | Display | Integration | 1. Display "Select Language" | CMS 1. Retrieve title content

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Language Option | No | Alphanumeric | Selection | Integration | 1. Retrieve language options: (i) Bahasa Indonesia (ii) English 2. Pre-select based on the selected language option from Onboarding Landing Page. | CMS : 1. Retrieve available language options

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Actions

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Action | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Language Option | Tap anywhere in language option to save language preference, close language selection pop up, navigate back to Onboarding screen and reflect all NGA screen with selected language

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | [x] Button | Upon tapping, close popup without saving changes and navigate back to Onboarding Screen

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | 1. Upon selecting Language Option, store the selected language in device cache. 2. IF customer uninstalls application THEN all device cache storage will be removed. 3. IF onboarding process is not completed, and customer opens app again, language will follows latest language preference (retrieve from device cache)

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: 2 | Applicable to anyone who has installed the app but has not onboarded/binded.

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: 3 | If user changes devices, the system should still retain the selected language preference. Selected language will be applied consistently across all NGA screens.

- Manual: Requirement lacks deterministic signals for direct automation.
