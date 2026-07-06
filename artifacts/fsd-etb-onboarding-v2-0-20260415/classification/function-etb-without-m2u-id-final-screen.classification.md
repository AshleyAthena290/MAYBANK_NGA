# Test Layer Classification - Function: ETB without M2U ID - Final Screen

- Generated At: 2026-07-05T13:38:25.059Z
- Schema Version: 1.0.0
- Total Requirements Classified: 17

## Classification Details

### Requirement: JIRA ID | ND-63, ND-79

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: UST No | Consolidated Backlog | Tab ETB Onboarding | Row 17 | Row 33

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: EPIC | ETB Onboarding - CASA User without M2U ID - Same Device |ETB Onboarding - Credit Card User without M2U ID - Same Device

- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Title | Final Screen

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Without M2U ID - Final Screen | With M2U ID - Final Screen: Setup Primary Account or Biometric fails

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Status Message | N/A | Alphanumeric | Display | Integration | Display status message: 1. Successful application: "Secure2u activation in progress" 2. Biometric or Primary account fails: "You're logged in!" | CMS 1. Retrieve Successful Msg

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Status Icon/GIF | N/A | Alphanumeric | Display | Integration | Display status icon/gif | CMS 1. Retrieve status icon

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | Description | N/A | Alphanumeric | Display | Integration | Display description: 1. Successful application: "Full account access will only be available in [Remaining cool-off countdown]" 2. Biometric or Primary account fails: "However, your primary account and/or biometrics were not set up. You may update at Settings anytime." | CMS 1. Retrieve description IAM 1. Retrieve cooling off completion time

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Actions

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Action | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | [Explore the app] Button | Upon tapping, navigate to App Dashboard

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | [Go to Dashboard] Button | Upon tapping, navigate to App dashboard

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Upon successful biometric setup or when the “Setup Later” button is selected: 1. Store selected primary account 2. Store biometric information (only if user setup biometric) 3. Set flag on/off for S2U in MDIP-Security Engine 4. Send notification to all platform: Push notification, email, and SMS - Cooling off notification will be triggered when cooling off end 5. Send data to EDW (by batch) | IAM: 1. Store biometric information (A&A) ECLIPSE: 1. Store primary account (Main) MDIP/Security Engine: 1. On/Off Flag for S2U MBPNS: 1. Push, Email & SMS Notification for: - Cooling off ends EDW 1. Send data to EDW by batch

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Requirement for IAM: 1. Option to uplift cooling off period

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: 3 | If Primary Account or Biometric storing fails: 1. Treat as successful onboarding 2. Upon tapping [Go to Dashboard] button, Navigate to [App Dashboard] - Primary Account default storing will be triggered in App Dashboard (Refer to [App Dashboard] - Main Display Amt) - Biometric setup can be performed later in [Setting] - Security Dashboard

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.
