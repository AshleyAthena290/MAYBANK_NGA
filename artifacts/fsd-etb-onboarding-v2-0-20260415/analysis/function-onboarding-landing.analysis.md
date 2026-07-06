# Requirement Analysis - Function: Onboarding Landing

- Generated At: 2026-07-05T13:38:24.785Z
- Schema Version: 1.0.0

## Missing Requirements

- Feature description is missing.
- User/system flow is missing.
- Dependencies and prerequisites are missing.
- Navigation path details are missing.

## Ambiguities

- None

## Risks

- Error handling behavior is not documented.
- Input validation behavior is not documented.

## Missing Validations

- No explicit validation rules were found for user input or business constraints.
- Boundary and negative validation cases are likely under-specified.

## Security Concerns

- No direct API security concerns detected from current specification scope.

## API Dependencies

- None

## UI Dependencies

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

## Backend Dependencies

- None

## Testability Notes

- Flow details are missing, reducing scenario traceability.
- Validation rules are missing, increasing manual interpretation during test design.
- Specification gaps and ambiguities should be resolved before automation implementation.
