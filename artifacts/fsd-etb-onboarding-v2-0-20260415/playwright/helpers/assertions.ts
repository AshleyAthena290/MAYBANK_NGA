import type { Page } from "@playwright/test";

export function buildApiHeaders(): Record<string, string> {
  return {
    "content-type": "application/json"
  };
}

export async function assertA11yStub(page: Page): Promise<void> {
  await page.locator("body").waitFor();
}

export async function assertVisualStub(page: Page): Promise<void> {
  await page.locator("body").screenshot();
}