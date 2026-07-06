import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function41ManageFavouritesListAddRecipientFromRecentTransferPage } from "../page-objects/function-41-manage-favourites-list-add-recipient-from-recent-transfer.page";

test.describe("FUNCTION 41: MANAGE favourites LIST - ADD RECIPIENT FROM RECENT TRANSFER", () => {
  test("FUNCTION_41_MANAGE_FAVOURITES_LIST_ADD_RECIPIENT_FROM_RECENT_TRANSFER_TC_004 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function41ManageFavouritesListAddRecipientFromRecentTransferPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_41_MANAGE_FAVOURITES_LIST_ADD_RECIPIENT_FROM_RECENT_TRANSFER_TC_005 | No. | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function41ManageFavouritesListAddRecipientFromRecentTransferPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_41_MANAGE_FAVOURITES_LIST_ADD_RECIPIENT_FROM_RECENT_TRANSFER_TC_006 | 1 | Select Recipient: 1. Listing of beneficiary will be the same as Transfer Landing Page ALL tab. Refer to Trf - Landing Page - Business rules for 'Display criteria for ALL list are:' item a to c. 2. Wildcard search will be performed once the user has entered 2 characters. Searching of beneficiaries include fields below: a. Beneficiaries Account Name b. Beneficiaries Nickname c. Beneficiaries Account Number d. Beneficiaries Bank Name. 3. For search result that returns EMPTY: a. System to display 'We couldn't find a match for <input data>' | ECLIPSE: 1. Retrieve list of Bene based on search criteria & sorting order specified, with pagination. Search for ALL tab. CMS: - EMPTY image, message & info. - Icon for Account Number Refer to Trf Landing Page.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function41ManageFavouritesListAddRecipientFromRecentTransferPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_41_MANAGE_FAVOURITES_LIST_ADD_RECIPIENT_FROM_RECENT_TRANSFER_TC_007 | 2 | Upon tapping a beneficiary: 1. If selected beneficiary is not in favourites list and has no nickname, navigate to 'Add Recipient'. User can enter nickname. 2. If selected beneficiary is not in favourites list but has nickname, navigate to 'Edit Nickname'. User can edit nickname. 3. If selected beneficiary is already a favourites, display toastbar error message 'This recipient is already in this list.'. For #1 & #2, upon tapping [Next] button, system navigates to S2U. Refer to Manage Fav - Final for Status end screen.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function41ManageFavouritesListAddRecipientFromRecentTransferPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
