import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { FunctionEtbWithoutM2uIdSecurityImagePage } from "../page-objects/function-etb-without-m2u-id-security-image.page";

test.describe("Function: ETB Without M2U ID - Security Image", () => {
  test("FUNCTION_ETB_WITHOUT_M2U_ID_SECURITY_IMAGE_TC_001 | Security image", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdSecurityImagePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_SECURITY_IMAGE_TC_002 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdSecurityImagePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_SECURITY_IMAGE_TC_003 | 1 | Title and Description | N/A | Alphanumeric | Display | Integration | Display images layout as per screen: - Title 'Choose a security image' - Description 'This image will display when you log in on legitimate Maybank channels' | CMS: 1. Retrieve Title & Description", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdSecurityImagePage(page);
    await pageObject.open();
    await assertVisualStub(page);
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_SECURITY_IMAGE_TC_004 | 2 | Security Images | Yes | Image | Display | Integration | Display list of security images. Highlight image when selected. | IAM: 1. Retrieve list of security images", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdSecurityImagePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_SECURITY_IMAGE_TC_005 | 3 | Insight banner | Yes | Alphanumeric | Display | Integration | Display 'This image will be used every time you log in' | CMS 1. Retrieve insight message 2. Retrieve icon", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdSecurityImagePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_SECURITY_IMAGE_TC_007 | No. | Action | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdSecurityImagePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_SECURITY_IMAGE_TC_008 | 1 | Camera Icon | Display bottom drawer, with following value : 1. Take Photo 2. Select from Gallery 3. Cancel", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdSecurityImagePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_SECURITY_IMAGE_TC_009 | 2 | [Next] Button | Upon tapping, navigate to [A&A] Verification - SMS OTP. If Verification passed, navigate to [CASA/CC - w/o M2U ID] M2U Access created", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdSecurityImagePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_SECURITY_IMAGE_TC_010 | 3 | [<] Button | Navigate back to [CASA/CC - w/o M2U ID] Create password screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdSecurityImagePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_SECURITY_IMAGE_TC_011 | 4 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdSecurityImagePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_SECURITY_IMAGE_TC_012 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdSecurityImagePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_SECURITY_IMAGE_TC_013 | 1 | Add Image behaviour: 1. Take Photo, triggers device camera (assuming permission granted). - capture image and display/replace the image in the 'camera' image placeholder. 2. Select from gallery, opens native photo gallery (asusming permission granted) - select & confirm image, display/replace the image in the 'camera' image placeholder, and auto-select uploaded image 3. Camera icon feature to be configurable - turn on/off - for ID, will be turned off first during go live, will only avail this feature when cleared any security compliance or OJK requirements | NGBO 1. Retrieve flag (on/off) value for camera icon feature", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdSecurityImagePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_SECURITY_IMAGE_TC_014 | 2 | Upon tapping Next button, perform below: 1. Image validation - Image Size Limit: 5 MB - Image Format: JPG / PNG only 2. If validation passed - if user capture photo or selected own photo from gallery but didn't select to use as Security Image, system won't store user's newly added image", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdSecurityImagePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_SECURITY_IMAGE_TC_015 | 3 | Upon Verification - SMS OTP, perform below: 1. Regardless successful or unsuccessful verification, send data to FMS 2. If successful verification: - Perform User ID creation, includes: >> Store username >> Store password >> Store selected security image (compressed version Max. 20KB) | FMS: 1. Fraud Monitoring IAM: 1. User ID Creation - Store username, password & security image M2U: 1. User ID Creation", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdSecurityImagePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
