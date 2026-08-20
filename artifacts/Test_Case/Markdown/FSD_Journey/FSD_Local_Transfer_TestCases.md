# Sheet: Test Cases

| Journey | Test Case Code | Test Case Title | Step # | Test Step | API Triggered | Expected Result | Business Rule |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Journey 1: Transfer Own Account | UJ1.1 | UJ1.1: Transfer Between Own CASA Accounts | 1 | User taps [+Transfer] from App Dashboard or Account Dashboard | GetSourceAccountList (GET) | Transfer Introduction Page is displayed (if first-timer) OR Transfer Landing Page is displayed (if non-first timer) | BR: First-timer vs. non-first timer logic |
|  |  |  | 2 | [First-time users only] User taps [Get Started] button | — | System validates CASA eligibility and redirects to Transfer Landing Page | BR: CASA account eligibility check |
|  |  |  | 3 | User navigates to Transfer Landing Page; Own tab is auto-selected | GetSourceAccountList (GET) | Own tab displays list of user's active CASA/RDN accounts sorted by Product Name (A-Z) | BR: Account list display criteria for OWN tab |
|  |  |  | 4 | User selects source account from Own list (primary account displayed) | GetSourceAccountList (GET) | Transfer From drawer closes; selected account marked as SoF; Input Amount page prepares to load | BR: SoF account selection |
|  |  |  | 5 | System displays list of destination accounts (excluding SoF account) | GetSourceAccountList (GET) | Destination account list shows only non-SoF accounts; SoF account is disabled for selection | BR: Same-source restriction applies |
|  |  |  | 6 | User selects destination account from available list | GetSourceAccountList (GET) | Input Amount screen displayed with selected destination account details | BR: Own account transfer navigation |
|  |  |  | 7 | User enters transfer amount in local currency (IDR) | InitiateIntraTransfer (POST) | System accepts amount; displays available balance; no LLD/FOREX matrix triggered | BR: Own transfer supports IDR-IDR only (unless special rate applicable) |
|  |  |  | 8 | User reviews Transfer Details screen | InitiateIntraTransfer (POST) | All transfer details are correct: Source, Destination, Amount, Currency | BR: Transfer Details validation |
|  |  |  | 9 | User taps [Confirm] button | ExecuteIntraTransfer (POST) | Transfer Confirmation page displayed WITHOUT Secure2u prompt | BR: No Secure2u for Own transfer |
|  |  |  | 10 | User confirms transfer | InitiateIntraTransfer (POST) | Transfer processes immediately; Final Screen displayed with receipt | BR: Transfer successful status |
|  |  |  | 11 | System displays Transfer Receipt | InitiateIntraTransfer (POST) | Receipt shows: Transaction ID, Date/Time, Source, Destination, Amount, Status (Successful) | BR: Receipt with Theme display |
|  |  |  | 12 | User taps [Done] or navigates away | — | Transfer Notification is sent; User returns to Transfer Landing Page or Home | BR: Transfer Notification trigger |
| Journey 1: Transfer Own Account | UJ1.2 | UJ1.2: Transfer Own Account with FCY (Foreign Currency) | 1 | User navigates to Transfer Landing Page and selects Own tab | GetSourceAccountList (GET) | Own tab displays FCY accounts grouped by currency | BR: Currency-grouped account display |
|  |  |  | 2 | User selects FCY source account (e.g., USD CASA) | GetSourceAccountList (GET) | System displays matching FCY destination accounts | BR: Own account transfer with FCY support |
|  |  |  | 3 | User enters transfer amount in source currency (USD) | GetSourceAccountList (GET) | System displays amount in source currency; LLD & FOREX matrix is triggered if applicable | BR: Conditional Step 5 - LLD & FOREX Matrix |
|  |  |  | 4 | [If triggered] LLD & FOREX Matrix screen displayed | — | Matrix shows exchange rates, conversion amount, applicable limits, special rates (if eligible) | BR: LLD & FOREX conditional logic |
|  |  |  | 5 | User accepts rates and proceeds | — | System validates currency pair against matrix; Transfer Details screen displayed | BR: Currency pair validation |
|  |  |  | 6 | User confirms transfer without Secure2u | InitiateIntraTransfer (POST) | Transfer processes; Receipt displays both source and destination currency amounts | BR: Own transfer - No Secure2u |
| Journey 2: Transfer Within Maybank (Intrabank) | UJ1.2 | UJ1.2: Transfer Own Account with FCY (Foreign Currency) | 1 | User navigates to Transfer Landing Page and selects Own tab | GetSourceAccountList (GET) | Own tab displays FCY accounts grouped by currency | BR: Currency-grouped account display |
|  |  |  | 2 | User selects FCY source account (e.g., USD CASA) | GetSourceAccountList (GET) | System displays matching FCY destination accounts | BR: Own account transfer with FCY support |
|  |  |  | 3 | User enters transfer amount in source currency (USD) | GetSourceAccountList (GET) | System displays amount in source currency; LLD & FOREX matrix is triggered if applicable | BR: Conditional Step 5 - LLD & FOREX Matrix |
|  |  |  | 4 | [If triggered] LLD & FOREX Matrix screen displayed | — | Matrix shows exchange rates, conversion amount, applicable limits, special rates (if eligible) | BR: LLD & FOREX conditional logic |
|  |  |  | 5 | User accepts rates and proceeds | — | System validates currency pair against matrix; Transfer Details screen displayed | BR: Currency pair validation |
|  |  |  | 6 | User confirms transfer without Secure2u | InitiateIntraTransfer (POST) | Transfer processes; Receipt displays both source and destination currency amounts | BR: Own transfer - No Secure2u |
| Journey 2: Transfer Within Maybank (Intrabank) | UJ2.1 | UJ2.1: Transfer to Maybank Beneficiary - BI-FAST (IDR-IDR) | 1 | User navigates to Transfer Landing Page | InitiateIntraTransfer (POST) | Beneficiary lists displayed: Frequent, All, Favourites, Own, Custom tabs visible | BR: Default tab display logic |
|  |  |  | 2 | User taps on Frequent tab | — | System displays frequently transferred Maybank beneficiaries (≥2 successful txns in 90 days) | BR: Frequent list - min 2 successful txns |
|  |  |  | 3 | User selects a Maybank beneficiary from Frequent list | GetSourceAccountList (GET) | System identifies beneficiary as Intrabank; navigates to Input Amount page | BR: Intrabank beneficiary navigation |
|  |  |  | 4 | [If GAA account] System displays "Select Currency" drawer | GetSourceAccountList (GET) | User selects IDR (or other available currency) | BR: GAA account currency selection |
|  |  |  | 5 | User enters transfer amount in IDR | InitiateIntraTransfer (POST) | System displays amount in IDR; no FOREX matrix triggered (standard Intrabank) | BR: Intrabank IDR-IDR standard flow |
|  |  |  | 6 | User reviews Transfer Details | InitiateIntraTransfer (POST) | Details show: Source CASA, Destination CASA/VA/iBaaS, Amount (IDR), Fees, Total | BR: Transfer Details display |
|  |  |  | 7 | User taps [Confirm] button | ExecuteIntraTransfer (POST) | Secure2u authentication page appears | BR: Secure2u required for Intrabank |
|  |  |  | 8 | User completes Secure2u challenge | — | Authentication successful message displayed | BR: A&A integration |
|  |  |  | 9 | Transfer processes and completes | InitiateIntraTransfer (POST) | Final Screen displayed with receipt | BR: Transfer successful status |
|  |  |  | 10 | Receipt displays transaction details | — | Receipt shows: Transaction ID, Date/Time, Maybank Beneficiary details, Amount, Status (Successful) | BR: Intrabank receipt display |
| Journey 2: Transfer Within Maybank (Intrabank) | UJ2.2 | UJ2.2: Transfer to Maybank with FCY & Special Rate | 1 | User selects a Maybank FCY beneficiary | GetSourceAccountList (GET) | Input Amount page displayed with FCY currency selector | BR: Intrabank FCY support |
|  |  |  | 2 | User enters amount in source FCY | GetSourceAccountList (GET) | LLD & FOREX Matrix screen triggered (Conditional Step 5) | BR: Conditional LLD & FOREX Matrix |
|  |  |  | 3 | System displays FOREX matrix with available rates | — | Standard rate displayed; Special rate applied for Privilege/Premier customers | BR: Special rate application logic |
|  |  |  | 4 | User selects special rate (if eligible) | GetSourceAccountList (GET) | System calculates conversion using special rate; total amount updated | BR: Special rate selection |
|  |  |  | 5 | User proceeds to Transfer Details | — | Details include: Special rate applied, conversion amount, fees | BR: Special rate display in details |
|  |  |  | 6 | User proceeds through Secure2u | — | Authentication completed successfully | BR: Secure2u for Intrabank FCY |
|  |  |  | 7 | Transfer completes | — | Receipt shows special rate used and conversion details | BR: Special rate confirmation in receipt |
| Journey 3: Transfer Interbank BI-FAST | UJ2.2 | UJ2.2: Transfer to Maybank with FCY & Special Rate | 1 | User selects a Maybank FCY beneficiary | GetSourceAccountList (GET) | Input Amount page displayed with FCY currency selector | BR: Intrabank FCY support |
|  |  |  | 2 | User enters amount in source FCY | GetSourceAccountList (GET) | LLD & FOREX Matrix screen triggered (Conditional Step 5) | BR: Conditional LLD & FOREX Matrix |
|  |  |  | 3 | System displays FOREX matrix with available rates | — | Standard rate displayed; Special rate applied for Privilege/Premier customers | BR: Special rate application logic |
|  |  |  | 4 | User selects special rate (if eligible) | GetSourceAccountList (GET) | System calculates conversion using special rate; total amount updated | BR: Special rate selection |
|  |  |  | 5 | User proceeds to Transfer Details | — | Details include: Special rate applied, conversion amount, fees | BR: Special rate display in details |
|  |  |  | 6 | User proceeds through Secure2u | — | Authentication completed successfully | BR: Secure2u for Intrabank FCY |
|  |  |  | 7 | Transfer completes | — | Receipt shows special rate used and conversion details | BR: Special rate confirmation in receipt |
| Journey 3: Transfer Interbank BI-FAST | UJ3.1 | UJ3.1: Transfer to BI-FAST Member Bank - New Beneficiary | 1 | User taps [+Transfer] button on Transfer Landing Page | — | Input Account Number page displayed with bank selection drawer | BR: New transfer initiation |
|  |  |  | 2 | User searches for destination bank (e.g., "BCA" or "Bank Central Asia") | GetPtMaintenanceBankListing (GET) | Bank list filtered; BCA displayed with logo and available status | BR: Bank search with alias/tags; Top 10 banks logic |
|  |  |  | 3 | User selects BCA bank | GetSourceAccountList (GET) | Input Account Number page ready for entry | BR: Bank selection |
|  |  |  | 4 | User enters destination bank account number | GetSourceAccountList (GET) | Input Account Number field accepts numeric entry | BR: Account number input validation |
|  |  |  | 5 | System performs beneficiary account inquiry via BI-FAST | GetSourceAccountList (GET) | Account validity confirmed; Beneficiary Name retrieved (e.g., "JOHN DOE") | BR: BI-FAST account inquiry |
|  |  |  | 6 | User taps [Next] button | — | Input Amount page displayed with retrieved beneficiary details | BR: Successful inquiry navigation |
|  |  |  | 7 | User enters transfer amount in IDR | — | System displays amount; BI-FAST default transfer mode set | BR: BI-FAST IDR-IDR support |
|  |  |  | 8 | User reviews Transfer Details | — | Details show: Source account, External bank beneficiary (BCA), Account number, Amount (IDR) | BR: Transfer Details for Interbank |
|  |  |  | 9 | User taps [Confirm] | — | Secure2u authentication page appears | BR: Secure2u required for Interbank |
|  |  |  | 10 | User completes Secure2u challenge | — | Transfer sent for processing | BR: A&A integration |
|  |  |  | 11 | Transfer completes | — | Final Screen displayed with receipt | BR: BI-FAST transfer successful |
|  |  |  | 12 | Receipt displays transaction details | — | Receipt shows: Transaction ID, Date/Time, External beneficiary (BCA, Account), Amount, Status (Successful/Scheduled) | BR: BI-FAST receipt display |
| Journey 3: Transfer Interbank BI-FAST | UJ3.2 | UJ3.2: Transfer to BI-FAST Saved Beneficiary - Failed Inquiry Fallback | 1 | User selects saved beneficiary from BI-FAST bank (both BI-FAST & RTOL member) | GetSourceAccountList (GET) | Input Amount page loading | BR: Beneficiary from historical list |
|  |  |  | 2 | System performs BI-FAST account inquiry | GetSourceAccountList (GET) | BI-FAST inquiry times out or returns invalid | BR: Table 1 - Beneficiary Account Inquiry Scenarios |
|  |  |  | 3 | System automatically falls back to RTOL inquiry | — | RTOL inquiry performed as 2nd check | BR: Sequential inquiry logic (BI-FAST → RTOL) |
|  |  |  | 4 | RTOL inquiry returns valid account | GetSourceAccountList (GET) | Input Amount page displayed with RTOL as default transfer mode | BR: Table 1 - Timeout to Valid RTOL scenario |
|  |  |  | 5 | User completes transfer via RTOL | — | Transfer processes successfully with RTOL rail | BR: Fallback transfer completion |
| Journey 4: Transfer Interbank RTOL | UJ3.2 | UJ3.2: Transfer to BI-FAST Saved Beneficiary - Failed Inquiry Fallback | 1 | User selects saved beneficiary from BI-FAST bank (both BI-FAST & RTOL member) | GetSourceAccountList (GET) | Input Amount page loading | BR: Beneficiary from historical list |
|  |  |  | 2 | System performs BI-FAST account inquiry | GetSourceAccountList (GET) | BI-FAST inquiry times out or returns invalid | BR: Table 1 - Beneficiary Account Inquiry Scenarios |
|  |  |  | 3 | System automatically falls back to RTOL inquiry | — | RTOL inquiry performed as 2nd check | BR: Sequential inquiry logic (BI-FAST → RTOL) |
|  |  |  | 4 | RTOL inquiry returns valid account | GetSourceAccountList (GET) | Input Amount page displayed with RTOL as default transfer mode | BR: Table 1 - Timeout to Valid RTOL scenario |
|  |  |  | 5 | User completes transfer via RTOL | — | Transfer processes successfully with RTOL rail | BR: Fallback transfer completion |
| Journey 4: Transfer Interbank RTOL | UJ4.1 | UJ4.1: Transfer to RTOL Member Bank - Account Number Entry | 1 | User navigates to Transfer Landing Page and taps [+Transfer] | — | Input Account Number page displayed | BR: New transfer initiation |
|  |  |  | 2 | User searches for destination bank (e.g., CIMB Niaga) | GetPtMaintenanceBankListing (GET) | Bank list filtered; CIMB Niaga displayed (RTOL member) | BR: Bank search and display |
|  |  |  | 3 | User selects CIMB Niaga | GetSourceAccountList (GET) | Input Account Number page ready for entry | BR: Bank selection |
|  |  |  | 4 | User enters destination account number | GetSourceAccountList (GET) | System performs inquiry via RTOL network | BR: RTOL account inquiry |
|  |  |  | 5 | RTOL inquiry returns valid account and beneficiary name | GetSourceAccountList (GET) | Input Amount page displayed with beneficiary details | BR: RTOL successful inquiry |
|  |  |  | 6 | User enters transfer amount in IDR | — | Amount accepted; RTOL transfer mode confirmed | BR: RTOL IDR-IDR support |
|  |  |  | 7 | User confirms transfer with Secure2u | — | Authentication successful; transfer queued for processing | BR: Secure2u required |
|  |  |  | 8 | Transfer processes | — | Final Screen displayed with receipt | BR: RTOL transfer completion |
|  |  |  | 9 | Receipt shows RTOL transfer details | — | Status: Successful; Processing; or Scheduled based on time | BR: RTOL final status options |
| Journey 4: Transfer Interbank RTOL | UJ4.2 | UJ4.2: RTOL Transfer with Invalid Account - Error Handling | 1 | User enters invalid account number for RTOL bank | GetSourceAccountList (GET) | Input Account Number field accepts entry | BR: Account number input |
|  |  |  | 2 | User taps [Next] button | — | System performs RTOL account inquiry | BR: Account inquiry trigger |
|  |  |  | 3 | RTOL inquiry returns "Invalid Account" error | GetSourceAccountList (GET) | Inline error message displayed: "Please enter a valid account number" | BR: RTOL invalid account handling |
|  |  |  | 4 | User is retained on Input Account Number page | GetSourceAccountList (GET) | Page remains editable for account number correction | BR: Error page retention |
|  |  |  | 5 | User corrects account number and retaps [Next] | GetSourceAccountList (GET) | New inquiry performed with corrected account number | BR: Retry logic |
|  |  |  | 6 | [If valid on retry] Input Amount page displayed | GetSourceAccountList (GET) | Transfer can proceed normally | BR: Successful recovery |
| Journey 5: Transfer Interbank BI-SKN | UJ4.2 | UJ4.2: RTOL Transfer with Invalid Account - Error Handling | 1 | User enters invalid account number for RTOL bank | GetSourceAccountList (GET) | Input Account Number field accepts entry | BR: Account number input |
|  |  |  | 2 | User taps [Next] button | — | System performs RTOL account inquiry | BR: Account inquiry trigger |
|  |  |  | 3 | RTOL inquiry returns "Invalid Account" error | GetSourceAccountList (GET) | Inline error message displayed: "Please enter a valid account number" | BR: RTOL invalid account handling |
|  |  |  | 4 | User is retained on Input Account Number page | GetSourceAccountList (GET) | Page remains editable for account number correction | BR: Error page retention |
|  |  |  | 5 | User corrects account number and retaps [Next] | GetSourceAccountList (GET) | New inquiry performed with corrected account number | BR: Retry logic |
|  |  |  | 6 | [If valid on retry] Input Amount page displayed | GetSourceAccountList (GET) | Transfer can proceed normally | BR: Successful recovery |
| Journey 5: Transfer Interbank BI-SKN | UJ5.1 | UJ5.1: Transfer to BI-SKN Bank - IDR-IDR Transfer | 1 | User initiates transfer via [+Transfer] button | — | Input Account Number page displayed; bank selection available | BR: New transfer initiation |
|  |  |  | 2 | User searches and selects BI-SKN member bank | GetSourceAccountList (GET) | Input Account Number page ready for entry | BR: BI-SKN bank selection |
|  |  |  | 3 | User enters account number | GetSourceAccountList (GET) | System performs BI-SKN account inquiry | BR: BI-SKN account inquiry |
|  |  |  | 4 | Inquiry returns valid account details | GetSourceAccountList (GET) | Input Amount page displayed | BR: Successful BI-SKN inquiry |
|  |  |  | 5 | User enters amount in IDR | — | System accepts IDR amount; BI-SKN IDR-IDR transfer mode set | BR: BI-SKN IDR-IDR support |
|  |  |  | 6 | User reviews Transfer Details | — | Details include: BI-SKN transfer mode, IDR currency, recipient details | BR: Transfer Details display |
|  |  |  | 7 | User confirms with Secure2u | — | Authentication successful | BR: Secure2u required |
|  |  |  | 8 | Transfer processes | — | Completion status displayed | BR: BI-SKN transfer completion |
| Journey 5: Transfer Interbank BI-SKN | UJ5.2 | UJ5.2: Transfer to BI-SKN with FCY-IDR Conversion | 1 | User selects BI-SKN beneficiary with FCY source | GetSourceAccountList (GET) | Input Amount page prepared with FCY selector | BR: BI-SKN FCY-IDR support |
|  |  |  | 2 | User enters amount in source FCY (USD) | GetSourceAccountList (GET) | LLD & FOREX Matrix triggered (Conditional Step 5) | BR: Conditional LLD & FOREX Matrix |
|  |  |  | 3 | System displays FOREX matrix with USD-IDR rates | — | Conversion amount shown; applicable limits checked | BR: FCY-IDR matrix display |
|  |  |  | 4 | [If >USD 10K threshold] Additional Details screen displayed | — | User required to enter transfer purpose and other details | BR: Conditional Step 7 - Additional Details |
|  |  |  | 5 | [If underlying docs required] Underlying Documents screen triggered | — | User prompted to upload supporting documentation | BR: Conditional Step 8 - Underlying Documents |
|  |  |  | 6 | User completes all required details and uploads docs | — | System validates documentation; Transfer Details screen displayed | BR: Document validation |
|  |  |  | 7 | User confirms with Secure2u | — | Authentication successful; transfer queued | BR: Secure2u required |
|  |  |  | 8 | Transfer processes | — | Receipt displays FCY amount, conversion rate, IDR equivalent | BR: BI-SKN FCY-IDR receipt |
| Journey 6: Transfer Interbank RTGS | UJ5.2 | UJ5.2: Transfer to BI-SKN with FCY-IDR Conversion | 1 | User selects BI-SKN beneficiary with FCY source | GetSourceAccountList (GET) | Input Amount page prepared with FCY selector | BR: BI-SKN FCY-IDR support |
|  |  |  | 2 | User enters amount in source FCY (USD) | GetSourceAccountList (GET) | LLD & FOREX Matrix triggered (Conditional Step 5) | BR: Conditional LLD & FOREX Matrix |
|  |  |  | 3 | System displays FOREX matrix with USD-IDR rates | — | Conversion amount shown; applicable limits checked | BR: FCY-IDR matrix display |
|  |  |  | 4 | [If >USD 10K threshold] Additional Details screen displayed | — | User required to enter transfer purpose and other details | BR: Conditional Step 7 - Additional Details |
|  |  |  | 5 | [If underlying docs required] Underlying Documents screen triggered | — | User prompted to upload supporting documentation | BR: Conditional Step 8 - Underlying Documents |
|  |  |  | 6 | User completes all required details and uploads docs | — | System validates documentation; Transfer Details screen displayed | BR: Document validation |
|  |  |  | 7 | User confirms with Secure2u | — | Authentication successful; transfer queued | BR: Secure2u required |
|  |  |  | 8 | Transfer processes | — | Receipt displays FCY amount, conversion rate, IDR equivalent | BR: BI-SKN FCY-IDR receipt |
| Journey 6: Transfer Interbank RTGS | UJ6.1 | UJ6.1: Transfer to RTGS Member Bank - High-Value IDR Transfer | 1 | User initiates high-value transfer via [+Transfer] | — | Input Account Number page displayed | BR: New transfer initiation |
|  |  |  | 2 | User selects RTGS member bank | GetSourceAccountList (GET) | Input Account Number page ready for entry | BR: RTGS bank selection |
|  |  |  | 3 | User enters account number and taps [Next] | GetSourceAccountList (GET) | RTGS account inquiry performed | BR: RTGS account inquiry |
|  |  |  | 4 | Inquiry returns valid account | GetSourceAccountList (GET) | Input Amount page displayed with RTGS mode auto-selected | BR: RTGS transfer mode selection |
|  |  |  | 5 | User enters large amount (IDR - IDR) | — | System accepts amount; validates against RTGS limits | BR: RTGS high-value support |
|  |  |  | 6 | [If amount >USD 10K threshold] Additional Details screen displayed | — | User enters transfer purpose, beneficiary relationship, etc. | BR: Conditional Step 7 - Additional Details |
|  |  |  | 7 | [If applicable] Underlying Documents screen shown | GetSourceAccountList (GET) | User uploads supporting documents (invoice, contract, etc.) | BR: Conditional Step 8 - Underlying Documents |
|  |  |  | 8 | User completes Transfer Details review | — | All details confirmed | BR: Transfer Details display |
|  |  |  | 9 | User confirms with Secure2u | — | Authentication successful | BR: Secure2u required |
|  |  |  | 10 | Transfer processes | — | Final Screen shows receipt | BR: RTGS transfer completion |
|  |  |  | 11 | Receipt displays RTGS transfer details | — | Status: Successful; Processing; or scheduled | BR: RTGS final status |
| Journey 6: Transfer Interbank RTGS | UJ6.2 | UJ6.2: RTGS Transfer with Missing Underlying Documents - Error Handling | 1 | User reaches Underlying Documents screen for RTGS high-value transfer | InitiateIntraTransfer (POST) | Document upload requirements displayed | BR: Document requirement logic |
|  |  |  | 2 | User attempts to proceed without uploading documents | — | System displays validation error: "Please upload required documents" | BR: Mandatory document validation |
|  |  |  | 3 | User is retained on Underlying Documents screen | — | Screen remains editable for document upload | BR: Error page retention |
|  |  |  | 4 | User uploads required documents | — | System validates document format, size, and quality | BR: Document validation rules |
|  |  |  | 5 | Documents accepted; user proceeds to confirmation | ExecuteIntraTransfer (POST) | Transfer Details screen displayed | BR: Successful document acceptance |
|  |  |  | 6 | User confirms and completes transfer | InitiateIntraTransfer (POST) | Transfer processes successfully | BR: Transfer completion |
| Journey 7: Create & Manage Recipient List | UJ6.2 | UJ6.2: RTGS Transfer with Missing Underlying Documents - Error Handling | 1 | User reaches Underlying Documents screen for RTGS high-value transfer | InitiateIntraTransfer (POST) | Document upload requirements displayed | BR: Document requirement logic |
|  |  |  | 2 | User attempts to proceed without uploading documents | — | System displays validation error: "Please upload required documents" | BR: Mandatory document validation |
|  |  |  | 3 | User is retained on Underlying Documents screen | — | Screen remains editable for document upload | BR: Error page retention |
|  |  |  | 4 | User uploads required documents | — | System validates document format, size, and quality | BR: Document validation rules |
|  |  |  | 5 | Documents accepted; user proceeds to confirmation | ExecuteIntraTransfer (POST) | Transfer Details screen displayed | BR: Successful document acceptance |
|  |  |  | 6 | User confirms and completes transfer | InitiateIntraTransfer (POST) | Transfer processes successfully | BR: Transfer completion |
| Journey 7: Create & Manage Recipient List | UJ7.1 | UJ7.1: Create Custom Beneficiary List & Add Beneficiary with Nickname | 1 | User navigates to Transfer Landing Page | InitiateIntraTransfer (POST) | Beneficiary tabs displayed: All, Frequent, Favourites, Own, Custom | BR: Default tab display |
|  |  |  | 2 | User selects Custom tab; taps [+] button | GetSourceAccountList (GET) | "Create Custom List" page displayed | BR: Custom tab creation flow |
|  |  |  | 3 | User enters custom list name (e.g., "Family Members") | GetSourceAccountList (GET) | List name textbox accepts input; validates name length and format | BR: Custom list name validation |
|  |  |  | 4 | User taps [Next] or [Create List] button | GetSourceAccountList (GET) | List created; system navigates to "Add Beneficiary to List" screen | BR: List creation |
|  |  |  | 5 | User taps [+Add Beneficiary] button | — | Beneficiary selection drawer displayed with All, Frequent, Favourites tabs | BR: Beneficiary selection for custom list |
|  |  |  | 6 | User selects beneficiary from available list (e.g., existing beneficiary) | GetSourceAccountList (GET) | Selected beneficiary displayed; nickname field appears if not yet set | BR: Beneficiary selection |
|  |  |  | 7 | [If no nickname] User enters nickname for beneficiary (e.g., "Mom") | — | Nickname textbox accepts input; validates length and format | BR: Nickname addition |
|  |  |  | 8 | User confirms add to custom list | GetSourceAccountList (GET) | Beneficiary added to custom list with nickname | BR: Beneficiary list addition |
|  |  |  | 9 | User can continue adding more beneficiaries | — | [+Add Beneficiary] button remains available | BR: Multiple beneficiary addition |
|  |  |  | 10 | User taps [Save] or [Done] button | — | Custom list saved with all added beneficiaries and nicknames | BR: List save completion |
|  |  |  | 11 | User returns to Transfer Landing Page | InitiateIntraTransfer (POST) | Custom list now displayed in Custom tab with all added beneficiaries | BR: Custom list display in beneficiary list |
| Journey 7: Create & Manage Recipient List | UJ7.2 | UJ7.2: Edit Beneficiary Nickname - Existing Beneficiary | 1 | User long-presses beneficiary in Transfer Landing Page | InitiateIntraTransfer (POST) | Beneficiary info & menu options displayed (overlay) | BR: Long-press menu display |
|  |  |  | 2 | Menu shows options: Edit nickname, Add/Edit favourite, Remove | — | "Edit nickname" option visible if nickname already exists | BR: Menu option conditional logic |
|  |  |  | 3 | User taps "Edit nickname" option | — | Edit Nickname dialog displayed with current nickname pre-filled | BR: Edit nickname flow |
|  |  |  | 4 | User updates nickname text (e.g., "Mom" → "Mother") | — | Textbox accepts updated nickname; validation applied | BR: Nickname update validation |
|  |  |  | 5 | User taps [Save] button | — | System updates nickname; confirmation toast displayed | BR: Nickname save |
|  |  |  | 6 | User returns to beneficiary list | GetSourceAccountList (GET) | Beneficiary now displays updated nickname in all lists | BR: Nickname display update |
|  |  |  | 7 | [If Secure2u triggered] User completes Secure2u authentication | — | Update confirmed as secure transaction | BR: Conditional Secure2u for favourites |
| Journey 7: Create & Manage Recipient List | UJ7.3 | UJ7.3: Remove Beneficiary from Tab | 1 | User long-presses beneficiary or taps 3-dots menu | — | Beneficiary info & menu options displayed | BR: Long-press/3-dots menu |
|  |  |  | 2 | Menu shows "Remove" option | — | User can tap Remove to delete beneficiary from tab | BR: Remove menu option |
|  |  |  | 3 | User taps "Remove" | — | Confirmation dialog displayed: "Remove <Beneficiary>?" | BR: Remove confirmation |
|  |  |  | 4 | User confirms removal | ExecuteIntraTransfer (POST) | Beneficiary removed from selected tab | BR: Beneficiary removal |
|  |  |  | 5 | System displays confirmation toast | ExecuteIntraTransfer (POST) | "Beneficiary removed" message shown | BR: Removal confirmation message |
|  |  |  | 6 | [If removed from Frequent/Custom] Check other tabs | — | Beneficiary may still exist in other tabs (All, Favourites) | BR: Tab-specific removal logic |
|  |  |  | 7 | [If removed from Favourite] Secure2u may be triggered | — | Authentication required if removing from favourites | BR: Conditional Secure2u for favourite removal |
| Journey 8: Manage Favourite Lists | UJ7.3 | UJ7.3: Remove Beneficiary from Tab | 1 | User long-presses beneficiary or taps 3-dots menu | — | Beneficiary info & menu options displayed | BR: Long-press/3-dots menu |
|  |  |  | 2 | Menu shows "Remove" option | — | User can tap Remove to delete beneficiary from tab | BR: Remove menu option |
|  |  |  | 3 | User taps "Remove" | — | Confirmation dialog displayed: "Remove <Beneficiary>?" | BR: Remove confirmation |
|  |  |  | 4 | User confirms removal | ExecuteIntraTransfer (POST) | Beneficiary removed from selected tab | BR: Beneficiary removal |
|  |  |  | 5 | System displays confirmation toast | ExecuteIntraTransfer (POST) | "Beneficiary removed" message shown | BR: Removal confirmation message |
|  |  |  | 6 | [If removed from Frequent/Custom] Check other tabs | — | Beneficiary may still exist in other tabs (All, Favourites) | BR: Tab-specific removal logic |
|  |  |  | 7 | [If removed from Favourite] Secure2u may be triggered | — | Authentication required if removing from favourites | BR: Conditional Secure2u for favourite removal |
| Journey 8: Manage Favourite Lists | UJ8.1 | UJ8.1: Add Beneficiary to Favourites - From Transfer Landing Page | 1 | User navigates to Transfer Landing Page | InitiateIntraTransfer (POST) | All beneficiary lists displayed | BR: Landing Page display |
|  |  |  | 2 | User long-presses beneficiary (not yet in Favourites) | — | Beneficiary info & menu displayed | BR: Long-press menu |
|  |  |  | 3 | Menu shows option "Add to favourite" | — | User can select this option | BR: Add to favourite menu option |
|  |  |  | 4 | User taps "Add to favourite" | — | "Select Favourite List" or "Create New Favourite" dialog displayed | BR: Favourite selection/creation |
|  |  |  | 5 | User selects existing favourite list or creates new one | GetSourceAccountList (GET) | List selected or new list name entered | BR: Favourite list selection |
|  |  |  | 6 | User confirms addition to favourite | ExecuteIntraTransfer (POST) | System displays "Confirm add to favourite?" dialog | BR: Confirmation logic |
|  |  |  | 7 | User confirms | ExecuteIntraTransfer (POST) | Secure2u authentication page appears | BR: Secure2u required for adding favourite |
|  |  |  | 8 | User completes Secure2u challenge | — | Authentication successful | BR: A&A integration |
|  |  |  | 9 | Beneficiary added to Favourite list | GetSourceAccountList (GET) | Confirmation toast displayed: "Added to favourite" | BR: Favourite addition confirmation |
|  |  |  | 10 | Beneficiary now appears in Favourites tab | — | Beneficiary displays with favourite icon | BR: Favourites tab display |
| Journey 8: Manage Favourite Lists | UJ8.2 | UJ8.2: Manage Favourite Group - Add Recipient from Recent Transfer | 1 | User navigates to Transfer Landing Page and taps More Actions menu | InitiateIntraTransfer (POST) | Menu options displayed | BR: More Actions menu |
|  |  |  | 2 | User selects "Settings" or "Manage Favourites" | GetSourceAccountList (GET) | Manage Favourite dashboard displayed | BR: Favourite dashboard |
|  |  |  | 3 | System displays list of existing favourite groups | GetSourceAccountList (GET) | All created favourite groups shown | BR: Favourite group list display |
|  |  |  | 4 | User selects specific favourite group | GetSourceAccountList (GET) | Group detail page displayed with current members | BR: Manage Favourite Detail Group |
|  |  |  | 5 | User taps [+Add Recipient] button | — | Add recipient options displayed: By Account Number, From Recent, etc. | BR: Add recipient options |
|  |  |  | 6 | User selects "Add from Recent Transfer" | GetSourceAccountList (GET) | Recent transfer list displayed | BR: Add from Recent Transfer |
|  |  |  | 7 | User selects recently transferred beneficiary | GetSourceAccountList (GET) | Selected beneficiary highlighted | BR: Recent beneficiary selection |
|  |  |  | 8 | User confirms addition | ExecuteIntraTransfer (POST) | Secure2u may be triggered if this is first addition to group | BR: Conditional Secure2u |
|  |  |  | 9 | Beneficiary added to favourite group | — | Confirmation displayed; beneficiary now member of group | BR: Group membership update |
|  |  |  | 10 | User returns to favourite group detail | — | Updated member list shown with newly added beneficiary | BR: Group member list refresh |
| Journey 8: Manage Favourite Lists | UJ8.3 | UJ8.3: Remove Beneficiary from Favourite - Delete from Group | 1 | User navigates to Manage Favourites dashboard | — | Favourite groups displayed | BR: Favourite dashboard |
|  |  |  | 2 | User selects favourite group to edit | GetSourceAccountList (GET) | Group detail page displayed with members | BR: Group detail view |
|  |  |  | 3 | User long-presses or taps 3-dots on beneficiary member | — | Menu options displayed: Remove from group | BR: Member removal menu |
|  |  |  | 4 | User taps "Remove" | — | Confirmation dialog: "Remove <Beneficiary> from group?" | BR: Removal confirmation |
|  |  |  | 5 | User confirms removal | ExecuteIntraTransfer (POST) | Secure2u authentication page appears (if required) | BR: Conditional Secure2u for removal |
|  |  |  | 6 | User completes Secure2u | — | Authentication successful | BR: A&A integration |
|  |  |  | 7 | Beneficiary removed from favourite group | — | Confirmation toast displayed | BR: Removal confirmation |
|  |  |  | 8 | User returns to group detail | — | Updated member list shown without removed beneficiary | BR: Member list refresh |
|  |  |  | 9 | [If last member removed] Group display updated | — | Empty group may be deleted or retained based on config | BR: Empty group handling |
| Journey 9: Scheduled & Recurring Transfer | UJ8.3 | UJ8.3: Remove Beneficiary from Favourite - Delete from Group | 1 | User navigates to Manage Favourites dashboard | — | Favourite groups displayed | BR: Favourite dashboard |
|  |  |  | 2 | User selects favourite group to edit | GetSourceAccountList (GET) | Group detail page displayed with members | BR: Group detail view |
|  |  |  | 3 | User long-presses or taps 3-dots on beneficiary member | — | Menu options displayed: Remove from group | BR: Member removal menu |
|  |  |  | 4 | User taps "Remove" | — | Confirmation dialog: "Remove <Beneficiary> from group?" | BR: Removal confirmation |
|  |  |  | 5 | User confirms removal | ExecuteIntraTransfer (POST) | Secure2u authentication page appears (if required) | BR: Conditional Secure2u for removal |
|  |  |  | 6 | User completes Secure2u | — | Authentication successful | BR: A&A integration |
|  |  |  | 7 | Beneficiary removed from favourite group | — | Confirmation toast displayed | BR: Removal confirmation |
|  |  |  | 8 | User returns to group detail | — | Updated member list shown without removed beneficiary | BR: Member list refresh |
|  |  |  | 9 | [If last member removed] Group display updated | — | Empty group may be deleted or retained based on config | BR: Empty group handling |
| Journey 9: Scheduled & Recurring Transfer | UJ9.1 | UJ9.1: Create Scheduled Transfer - One-Time Future Transfer | 1 | User initiates transfer flow (any transfer type) | InitiateIntraTransfer (POST) | Proceeds through transfer entry, amount, and details screens | BR: Transfer flow completion |
|  |  |  | 2 | On Transfer Confirmation screen, user sees scheduling option | InitiateIntraTransfer (POST) | [Schedule Transfer] toggle or button available | BR: Scheduling option presentation |
|  |  |  | 3 | User taps [Schedule Transfer] toggle/button | InitiateIntraTransfer (POST) | Schedule Transfer dialog displayed with date/time picker | BR: Schedule initiation |
|  |  |  | 4 | User selects future transfer date (e.g., 5 days from now) | GetSourceAccountList (GET) | Date validated against business rules (not in past, within allowed window) | BR: Transfer date validation |
|  |  |  | 5 | User confirms selected date | GetSourceAccountList (GET) | System displays transfer summary with scheduled date | BR: Schedule confirmation |
|  |  |  | 6 | User taps [Confirm] to complete scheduled transfer setup | InitiateIntraTransfer (POST) | Secure2u authentication appears | BR: Secure2u for transfer |
|  |  |  | 7 | User completes Secure2u | — | Authentication successful; transfer scheduled | BR: A&A integration |
|  |  |  | 8 | Final Screen displays scheduled transfer receipt | InitiateIntraTransfer (POST) | Receipt shows: Transaction ID, Scheduled Date/Time, Beneficiary, Amount, Status: "Scheduled" | BR: Scheduled receipt display |
|  |  |  | 9 | User navigates to Transfer Settings > Scheduled Transfers | InitiateIntraTransfer (POST) | Scheduled transfer appears in list with scheduled date | BR: Scheduled transfer management view |
| Journey 9: Scheduled & Recurring Transfer | UJ9.2 | UJ9.2: Create Recurring Transfer - Automatic Repeated Transfers | 1 | User initiates transfer flow | InitiateIntraTransfer (POST) | Proceeds through standard transfer steps | BR: Transfer flow |
|  |  |  | 2 | On Transfer Confirmation screen, user selects [Recurring/Repeat] option | GetSourceAccountList (GET) | Recurring configuration dialog displayed | BR: Recurring option |
|  |  |  | 3 | User selects recurrence frequency (e.g., "Monthly") | GetSourceAccountList (GET) | Frequency options: Daily, Weekly, Bi-weekly, Monthly, Quarterly, etc. | BR: Recurrence frequency options |
|  |  |  | 4 | User sets start date (or today) and end date (or ongoing) | — | Date range validated; end date must be after start date | BR: Recurring date range validation |
|  |  |  | 5 | System displays recurring schedule preview | — | Preview shows scheduled transfer dates based on frequency | BR: Recurrence schedule preview |
|  |  |  | 6 | User confirms recurring setup | ExecuteIntraTransfer (POST) | Secure2u authentication page appears | BR: Secure2u required |
|  |  |  | 7 | User completes Secure2u | — | Authentication successful; recurring transfer created | BR: A&A integration |
|  |  |  | 8 | Final Screen displays recurring transfer receipt | InitiateIntraTransfer (POST) | Receipt shows: Transaction ID, Frequency, Start Date, End Date, Status: "Recurring Created" | BR: Recurring receipt display |
|  |  |  | 9 | Transfer appears in Scheduled Transfers list marked as "Recurring" | GetSourceAccountList (GET) | Recurring transfer manageable from settings | BR: Recurring transfer list display |
| Journey 9: Scheduled & Recurring Transfer | UJ9.3 | UJ9.3: Cancel Scheduled/Recurring Transfer | 1 | User navigates to Transfer Settings > Scheduled Transfers | InitiateIntraTransfer (POST) | List of scheduled and recurring transfers displayed | BR: Scheduled transfer list view |
|  |  |  | 2 | User taps on scheduled transfer to view details | InitiateIntraTransfer (POST) | Transfer detail page displayed with recipient, amount, scheduled date | BR: Transfer detail view |
|  |  |  | 3 | User taps [Cancel Transfer] button | InitiateIntraTransfer (POST) | Confirmation dialog displayed: "Cancel scheduled transfer?" | BR: Cancellation confirmation |
|  |  |  | 4 | User confirms cancellation | ExecuteIntraTransfer (POST) | Secure2u authentication page appears | BR: Secure2u required for cancellation |
|  |  |  | 5 | User completes Secure2u challenge | — | Authentication successful | BR: A&A integration |
|  |  |  | 6 | Transfer cancelled | InitiateIntraTransfer (POST) | Confirmation message displayed: "Transfer cancelled successfully" | BR: Cancellation confirmation message |
|  |  |  | 7 | User returns to Scheduled Transfers list | GetSourceAccountList (GET) | Cancelled transfer removed from list or marked as "Cancelled" | BR: List update after cancellation |
|  |  |  | 8 | [If close-to-date cancellation] Warning message may appear | — | "Transfer scheduled for execution soon" warning shown if within restricted window | BR: Close-to-date restriction |
| Journey 10: Transfer Limit Settings | UJ9.3 | UJ9.3: Cancel Scheduled/Recurring Transfer | 1 | User navigates to Transfer Settings > Scheduled Transfers | InitiateIntraTransfer (POST) | List of scheduled and recurring transfers displayed | BR: Scheduled transfer list view |
|  |  |  | 2 | User taps on scheduled transfer to view details | InitiateIntraTransfer (POST) | Transfer detail page displayed with recipient, amount, scheduled date | BR: Transfer detail view |
|  |  |  | 3 | User taps [Cancel Transfer] button | InitiateIntraTransfer (POST) | Confirmation dialog displayed: "Cancel scheduled transfer?" | BR: Cancellation confirmation |
|  |  |  | 4 | User confirms cancellation | ExecuteIntraTransfer (POST) | Secure2u authentication page appears | BR: Secure2u required for cancellation |
|  |  |  | 5 | User completes Secure2u challenge | — | Authentication successful | BR: A&A integration |
|  |  |  | 6 | Transfer cancelled | InitiateIntraTransfer (POST) | Confirmation message displayed: "Transfer cancelled successfully" | BR: Cancellation confirmation message |
|  |  |  | 7 | User returns to Scheduled Transfers list | GetSourceAccountList (GET) | Cancelled transfer removed from list or marked as "Cancelled" | BR: List update after cancellation |
|  |  |  | 8 | [If close-to-date cancellation] Warning message may appear | — | "Transfer scheduled for execution soon" warning shown if within restricted window | BR: Close-to-date restriction |
| Journey 10: Transfer Limit Settings | UJ10.1 | UJ10.1: View & Update Transfer Limit | 1 | User navigates to Transfer Landing Page and taps More Actions | InitiateIntraTransfer (POST) | More Actions menu displayed | BR: More Actions menu |
|  |  |  | 2 | User selects "Settings" > "Transfer Limits" | GetSourceAccountList (GET) | Transfer Limit Dashboard displayed | BR: Transfer Limit Dashboard (Step 28) |
|  |  |  | 3 | System displays transfer mode limits | InitiateIntraTransfer (POST) | All applicable transfer modes shown: Intrabank, BI-FAST, RTOL, BI-SKN, RTGS | BR: Transfer mode list display |
|  |  |  | 4 | User selects specific transfer mode (e.g., "BI-FAST") | GetSourceAccountList (GET) | Transfer Limit Detail page displayed for selected mode | BR: Transfer Limit Detail (Step 30) |
|  |  |  | 5 | System displays current daily limit for selected mode | GetSourceAccountList (GET) | Current limit shown: e.g., "IDR 500,000,000 per day" | BR: Current limit display |
|  |  |  | 6 | User taps [Edit Limit] or [Set New Limit] button | — | Edit Limit dialog displayed with input field | BR: Limit edit initiation |
|  |  |  | 7 | User enters new limit amount (e.g., "IDR 1,000,000,000") | — | Input validates: numeric, within system max limit, positive value | BR: Limit amount validation |
|  |  |  | 8 | System displays new limit with applicable fees (if any) | — | Updated limit confirmed; fees calculated if applicable | BR: Limit update display |
|  |  |  | 9 | User taps [Save] or [Confirm] button | ExecuteIntraTransfer (POST) | Secure2u authentication page appears | BR: Secure2u required for limit change |
|  |  |  | 10 | User completes Secure2u challenge | — | Authentication successful | BR: A&A integration |
|  |  |  | 11 | New limit saved | — | Confirmation message: "Daily transfer limit updated successfully" | BR: Limit save confirmation |
|  |  |  | 12 | User returns to Transfer Limit Detail | InitiateIntraTransfer (POST) | Updated limit now displays for selected mode | BR: Limit display update |
| Journey 10: Transfer Limit Settings | UJ10.2 | UJ10.2: Transfer Limit by Rail - Intrabank vs. Interbank | 1 | User navigates to Transfer Limits Dashboard | InitiateIntraTransfer (POST) | Transfer modes listed: Intrabank, BI-FAST, RTOL, BI-SKN, RTGS | BR: Transfer rail list display |
|  |  |  | 2 | User checks Intrabank daily limit | IntraPreMonetaryCheck (N/A) | Intrabank limit displayed (e.g., IDR 1B per day) | BR: Intrabank limit denomination |
|  |  |  | 3 | User checks BI-FAST daily limit | — | BI-FAST limit displayed (e.g., IDR 500M per day) | BR: Interbank BI-FAST limit |
|  |  |  | 4 | User checks RTGS daily limit | — | RTGS limit displayed (e.g., IDR 2B per day) | BR: Interbank RTGS limit |
|  |  |  | 5 | User observes different limits per rail | — | Limits vary based on transfer mode; RTGS typically highest | BR: Limit denomination per rail |
|  |  |  | 6 | User updates one limit (e.g., BI-FAST limit to 750M) | — | Specific limit updated; other limits remain unchanged | BR: Rail-specific limit update |
|  |  |  | 7 | System confirms only selected limit changed | GetSourceAccountList (GET) | Other rails' limits unchanged | BR: Independent limit management |
| Journey 10: Transfer Limit Settings | UJ10.3 | UJ10.3: Transfer Limit Error - Attempt to Exceed Daily Limit | 1 | User checks available daily limit | — | Available limit shown: IDR 500M (daily reset) | BR: Daily limit display |
|  |  |  | 2 | User completes transfer of IDR 300M | InitiateIntraTransfer (POST) | Transfer succeeds; remaining daily limit: IDR 200M | BR: Daily limit deduction |
|  |  |  | 3 | Time advances to next calendar day (00:00) | — | System resets daily transfer limit | BR: Daily reset logic |
|  |  |  | 4 | User checks available daily limit next day | — | Available limit shows IDR 500M again (reset to full) | BR: Daily reset confirmation |
|  |  |  | 5 | [If monthly limit applicable] System tracks cumulative monthly transfer | InitiateIntraTransfer (POST) | Monthly total: IDR 300M + new transfers | BR: Monthly accumulation logic |
|  |  |  | 6 | User monitors remaining monthly limit | — | Monthly remaining displayed separately from daily limit | BR: Monthly vs. Daily limit display |
| Journey 10.4: Transfer Limit Reset - Daily vs. Monthly | UJ10.3 | UJ10.3: Transfer Limit Error - Attempt to Exceed Daily Limit | 1 | User checks available daily limit | — | Available limit shown: IDR 500M (daily reset) | BR: Daily limit display |
|  |  |  | 2 | User completes transfer of IDR 300M | InitiateIntraTransfer (POST) | Transfer succeeds; remaining daily limit: IDR 200M | BR: Daily limit deduction |
|  |  |  | 3 | Time advances to next calendar day (00:00) | — | System resets daily transfer limit | BR: Daily reset logic |
|  |  |  | 4 | User checks available daily limit next day | — | Available limit shows IDR 500M again (reset to full) | BR: Daily reset confirmation |
|  |  |  | 5 | [If monthly limit applicable] System tracks cumulative monthly transfer | InitiateIntraTransfer (POST) | Monthly total: IDR 300M + new transfers | BR: Monthly accumulation logic |
|  |  |  | 6 | User monitors remaining monthly limit | — | Monthly remaining displayed separately from daily limit | BR: Monthly vs. Daily limit display |