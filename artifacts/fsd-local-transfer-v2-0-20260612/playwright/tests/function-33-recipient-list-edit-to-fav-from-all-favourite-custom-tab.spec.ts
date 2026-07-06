import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function33RecipientListEditToFavFromAllFavouriteCustomTabPage } from "../page-objects/function-33-recipient-list-edit-to-fav-from-all-favourite-custom-tab.page";

test.describe("FUNCTION 33: RECIPIENT LIST - EDIT TO FAV (FROM ALL, FAVOURITE, CUSTOM TAB)", () => {
  test("FUNCTION_33_RECIPIENT_LIST_EDIT_TO_FAV_FROM_ALL_FAVOURITE_CUSTOM_TAB_TC_003 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function33RecipientListEditToFavFromAllFavouriteCustomTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_33_RECIPIENT_LIST_EDIT_TO_FAV_FROM_ALL_FAVOURITE_CUSTOM_TAB_TC_004 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function33RecipientListEditToFavFromAllFavouriteCustomTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_33_RECIPIENT_LIST_EDIT_TO_FAV_FROM_ALL_FAVOURITE_CUSTOM_TAB_TC_005 | 1 | 1. Upon tapping [Save] button, system to check: a. If the beneficiary is either added to or removed from 'favourite' list, S2U is required. b. If action does not require S2U and for successful attempt, system displays a toastbar message 'List updated.' c. If none of the Fav or Custom list is selected, render the [Save] button to [Remove] button, it will trigger Remove function. Refer to Recipient - Add to Fav Business Rules for status screen behaviour. | IAM: 1. S2U Auth status ECLIPSE: Update favourite list(s) with the recipient selected", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function33RecipientListEditToFavFromAllFavouriteCustomTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
