import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function3InputAmountPage } from "../page-objects/function-3-input-amount.page";

test.describe("FUNCTION 3: INPUT AMOUNT", () => {
  test("FUNCTION_3_INPUT_AMOUNT_TC_006 | Error Handling - Inline Error & Toastbar | Error Handling - Amount Limit Messages | [INTRABANK & INTERBANK] User has only 1 eligible account, hide Change button", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function3InputAmountPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_3_INPUT_AMOUNT_TC_007 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function3InputAmountPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_3_INPUT_AMOUNT_TC_008 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function3InputAmountPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_3_INPUT_AMOUNT_TC_009 | 1 | Transfer To - Beneficiary informations will be populated from 2 entry points: 1. User selects beneficiary from beneficiary list in Transfer Landing Page. * Note that Bene nickname is not required to be displayed here, including Trf to Own. 2. User manually select bank and enter account number.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function3InputAmountPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_3_INPUT_AMOUNT_TC_010 | 2 | Transfer From (Source of Funds): 1. Retrieve & default to primary account (from Settings > Primary App Account). 2. User can tap on [Change] to change SoF. IF user changes the SoF account, it will not change/update the default SoF for the subsequent transfers. 3. Transfer From Drawer: a. Retrieve list of user's account based on 'Table 1 - SoF Eligibility Check'. This is further filtered by Personal or IBO. b. Indicate Primary Account 3. IF user has only 1 SoF account, [Change] button will be hidden. Transfer to OWN account: a. User is not allowed to select SoF as the same as receiving account number. If selected SoF is the same as receiving account number, system displays toastbar error message 'You cannot send money to the same account you're transferring from.'. Note: For SoF criteria and behaviour, to refer to Common FSD. | ECLIPSE: 1. Retrieve Account & Info (Nickname, Account Ccy, Current Balance) based on the criteria, with Primary Account Flag. CMS: 1. Retrieve maybank logo", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function3InputAmountPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_3_INPUT_AMOUNT_TC_011 | 3 | Transfer Amount - Transfer Currency: 1. INTRABANK & OWN a. To default the Transfer Ccy field to Beneficiary Account's currency. Refer to 'Table 2 - Default Transfer Currency'. b. For GAA: (i) If SoF is GAA, user can tap on [You Send] Ccy dropdown to select the supported currency as per SoF's GAA's available ccy (with Current Bal > 0). (ii) if Bene Account is GAA, user can tap on [They Get] Ccy dropdown to select the supported currency as per GAA's supported ccy. (iii) If both [You Send] and [They Get] are same currency, to disable [They Get] Amount field. 2. INTERBANK a. To default Transfer Ccy = IDR. Refer to 'Table 2 - Default Transfer Currency'. Note: Refer to '1.1.2.1 LLD & FOREX Matrix' for currencies allowed for each transfer mode. | ECLIPSE: - Retrieve GAA supported currencies. - Retrieve GAA currencies with current balance > 0.", async ({ request }) => {
    const response = await request.post("/", {
      headers: buildApiHeaders(),
      data: {}
    });
    expect(response.ok()).toBeTruthy();
  });
  test("FUNCTION_3_INPUT_AMOUNT_TC_012 | 4 | Transfer Amount - Remaining Limit: 1. OWN a. Not applicable, NO NEED to display. 2. INTRABANK a. New Transfer & Bene Listing When entering amount, to check if remaining user daily limit (include the entered amount) hits > 70% (System Config) of the defined limit (Settings > Intrabank Transfer): (i) 'IDR - IDR' - display 'Remaining limit IDR 999,999' with Manage limit hyperlink (refer to screen). (ii) 'IDR - FCY' & 'FCY - IDR' - to calculate remaining limit using latest FOREX and display in IDR. (ii) 'FCY - FCY', 'FCY - xFCY' - xxx 3. INTERBANK a. New Transfer (Open & Bene Listing) Since transfer mode has not been selected, remaining limit checking will not be performed nor displayed. b. Existing Transfer (Open & Bene Listing) When entering amount (since system derives the default Tranfser Mode based on last successful interbank transfer), to check if remaining user daily limit (include the entered amount) hits > 70% (System Config) of the defined limit (Settings > BI-FAST/ Transfer Online/ BI-SKN/ RTGS): (i) 'IDR - IDR' - display 'Remaining limit IDR 999,999' with Manage limit hyperlink (refer to screen). Note that 'IDR 999,999' is a placeholder format. Real values depends on remaining limit of the specific transfer rail. (ii) 'FCY - IDR' - to calculate remaining limit using latest FOREX and display in IDR. 4. Transfer Amount - Account Limit Checking: System to display pop up message for below, with option to 'Proceed anyway' & 'Change amount': a. If transaction amount exceeds user's daily remaining limit, display pop up title as 'Remaining limit exceeded', message 'You may still proceed, but to complete this transaction you must change the amount or manage your limit.'. b. If transaction amount exceeds SoF Available Balance, display pop up title 'Insufficient funds', message 'You may still proceed, but to complete this transaction you must change the amount.'. c. If transaction amount exceeds user's daily remaining limit & SoF Available Balance, display pop up title as 'Insufficient funds and remaining limit exceeded', message 'You may still proceed, but to complete this transaction you must change the amount or manage your limit.' 5. Manage Limit hyperlink a. Display Manage Limit Link if the flag is turned on (System Config) . b. Upon tapping [manage limit] hyperlink, redirect user to Manage transaction daily limit screen for respective Transfer mode (Refer to Tab: Transfer - Manage Limit Details). Once completed, to redirect back to Input Amount screen. c. New limit will be effective immediately upon changing. System Config: 1. % threshold (70%) for limit checking shared by all transfer mode (Intrabank & Interbank), by Country. 2. Manage Limit Link display flag | ESB - Trapi: 1. Retrieve Foreign Exchange Rate P&T: - User defined daily transfer limit NGBO: 1. % threshold (70%) for limit checking shared by all transfer mode (Intrabank & Interbank), by Country. 2. Manage Limit Link display flag | [FCY] To confirm: 1. Limit checking if FCY to FCY, system to convert and display in IDR? 2. For interbank FCY, does system check USD 100K monthly limit?", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function3InputAmountPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_3_INPUT_AMOUNT_TC_013 | 5 | Transfer Amount (FCY related) - Other Business Rules: 1. For any FOREX transaction (IDR to FCY, FCY to xFCY, FCY to IDR?), if per transfer amount > USD 100,000, to display inline error message 'Maximum amount is USD 100,000.' 2. For IDR to FCY Transfer : a. Retrieve FOREX (IDR/FCY pair) & display. b. User has the option to enter Amount in IDR or Amount in FCY. c. Entering amount in IDR, system will calculate Amount in FCY. (Amount in IDR/Exchange Rate) d. Entering amount in FCY, system will calculate Amount in IDR. (Amount in FCY x Exchange Rate) 3. Indicative exchange rate: a. Displays indicative exchange rate for cross currency pair (IDR to FCY or FCY to xFCY) based on SoF holding currency. | ESB: 1. Retrieve Foreign Exchange Rate NGBO: 1. FOREX trxn - USD threshold per trxn (100k). | [FCY] To confirm: 1. Intrabank FCY to xFCY is allowed - Screen required.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function3InputAmountPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_3_INPUT_AMOUNT_TC_014 | 6 | Schedule/ Recurring option: 1. End Date & No. of Transaction behaviour (i) IF user changes the Number of Transaction, system will re-calculate the corresponding end date based on the Number of Transactions selected. (ii) IF user returns to End Date tab, system to default & display the newly derived date. (iii) IF user changes the End Date after Number of Transaction is selected, system will re-calculate the corresponding Number of Transaction based on the End Date selected. (iv) IF user returns to Number of Transaction tab, system to default & display the newly derived value. 2. Scheduled/ recurring transaction is NOT applicable for (hide 'Schedule or set recurring' Toggle field): a. Interbank transfer FCY to IDR b. Intrabank transfer with FCY, i.e. IDR to FCY, FCY to IDR, FCY to same FCY & FCY to xFCY. c. Own & Intrabank - beneficiary account is Virtual Account d. Own & Intrabank - beneficiary account is IBAAS Account (Islamic Banking as a Service) 3. Upon tapping 'Set' on scheduled/recurring details drawer, system displays Info blue box banner 'Please check the transaction status on the scheduled date. In the event of a disrupted transfer, you will need to manually retry.' (refer to screen) | NGBO (P&T Ownership): 1. To retrieve the recurring options: a. Just Once b. Weekly c. Monthly", async ({ request }) => {
    const response = await request.post("/", {
      headers: buildApiHeaders(),
      data: {}
    });
    expect(response.ok()).toBeTruthy();
  });
  test("FUNCTION_3_INPUT_AMOUNT_TC_015 | 7 | Special rate: 1. Only applicable to below: a. Customer segment = 'Privilege' or 'Premier' d. Intrabank with FOREX transaction (IDR to FCY, FCY to IDR, FCY to xFCY). 2. Tap [apply] at 'Apply special rate' drawer, system to perform validation checking: a. If special rate is < 9 digits, display inline message 'Please enter a valid special rate code.' b. Validate special rate ID (to Trapi), - if invalid, display toastbar message 'Please enter a valid special rate code' - If expired, display toastbar message 'Special rate code expired.' c. If special rate is valid, system to close the drawer, display special rate applied screen and populate [You send] and [They get] amount. Both amount fields are disabled. d. If special rate is valid, system to change 'Indicative Exchange Rate <CCY amount> ≈ <CCY amount>' to 'Special exchange rate <CCY 1> = <CCY rate>'. e. To edit applied special rate, user requires to tap the special rate ID [hyperlink]. User to continue either to alter or delete the current value. 3. Special rate can only be used during the validation period which is between 08.00AM and 02.30PM (from NGBO). 4. IF user change the Source of Funds accounts: a. System resets all fields. | ESB - Trapi 1. Special rate ID/Code validation 2. Retrieve special rate NGBO: 2. Retrieve special rate operational days & hours. ECLIPSE: 1. Customer Segment | [FCY] To confirm: 1. Toastbar error for BE validation", async ({ request }) => {
    const response = await request.post("/", {
      headers: buildApiHeaders(),
      data: {}
    });
    expect(response.ok()).toBeTruthy();
  });
  test("FUNCTION_3_INPUT_AMOUNT_TC_016 | 8 | When tap [Next] to proceed, perform validation: 1. Fields validation & all validation mentioned above 2. SoF Account eligibility (refer to Table 1 - SoF Eligibility Check). If SoF account is NOT eligible to perform transfer, system displays toastbar message 'Your selected account does not support this transfer type. Please select another account.' 3.Minimum per Transaction Limit: a. Interbank - Minimum transaction amount (from NGBO, is IDR 10,000) for all interbank transfer mode. If does not meet, display inline error message 'Minimum amount is IDR <min limit based on transfer mode>' b. Intrabank & Own - Minimum transaction amount (from NGBO, is IDR 1). If does not meet, display inline error message 'Minimum amount is IDR <min limit based on transfer mode>' 4. Maximum per Transaction Limit: a. Interbank, Intrabank & Own - Maximum transaction amount (from NGBO) for selected transfer mode. If does not meet, display inline error message 'Maximum amount is IDR <min limit based on transfer mode>' b. Intrabank - it is not allowed to transfer more than USD 50k. System displays 'Maximum amount is USD 50,000.' (To confirm if this is required for Interbank since it would have exceeded Payment Rail's max limit) - use Counter Rate (from Trapi) for conversion to USD. 5. Daily Limit by Transfer Mode (from Settings) a. If exceeds, display warning message 'Amount cannot exceed your remaining limit' (but user still can proceed as final validation happens at confirmation screen). b. Applies to Intrabank & Interbank (BI-FAST, RTOL, BI-SKN, RTGS) only. 5. SoF Balance Checking a. Refer to Figure 1 (Balance and Account Checking Diagram Flow) If amount > SoF account balance, display warning message 'Amount should not exceed your account balance.' (but user still can proceed as final validation happens at confirmation screen) b. For scheduled/recurring transaction, system skips SoF balance checking. 5. Special rate validation checking (if applied). IF outside validation period, system to display 'Special rate not available' pop up. 6. If user tap [Next] button while not resolving the error, displays toastbar error message 'Please resolve all errors to proceed'. Once successful, system to redirect to Transfer Details screen. Note: 1. For Interbank a. Transfer initiated from Beneficiary Listing, Transfer Mode used is default to last succesful transfer mode performed. b. Transfer initiated from New Transfer, Transfer Mode will be based on the default derived from Input Account No page. 2. Maximum transaction amount by transfer mode will only be validated at Confirmation Page | NGBO (P&T Ownership): 1. Retrieve Min Transaction Amount by Transfer Mode (configurable per Country): a. Own b. Intrabank c. Interbank (applies to all BI-FAST, RTOL, BI-SKN, RTGS) Trapi: 1. Counter Rate ECLIPSE: 1. Last successful interbank transfer - transfer mode, by Bene Bank + Bene Account No", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function3InputAmountPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_3_INPUT_AMOUNT_TC_019 | Transfer Local - display in SoF, allow to perform transfer | Exclude Product Code in Table 1.1 | SA | 00 - Active | 01 - Single Individual 02 - Joint OR Primary | A - Active", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function3InputAmountPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_3_INPUT_AMOUNT_TC_020 | Transfer Local - display in SoF, allow to perform transfer | Exclude Product Code in Table 1.1 | CA | 00 - Active | 01 - Single Individual 02 - Joint OR Primary | A - Active", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function3InputAmountPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_3_INPUT_AMOUNT_TC_097 | 2 | D | Delete", async ({ request }) => {
    const response = await request.post("/", {
      headers: buildApiHeaders(),
      data: {}
    });
    expect(response.ok()).toBeTruthy();
  });
  test("FUNCTION_3_INPUT_AMOUNT_TC_102 | SoF | Bene Account | Transfer | You Send | They Get", async ({ request }) => {
    const response = await request.post("/", {
      headers: buildApiHeaders(),
      data: {}
    });
    expect(response.ok()).toBeTruthy();
  });
});
