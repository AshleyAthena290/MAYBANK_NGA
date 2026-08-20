# Quick Reference Guide - Credit Card API Test Cases

**Generated:** 2026-07-17  
**Version:** 1.0

---

## 📋 Quick Access Guide

### Main Deliverables

| File | Location | Format | Size | Purpose |
|------|----------|--------|------|---------|
| **Test Cases (Markdown)** | `artifacts/Test_Case/Markdown/Account_Dashboard_Credit_Card_DDD_Test_Cases.md` | .md | 58.8 KB | Complete test specifications (156 cases) |
| **Test Cases (Excel)** | `artifacts/Test_Case/Excel/Account_Dashboard_Credit_Card_DDD_Test_Cases.xlsx` | .xlsx | 8.1 KB | Basic test cases (14 cases) |
| **Test Data (Excel)** | `artifacts/Test_Case/Excel/Account_Dashboard_Credit_Card_DDD_Test_Data.xlsx` | .xlsx | 6.8 KB | Test data values (15 records) |
| **Extended Test Cases** | `artifacts/Test_Case/Excel/Account_Dashboard_Credit_Card_DDD_Test_Cases_Extended.xlsx` | .xlsx | 11.5 KB | Expanded cases (48 cases with negatives) |
| **Extended Test Data** | `artifacts/Test_Case/Excel/Account_Dashboard_Credit_Card_DDD_Test_Data_Extended.xlsx` | .xlsx | 9.1 KB | Extended test data (48 records) |
| **Summary Document** | `artifacts/Test_Case/DELIVERABLES_SUMMARY.md` | .md | Full details | Complete deliverables overview |

---

## 🚀 Getting Started (5 Minutes)

### Step 1: Open Main Test Cases
```
File: Account_Dashboard_Credit_Card_DDD_Test_Cases.md
Format: Markdown
Tool: Any text editor or browser
Action: Read and understand test case structure
```

### Step 2: Review Test Data
```
File: Account_Dashboard_Credit_Card_DDD_Test_Data_Extended.xlsx
Tool: Microsoft Excel or compatible
Action: Check valid/invalid test data values
```

### Step 3: Start Testing
```
Choose:
  - Manual: Use Markdown file + Excel data
  - Automation: Use Extended Excel files
  - Both: Cross-reference both formats
```

---

## 📊 Test Case Distribution

### By API (12 Total)
1. **getCreditLimits** - 10 cases
2. **getCreditLimitConfigurations** - 4 cases
3. **getInstalmentConversionSchedule** - 5 cases
4. **creditCardActivation** - 8 cases
5. **creditCardBlock** - 7 cases
6. **creditCardUnblock** - 5 cases
7. **creditCardResetPin** - 6 cases
8. **creditCardPinValidation** - 6 cases
9. **cvvInquiry** - 6 cases
10. **replaceCreditCard** - 6 cases
11. **increaseCreditLimit** - 10 cases
12. **applyInstConvert** - 9 cases

### By Type
- **Positive:** 12 (Happy path scenarios)
- **Negative:** 55+ (Error handling)
- **Boundary:** 9+ (Edge cases)
- **Security:** 6+ (Auth/injection)
- **Integration:** 5+ (Cross-API)
- **Total:** 156+

### By Priority
- **P0 (Critical):** 12 cases - Smoke tests
- **P1 (High):** 50+ cases - Core functionality
- **P2 (Medium):** 40+ cases - Extended testing
- **P3 (Low):** 10+ cases - Performance

---

## 🎯 Recommended Test Execution Plan

### Phase 1: Smoke Tests (20 min)
**When:** First thing, every day  
**Cases:** P0 only (12 cases)  
**Goal:** Verify APIs are accessible  

**Commands:**
```bash
Test Cases: TC_001_001, TC_002_001, TC_003_001, TC_004_001, TC_005_001, 
            TC_006_001, TC_007_001, TC_008_001, TC_009_001, TC_010_001,
            TC_011_001, TC_012_001
```

