# Test Layer Classification - Function: Download Permission/Consent

- Generated At: 2026-07-05T13:38:24.968Z
- Schema Version: 1.0.0
- Total Requirements Classified: 13

## Classification Details

### Requirement: Download Permission/Consent

- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Fields

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Title | N/A | Alphanumeric | Display | Integration | Retrieve & display "Acknowledgment and consent" | CMS: 1. Retrieve download title based on languauge

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Document List | N/A | Alphanumeric | Display | Integration | Retrieve & display list of documents available for download individually. a. Pernyataaan Penggunaan Data Maybank2u ID b.Syarat dan Ketentuan Maybank2u ID c. Pemberitahuan Privasi Maybank2u ID | CMS: 1. Retrieve list of documents available for download based on language

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Actions

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Action | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | [>] Button | Upon tapping, open the selected Acknowledgment & Consent PDF using in-app PDF viewer. User can choose to save the PDF in the in-app PDF viewer

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | [Done] Button | Upon tapping, close popup and return to consent screen

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | [x] Button | Upon tapping, close popup and return to consent screen

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Download PDF rules : a. Document will be maintained in PDF, with 2 languages available (Bahasa Indonesia and English). b. Download PDF based on language selected. Info: Download can be performed without requiring access permission (applicable to both iOS and Android). | CMS 1. Retrieve PDF based on language

- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Applicable to anyone who has installed the app but has not onboarded/binded.

- Manual: Requirement lacks deterministic signals for direct automation.
