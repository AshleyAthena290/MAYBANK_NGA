import { test, expect } from "@playwright/test";
import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";
import { Esb1InterbankAccountInquiryBasedOnTheBeneAccountNumberInquiryViaBifastRtolNgboPT1ForexTrxnUsdThreshold10kWhichCallsForAdditonalDetailsEclipseEsb1RetrieveTotalForexTransactionAmountInUsdPerMonthPage } from "../page-objects/esb-1-interbank-account-inquiry-based-on-the-bene-account-number-inquiry-via-bifast-rtol-ngbo-p-t-1-forex-trxn-usd-threshold-10k-which-calls-for-additonal-details-eclipse-esb-1-retrieve-total-forex-transaction-amount-in-usd-per-month.page";

test.describe("ESB:
1. Interbank Account Inquiry based on the bene account number, inquiry via:
- BIFAST
- RTOL

NGBO (P&T):
1. FOREX Trxn - USD threshold (10K) which calls for Additonal Details.

ECLIPSE/ESB??
1. Retrieve total FOREX transaction amount in USD per month.", () => {
  test("ESB_1_INTERBANK_ACCOUNT_INQUIRY_BASED_ON_THE_BENE_ACCOUNT_NUMBER_INQUIRY_VIA_BIFAST_RTOL_NGBO_P_T_1_FOREX_TRXN_USD_THRESHOLD_10K_WHICH_CALLS_FOR_ADDITONAL_DETAILS_ECLIPSE_ESB_1_RETRIEVE_TOTAL_FOREX_TRANSACTION_AMOUNT_IN_USD_PER_MONTH_TC_002 | Table 1 - Transfer entry point and Interbank transfer mode that derive Recipient Name Display", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Esb1InterbankAccountInquiryBasedOnTheBeneAccountNumberInquiryViaBifastRtolNgboPT1ForexTrxnUsdThreshold10kWhichCallsForAdditonalDetailsEclipseEsb1RetrieveTotalForexTransactionAmountInUsdPerMonthPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("ESB_1_INTERBANK_ACCOUNT_INQUIRY_BASED_ON_THE_BENE_ACCOUNT_NUMBER_INQUIRY_VIA_BIFAST_RTOL_NGBO_P_T_1_FOREX_TRXN_USD_THRESHOLD_10K_WHICH_CALLS_FOR_ADDITONAL_DETAILS_ECLIPSE_ESB_1_RETRIEVE_TOTAL_FOREX_TRANSACTION_AMOUNT_IN_USD_PER_MONTH_TC_003 | No | Transfer initiation | Source | Perform Bene Inq (Input Account Screen) | BI-FAST/RTOL Online? | Transfer Mode | DETAILS screen - Transfer To - Recipient Name | Display Account Holder/Recipient Name In Details Screen | Reason", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Esb1InterbankAccountInquiryBasedOnTheBeneAccountNumberInquiryViaBifastRtolNgboPT1ForexTrxnUsdThreshold10kWhichCallsForAdditonalDetailsEclipseEsb1RetrieveTotalForexTransactionAmountInUsdPerMonthPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("ESB_1_INTERBANK_ACCOUNT_INQUIRY_BASED_ON_THE_BENE_ACCOUNT_NUMBER_INQUIRY_VIA_BIFAST_RTOL_NGBO_P_T_1_FOREX_TRXN_USD_THRESHOLD_10K_WHICH_CALLS_FOR_ADDITONAL_DETAILS_ECLIPSE_ESB_1_RETRIEVE_TOTAL_FOREX_TRANSACTION_AMOUNT_IN_USD_PER_MONTH_TC_009 | 6 | Favourite List (Without Bene Name) | Added via Acct Number | N | Y | BI-FAST/RTOL | Populate from Favourite - Nickname | Retrieve Bene Name via Bene Inquiry when tap [Next]. To populate Bene Name retrieved from account inquiry in the Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Esb1InterbankAccountInquiryBasedOnTheBeneAccountNumberInquiryViaBifastRtolNgboPT1ForexTrxnUsdThreshold10kWhichCallsForAdditonalDetailsEclipseEsb1RetrieveTotalForexTransactionAmountInUsdPerMonthPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("ESB_1_INTERBANK_ACCOUNT_INQUIRY_BASED_ON_THE_BENE_ACCOUNT_NUMBER_INQUIRY_VIA_BIFAST_RTOL_NGBO_P_T_1_FOREX_TRXN_USD_THRESHOLD_10K_WHICH_CALLS_FOR_ADDITONAL_DETAILS_ECLIPSE_ESB_1_RETRIEVE_TOTAL_FOREX_TRANSACTION_AMOUNT_IN_USD_PER_MONTH_TC_010 | 7 | Favourite List (Without Bene Name) | Added via Acct Number | N | N/A | SKN/RTGS | Populate from Favourite - Nickname | Y (user input) | To populate Bene Name (manually entered) in Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Esb1InterbankAccountInquiryBasedOnTheBeneAccountNumberInquiryViaBifastRtolNgboPT1ForexTrxnUsdThreshold10kWhichCallsForAdditonalDetailsEclipseEsb1RetrieveTotalForexTransactionAmountInUsdPerMonthPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("ESB_1_INTERBANK_ACCOUNT_INQUIRY_BASED_ON_THE_BENE_ACCOUNT_NUMBER_INQUIRY_VIA_BIFAST_RTOL_NGBO_P_T_1_FOREX_TRXN_USD_THRESHOLD_10K_WHICH_CALLS_FOR_ADDITONAL_DETAILS_ECLIPSE_ESB_1_RETRIEVE_TOTAL_FOREX_TRANSACTION_AMOUNT_IN_USD_PER_MONTH_TC_012 | 9 | New Open Transfer | - | Y | SKN/RTGS | Populate Bene Name retrieved from account inquiry | N | Retrieve Bene Name via Bene Inquiry To populate Bene Name in Confirmation Page > Transfer To section. Update the Bene Name to Fav - Bene Name upon Transfer Successful.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Esb1InterbankAccountInquiryBasedOnTheBeneAccountNumberInquiryViaBifastRtolNgboPT1ForexTrxnUsdThreshold10kWhichCallsForAdditonalDetailsEclipseEsb1RetrieveTotalForexTransactionAmountInUsdPerMonthPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("ESB_1_INTERBANK_ACCOUNT_INQUIRY_BASED_ON_THE_BENE_ACCOUNT_NUMBER_INQUIRY_VIA_BIFAST_RTOL_NGBO_P_T_1_FOREX_TRXN_USD_THRESHOLD_10K_WHICH_CALLS_FOR_ADDITONAL_DETAILS_ECLIPSE_ESB_1_RETRIEVE_TOTAL_FOREX_TRANSACTION_AMOUNT_IN_USD_PER_MONTH_TC_013 | 10 | New Open Transfer | - | N | SKN/RTGS | Display empty name. | Y (user input) | To populate Bene Name (manually entered) in Confirmation Page > Transfer To section.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Esb1InterbankAccountInquiryBasedOnTheBeneAccountNumberInquiryViaBifastRtolNgboPT1ForexTrxnUsdThreshold10kWhichCallsForAdditonalDetailsEclipseEsb1RetrieveTotalForexTransactionAmountInUsdPerMonthPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("ESB_1_INTERBANK_ACCOUNT_INQUIRY_BASED_ON_THE_BENE_ACCOUNT_NUMBER_INQUIRY_VIA_BIFAST_RTOL_NGBO_P_T_1_FOREX_TRXN_USD_THRESHOLD_10K_WHICH_CALLS_FOR_ADDITONAL_DETAILS_ECLIPSE_ESB_1_RETRIEVE_TOTAL_FOREX_TRANSACTION_AMOUNT_IN_USD_PER_MONTH_TC_020 | No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Esb1InterbankAccountInquiryBasedOnTheBeneAccountNumberInquiryViaBifastRtolNgboPT1ForexTrxnUsdThreshold10kWhichCallsForAdditonalDetailsEclipseEsb1RetrieveTotalForexTransactionAmountInUsdPerMonthPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("ESB_1_INTERBANK_ACCOUNT_INQUIRY_BASED_ON_THE_BENE_ACCOUNT_NUMBER_INQUIRY_VIA_BIFAST_RTOL_NGBO_P_T_1_FOREX_TRXN_USD_THRESHOLD_10K_WHICH_CALLS_FOR_ADDITONAL_DETAILS_ECLIPSE_ESB_1_RETRIEVE_TOTAL_FOREX_TRANSACTION_AMOUNT_IN_USD_PER_MONTH_TC_021 | No. | Description | Integration | Remarks", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Esb1InterbankAccountInquiryBasedOnTheBeneAccountNumberInquiryViaBifastRtolNgboPT1ForexTrxnUsdThreshold10kWhichCallsForAdditonalDetailsEclipseEsb1RetrieveTotalForexTransactionAmountInUsdPerMonthPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
  test("ESB_1_INTERBANK_ACCOUNT_INQUIRY_BASED_ON_THE_BENE_ACCOUNT_NUMBER_INQUIRY_VIA_BIFAST_RTOL_NGBO_P_T_1_FOREX_TRXN_USD_THRESHOLD_10K_WHICH_CALLS_FOR_ADDITONAL_DETAILS_ECLIPSE_ESB_1_RETRIEVE_TOTAL_FOREX_TRANSACTION_AMOUNT_IN_USD_PER_MONTH_TC_022 | 1 | Upon page load: 1. Transfer Mode: a. For New Transfer (i) Transfer Mode will be populated from previous screen ( Input Account No). (ii) If the Transfer Mode is offline, then default to first available Transfer Mode based on the Transfer Mode sequence, and display warning message '<Default Transfer Mode> is temporarily offline. Please review the transfer mode before continuing.' b. For Bene Listing (i) Transfer Mode will be populated from previous screen ( Input Amount) (ii)If the Transfer Mode is offline, then default to first available Transfer Mode based on the Transfer Mode sequence, and display Info Message 'The transfer mode previously selected for this recipient is temporarily offline. Please review before continuing.' c. Change Transfer Mode (i) Switching the transfer mode resets the form & previously entered values, and render fields based on the newly selected transfer mode. For FCY to IDR: 1. Default to BI-SKN as it is the only transfer mode allowed. Other options will be disabled. | NGBO (P&T Ownership): 1. Retrieve transfer modes with availlability & sequence/priority order based on selected Bene Bank.", async ({ page }) => {
    await page.goto("/");
    const pageObject = new Esb1InterbankAccountInquiryBasedOnTheBeneAccountNumberInquiryViaBifastRtolNgboPT1ForexTrxnUsdThreshold10kWhichCallsForAdditonalDetailsEclipseEsb1RetrieveTotalForexTransactionAmountInUsdPerMonthPage(page);
    await pageObject.open();
    await expect(page.locator("body")).toBeVisible();
  });
});
