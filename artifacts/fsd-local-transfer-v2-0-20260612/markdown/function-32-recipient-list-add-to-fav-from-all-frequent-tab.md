# Feature: FUNCTION 32: RECIPIENT LIST - ADD TO FAV (FROM ALL, FREQUENT TAB)

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Add To Favourite List
- Permutation of favourite list selections | Error handling - Failed add to favourite | Adding to Fav (Bene already has nickname)
- 4 | Status Image & Status | N/A | Image | Display | Integration | Available status: 1. Added as Favourite 2. Update unsuccessful | CMS: 1. Retrieve image & stautus message for: - Successful - Unsuccessful
- 5 | Date & Timestamp | N/A | Alphanumeric | Display | Local Server | Display date and time.
- 6 | Ref ID | N/A | Alphanumeric | Display | Local Server | Display generated Reference ID.
- Successful
- 7 | Account Holder Name | N/A | Alphanumeric | Display | Local Server | Populate from Beneficiary Listing page.
- 8 | Account Number | N/A | Alphanumeric | Display | Local Server | Populate from Beneficiary Listing page.
- 9 | Recipient Bank | N/A | Alphanumeric | Display | Local Server | Populate from Beneficiary Listing page.
- 10 | Nickname | N/A | Alphanumeric | Display | Local Server | Populate from Beneficiary Listing page (if nickname is available).
- Unsuccessful
- 11 | Transaction Type | N/A | Alphanumeric | Display | Local Server | Display Transaction Type "Add Favourite"
- Actions
- No. | Action | Description | Integration | Remark
- 5 | [Done] button | Upon tapping, system redirects to Transfer Landing Page.
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
## Business Rules
- No. | Description | Integration | Remark
- 1 | 1. Long press or tap on 3 dots behaviour, please refer to [Recipient - Add Note] 2. At Select a favourites list drawer, system pre-select Fav or Custom List which the Bene already exist.
- 2 | 1. Upon tapping Add to favourite, to display a drawer consists of favourite and custom beneficiary category list. a. If the number of tab list is less than maximum allowed, system to display the (+) Create new list button. Otherwise, hide (+) Create new list button b. User is able to select multiple Fav & Custom list to add the recipient to. c. User is able to deselect Fav & Custom list by re-tapping the list until the check mark is removed. Note: For Local Transfer, maximum tab list is 8 (including with All, Frequent, Favourite, Own, and Custom).
- 3 | 1. Upon tapping [Save] button: a. If the beneficiary is added to "Favourites" list, S2U is required. b. If the beneficiary is added to Custom list only, S2U is not required. c. Combination of list selection which includes Favourites, S2U is required. d. If beneficiary is already in Favourites and is now added to Custom list, S2U is not required. e. If none of the Fav or Custom list is selected, display toastbar error message "Please select an option to proceed." 2. For adding to favourites/custom list: a. If action requires S2U, display Status End Screen as a result. b. If action does not require S2U, display toastbar message. For successful addition, system displays "List added." c. Combination of favourite and custom add to list will always result Status End screen as this requires S2U authorisation. 3. For successful attempt: - recipient will be added to the selected Fav/Custom tabs 4. For unsuccessful attempt: - If S2U required and failed to save, display Update unsuccessful screen. - If S2U is not required and failed to save, display toastbar error message "Service temporarily unavailable". Notes: - M2U/RMBP Favourite List will be synced with NGA Favourites list and displayed in NGA. (One way sync from M2U/RMBP to NGA - for Add Favourite only. No sync from M2U/RMBP Delete Fav, and no sync from NGA to M2U/RMBP) | IAM: 1. S2U Auth & status ECLIPSE: Update favourites lis twith the recipient selected
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