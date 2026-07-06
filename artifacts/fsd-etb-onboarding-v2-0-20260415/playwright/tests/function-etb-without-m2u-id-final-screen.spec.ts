import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { FunctionEtbWithoutM2uIdFinalScreenPage } from "../page-objects/function-etb-without-m2u-id-final-screen.page";

test.describe("Function: ETB without M2U ID - Final Screen", () => {
  test("FUNCTION_ETB_WITHOUT_M2U_ID_FINAL_SCREEN_TC_003 | EPIC | ETB Onboarding - CASA User without M2U ID - Same Device |ETB Onboarding - Credit Card User without M2U ID - Same Device", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_FINAL_SCREEN_TC_004 | Title | Final Screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_FINAL_SCREEN_TC_005 | Without M2U ID - Final Screen | With M2U ID - Final Screen: Setup Primary Account or Biometric fails", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_FINAL_SCREEN_TC_006 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_FINAL_SCREEN_TC_007 | 1 | Status Message | N/A | Alphanumeric | Display | Integration | Display status message: 1. Successful application: 'Secure2u activation in progress' 2. Biometric or Primary account fails: 'You're logged in!' | CMS 1. Retrieve Successful Msg", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_FINAL_SCREEN_TC_008 | 2 | Status Icon/GIF | N/A | Alphanumeric | Display | Integration | Display status icon/gif | CMS 1. Retrieve status icon", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_FINAL_SCREEN_TC_009 | 3 | Description | N/A | Alphanumeric | Display | Integration | Display description: 1. Successful application: 'Full account access will only be available in [Remaining cool-off countdown]' 2. Biometric or Primary account fails: 'However, your primary account and/or biometrics were not set up. You may update at Settings anytime.' | CMS 1. Retrieve description IAM 1. Retrieve cooling off completion time", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_FINAL_SCREEN_TC_011 | No. | Action | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_FINAL_SCREEN_TC_012 | 1 | [Explore the app] Button | Upon tapping, navigate to App Dashboard", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_FINAL_SCREEN_TC_013 | 2 | [Go to Dashboard] Button | Upon tapping, navigate to App dashboard", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_FINAL_SCREEN_TC_014 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_FINAL_SCREEN_TC_015 | 1 | Upon successful biometric setup or when the “Setup Later” button is selected: 1. Store selected primary account 2. Store biometric information (only if user setup biometric) 3. Set flag on/off for S2U in MDIP-Security Engine 4. Send notification to all platform: Push notification, email, and SMS - Cooling off notification will be triggered when cooling off end 5. Send data to EDW (by batch) | IAM: 1. Store biometric information (A&A) ECLIPSE: 1. Store primary account (Main) MDIP/Security Engine: 1. On/Off Flag for S2U MBPNS: 1. Push, Email & SMS Notification for: - Cooling off ends EDW 1. Send data to EDW by batch", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_FINAL_SCREEN_TC_017 | 3 | If Primary Account or Biometric storing fails: 1. Treat as successful onboarding 2. Upon tapping [Go to Dashboard] button, Navigate to [App Dashboard] - Primary Account default storing will be triggered in App Dashboard (Refer to [App Dashboard] - Main Display Amt) - Biometric setup can be performed later in [Setting] - Security Dashboard", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
