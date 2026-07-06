# Feature: FUNCTION 31: RECIPIENT LIST - EDIT & DELETE NICKNAME (NOTE)

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Not specified
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
## Business Rules
- No. | Description | Integration | Remark
- 1 | Upon long pressing on the beneficiary list OR tap bene 3-dots button, if beneficiary has been set with a nickname, system to display [Edit Nickname].
- 2 | Upon entering Nickname: 1. If user enter OR paste other than allowable characters, display inline error message "only alphabets, digits, and spaces are allowed." 2. If user cleared the nickname with empty value, [Save] button will be changed to [Remove]. 3. If user enter valid value, proceed to save and once successful, redirect user to the last active tab and display a successful toast message "Nickname updated". 4. If user tap on [Remove], delete the nickname and once successful, redirect user to the last active tab and display a successful toast message "Nickname removed". 5. Nickname update will be reflected across the other tabs (Frequent, Fav or Custom) i.e. 1 beneficiary will only have 1 nickname. 6. For unsuccessful update or removal, system to redirect user to the last active tab and display a successful toast message "Service Temporary unavailable". | ECLIPSE: 1. Update or delete nickname
## APIs
- Not specified
## Dependencies
- Not specified
## Error Messages
- Not specified
## Navigation
- Not specified
## Remarks
- JIRA ID | ND-165
- UST No. | Consolidated Backlog | Tab TRANSFER |Row 31
- EPIC | Recipient List
- Title | Recipient List - Edit & Delete note

## Prompting Hints
- Keep requirement statements atomic.
- Map validations to positive, negative, and boundary tests.
- Use dependencies and APIs to derive integration scenarios.