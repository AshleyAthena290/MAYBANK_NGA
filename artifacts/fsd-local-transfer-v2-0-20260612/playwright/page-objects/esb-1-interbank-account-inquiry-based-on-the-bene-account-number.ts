import type { Page } from "@playwright/test";

export class Esb1InterbankAccountInquiryBasedOnTheBeneAccountNumberInquiryViaBifastRtolNgboPT1ForexTrxnUsdThreshold10kWhichCallsForAdditonalDetailsEclipseEsb1RetrieveTotalForexTransactionAmountInUsdPerMonthPage {
  public constructor(private readonly page: Page) {}

  public async open(): Promise<void> {
    await this.page.goto("/");
  }

  public async assertLoaded(): Promise<void> {
    await this.page.locator("body").waitFor();
  }
}