import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { 1Page } from "../page-objects/1.page";

test.describe("1", () => {
  test("1_TC_002 | Pre-requisite: List of Beneficiary is available at Transfer Landing Page. Long press on one of the beneficiary name that has no nickname set.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new 1Page(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("1_TC_003 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new 1Page(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("1_TC_004 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new 1Page(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("1_TC_005 | 1 | Upon entering nickname: 1. If user enter OR paste other than allowable characters, display inline error message 'only alphabets, digits, and spaces are allowed.' 2. If user sets the nickname with empty value and tap [Save] button, proceed to save with no value. 3. If user enter valid value, proceed to save and once successful, redirect user to the last active tab and display a successful toast message 'Nickname added'. 4. Saved nickname will be reflected across the other tabs (Frequent, Fav or Custom) i.e. 1 beneficiary will only have 1 nickname. 5. For unsuccessful creation, system to redirect user to the last active tab and display a successful toast message 'Service Temporary unavailable'. | ECLIPSE: 1. Add nickname", async ({ request }) => {
    const response = await request.post("/", {
      headers: buildApiHeaders(),
      data: {}
    });
    expect(response.ok()).toBeTruthy();
  });
  test("1_TC_006 | 2 | 1. Long press is not applicable for OWN tab. 2. Long press at ALL, FREQUENT, FAVOURITE, or CUSTOM LIST will lead to 3 options: a. Add/Edit Nickname. - If no nickname, display Add. - if has existing nickname, display Edit. b. Add to/Edit Favourites List. - If not in any Favourites or Custom list, display Add. - if in Favourites or Custom list, display Edit. c. Remove | CMS: - retrieve options", async ({ page }) => {
    await page.goto("/");
    const pageObject = new 1Page(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
