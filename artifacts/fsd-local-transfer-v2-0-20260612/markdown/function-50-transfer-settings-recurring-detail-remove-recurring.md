# Feature: FUNCTION 50: TRANSFER SETTINGS - RECURRING DETAIL (REMOVE RECURRING)

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Cancel Scheduled Transaction | Scheduled Transaction close to scheduled date. (Unable to cancel) | Failed /Error scheduled transaction cancellation
- Cancel Recurring Transaction | Cancel Recurring Transaction close to scheduled date. | Failed /Error for recurring transaction cancellation
- 14 | Status Image & Status | N/A | Image | Display | Integration | 1. Display Image based on status: a. Successful b. Unsuccessful 2. Display transaction status | CMS 1. Retrieve Image & status: - successful - unsuccessful
- 15 | Transaction Date & Timestamp | N/A | Alphanumeric | Display | Local Server | Display transaction date and time.
- 16 | Ref ID | N/A | Alphanumeric | Display | Local Server | Display generated Reference ID.
- Recipient Info (Applicable ONLY for successful)
- 17 | Account Holder Name | N/A | Alphanumeric | Display | Local Server | Populate from previous screen
- 18 | Account Number | N/A | Numeric | Display | Local Server | Populate from previous screen
- 19 | Recipient Bank | N/A | Alphanumeric | Display | Local Server | Populate from previous screen
- Transaction Type (Applicable ONLY for unsuccessful)
- 20 | Transaction Type | N/A | Alphanumeric | Display | Local Server | Display either: 1. Manage Scheduled Transfer. 2. Manage Recurring Transfer.
- Actions
- No. | Action | Description | Integration | Remarks
- 6 | [Done] button | Upon tapping [Done] button, navigate to Scheduled/Recurring Transfer Dashboard.
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks
## Business Rules
- No. | Description | Integration | Remarks
- 1 | Cancellation of Scheduled/Recurring Transaction: 1. Upon tapping [Cancel] at Scheduled/Recurring transaction details, a. IF Transaction Frequency = Just Once. - System to prompt confirmation message "Cancel Scheduled Transfer?" with message"The scheduled transfer to this recipient will be stopped and no longer processed. You need to start a new transfer to set it up again." b. IF Recurring, i.e. Transaction Frequency = Weekly or Monthly. - System to prompt confirmation message "Cancel recurring transfer?" with message "Any recurring transfer to this recipient will be stopped and no longer processed. You need to start a new transfer to set it up again." 2. Upon tapping [Cancel] at Scheduled/Recurring transaction details, and is closer to scheduled date, a. IF Transaction Frequency = Just Once. - [Cancel] buttton is hidden. System displays blue box notes "This transfer is already being processed." b. IF Recurring, i.e. Transaction Frequency = Weekly - System to prompt confirmation message "Cancel recurring transfer?" with message "Your transfer for this week is already being processed. Cancelling will only stop future recurring transfers. You may start a new pament to set it up again." c. IF Recurring, i.e. Transaction Frequency = Monthly - System to prompt confirmation message "Cancel recurring transfer?" with message "Your transfer for this month is already being processed. Cancelling will only stop future recurring transfers. You may start a new pament to set it up again." 3. Upon tapping [Cancel] button at Confirmation message, system to navigate to S2U authorisation screen. 4. Upon successful S2U authorisation, system will canel & remove upcoming scheduled transaction or recurring transactions instruction (remove the series), navigate to Status End Screen. a. If successful, display "Scheduled transfer cancelled" or "Recurring transfer cancelled". b. If failed, display "Update unsuccessful" | ESB - Standing Instruction: 1. To send cancellation request for selected instruction. IAM: 1. S2U Auth & status CMS 1. Retrieve blue box notes for scheduled transaction close to scheduled date.
- 2 | Business rule for closer to date (from NGBO), applies to both Scheduled & Recurring: a. Interbank (i) BI-FAST (T- X days, Cut Off Time: XX) (ii) RTOL (T- X days, Cut Off Time: XX) (iii) BI-SKN (T- X days, Cut Off Time: XX) (iv) RTGS (T- X days, Cut Off Time: XX) b. Intrabank (T- X days, Cut Off Time: XX) c. Own Account Transfer (T- X days, Cut Off Time: XX) Cut off time to be provided during DDD (based on batch processing time in SI). | NGBO: 1. Cut off Days & Time for "Closer to date" - cancellation of scheduled & recurring instruction by Transfer Mode: - Interbank - BI-FAST, RTOL, BI-SKN, RTGS - Intrabank - Own
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