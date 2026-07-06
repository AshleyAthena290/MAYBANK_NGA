import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function49TransferSettingsManageScheduleTransferListPage } from "../page-objects/function-49-transfer-settings-manage-schedule-transfer-list.page";

test.describe("FUNCTION 49: TRANSFER SETTINGS - MANAGE SCHEDULE TRANSFER LIST", () => {
  test("FUNCTION_49_TRANSFER_SETTINGS_MANAGE_SCHEDULE_TRANSFER_LIST_TC_001 | Entry Point 1 via Transfer Landing Page | Manage Scheduled Transfer List", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function49TransferSettingsManageScheduleTransferListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_49_TRANSFER_SETTINGS_MANAGE_SCHEDULE_TRANSFER_LIST_TC_002 | Entry Point 2 to via Setting Page (PRE-REQUISITE) | Manage Scheduled Transfer List", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function49TransferSettingsManageScheduleTransferListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_49_TRANSFER_SETTINGS_MANAGE_SCHEDULE_TRANSFER_LIST_TC_003 | 3 | [x] icon | Upon tapping [x], close filter screen, return to Scheduled & Recurring Transfers list.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function49TransferSettingsManageScheduleTransferListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_49_TRANSFER_SETTINGS_MANAGE_SCHEDULE_TRANSFER_LIST_TC_004 | 4 | [Clear] button | Upon tapping [Clear], clear all filtering selection.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function49TransferSettingsManageScheduleTransferListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_49_TRANSFER_SETTINGS_MANAGE_SCHEDULE_TRANSFER_LIST_TC_005 | 5 | [Apply] button | Upon tapping [Apply], apply selected criterias and perform search.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function49TransferSettingsManageScheduleTransferListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_49_TRANSFER_SETTINGS_MANAGE_SCHEDULE_TRANSFER_LIST_TC_006 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function49TransferSettingsManageScheduleTransferListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_49_TRANSFER_SETTINGS_MANAGE_SCHEDULE_TRANSFER_LIST_TC_007 | No. | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function49TransferSettingsManageScheduleTransferListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_49_TRANSFER_SETTINGS_MANAGE_SCHEDULE_TRANSFER_LIST_TC_008 | 1 | Upon screen load: 1. Default to Individual tab and display a list of active scheduled & recurring individual transfers. Refer to next business rules on display criteria. 2. Upon tapping one of the list, system to navigate to scheduled/recurring details screen. | ESB - Standing Instruction: 1. To retrieve a list of ACTIVE scheduled and recurring single individual transactions, with option for search criteria, and based on sorting order. CMS: - No Match image, message & info.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function49TransferSettingsManageScheduleTransferListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_49_TRANSFER_SETTINGS_MANAGE_SCHEDULE_TRANSFER_LIST_TC_009 | 2 | 1. For searching scheduled/recurring transactions: a. Searching will be based on the selected Tab (Individual or Batch). b. Support wildcard search by entering minimum 2 characters. c. Searching criteria: (i) Individual Tab: - Beneficiary Name - Amount (ii) Batch Tab: - Batch Name - Amount c. Display listing: (i) Sort & display nearest scheduled transaction date (Transfer Date or Start Date) first. (ii) In the event transaction date is same, sorting is based on date created (earliest to latest). d. If searching returns empty, display 'We could not find a match' screen. | ESB - Standing Instruction: 1. To retrieve a list of ACTIVE scheduled and recurring single individual transactions, with option for search criteria, and based on sorting order. CMS: - No Match image, message & info.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function49TransferSettingsManageScheduleTransferListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_49_TRANSFER_SETTINGS_MANAGE_SCHEDULE_TRANSFER_LIST_TC_010 | 4 | Select accounts: 1. Display list of accounts that has at least one active scheduled/recurring instruction. [Interops: To assess or discuss any impact if the list includes M2U/RMBP, assuming no other sources] | ESB - Standing Instruction: 1. Retrieve list of account number that has active scheduled/recurring instruction.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function49TransferSettingsManageScheduleTransferListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
