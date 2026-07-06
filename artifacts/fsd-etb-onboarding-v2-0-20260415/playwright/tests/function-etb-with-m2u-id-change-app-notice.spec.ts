import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { FunctionEtbWithM2uIdChangeAppNoticePage } from "../page-objects/function-etb-with-m2u-id-change-app-notice.page";

test.describe("Function : ETB with M2U ID - Change App Notice", () => {
  test("FUNCTION_ETB_WITH_M2U_ID_CHANGE_APP_NOTICE_TC_002 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdChangeAppNoticePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_CHANGE_APP_NOTICE_TC_003 | 1 | Notice Icon | N/A | Alphanumeric | Display | Integration | 1. Display icon showing: a. Change App b. Change Device | CMS 1. Retrieve Icon", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdChangeAppNoticePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_CHANGE_APP_NOTICE_TC_004 | 2 | Title | N/A | Alphanumeric | Display | Integration | Display Title for notice : 1. Change App - 'You are loggin into [NextGen]' 2. Change device - 'You are moving to a new device' | CMS 1. Retrieve Title - Chg App - Chg Device.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdChangeAppNoticePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_CHANGE_APP_NOTICE_TC_005 | 3 | Information | N/A | Alphanumeric | Display | Integration | Display Information for notice : 1. Change App - 'You will still be logged into [Maybank2u ID App].' 2. Change device - 'Your [NextGen] credentials will be bound to this device.' | CMS 1. Retrieve Information for: - Chg App - Chg Device.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdChangeAppNoticePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_CHANGE_APP_NOTICE_TC_006 | 4 | Registered Device | N/A | Alphanumeric | Display | Integration | 1. Display only for change device notice 2. Display 'Your previous device will be logged out' 3. Display previous registered device name and type | CMS 1. Retrieve device icon IAM 1. Retrieve previous registered device name and type", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdChangeAppNoticePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_CHANGE_APP_NOTICE_TC_007 | 5 | Description | N/A | Alphanumeric | Display | Integration | Display description of switching app or device | CMS 1. Retrieve Description - Chg App - Chg Device.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdChangeAppNoticePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_CHANGE_APP_NOTICE_TC_009 | No. | Action | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdChangeAppNoticePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_CHANGE_APP_NOTICE_TC_010 | 1 | [Proceed] Button | Upon tapping, navigate to Nickname Screen", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdChangeAppNoticePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_CHANGE_APP_NOTICE_TC_011 | 2 | [X] Button | Upon tapping, exit & return to Onboarding Landing screen.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdChangeAppNoticePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_CHANGE_APP_NOTICE_TC_012 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdChangeAppNoticePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_ETB_WITH_M2U_ID_CHANGE_APP_NOTICE_TC_013 | 1 | Rules Checking & Notification content: Checking will be performed in following sequence: 1. If user is NGA user and onboard with new device, display Change Device Notice 2. If user is NGA user and onboard with old device, bypass Change Device & Change App Notice 3. If user is RMBP & have not onboarded to NGA before, display Change App Notice | IAM: - User is existing M2U App user, option to proceed or cancel. - Check registered device", async ({ page }) => {
    await page.goto("/");
    const pageObject = new FunctionEtbWithM2uIdChangeAppNoticePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
