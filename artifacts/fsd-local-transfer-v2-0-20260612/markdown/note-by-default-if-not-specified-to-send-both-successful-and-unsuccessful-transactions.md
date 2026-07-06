# Feature: Note: By default, if not specified, to send both Successful and Unsuccessful transactions .

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Not specified
## Validation Rules
- Not specified
## Business Rules
- Not specified
## APIs
- Not specified
## Dependencies
- Not specified
## Error Messages
- Not specified
## Navigation
- Not specified
## Remarks
- Data Extraction | Supporting Functions
- No. | Module | Transaction Type | FMS | EDW | Rec7 | BI-FAST to Rec7 | SKN & RTGS to Rec 7 | SFTP | Activity Log (MSS/CCPP) | Transction Tracker (for Analytics) | PFM (Money in/ out) | NGBO | CMS
- Next Day Extraction (for previous day transactions) | Same Day Extraction (12 Batches) | Same day (1 batch - evening)
- 1 | Local Transfer | Local Transfer (Immediate) - Interbank (BI-FAST, RTOL, BI-SKN, RTGS) | √ | √ BI-FAST only | √ SKN & RTGS
- 2 | Local Transfer | Local Transfer (Immediate) - Own - Intrabank (IBaaS, VA, within Maybank) | √
- 3 | Local Transfer | Manage Scheduled/Recurring: - Add - Cancel | √
- 4 | Local Transfer | Favourite Maintenance - Add, Edit & Remove - Add & Remove from List | √
- 5 | Local Transfer | Update Transaction Category | √
- 6 | Local Transfer | Update Daily Limit | √
- For scheduled/recurring SKN/RTGS transaction. Current SI requires enhancement to include SKN/RTGS transactions originated from NGA into the existing file. (to Rec7)
- Recurring transactions originating from NGA and executed by the Standing Instruction system need to be reported to FMS by the executing system.

## Prompting Hints
- Keep requirement statements atomic.
- Map validations to positive, negative, and boundary tests.
- Use dependencies and APIs to derive integration scenarios.