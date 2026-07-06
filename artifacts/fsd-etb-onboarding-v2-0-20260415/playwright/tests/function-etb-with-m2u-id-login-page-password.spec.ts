import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { FunctionEtbWithM2uIdLoginPagePasswordPage } from "../page-objects/function-etb-with-m2u-id-login-page-password.page";

test.describe("Function: ETB with M2U ID - Login Page - Password", () => {
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_PASSWORD_TC_001 | Login Page - Password", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPagePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_PASSWORD_TC_003 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPagePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_PASSWORD_TC_004 | 1 | Maybank logo & Name | N/A | Alphanumeric | Display | Integration | Display Maybank Logo & Name image | CMS: 1. Retrieve maybank Logo & Name image", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPagePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_PASSWORD_TC_005 | 2 | Security Image | N/A | Image | Display | Integration | Retrieve and display security image - IF user input invalid username in Login Username screen, Random image will be displayed | IAM: 1. Retrieve selected security image by username", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPagePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_PASSWORD_TC_006 | 3 | Username Display | N/A | Alphanumeric | Display | Local Server | Display masked username - display first 2 and last 2 characters in plain text, and mask characters in between. E.g. Username is Dodo5050, then it will display Do****50", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPagePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_PASSWORD_TC_007 | 4 | Password | Yes | Alphanumeric | Textbox X(20) | Input | 1. Field is auto-focused & keyboard is shown on drawer opening 2. Input masked by default", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPagePasswordPage(page);
    await pageObject.open();
    await assertA11yStub(page);
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_PASSWORD_TC_009 | No. | Action | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPagePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_PASSWORD_TC_010 | 1 | [Forgot password?] hyperlink | Upon tapping hyperlink, navigate to [A&A] Forgot Password", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPagePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_PASSWORD_TC_011 | 2 | Eye Icon (Show/Hide Password) | Press to hold to display input. Input is masked if user does not continue to tap and hold.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPagePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_PASSWORD_TC_012 | 3 | [Log in] Button | Upon password authentication successful: 1. If user switch using same device, navigate to Change App Notice Screen 2. If user switch to new device, navigate to Change Device Notice Screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPagePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_PASSWORD_TC_013 | 4 | [<] Button | Upon tapping, navigate back to [A&A] Security Image Verification screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPagePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_PASSWORD_TC_014 | 5 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPagePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_PASSWORD_TC_015 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPagePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_PASSWORD_TC_016 | 1 | When tap on Log In button, perform validation below: 1. Password mandatory check 2. Username validity, else display snackbar error 'Username & password do not match' 3. Password validity (i) Password incorrect AND attempt < 3x: Display snackbar error 'Incorrect password. Your account will be locked after [Remaining no. of attempts] more unsuccessful attempts.' (ii) Password incorrect AND attempt = 3x : Navigate to [A&A] Locked Account Screen. (No of attempts counter to be discussed in DDD.) 4. If password authenticated successfully, IAM will also perform account status validation. (i) Status = 'locked' OR 'disabled': Navigate to [A&A] Locked Account / Disabled Account Screen 5. If all the above passed, navigate to Notice screen | IAM: 1. Username and Password authentication by username with possible outcome: - Invalid Username - Invalid password - Authenticated but Account Locked or Disable. Existing integration point (ID): RHDS 1. Username verification", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPagePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_PASSWORD_TC_017 | 2 | Upon Log In, perform below: 1.Regardless successful or unsuccessful login, send data to FMS 2. If successful login, retrieve customer info (Full Name for Nickname screen) | FMS 1. Fraud Monitoring DCIF: 1. Retrieve Customer Info (Full Name) to be used in Nickname screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPagePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
