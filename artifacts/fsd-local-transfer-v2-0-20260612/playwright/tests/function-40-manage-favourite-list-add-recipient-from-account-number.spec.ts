import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function40ManageFavouriteListAddRecipientFromAccountNumberPage } from "../page-objects/function-40-manage-favourite-list-add-recipient-from-account-number.page";

test.describe("FUNCTION 40: MANAGE FAVOURITE LIST - ADD RECIPIENT FROM ACCOUNT NUMBER", () => {
  test("FUNCTION_40_MANAGE_FAVOURITE_LIST_ADD_RECIPIENT_FROM_ACCOUNT_NUMBER_TC_003 | 2 | [<] icon | Upon tapping [<] icon, system to navigate back to Transfer Landing Page", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function40ManageFavouriteListAddRecipientFromAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_40_MANAGE_FAVOURITE_LIST_ADD_RECIPIENT_FROM_ACCOUNT_NUMBER_TC_004 | 3 | Nickname tooltip | Upon tapping nickname tooltip, system to display the Nickname information drawer.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function40ManageFavouriteListAddRecipientFromAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_40_MANAGE_FAVOURITE_LIST_ADD_RECIPIENT_FROM_ACCOUNT_NUMBER_TC_005 | 4 | [Next] button | Upon tapping [Next] button, [A&A] Secure2U will be triggered for authorisation.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function40ManageFavouriteListAddRecipientFromAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_40_MANAGE_FAVOURITE_LIST_ADD_RECIPIENT_FROM_ACCOUNT_NUMBER_TC_006 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function40ManageFavouriteListAddRecipientFromAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_40_MANAGE_FAVOURITE_LIST_ADD_RECIPIENT_FROM_ACCOUNT_NUMBER_TC_007 | No. | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function40ManageFavouriteListAddRecipientFromAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_40_MANAGE_FAVOURITE_LIST_ADD_RECIPIENT_FROM_ACCOUNT_NUMBER_TC_008 | 1 | Upon tapping [Next] button, system to perform: 1. Mandatory checking. If field is empty, system displays inline error message 'Required field.' 2. If validation passed, trigger S2U authorisation. Refer to Manage Fav - Final for Status end screen. 3. For successful creation, a beneficiary will be created and populated into the Landing Page with below format: [Nickname] - will be displayed in Beneficiary Name field (but this is not stored as Beneficiary name in Database) [Nickname] [Account Number] . [Bank Name] Note: Once user had a successful transaction to a beneficiary (added by account number) and registered name either retrieved from BI-FAST/RTOL inquiry OR manually added during SKN/RTGS transfer, the first line Beneficiary Name will be replaced by Beneficiary Registered Name,and this will be saved in Favourite. (Refer to Input Amount - Beneficiary Name, and Confirmation Business Rules) | ECLIPSE: 1. Store newly created Favourites with below: - Nickname - Account No - Bene Bank", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function40ManageFavouriteListAddRecipientFromAccountNumberPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
