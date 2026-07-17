# P&T Local Transfer DDD API - Test Cases

**Generated Date:** 2026-07-15T01:47:48.771Z  
**Total Test Cases:** 34

---

## Table of Contents

1. [API_SPECS_INDEX_001 - GET /dep/dashboard/v1/external/primary](#api_specs_index_001)
2. [API_SPECS_INDEX_002 - GET /dep/dashboard/v1/external/accounts](#api_specs_index_002)
3. [API_SPECS_INDEX_003 - GET /info/customer/v1/external/relationship-manager](#api_specs_index_003)
4. [API_SPECS_INDEX_004 - GET /dep/dashboard/v1/external/pfm/expenses](#api_specs_index_004)
5. [API_SPECS_INDEX_005 - GET /dep/dashboard/v1/external/investment/funds](#api_specs_index_005)
6. [API_SPECS_INDEX_006 - GET /info/customer/v1/external/information](#api_specs_index_006)
7. [API_SPECS_INDEX_007 - GET /info/customer/v1/external/holdings](#api_specs_index_007)
8. [API_SPECS_INDEX_008 - GET /dep/dashboard/v1/external/accounts](#api_specs_index_008)
9. [API_SPECS_INDEX_009 - GET](#api_specs_index_009)
10. [API_SPECS_INDEX_010 - GET /dep/dashboard/v1/external/pfm/expenses/top-categories](#api_specs_index_010)
11. [API_SPECS_INDEX_011 - GET /dep/dashboard/v1/external/pfm/expenses/recent](#api_specs_index_011)
12. [API_SPECS_INDEX_012 - GET /dep/dashboard/v1/external/tabung](#api_specs_index_012)
13. [API_SPECS_INDEX_013 - GET](#api_specs_index_013)
14. [API_SPECS_INDEX_014 - GET /info/maintenance/v1/external/exchange-rate](#api_specs_index_014)
15. [API_SPECS_INDEX_015 - GET](#api_specs_index_015)
16. [API_SPECS_INDEX_016 - GET](#api_specs_index_016)
17. [API_SPECS_INDEX_017 - GET /dep/dashboard/v1/external/accounts](#api_specs_index_017)
18. [API_SPECS_INDEX_018 - GET /dep/dashboard/v1/external/goal/gbi](#api_specs_index_018)
19. [MANAGE_2P_001 - GET /v1/external/relationship-manager](#manage_2p_001)
20. [MANAGE_DASHBOARD_001 - GET //v1/external/primary](#manage_dashboard_001)
21. [MANAGE_DASHBOARD_002 - GET /v1/external/accounts?accountGroup=DEPOSIT
/v1/external/accounts?accountType=CC](#manage_dashboard_002)
22. [MANAGE_DASHBOARD_003 - GET /v1/external/accounts?accountGroup=INVESTMENT
/v1/external/accounts?accountGroup=INVESTMENT&accountGroup=FIXED_DEPOSIT
/v1/external/accounts?accountGroup=FIXED_DEPOSIT
/v1/external/accounts?accountType=GOLD
/v1/external/accounts?accountType=MF
/v1/external/accounts?accountType=BOND
/v1/external/accounts?accountGroup=NET_WORTH](#manage_dashboard_003)
23. [MANAGE_LARGE_BENTO_001 - GET /v1/external/pfm/expenses/top-categories?fromDate=2026-04-16&toDate=2026-04-20&groupBy=category&limit=3

dateFormat : DD-MM-YYYY or YYYY-MM-DD, further discuss date format, standardized across platform](#manage_large_bento_001)
24. [MANAGE_LARGE_BENTO_002 - To retrieve recent transaction. 

limit:
1. 3 (default)](#manage_large_bento_002)
25. [MANAGE_LARGE_BENTO_003 - GET /v1/external/tabung](#manage_large_bento_003)
26. [MANAGE_LARGE_BENTO_004 - To retrieve the latest FX rate](#manage_large_bento_004)
27. [MANAGE_LARGE_BENTO_005 - GET /dashboard/v1/external/accounts?accountGroup=NET_WORTH](#manage_large_bento_005)
28. [MANAGE_LARGE_BENTO_006 - GET /xp-dashboard/v1/external/goal/gbi](#manage_large_bento_006)
29. [MANAGE_MEDIUM_BENTO_001 - GET /v1/external/information](#manage_medium_bento_001)
30. [MANAGE_MEDIUM_BENTO_002 - - User has Credit Card
- User has White Credit Card](#manage_medium_bento_002)
31. [MANAGE_MEDIUM_BENTO_003 - GET /v1/external/accounts?accountGroup=INVESTMENT&accountGroup=DEPOSIT&accountType=SA](#manage_medium_bento_003)
32. [MANAGE_MEDIUM_BENTO_004 - GET](#manage_medium_bento_004)
33. [MANAGE_SMALL_BENTO_001 - GET /v1/external/pfm/expenses?fromDate=2026-04-16&toDate=2026-04-20

fromDate and toDate is Mandatory 
dateFormat : DD-MM-YYYY or YYYY-MM-DD, further discuss date format, standardized across platform](#manage_small_bento_001)
34. [MANAGE_SMALL_BENTO_002 - GET /v1/external/investment/funds?fromDate=2026-04-16&toDate=2026-04-20

fromDate and toDate is Mandatory 
dateFormat : DD-MM-YYYY or YYYY-MM-DD, further discuss date format, standardized across platform](#manage_small_bento_002)

---

## 1. API_SPECS_INDEX_001 - GET /dep/dashboard/v1/external/primary {#api_specs_index_001}

**Feature:** Api Specs Index  
**Description:** GET /dep/dashboard/v1/external/primary  
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/dep/dashboard/v1/external/primary` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 2. API_SPECS_INDEX_002 - GET /dep/dashboard/v1/external/accounts {#api_specs_index_002}

**Feature:** Api Specs Index  
**Description:** GET /dep/dashboard/v1/external/accounts  
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/dep/dashboard/v1/external/accounts` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 3. API_SPECS_INDEX_003 - GET /info/customer/v1/external/relationship-manager {#api_specs_index_003}

**Feature:** Api Specs Index  
**Description:** GET /info/customer/v1/external/relationship-manager  
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/info/customer/v1/external/relationship-manager` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 4. API_SPECS_INDEX_004 - GET /dep/dashboard/v1/external/pfm/expenses {#api_specs_index_004}

**Feature:** Api Specs Index  
**Description:** GET /dep/dashboard/v1/external/pfm/expenses  
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/dep/dashboard/v1/external/pfm/expenses` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 5. API_SPECS_INDEX_005 - GET /dep/dashboard/v1/external/investment/funds {#api_specs_index_005}

**Feature:** Api Specs Index  
**Description:** GET /dep/dashboard/v1/external/investment/funds  
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/dep/dashboard/v1/external/investment/funds` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 6. API_SPECS_INDEX_006 - GET /info/customer/v1/external/information {#api_specs_index_006}

**Feature:** Api Specs Index  
**Description:** GET /info/customer/v1/external/information  
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/info/customer/v1/external/information` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 7. API_SPECS_INDEX_007 - GET /info/customer/v1/external/holdings {#api_specs_index_007}

**Feature:** Api Specs Index  
**Description:** GET /info/customer/v1/external/holdings  
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/info/customer/v1/external/holdings` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 8. API_SPECS_INDEX_008 - GET /dep/dashboard/v1/external/accounts {#api_specs_index_008}

**Feature:** Api Specs Index  
**Description:** GET /dep/dashboard/v1/external/accounts  
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/dep/dashboard/v1/external/accounts` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 9. API_SPECS_INDEX_009 - GET {#api_specs_index_009}

**Feature:** Api Specs Index  
**Description:** GET   
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 10. API_SPECS_INDEX_010 - GET /dep/dashboard/v1/external/pfm/expenses/top-categories {#api_specs_index_010}

**Feature:** Api Specs Index  
**Description:** GET /dep/dashboard/v1/external/pfm/expenses/top-categories  
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/dep/dashboard/v1/external/pfm/expenses/top-categories` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 11. API_SPECS_INDEX_011 - GET /dep/dashboard/v1/external/pfm/expenses/recent {#api_specs_index_011}

**Feature:** Api Specs Index  
**Description:** GET /dep/dashboard/v1/external/pfm/expenses/recent  
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/dep/dashboard/v1/external/pfm/expenses/recent` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 12. API_SPECS_INDEX_012 - GET /dep/dashboard/v1/external/tabung {#api_specs_index_012}

**Feature:** Api Specs Index  
**Description:** GET /dep/dashboard/v1/external/tabung  
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/dep/dashboard/v1/external/tabung` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 13. API_SPECS_INDEX_013 - GET {#api_specs_index_013}

**Feature:** Api Specs Index  
**Description:** GET   
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 14. API_SPECS_INDEX_014 - GET /info/maintenance/v1/external/exchange-rate {#api_specs_index_014}

**Feature:** Api Specs Index  
**Description:** GET /info/maintenance/v1/external/exchange-rate  
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/info/maintenance/v1/external/exchange-rate` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 15. API_SPECS_INDEX_015 - GET {#api_specs_index_015}

**Feature:** Api Specs Index  
**Description:** GET   
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 16. API_SPECS_INDEX_016 - GET {#api_specs_index_016}

**Feature:** Api Specs Index  
**Description:** GET   
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 17. API_SPECS_INDEX_017 - GET /dep/dashboard/v1/external/accounts {#api_specs_index_017}

**Feature:** Api Specs Index  
**Description:** GET /dep/dashboard/v1/external/accounts  
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/dep/dashboard/v1/external/accounts` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 18. API_SPECS_INDEX_018 - GET /dep/dashboard/v1/external/goal/gbi {#api_specs_index_018}

**Feature:** Api Specs Index  
**Description:** GET /dep/dashboard/v1/external/goal/gbi  
**Priority:** P3  
**Source Worksheet:** API_Specs_Index  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/dep/dashboard/v1/external/goal/gbi` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 19. MANAGE_2P_001 - GET /v1/external/relationship-manager {#manage_2p_001}

**Feature:** Manage 2p  
**Description:** Upon click Relationship Manager tab, FE call /customer/v1/relationship-manager. BE call DCIF to retrieve the relationship manager information  
**Priority:** P3  
**Source Worksheet:** Manage_2P  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/v1/external/relationship-manager` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 20. MANAGE_DASHBOARD_001 - GET //v1/external/primary {#manage_dashboard_001}

**Feature:** Manage Dashboard  
**Description:** Upon page load, FE call /dashboard/v1/primary to retrieve primary account balance. BE call erp-account to get primary accountId and accountType from ECLIPSE primary DB. Based on the accountType to indicate which module need to call either casa or card. 

Flow: 
erp-dashboard -> erp-account (get primary accountId from ECLIPSE DB)
                             -> erp-{casa/card} (get account from ESB)  
**Priority:** P3  
**Source Worksheet:** Manage_Dashboard  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `//v1/external/primary` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 21. MANAGE_DASHBOARD_002 - GET /v1/external/accounts?accountGroup=DEPOSIT
/v1/external/accounts?accountType=CC {#manage_dashboard_002}

**Feature:** Manage Dashboard  
**Description:** Customer can change the main view for banking dashboard. Upon page load, FE need to based on the main view customer choose to decide which accountGroup to pass in. 
Refer to AccountGroupRule sheet for accountGroup and accountType rules 

Flow: 
erp-dashboard -> erp-customer (get holdings from ECLIPSE DB)
                             -> erp-{casa/card} (get account from ESB)  
**Priority:** P3  
**Source Worksheet:** Manage_Dashboard  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/v1/external/accounts?accountGroup=DEPOSIT
/v1/external/accounts?accountType=CC` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 22. MANAGE_DASHBOARD_003 - GET /v1/external/accounts?accountGroup=INVESTMENT
/v1/external/accounts?accountGroup=INVESTMENT&accountGroup=FIXED_DEPOSIT
/v1/external/accounts?accountGroup=FIXED_DEPOSIT
/v1/external/accounts?accountType=GOLD
/v1/external/accounts?accountType=MF
/v1/external/accounts?accountType=BOND
/v1/external/accounts?accountGroup=NET_WORTH {#manage_dashboard_003}

**Feature:** Manage Dashboard  
**Description:** Customer can change the main view for wealth dashboard. Upon page load, FE need to based on the main view customer choose to decide which accountGroup to pass in. 
Refer to AccountGroupRule sheet for accountGroup and accountType rules 

Flow: 
erp-dashboard -> erp-customer (get holdings from ECLIPSE DB)
                             -> erp-{investment/time-deposit/casa/card} (get account from ESB)  
**Priority:** P3  
**Source Worksheet:** Manage_Dashboard  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/v1/external/accounts?accountGroup=INVESTMENT
/v1/external/accounts?accountGroup=INVESTMENT&accountGroup=FIXED_DEPOSIT
/v1/external/accounts?accountGroup=FIXED_DEPOSIT
/v1/external/accounts?accountType=GOLD
/v1/external/accounts?accountType=MF
/v1/external/accounts?accountType=BOND
/v1/external/accounts?accountGroup=NET_WORTH` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 23. MANAGE_LARGE_BENTO_001 - GET /v1/external/pfm/expenses/top-categories?fromDate=2026-04-16&toDate=2026-04-20&groupBy=category&limit=3

dateFormat : DD-MM-YYYY or YYYY-MM-DD, further discuss date format, standardized across platform {#manage_large_bento_001}

**Feature:** Manage Large Bento  
**Description:** To retrieve expenses based on all param FE pass in. BE fetch all record from DB based on fromDate and toDate, aggregate amount based on groupBy. At backend logic, take the top 3 highest total expenses and return. 

groupBy:
1. date (default) 
2. category 
3. merchant 
4. tag 
5. currency 

limit:
1. 3 (default)  
**Priority:** P3  
**Source Worksheet:** Manage_Large_Bento  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/v1/external/pfm/expenses/top-categories?fromDate=2026-04-16&toDate=2026-04-20&groupBy=category&limit=3

dateFormat : DD-MM-YYYY or YYYY-MM-DD, further discuss date format, standardized across platform` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 24. MANAGE_LARGE_BENTO_002 - To retrieve recent transaction. 

limit:
1. 3 (default) {#manage_large_bento_002}

**Feature:** Manage Large Bento  
**Description:** To retrieve recent transaction. 

limit:
1. 3 (default)  
**Priority:** P3  
**Source Worksheet:** Manage_Large_Bento  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/v1/expenses/recent?limit=3` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 25. MANAGE_LARGE_BENTO_003 - GET /v1/external/tabung {#manage_large_bento_003}

**Feature:** Manage Large Bento  
**Description:** To retrieve tabung with highest contribution 

example : 
1. Tabung A, target 3000, savedAmount 1500
2. Tabung B, target 5000, savedAmount 4000
3. Tabung C, target 8000, savedAmount 3000 

output : Tabung B  
**Priority:** P3  
**Source Worksheet:** Manage_Large_Bento  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/v1/external/tabung` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 26. MANAGE_LARGE_BENTO_004 - To retrieve the latest FX rate {#manage_large_bento_004}

**Feature:** Manage Large Bento  
**Description:** To retrieve the latest FX rate  
**Priority:** P3  
**Source Worksheet:** Manage_Large_Bento  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/maintenance/v1/external/exchange-rate?date=2026-04-25&baseCurrency=IDR

dateFormat : DD-MM-YYYY or YYYY-MM-DD, further discuss date format, standardized across platform` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 27. MANAGE_LARGE_BENTO_005 - GET /dashboard/v1/external/accounts?accountGroup=NET_WORTH {#manage_large_bento_005}

**Feature:** Manage Large Bento  
**Description:** GET /dashboard/v1/external/accounts?accountGroup=NET_WORTH  
**Priority:** P3  
**Source Worksheet:** Manage_Large_Bento  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/dashboard/v1/external/accounts?accountGroup=NET_WORTH` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 28. MANAGE_LARGE_BENTO_006 - GET /xp-dashboard/v1/external/goal/gbi {#manage_large_bento_006}

**Feature:** Manage Large Bento  
**Description:** GET /xp-dashboard/v1/external/goal/gbi  
**Priority:** P3  
**Source Worksheet:** Manage_Large_Bento  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/xp-dashboard/v1/external/goal/gbi` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 29. MANAGE_MEDIUM_BENTO_001 - GET /v1/external/information {#manage_medium_bento_001}

**Feature:** Manage Medium Bento  
**Description:** - Age
- Gender
- Is user out of Indonesia?
- Maybank Indonesia Employee
- Customer Opening Date: YYYYMMDD  
**Priority:** P3  
**Source Worksheet:** Manage_Medium_Bento  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/v1/external/information` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 30. MANAGE_MEDIUM_BENTO_002 - - User has Credit Card
- User has White Credit Card {#manage_medium_bento_002}

**Feature:** Manage Medium Bento  
**Description:** - User has Credit Card
- User has White Credit Card  
**Priority:** P3  
**Source Worksheet:** Manage_Medium_Bento  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/v1/holdings?accountType=CC` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 31. MANAGE_MEDIUM_BENTO_003 - GET /v1/external/accounts?accountGroup=INVESTMENT&accountGroup=DEPOSIT&accountType=SA {#manage_medium_bento_003}

**Feature:** Manage Medium Bento  
**Description:** GET /v1/external/accounts?accountGroup=INVESTMENT&accountGroup=DEPOSIT&accountType=SA  
**Priority:** P3  
**Source Worksheet:** Manage_Medium_Bento  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/v1/external/accounts?accountGroup=INVESTMENT&accountGroup=DEPOSIT&accountType=SA` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 32. MANAGE_MEDIUM_BENTO_004 - GET {#manage_medium_bento_004}

**Feature:** Manage Medium Bento  
**Description:** GET   
**Priority:** P3  
**Source Worksheet:** Manage_Medium_Bento  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 33. MANAGE_SMALL_BENTO_001 - GET /v1/external/pfm/expenses?fromDate=2026-04-16&toDate=2026-04-20

fromDate and toDate is Mandatory 
dateFormat : DD-MM-YYYY or YYYY-MM-DD, further discuss date format, standardized across platform {#manage_small_bento_001}

**Feature:** Manage Small Bento  
**Description:** To retrieve the aggregated expenses based on fromDate and toDate FE pass in. 
Upon page load, FE to check the feature flag from init API. 
Refer to featureRule sheet  
**Priority:** P3  
**Source Worksheet:** Manage_Small_Bento  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/v1/external/pfm/expenses?fromDate=2026-04-16&toDate=2026-04-20

fromDate and toDate is Mandatory 
dateFormat : DD-MM-YYYY or YYYY-MM-DD, further discuss date format, standardized across platform` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

## 34. MANAGE_SMALL_BENTO_002 - GET /v1/external/investment/funds?fromDate=2026-04-16&toDate=2026-04-20

fromDate and toDate is Mandatory 
dateFormat : DD-MM-YYYY or YYYY-MM-DD, further discuss date format, standardized across platform {#manage_small_bento_002}

**Feature:** Manage Small Bento  
**Description:** To retrieve aggregated investment funds (gold, mutual funds, bonds) based on fromDate and toDate FE pass in 
Upon page load, FE to check the feature flag from init API. 
Refer to featureRule sheet  
**Priority:** P3  
**Source Worksheet:** Manage_Small_Bento  
**Generated Date:** 2026-07-15  

### Tags
- `get`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/v1/external/investment/funds?fromDate=2026-04-16&toDate=2026-04-20

fromDate and toDate is Mandatory 
dateFormat : DD-MM-YYYY or YYYY-MM-DD, further discuss date format, standardized across platform` |
| Headers | Standard |
| Query Params | None |
| Path Params | None |

### Expected Response
**Success Response:**
- Status Code: `200`
- Description: Success

### Assertions
- Response status is 200
- Response body matches expected schema

### Negative Scenarios
- Send request without authentication token — expect 401 Unauthorized
- Send request to non-existent resource — expect 404 Not Found

### Cleanup
- None

---

