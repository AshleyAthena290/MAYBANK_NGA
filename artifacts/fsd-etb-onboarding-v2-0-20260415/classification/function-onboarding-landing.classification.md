# Test Layer Classification - Function: Onboarding Landing

- Generated At: 2026-07-05T13:38:24.948Z
- Schema Version: 1.0.0
- Total Requirements Classified: 16

## Classification Details

### Requirement: Onboarding Screen

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Fields

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Maybank logo & Name | N/A | Alphanumeric | Display | Integration | Display Maybank Logo & Name image | CMS: 1. Retrieve Maybank Logo & Name Image

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Language Code | N/A | Alphanumeric | Display | Integration | 1. Display "selected" language code based on previous selection (stored in device cache). 2. For first time onboarding/no language is selected, NGA to default to "ID". Available options: (i) ID - Bahasa Indonesia (ii) EN - English | NGBO: 1. Language code based on selected language

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | Banner Carousel | N/A | Alphanumeric | Display | Integration | 1. Retrieve & display Carousel Title & Description based on the number of banner configured in CMS: - Carousel dot title - Banner title - Banner description 2. User can slide to move to the next banner and will be displayed in rotation 3. Display dot title for banner shown. 4. Currently defined in Figma screen is as below, title & description refer to screen: - Lifestyle - Go Further - Grow 5. App to default to first dot banner and display dot title. | CMS: 1. Multiple Carousel banner info: - Dot title - Banner title - Banner description

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Actions

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Action Button | Description | Integration | Remark

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Language Dropdown | Upon tapping, open language drawer.

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: 2 | Banner Carousel | Upon swiping, move to next/previous banner in rotation.

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: 3 | [I'm a Maybank Customer] Button | Upon tapping, navigate to Permission/Consent screen

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 4 | [I'm new to Maybank] Button | Upon tapping, navigate to NTB onboarding flow

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 5 | [Continue as guest] hyperlink | Upon tapping, navigate to App Dashboard

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | CX Rules: 1. Maximum 3 banners displayed in rotation. Banners will be configured & controlled in CMS. App will render number of dots & banners based on configuration in CMS. 2. Banners do not contain tappable CTAs. (To avoid confusion with login/register).

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: 2 | Applicable to anyone who has installed the app but has not onboarded/binded.

- Manual: Requirement lacks deterministic signals for direct automation.
