# Feature: FUNCTION 3: INPUT AMOUNT

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- [INTERBANK] Enter Amount IDR to IDR
- [INTRABANK] Enter Amount - IDR to IDR
- [OWN] Enter Amount - IDR to IDR | Error Handling - Selecting same Transfer to and from CASA
- Scheduled/Recurring Transfer | ;
- Scheduled/Recurring Transfer
- Error Handling - Inline Error & Toastbar | Error Handling - Amount Limit Messages | [INTRABANK & INTERBANK] User has only 1 eligible account, hide Change button
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
## Business Rules
- No. | Description | Integration | Remark
- 1 | Transfer To - Beneficiary informations will be populated from 2 entry points: 1. User selects beneficiary from beneficiary list in Transfer Landing Page. * Note that Bene nickname is not required to be displayed here, including Trf to Own. 2. User manually select bank and enter account number.
- 2 | Transfer From (Source of Funds): 1. Retrieve & default to primary account (from Settings > Primary App Account). 2. User can tap on [Change] to change SoF. IF user changes the SoF account, it will not change/update the default SoF for the subsequent transfers. 3. Transfer From Drawer: a. Retrieve list of user's account based on "Table 1 - SoF Eligibility Check". This is further filtered by Personal or IBO. b. Indicate Primary Account 3. IF user has only 1 SoF account, [Change] button will be hidden. Transfer to OWN account: a. User is not allowed to select SoF as the same as receiving account number. If selected SoF is the same as receiving account number, system displays toastbar error message "You cannot send money to the same account you're transferring from.". Note: For SoF criteria and behaviour, to refer to Common FSD. | ECLIPSE: 1. Retrieve Account & Info (Nickname, Account Ccy, Current Balance) based on the criteria, with Primary Account Flag. CMS: 1. Retrieve maybank logo
- 3 | Transfer Amount - Transfer Currency: 1. INTRABANK & OWN a. To default the Transfer Ccy field to Beneficiary Account's currency. Refer to "Table 2 - Default Transfer Currency". b. For GAA: (i) If SoF is GAA, user can tap on [You Send] Ccy dropdown to select the supported currency as per SoF's GAA's available ccy (with Current Bal > 0). (ii) if Bene Account is GAA, user can tap on [They Get] Ccy dropdown to select the supported currency as per GAA's supported ccy. (iii) If both [You Send] and [They Get] are same currency, to disable [They Get] Amount field. 2. INTERBANK a. To default Transfer Ccy = IDR. Refer to "Table 2 - Default Transfer Currency". Note: Refer to "1.1.2.1 LLD & FOREX Matrix" for currencies allowed for each transfer mode. | ECLIPSE: - Retrieve GAA supported currencies. - Retrieve GAA currencies with current balance > 0.
- 4 | Transfer Amount - Remaining Limit: 1. OWN a. Not applicable, NO NEED to display. 2. INTRABANK a. New Transfer & Bene Listing When entering amount, to check if remaining user daily limit (include the entered amount) hits > 70% (System Config) of the defined limit (Settings > Intrabank Transfer): (i) "IDR - IDR" - display "Remaining limit IDR 999,999" with Manage limit hyperlink (refer to screen). (ii) "IDR - FCY" & "FCY - IDR" - to calculate remaining limit using latest FOREX and display in IDR. (ii) "FCY - FCY", "FCY - xFCY" - xxx 3. INTERBANK a. New Transfer (Open & Bene Listing) Since transfer mode has not been selected, remaining limit checking will not be performed nor displayed. b. Existing Transfer (Open & Bene Listing) When entering amount (since system derives the default Tranfser Mode based on last successful interbank transfer), to check if remaining user daily limit (include the entered amount) hits > 70% (System Config) of the defined limit (Settings > BI-FAST/ Transfer Online/ BI-SKN/ RTGS): (i) "IDR - IDR" - display "Remaining limit IDR 999,999" with Manage limit hyperlink (refer to screen). Note that "IDR 999,999" is a placeholder format. Real values depends on remaining limit of the specific transfer rail. (ii) "FCY - IDR" - to calculate remaining limit using latest FOREX and display in IDR. 4. Transfer Amount - Account Limit Checking: System to display pop up message for below, with option to "Proceed anyway" & "Change amount": a. If transaction amount exceeds user's daily remaining limit, display pop up title as "Remaining limit exceeded", message "You may still proceed, but to complete this transaction you must change the amount or manage your limit.". b. If transaction amount exceeds SoF Available Balance, display pop up title "Insufficient funds", message "You may still proceed, but to complete this transaction you must change the amount.". c. If transaction amount exceeds user's daily remaining limit & SoF Available Balance, display pop up title as "Insufficient funds and remaining limit exceeded", message "You may still proceed, but to complete this transaction you must change the amount or manage your limit." 5. Manage Limit hyperlink a. Display Manage Limit Link if the flag is turned on (System Config) . b. Upon tapping [manage limit] hyperlink, redirect user to Manage transaction daily limit screen for respective Transfer mode (Refer to Tab: Transfer - Manage Limit Details). Once completed, to redirect back to Input Amount screen. c. New limit will be effective immediately upon changing. System Config: 1. % threshold (70%) for limit checking shared by all transfer mode (Intrabank & Interbank), by Country. 2. Manage Limit Link display flag | ESB - Trapi: 1. Retrieve Foreign Exchange Rate P&T: - User defined daily transfer limit NGBO: 1. % threshold (70%) for limit checking shared by all transfer mode (Intrabank & Interbank), by Country. 2. Manage Limit Link display flag | [FCY] To confirm: 1. Limit checking if FCY to FCY, system to convert and display in IDR? 2. For interbank FCY, does system check USD 100K monthly limit?
- 5 | Transfer Amount (FCY related) - Other Business Rules: 1. For any FOREX transaction (IDR to FCY, FCY to xFCY, FCY to IDR?), if per transfer amount > USD 100,000, to display inline error message "Maximum amount is USD 100,000." 2. For IDR to FCY Transfer : a. Retrieve FOREX (IDR/FCY pair) & display. b. User has the option to enter Amount in IDR or Amount in FCY. c. Entering amount in IDR, system will calculate Amount in FCY. (Amount in IDR/Exchange Rate) d. Entering amount in FCY, system will calculate Amount in IDR. (Amount in FCY x Exchange Rate) 3. Indicative exchange rate: a. Displays indicative exchange rate for cross currency pair (IDR to FCY or FCY to xFCY) based on SoF holding currency. | ESB: 1. Retrieve Foreign Exchange Rate NGBO: 1. FOREX trxn - USD threshold per trxn (100k). | [FCY] To confirm: 1. Intrabank FCY to xFCY is allowed - Screen required.
- 6 | Schedule/ Recurring option: 1. End Date & No. of Transaction behaviour (i) IF user changes the Number of Transaction, system will re-calculate the corresponding end date based on the Number of Transactions selected. (ii) IF user returns to End Date tab, system to default & display the newly derived date. (iii) IF user changes the End Date after Number of Transaction is selected, system will re-calculate the corresponding Number of Transaction based on the End Date selected. (iv) IF user returns to Number of Transaction tab, system to default & display the newly derived value. 2. Scheduled/ recurring transaction is NOT applicable for (hide "Schedule or set recurring" Toggle field): a. Interbank transfer FCY to IDR b. Intrabank transfer with FCY, i.e. IDR to FCY, FCY to IDR, FCY to same FCY & FCY to xFCY. c. Own & Intrabank - beneficiary account is Virtual Account d. Own & Intrabank - beneficiary account is IBAAS Account (Islamic Banking as a Service) 3. Upon tapping "Set" on scheduled/recurring details drawer, system displays Info blue box banner "Please check the transaction status on the scheduled date. In the event of a disrupted transfer, you will need to manually retry." (refer to screen) | NGBO (P&T Ownership): 1. To retrieve the recurring options: a. Just Once b. Weekly c. Monthly
- 7 | Special rate: 1. Only applicable to below: a. Customer segment = "Privilege" or "Premier" d. Intrabank with FOREX transaction (IDR to FCY, FCY to IDR, FCY to xFCY). 2. Tap [apply] at "Apply special rate" drawer, system to perform validation checking: a. If special rate is < 9 digits, display inline message "Please enter a valid special rate code." b. Validate special rate ID (to Trapi), - if invalid, display toastbar message "Please enter a valid special rate code" - If expired, display toastbar message "Special rate code expired." c. If special rate is valid, system to close the drawer, display special rate applied screen and populate [You send] and [They get] amount. Both amount fields are disabled. d. If special rate is valid, system to change "Indicative Exchange Rate <CCY amount> ≈ <CCY amount>" to "Special exchange rate <CCY 1> = <CCY rate>". e. To edit applied special rate, user requires to tap the special rate ID [hyperlink]. User to continue either to alter or delete the current value. 3. Special rate can only be used during the validation period which is between 08.00AM and 02.30PM (from NGBO). 4. IF user change the Source of Funds accounts: a. System resets all fields. | ESB - Trapi 1. Special rate ID/Code validation 2. Retrieve special rate NGBO: 2. Retrieve special rate operational days & hours. ECLIPSE: 1. Customer Segment | [FCY] To confirm: 1. Toastbar error for BE validation
- 8 | When tap [Next] to proceed, perform validation: 1. Fields validation & all validation mentioned above 2. SoF Account eligibility (refer to Table 1 - SoF Eligibility Check). If SoF account is NOT eligible to perform transfer, system displays toastbar message "Your selected account does not support this transfer type. Please select another account." 3.Minimum per Transaction Limit: a. Interbank - Minimum transaction amount (from NGBO, is IDR 10,000) for all interbank transfer mode. If does not meet, display inline error message "Minimum amount is IDR <min limit based on transfer mode>" b. Intrabank & Own - Minimum transaction amount (from NGBO, is IDR 1). If does not meet, display inline error message "Minimum amount is IDR <min limit based on transfer mode>" 4. Maximum per Transaction Limit: a. Interbank, Intrabank & Own - Maximum transaction amount (from NGBO) for selected transfer mode. If does not meet, display inline error message "Maximum amount is IDR <min limit based on transfer mode>" b. Intrabank - it is not allowed to transfer more than USD 50k. System displays "Maximum amount is USD 50,000." (To confirm if this is required for Interbank since it would have exceeded Payment Rail's max limit) - use Counter Rate (from Trapi) for conversion to USD. 5. Daily Limit by Transfer Mode (from Settings) a. If exceeds, display warning message "Amount cannot exceed your remaining limit" (but user still can proceed as final validation happens at confirmation screen). b. Applies to Intrabank & Interbank (BI-FAST, RTOL, BI-SKN, RTGS) only. 5. SoF Balance Checking a. Refer to Figure 1 (Balance and Account Checking Diagram Flow) If amount > SoF account balance, display warning message "Amount should not exceed your account balance." (but user still can proceed as final validation happens at confirmation screen) b. For scheduled/recurring transaction, system skips SoF balance checking. 5. Special rate validation checking (if applied). IF outside validation period, system to display "Special rate not available" pop up. 6. If user tap [Next] button while not resolving the error, displays toastbar error message "Please resolve all errors to proceed". Once successful, system to redirect to Transfer Details screen. Note: 1. For Interbank a. Transfer initiated from Beneficiary Listing, Transfer Mode used is default to last succesful transfer mode performed. b. Transfer initiated from New Transfer, Transfer Mode will be based on the default derived from Input Account No page. 2. Maximum transaction amount by transfer mode will only be validated at Confirmation Page | NGBO (P&T Ownership): 1. Retrieve Min Transaction Amount by Transfer Mode (configurable per Country): a. Own b. Intrabank c. Interbank (applies to all BI-FAST, RTOL, BI-SKN, RTGS) Trapi: 1. Counter Rate ECLIPSE: 1. Last successful interbank transfer - transfer mode, by Bene Bank + Bene Account No
- Table 1 - SoF Eligibility Check
- Module | Product Code Exclusion (Table 1.1) | Account Type (Table 1.2) | Account Status (Table 1.3) | Segment ID (Table 1.4) | CIF Status (Table 1.5)
- Transfer Local - display in SoF, allow to perform transfer | Exclude Product Code in Table 1.1 | SA | 00 - Active | 01 - Single Individual 02 - Joint OR Primary | A - Active
- Transfer Local - display in SoF, allow to perform transfer | Exclude Product Code in Table 1.1 | CA | 00 - Active | 01 - Single Individual 02 - Joint OR Primary | A - Active
## APIs
- Not specified
## Dependencies
- Not specified
## Error Messages
- Error Handling - [INTERBANK & INTRABANK] Amount Limit
- Exclude Product Code in Table 1.1 | SA | 01 - InActive | 01 - Single Individual 02 - Joint OR Primary | A - Active
- Exclude Product Code in Table 1.1 | CA | 01 - InActive | 01 - Single Individual 02 - Joint OR Primary | A - Active
- Table 1.1 Product Code Exclusion (not eligible for transactions)
- No | Code | Name
- 1 | 70 | Giro
- 2 | 71 | Giro
- 3 | 73 | Giro
- 4 | 91 | Giro
- 5 | 92 | Giro
- 6 | 93 | Giro
- 7 | 251 | MyPlan
- 8 | 261 | MyPlan
- 9 | 252 | MyPlan Plus
- 10 | 262 | Tabungan MyPlan iB
- 11 | 253 | MyPlan
- 12 | 263 | MyPlan
- 13 | 830 | MyPlan Short Term
- 14 | 840 | MyPlan
- 15 | 940 | MyPlan
- 16 | 930 | MyPlan Short Term
- 17 | 835 | MyPlan Plus
- 18 | 845 | MyPlan Plus
- 19 | 945 | MyPlan Plus
- 20 | 935 | MyPlan
- 21 | 870 | MyPlan
- 22 | 970 | MyPlan
- 23 | 254 | MyPlan Young Family
- 24 | 264 | MyPlan Plus
- 25 | 810 | Tabungan Superkidz
- 26 | 990 | Tabungan Superkidz
- 27 | 120 | Tabungan Superkidz
- 28 | 912 | Tabungan Superkidz
- 29 | 282 | Tabungan SuperKidz iB
- 30 | 284 | Tabungan SuperKidz iB
- 31 | 831 | MyPlan Membership
- 32 | 841 | MyPlan M2U Promo
- 33 | 842 | EduPlan
- 34 | 843 | EduPlan
- 35 | 493 | SuperKidz iB
- 36 | 494 | SuperKidz iB
- 37 | 265 | MyPlan Membership iB
- 38 | 266 | MyPlan M2U Promo iB
- 39 | 267 | Eduplan iB
- 40 | 258 | MyPlan iB USD
- 41 | 268 | MyPlan iB USD
- 42 | 848 | MyPlan USD
- 43 | 849 | MyPlan USD
- 44 | 881 | EduPlan
- 45 | 882 | EduPlan
- 46 | 883 | MyPlan USD
- 47 | 884 | MyPlan USD
- 48 | 885 | EduPlan iB
- Table 1.2 Account Type
- 1 | SA | Savings Account
- 2 | CA | Current Account
- 3 | TD | Time Deposit
- 4 | XL | Loan
- Table 1.3 Account Status
- 1 | 00 | Active
- 2 | 01 | InActive
- 3 | 02 | Dormant
- 4 | 03 | CLOSED
- 5 | 04 | TERMINATED
- 6 | 05 | PURGED
- 7 | 06 | MATURED/ UNREDEEMED
- 8 | 07 | FROZEN - NO MONETARY ACTV
- 9 | 08 | FROZEN - NO ACTIVITY
- Table 1.4 Segment
- 1 | 01 | Single Individual
- 2 | 02 | Joint OR Primary
- 3 | 32 | Joint Or Secondary
- 4 | 03 | Joint AND Primary
- 5 | 33 | Joint AND Secondary
- Table 1.5 CIF Status
- 1 | A | Active
- 2 | D | Delete
- 3 | N | nonActive
- 4 | Y | Joint Account
- Table 2 - Default Transfer Currency
- SoF | Bene Account | Default
- SoF | Bene Account | Transfer | You Send | They Get
## Navigation
- Not specified
## Remarks
- Not specified

## Prompting Hints
- Keep requirement statements atomic.
- Map validations to positive, negative, and boundary tests.
- Use dependencies and APIs to derive integration scenarios.