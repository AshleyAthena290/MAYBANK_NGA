# Feature: FUNCTION 34: RECIPIENT LIST - REMOVE FROM ALL TAB

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Beneficiary removal from ALL tab (will also remove from all other tabs) | Beneficiary removal from Frequent tab (only remove from Freq) | Failed Removal error screen (applicable for s2u)
- Beneficiary removal from Favourite tab | Beneficiary removal from Custom tab
- 4 | Refer to Add to Favourite Tab
- Actions
- No. | Action | Description | Integration | Remark
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
## Business Rules
- No. | Description | Integration | Remark
- 1 | 1. Removing Beneficiary from ALL tab: a. Remove the selected beneficiary from All, Frequent, Favourite, and Custom lists where selected Bene exist. 2. Removing Beneficiary from FREQUENT tab: a. Remove the beneficiary from Frequent list only. b. The beneficiary will be removed and the transaction count reset to zero. The beneficiary will be re-added into Frequent list once the user transfers to the same beneficiary again and meets the required min transaction count threshold (2 times). c. Only transactions made after removal are counted for re-qualification to be displayed in Frequent. 3. Removing Beneficiary from FAVOURITES tab: a. Remove the beneficiary from Favourites list only. 4. Removing Beneficiary from a CUSTOM tab: a. Remove the beneficiary from the selected custom list only. 5. Upon removal, system displays S2U authorisation screen. a. For successful removal, display "recipient removed" screen. b. For unsuccessful removal, display "update unsucceessfu" screen. | IAM: 1. S2U Auth status ECLIPSE: 1. Update favourite list(s) with the recipient removed. 2. Update Frequent list with the recipient removed 3. Update favourite list with the recipient removed. 4. Update Custom list with the recipient removed.
- 2 | Removal of recipient from these list i.e. All, Frequent, Favourite and Custom lists does not affect any scheduled or recurring transactions to the recipient.
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