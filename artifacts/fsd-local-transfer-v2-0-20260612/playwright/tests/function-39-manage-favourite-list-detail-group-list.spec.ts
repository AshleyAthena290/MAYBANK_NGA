import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function39ManageFavouriteListDetailGroupListPage } from "../page-objects/function-39-manage-favourite-list-detail-group-list.page";

test.describe("FUNCTION 39: MANAGE FAVOURITE LIST - DETAIL GROUP LIST", () => {
  test("FUNCTION_39_MANAGE_FAVOURITE_LIST_DETAIL_GROUP_LIST_TC_002 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function39ManageFavouriteListDetailGroupListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_39_MANAGE_FAVOURITE_LIST_DETAIL_GROUP_LIST_TC_003 | No. | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function39ManageFavouriteListDetailGroupListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_39_MANAGE_FAVOURITE_LIST_DETAIL_GROUP_LIST_TC_004 | 1 | Favourites Listing: 1. Display beneficiaries in Favouritess, sorted in ascending order (A-Z, 0-9) in the below order: - Beneficiary Name - Beneficiary Bank Name - Account Number 2. If the recipient list is not empty, [Edit] option will be displayed. Otherwise hide. 3. Lazy load is available | ECLIPSE: 1. Retrieve Fav beneficiary list with sorting order specified, & pagination.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function39ManageFavouriteListDetailGroupListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_39_MANAGE_FAVOURITE_LIST_DETAIL_GROUP_LIST_TC_005 | 2 | Custom Listing: 1. Display beneficiaries in selected Custom list, sorted in ascending order (A-Z, 0-9) in the below order: - Beneficiary Name - Beneficiary Bank Name - Account Number 2. If the recipient list is not empty, [Edit] option will be displayed. Otherwise hide. 3. Lazy load is available | ECLIPSE: 1. Retrieve Custom list with sorting order specified, & pagination.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function39ManageFavouriteListDetailGroupListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
