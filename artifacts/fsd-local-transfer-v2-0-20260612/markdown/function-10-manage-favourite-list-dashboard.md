# Feature: FUNCTION 10: MANAGE FAVOURITE LIST - DASHBOARD

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Navigate to Manage Favourite (Entry Point 1) | Manage list - Dashboard (contain values) | Manage list - Dashboard (empty)
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks
- 1 | Manage lists Title | N/A | Alphanumeric | Display | Integration | Display "Manage lists" | CMS: - retrieve "Manage lists" title
- 2 | Description | N/A | Alphanumeric | Display | Integration | DIsplay manage favourite list description | CMS: 1. To retrieve Manage lists description
- 3 | Local/Overseas Tab | N/A | Alphanumeric | Tab | Integration | Default: Local. Option to switch between local or overseas transfer
- 4 | Favourite Group List | N/A | Alphanumeric | Button | Integration | Display in below order: 1. Favourites 2. Custom list, sort by older to newer creation date | ECLIPSE 1. To retrieve available Fav & Custom lists for local 2. To retrieve recipient count per Fav list for local
- 5 | Recipient Count per Group | N/A | Numeric | Display | Integration | Populated based on number of recipients in each favourite list. | ECLIPSE 1. To retrieve available Fav & Custom lists for local 2. To retrieve recipient count per Fav list for local
- Actions
- No. | Action | Description | Integration | Remarks
- 1 | [<] icon | Navigate back to Transfer Landing Page.
- 2 | Local/Overseas Tab | Navigate to Favourites List based on selected local/overseas transfer tab.
- 3 | Favourite List | Navigate to Favourite List Detail screen.
- 4 | (+) Create New List | Navigate to Create New List screen.
## Business Rules
- No. | Description | Integration | Remarks
- 1 | IF the number of tab List is less than 8, (+) Create New List button will be available. Otherwise, button is disabled.
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