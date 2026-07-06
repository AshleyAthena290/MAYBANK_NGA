# Feature: FUNCTION 33: RECIPIENT LIST - EDIT TO FAV (FROM ALL, FAVOURITE, CUSTOM TAB)

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Edit Favourite List
- Permutation of favourite list selections
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
## Business Rules
- No. | Description | Integration | Remark
- 1 | 1. Upon tapping [Save] button, system to check: a. If the beneficiary is either added to or removed from "favourite" list, S2U is required. b. If action does not require S2U and for successful attempt, system displays a toastbar message "List updated." c. If none of the Fav or Custom list is selected, render the [Save] button to [Remove] button, it will trigger Remove function. Refer to Recipient - Add to Fav Business Rules for status screen behaviour. | IAM: 1. S2U Auth status ECLIPSE: Update favourite list(s) with the recipient selected
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