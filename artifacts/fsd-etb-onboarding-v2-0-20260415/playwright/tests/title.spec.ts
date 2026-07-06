import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { TitlePage } from "../page-objects/title.page";

test.describe("Title", () => {
  test("TITLE_TC_001 | 2026-04-15T00:00:00.000Z | 1. Update section Actions: 3.0 ETB - w M2U Login Username 4.0 ETB - w M2U Login Pwd 2. Update section Business Rules: 1.0 ETB - Onboard Landing 1.1 ETB - Onboard Lang 2.0 ETB - Consent 2.1 ETB - DL Consent Drawer 3.0 ETB - w M2U Login Username 4.0 ETB - w M2U Login Pwd 5.0 ETB - w M2U Notice 8.0 ETB - Primary Acc 3. Update section Screen & Field: 15.0 ETB - wo M2U Create Security Image 17.0 ETB - wo M2U Final | 2 | Adella Rakha", async ({ page }) => {
    await page.goto("/");
    const pageObject = new TitlePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
