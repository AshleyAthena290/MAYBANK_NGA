import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { TableOfContentsPage } from "../page-objects/table-of-contents.page";

test.describe("Table of Contents", () => {
  test("TABLE_OF_CONTENTS_TC_001 | 1.1.7.1 Receipt w Theme", async ({ page }) => {
    await page.goto("/");
    const pageObject = new TableOfContentsPage(page);
    await pageObject.open();
    await assertVisualStub(page);
  });
});
