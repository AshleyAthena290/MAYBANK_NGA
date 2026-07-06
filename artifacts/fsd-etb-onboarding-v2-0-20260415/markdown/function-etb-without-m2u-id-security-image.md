# Feature: Function: ETB Without M2U ID - Security Image

## AI Reasoning Summary
Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.

## Description
- Not specified
## Flow
- Not specified
## UI Elements
- Security image
## Validation Rules
- No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark
- 1 | Title and Description | N/A | Alphanumeric | Display | Integration | Display images layout as per screen: - Title "Choose a security image" - Description "This image will display when you log in on legitimate Maybank channels" | CMS: 1. Retrieve Title & Description
- 2 | Security Images | Yes | Image | Display | Integration | Display list of security images. Highlight image when selected. | IAM: 1. Retrieve list of security images
- 3 | Insight banner | Yes | Alphanumeric | Display | Integration | Display "This image will be used every time you log in" | CMS 1. Retrieve insight message 2. Retrieve icon
- Actions
- No. | Action | Description | Integration | Remark
- 1 | Camera Icon | Display bottom drawer, with following value : 1. Take Photo 2. Select from Gallery 3. Cancel
- 2 | [Next] Button | Upon tapping, navigate to [A&A] Verification - SMS OTP. If Verification passed, navigate to [CASA/CC - w/o M2U ID] M2U Access created
- 3 | [<] Button | Navigate back to [CASA/CC - w/o M2U ID] Create password screen
- 4 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen.
## Business Rules
- No. | Description | Integration | Remark
- 1 | Add Image behaviour: 1. Take Photo, triggers device camera (assuming permission granted). - capture image and display/replace the image in the "camera" image placeholder. 2. Select from gallery, opens native photo gallery (asusming permission granted) - select & confirm image, display/replace the image in the "camera" image placeholder, and auto-select uploaded image 3. Camera icon feature to be configurable - turn on/off - for ID, will be turned off first during go live, will only avail this feature when cleared any security compliance or OJK requirements | NGBO 1. Retrieve flag (on/off) value for camera icon feature
- 2 | Upon tapping Next button, perform below: 1. Image validation - Image Size Limit: 5 MB - Image Format: JPG / PNG only 2. If validation passed - if user capture photo or selected own photo from gallery but didn't select to use as Security Image, system won't store user's newly added image
- 3 | Upon Verification - SMS OTP, perform below: 1. Regardless successful or unsuccessful verification, send data to FMS 2. If successful verification: - Perform User ID creation, includes: >> Store username >> Store password >> Store selected security image (compressed version Max. 20KB) | FMS: 1. Fraud Monitoring IAM: 1. User ID Creation - Store username, password & security image M2U: 1. User ID Creation
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