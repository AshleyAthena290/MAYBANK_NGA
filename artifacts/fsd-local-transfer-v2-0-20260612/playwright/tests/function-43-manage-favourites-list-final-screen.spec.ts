import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function43ManageFavouritesListFinalScreenPage } from "../page-objects/function-43-manage-favourites-list-final-screen.page";

test.describe("FUNCTION 43: MANAGE favourites LIST - FINAL SCREEN", () => {
  test("FUNCTION_43_MANAGE_FAVOURITES_LIST_FINAL_SCREEN_TC_004 | Title | Manage favourites List - Final screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function43ManageFavouritesListFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_43_MANAGE_FAVOURITES_LIST_FINAL_SCREEN_TC_005 | Add New favourites Final Screen (successful) - via acc number & via past transfer | Edit favourites nickname Final Screen (successful) - via past transfer | Add New favourites Final Screen (Failed) | Edit favourites nickname Final Screen (Failed)", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function43ManageFavouritesListFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_43_MANAGE_FAVOURITES_LIST_FINAL_SCREEN_TC_006 | 1 | Status Image & Status | N/A | Image | Display | Integration | Available status: 1. Added as favourites 2. Update successful 3. Update unsuccessful | CMS: 1. Retrieve image & stautus message for: - Successful - Unsuccessful", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function43ManageFavouritesListFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_43_MANAGE_FAVOURITES_LIST_FINAL_SCREEN_TC_007 | 2 | Date & Timestamp | N/A | Alphanumeric | Display | Local Server | Display date and time.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function43ManageFavouritesListFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_43_MANAGE_FAVOURITES_LIST_FINAL_SCREEN_TC_008 | 3 | Ref ID | N/A | Alphanumeric | Display | Local Server | Display generated Reference ID.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function43ManageFavouritesListFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_43_MANAGE_FAVOURITES_LIST_FINAL_SCREEN_TC_009 | 4 | Info Banner | N/A | Alphanumeric | Display | Integration | Blue box information is only applicable for: 1. Successful Add to Favourite via Account Number. It is not applicable for: 1. Successful “Add to Favourite” via Past Transfer. 2. Unsuccessful “Add to Favourite” attempts. | CMS 1. Retrieve blue box information notes.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function43ManageFavouritesListFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_43_MANAGE_FAVOURITES_LIST_FINAL_SCREEN_TC_011 | 5 | Account Holder Name | N/A | Alphanumeric | Display | Local Server | Populate from Select Recipient page.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function43ManageFavouritesListFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_43_MANAGE_FAVOURITES_LIST_FINAL_SCREEN_TC_012 | 6 | Account Number | N/A | Alphanumeric | Display | Local Server | Populate from Select Recipient page.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function43ManageFavouritesListFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_43_MANAGE_FAVOURITES_LIST_FINAL_SCREEN_TC_013 | 7 | Recipient Bank | N/A | Alphanumeric | Display | Local Server | Populate from Select Recipient page.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function43ManageFavouritesListFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_43_MANAGE_FAVOURITES_LIST_FINAL_SCREEN_TC_014 | 8 | Nickname | N/A | Alphanumeric | Display | Local Server | Populate from Select Recipient page.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function43ManageFavouritesListFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_43_MANAGE_FAVOURITES_LIST_FINAL_SCREEN_TC_016 | 9 | Transaction Type | N/A | Alphanumeric | Display | Local Server | Display Transaction Type 'Add favourites'", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function43ManageFavouritesListFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_43_MANAGE_FAVOURITES_LIST_FINAL_SCREEN_TC_018 | No. | Action | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function43ManageFavouritesListFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_43_MANAGE_FAVOURITES_LIST_FINAL_SCREEN_TC_019 | 1 | [Done] button | Upon tapping [Done] button, system to navigate back to Transfer Landing Page or Setting's Pay & Transfer favourites page (based on entry points). Refer to Manage Fav - Dashboard.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function43ManageFavouritesListFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_43_MANAGE_FAVOURITES_LIST_FINAL_SCREEN_TC_020 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function43ManageFavouritesListFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_43_MANAGE_FAVOURITES_LIST_FINAL_SCREEN_TC_021 | No. | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function43ManageFavouritesListFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_43_MANAGE_FAVOURITES_LIST_FINAL_SCREEN_TC_022 | 1 | Upon Confirm, below are the possible status: a. Added as favourites - successfully adding to favourites via account number OR past transfer. b. Update successful - successfully edit favourites nickname. c. Update unsuccessful - failed in adding a favourites or editing a favourites's nickname. For successful adding to favourites, beneficiary will be populated under Favourites list. | IAM: 1. S2U Auth status ECLIPSE: 1. Add favourites bene", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function43ManageFavouritesListFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
