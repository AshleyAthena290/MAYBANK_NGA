# Feature: Function: App Permission

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- App Permission, Native Location & Notification Permission | App Permission (if "don't allow" is selected for Location)
- 1 | [Proceed] Button | Triggers Native OS location permission prompt (Android/iOS) followed by native notification permission prompt
- 2 | [<] Button | Upon tapping, navigate to Nickname screen
- 3 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen.
- Device Location Permission Popup
- 4 | Allow once Button | Save permission & trigger Notification Permission pop-up.
- 5 | Allow only when using app Button | Save permission & trigger Notification Permission pop-up.
- 6 | Don't allow button | Skip & trigger Notification Permission pop-up.
- Device Notification Permission Popup
- 7 | Allow Button | Save Permission & navigate to [A&A] Setup S2U
- 8 | Settings Button | Go to Device Settings, when return to app navigate to [A&A] Setup S2U
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
- 1 | Title & Description | N/A | Alphanumeric | Display | Integration | Display: - Title "[NextGen] app permissions" - Description "Please enable these permissions for the safest and smoothest banking experience." | CMS 1. Retrieve title and description
- 2 | Location Access | N/A | Alphanumeric | Display | Integration | Display: - Icon & Title "Location Access" - Description "Location access is a national requirement as a security measure when performing transactions." | CMS 1. Retrieve icon, title, and description
- 3 | Notifications | Yes | Alphanumeric | Display | Integration | Display: - Icon & Title "Notifications" - Description "Receive Secure2u push notifications to authorise your transactions quickly and securely. You can always configure your alerts settings later.." | CMS 1. Retrieve icon, title, and description
- Actions
- No. | Action | Description | Integration | Remark
## Business Rules
- No. | Description | Integration | Remark
- 1 | For S2U Setup & Verification: 1. If completed successfully: - store Nickname (in Title Case format) - perform Device Binding - store customer consent - activate cooling off period* - proceed to M2U Primary Account selection. 2. if user quits in prior to successful S2U verification, unsuccessful device binding & consent: - ETB with M2U ID (regardless of product) or ETB without M2U ID (regardless of product, registered in NGA & completed NGA ID creation 1st verification), will continue from Login screen, including Acknowledgement & Consent. *Cooling off: 1.Required for: - Existing RMBP user onboard in NGA with different device - Existing NGA user onboard in NGA with different device - ETB new to NGA user 2. Retrieve Cooling off hours from NGBO - if value is 0, skip cooling off period. | NGA Channel Layer/IAM: 1. Store NGA app display name IAM: 1. S2U Device Binding 2. Activate cooling off period MDIP/MCM: 1. Store customer consent, including version binding with user's device ID to each of consent item NGBO: 1. Retrieve cooling off hours
- 2 | If user choose "Don’t allow" option in device native request 1. Location Permission - Keep prompting permission screen to request location permission until is done. 2. Notification Permission - User can continue to next screen and setup notification permission later At permission screen, system will check current device permission and display remaining permission needed. 1. In the event customer downloaded the app, go to mobile device settings to perform the Location & Notification setup, system checks that the specific settings are done, then no need to prompt again.
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