# Test Layer Classification - Function: Set Primary Account

- Generated At: 2026-07-05T13:38:25.010Z
- Schema Version: 1.0.0
- Total Requirements Classified: 15

## Classification Details

### Requirement: No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Title | N/A | Alphanumeric | Integration | Display "Set a primary account" | CMS 1. Retrieve Title

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Description | N/A | Alphanumeric | Integration | Display description for primary account | CMS 1. Retrieve Description

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | Account List | Yes | Alphanumeric | Selection | Input | Retrieve & display CASA or CC list with Product Name, Account Number & Account Balance (as per screen) Refer to business rules.

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 4 | Notes | N/A | Alphanumeric | Display | Integration | Display notes for primary account | CMS 1. Retrieve Notes

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Actions

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Action | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Confirm button | Once account is selected, navigate to [A&A] Biometric setup screen

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen.

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | On the page load, retrieve and display account listing as below, regardless whether is registered via CASA or CC: 1. If user has > 1 CASA and with/(out) CC, display list of CASA for primary account selection 2. If user has > 1 CC (no CASA), display list of CC for primary account selection 3. Display allowed account with status: a. CASA status allowed: Active or Inactive (IM07, ST01) b. Term Savings is not allowed for primary account 4. Display allowed CC, with following sequence check: a. CC Status allowed = Active (1) dan Inactive (2, i.e. no trxn in last 180 days) b. CC Block code allowed = Normal (Null or ” “) or Late Payment (B, C, H, I, J, K, M, N, O, P) c. CC Card Type = Primary (PP) 5. Primary label: a. Once tap and select, highlight the selected account and display "Primary" tag b. For CASA, pre-select account with highest recent digital transaction count in past 90 days and position it as the first selection in account list - IF two accounts have equal digital transaction, default to most recently used account - IF all accounts have 0 recent activity, default to oldest account (by age) c. For CC, pre‑select the account that comes first in alphabetical order 6. Pagination is available (20 accounts per page, lazy load). Sorting order 1. CC will be sorted by alphabetical order 2. Account (CASA) will be sorted from highest to lowest digital transaction count in the last 90 days 3. Primary default will be selected to the first one | ECLIPSE/Cardlink/Systematic: 1. Retrieve user's permitted CASA and CC, based on applicable rules 2. Retrieve CASA with highest recent digital transaction in past 90 days. CMS: 1. Retrieve primary tag text

- UI: Requirement references end-user interface behavior.
- Performance: Requirement contains measurable performance criteria.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Bypass Primary Account screen and navigate to Biometric setup, regardless whether is registered via CASA or CC: 1. If user has 1 CASA and with/(out) CC, auto-select single CASA as primary account and this screen will not be displayed. 2. If user has 1 CC only (no CASA), auto-select single CC as primary account and this screen will not be displayed. 3. The account will be updated in Settings > Primary app account. | ECLIPSE/Cardlink/Systematic: 1. Retrieve user's permitted CASA and CC, based on applicable rules 2. Retrieve CASA with highest recent digital transaction in past 90 days. CMS: 1. Retrieve primary tag text

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | Account & CC display to include: 1. Full account/CC name 2. Full account/CC number - CASA: breaks every 4 digits - Credit card: Visa/Master/JCB breaks every 4 digits; AMEX breaks of 4-6-5 digits - Masked excluding last four digits 3. Available balance - If CASA account type is GAA, display the IDR balance - If CASA account currency is non-IDR, display corresponding currency

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 4 | Upon tapping confirm button, perform below: 1. Proceed to Biometric setup. - If Biometric setup successful, refer to [9.0 ETB - w M2U Final] - If Biometric setup unsuccessful, treat as successful onboarding and refer to [9.0 ETB - w M2U Final]. User can set biometric later in [Setting] - Security Dashboard screen 2. Account selected will be updated in Settings > Primary app account.

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 5 | If user quits at Primary Account or Biometric screen: User will continue from Login screen and upon successful login, Navigate to [App Dashboard] - Pre-login - Primary Account default storing will be triggered in App Dashboard (Refer to [App Dashboard] - Main Display Amt) - Biometric setup can be performed later in [Setting] - Security Dashboard

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.
