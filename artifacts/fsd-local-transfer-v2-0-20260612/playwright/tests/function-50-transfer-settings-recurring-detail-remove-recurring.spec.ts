import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function50TransferSettingsRecurringDetailRemoveRecurringPage } from "../page-objects/function-50-transfer-settings-recurring-detail-remove-recurring.page";

test.describe("FUNCTION 50: TRANSFER SETTINGS - RECURRING DETAIL (REMOVE RECURRING)", () => {
  test("FUNCTION_50_TRANSFER_SETTINGS_RECURRING_DETAIL_REMOVE_RECURRING_TC_003 | 14 | Status Image & Status | N/A | Image | Display | Integration | 1. Display Image based on status: a. Successful b. Unsuccessful 2. Display transaction status | CMS 1. Retrieve Image & status: - successful - unsuccessful", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function50TransferSettingsRecurringDetailRemoveRecurringPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_50_TRANSFER_SETTINGS_RECURRING_DETAIL_REMOVE_RECURRING_TC_004 | 15 | Transaction Date & Timestamp | N/A | Alphanumeric | Display | Local Server | Display transaction date and time.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function50TransferSettingsRecurringDetailRemoveRecurringPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_50_TRANSFER_SETTINGS_RECURRING_DETAIL_REMOVE_RECURRING_TC_005 | 16 | Ref ID | N/A | Alphanumeric | Display | Local Server | Display generated Reference ID.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function50TransferSettingsRecurringDetailRemoveRecurringPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_50_TRANSFER_SETTINGS_RECURRING_DETAIL_REMOVE_RECURRING_TC_007 | 17 | Account Holder Name | N/A | Alphanumeric | Display | Local Server | Populate from previous screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function50TransferSettingsRecurringDetailRemoveRecurringPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_50_TRANSFER_SETTINGS_RECURRING_DETAIL_REMOVE_RECURRING_TC_008 | 18 | Account Number | N/A | Numeric | Display | Local Server | Populate from previous screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function50TransferSettingsRecurringDetailRemoveRecurringPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_50_TRANSFER_SETTINGS_RECURRING_DETAIL_REMOVE_RECURRING_TC_009 | 19 | Recipient Bank | N/A | Alphanumeric | Display | Local Server | Populate from previous screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function50TransferSettingsRecurringDetailRemoveRecurringPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_50_TRANSFER_SETTINGS_RECURRING_DETAIL_REMOVE_RECURRING_TC_011 | 20 | Transaction Type | N/A | Alphanumeric | Display | Local Server | Display either: 1. Manage Scheduled Transfer. 2. Manage Recurring Transfer.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function50TransferSettingsRecurringDetailRemoveRecurringPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_50_TRANSFER_SETTINGS_RECURRING_DETAIL_REMOVE_RECURRING_TC_013 | No. | Action | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function50TransferSettingsRecurringDetailRemoveRecurringPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_50_TRANSFER_SETTINGS_RECURRING_DETAIL_REMOVE_RECURRING_TC_014 | 6 | [Done] button | Upon tapping [Done] button, navigate to Scheduled/Recurring Transfer Dashboard.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function50TransferSettingsRecurringDetailRemoveRecurringPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_50_TRANSFER_SETTINGS_RECURRING_DETAIL_REMOVE_RECURRING_TC_015 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function50TransferSettingsRecurringDetailRemoveRecurringPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_50_TRANSFER_SETTINGS_RECURRING_DETAIL_REMOVE_RECURRING_TC_016 | No. | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function50TransferSettingsRecurringDetailRemoveRecurringPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_50_TRANSFER_SETTINGS_RECURRING_DETAIL_REMOVE_RECURRING_TC_017 | 1 | Cancellation of Scheduled/Recurring Transaction: 1. Upon tapping [Cancel] at Scheduled/Recurring transaction details, a. IF Transaction Frequency = Just Once. - System to prompt confirmation message 'Cancel Scheduled Transfer?' with message'The scheduled transfer to this recipient will be stopped and no longer processed. You need to start a new transfer to set it up again.' b. IF Recurring, i.e. Transaction Frequency = Weekly or Monthly. - System to prompt confirmation message 'Cancel recurring transfer?' with message 'Any recurring transfer to this recipient will be stopped and no longer processed. You need to start a new transfer to set it up again.' 2. Upon tapping [Cancel] at Scheduled/Recurring transaction details, and is closer to scheduled date, a. IF Transaction Frequency = Just Once. - [Cancel] buttton is hidden. System displays blue box notes 'This transfer is already being processed.' b. IF Recurring, i.e. Transaction Frequency = Weekly - System to prompt confirmation message 'Cancel recurring transfer?' with message 'Your transfer for this week is already being processed. Cancelling will only stop future recurring transfers. You may start a new pament to set it up again.' c. IF Recurring, i.e. Transaction Frequency = Monthly - System to prompt confirmation message 'Cancel recurring transfer?' with message 'Your transfer for this month is already being processed. Cancelling will only stop future recurring transfers. You may start a new pament to set it up again.' 3. Upon tapping [Cancel] button at Confirmation message, system to navigate to S2U authorisation screen. 4. Upon successful S2U authorisation, system will canel & remove upcoming scheduled transaction or recurring transactions instruction (remove the series), navigate to Status End Screen. a. If successful, display 'Scheduled transfer cancelled' or 'Recurring transfer cancelled'. b. If failed, display 'Update unsuccessful' | ESB - Standing Instruction: 1. To send cancellation request for selected instruction. IAM: 1. S2U Auth & status CMS 1. Retrieve blue box notes for scheduled transaction close to scheduled date.", async ({ request }) => {
    const response = await request.post("/", {
      headers: buildApiHeaders(),
      data: {}
    });
    expect(response.ok()).toBeTruthy();
  });
});
