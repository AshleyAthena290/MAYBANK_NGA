# Feature: FUNCTION 39: MANAGE FAVOURITE LIST - DETAIL GROUP LIST

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Manage Favourites List - Detail Group list | Manage Favourites List - Detail Group list (Empty) | Manage Custom List - Detail Group List
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks
## Business Rules
- No. | Description | Integration | Remarks
- 1 | Favourites Listing: 1. Display beneficiaries in Favouritess, sorted in ascending order (A-Z, 0-9) in the below order: - Beneficiary Name - Beneficiary Bank Name - Account Number 2. If the recipient list is not empty, [Edit] option will be displayed. Otherwise hide. 3. Lazy load is available | ECLIPSE: 1. Retrieve Fav beneficiary list with sorting order specified, & pagination.
- 2 | Custom Listing: 1. Display beneficiaries in selected Custom list, sorted in ascending order (A-Z, 0-9) in the below order: - Beneficiary Name - Beneficiary Bank Name - Account Number 2. If the recipient list is not empty, [Edit] option will be displayed. Otherwise hide. 3. Lazy load is available | ECLIPSE: 1. Retrieve Custom list with sorting order specified, & pagination.
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