### Phase 2: Core Tests (1-2 hours)
**When:** Daily regression suite  
**Cases:** P1 cases (50+)  
**Goal:** Validate all functionality  

---

### Phase 3: Security Tests (1 hour)
**When:** Weekly deep-dive  
**Cases:** Security + Boundary (15+)  
**Goal:** Verify security controls  

---

### Phase 4: Performance Tests (30 min)
**When:** Release validation  
**Cases:** P2-P3 (20+)  
**Goal:** Baseline performance  

---

## 🔍 Key Test Case IDs to Know

### Always Run First (Smoke)
- CC_001_001 - GET limits
- CC_004_001 - Activate card
- CC_005_001 - Block card
- CC_011_001 - Increase limit

### Authentication Tests (Security)
- CC_001_002 - Missing auth header
- CC_001_003 - Invalid token
- CC_001_004 - Missing client-id
- CC_001_005 - Missing env

### Error Scenarios (Negative)
- CC_004_002 - PIN mismatch
- CC_005_002 - Block already blocked
- CC_007_005 - Same as old PIN
- CC_011_003 - Decrease limit

### Boundary Tests
- CC_001_006 - Limit amounts
- CC_003_004 - Max duration
- CC_004_004 - PIN length
- CC_011_004 - Max limit exceeded

---

## 💾 Using Excel Files

### For Manual Testing
1. Open `Account_Dashboard_Credit_Card_DDD_Test_Cases_Extended.xlsx`
2. Read test steps from Column M
3. Use test data from `Account_Dashboard_Credit_Card_DDD_Test_Data_Extended.xlsx`
4. Record results in Column K (Actual Result)

### For Automation
1. Read Test Case ID from Column A
2. Extract HTTP Method from Column E
3. Build request using Columns H-K (Headers, Path, Query, Body)
4. Assert response matches Column N (Expected Status)

### Columns Reference

| Col | Name | Usage |
|-----|------|-------|
| A | Test Case ID | Unique identifier |
| B | Test Scenario | What to test |
| E | HTTP Method | GET/POST/PATCH/DELETE |
| F | Endpoint | API path |
| H | Headers | Auth, client-id, env |
| I | Path Params | Path variables |
| J | Query Params | URL parameters |
| K | Request Body | JSON payload |
| N | Expected Status | Expected HTTP code |
| O | Expected Result | What should happen |

---

## 🔑 Important Values & Formats

### Headers (Required)
```
Authorization: Bearer {ACCESS_TOKEN}
client-id: pnt-17ht3
env: UAT (or DEV, PROD)
```

### Test Card Numbers
```
Visa:       4532123456789010
Mastercard: 5425233010103026
Amex:       378282246310005
```

### Valid Values
```
PIN:               1234 (4 digits)
Limit Type:        PERMANENT, TEMPORARY
Currency:          IDR, USD, SGD, MYR, EUR
Card Status:       ACTIVE, BLOCKED, INACTIVE, CLOSED
Block Reason:      LOST, STOLEN, DAMAGED, SUSPICIOUS_ACTIVITY
Period (Months):   3, 6, 12, 24
```

### Error Status Codes
```
200 - Success (GET)
202 - Accepted (async operations)
400 - Bad Request (invalid format)
401 - Unauthorized (auth failure)
403 - Forbidden (no permission)
404 - Not Found (resource missing)
409 - Conflict (state error)
422 - Unprocessable (validation error)
503 - Service Unavailable
```

---

## 📱 Running Tests Manually

### Example Test Flow: Block Card

1. **Precondition Check**
   - Verify card is ACTIVE
   - Confirm authentication available

2. **Prepare Request**
   ```
   Method: POST
   Endpoint: /v1/external/cards/block
   Headers:
     Authorization: Bearer {token}
     client-id: pnt-17ht3
     env: UAT
   Body:
   {
     "cardNumber": "4532123456789010",
     "reason": "LOST"
   }
   ```

3. **Send Request**
   - Use Postman, cURL, or API testing tool
   - Record response status and body

