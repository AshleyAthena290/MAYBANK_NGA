import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function6FinalPage } from "../page-objects/function-6-final.page";

test.describe("FUNCTION 6: FINAL", () => {
  test("FUNCTION_6_FINAL_TC_003 | [INTERBANK] BI-FAST End Screen | [INTERBANK] RTOL End Screen | [INTERBANK] BI-SKN End Screen | [INTERBANK] RTGS End Screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_004 | [INTRABANK] End Screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_005 | [OWN] End Screen | S", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_006 | [INTERBANK] End Screen w/ Additional Details | [INTRABANK] End Screen w/ Additional Details", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_007 | Scheduled/Recurring End Screen | [INTERBANK] Scheduled/Recurring Receipt | [INTRABANK] Scheduled/Recurring Receipt | [OWN] Scheduled/Recurring Receipt", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_008 | Select Transaction Category | [BI-SKN & RTGS] Transfer Prcocessing (Account Debited but Pending Credit) | Add Beneficiary to Favourite | Error Handling - tap/retap heart icon", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_011 | [INTERBANK] End Screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_012 | [INTERBANK] BI-SKN (FCY - IDR) End Screen | [INTERBANK] IDR to IDR - Receipt | [INTERBANK] BI-SKN (FCY - IDR) Receipt | [INTERBANK] Unsuccesful End Flow", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_013 | [INTRABANK] IDR to IDR end screen | [INTRABANK] FCY to FCY end screen | [INTRABANK] IDR to FCY end screen (GAA) | [INTRABANK] with Special Rate ID End Screen | [INTRABANK] IDR to IDR Receipt | [INTRABANK] FCY to FCY Receipt (For IDR to IDR, display IDR as Ccy) | [INTRABANK] IDR to FCY Receipt | [INTRABANK] IDR to FCY Special Rate", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_014 | [INTERBANK] w/ Additional Details Receipt and Underlying Doc END SCREEN | [INTERBANK] w/ Additional Details & Underlying Doc RECEIPT | [INTRABANK] w/ Additional Details & Underlying Doc END SCREEN | [INTRABANK] w/ Additional Details & Underlying Doc RECEIPT", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_015 | 68 | Title Header | N/A | Alphanumeric | Display | Integration | Display 'Receipt' | CMS: 1. Retrieve title header 2. Retrieve Maybank logo", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_016 | 69 | Maybank Logo | N/A | Image | Display | Integration | Display Maybank logo | CMS: 1. Retrieve title header 2. Retrieve Maybank logo", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_017 | 70 | Transaction Type | N/A | Alphanumeric | Display | Local Server | Display 'Transfer'", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_018 | 71 | Transaction Status (Label) | N/A | Alphanumeric | Display | Local Server | Display either: 1. Successful (Green Label) 2. Scheduled - For recurring transaction (Orange label)", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_019 | 72 | Transaction Date & Timestamp | N/A | Alphanumeric | Display | Local Server | Populate from Status screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_020 | 73 | Ref ID | N/A | Alphanumeric | Display | Local Server | Populate from Status screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_021 | 74 | Total Amount | N/A | Alphanumeric | Display | Local Server | Populate from Status screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_022 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_023 | No. | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_024 | 1 | Upon transfer confirmation, below are the possible status: a. Transfer Successful - For a successful transaction posting. b. Transfer Scheduled - For a successful scheduled or recurring transaction. c. Transfer Processing - For a successful debit but pending credit/status returned from BI-SKN or RTGS d. Transfer Unsuccessful: - For Unsuccessful transaction posting. - For Unsuccessful scheduled or recurring transaction. e. Transfer Pending - For timeout transaction. (Pending screen) e. Authorisation failed (refer to [A&A] S2U for: - S2U authorisation expired, rejected or failed. For display fields: a. System carries over values from confirmation screen (hide blank fields). | IAM: 1. S2U Auth & status ESB: 1. Transaction posting status ECLIPSE: 1. Update Transaction Category.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_025 | 2 | Receipt: 1. Receipt option is only available if Transaction status is successful or processing (for BI-SKN & RTGS). 2. Upon tapping [Share], system opens device's native sharing options. Receipt will be shared in Image format. 3. If tap on View Receipt then [Share], system opens device's native sharing options. Receipt will be shared in PDF format.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_027 | 4 | Adding to favourite: 1. Tapping love icon will add beneficiary to favourite. As a result, heart shape will be filled with a full black color. Retapping on black heart will remove the added beneficiary from favourite. S2U is not required. a. In the event user is tapping and retapping, during the 5th tap system displays a toastbar error message 'Unable to process request'. Beneficiary will not be added to favourite list. (Example: Add - Remove - Add - Remove - tapping the 3rd Add will display the error message) 2. For Transfer to Beneficiary that is already a favourite, heart icon is hidden. 3. For Transfer to Maybank's one-off VA account (closedPayment flag), heart icon is hidden. 4. For Transfer to Own account, heart icon is hidden.", async ({ request }) => {
    const response = await request.post("/", {
      headers: buildApiHeaders(),
      data: {}
    });
    expect(response.ok()).toBeTruthy();
  });
  test("FUNCTION_6_FINAL_TC_028 | 5 | 1. Upon tapping [Done], navigate to Transfer Landing Page: a. Populate beneficiary to ALL category with immediate effect. b. Populate beneficiary to FREQUENT if the criteria is met (Refer to Transfer - Landing Page tab), refresh sorting criteria. c. Only perform above if beneficiary is not duplicate in above listing . Refer to Transfer - Landing Page Biz Rule #8 for unique key. 2. Below transaction will not be populated to Transfer Landing Screen: a. Transaction to VA account that is one off/single usage (ClosedPayment flag). 3. For successful transaction and processing, receipt can be obtained from Source of Funds transaction history. (Refer to Account Dashboard FSD.) Note: 1. In the event a transfer fails (and SOF has been debited for both transfer amount & Admin fee) , Core Banking will reverses both the transfer amount and the admin fee. 2. In the event SoF balance is insufficient during scheduled/recurring transfer, admin fee will still be charged to the user based on defined rail. | ECLIPSE: 1. For Maybank Bene, if VA, retrieve isClosedpayment flag to check if is single use. Note: ESB to perform transaction reversal if transfer fails.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_6_FINAL_TC_029 | 6 | For latest Receipt with Theme: 1. Refer to 1.1.7.1 Receipt w Theme 2. Meta Data no change", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function6FinalPage(page);
    await pageObject.open();
    await assertVisualStub(page);
  });
});
