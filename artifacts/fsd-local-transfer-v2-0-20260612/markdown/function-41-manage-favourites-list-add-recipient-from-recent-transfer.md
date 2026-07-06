# Feature: FUNCTION 41: MANAGE favourites LIST - ADD RECIPIENT FROM RECENT TRANSFER

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Add New favourites via recent/past transfer (from ALL tab) - Bene has no nickname.
- Add New favourites via recent/past transfer (from ALL tab) - Bene already has nickname.
- Adding an existing favourites beneficiary to favourites list
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks
## Business Rules
- No. | Description | Integration | Remarks
- 1 | Select Recipient: 1. Listing of beneficiary will be the same as Transfer Landing Page ALL tab. Refer to Trf - Landing Page - Business rules for "Display criteria for ALL list are:" item a to c. 2. Wildcard search will be performed once the user has entered 2 characters. Searching of beneficiaries include fields below: a. Beneficiaries Account Name b. Beneficiaries Nickname c. Beneficiaries Account Number d. Beneficiaries Bank Name. 3. For search result that returns EMPTY: a. System to display "We couldn't find a match for <input data>" | ECLIPSE: 1. Retrieve list of Bene based on search criteria & sorting order specified, with pagination. Search for ALL tab. CMS: - EMPTY image, message & info. - Icon for Account Number Refer to Trf Landing Page.
- 2 | Upon tapping a beneficiary: 1. If selected beneficiary is not in favourites list and has no nickname, navigate to "Add Recipient". User can enter nickname. 2. If selected beneficiary is not in favourites list but has nickname, navigate to "Edit Nickname". User can edit nickname. 3. If selected beneficiary is already a favourites, display toastbar error message "This recipient is already in this list.". For #1 & #2, upon tapping [Next] button, system navigates to S2U. Refer to Manage Fav - Final for Status end screen.
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