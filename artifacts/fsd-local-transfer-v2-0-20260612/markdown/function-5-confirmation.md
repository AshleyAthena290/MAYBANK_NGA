# Feature: FUNCTION 5: CONFIRMATION

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- NOTE: The following updates reflect the latest Figma changes and to be applied across the entire Local Transfer module
- Confirmation Screen | [INTERBANK] and [INTRABANK] - S2U Authorisation after tapping [Confirm] button.
- [INTERBANK] BI-FAST Confirmation Screen
- [INTERBANK] RTOL Confirmation Screen
- [INTERBANK] BI-SKN (IDR to IDR) Confirmation Screen
- [INTERBANK] RTGS (IDR to IDR) Confirmation Screen
- [INTRABANK] IDR to IDR Confirmation Screen
- [OWN] IDR - IDR Confirmation Screen
- Scheduled/Recurring Confirmation Screen
- SCENARIO 1: Initiate transaction via Transfer Landing Screen, if Beneficiary only has nickname (added manually via Account No), populate & replace with Registered Name.
- SCENARIO 2: Initiate transaction via Transfer Landing Screen on a newly created favourite added by account number. Select BI-SKN. User input Account Holder Name.
- Error Handling - SoF Eligibility & Limit Checking (To revisit term use for Account Bal once confirmed) | Confirmation with Terms & Condition for all Transfer Modes
- [INTRABANK] Confirmation Screen w/ Additional Details
- [INTRABANK] IDR to FCY Confirmation Screen | [INTRABANK] IDR to FCY Confirmation Screen (with GAA) Confirmation Screen | [INTRABANK] IDR to FCY with Special Rate Confirmation Screen | [INTRABANK] FCY to IDR Confirmation Screen (Pending Screen)
- [INTRABANK] Confirmation Screen w/ Additional Details & Underlying Doc
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
## Business Rules
- No. | Description | Integration | Remark
- 1 | For transfer performed via Favourite, and Beneficiary only has Nickname: 1. Once Bene Account Inquiry is performed (BI-FAST & RTOL) or Account Holder Name is manually entered (BI-SKN & RTGS), system to populate the Beneficiary Registered Name or Account Holder Name in the Bene Name field. 2. When transfer is completed successfully, save this Beneficiary Registered Name or Account Holder Name in the Favourite Beneficiary Name field. 3. System hides any optional fields left blank on previous screens.
- 2 | Upon tapping [Confirm] button, system performs: 1. SoF Account eligibility (refer to "Input Amt" > Table 1 - SoF Eligibility Check). If SoF account is NOT eligible to perform transfer, system displays toastbar message "This account is unable to make this transfer. Select another account." 2. Minimum amount per Transaction Limit: a. Minimum transaction amount (from NGBO, basically is IDR10,000) for selected transfer mode. If does not meet, display toastbar error message "Minimum amount is IDR <min limit based on transfer mode>" (i) Own (ii) Intrabank (iii) Interbank 3. Maximum per Transaction Limit: a. Interbank, Intrabank & Own - Maximum transaction amount (from NGBO) for selected transfer mode. If does not meet, display inline error message "Maximum amount is IDR <max limit based on transfer mode>" b. Intrabank (If sender/recipient = non-citizen) - it is not allowed to transfer amount more than USD 50k or equivalent. System displays "Maximum amount is USD 50,000." c. Interbank - applicable for RTGS (If sender/recipient = non-citizen) - it is not allowed to transfer amount more than USD 50k or equivalent. System displays toastbar error "Maximum amount is USD 50,000." and cannot proceed. 4. Daily Limit by Transfer Mode (from Settings) - for INTERBANK & INTRABANK only for Immediate transfer a. If exceeds, display toastbar error message "Amount cannot exceed your remaining limit" 5. SoF Balance Checking a. If amount > SoF available balance, display toastbar error message "Transaction amount cannot exceed you available balance." b. For scheduled/recurring transaction, system skips SoF balance checking. 6. If all above validation passed, navigate to Status End Screen. For INTRABANK & OWN with Cross Currency (IDR - FCY | FCY to IDR): (i) Exchange Rate expires in XX seconds. Upon sliding the confirmation button, if exchange rate expired, system to display Exchange Rate Information Drawer with latest rate. (ii) Exchange rate information drawer expires in XX seconds. - Once timer expired, system will display [Refresh] button. - Tap on [Refresh] will get new rate and transaction amount. - Tap on [Confirm], system to redirect back to Confirmation screen. User to tap [Confirm] button to confirm the transaction. | P&T: 1. Retrieve Daily Limit (NGA) by transfer mode: a. Intrabank b. Interbank - BI-FAST - RTOL - BI-SKN - RTGS NGBO (P&T Ownership): 1. Retrieve Transaction Limit (Min & Max) by Transfer Mode: a. Own b. Intrabank c. Interbank (applies to all BI-FAST, RTOL, BI-SKN, RTGS) ECLIPSE: 1. Retrieve SoF Available Balance ESB: 1. Retrieve Foreign Exchange Rate 2. Post Transfer request for: a. OWN b. Intrabank c. Interbank - BI-FAST - RTOL - BI-SKN - RTGS Note: ESB to perform transaction reversal if transfer fails. Standing Instruction: 1. Post Scheduled or Recurring transaction for each Transfer Mode
- 3 | For Terms & Condition hyperlink: 1. Option to display "Terms & Conditions hyperlink" are configurable via NGBO by country. If ON, then to display, else hide. (This does not apply to T&C message display, but hyperlink only) 2. Terms & Conditions content will be rendered and viewed in Webview based on Transfer Mode. 3. T&C can be viewed in PDF format (content uploaded as PDF) or WebPage (defined as URL). | NGBO 1. Retrieve T&C hyperlink display - On/Off flag by country CMS: 1. Retrieve T&C message 2. Retrieve T&C contents by Transfer Mode a. OWN b. Intrabank c. Interbank - BI-FAST - RTOL - BI-SKN - RTGS 3. Retrieve T&C contents by language (alphabet/non-alphabet)
- 4 | S2U Authorisation is NOT required for Transfer to Own
## APIs
- Not specified
## Dependencies
- Not specified
## Error Messages
- Error Handling - SoF Eligibility & Limit Checking (To revisit term use for Account Bal once confirmed) | Confirmation with Terms & Condition for all Transfer Modes
## Navigation
- Not specified
## Remarks
- NOTE: The following updates reflect the latest Figma changes and to be applied across the entire Local Transfer module

## Prompting Hints
- Keep requirement statements atomic.
- Map validations to positive, negative, and boundary tests.
- Use dependencies and APIs to derive integration scenarios.