# Feature: FUNCTION 44: MANAGE FAVOURITE LIST - EDIT / REMOVE GROUP LIST

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Manage Favourites - From Settings (Remove from Favourites list)
- Manage Custom List - From Settings (Edit List name)
- Manage Custom List - From Settings (Remove recipient from List) | Manage Custom List - From Settings (Remove List)
- Error handling
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks
- 1 | Title Header | N/A | Alphanumeric | Display | Integration | 1. Display "Favourites" for Favourite list. 2. Display "<User defined list> for custom list.
- 2 | Description | N/A | Alphanumeric | Display | Integration | Refer to Tab Manage Fav - Detail group
- 3 | Recipient List | N/A | Alphanumeric | Display | Integration | Refer to Tab Manage Fav - Detail group
- 4 | Recipient Name | N/A | Alphanumeric | Display | Integration | Refer to Tab Manage Fav - Detail group
- 5 | Recipient Nickname | N/A | Alphanumeric | Display | Integration | Refer to Tab Manage Fav - Detail group
- 6 | Recipient Account Number | N/A | Numeric | Display | Integration | Refer to Tab Manage Fav - Detail group
- 7 | Recipient Bank Name | N/A | Alphanumeric | Display | Integration | Refer to Tab Manage Fav - Detail group
## Business Rules
- No. | Description | Integration | Remarks
- 1 | For deletion of recipient, upon S2U authorisation, navigate to Status end screen: a. Recipient removed successfully - navigate to Recipient Removed screen. b. Update unsuccessful - navigate to Update Unsuccessful screen, no change. | IAM: 1. S2U Auth & status ECLIPSE: - Delete selected recipient from Fav list
## APIs
- Not specified
## Dependencies
- Not specified
## Error Messages
- Error handling
## Navigation
- Not specified
## Remarks
- Not specified

## Prompting Hints
- Keep requirement statements atomic.
- Map validations to positive, negative, and boundary tests.
- Use dependencies and APIs to derive integration scenarios.