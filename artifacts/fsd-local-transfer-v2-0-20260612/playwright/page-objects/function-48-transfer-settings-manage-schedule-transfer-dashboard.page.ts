import type { Page } from "@playwright/test";

export class Function48TransferSettingsManageScheduleTransferDashboardPage {
  public constructor(private readonly page: Page) {}

  public async open(): Promise<void> {
    await this.page.goto("/");
  }

  public async assertLoaded(): Promise<void> {
    await this.page.locator("body").waitFor();
  }
}