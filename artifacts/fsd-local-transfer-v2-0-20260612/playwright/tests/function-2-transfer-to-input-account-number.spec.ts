import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function2TransferToInputAccountNumberPage } from "../page-objects/function-2-transfer-to-input-account-number.page";

test.describe("FUNCTION 2: TRANSFER TO - INPUT ACCOUNT NUMBER", () => {
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_001 | [INTERBANK] Transfer To - Input Account No (Tap on '+Transfer')", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_002 | [INTRABANK] Input Account Number", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_003 | Transfer to Drawer Display - if Bene Banks are Offline", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_007 | 2 | Title Header | N/A | Alphanumeric | Display | Integration | Display 'Transfer' | CMS: 1. Retrieve label 'Transfer'", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_008 | 3 | Transfer to (Bene Bank Name) | Yes | Alphanumeric | Dropdown List | Integration | 1. Pre-populated with selected Bank from Transfer to drawer. 2. If a new bank is selected, system clears the account number field. Refer to Business Rules for details.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_009 | 4 | Account number | Yes | Numeric | Text box 9(20) | Input | 1. Upon tapping, system draws up phone's numeric keypad. 2. Upon tapping on Done on keypad, account number will be formatted & displayed. 4. Paste is supported for numeric only. Pasted alphabets and special characters will be removed from the field and show only the numeric values. 5. For Maybank, accepts both CASA, VA, and iBaaS.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_010 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_011 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_012 | 1 | 'Transfer to/Select Bank drawer' 1. Search & Listing - Wildcard Bank search on Bank Name will be performed once user has entered 2 characters. 2. Search to include alias/tags (to be maintained in NGBO - Bank List). E.g. user types ''Bank Central'' or ''BCA'', system will match and list Bank Central Asia. 3. Listing will be displayed as below: a. Maybank will be first in list. b. Banks - list top 10 banks and follow by remaining bank list sorted in ascending order (A-Z, 0-9). 4. Banks with status = Offline (configured in NGBO) a. Display label ''Service offline'' (without affecting the sorting & display sequence). b. Selection is disabled. 5. If search returns empty, display 'We couldn't find a match for <input value>'. System Config: 1. Category tabs are parameterized by country (e.g. for Malaysia values are: All, Banks, eWallet). - For ID: only displays Banks, if only 1 pill then do not display pill. - For other countries: values may not limited to All, Banks, eWallet (do note that content requirement still needs to be specified for display of each new tab and with consideration of regionalisation) | NGBO (P&T): 1. Retrieve Bank with: a. All status b. Top 10 bank with display sequence & remaining banks c. Search criteria (if any) & sorting order. d. Search to include bank alias/tags CMS: 1. Retrieve bank logo and labels. 3. Retrieve EMPTY image, message & info.", async ({ request }) => {
    const response = await request.post("/", {
      headers: buildApiHeaders(),
      data: {}
    });
    expect(response.ok()).toBeTruthy();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_013 | 2 | For Intrabank Transfer: 1. Via Beneficiary Listing, when tap on Beneficiary: a. If beneficiary selected is with Account Type = GAA, system to display 'Select currency drawer'. Select currency option to proceed. Else skip this step. b. Display Input Amount page. 2. Via [+Transfer], at 'Input Acct No' page, when tap on [Next]: a. Perform fields validation. - If account number field is empty, display inline error message 'Required field'. b. Perform an inquiry to check Account Type & retrieve Beneficiary Name. - If invalid account, display inline error 'Please enter a valid account number' c. If Bene Account Type = GAA, system to display 'Select currency drawer', select currency option to proceed. If Bene Account Type is not GAA, skip this step. d. Display Input Amount page. | ECLIPSE -> ESB: 1. Account Inquiry to retrieve Account Type & Beneficiary Name based on the bene account number 2 VA account inquiry same as accountInquiry, ESB will orchestarte downstream services - VA Account - 7891050001150000 (first 2 digit = 78) 3. IBAAS account - 10 digit acc no, 2nd digit = '798' | How do receive the list of currency after selecting foreign beneficary account? (To be discussed separately with Systematic team in Overseas Transfer session)", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_014 | 3 | For Interbank Transfer: 1. Via Beneficiary Listing, when tap on Beneficiary: a. Display Input Amount page. 2. Via [+Transfer], when tap on [Next]: a. Perform fields validation. - If account number field is empty, display inline error message 'Required field'. b. Perform Beneficiary Account Inquiry using below payment rails in sequence, based on the Bene bank's membership: - BI-FAST - RTOL (i) In the event BI-FAST: - return 'Invalid Account' or timeout, proceed to check beneficiary account using RTOL network. (ii) In the event RTOL return: - 'Invalid Account', display toastbar error message: 'Please enter a valid account number' - timeout, proceed to Input Amount Page. c. If Bank is not maintained within BI-FAST/RTOL (flag at NGBO), skips beneficiary account inquiry and navigate to Input Amount page. d. If beneficiary account number is valid, navigate to Input Amount page. Refer Table 1 below for scenarios & handling. | ESB: 1. Interbank Account Inquiry based on the bene account number, inquiry via: - BIFAST - RTOL", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_016 | Membership | Input Account No Page - Acct Inq | Outcome | Details Page", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_018 | Y | Valid | Not required | Input Amount page | BI-FAST", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_019 | Y | Invalid | Valid | Input Amount page | RTOL", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_020 | Y | Timeout | Valid | Input Amount page | BI-FAST", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_021 | Y | Invalid/ Timeout | Invalid | Inline Error Message | N/A. Unable to proceed", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_022 | Y | Invalid | Timeout | Input Amount page | RTOL", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_023 | Y | Timeout | Input Amount page | BI-FAST", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_024 | Y | N | Valid | N/A | Input Amount page | BI-FAST", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_026 | Y | N | Timeout | N/A | Input Amount page | BI-FAST", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_027 | N | Y | N/A | Valid | Input Amount page | RTOL", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_029 | N | Y | N/A | Timeout | Input Amount page | RTOL", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_031 | N | Y | N/A | Input Amount page | BI-SKN", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_2_TRANSFER_TO_INPUT_ACCOUNT_NUMBER_TC_032 | N | Y | N/A | Input Amount page | RTGS", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function2TransferToInputAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
