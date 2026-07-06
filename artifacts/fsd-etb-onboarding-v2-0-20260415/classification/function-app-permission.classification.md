# Test Layer Classification - Function: App Permission

- Generated At: 2026-07-05T13:38:25.003Z
- Schema Version: 1.0.0
- Total Requirements Classified: 20

## Classification Details

### Requirement: App Permission, Native Location & Notification Permission | App Permission (if "don't allow" is selected for Location)

- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | [Proceed] Button | Triggers Native OS location permission prompt (Android/iOS) followed by native notification permission prompt

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | [<] Button | Upon tapping, navigate to Nickname screen

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen.

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Device Location Permission Popup

- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 4 | Allow once Button | Save permission & trigger Notification Permission pop-up.

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 5 | Allow only when using app Button | Save permission & trigger Notification Permission pop-up.

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 6 | Don't allow button | Skip & trigger Notification Permission pop-up.

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Device Notification Permission Popup

- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 7 | Allow Button | Save Permission & navigate to [A&A] Setup S2U

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 8 | Settings Button | Go to Device Settings, when return to app navigate to [A&A] Setup S2U

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Title & Description | N/A | Alphanumeric | Display | Integration | Display: - Title "[NextGen] app permissions" - Description "Please enable these permissions for the safest and smoothest banking experience." | CMS 1. Retrieve title and description

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Location Access | N/A | Alphanumeric | Display | Integration | Display: - Icon & Title "Location Access" - Description "Location access is a national requirement as a security measure when performing transactions." | CMS 1. Retrieve icon, title, and description

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | Notifications | Yes | Alphanumeric | Display | Integration | Display: - Icon & Title "Notifications" - Description "Receive Secure2u push notifications to authorise your transactions quickly and securely. You can always configure your alerts settings later.." | CMS 1. Retrieve icon, title, and description

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Actions

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Action | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | For S2U Setup & Verification: 1. If completed successfully: - store Nickname (in Title Case format) - perform Device Binding - store customer consent - activate cooling off period* - proceed to M2U Primary Account selection. 2. if user quits in prior to successful S2U verification, unsuccessful device binding & consent: - ETB with M2U ID (regardless of product) or ETB without M2U ID (regardless of product, registered in NGA & completed NGA ID creation 1st verification), will continue from Login screen, including Acknowledgement & Consent. *Cooling off: 1.Required for: - Existing RMBP user onboard in NGA with different device - Existing NGA user onboard in NGA with different device - ETB new to NGA user 2. Retrieve Cooling off hours from NGBO - if value is 0, skip cooling off period. | NGA Channel Layer/IAM: 1. Store NGA app display name IAM: 1. S2U Device Binding 2. Activate cooling off period MDIP/MCM: 1. Store customer consent, including version binding with user's device ID to each of consent item NGBO: 1. Retrieve cooling off hours

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | If user choose "Don’t allow" option in device native request 1. Location Permission - Keep prompting permission screen to request location permission until is done. 2. Notification Permission - User can continue to next screen and setup notification permission later At permission screen, system will check current device permission and display remaining permission needed. 1. In the event customer downloaded the app, go to mobile device settings to perform the Location & Notification setup, system checks that the specific settings are done, then no need to prompt again.

- UI: Requirement references end-user interface behavior.
- API: Requirement references API contract or transport behavior.
- Integration: Requirement depends on component or service interaction.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.
