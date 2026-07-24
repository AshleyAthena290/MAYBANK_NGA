# EXTRACTION & ANALYSIS SUMMARY
## ECLIPSE Account Dashboard API Specifications

Generated: 2026-07-20  
Source File: `input\api\ECLIPSE_Account Dashboard_Casa_DDD_API_Design_v1_Workshop.xlsx`

---

## 📊 ANALYSIS RESULTS

### **Endpoints Extracted: 6**

| # | Endpoint Name | HTTP Method | Base URL |
|---|---|---|---|
| 1 | getManageDebitCard | GET | /dep/card/v1/external/debit-card/manage |
| 2 | getAutoSweep | GET | /info/casa/v1/external/accounts/{accountId}/auto-sweep |
| 3 | setAutoSweep | POST | /dep/casa/v1/external/casa/auto-sweep |
| 4 | setLinkedCard | POST | /dep/casa/v1/external/casa/linked-card |
| 5 | blockAccounts | POST | /dep/casa/v1/external/casa/block |
| 6 | reactivateAccount | POST | /dep/casa/v1/external/casa/reactivate |

### **Key Metrics**

- **Total HTTP Headers**: 36 (6 per endpoint)
- **Total Body Parameters**: 13
- **Total Request Parameters**: 26
- **Total Response Fields**: 0 (Not extracted from this document)
- **Test Cases Generated**: 25

### **HTTP Methods Distribution**
- **GET**: 2 endpoints (getManageDebitCard, getAutoSweep)
- **POST**: 4 endpoints (setAutoSweep, setLinkedCard, blockAccounts, reactivateAccount)

---

## 🔐 Common Security Requirements

### Universal Headers (Required for ALL Endpoints)

| Header | Type | Description | Mandatory |
|--------|------|-------------|-----------|
| `authorization` | String | Bearer token for API authentication | ✓ YES |
| `client-id` | String | Unique Client ID per channel | ✓ YES |
| `env` | String | Environment (UAT, PROD, etc.) | ✓ YES |
| `api-key` | String | Unique key per channel | ✗ Optional |
| `accept` | String | Content type (application/json) | ✗ Optional |

---

## 📝 Endpoint Details Summary

### 1. getManageDebitCard (GET)
- **Purpose**: Retrieve debit card management details
- **Key Parameters**: accountId (required)
- **Body Parameters**: 1
- **Status**: ✓ Fully Documented

### 2. getAutoSweep (GET)
- **Purpose**: Retrieve auto-sweep settings for an account
- **Path Variable**: {accountId} (required)
- **Body Parameters**: 1
- **Status**: ✓ Fully Documented

### 3. setAutoSweep (POST)
- **Purpose**: Update auto-sweep settings
- **Key Parameters**: 
  - primaryCurrency (required)
  - primaryLimit (required)
  - accountId (required)
  - autoSweepFlag (required)
- **Body Parameters**: 5
- **Status**: ✓ Fully Documented

### 4. setLinkedCard (POST)
- **Purpose**: Link a card to an account
- **Key Parameters**: 22 parameters including account, customer, address, and card details
- **Body Parameters**: 1
- **Nested Objects**: account, customer (with address), card
- **Status**: ✓ Fully Documented

### 5. blockAccounts (POST)
- **Purpose**: Block one or more accounts
- **Key Parameters**: 
  - accounts[] (list of accounts)
  - accountId (required)
- **Body Parameters**: 3
- **Status**: ✓ Fully Documented

### 6. reactivateAccount (POST)
- **Purpose**: Reactivate a blocked account
- **Key Parameters**: 
  - accountId (required)
- **Body Parameters**: 2
- **Status**: ✓ Fully Documented

---

## 📁 Generated Files

### 1. **api_endpoints_summary.json**
- **Format**: JSON (Machine-readable)
- **Content**: Complete structured API specifications
- **Use Case**: Integration with API testing frameworks, automation tools
- **Size**: ~15 KB

### 2. **API_SPECIFICATIONS_FINAL.md**
- **Format**: Markdown documentation
- **Content**: Human-readable API specifications with tables and details
- **Use Case**: Reference documentation, team sharing
- **Size**: ~25 KB

### 3. **TEST_CASES_COMPREHENSIVE.csv**
- **Format**: CSV spreadsheet
- **Content**: 25 pre-designed test cases (Happy Path + Negative scenarios)
- **Use Case**: Import into TestRail, Jira, or other test management tools
- **Sections**:
  - Happy Path Tests (6)
  - Missing Authorization Tests (6)
  - Invalid Token Tests (6)
  - Missing Body Parameter Tests (4)
  - Invalid Data Type Tests (3)

### 4. **EXTRACTION_ANALYSIS_SUMMARY.md**
- **Format**: Markdown
- **Content**: This summary document with analysis results

---

## 🧪 Test Case Breakdown

### Positive Tests (Happy Path): 6
✓ One per endpoint with all mandatory parameters

### Negative Tests: 19
- Missing Authorization (6)
- Invalid Authorization Token (6)
- Missing Mandatory Body Parameters (4)
- Invalid Data Types (3)

---

## ✅ Quality Assurance Checklist

- [x] All endpoints extracted from source document
- [x] HTTP methods identified (GET, POST)
- [x] URLs parsed from document
- [x] Headers extracted and validated
- [x] Body parameters identified and marked as mandatory/optional
- [x] Request parameters categorized by type
- [x] Authentication requirements documented
- [x] Test case templates generated
- [x] Documentation created in multiple formats

---

## 🚀 Next Steps

### For Test Case Development:
1. Open `TEST_CASES_COMPREHENSIVE.csv` in your test management tool
2. Add actual test data and execution steps
3. Define expected responses for each error scenario
4. Configure test environment details (URLs, credentials, etc.)
5. Set up automation hooks if applicable

### For API Integration:
1. Review `API_SPECIFICATIONS_FINAL.md` for implementation details
2. Use `api_endpoints_summary.json` for automated tooling
3. Implement rate limiting based on endpoint requirements
4. Configure proper error handling based on documented error codes
5. Implement retry logic for transient failures

### For Documentation:
1. Share `API_SPECIFICATIONS_FINAL.md` with development teams
2. Keep synchronized with API versioning
3. Update test cases as API specifications change
4. Maintain audit trail of changes

---

## 📊 Statistics

| Metric | Value |
|--------|-------|
| Total Sheets in Source | 24 |
| Valid API Sheets | 6 |
| Endpoints Extracted | 6 |
| Test Cases Generated | 25 |
| Documentation Files | 4 |
| Total Parameters Documented | 75+ |

---

## 🔍 Notes & Observations

1. **Base URL Pattern**: All endpoints use the pattern `https://{Eclipse-IP}:{Eclipse-PORT}/`
2. **Authentication**: All endpoints require Bearer token authentication
3. **API Gateway**: Endpoints are managed through Eclipse service with environment-based routing
4. **Parameter Format**: Request bodies use JSON format
5. **HTTP Methods**: APIs follow REST conventions with GET for retrieval and POST for modifications
6. **Error Handling**: Standard HTTP status codes are used (400 for validation, 401 for auth)

---

## 🤝 For Questions or Clarifications

- Review the detailed specifications in `API_SPECIFICATIONS_FINAL.md`
- Check parameter requirements in the main JSON file
- Reference test cases for implementation examples
- Contact API team for environment-specific configurations

---

**End of Summary**
