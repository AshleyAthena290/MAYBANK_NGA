# Feature: FUNCTION 4: ENTER ADDITIONAL DETAILS

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Enter Recipient Details | [INTERBANK] Additional Details Screen | [INTRABANK] Additional Details Screen
- Each additional details values
- Error Handling
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks
- 1 | Title Header | N/A | Alphanumeric | Display | Integration | Display "Transfer" | CMS 1. Retrieve: - label for header - label for sub-header
- 2 | Sub-header | N/A | Alphanumeric | Display | Integration | Display "Enter additional details" | CMS 1. Retrieve: - label for header - label for sub-header
## Business Rules
- No. | Description | Integration | Remarks
- 1 | Additional Details is applicable based on the "LLD & FOREX Matrix - Additional Details required for conditions below". This screen will be displayed if the conditions are met. 1. Validation limit is on USD, use Counter Rate to perform IDR to FCY conversion. (FOREX calculation rules to be discussed in Overseas Trf & FCY Trf) | ESB - Trapi: 1. Retrieve Foreign Exchange - Counter Rate
## APIs
- Not specified
## Dependencies
- Not specified
## Error Messages
- Error Handling
## Navigation
- Not specified
## Remarks
- Not specified

## Prompting Hints
- Keep requirement statements atomic.
- Map validations to positive, negative, and boundary tests.
- Use dependencies and APIs to derive integration scenarios.