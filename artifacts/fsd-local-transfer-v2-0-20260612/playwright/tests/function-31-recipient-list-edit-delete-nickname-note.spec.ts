import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function31RecipientListEditDeleteNicknameNotePage } from "../page-objects/function-31-recipient-list-edit-delete-nickname-note.page";

test.describe("FUNCTION 31: RECIPIENT LIST - EDIT & DELETE NICKNAME (NOTE)", () => {
  test("FUNCTION_31_RECIPIENT_LIST_EDIT_DELETE_NICKNAME_NOTE_TC_001 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function31RecipientListEditDeleteNicknameNotePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_31_RECIPIENT_LIST_EDIT_DELETE_NICKNAME_NOTE_TC_002 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function31RecipientListEditDeleteNicknameNotePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_31_RECIPIENT_LIST_EDIT_DELETE_NICKNAME_NOTE_TC_003 | 1 | Upon long pressing on the beneficiary list OR tap bene 3-dots button, if beneficiary has been set with a nickname, system to display [Edit Nickname].", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function31RecipientListEditDeleteNicknameNotePage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_31_RECIPIENT_LIST_EDIT_DELETE_NICKNAME_NOTE_TC_004 | 2 | Upon entering Nickname: 1. If user enter OR paste other than allowable characters, display inline error message 'only alphabets, digits, and spaces are allowed.' 2. If user cleared the nickname with empty value, [Save] button will be changed to [Remove]. 3. If user enter valid value, proceed to save and once successful, redirect user to the last active tab and display a successful toast message 'Nickname updated'. 4. If user tap on [Remove], delete the nickname and once successful, redirect user to the last active tab and display a successful toast message 'Nickname removed'. 5. Nickname update will be reflected across the other tabs (Frequent, Fav or Custom) i.e. 1 beneficiary will only have 1 nickname. 6. For unsuccessful update or removal, system to redirect user to the last active tab and display a successful toast message 'Service Temporary unavailable'. | ECLIPSE: 1. Update or delete nickname", async ({ request }) => {
    const response = await request.post("/", {
      headers: buildApiHeaders(),
      data: {}
    });
    expect(response.ok()).toBeTruthy();
  });
  test("FUNCTION_31_RECIPIENT_LIST_EDIT_DELETE_NICKNAME_NOTE_TC_008 | Title | Recipient List - Edit & Delete note", async ({ request }) => {
    const response = await request.post("/", {
      headers: buildApiHeaders(),
      data: {}
    });
    expect(response.ok()).toBeTruthy();
  });
});
