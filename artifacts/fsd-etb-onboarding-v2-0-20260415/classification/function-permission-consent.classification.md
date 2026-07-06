# Test Layer Classification - Function: Permission/Consent

- Generated At: 2026-07-05T13:38:24.959Z
- Schema Version: 1.0.0
- Total Requirements Classified: 21

## Classification Details

### Requirement: Permission/Consent

- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Consent: 1. One standard consent title, content & acknowledgement text for all ETB Onboarding (incl CASA & CC, with or without M2U ID). 2. When tap on "I agree & consent" button, consent will be "cached" on version binding with device ID, but will only be saved and stored upon successful S2U setup. - Stored consent will be one data entry per document, single tick mark covers multiple documents (e.g., one tick mark for 4 documents results in 4 stored entries, each tagged with its version and type). | MCM 1. Temporary store customer consent (by doc entry)

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Drop-off: 1. If user drops off after SMS OTP but before S2U setup/verification, on re-launch they will be redirected to the Onboarding Landing screen, followed by the Consent screen. 2. If user drops off after completing S2U verification, Consent screen will be bypassed and user will be redirected directly to the [App Dashboard] - Pre-Login screen.

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | Error Handling: 1. When tap on "I agree & consent" button: (i) Checkbox is unticked, display inline error "Required selection"

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 4 | Applicable to anyone who has installed the app but has not onboarded/binded.

- Manual: Requirement lacks deterministic signals for direct automation.

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

### Requirement: 1 | Consent Title | N/A | Alphanumeric | Display | Integration | 1. Retrieve & display "Select Acknowledgment and Consent" | CMS: 1. Retrieve consent title based on language

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Consent content | N/A | Alphanumeric | Display | Integration | 1. Retrieve & display Acknowledgment content in one scrollable page. 2. For info: To allow jumping to respective section of the content upon clicking on hyperlink in Acknowledgement text, CMS is to maintain section header (anchor) with identifier. | CMS: 1. Retrieve consent content based on language, with identifier for section header

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | Acknowledgement Text | N/A | Alphanumeric | Display | Integration | 1. Retrieve & display Acknowledgement text. 2, Clickable Content for: a. Pernyataaan Penggunaan Data Maybank 2U ID b. Syarat dan Ketentuan Maybank2u ID c. Pemberitahuan Privasi Maybank2u ID. | CMS: 1. Retrieve Ack Text based on language, with clickable hyperlink

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 4 | Acknowledgement Checkbox | Yes | Alphanumeric | Checkbox | Input | 1. Checkbox required, else display inline error "Required selection."

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Actions

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Action | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | [Review] Button | Upon tapping, move to next fold of consent. Remove "Review" button when reach the end of consent page.

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Acknowledgement Checkbox | Upon ticking checkbox, select/deselect checkbox

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: 3 | Acknowledgement Hyperlink | Upon tapping on each of the hyperlink, app to jump to the selected section in Consent content.

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: 4 | [I agree & consent] Button | Upon tapping, Navigate to Login Screen.

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 5 | Download Icon | Upon tapping, display Download Consent drawer

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 6 | [<] Icon | Upon tapping, navigate back to Onboarding Landing screen

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.
