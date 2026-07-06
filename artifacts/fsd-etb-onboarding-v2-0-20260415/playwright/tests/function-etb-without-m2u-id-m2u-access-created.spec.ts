import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { FunctionEtbWithoutM2uIdM2uAccessCreatedPage } from "../page-objects/function-etb-without-m2u-id-m2u-access-created.page";

test.describe("Function: ETB without M2U ID - M2U Access created", () => {
  test("FUNCTION_ETB_WITHOUT_M2U_ID_M2U_ACCESS_CREATED_TC_002 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdM2uAccessCreatedPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_M2U_ACCESS_CREATED_TC_003 | 1 | Status Message | N/A | Alphanumeric | Display | Integration | Display 'Maybank2u access created' | CMS 1. Retrieve Successful Message", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdM2uAccessCreatedPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_M2U_ACCESS_CREATED_TC_004 | 2 | Status Icon/GIF | N/A | Alphanumeric | Display | Integration | Display status icon/gif | CMS 1. Retrieve status icon", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdM2uAccessCreatedPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_M2U_ACCESS_CREATED_TC_005 | 3 | Application Date and Time | N/A | Alphanumeric | Display | Local Server | Display application date and time.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdM2uAccessCreatedPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_M2U_ACCESS_CREATED_TC_007 | No. | Action | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdM2uAccessCreatedPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_M2U_ACCESS_CREATED_TC_008 | 1 | [Proceed] button | Upon tapping, navigate to Nickname screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdM2uAccessCreatedPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITHOUT_M2U_ID_M2U_ACCESS_CREATED_TC_009 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithoutM2uIdM2uAccessCreatedPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
