# Feature: FUNCTION 1: TRANSFER INTRODUCTION/ENTRY POINT

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Pre-Login State - Initiate Transfer (Quick Action) | Pre-Login State - Initiate Transfer (Menu)
- Post-Login State - Initiate Transfer (Quick Action) FIRST TIMER | Post-Login State - Initiate Transfer (Menu) FIRST TIMER | Post-Login State - Initiate Transfer (Quick Action) NON-FIRST TIMER | Post-Login State - Initiate Transfer (Menu) NON-FIRST TIMER
- Error Screen - Unable to access Transfer (no available account), randomise display for below options.
- CASA Account Details - Transfer Landing Page
- RDN Account Details - OWN Transfer > Input Amount Page
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remarks
## Business Rules
- No. | Description | Integration | Remarks
- 1 | For user at pre-login state and tap [Transfer] icon from home dashboard screen OR menu screen: 1. Redirects user to the login screen.
- 2 | For user at post-login state and tap [+Transfer] icon from home dashboard screen OR menu screen: 1. For first timer (user who has never accessed transfer page via NGA): a. Display Transfer Introduction Page. b. Mark the user as a "non-first timer for transfer", regardless whether tap on [Get Started]. 2. For non-first timer, to display Transfer Introduction Page based on NGBO configuration (display option by App Version, Start & End Date and Frequency to display within the defined period e.g. Once a day, once a week, once 1 month, X times within the period), a "flag/counter" will be used to track the display. 3. When user tap on Transfer or Intro Page [Get Started], system validates if user has any CASA account. a. IF user has no CASA account (to follow Transfer Local SoF eligibility check for Product Code & Segment ID, excluding Account Sttaus), display randomised "Apply CASA now bottom drawer". Randomiser will be displayed as follow: - Randomiser to select one available option from a dynamic pool of drawer variants (e.g. Option 1 to 5) Available options are maintainable via NGBO/CMS). - Each option will be displayed randomly in no particular order. - When tap on [Apply Now], navigate to "Apply New - CA & SA products". b. IF user has CASA account, proceed to display Transfer Landing Page. | NGA Channel Layer: 1. Transfer first timer flag 2. Intro Page Display Flag (non first timer) NGBO (P&T): 1. Retrieve Transfer Intro Page Config: - App Version - Start & End Date - Frequency to display within the defined period (e.g. Once a day, once a week, once 1 month, X times within the period) NGBO/CMS: 2. Retrieve "Apply CASA now" Randomised Options/Image: - Available options & Image content
## APIs
- Not specified
## Dependencies
- Not specified
## Error Messages
- Error Screen - Unable to access Transfer (no available account), randomise display for below options.
## Navigation
- Not specified
## Remarks
- Not specified

## Prompting Hints
- Keep requirement statements atomic.
- Map validations to positive, negative, and boundary tests.
- Use dependencies and APIs to derive integration scenarios.