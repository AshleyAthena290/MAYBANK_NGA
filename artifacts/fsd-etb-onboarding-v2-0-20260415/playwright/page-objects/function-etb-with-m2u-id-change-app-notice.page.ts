import type { Page } from "@playwright/test";

export class FunctionEtbWithM2uIdChangeAppNoticePage {
  public constructor(private readonly page: Page) {}

  public async open(): Promise<void> {
    await this.page.goto("/");
  }

  public async assertLoaded(): Promise<void> {
    await this.page.locator("body").waitFor();
  }
}