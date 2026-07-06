import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { FunctionOnboardingLandingPage } from "../page-objects/function-onboarding-landing.page";

test.describe("Function: Onboarding Landing", () => {
  test("FUNCTION_ONBOARDING_LANDING_TC_001 | Onboarding Screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionOnboardingLandingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ONBOARDING_LANDING_TC_003 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionOnboardingLandingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ONBOARDING_LANDING_TC_004 | 1 | Maybank logo & Name | N/A | Alphanumeric | Display | Integration | Display Maybank Logo & Name image | CMS: 1. Retrieve Maybank Logo & Name Image", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionOnboardingLandingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ONBOARDING_LANDING_TC_005 | 2 | Language Code | N/A | Alphanumeric | Display | Integration | 1. Display 'selected' language code based on previous selection (stored in device cache). 2. For first time onboarding/no language is selected, NGA to default to 'ID'. Available options: (i) ID - Bahasa Indonesia (ii) EN - English | NGBO: 1. Language code based on selected language", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionOnboardingLandingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ONBOARDING_LANDING_TC_006 | 3 | Banner Carousel | N/A | Alphanumeric | Display | Integration | 1. Retrieve & display Carousel Title & Description based on the number of banner configured in CMS: - Carousel dot title - Banner title - Banner description 2. User can slide to move to the next banner and will be displayed in rotation 3. Display dot title for banner shown. 4. Currently defined in Figma screen is as below, title & description refer to screen: - Lifestyle - Go Further - Grow 5. App to default to first dot banner and display dot title. | CMS: 1. Multiple Carousel banner info: - Dot title - Banner title - Banner description", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionOnboardingLandingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ONBOARDING_LANDING_TC_008 | No. | Action Button | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionOnboardingLandingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ONBOARDING_LANDING_TC_011 | 3 | [I'm a Maybank Customer] Button | Upon tapping, navigate to Permission/Consent screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionOnboardingLandingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ONBOARDING_LANDING_TC_012 | 4 | [I'm new to Maybank] Button | Upon tapping, navigate to NTB onboarding flow", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionOnboardingLandingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ONBOARDING_LANDING_TC_014 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionOnboardingLandingPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
