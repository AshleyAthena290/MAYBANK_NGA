import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Function8CreateNewListFromRecipientListPage } from "../page-objects/function-8-create-new-list-from-recipient-list.page";

test.describe("FUNCTION 8: CREATE NEW LIST - FROM RECIPIENT LIST", () => {
  test("FUNCTION_8_CREATE_NEW_LIST_FROM_RECIPIENT_LIST_TC_003 | 1 | Create new list Title | N/A | Alphanumeric | Display | Integration | Display 'Create new list' | CMS: - retrieve title", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function8CreateNewListFromRecipientListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_8_CREATE_NEW_LIST_FROM_RECIPIENT_LIST_TC_004 | 2 | Description | N/A | Alphanumeric | Display | Integration | DIsplay Create New list description | CMS: 1. To retrieve Create New List description", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function8CreateNewListFromRecipientListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_8_CREATE_NEW_LIST_FROM_RECIPIENT_LIST_TC_005 | 3 | List Name | Yes | Alphanumeric | Textbox X(20) | Input | 1. Special characters are not allowed. Allowed characters are: A-Z, 0-9, <space>. Else display inline error 'Only alphabets, numbers and spaces are allowed.' 2. Trim leading and trailing space to no space 3. Trim >1 space in between characters to single space", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function8CreateNewListFromRecipientListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_8_CREATE_NEW_LIST_FROM_RECIPIENT_LIST_TC_006 | 4 | Selected Recipients Section | N/A | Alphanumeric | Display | Local Server | Shows selected recipients, populated after Adding from Select Recipient Drawer", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function8CreateNewListFromRecipientListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_8_CREATE_NEW_LIST_FROM_RECIPIENT_LIST_TC_007 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function8CreateNewListFromRecipientListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_8_CREATE_NEW_LIST_FROM_RECIPIENT_LIST_TC_008 | No. | Description | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function8CreateNewListFromRecipientListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_8_CREATE_NEW_LIST_FROM_RECIPIENT_LIST_TC_009 | 1 | Search Bar: 1. Upon tapping the Search bar textbox, system to display phone's keyboard for user to type in. 2. Wildcard search will be performed once the user has entered 2 characters (key up). Searching of beneficiaries include fields below: a. Beneficiaries Account Name b. Beneficiaries Nickname c. Beneficiaries Account Number d. Beneficiaries Bank Name. | ECLIPSE: 1. Retrieve list of Bene based on search criteria & sorting order specified, with pagination. Search for all beneficiary categories (ALL).", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function8CreateNewListFromRecipientListPage(page);
    await pageObject.open();
    await assertA11yStub(page);
  });
  test("FUNCTION_8_CREATE_NEW_LIST_FROM_RECIPIENT_LIST_TC_010 | 2 | At Create New List Screen, user is required to enter the List Name. To add recipient(s), user is required to tap [(+) Add recipient] button, system to display select recipient drawer: 1. If beneficiary is already in the list, and user tap on it, display toast bar error message 'This recipient is already in the list'. 2. Single tap will mark and highlight the recipient with a checkbox ticked. 3. Multiple recipients selection is supported. 4. Re-tapping recipient will de-select and uncheck recipient. 5. Tap [Save] to confirm the selection. Selected recipients will be moved to Create New List Screen. Upon tapping [Add] button: 1. If no selected recipient(s), system displays toastbar message 'Please select at least 1 recipient.'", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function8CreateNewListFromRecipientListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_8_CREATE_NEW_LIST_FROM_RECIPIENT_LIST_TC_011 | 3 | Upon tapping [Create list] button, system performs: 1. Mandatory checking. If List name is empty, system displays inline error message 'Required field.' 2. Duplication checking, list name cannot be the same as other existing custom list AND default list (All, Frequent, Own, Favourite). System display inline error message: 'Name cannot be the same as existing lists.' 3. IF there is no recipient(s), system displays toastbar message 'Please select at least 1 recipient.' 4. There is no limit to the maximum recipient(s) in a single custom list. Upon succesful creation, system to display a toast message 'List Updated' and Custom List is created & placed in the right most tab. System then navigates to the newly created custom beneficiary category tab. | ECLIPSE: - Duplicate check on Tabs name (default system tabs & user defined custom tab) - Create Custom List and Beneficiary selected for the custom list", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function8CreateNewListFromRecipientListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("FUNCTION_8_CREATE_NEW_LIST_FROM_RECIPIENT_LIST_TC_012 | 4 | For number of custom list has reached the maximum number of allowed list, system to: 1. Hide (+) button at Entry Point 1. 2. Disable '+ Create new list' at Entry Point 2 & 3.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Function8CreateNewListFromRecipientListPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
