# Feature: FUNCTION 40: MANAGE FAVOURITE LIST - ADD RECIPIENT FROM ACCOUNT NUMBER

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Add New Favourites via entering account number | Add Favourite - enter details | Tooltip tapped
- 1 | [X] icon | Close drawer and return to Manage Fav - Detail Group List
- 2 | [<] icon | Upon tapping [<] icon, system to navigate back to Transfer Landing Page
- 3 | Nickname tooltip | Upon tapping nickname tooltip, system to display the Nickname information drawer.
- 4 | [Next] button | Upon tapping [Next] button, [A&A] Secure2U will be triggered for authorisation.
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks
## Business Rules
- No. | Description | Integration | Remarks
- 1 | Upon tapping [Next] button, system to perform: 1. Mandatory checking. If field is empty, system displays inline error message "Required field." 2. If validation passed, trigger S2U authorisation. Refer to Manage Fav - Final for Status end screen. 3. For successful creation, a beneficiary will be created and populated into the Landing Page with below format: [Nickname] - will be displayed in Beneficiary Name field (but this is not stored as Beneficiary name in Database) [Nickname] [Account Number] . [Bank Name] Note: Once user had a successful transaction to a beneficiary (added by account number) and registered name either retrieved from BI-FAST/RTOL inquiry OR manually added during SKN/RTGS transfer, the first line Beneficiary Name will be replaced by Beneficiary Registered Name,and this will be saved in Favourite. (Refer to Input Amount - Beneficiary Name, and Confirmation Business Rules) | ECLIPSE: 1. Store newly created Favourites with below: - Nickname - Account No - Bene Bank
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