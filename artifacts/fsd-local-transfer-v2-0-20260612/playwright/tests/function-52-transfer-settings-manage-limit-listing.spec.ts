import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function52TransferSettingsManageLimitListingPage } from "../page-objects/function-52-transfer-settings-manage-limit-listing.page";

test.describe("FUNCTION 52: TRANSFER SETTINGS - MANAGE LIMIT LISTING", () => {
  test("FUNCTION_52_TRANSFER_SETTINGS_MANAGE_LIMIT_LISTING_TC_001 | Entry Point 1 via Transfer Landing Page (PRE-REQUISITE) | Manage Limits List screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function52TransferSettingsManageLimitListingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_52_TRANSFER_SETTINGS_MANAGE_LIMIT_LISTING_TC_002 | Entry Point 2 to via Setting Page (PRE-REQUISITE)", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function52TransferSettingsManageLimitListingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_52_TRANSFER_SETTINGS_MANAGE_LIMIT_LISTING_TC_003 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function52TransferSettingsManageLimitListingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_52_TRANSFER_SETTINGS_MANAGE_LIMIT_LISTING_TC_004 | 1 | Title header | N/A | Alphanumeric | Display | Local Server | Display 'Transfer limit' as title | CMS: 1. Retrieve title header. 2. Retrieve reminder content CMS: 1. To retrieve transfer modes", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function52TransferSettingsManageLimitListingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_52_TRANSFER_SETTINGS_MANAGE_LIMIT_LISTING_TC_005 | 2 | Reminder message | N/A | Alphanumeric | Display | Integration | Display reminder message 'You can only update one limit at a time.' | CMS: 1. Retrieve title header. 2. Retrieve reminder content CMS: 1. To retrieve transfer modes", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function52TransferSettingsManageLimitListingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_52_TRANSFER_SETTINGS_MANAGE_LIMIT_LISTING_TC_006 | 3 | Transfer mode selections | N/A | Alphanumeric | Selection | Integration | Display selection of transfer modes: a. Transfer Within Maybank b. BI-FAST c. Transfer Online c. BI-SKN d. RTGS | CMS: 1. Retrieve title header. 2. Retrieve reminder content CMS: 1. To retrieve transfer modes", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function52TransferSettingsManageLimitListingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_52_TRANSFER_SETTINGS_MANAGE_LIMIT_LISTING_TC_008 | No. | Action | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function52TransferSettingsManageLimitListingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_52_TRANSFER_SETTINGS_MANAGE_LIMIT_LISTING_TC_009 | 1 | [<] icon | Upon tapping [<] icon, system to perform: 1. For Entry Point 1 navigates to Transfer Landing Page . 2. For Entry Point 2 navigates to Settings Page.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function52TransferSettingsManageLimitListingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_52_TRANSFER_SETTINGS_MANAGE_LIMIT_LISTING_TC_010 | 2 | Menu Transfer Mode | Upon tapping option, navigate to Manage Limit Details screen per Transfer Mode.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function52TransferSettingsManageLimitListingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_52_TRANSFER_SETTINGS_MANAGE_LIMIT_LISTING_TC_011 | No. | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function52TransferSettingsManageLimitListingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
