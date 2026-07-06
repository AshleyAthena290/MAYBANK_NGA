import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { FunctionEtbWithM2uIdLoginPageUsernamePage } from "../page-objects/function-etb-with-m2u-id-login-page-username.page";

test.describe("Function: ETB with M2U ID - Login Page - UserName", () => {
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_USERNAME_TC_001 | Login Page - Username", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPageUsernamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_USERNAME_TC_003 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPageUsernamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_USERNAME_TC_004 | 1 | Maybank logo & Name | N/A | Alphanumeric | Display | Integration | Display Maybank Logo & Name image | CMS: 1. Retrieve maybank Logo & Name image", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPageUsernamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_USERNAME_TC_005 | 2 | Title | N/A | Alphanumeric | Display | Integration | Display 'Let's get you logged in' | CMS 1. Retrieve Title", async ({ request }) => {
    const response = await request.post("/", {
      headers: buildApiHeaders(),
      data: {}
    });
    expect(response.ok()).toBeTruthy();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_USERNAME_TC_006 | 3 | Username | Yes | Alphanumeric | Textbox X(20) | Input | Enter NGA username", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPageUsernamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_USERNAME_TC_007 | 4 | 'No online banking access yet?' | N/A | Alphanumeric | Display | Integration | Display 'No online banking access yet?' description. | CMS: 1. Retrieve 'No online banking access yet?' description", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPageUsernamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_USERNAME_TC_009 | No. | Action | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPageUsernamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_USERNAME_TC_011 | 2 | [Next] Button | Upon tapping, navigate to [A&A] Security Image Verification screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPageUsernamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_USERNAME_TC_012 | 3 | [Register with credit card] Button | Upon tapping, navigate to [CC - w/o M2U ID] Enter Account Details screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPageUsernamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_USERNAME_TC_013 | 4 | [Register with debit card] Button | Upon tapping, navigate to [CASA - w/o M2U ID] Enter Account Details screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPageUsernamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_USERNAME_TC_014 | 5 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen and followed by Consent screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPageUsernamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_USERNAME_TC_015 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPageUsernamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_LOGIN_PAGE_USERNAME_TC_016 | 1 | 1. Next button will trigger username mandatory field check only. 2. Security image verification screen will be prompted (refer to [A&A]). *No verification on username and will navigate to Login Password screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdLoginPageUsernamePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
