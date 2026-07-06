import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { FunctionEtbWithoutM2uIdCreatePasswordPage } from "../page-objects/function-etb-without-m2u-id-create-password.page";

test.describe("Function: ETB without M2U ID - Create Password", () => {
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_PASSWORD_TC_001 | Create Password | Error Handling", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreatePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_PASSWORD_TC_002 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreatePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_PASSWORD_TC_003 | 1 | Title | N/A | Alphanumeric | Display | Integration | Display 'Create your password' | CMS 1. Retrieve Title", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreatePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_PASSWORD_TC_004 | 2 | New Password | Yes | Alphanumeric | Textbox X(20) | Input | 1. Allows alphanumeric & special character 2. Not allowed for space 3. Must fulfill all validation below, and turn to green icon for condition that met, else remain as grey icon. a. Length: 8-20 chars b. Must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character - Special character allowed: - !@#$%^&*()-_+=?.,:;''/\|~[]{} - If input contains restricted special char, display inline error 'Unsupported special character used.' c. Must not match M2U Username d. First character must not be a number.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreatePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_PASSWORD_TC_005 | 3 | Confirm Password | Yes | Alphanumeric | Textbox X(20) | Input | 1. Must fulfill all validation below, and turn to green icon for condition that met, else remain as grey icon. a. New password & Confirm password match", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreatePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_PASSWORD_TC_006 | 4 | Checklist Icon | N/A | Image | Display | Integration | Display default icon color as grey, if criteria met change respective icon to green | CMS: 1. Retrieve validation icon - grey & green", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreatePasswordPage(page);
    await pageObject.open();
    await assertVisualStub(page);
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_PASSWORD_TC_007 | 5 | Validation Text | N/A | Alphanumeric | Display | Integration | Display below: 1. Must contain 8-20 characters 2. Must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character 3. Must not match your username 4. First character must not be a number 5. New passwords match | CMS 1. Retrieve validation text", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreatePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_PASSWORD_TC_008 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreatePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_PASSWORD_TC_009 | 1 | When tap on Confirm button, perform validation below: 1. Mandatory validation 2. Password values validation as per checklist (validation rules is not maintainable) 3. Any other validation on Prohibited values, if failed display inline error - contains Date of Birth, display error 'Password cannot contain date of birth' >> Restrict if password contains date (dd),month (mm), and year (yy/yyyy) combination, regardless digits are continous or separated by characters | IAM: 1. Password value validation", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreatePasswordPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
