# Feature: ESB:
1. Interbank Account Inquiry based on the bene account number, inquiry via:
- BIFAST
- RTOL

NGBO (P&T):
1. FOREX Trxn - USD threshold (10K) which calls for Additonal Details.

ECLIPSE/ESB??
1. Retrieve total FOREX transaction amount in USD per month.

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- ESB: 1. Interbank Account Inquiry based on the bene account number, inquiry via: - BIFAST - RTOL NGBO (P&T): 1. FOREX Trxn - USD threshold (10K) which calls for Additonal Details. ECLIPSE/ESB?? 1. Retrieve total FOREX transaction amount in USD per month.
- Table 1 - Transfer entry point and Interbank transfer mode that derive Recipient Name Display
- No | Transfer initiation | Source | Perform Bene Inq (Input Account Screen) | BI-FAST/RTOL Online? | Transfer Mode | DETAILS screen - Transfer To - Recipient Name | Display Account Holder/Recipient Name In Details Screen | Reason
- 1 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | BI-FAST | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 2 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | RTOL | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 3 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | SKN | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 4 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | SKN | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 5 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | RTGS | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 6 | Favourite List (Without Bene Name) | Added via Acct Number | N | Y | BI-FAST/RTOL | Populate from Favourite - Nickname | Retrieve Bene Name via Bene Inquiry when tap [Next]. To populate Bene Name retrieved from account inquiry in the Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 7 | Favourite List (Without Bene Name) | Added via Acct Number | N | N/A | SKN/RTGS | Populate from Favourite - Nickname | Y (user input) | To populate Bene Name (manually entered) in Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 8 | New Open Transfer | - | Y | BI-FAST/RTOL | Populate Bene Name retrieved from account inquiry | N | Retrieve Bene Name via Bene Inquiry
- 9 | New Open Transfer | - | Y | SKN/RTGS | Populate Bene Name retrieved from account inquiry | N | Retrieve Bene Name via Bene Inquiry To populate Bene Name in Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 10 | New Open Transfer | - | N | SKN/RTGS | Display empty name. | Y (user input) | To populate Bene Name (manually entered) in Confirmation Page > Transfer To section.
## UI Elements
- [INTERBANK] BI-FAST
- [INTERBANK] RTOL (IDR to IDR)
- [INTERBANK] BI-SKN (IDR to IDR) - New Open Transaction, change transfer mode to BI-SKN (Name acquired from BI-FAST/RTOL Inquiry). - From Bene List, with previous transfer mode was BI-SKN. | [INTERBANK] BI-SKN (IDR to IDR) - From Bene List, with previous transfer mode is BI-FAST and RTOL are offline. | [INTERBANK] BI-SKN (IDR to IDR) - New Open Transaction, BI-FAST/RTOL offline
- [INTERBANK] RTGS (IDR to IDR) - New Open Transaction, change transfer mode to RTGS (Name acquired from BI-FAST/RTOL Inquiry). - From Bene List, with previous transfer mode was RTGS. | [INTERBANK] RTGS (IDR to IDR) - From Bene List, with previous transfer mode is BI-FAST and RTOL are offline. | [INTERBANK] RTGS (IDR to IDR) - New Open Transaction, BI-FAST/RTOL offline
- [INTRABANK] IDR to IDR; IDR to FCY; FCY to same FCY; FCY to xFCY.
- [INTERBANK] Transfer Mode is offline | Initiate New Transfer (Enter account number) - Transfer Mode is offline. | [INTERBANK] Select Transfer Mode Drawer - Transfer Mode is Offline
- ESB: 1. Interbank Account Inquiry based on the bene account number, inquiry via: - BIFAST - RTOL NGBO (P&T): 1. FOREX Trxn - USD threshold (10K) which calls for Additonal Details. ECLIPSE/ESB?? 1. Retrieve total FOREX transaction amount in USD per month.
- Table 1 - Transfer entry point and Interbank transfer mode that derive Recipient Name Display
- No | Transfer initiation | Source | Perform Bene Inq (Input Account Screen) | BI-FAST/RTOL Online? | Transfer Mode | DETAILS screen - Transfer To - Recipient Name | Display Account Holder/Recipient Name In Details Screen | Reason
- 1 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | BI-FAST | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 2 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | RTOL | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 3 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | SKN | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 4 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | SKN | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 5 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | RTGS | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 6 | Favourite List (Without Bene Name) | Added via Acct Number | N | Y | BI-FAST/RTOL | Populate from Favourite - Nickname | Retrieve Bene Name via Bene Inquiry when tap [Next]. To populate Bene Name retrieved from account inquiry in the Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 7 | Favourite List (Without Bene Name) | Added via Acct Number | N | N/A | SKN/RTGS | Populate from Favourite - Nickname | Y (user input) | To populate Bene Name (manually entered) in Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 8 | New Open Transfer | - | Y | BI-FAST/RTOL | Populate Bene Name retrieved from account inquiry | N | Retrieve Bene Name via Bene Inquiry
- 9 | New Open Transfer | - | Y | SKN/RTGS | Populate Bene Name retrieved from account inquiry | N | Retrieve Bene Name via Bene Inquiry To populate Bene Name in Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 10 | New Open Transfer | - | N | SKN/RTGS | Display empty name. | Y (user input) | To populate Bene Name (manually entered) in Confirmation Page > Transfer To section.
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
- ESB: 1. Interbank Account Inquiry based on the bene account number, inquiry via: - BIFAST - RTOL NGBO (P&T): 1. FOREX Trxn - USD threshold (10K) which calls for Additonal Details. ECLIPSE/ESB?? 1. Retrieve total FOREX transaction amount in USD per month.
- Table 1 - Transfer entry point and Interbank transfer mode that derive Recipient Name Display
- No | Transfer initiation | Source | Perform Bene Inq (Input Account Screen) | BI-FAST/RTOL Online? | Transfer Mode | DETAILS screen - Transfer To - Recipient Name | Display Account Holder/Recipient Name In Details Screen | Reason
- 1 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | BI-FAST | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 2 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | RTOL | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 3 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | SKN | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 4 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | SKN | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 5 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | RTGS | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 6 | Favourite List (Without Bene Name) | Added via Acct Number | N | Y | BI-FAST/RTOL | Populate from Favourite - Nickname | Retrieve Bene Name via Bene Inquiry when tap [Next]. To populate Bene Name retrieved from account inquiry in the Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 7 | Favourite List (Without Bene Name) | Added via Acct Number | N | N/A | SKN/RTGS | Populate from Favourite - Nickname | Y (user input) | To populate Bene Name (manually entered) in Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 8 | New Open Transfer | - | Y | BI-FAST/RTOL | Populate Bene Name retrieved from account inquiry | N | Retrieve Bene Name via Bene Inquiry
- 9 | New Open Transfer | - | Y | SKN/RTGS | Populate Bene Name retrieved from account inquiry | N | Retrieve Bene Name via Bene Inquiry To populate Bene Name in Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 10 | New Open Transfer | - | N | SKN/RTGS | Display empty name. | Y (user input) | To populate Bene Name (manually entered) in Confirmation Page > Transfer To section.
## Business Rules
- No. | Description | Integration | Remarks
- 1 | Upon page load: 1. Transfer Mode: a. For New Transfer (i) Transfer Mode will be populated from previous screen ( Input Account No). (ii) If the Transfer Mode is offline, then default to first available Transfer Mode based on the Transfer Mode sequence, and display warning message "<Default Transfer Mode> is temporarily offline. Please review the transfer mode before continuing." b. For Bene Listing (i) Transfer Mode will be populated from previous screen ( Input Amount) (ii)If the Transfer Mode is offline, then default to first available Transfer Mode based on the Transfer Mode sequence, and display Info Message "The transfer mode previously selected for this recipient is temporarily offline. Please review before continuing." c. Change Transfer Mode (i) Switching the transfer mode resets the form & previously entered values, and render fields based on the newly selected transfer mode. For FCY to IDR: 1. Default to BI-SKN as it is the only transfer mode allowed. Other options will be disabled. | NGBO (P&T Ownership): 1. Retrieve transfer modes with availlability & sequence/priority order based on selected Bene Bank.
## APIs
- ESB: 1. Interbank Account Inquiry based on the bene account number, inquiry via: - BIFAST - RTOL NGBO (P&T): 1. FOREX Trxn - USD threshold (10K) which calls for Additonal Details. ECLIPSE/ESB?? 1. Retrieve total FOREX transaction amount in USD per month.
- Table 1 - Transfer entry point and Interbank transfer mode that derive Recipient Name Display
- No | Transfer initiation | Source | Perform Bene Inq (Input Account Screen) | BI-FAST/RTOL Online? | Transfer Mode | DETAILS screen - Transfer To - Recipient Name | Display Account Holder/Recipient Name In Details Screen | Reason
- 1 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | BI-FAST | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 2 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | RTOL | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 3 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | SKN | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 4 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | SKN | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 5 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | RTGS | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 6 | Favourite List (Without Bene Name) | Added via Acct Number | N | Y | BI-FAST/RTOL | Populate from Favourite - Nickname | Retrieve Bene Name via Bene Inquiry when tap [Next]. To populate Bene Name retrieved from account inquiry in the Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 7 | Favourite List (Without Bene Name) | Added via Acct Number | N | N/A | SKN/RTGS | Populate from Favourite - Nickname | Y (user input) | To populate Bene Name (manually entered) in Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 8 | New Open Transfer | - | Y | BI-FAST/RTOL | Populate Bene Name retrieved from account inquiry | N | Retrieve Bene Name via Bene Inquiry
- 9 | New Open Transfer | - | Y | SKN/RTGS | Populate Bene Name retrieved from account inquiry | N | Retrieve Bene Name via Bene Inquiry To populate Bene Name in Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 10 | New Open Transfer | - | N | SKN/RTGS | Display empty name. | Y (user input) | To populate Bene Name (manually entered) in Confirmation Page > Transfer To section.
## Dependencies
- Not specified
## Error Messages
- ESB: 1. Interbank Account Inquiry based on the bene account number, inquiry via: - BIFAST - RTOL NGBO (P&T): 1. FOREX Trxn - USD threshold (10K) which calls for Additonal Details. ECLIPSE/ESB?? 1. Retrieve total FOREX transaction amount in USD per month.
- Table 1 - Transfer entry point and Interbank transfer mode that derive Recipient Name Display
- No | Transfer initiation | Source | Perform Bene Inq (Input Account Screen) | BI-FAST/RTOL Online? | Transfer Mode | DETAILS screen - Transfer To - Recipient Name | Display Account Holder/Recipient Name In Details Screen | Reason
- 1 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | BI-FAST | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 2 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | RTOL | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 3 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | SKN | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 4 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | SKN | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 5 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | RTGS | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 6 | Favourite List (Without Bene Name) | Added via Acct Number | N | Y | BI-FAST/RTOL | Populate from Favourite - Nickname | Retrieve Bene Name via Bene Inquiry when tap [Next]. To populate Bene Name retrieved from account inquiry in the Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 7 | Favourite List (Without Bene Name) | Added via Acct Number | N | N/A | SKN/RTGS | Populate from Favourite - Nickname | Y (user input) | To populate Bene Name (manually entered) in Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 8 | New Open Transfer | - | Y | BI-FAST/RTOL | Populate Bene Name retrieved from account inquiry | N | Retrieve Bene Name via Bene Inquiry
- 9 | New Open Transfer | - | Y | SKN/RTGS | Populate Bene Name retrieved from account inquiry | N | Retrieve Bene Name via Bene Inquiry To populate Bene Name in Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 10 | New Open Transfer | - | N | SKN/RTGS | Display empty name. | Y (user input) | To populate Bene Name (manually entered) in Confirmation Page > Transfer To section.
## Navigation
- ESB: 1. Interbank Account Inquiry based on the bene account number, inquiry via: - BIFAST - RTOL NGBO (P&T): 1. FOREX Trxn - USD threshold (10K) which calls for Additonal Details. ECLIPSE/ESB?? 1. Retrieve total FOREX transaction amount in USD per month.
- Table 1 - Transfer entry point and Interbank transfer mode that derive Recipient Name Display
- No | Transfer initiation | Source | Perform Bene Inq (Input Account Screen) | BI-FAST/RTOL Online? | Transfer Mode | DETAILS screen - Transfer To - Recipient Name | Display Account Holder/Recipient Name In Details Screen | Reason
- 1 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | BI-FAST | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 2 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | RTOL | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 3 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | SKN | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 4 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | SKN | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 5 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | RTGS | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 6 | Favourite List (Without Bene Name) | Added via Acct Number | N | Y | BI-FAST/RTOL | Populate from Favourite - Nickname | Retrieve Bene Name via Bene Inquiry when tap [Next]. To populate Bene Name retrieved from account inquiry in the Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 7 | Favourite List (Without Bene Name) | Added via Acct Number | N | N/A | SKN/RTGS | Populate from Favourite - Nickname | Y (user input) | To populate Bene Name (manually entered) in Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 8 | New Open Transfer | - | Y | BI-FAST/RTOL | Populate Bene Name retrieved from account inquiry | N | Retrieve Bene Name via Bene Inquiry
- 9 | New Open Transfer | - | Y | SKN/RTGS | Populate Bene Name retrieved from account inquiry | N | Retrieve Bene Name via Bene Inquiry To populate Bene Name in Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 10 | New Open Transfer | - | N | SKN/RTGS | Display empty name. | Y (user input) | To populate Bene Name (manually entered) in Confirmation Page > Transfer To section.
## Remarks
- ESB: 1. Interbank Account Inquiry based on the bene account number, inquiry via: - BIFAST - RTOL NGBO (P&T): 1. FOREX Trxn - USD threshold (10K) which calls for Additonal Details. ECLIPSE/ESB?? 1. Retrieve total FOREX transaction amount in USD per month.
- Table 1 - Transfer entry point and Interbank transfer mode that derive Recipient Name Display
- No | Transfer initiation | Source | Perform Bene Inq (Input Account Screen) | BI-FAST/RTOL Online? | Transfer Mode | DETAILS screen - Transfer To - Recipient Name | Display Account Holder/Recipient Name In Details Screen | Reason
- 1 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | BI-FAST | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 2 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | RTOL | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 3 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | SKN | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 4 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | SKN | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 5 | Favourite List (with Bene Name) | Added via Recent Transfer | N | N/A | RTGS | Populate from Favourite - Bene name | Bene name has been verified in previous transfer
- 6 | Favourite List (Without Bene Name) | Added via Acct Number | N | Y | BI-FAST/RTOL | Populate from Favourite - Nickname | Retrieve Bene Name via Bene Inquiry when tap [Next]. To populate Bene Name retrieved from account inquiry in the Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 7 | Favourite List (Without Bene Name) | Added via Acct Number | N | N/A | SKN/RTGS | Populate from Favourite - Nickname | Y (user input) | To populate Bene Name (manually entered) in Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 8 | New Open Transfer | - | Y | BI-FAST/RTOL | Populate Bene Name retrieved from account inquiry | N | Retrieve Bene Name via Bene Inquiry
- 9 | New Open Transfer | - | Y | SKN/RTGS | Populate Bene Name retrieved from account inquiry | N | Retrieve Bene Name via Bene Inquiry To populate Bene Name in Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.
- 10 | New Open Transfer | - | N | SKN/RTGS | Display empty name. | Y (user input) | To populate Bene Name (manually entered) in Confirmation Page > Transfer To section.

## Prompting Hints
- Keep requirement statements atomic.
- Map validations to positive, negative, and boundary tests.
- Use dependencies and APIs to derive integration scenarios.