4. **Verify Results**
   - ✓ Status Code: 202 Accepted
   - ✓ Response contains: cardNumber, status: "BLOCKED"
   - ✓ Card is now unusable for transactions

5. **Record Results**
   - Actual Result: PASS/FAIL
   - Execution Date: 2026-07-17
   - Notes: Any issues or observations

---

## 🔧 Regenerating Excel Files

If you need to regenerate the Excel files:

```bash
# Basic generation (14 test cases)
python scripts/generate_credit_card_test_excel.py

# Extended generation (48 test cases)
python scripts/generate_credit_card_test_excel_extended.py
```

**Output Files:**
- `artifacts/Test_Case/Excel/Account_Dashboard_Credit_Card_DDD_Test_Cases.xlsx`
- `artifacts/Test_Case/Excel/Account_Dashboard_Credit_Card_DDD_Test_Data.xlsx`
- `artifacts/Test_Case/Excel/Account_Dashboard_Credit_Card_DDD_Test_Cases_Extended.xlsx`
- `artifacts/Test_Case/Excel/Account_Dashboard_Credit_Card_DDD_Test_Data_Extended.xlsx`

---

## 📞 Troubleshooting

### Issue: Test data values don't match API response
**Solution:** Check if API is in different environment (DEV vs UAT)

### Issue: Authentication failing
**Solution:** Verify Bearer token is valid and not expired

### Issue: Test case reference not found
**Solution:** Check Test Case ID format - should be CC_XXX_XXX

### Issue: Excel file won't open
**Solution:** Use Microsoft Excel 2016+ or LibreOffice Calc

### Issue: Markdown formatting looks wrong
**Solution:** Use VS Code, GitHub, or any Markdown viewer

---

## 📈 Test Metrics & Reporting

### Daily Metrics to Track
- **Total Cases Executed:** X
- **Cases Passed:** X
- **Cases Failed:** X
- **Pass Rate:** X%
- **Execution Time:** X hours

### Weekly Report Template
```
Week: 2026-07-XX
APIs Tested: [list]
Test Execution: [% complete]
Defects Found: [count]
Severity: [high/medium/low]
Recommendations: [notes]
```

---

## ✅ Pre-Testing Checklist

- [ ] Access to test environment (UAT/DEV)
- [ ] Valid API credentials/Bearer token
- [ ] Network connectivity verified
- [ ] Test data prepared
- [ ] Postman/API testing tool ready
- [ ] Results spreadsheet prepared
- [ ] Team notified of testing schedule
- [ ] Backup of current test data created

---

## 🎓 Test Case Template Reference

```markdown
## Test ID - Test Scenario {#test_id}

**Feature:** Feature Name  
**Description:** What is being tested  
**Priority:** P0/P1/P2/P3  

### Tags
- tag1
- tag2

### Preconditions
- Condition 1
- Condition 2

### Request Details
| Property | Value |
|----------|-------|
| Method | GET/POST |
| Endpoint | /path |
| Headers | Auth: Bearer... |

### Expected Response
- Status Code: `200`
- Description: Success

### Assertions
- Assert condition 1
- Assert condition 2

### Cleanup
- Action 1
- Action 2
```

---

## 📚 Additional Resources

- **API Specifications:** `CreditCard_ECLIPSE_API_Detailed_Specs.md`
- **Test Framework:** `CreditCard_MASTER_TEST_GENERATION_ANALYSIS.md`
- **Reference Format:** `PT_Local_Transfer_Test_Cases.md`
- **Full Summary:** `DELIVERABLES_SUMMARY.md`

---

## 🎯 Next Steps

1. **Day 1:** Review test cases in Markdown
2. **Day 1:** Import Excel files into Test Management Tool
3. **Day 2:** Execute Phase 1 (Smoke Tests)
4. **Day 2:** Report initial findings
5. **Day 3+:** Execute remaining phases per schedule

---

**Questions?** Refer to full documentation or contact QA team lead.

**Last Updated:** 2026-07-17  
**Status:** ✅ Ready for Testing  

