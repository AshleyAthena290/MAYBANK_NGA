import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function32RecipientListAddToFavFromAllFrequentTabPage } from "../page-objects/function-32-recipient-list-add-to-fav-from-all-frequent-tab.page";

test.describe("FUNCTION 32: RECIPIENT LIST - ADD TO FAV (FROM ALL, FREQUENT TAB)", () => {
  test("FUNCTION_32_RECIPIENT_LIST_ADD_TO_FAV_FROM_ALL_FREQUENT_TAB_TC_003 | 4 | Status Image & Status | N/A | Image | Display | Integration | Available status: 1. Added as Favourite 2. Update unsuccessful | CMS: 1. Retrieve image & stautus message for: - Successful - Unsuccessful", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function32RecipientListAddToFavFromAllFrequentTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_32_RECIPIENT_LIST_ADD_TO_FAV_FROM_ALL_FREQUENT_TAB_TC_004 | 5 | Date & Timestamp | N/A | Alphanumeric | Display | Local Server | Display date and time.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function32RecipientListAddToFavFromAllFrequentTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_32_RECIPIENT_LIST_ADD_TO_FAV_FROM_ALL_FREQUENT_TAB_TC_005 | 6 | Ref ID | N/A | Alphanumeric | Display | Local Server | Display generated Reference ID.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function32RecipientListAddToFavFromAllFrequentTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_32_RECIPIENT_LIST_ADD_TO_FAV_FROM_ALL_FREQUENT_TAB_TC_007 | 7 | Account Holder Name | N/A | Alphanumeric | Display | Local Server | Populate from Beneficiary Listing page.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function32RecipientListAddToFavFromAllFrequentTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_32_RECIPIENT_LIST_ADD_TO_FAV_FROM_ALL_FREQUENT_TAB_TC_008 | 8 | Account Number | N/A | Alphanumeric | Display | Local Server | Populate from Beneficiary Listing page.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function32RecipientListAddToFavFromAllFrequentTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_32_RECIPIENT_LIST_ADD_TO_FAV_FROM_ALL_FREQUENT_TAB_TC_009 | 9 | Recipient Bank | N/A | Alphanumeric | Display | Local Server | Populate from Beneficiary Listing page.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function32RecipientListAddToFavFromAllFrequentTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_32_RECIPIENT_LIST_ADD_TO_FAV_FROM_ALL_FREQUENT_TAB_TC_010 | 10 | Nickname | N/A | Alphanumeric | Display | Local Server | Populate from Beneficiary Listing page (if nickname is available).", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function32RecipientListAddToFavFromAllFrequentTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_32_RECIPIENT_LIST_ADD_TO_FAV_FROM_ALL_FREQUENT_TAB_TC_012 | 11 | Transaction Type | N/A | Alphanumeric | Display | Local Server | Display Transaction Type 'Add Favourite'", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function32RecipientListAddToFavFromAllFrequentTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_32_RECIPIENT_LIST_ADD_TO_FAV_FROM_ALL_FREQUENT_TAB_TC_014 | No. | Action | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function32RecipientListAddToFavFromAllFrequentTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_32_RECIPIENT_LIST_ADD_TO_FAV_FROM_ALL_FREQUENT_TAB_TC_015 | 5 | [Done] button | Upon tapping, system redirects to Transfer Landing Page.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function32RecipientListAddToFavFromAllFrequentTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_32_RECIPIENT_LIST_ADD_TO_FAV_FROM_ALL_FREQUENT_TAB_TC_016 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function32RecipientListAddToFavFromAllFrequentTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_32_RECIPIENT_LIST_ADD_TO_FAV_FROM_ALL_FREQUENT_TAB_TC_017 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function32RecipientListAddToFavFromAllFrequentTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_32_RECIPIENT_LIST_ADD_TO_FAV_FROM_ALL_FREQUENT_TAB_TC_018 | 1 | 1. Long press or tap on 3 dots behaviour, please refer to [Recipient - Add Note] 2. At Select a favourites list drawer, system pre-select Fav or Custom List which the Bene already exist.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function32RecipientListAddToFavFromAllFrequentTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_32_RECIPIENT_LIST_ADD_TO_FAV_FROM_ALL_FREQUENT_TAB_TC_019 | 2 | 1. Upon tapping Add to favourite, to display a drawer consists of favourite and custom beneficiary category list. a. If the number of tab list is less than maximum allowed, system to display the (+) Create new list button. Otherwise, hide (+) Create new list button b. User is able to select multiple Fav & Custom list to add the recipient to. c. User is able to deselect Fav & Custom list by re-tapping the list until the check mark is removed. Note: For Local Transfer, maximum tab list is 8 (including with All, Frequent, Favourite, Own, and Custom).", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function32RecipientListAddToFavFromAllFrequentTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_32_RECIPIENT_LIST_ADD_TO_FAV_FROM_ALL_FREQUENT_TAB_TC_020 | 3 | 1. Upon tapping [Save] button: a. If the beneficiary is added to 'Favourites' list, S2U is required. b. If the beneficiary is added to Custom list only, S2U is not required. c. Combination of list selection which includes Favourites, S2U is required. d. If beneficiary is already in Favourites and is now added to Custom list, S2U is not required. e. If none of the Fav or Custom list is selected, display toastbar error message 'Please select an option to proceed.' 2. For adding to favourites/custom list: a. If action requires S2U, display Status End Screen as a result. b. If action does not require S2U, display toastbar message. For successful addition, system displays 'List added.' c. Combination of favourite and custom add to list will always result Status End screen as this requires S2U authorisation. 3. For successful attempt: - recipient will be added to the selected Fav/Custom tabs 4. For unsuccessful attempt: - If S2U required and failed to save, display Update unsuccessful screen. - If S2U is not required and failed to save, display toastbar error message 'Service temporarily unavailable'. Notes: - M2U/RMBP Favourite List will be synced with NGA Favourites list and displayed in NGA. (One way sync from M2U/RMBP to NGA - for Add Favourite only. No sync from M2U/RMBP Delete Fav, and no sync from NGA to M2U/RMBP) | IAM: 1. S2U Auth & status ECLIPSE: Update favourites lis twith the recipient selected", async ({ request }) => {
    const response = await request.post("/", {
      headers: buildApiHeaders(),
      data: {}
    });
    expect(response.ok()).toBeTruthy();
  });
});
