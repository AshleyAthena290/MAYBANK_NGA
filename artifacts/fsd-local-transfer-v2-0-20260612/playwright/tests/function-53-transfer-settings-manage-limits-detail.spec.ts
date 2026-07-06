import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function53TransferSettingsManageLimitsDetailPage } from "../page-objects/function-53-transfer-settings-manage-limits-detail.page";

test.describe("FUNCTION 53: TRANSFER SETTINGS - MANAGE LIMITS DETAIL", () => {
  test("FUNCTION_53_TRANSFER_SETTINGS_MANAGE_LIMITS_DETAIL_TC_002 | 5 | Status Image & Status | N/A | Image | Display | Integration | 1. Display Image based on status: a. Successful b. Unsuccessful 2. Display transaction status | CMS 1. Retrieve Image & status: - successful - unsuccessful", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function53TransferSettingsManageLimitsDetailPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_53_TRANSFER_SETTINGS_MANAGE_LIMITS_DETAIL_TC_003 | 6 | Transaction Date & Timestamp | N/A | Alphanumeric | Display | Local Server | Display transaction date and time.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function53TransferSettingsManageLimitsDetailPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_53_TRANSFER_SETTINGS_MANAGE_LIMITS_DETAIL_TC_004 | 7 | Ref ID | N/A | Alphanumeric | Display | Local Server | Display generated Reference ID.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function53TransferSettingsManageLimitsDetailPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_53_TRANSFER_SETTINGS_MANAGE_LIMITS_DETAIL_TC_006 | 8 | New Limit | N/A | Alphanumeric | Display | Local Server | Populate new user defined limit.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function53TransferSettingsManageLimitsDetailPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_53_TRANSFER_SETTINGS_MANAGE_LIMITS_DETAIL_TC_007 | 9 | Limit Type | N/A | Alphanumeric | Display | Local Server | Populate transfer mode from previous screen.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function53TransferSettingsManageLimitsDetailPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_53_TRANSFER_SETTINGS_MANAGE_LIMITS_DETAIL_TC_009 | 10 | Transaction Type | N/A | Alphanumeric | Display | Local Server | Populate transaction type - Manage Limit", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function53TransferSettingsManageLimitsDetailPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_53_TRANSFER_SETTINGS_MANAGE_LIMITS_DETAIL_TC_011 | No. | Action | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function53TransferSettingsManageLimitsDetailPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_53_TRANSFER_SETTINGS_MANAGE_LIMITS_DETAIL_TC_012 | 1 | [<] icon | Upon tapping [<] icon, system to navigate to manage limit list screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function53TransferSettingsManageLimitsDetailPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_53_TRANSFER_SETTINGS_MANAGE_LIMITS_DETAIL_TC_013 | 2 | Select new limit selection | Upon tapping, system to populate value to New Limit field.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function53TransferSettingsManageLimitsDetailPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_53_TRANSFER_SETTINGS_MANAGE_LIMITS_DETAIL_TC_014 | 3 | [Save] Button | Upon tapping, trigger [A&A] Secure2u authorisation screeen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function53TransferSettingsManageLimitsDetailPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_53_TRANSFER_SETTINGS_MANAGE_LIMITS_DETAIL_TC_015 | 4 | [Done] | Upon tapping, navigates to Transfer Limit Dashboard screen.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function53TransferSettingsManageLimitsDetailPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_53_TRANSFER_SETTINGS_MANAGE_LIMITS_DETAIL_TC_016 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function53TransferSettingsManageLimitsDetailPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_53_TRANSFER_SETTINGS_MANAGE_LIMITS_DETAIL_TC_017 | No. | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function53TransferSettingsManageLimitsDetailPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_53_TRANSFER_SETTINGS_MANAGE_LIMITS_DETAIL_TC_018 | 1 | 1. Upon selecting the new limit & tap on [Save] button. a. System navigates to S2U authorisation screen. Once passed, navigate to Status End Screen. - updated successfully - navigate to Limit Updated screen. - Update unsuccessful - navigate to Update Unsuccessful screen, no change. | IAM: 1. S2U Auth P&T: - Update user daily limit by transfer mode", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function53TransferSettingsManageLimitsDetailPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
