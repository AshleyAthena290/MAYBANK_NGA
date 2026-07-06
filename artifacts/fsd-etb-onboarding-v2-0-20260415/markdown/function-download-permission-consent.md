# Feature: Function: Download Permission/Consent

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Download Permission/Consent
- Fields
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
- 1 | Title | N/A | Alphanumeric | Display | Integration | Retrieve & display "Acknowledgment and consent" | CMS: 1. Retrieve download title based on languauge
- 2 | Document List | N/A | Alphanumeric | Display | Integration | Retrieve & display list of documents available for download individually. a. Pernyataaan Penggunaan Data Maybank2u ID b.Syarat dan Ketentuan Maybank2u ID c. Pemberitahuan Privasi Maybank2u ID | CMS: 1. Retrieve list of documents available for download based on language
- Actions
- No. | Action | Description | Integration | Remark
- 1 | [>] Button | Upon tapping, open the selected Acknowledgment & Consent PDF using in-app PDF viewer. User can choose to save the PDF in the in-app PDF viewer
- 2 | [Done] Button | Upon tapping, close popup and return to consent screen
- 3 | [x] Button | Upon tapping, close popup and return to consent screen
## Validation Rules
- Not specified
## Business Rules
- No. | Description | Integration | Remark
- 1 | Download PDF rules : a. Document will be maintained in PDF, with 2 languages available (Bahasa Indonesia and English). b. Download PDF based on language selected. Info: Download can be performed without requiring access permission (applicable to both iOS and Android). | CMS 1. Retrieve PDF based on language
- 2 | Applicable to anyone who has installed the app but has not onboarded/binded.
## APIs
- Not specified
## Dependencies
- Not specified
## Error Messages
- Not specified
## Navigation
- Not specified
## Remarks
- Not specified

## Prompting Hints
- Keep requirement statements atomic.
- Map validations to positive, negative, and boundary tests.
- Use dependencies and APIs to derive integration scenarios.