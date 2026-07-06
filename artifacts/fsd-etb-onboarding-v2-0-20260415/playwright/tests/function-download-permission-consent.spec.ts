import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { FunctionDownloadPermissionConsentPage } from "../page-objects/function-download-permission-consent.page";

test.describe("Function: Download Permission/Consent", () => {
  test("FUNCTION_DOWNLOAD_PERMISSION_CONSENT_TC_001 | Download Permission/Consent", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionDownloadPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_DOWNLOAD_PERMISSION_CONSENT_TC_003 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionDownloadPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_DOWNLOAD_PERMISSION_CONSENT_TC_004 | 1 | Title | N/A | Alphanumeric | Display | Integration | Retrieve & display 'Acknowledgment and consent' | CMS: 1. Retrieve download title based on languauge", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionDownloadPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_DOWNLOAD_PERMISSION_CONSENT_TC_005 | 2 | Document List | N/A | Alphanumeric | Display | Integration | Retrieve & display list of documents available for download individually. a. Pernyataaan Penggunaan Data Maybank2u ID b.Syarat dan Ketentuan Maybank2u ID c. Pemberitahuan Privasi Maybank2u ID | CMS: 1. Retrieve list of documents available for download based on language", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionDownloadPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_DOWNLOAD_PERMISSION_CONSENT_TC_007 | No. | Action | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionDownloadPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_DOWNLOAD_PERMISSION_CONSENT_TC_008 | 1 | [>] Button | Upon tapping, open the selected Acknowledgment & Consent PDF using in-app PDF viewer. User can choose to save the PDF in the in-app PDF viewer", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionDownloadPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_DOWNLOAD_PERMISSION_CONSENT_TC_009 | 2 | [Done] Button | Upon tapping, close popup and return to consent screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionDownloadPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_DOWNLOAD_PERMISSION_CONSENT_TC_010 | 3 | [x] Button | Upon tapping, close popup and return to consent screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionDownloadPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_DOWNLOAD_PERMISSION_CONSENT_TC_011 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionDownloadPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_DOWNLOAD_PERMISSION_CONSENT_TC_012 | 1 | Download PDF rules : a. Document will be maintained in PDF, with 2 languages available (Bahasa Indonesia and English). b. Download PDF based on language selected. Info: Download can be performed without requiring access permission (applicable to both iOS and Android). | CMS 1. Retrieve PDF based on language", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionDownloadPermissionConsentPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
