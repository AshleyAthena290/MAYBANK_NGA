# Test Layer Classification - Function: ETB without M2U ID - Enter your card details

- Generated At: 2026-07-05T13:38:25.027Z
- Schema Version: 1.0.0
- Total Requirements Classified: 15

## Classification Details

### Requirement: Enter your account details (Credit Card)

- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Title | N/A | Alphanumeric | Display | Integration | Display based on entry point 1. Credit Card - Display "Enter your credit card details" 2. Current/Savings account - Display "Enter your debit card details" | CMS 1. Retrieve Title based on CC or CASA.

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Description | N/A | Alphanumeric | Display | Integration | Display description for enter card details | CMS 1. Retrieve Description (same description now) based on CC or CASA

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | Credit/Debit card number | Yes | Numeric | Text Field 9(16) | Input | 1. Display field label based on entry point. a. Credit Card - Display "Credit card number" b. Current/Savings account - Display "Debit card number" 2. Tap on field draws up phone's numeric keypad. 3. Allow copy & paste, trim non-numeric, and trailing numbers if numbers > 16 4. Display card number with space for every 4 digits (e.g "xxxx xxxx xxxx xxxx") 5. Value entered must be 16 digits (or 15 for AMEX), else display "Please enter a valid debit card number" or "Please enter a valid credit card number"

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 4 | Credit/ Debit card expiry date | Yes | Numeric | Text Field 9(4) | Input | 1. Display expiry date in MM/YY format 2. "/" auto displayed after typing 3rd number

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 5 | Credit/Debit card PIN | Yes | Numeric | Text Field 9(6) | Input | 1. Display field label based on entry point a. Credit Card - Display "Credit card PIN" b. Current/Savings account - Display "Debit card PIN" 2. Tap on field draws up phone's numeric keypad. 3. Display PIN as masked input

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Actions

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Action | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Show/Hide Icon | Upon holding icon, unmasked PIN input

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Next button | Upon tapping & passed validation, navigate to [CASA/CC - w/o M2U ID] create username screen.

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | [<] Button | Upon tapping, navigate back to previous screen - Login Username screen

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 4 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen.

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | When tap on Next button, perform validation below: 1. Mandatory Check 2. Format validation, if failed display inline messsage. 3. M2U or NGA User ID validation - check if customer has existing M2U/NGA user ID. If yes, then navigate to Forgot Account Details Page. 4. Account validity , if failed display snackbar error a. Credit card i. Validate card number, expiry date, PIN validity, else display snackbar error "Invalid card details or status. Please check your details or try another card." ii. Validate card with following rules, else display snackbar error "Invalid card details or status. Please check your details or try another card.": - CC Status allowed = Active (1) dan Inactive (2, i.e. no trxn in last 180 days) - CC Block code allowed = Normal (Null or ” “) or Late Payment (B, C, H, I, J, K, M, N, O, P) - CC Card Type = Primary (PP) b. Debit card i. Validate card number,expiry date, PIN validity, else display snackbar error "Invalid card details or status. Please check your details or try another card." ii. Check card with following rules, else display snackbar error "Invalid card details/status. Please check your details or try another card." - Debit Card status allowed : Active (1,6) - Debit Card relationship code not allowed: Joint Account (02, 32, 03, 33) - CASA status allowed: Active or Inactive (IM07, ST01) 5. IF user enter invalid PIN only >3 times, card will be temporary blocked. Once above is completed successfully, perform CIF retrieval and extract info below: 1. Customer Name (To populate first name for Nickname screen) 2. DOB (For password check) Info: - In ID, M2U User ID is linked to DCIF, 1 customer is only allowed to have 1 M2U or NGA User ID. - Sending of PIN verification would required encryption | ESB: 1. Retrieve CIF using DC or CC number. - Retrieve Customer Name from DCIF - Retrieve DOB from DCIF 2. Credit Card Validation - card number, PIN, Expiry date is valid - card is permitted (based on stated rules) 3. Debit Card Validation - card number, PIN, Expiry date is valid - card is permitted (based on stated rules) M2U DB 1. Check linked user ID with customer's CIF (before credit/debit card validation) CMS 1. Error message for: - Invalid card details - Card/account not permitted

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.
