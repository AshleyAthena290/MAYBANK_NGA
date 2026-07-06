# Feature: Function: Onboarding Landing

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Onboarding Screen
- Fields
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
- 1 | Maybank logo & Name | N/A | Alphanumeric | Display | Integration | Display Maybank Logo & Name image | CMS: 1. Retrieve Maybank Logo & Name Image
- 2 | Language Code | N/A | Alphanumeric | Display | Integration | 1. Display "selected" language code based on previous selection (stored in device cache). 2. For first time onboarding/no language is selected, NGA to default to "ID". Available options: (i) ID - Bahasa Indonesia (ii) EN - English | NGBO: 1. Language code based on selected language
- 3 | Banner Carousel | N/A | Alphanumeric | Display | Integration | 1. Retrieve & display Carousel Title & Description based on the number of banner configured in CMS: - Carousel dot title - Banner title - Banner description 2. User can slide to move to the next banner and will be displayed in rotation 3. Display dot title for banner shown. 4. Currently defined in Figma screen is as below, title & description refer to screen: - Lifestyle - Go Further - Grow 5. App to default to first dot banner and display dot title. | CMS: 1. Multiple Carousel banner info: - Dot title - Banner title - Banner description
- Actions
- No. | Action Button | Description | Integration | Remark
- 1 | Language Dropdown | Upon tapping, open language drawer.
- 2 | Banner Carousel | Upon swiping, move to next/previous banner in rotation.
- 3 | [I'm a Maybank Customer] Button | Upon tapping, navigate to Permission/Consent screen
- 4 | [I'm new to Maybank] Button | Upon tapping, navigate to NTB onboarding flow
- 5 | [Continue as guest] hyperlink | Upon tapping, navigate to App Dashboard
## Validation Rules
- Not specified
## Business Rules
- No. | Description | Integration | Remark
- 1 | CX Rules: 1. Maximum 3 banners displayed in rotation. Banners will be configured & controlled in CMS. App will render number of dots & banners based on configuration in CMS. 2. Banners do not contain tappable CTAs. (To avoid confusion with login/register).
- 2 | Applicable to anyone who has installed the app but has not onboarded/binded.
## APIs
- Not specified
## Dependencies
- Not specified
## Error Messages
- Not specified
## Navigation
- Not specified
## Remarks
- Not specified

## Prompting Hints
- Keep requirement statements atomic.
- Map validations to positive, negative, and boundary tests.
- Use dependencies and APIs to derive integration scenarios.