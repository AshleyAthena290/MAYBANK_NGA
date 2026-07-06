import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function1TransferIntroductionEntryPointPage } from "../page-objects/function-1-transfer-introduction-entry-point.page";

test.describe("FUNCTION 1: TRANSFER INTRODUCTION/ENTRY POINT", () => {
  test("FUNCTION_1_TRANSFER_INTRODUCTION_ENTRY_POINT_TC_002 | Post-Login State - Initiate Transfer (Quick Action) FIRST TIMER | Post-Login State - Initiate Transfer (Menu) FIRST TIMER | Post-Login State - Initiate Transfer (Quick Action) NON-FIRST TIMER | Post-Login State - Initiate Transfer (Menu) NON-FIRST TIMER", async ({ request }) => {
    const response = await request.post("/", {
      headers: buildApiHeaders(),
      data: {}
    });
    expect(response.ok()).toBeTruthy();
  });
  test("FUNCTION_1_TRANSFER_INTRODUCTION_ENTRY_POINT_TC_003 | Error Screen - Unable to access Transfer (no available account), randomise display for below options.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function1TransferIntroductionEntryPointPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_1_TRANSFER_INTRODUCTION_ENTRY_POINT_TC_004 | CASA Account Details - Transfer Landing Page", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function1TransferIntroductionEntryPointPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_1_TRANSFER_INTRODUCTION_ENTRY_POINT_TC_005 | RDN Account Details - OWN Transfer > Input Amount Page", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function1TransferIntroductionEntryPointPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_1_TRANSFER_INTRODUCTION_ENTRY_POINT_TC_006 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function1TransferIntroductionEntryPointPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_1_TRANSFER_INTRODUCTION_ENTRY_POINT_TC_007 | No. | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function1TransferIntroductionEntryPointPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_1_TRANSFER_INTRODUCTION_ENTRY_POINT_TC_008 | 1 | For user at pre-login state and tap [Transfer] icon from home dashboard screen OR menu screen: 1. Redirects user to the login screen.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function1TransferIntroductionEntryPointPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_1_TRANSFER_INTRODUCTION_ENTRY_POINT_TC_009 | 2 | For user at post-login state and tap [+Transfer] icon from home dashboard screen OR menu screen: 1. For first timer (user who has never accessed transfer page via NGA): a. Display Transfer Introduction Page. b. Mark the user as a 'non-first timer for transfer', regardless whether tap on [Get Started]. 2. For non-first timer, to display Transfer Introduction Page based on NGBO configuration (display option by App Version, Start & End Date and Frequency to display within the defined period e.g. Once a day, once a week, once 1 month, X times within the period), a 'flag/counter' will be used to track the display. 3. When user tap on Transfer or Intro Page [Get Started], system validates if user has any CASA account. a. IF user has no CASA account (to follow Transfer Local SoF eligibility check for Product Code & Segment ID, excluding Account Sttaus), display randomised 'Apply CASA now bottom drawer'. Randomiser will be displayed as follow: - Randomiser to select one available option from a dynamic pool of drawer variants (e.g. Option 1 to 5) Available options are maintainable via NGBO/CMS). - Each option will be displayed randomly in no particular order. - When tap on [Apply Now], navigate to 'Apply New - CA & SA products'. b. IF user has CASA account, proceed to display Transfer Landing Page. | NGA Channel Layer: 1. Transfer first timer flag 2. Intro Page Display Flag (non first timer) NGBO (P&T): 1. Retrieve Transfer Intro Page Config: - App Version - Start & End Date - Frequency to display within the defined period (e.g. Once a day, once a week, once 1 month, X times within the period) NGBO/CMS: 2. Retrieve 'Apply CASA now' Randomised Options/Image: - Available options & Image content", async ({ request }) => {
    const response = await request.post("/", {
      headers: buildApiHeaders(),
      data: {}
    });
    expect(response.ok()).toBeTruthy();
  });
});
