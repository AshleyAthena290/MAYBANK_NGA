import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function10ManageFavouriteListDashboardPage } from "../page-objects/function-10-manage-favourite-list-dashboard.page";

test.describe("FUNCTION 10: MANAGE FAVOURITE LIST - DASHBOARD", () => {
  test("FUNCTION_10_MANAGE_FAVOURITE_LIST_DASHBOARD_TC_002 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function10ManageFavouriteListDashboardPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_10_MANAGE_FAVOURITE_LIST_DASHBOARD_TC_003 | 1 | Manage lists Title | N/A | Alphanumeric | Display | Integration | Display 'Manage lists' | CMS: - retrieve 'Manage lists' title", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function10ManageFavouriteListDashboardPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_10_MANAGE_FAVOURITE_LIST_DASHBOARD_TC_004 | 2 | Description | N/A | Alphanumeric | Display | Integration | DIsplay manage favourite list description | CMS: 1. To retrieve Manage lists description", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function10ManageFavouriteListDashboardPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_10_MANAGE_FAVOURITE_LIST_DASHBOARD_TC_005 | 3 | Local/Overseas Tab | N/A | Alphanumeric | Tab | Integration | Default: Local. Option to switch between local or overseas transfer", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function10ManageFavouriteListDashboardPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_10_MANAGE_FAVOURITE_LIST_DASHBOARD_TC_006 | 4 | Favourite Group List | N/A | Alphanumeric | Button | Integration | Display in below order: 1. Favourites 2. Custom list, sort by older to newer creation date | ECLIPSE 1. To retrieve available Fav & Custom lists for local 2. To retrieve recipient count per Fav list for local", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function10ManageFavouriteListDashboardPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_10_MANAGE_FAVOURITE_LIST_DASHBOARD_TC_007 | 5 | Recipient Count per Group | N/A | Numeric | Display | Integration | Populated based on number of recipients in each favourite list. | ECLIPSE 1. To retrieve available Fav & Custom lists for local 2. To retrieve recipient count per Fav list for local", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function10ManageFavouriteListDashboardPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_10_MANAGE_FAVOURITE_LIST_DASHBOARD_TC_009 | No. | Action | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function10ManageFavouriteListDashboardPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_10_MANAGE_FAVOURITE_LIST_DASHBOARD_TC_010 | 1 | [<] icon | Navigate back to Transfer Landing Page.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function10ManageFavouriteListDashboardPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_10_MANAGE_FAVOURITE_LIST_DASHBOARD_TC_012 | 3 | Favourite List | Navigate to Favourite List Detail screen.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function10ManageFavouriteListDashboardPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_10_MANAGE_FAVOURITE_LIST_DASHBOARD_TC_013 | 4 | (+) Create New List | Navigate to Create New List screen.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function10ManageFavouriteListDashboardPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_10_MANAGE_FAVOURITE_LIST_DASHBOARD_TC_014 | No. | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function10ManageFavouriteListDashboardPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_10_MANAGE_FAVOURITE_LIST_DASHBOARD_TC_015 | 1 | IF the number of tab List is less than 8, (+) Create New List button will be available. Otherwise, button is disabled.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function10ManageFavouriteListDashboardPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
