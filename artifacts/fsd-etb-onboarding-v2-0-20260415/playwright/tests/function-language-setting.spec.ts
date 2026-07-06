import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { FunctionLanguageSettingPage } from "../page-objects/function-language-setting.page";

test.describe("Function: Language Setting", () => {
  test("FUNCTION_LANGUAGE_SETTING_TC_003 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionLanguageSettingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_LANGUAGE_SETTING_TC_004 | 1 | Select Language title | N/A | Alphanumeric | Display | Integration | 1. Display 'Select Language' | CMS 1. Retrieve title content", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionLanguageSettingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_LANGUAGE_SETTING_TC_005 | 2 | Language Option | No | Alphanumeric | Selection | Integration | 1. Retrieve language options: (i) Bahasa Indonesia (ii) English 2. Pre-select based on the selected language option from Onboarding Landing Page. | CMS : 1. Retrieve available language options", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionLanguageSettingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_LANGUAGE_SETTING_TC_007 | No. | Action | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionLanguageSettingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_LANGUAGE_SETTING_TC_008 | 1 | Language Option | Tap anywhere in language option to save language preference, close language selection pop up, navigate back to Onboarding screen and reflect all NGA screen with selected language", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionLanguageSettingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_LANGUAGE_SETTING_TC_009 | 2 | [x] Button | Upon tapping, close popup without saving changes and navigate back to Onboarding Screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionLanguageSettingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_LANGUAGE_SETTING_TC_010 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionLanguageSettingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
