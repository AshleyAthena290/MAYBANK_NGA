# Feature: FUNCTION 43: MANAGE favourites LIST - FINAL SCREEN

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- JIRA ID | ND-177
- UST No. | Consolidated Backlog | Tab TRANSFER |Row 43
- EPIC | Manage favourites List
- Title | Manage favourites List - Final screen
- Add New favourites Final Screen (successful) - via acc number & via past transfer | Edit favourites nickname Final Screen (successful) - via past transfer | Add New favourites Final Screen (Failed) | Edit favourites nickname Final Screen (Failed)
- 1 | Status Image & Status | N/A | Image | Display | Integration | Available status: 1. Added as favourites 2. Update successful 3. Update unsuccessful | CMS: 1. Retrieve image & stautus message for: - Successful - Unsuccessful
- 2 | Date & Timestamp | N/A | Alphanumeric | Display | Local Server | Display date and time.
- 3 | Ref ID | N/A | Alphanumeric | Display | Local Server | Display generated Reference ID.
- 4 | Info Banner | N/A | Alphanumeric | Display | Integration | Blue box information is only applicable for: 1. Successful Add to Favourite via Account Number. It is not applicable for: 1. Successful “Add to Favourite” via Past Transfer. 2. Unsuccessful “Add to Favourite” attempts. | CMS 1. Retrieve blue box information notes.
- Successful
- 5 | Account Holder Name | N/A | Alphanumeric | Display | Local Server | Populate from Select Recipient page.
- 6 | Account Number | N/A | Alphanumeric | Display | Local Server | Populate from Select Recipient page.
- 7 | Recipient Bank | N/A | Alphanumeric | Display | Local Server | Populate from Select Recipient page.
- 8 | Nickname | N/A | Alphanumeric | Display | Local Server | Populate from Select Recipient page.
- Unsuccessful
- 9 | Transaction Type | N/A | Alphanumeric | Display | Local Server | Display Transaction Type "Add favourites"
- Actions
- No. | Action | Description | Integration | Remarks
- 1 | [Done] button | Upon tapping [Done] button, system to navigate back to Transfer Landing Page or Setting's Pay & Transfer favourites page (based on entry points). Refer to Manage Fav - Dashboard.
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks
## Business Rules
- No. | Description | Integration | Remarks
- 1 | Upon Confirm, below are the possible status: a. Added as favourites - successfully adding to favourites via account number OR past transfer. b. Update successful - successfully edit favourites nickname. c. Update unsuccessful - failed in adding a favourites or editing a favourites's nickname. For successful adding to favourites, beneficiary will be populated under Favourites list. | IAM: 1. S2U Auth status ECLIPSE: 1. Add favourites bene
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