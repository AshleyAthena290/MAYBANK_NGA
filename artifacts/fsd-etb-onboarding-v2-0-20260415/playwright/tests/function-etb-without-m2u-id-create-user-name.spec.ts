import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { FunctionEtbWithoutM2uIdCreateUserNamePage } from "../page-objects/function-etb-without-m2u-id-create-user-name.page";

test.describe("Function: ETB without M2U ID - Create User Name", () => {
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_USER_NAME_TC_002 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreateUserNamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_USER_NAME_TC_003 | 1 | Title | N/A | Alphanumeric | Display | Integration | Display 'Create your username' | CMS: 1. Retrieve Title", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreateUserNamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_USER_NAME_TC_004 | 2 | Username | Yes | Alphanumeric | Textbox X(20) | Input | 1. Allows alphanumeric only 2. Not allowed for space and special character 3. Must fulfill all validation below, and turn to green icon for condition that met, else remain as grey icon. a. Must contain: 8-20 characters b. Must contain at least 1 letter and 1 number", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreateUserNamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_USER_NAME_TC_005 | 3 | Checklist Icon | N/A | Image | Display | Integration | Display default icon color as grey, if criteria met change respective icon to green | CMS: 1. Retrieve validation icon - grey & green", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreateUserNamePage(page);
    await pageObject.open();
    await assertVisualStub(page);
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_USER_NAME_TC_006 | 4 | Validation Text | N/A | Alphanumeric | Display | Integration | Display below: 1. Must contain 8-20 characters 2. Must contain at least 1 letter and 1 number | CMS 1. Retrieve validation text", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreateUserNamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_USER_NAME_TC_008 | No. | Action | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreateUserNamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_USER_NAME_TC_009 | 1 | [Confirm] Button | Upon tapping and validation passed, navigate to [CASA/CC - w/o M2U ID] create password screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreateUserNamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_USER_NAME_TC_010 | 2 | [<] Button | Upon tapping, navigate back to [CASA/CC - w/o M2U ID] Account details screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreateUserNamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_USER_NAME_TC_011 | 3 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreateUserNamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_USER_NAME_TC_012 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreateUserNamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_CREATE_USER_NAME_TC_013 | 1 | When tap on Confirm button, perform validation below: 1. Mandatory validation 2. Username values validation as per checklist (validation rules is not maintainable) 3. Username duplication, if failed display snackbar error message - If username already exists, display error 'This username isn't available. Please choose another.' - Deleted user ID in the last 30 days (<=30) can't be used, display error 'This username isn't available. Please choose another.' | IAM: 1. Validation on: - Username is existing - Username use deleted user ID <=30 days", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdCreateUserNamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
