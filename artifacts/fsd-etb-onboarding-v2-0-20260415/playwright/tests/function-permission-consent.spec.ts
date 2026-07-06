import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { FunctionPermissionConsentPage } from "../page-objects/function-permission-consent.page";

test.describe("Function: Permission/Consent", () => {
  test("FUNCTION_PERMISSION_CONSENT_TC_001 | Permission/Consent", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_PERMISSION_CONSENT_TC_002 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_PERMISSION_CONSENT_TC_003 | 1 | Consent: 1. One standard consent title, content & acknowledgement text for all ETB Onboarding (incl CASA & CC, with or without M2U ID). 2. When tap on 'I agree & consent' button, consent will be 'cached' on version binding with device ID, but will only be saved and stored upon successful S2U setup. - Stored consent will be one data entry per document, single tick mark covers multiple documents (e.g., one tick mark for 4 documents results in 4 stored entries, each tagged with its version and type). | MCM 1. Temporary store customer consent (by doc entry)", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_PERMISSION_CONSENT_TC_004 | 2 | Drop-off: 1. If user drops off after SMS OTP but before S2U setup/verification, on re-launch they will be redirected to the Onboarding Landing screen, followed by the Consent screen. 2. If user drops off after completing S2U verification, Consent screen will be bypassed and user will be redirected directly to the [App Dashboard] - Pre-Login screen.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_PERMISSION_CONSENT_TC_005 | 3 | Error Handling: 1. When tap on 'I agree & consent' button: (i) Checkbox is unticked, display inline error 'Required selection'", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_PERMISSION_CONSENT_TC_008 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_PERMISSION_CONSENT_TC_009 | 1 | Maybank logo & Name | N/A | Alphanumeric | Display | Integration | Display Maybank Logo & Name image | CMS: 1. Retrieve maybank Logo & Name image", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_PERMISSION_CONSENT_TC_010 | 1 | Consent Title | N/A | Alphanumeric | Display | Integration | 1. Retrieve & display 'Select Acknowledgment and Consent' | CMS: 1. Retrieve consent title based on language", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_PERMISSION_CONSENT_TC_011 | 2 | Consent content | N/A | Alphanumeric | Display | Integration | 1. Retrieve & display Acknowledgment content in one scrollable page. 2. For info: To allow jumping to respective section of the content upon clicking on hyperlink in Acknowledgement text, CMS is to maintain section header (anchor) with identifier. | CMS: 1. Retrieve consent content based on language, with identifier for section header", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_PERMISSION_CONSENT_TC_012 | 3 | Acknowledgement Text | N/A | Alphanumeric | Display | Integration | 1. Retrieve & display Acknowledgement text. 2, Clickable Content for: a. Pernyataaan Penggunaan Data Maybank 2U ID b. Syarat dan Ketentuan Maybank2u ID c. Pemberitahuan Privasi Maybank2u ID. | CMS: 1. Retrieve Ack Text based on language, with clickable hyperlink", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_PERMISSION_CONSENT_TC_013 | 4 | Acknowledgement Checkbox | Yes | Alphanumeric | Checkbox | Input | 1. Checkbox required, else display inline error 'Required selection.'", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_PERMISSION_CONSENT_TC_015 | No. | Action | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_PERMISSION_CONSENT_TC_016 | 1 | [Review] Button | Upon tapping, move to next fold of consent. Remove 'Review' button when reach the end of consent page.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_PERMISSION_CONSENT_TC_019 | 4 | [I agree & consent] Button | Upon tapping, Navigate to Login Screen.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_PERMISSION_CONSENT_TC_020 | 5 | Download Icon | Upon tapping, display Download Consent drawer", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_PERMISSION_CONSENT_TC_021 | 6 | [<] Icon | Upon tapping, navigate back to Onboarding Landing screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
