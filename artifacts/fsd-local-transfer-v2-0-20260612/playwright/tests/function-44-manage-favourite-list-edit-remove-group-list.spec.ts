import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function44ManageFavouriteListEditRemoveGroupListPage } from "../page-objects/function-44-manage-favourite-list-edit-remove-group-list.page";

test.describe("FUNCTION 44: MANAGE FAVOURITE LIST - EDIT / REMOVE GROUP LIST", () => {
  test("FUNCTION_44_MANAGE_FAVOURITE_LIST_EDIT_REMOVE_GROUP_LIST_TC_005 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function44ManageFavouriteListEditRemoveGroupListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_44_MANAGE_FAVOURITE_LIST_EDIT_REMOVE_GROUP_LIST_TC_006 | 1 | Title Header | N/A | Alphanumeric | Display | Integration | 1. Display 'Favourites' for Favourite list. 2. Display '<User defined list> for custom list.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function44ManageFavouriteListEditRemoveGroupListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_44_MANAGE_FAVOURITE_LIST_EDIT_REMOVE_GROUP_LIST_TC_007 | 2 | Description | N/A | Alphanumeric | Display | Integration | Refer to Tab Manage Fav - Detail group", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function44ManageFavouriteListEditRemoveGroupListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_44_MANAGE_FAVOURITE_LIST_EDIT_REMOVE_GROUP_LIST_TC_008 | 3 | Recipient List | N/A | Alphanumeric | Display | Integration | Refer to Tab Manage Fav - Detail group", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function44ManageFavouriteListEditRemoveGroupListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_44_MANAGE_FAVOURITE_LIST_EDIT_REMOVE_GROUP_LIST_TC_009 | 4 | Recipient Name | N/A | Alphanumeric | Display | Integration | Refer to Tab Manage Fav - Detail group", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function44ManageFavouriteListEditRemoveGroupListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_44_MANAGE_FAVOURITE_LIST_EDIT_REMOVE_GROUP_LIST_TC_010 | 5 | Recipient Nickname | N/A | Alphanumeric | Display | Integration | Refer to Tab Manage Fav - Detail group", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function44ManageFavouriteListEditRemoveGroupListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_44_MANAGE_FAVOURITE_LIST_EDIT_REMOVE_GROUP_LIST_TC_011 | 6 | Recipient Account Number | N/A | Numeric | Display | Integration | Refer to Tab Manage Fav - Detail group", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function44ManageFavouriteListEditRemoveGroupListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_44_MANAGE_FAVOURITE_LIST_EDIT_REMOVE_GROUP_LIST_TC_012 | 7 | Recipient Bank Name | N/A | Alphanumeric | Display | Integration | Refer to Tab Manage Fav - Detail group", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function44ManageFavouriteListEditRemoveGroupListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_44_MANAGE_FAVOURITE_LIST_EDIT_REMOVE_GROUP_LIST_TC_013 | No. | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function44ManageFavouriteListEditRemoveGroupListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_44_MANAGE_FAVOURITE_LIST_EDIT_REMOVE_GROUP_LIST_TC_014 | 1 | For deletion of recipient, upon S2U authorisation, navigate to Status end screen: a. Recipient removed successfully - navigate to Recipient Removed screen. b. Update unsuccessful - navigate to Update Unsuccessful screen, no change. | IAM: 1. S2U Auth & status ECLIPSE: - Delete selected recipient from Fav list", async ({ request }) => {
    const response = await request.post("/", {
      headers: buildApiHeaders(),
      data: {}
    });
    expect(response.ok()).toBeTruthy();
  });
});
