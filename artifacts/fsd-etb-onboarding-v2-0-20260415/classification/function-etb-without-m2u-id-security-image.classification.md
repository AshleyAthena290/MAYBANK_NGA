# Test Layer Classification - Function: ETB Without M2U ID - Security Image

- Generated At: 2026-07-05T13:38:25.042Z
- Schema Version: 1.0.0
- Total Requirements Classified: 15

## Classification Details

### Requirement: Security image

- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Field | Mandatory | Data Type | Format | Data Source | Validation | Integration | Remark

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Title and Description | N/A | Alphanumeric | Display | Integration | Display images layout as per screen: - Title "Choose a security image" - Description "This image will display when you log in on legitimate Maybank channels" | CMS: 1. Retrieve Title & Description

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- Security: Requirement includes security or sensitive-data considerations.
- VisualRegression: Requirement includes presentational consistency assertions.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Security Images | Yes | Image | Display | Integration | Display list of security images. Highlight image when selected. | IAM: 1. Retrieve list of security images

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | Insight banner | Yes | Alphanumeric | Display | Integration | Display "This image will be used every time you log in" | CMS 1. Retrieve insight message 2. Retrieve icon

- UI: Requirement references end-user interface behavior.
- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: Actions

- Manual: Requirement lacks deterministic signals for direct automation.

### Requirement: No. | Action | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Camera Icon | Display bottom drawer, with following value : 1. Take Photo 2. Select from Gallery 3. Cancel

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | [Next] Button | Upon tapping, navigate to [A&A] Verification - SMS OTP. If Verification passed, navigate to [CASA/CC - w/o M2U ID] M2U Access created

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | [<] Button | Navigate back to [CASA/CC - w/o M2U ID] Create password screen

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 4 | [x] Button | Upon tapping, exit & return to Onboarding Landing screen.

- UI: Requirement references end-user interface behavior.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: No. | Description | Integration | Remark

- Integration: Requirement depends on component or service interaction.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 1 | Add Image behaviour: 1. Take Photo, triggers device camera (assuming permission granted). - capture image and display/replace the image in the "camera" image placeholder. 2. Select from gallery, opens native photo gallery (asusming permission granted) - select & confirm image, display/replace the image in the "camera" image placeholder, and auto-select uploaded image 3. Camera icon feature to be configurable - turn on/off - for ID, will be turned off first during go live, will only avail this feature when cleared any security compliance or OJK requirements | NGBO 1. Retrieve flag (on/off) value for camera icon feature

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 2 | Upon tapping Next button, perform below: 1. Image validation - Image Size Limit: 5 MB - Image Format: JPG / PNG only 2. If validation passed - if user capture photo or selected own photo from gallery but didn't select to use as Security Image, system won't store user's newly added image

- UI: Requirement references end-user interface behavior.
- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.

### Requirement: 3 | Upon Verification - SMS OTP, perform below: 1. Regardless successful or unsuccessful verification, send data to FMS 2. If successful verification: - Perform User ID creation, includes: >> Store username >> Store password >> Store selected security image (compressed version Max. 20KB) | FMS: 1. Fraud Monitoring IAM: 1. User ID Creation - Store username, password & security image M2U: 1. User ID Creation

- Security: Requirement includes security or sensitive-data considerations.
- AutomationCandidate: Requirement has deterministic assertions suitable for automation.
