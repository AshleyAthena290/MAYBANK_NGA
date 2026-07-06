import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function7NotificationPage } from "../page-objects/function-7-notification.page";

test.describe("FUNCTION 7: NOTIFICATION", () => {
  test("FUNCTION_7_NOTIFICATION_TC_002 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function7NotificationPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_7_NOTIFICATION_TC_003 | No. | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function7NotificationPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
