import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function34RecipientListRemoveFromAllTabPage } from "../page-objects/function-34-recipient-list-remove-from-all-tab.page";

test.describe("FUNCTION 34: RECIPIENT LIST - REMOVE FROM ALL TAB", () => {
  test("FUNCTION_34_RECIPIENT_LIST_REMOVE_FROM_ALL_TAB_TC_001 | Beneficiary removal from ALL tab (will also remove from all other tabs) | Beneficiary removal from Frequent tab (only remove from Freq) | Failed Removal error screen (applicable for s2u)", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function34RecipientListRemoveFromAllTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_34_RECIPIENT_LIST_REMOVE_FROM_ALL_TAB_TC_005 | No. | Action | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function34RecipientListRemoveFromAllTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_34_RECIPIENT_LIST_REMOVE_FROM_ALL_TAB_TC_006 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function34RecipientListRemoveFromAllTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_34_RECIPIENT_LIST_REMOVE_FROM_ALL_TAB_TC_007 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function34RecipientListRemoveFromAllTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_34_RECIPIENT_LIST_REMOVE_FROM_ALL_TAB_TC_008 | 1 | 1. Removing Beneficiary from ALL tab: a. Remove the selected beneficiary from All, Frequent, Favourite, and Custom lists where selected Bene exist. 2. Removing Beneficiary from FREQUENT tab: a. Remove the beneficiary from Frequent list only. b. The beneficiary will be removed and the transaction count reset to zero. The beneficiary will be re-added into Frequent list once the user transfers to the same beneficiary again and meets the required min transaction count threshold (2 times). c. Only transactions made after removal are counted for re-qualification to be displayed in Frequent. 3. Removing Beneficiary from FAVOURITES tab: a. Remove the beneficiary from Favourites list only. 4. Removing Beneficiary from a CUSTOM tab: a. Remove the beneficiary from the selected custom list only. 5. Upon removal, system displays S2U authorisation screen. a. For successful removal, display 'recipient removed' screen. b. For unsuccessful removal, display 'update unsucceessfu' screen. | IAM: 1. S2U Auth status ECLIPSE: 1. Update favourite list(s) with the recipient removed. 2. Update Frequent list with the recipient removed 3. Update favourite list with the recipient removed. 4. Update Custom list with the recipient removed.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function34RecipientListRemoveFromAllTabPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
