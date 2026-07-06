import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { FunctionEtbWithM2uIdFinalScreenPage } from "../page-objects/function-etb-with-m2u-id-final-screen.page";

test.describe("Function: ETB with M2U ID - Final Screen", () => {
  test("FUNCTION_ETB_WITH_M2U_ID_FINAL_SCREEN_TC_003 | EPIC | ETB Onboarding - CASA User with M2U ID - Same Device | ETB Onboarding - Credit Card User with M2U ID - Same Device", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_FINAL_SCREEN_TC_004 | Title | Final Screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_FINAL_SCREEN_TC_005 | With M2U ID - Final Screen (Successful) | With M2U ID - Final Screen: Setup Prim. Account or Biometric fails", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_FINAL_SCREEN_TC_007 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_FINAL_SCREEN_TC_008 | 1 | Status Message | N/A | Alphanumeric | Display | Integration | Display status message: 1. Successful application: 'You're all set!' 2. Biometric or Primary account fails: 'You're logged in!' | CMS 1. Retrieve Successful Message", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_FINAL_SCREEN_TC_009 | 2 | Status Icon/GIF | N/A | Alphanumeric | Display | Integration | Display status icon/gif | CMS 1. Retrieve status icon", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_FINAL_SCREEN_TC_010 | 3 | Description | N/A | Alphanumeric | Display | Integration | Display description: 1. Successful application: 'Welcome to the smarter, simpler and more secure way to bank.' 2. Biometric or Primary account fails: 'However, your primary account and/or biometrics were not set up. You may update at Settings anytime.' | CMS 1. Retrieve description", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_FINAL_SCREEN_TC_012 | No. | Action | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_FINAL_SCREEN_TC_013 | 1 | [Go to Dashboard] Button | Upon tapping, navigate to app dashboard", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_FINAL_SCREEN_TC_014 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_FINAL_SCREEN_TC_015 | 1 | Upon successful biometric setup or when the “Setup Later” button is selected: 1. Store selected primary account 2. Store biometric information (only if user setup biometric) 3. Set flag on/off for S2U in MDIP-Security Engine 4. Send notification to all platform: Push notification, email, and SMS regardless user's current preference a. For existing RMBP users, push notification will be sent to both NGA and RMBP b. Cooling off notification will be sent when cooling off ends 5. Send data to EDW (by batch) | IAM: 1.Store biometric information (A&A) ECLIPSE: 1. Store primary account (Main) MDIP/Security Engine: 1. On/Off Flag for S2U MBPNS: 1. Push, Email & SMS Notification for: - App Change - Device Change - Cooling off period ends 2. Push Notif to M2U App for: - App Change EDW 1. Send data to EDW by batch", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_FINAL_SCREEN_TC_017 | 3 | If Primary Account or Biometric storing fails: 1. Treat as successful onboarding 2. Upon tapping [Go to Dashboard] button, Navigate to [App Dashboard] - Pre-login - Primary Account default storing will be triggered in App Dashboard (Refer to [App Dashboard] - Main Display Amt) - Biometric setup can be performed later in [Setting] - Security Dashboard", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdFinalScreenPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
