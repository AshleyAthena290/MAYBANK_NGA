# Account Dashboard Casa DDD API - Test Cases

**Generated Date:** 2026-07-20T09:44:53.000Z
**Total Test Cases:** 44

---

## Table of Contents

1. [CASA_GETMANAGEDEBITCARD_-001 - GET /casa/v1/external/manage/debit-card](#casa_getmanagedebitcard_-001)
2. [CASA_GETMANAGEDEBITCARD_-008 - GET /casa/v1/external/manage/debit-card](#casa_getmanagedebitcard_-008)
3. [CASA_GETMANAGEDEBITCARD_-002 - GET /casa/v1/external/manage/debit-card](#casa_getmanagedebitcard_-002)
4. [CASA_GETMANAGEDEBITCARD_-003 - GET /casa/v1/external/manage/debit-card](#casa_getmanagedebitcard_-003)
5. [CASA_GETMANAGEDEBITCARD_-004 - GET /casa/v1/external/manage/debit-card](#casa_getmanagedebitcard_-004)
6. [CASA_GETMANAGEDEBITCARD_-010 - GET /casa/v1/external/manage/debit-card](#casa_getmanagedebitcard_-010)
7. [CASA_GETAUTOSWEEP_-001 - GET /casa/v1/external/auto-sweep](#casa_getautosweep_-001)
8. [CASA_GETAUTOSWEEP_-008 - GET /casa/v1/external/auto-sweep](#casa_getautosweep_-008)
9. [CASA_GETAUTOSWEEP_-002 - GET /casa/v1/external/auto-sweep](#casa_getautosweep_-002)
10. [CASA_GETAUTOSWEEP_-003 - GET /casa/v1/external/auto-sweep](#casa_getautosweep_-003)
11. [CASA_GETAUTOSWEEP_-004 - GET /casa/v1/external/auto-sweep](#casa_getautosweep_-004)
12. [CASA_GETAUTOSWEEP_-010 - GET /casa/v1/external/auto-sweep](#casa_getautosweep_-010)
13. [CASA_SETAUTOSWEEP_-001 - POST /casa/v1/external/auto-sweep](#casa_setautosweep_-001)
14. [CASA_SETAUTOSWEEP_-002 - POST /casa/v1/external/auto-sweep](#casa_setautosweep_-002)
15. [CASA_SETAUTOSWEEP_-003 - POST /casa/v1/external/auto-sweep](#casa_setautosweep_-003)
16. [CASA_SETAUTOSWEEP_-004 - POST /casa/v1/external/auto-sweep](#casa_setautosweep_-004)
17. [CASA_SETAUTOSWEEP_-006 - POST /casa/v1/external/auto-sweep](#casa_setautosweep_-006)
18. [CASA_SETAUTOSWEEP_-007 - POST /casa/v1/external/auto-sweep](#casa_setautosweep_-007)
19. [CASA_SETAUTOSWEEP_-009 - POST /casa/v1/external/auto-sweep](#casa_setautosweep_-009)
20. [CASA_SETAUTOSWEEP_-005 - POST /casa/v1/external/auto-sweep](#casa_setautosweep_-005)
21. [CASA_SETLINKEDCARD_-001 - POST /casa/v1/external/linked-card](#casa_setlinkedcard_-001)
22. [CASA_SETLINKEDCARD_-002 - POST /casa/v1/external/linked-card](#casa_setlinkedcard_-002)
23. [CASA_SETLINKEDCARD_-003 - POST /casa/v1/external/linked-card](#casa_setlinkedcard_-003)
24. [CASA_SETLINKEDCARD_-004 - POST /casa/v1/external/linked-card](#casa_setlinkedcard_-004)
25. [CASA_SETLINKEDCARD_-006 - POST /casa/v1/external/linked-card](#casa_setlinkedcard_-006)
26. [CASA_SETLINKEDCARD_-007 - POST /casa/v1/external/linked-card](#casa_setlinkedcard_-007)
27. [CASA_SETLINKEDCARD_-009 - POST /casa/v1/external/linked-card](#casa_setlinkedcard_-009)
28. [CASA_SETLINKEDCARD_-005 - POST /casa/v1/external/linked-card](#casa_setlinkedcard_-005)
29. [CASA_BLOCKACCOUNTS_-001 - POST /casa/v1/external/accounts/block](#casa_blockaccounts_-001)
30. [CASA_BLOCKACCOUNTS_-002 - POST /casa/v1/external/accounts/block](#casa_blockaccounts_-002)
31. [CASA_BLOCKACCOUNTS_-003 - POST /casa/v1/external/accounts/block](#casa_blockaccounts_-003)
32. [CASA_BLOCKACCOUNTS_-004 - POST /casa/v1/external/accounts/block](#casa_blockaccounts_-004)
33. [CASA_BLOCKACCOUNTS_-006 - POST /casa/v1/external/accounts/block](#casa_blockaccounts_-006)
34. [CASA_BLOCKACCOUNTS_-007 - POST /casa/v1/external/accounts/block](#casa_blockaccounts_-007)
35. [CASA_BLOCKACCOUNTS_-009 - POST /casa/v1/external/accounts/block](#casa_blockaccounts_-009)
36. [CASA_BLOCKACCOUNTS_-005 - POST /casa/v1/external/accounts/block](#casa_blockaccounts_-005)
37. [CASA_REACTIVATEACCOUNT_-001 - POST /casa/v1/external/accounts/reactivate](#casa_reactivateaccount_-001)
38. [CASA_REACTIVATEACCOUNT_-002 - POST /casa/v1/external/accounts/reactivate](#casa_reactivateaccount_-002)
39. [CASA_REACTIVATEACCOUNT_-003 - POST /casa/v1/external/accounts/reactivate](#casa_reactivateaccount_-003)
40. [CASA_REACTIVATEACCOUNT_-004 - POST /casa/v1/external/accounts/reactivate](#casa_reactivateaccount_-004)
41. [CASA_REACTIVATEACCOUNT_-006 - POST /casa/v1/external/accounts/reactivate](#casa_reactivateaccount_-006)
42. [CASA_REACTIVATEACCOUNT_-007 - POST /casa/v1/external/accounts/reactivate](#casa_reactivateaccount_-007)
43. [CASA_REACTIVATEACCOUNT_-009 - POST /casa/v1/external/accounts/reactivate](#casa_reactivateaccount_-009)
44. [CASA_REACTIVATEACCOUNT_-005 - POST /casa/v1/external/accounts/reactivate](#casa_reactivateaccount_-005)

---

## 1. CASA_GETMANAGEDEBITCARD_-001 - GET /casa/v1/external/manage/debit-card {#casa_getmanagedebitcard_-001}

**Feature:** Casa Management
**Description:** getManageDebitCard - Successful API call with valid parameters
**Priority:** P1
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `get`
- `positive`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Successful API call with valid parameters

### Test Objective
Verify getManageDebitCard handles successful api call with valid parameters

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/casa/v1/external/manage/debit-card` |
| Headers | 6 required |
| Request Body | None |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Test Steps
1. Prepare GET request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/manage/debit-card
4. Verify response status code is 200
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `200`
**Description:** Request processed successfully

### Business Validation
- Verify user has permission to view debit card details
- Verify card status is active or valid
- Verify response contains PAN last 4 digits only

### Test Type
Positive

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 2. CASA_GETMANAGEDEBITCARD_-008 - GET /casa/v1/external/manage/debit-card {#casa_getmanagedebitcard_-008}

**Feature:** Casa Management
**Description:** getManageDebitCard - Valid request with no matching data (GET methods)
**Priority:** P3
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `get`
- `positive`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Valid request with no matching data (GET methods)

### Test Objective
Verify getManageDebitCard handles valid request with no matching data (get methods)

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/casa/v1/external/manage/debit-card` |
| Headers | 6 required |
| Request Body | None |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Test Steps
1. Prepare GET request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/manage/debit-card
4. Verify response status code is 200
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `200`
**Description:** Empty response array returned

### Business Validation
- Verify user has permission to view debit card details
- Verify card status is active or valid
- Verify response contains PAN last 4 digits only

### Test Type
Positive

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 3. CASA_GETMANAGEDEBITCARD_-002 - GET /casa/v1/external/manage/debit-card {#casa_getmanagedebitcard_-002}

**Feature:** Casa Management
**Description:** getManageDebitCard - Missing authorization header
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `get`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Test environment is accessible

### Test Scenario
Missing authorization header

### Test Objective
Verify getManageDebitCard handles missing authorization header

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/casa/v1/external/manage/debit-card` |
| Headers | 2 required |
| Request Body | None |

### Request Headers
- content-type: application/json
- env: UAT

### Test Steps
1. Prepare request without authorization header
2. Send request to endpoint: /casa/v1/external/manage/debit-card
3. Verify response status code is 401
4. Verify error message indicates missing authorization

### Expected Response
**Status Code:** `401`
**Description:** Unauthorized - Missing or invalid authorization header

### Business Validation
- Verify user has permission to view debit card details
- Verify card status is active or valid
- Verify response contains PAN last 4 digits only

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 4. CASA_GETMANAGEDEBITCARD_-003 - GET /casa/v1/external/manage/debit-card {#casa_getmanagedebitcard_-003}

**Feature:** Casa Management
**Description:** getManageDebitCard - Invalid authorization token
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `get`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Invalid authorization token

### Test Objective
Verify getManageDebitCard handles invalid authorization token

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/casa/v1/external/manage/debit-card` |
| Headers | 6 required |
| Request Body | None |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Test Steps
1. Prepare request with invalid bearer token
2. Send request to endpoint: /casa/v1/external/manage/debit-card
3. Verify response status code is 401
4. Verify error message indicates invalid token

### Expected Response
**Status Code:** `401`
**Description:** Unauthorized - Invalid token signature

### Business Validation
- Verify user has permission to view debit card details
- Verify card status is active or valid
- Verify response contains PAN last 4 digits only

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 5. CASA_GETMANAGEDEBITCARD_-004 - GET /casa/v1/external/manage/debit-card {#casa_getmanagedebitcard_-004}

**Feature:** Casa Management
**Description:** getManageDebitCard - Missing required client-id header
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `get`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Missing required client-id header

### Test Objective
Verify getManageDebitCard handles missing required client-id header

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/casa/v1/external/manage/debit-card` |
| Headers | 6 required |
| Request Body | None |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Test Steps
1. Prepare GET request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/manage/debit-card
4. Verify response status code is 400
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Missing client-id header

### Business Validation
- Verify user has permission to view debit card details
- Verify card status is active or valid
- Verify response contains PAN last 4 digits only

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 6. CASA_GETMANAGEDEBITCARD_-010 - GET /casa/v1/external/manage/debit-card {#casa_getmanagedebitcard_-010}

**Feature:** Casa Management
**Description:** getManageDebitCard - Null values in optional fields
**Priority:** P3
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `get`
- `positive`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Null values in optional fields

### Test Objective
Verify getManageDebitCard handles null values in optional fields

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/casa/v1/external/manage/debit-card` |
| Headers | 6 required |
| Request Body | None |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Test Steps
1. Prepare GET request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/manage/debit-card
4. Verify response status code is 200
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `200`
**Description:** Request accepted with null optional fields

### Business Validation
- Verify user has permission to view debit card details
- Verify card status is active or valid
- Verify response contains PAN last 4 digits only

### Test Type
Positive

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 7. CASA_GETAUTOSWEEP_-001 - GET /casa/v1/external/auto-sweep {#casa_getautosweep_-001}

**Feature:** Casa Management
**Description:** getAutoSweep - Successful API call with valid parameters
**Priority:** P1
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `get`
- `positive`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Successful API call with valid parameters

### Test Objective
Verify getAutoSweep handles successful api call with valid parameters

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/casa/v1/external/auto-sweep` |
| Headers | 6 required |
| Request Body | None |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Test Steps
1. Prepare GET request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/auto-sweep
4. Verify response status code is 200
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `200`
**Description:** Request processed successfully

### Business Validation
- Verify account exists and belongs to user
- Verify auto-sweep settings are correctly retrieved
- Verify sweep frequency is valid (DAILY/WEEKLY/MONTHLY)

### Test Type
Positive

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 8. CASA_GETAUTOSWEEP_-008 - GET /casa/v1/external/auto-sweep {#casa_getautosweep_-008}

**Feature:** Casa Management
**Description:** getAutoSweep - Valid request with no matching data (GET methods)
**Priority:** P3
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `get`
- `positive`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Valid request with no matching data (GET methods)

### Test Objective
Verify getAutoSweep handles valid request with no matching data (get methods)

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/casa/v1/external/auto-sweep` |
| Headers | 6 required |
| Request Body | None |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Test Steps
1. Prepare GET request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/auto-sweep
4. Verify response status code is 200
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `200`
**Description:** Empty response array returned

### Business Validation
- Verify account exists and belongs to user
- Verify auto-sweep settings are correctly retrieved
- Verify sweep frequency is valid (DAILY/WEEKLY/MONTHLY)

### Test Type
Positive

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 9. CASA_GETAUTOSWEEP_-002 - GET /casa/v1/external/auto-sweep {#casa_getautosweep_-002}

**Feature:** Casa Management
**Description:** getAutoSweep - Missing authorization header
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `get`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Test environment is accessible

### Test Scenario
Missing authorization header

### Test Objective
Verify getAutoSweep handles missing authorization header

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/casa/v1/external/auto-sweep` |
| Headers | 2 required |
| Request Body | None |

### Request Headers
- content-type: application/json
- env: UAT

### Test Steps
1. Prepare request without authorization header
2. Send request to endpoint: /casa/v1/external/auto-sweep
3. Verify response status code is 401
4. Verify error message indicates missing authorization

### Expected Response
**Status Code:** `401`
**Description:** Unauthorized - Missing or invalid authorization header

### Business Validation
- Verify account exists and belongs to user
- Verify auto-sweep settings are correctly retrieved
- Verify sweep frequency is valid (DAILY/WEEKLY/MONTHLY)

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 10. CASA_GETAUTOSWEEP_-003 - GET /casa/v1/external/auto-sweep {#casa_getautosweep_-003}

**Feature:** Casa Management
**Description:** getAutoSweep - Invalid authorization token
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `get`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Invalid authorization token

### Test Objective
Verify getAutoSweep handles invalid authorization token

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/casa/v1/external/auto-sweep` |
| Headers | 6 required |
| Request Body | None |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Test Steps
1. Prepare request with invalid bearer token
2. Send request to endpoint: /casa/v1/external/auto-sweep
3. Verify response status code is 401
4. Verify error message indicates invalid token

### Expected Response
**Status Code:** `401`
**Description:** Unauthorized - Invalid token signature

### Business Validation
- Verify account exists and belongs to user
- Verify auto-sweep settings are correctly retrieved
- Verify sweep frequency is valid (DAILY/WEEKLY/MONTHLY)

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 11. CASA_GETAUTOSWEEP_-004 - GET /casa/v1/external/auto-sweep {#casa_getautosweep_-004}

**Feature:** Casa Management
**Description:** getAutoSweep - Missing required client-id header
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `get`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Missing required client-id header

### Test Objective
Verify getAutoSweep handles missing required client-id header

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/casa/v1/external/auto-sweep` |
| Headers | 6 required |
| Request Body | None |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Test Steps
1. Prepare GET request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/auto-sweep
4. Verify response status code is 400
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Missing client-id header

### Business Validation
- Verify account exists and belongs to user
- Verify auto-sweep settings are correctly retrieved
- Verify sweep frequency is valid (DAILY/WEEKLY/MONTHLY)

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 12. CASA_GETAUTOSWEEP_-010 - GET /casa/v1/external/auto-sweep {#casa_getautosweep_-010}

**Feature:** Casa Management
**Description:** getAutoSweep - Null values in optional fields
**Priority:** P3
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `get`
- `positive`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Null values in optional fields

### Test Objective
Verify getAutoSweep handles null values in optional fields

### Request Details
| Property | Value |
|----------|-------|
| Method | GET |
| Endpoint | `/casa/v1/external/auto-sweep` |
| Headers | 6 required |
| Request Body | None |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Test Steps
1. Prepare GET request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/auto-sweep
4. Verify response status code is 200
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `200`
**Description:** Request accepted with null optional fields

### Business Validation
- Verify account exists and belongs to user
- Verify auto-sweep settings are correctly retrieved
- Verify sweep frequency is valid (DAILY/WEEKLY/MONTHLY)

### Test Type
Positive

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 13. CASA_SETAUTOSWEEP_-001 - POST /casa/v1/external/auto-sweep {#casa_setautosweep_-001}

**Feature:** Casa Management
**Description:** setAutoSweep - Successful API call with valid parameters
**Priority:** P1
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `positive`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Successful API call with valid parameters

### Test Objective
Verify setAutoSweep handles successful api call with valid parameters

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/auto-sweep` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "autoSweepEnabled": true,
  "sweepAmount": 1000.0,
  "sweepFrequency": "DAILY"
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/auto-sweep
4. Verify response status code is 200
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `200`
**Description:** Request processed successfully

### Business Validation
- Verify auto-sweep amount is within acceptable range
- Verify sweep frequency is valid
- Verify account has sufficient funds for sweep operation

### Test Type
Positive

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 14. CASA_SETAUTOSWEEP_-002 - POST /casa/v1/external/auto-sweep {#casa_setautosweep_-002}

**Feature:** Casa Management
**Description:** setAutoSweep - Missing authorization header
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Test environment is accessible

### Test Scenario
Missing authorization header

### Test Objective
Verify setAutoSweep handles missing authorization header

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/auto-sweep` |
| Headers | 2 required |
| Request Body | JSON |

### Request Headers
- content-type: application/json
- env: UAT

### Request Body
```json
{
  "accountNumber": "1234567890",
  "autoSweepEnabled": true,
  "sweepAmount": 1000.0,
  "sweepFrequency": "DAILY"
}
```

### Test Steps
1. Prepare request without authorization header
2. Send request to endpoint: /casa/v1/external/auto-sweep
3. Verify response status code is 401
4. Verify error message indicates missing authorization

### Expected Response
**Status Code:** `401`
**Description:** Unauthorized - Missing or invalid authorization header

### Business Validation
- Verify auto-sweep amount is within acceptable range
- Verify sweep frequency is valid
- Verify account has sufficient funds for sweep operation

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 15. CASA_SETAUTOSWEEP_-003 - POST /casa/v1/external/auto-sweep {#casa_setautosweep_-003}

**Feature:** Casa Management
**Description:** setAutoSweep - Invalid authorization token
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Invalid authorization token

### Test Objective
Verify setAutoSweep handles invalid authorization token

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/auto-sweep` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "autoSweepEnabled": true,
  "sweepAmount": 1000.0,
  "sweepFrequency": "DAILY"
}
```

### Test Steps
1. Prepare request with invalid bearer token
2. Send request to endpoint: /casa/v1/external/auto-sweep
3. Verify response status code is 401
4. Verify error message indicates invalid token

### Expected Response
**Status Code:** `401`
**Description:** Unauthorized - Invalid token signature

### Business Validation
- Verify auto-sweep amount is within acceptable range
- Verify sweep frequency is valid
- Verify account has sufficient funds for sweep operation

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 16. CASA_SETAUTOSWEEP_-004 - POST /casa/v1/external/auto-sweep {#casa_setautosweep_-004}

**Feature:** Casa Management
**Description:** setAutoSweep - Missing required client-id header
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Missing required client-id header

### Test Objective
Verify setAutoSweep handles missing required client-id header

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/auto-sweep` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "autoSweepEnabled": true,
  "sweepAmount": 1000.0,
  "sweepFrequency": "DAILY"
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/auto-sweep
4. Verify response status code is 400
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Missing client-id header

### Business Validation
- Verify auto-sweep amount is within acceptable range
- Verify sweep frequency is valid
- Verify account has sufficient funds for sweep operation

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 17. CASA_SETAUTOSWEEP_-006 - POST /casa/v1/external/auto-sweep {#casa_setautosweep_-006}

**Feature:** Casa Management
**Description:** setAutoSweep - Missing required request body (for POST methods)
**Priority:** P3
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Missing required request body (for POST methods)

### Test Objective
Verify setAutoSweep handles missing required request body (for post methods)

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/auto-sweep` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": null,
  "autoSweepEnabled": true,
  "sweepAmount": 1000.0,
  "sweepFrequency": "DAILY"
}
```

### Test Steps
1. Prepare POST request without body
2. Send request to endpoint: /casa/v1/external/auto-sweep
3. Verify response status code is 400
4. Verify error message indicates missing required parameters

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Missing required parameters

### Business Validation
- Verify auto-sweep amount is within acceptable range
- Verify sweep frequency is valid
- Verify account has sufficient funds for sweep operation

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 18. CASA_SETAUTOSWEEP_-007 - POST /casa/v1/external/auto-sweep {#casa_setautosweep_-007}

**Feature:** Casa Management
**Description:** setAutoSweep - Invalid data type in request parameters
**Priority:** P3
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Invalid data type in request parameters

### Test Objective
Verify setAutoSweep handles invalid data type in request parameters

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/auto-sweep` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "autoSweepEnabled": "yes",
  "sweepAmount": 1000.0,
  "sweepFrequency": "DAILY"
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/auto-sweep
4. Verify response status code is 400
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Invalid parameter data type

### Business Validation
- Verify auto-sweep amount is within acceptable range
- Verify sweep frequency is valid
- Verify account has sufficient funds for sweep operation

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 19. CASA_SETAUTOSWEEP_-009 - POST /casa/v1/external/auto-sweep {#casa_setautosweep_-009}

**Feature:** Casa Management
**Description:** setAutoSweep - Boundary value testing - maximum allowed values
**Priority:** P3
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Boundary value testing - maximum allowed values

### Test Objective
Verify setAutoSweep handles boundary value testing - maximum allowed values

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/auto-sweep` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "autoSweepEnabled": true,
  "sweepAmount": 999999999.99,
  "sweepFrequency": "DAILY"
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/auto-sweep
4. Verify response status code is 400
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Value exceeds maximum allowed

### Business Validation
- Verify auto-sweep amount is within acceptable range
- Verify sweep frequency is valid
- Verify account has sufficient funds for sweep operation

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 20. CASA_SETAUTOSWEEP_-005 - POST /casa/v1/external/auto-sweep {#casa_setautosweep_-005}

**Feature:** Casa Management
**Description:** setAutoSweep - Invalid Content-Type header (for POST methods)
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Invalid Content-Type header (for POST methods)

### Test Objective
Verify setAutoSweep handles invalid content-type header (for post methods)

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/auto-sweep` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "autoSweepEnabled": true,
  "sweepAmount": 1000.0,
  "sweepFrequency": "DAILY"
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/auto-sweep
4. Verify response status code is 415
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `415`
**Description:** Unsupported Media Type

### Business Validation
- Verify auto-sweep amount is within acceptable range
- Verify sweep frequency is valid
- Verify account has sufficient funds for sweep operation

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 21. CASA_SETLINKEDCARD_-001 - POST /casa/v1/external/linked-card {#casa_setlinkedcard_-001}

**Feature:** Casa Management
**Description:** setLinkedCard - Successful API call with valid parameters
**Priority:** P1
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `positive`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Successful API call with valid parameters

### Test Objective
Verify setLinkedCard handles successful api call with valid parameters

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/linked-card` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "cardNumber": "4532XXXXXXXX1234",
  "cardType": "DEBIT",
  "isPrimary": true,
  "linkedCardName": "My Primary Card"
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/linked-card
4. Verify response status code is 200
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `200`
**Description:** Request processed successfully

### Business Validation
- Verify card number format is valid
- Verify card belongs to customer
- Verify only one primary card is linked per account
- Verify card status is active

### Test Type
Positive

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 22. CASA_SETLINKEDCARD_-002 - POST /casa/v1/external/linked-card {#casa_setlinkedcard_-002}

**Feature:** Casa Management
**Description:** setLinkedCard - Missing authorization header
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Test environment is accessible

### Test Scenario
Missing authorization header

### Test Objective
Verify setLinkedCard handles missing authorization header

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/linked-card` |
| Headers | 2 required |
| Request Body | JSON |

### Request Headers
- content-type: application/json
- env: UAT

### Request Body
```json
{
  "accountNumber": "1234567890",
  "cardNumber": "4532XXXXXXXX1234",
  "cardType": "DEBIT",
  "isPrimary": true,
  "linkedCardName": "My Primary Card"
}
```

### Test Steps
1. Prepare request without authorization header
2. Send request to endpoint: /casa/v1/external/linked-card
3. Verify response status code is 401
4. Verify error message indicates missing authorization

### Expected Response
**Status Code:** `401`
**Description:** Unauthorized - Missing or invalid authorization header

### Business Validation
- Verify card number format is valid
- Verify card belongs to customer
- Verify only one primary card is linked per account
- Verify card status is active

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 23. CASA_SETLINKEDCARD_-003 - POST /casa/v1/external/linked-card {#casa_setlinkedcard_-003}

**Feature:** Casa Management
**Description:** setLinkedCard - Invalid authorization token
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Invalid authorization token

### Test Objective
Verify setLinkedCard handles invalid authorization token

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/linked-card` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "cardNumber": "4532XXXXXXXX1234",
  "cardType": "DEBIT",
  "isPrimary": true,
  "linkedCardName": "My Primary Card"
}
```

### Test Steps
1. Prepare request with invalid bearer token
2. Send request to endpoint: /casa/v1/external/linked-card
3. Verify response status code is 401
4. Verify error message indicates invalid token

### Expected Response
**Status Code:** `401`
**Description:** Unauthorized - Invalid token signature

### Business Validation
- Verify card number format is valid
- Verify card belongs to customer
- Verify only one primary card is linked per account
- Verify card status is active

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 24. CASA_SETLINKEDCARD_-004 - POST /casa/v1/external/linked-card {#casa_setlinkedcard_-004}

**Feature:** Casa Management
**Description:** setLinkedCard - Missing required client-id header
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Missing required client-id header

### Test Objective
Verify setLinkedCard handles missing required client-id header

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/linked-card` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "cardNumber": "4532XXXXXXXX1234",
  "cardType": "DEBIT",
  "isPrimary": true,
  "linkedCardName": "My Primary Card"
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/linked-card
4. Verify response status code is 400
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Missing client-id header

### Business Validation
- Verify card number format is valid
- Verify card belongs to customer
- Verify only one primary card is linked per account
- Verify card status is active

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 25. CASA_SETLINKEDCARD_-006 - POST /casa/v1/external/linked-card {#casa_setlinkedcard_-006}

**Feature:** Casa Management
**Description:** setLinkedCard - Missing required request body (for POST methods)
**Priority:** P3
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Missing required request body (for POST methods)

### Test Objective
Verify setLinkedCard handles missing required request body (for post methods)

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/linked-card` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": null,
  "cardNumber": "4532XXXXXXXX1234",
  "cardType": "DEBIT",
  "isPrimary": true,
  "linkedCardName": "My Primary Card"
}
```

### Test Steps
1. Prepare POST request without body
2. Send request to endpoint: /casa/v1/external/linked-card
3. Verify response status code is 400
4. Verify error message indicates missing required parameters

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Missing required parameters

### Business Validation
- Verify card number format is valid
- Verify card belongs to customer
- Verify only one primary card is linked per account
- Verify card status is active

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 26. CASA_SETLINKEDCARD_-007 - POST /casa/v1/external/linked-card {#casa_setlinkedcard_-007}

**Feature:** Casa Management
**Description:** setLinkedCard - Invalid data type in request parameters
**Priority:** P3
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Invalid data type in request parameters

### Test Objective
Verify setLinkedCard handles invalid data type in request parameters

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/linked-card` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "cardNumber": 4532,
  "cardType": "DEBIT",
  "isPrimary": "true",
  "linkedCardName": "My Primary Card"
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/linked-card
4. Verify response status code is 400
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Invalid parameter data type

### Business Validation
- Verify card number format is valid
- Verify card belongs to customer
- Verify only one primary card is linked per account
- Verify card status is active

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 27. CASA_SETLINKEDCARD_-009 - POST /casa/v1/external/linked-card {#casa_setlinkedcard_-009}

**Feature:** Casa Management
**Description:** setLinkedCard - Boundary value testing - maximum allowed values
**Priority:** P3
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Boundary value testing - maximum allowed values

### Test Objective
Verify setLinkedCard handles boundary value testing - maximum allowed values

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/linked-card` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "cardNumber": "4532XXXXXXXX1234",
  "cardType": "DEBIT",
  "isPrimary": true,
  "linkedCardName": "My Primary Card"
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/linked-card
4. Verify response status code is 400
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Value exceeds maximum allowed

### Business Validation
- Verify card number format is valid
- Verify card belongs to customer
- Verify only one primary card is linked per account
- Verify card status is active

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 28. CASA_SETLINKEDCARD_-005 - POST /casa/v1/external/linked-card {#casa_setlinkedcard_-005}

**Feature:** Casa Management
**Description:** setLinkedCard - Invalid Content-Type header (for POST methods)
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Invalid Content-Type header (for POST methods)

### Test Objective
Verify setLinkedCard handles invalid content-type header (for post methods)

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/linked-card` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "cardNumber": "4532XXXXXXXX1234",
  "cardType": "DEBIT",
  "isPrimary": true,
  "linkedCardName": "My Primary Card"
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/linked-card
4. Verify response status code is 415
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `415`
**Description:** Unsupported Media Type

### Business Validation
- Verify card number format is valid
- Verify card belongs to customer
- Verify only one primary card is linked per account
- Verify card status is active

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 29. CASA_BLOCKACCOUNTS_-001 - POST /casa/v1/external/accounts/block {#casa_blockaccounts_-001}

**Feature:** Casa Management
**Description:** blockAccounts - Successful API call with valid parameters
**Priority:** P0
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `positive`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Successful API call with valid parameters

### Test Objective
Verify blockAccounts handles successful api call with valid parameters

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/accounts/block` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumbers": [
    "1234567890"
  ],
  "blockReason": "LOST_CARD",
  "blockDurationDays": 30
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/accounts/block
4. Verify response status code is 200
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `200`
**Description:** Request processed successfully

### Business Validation
- Verify block reason is valid
- Verify account can be blocked (not already blocked)
- Verify user has authorization to block account
- Verify blocking does not affect linked transactions

### Test Type
Positive

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 30. CASA_BLOCKACCOUNTS_-002 - POST /casa/v1/external/accounts/block {#casa_blockaccounts_-002}

**Feature:** Casa Management
**Description:** blockAccounts - Missing authorization header
**Priority:** P1
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Test environment is accessible

### Test Scenario
Missing authorization header

### Test Objective
Verify blockAccounts handles missing authorization header

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/accounts/block` |
| Headers | 2 required |
| Request Body | JSON |

### Request Headers
- content-type: application/json
- env: UAT

### Request Body
```json
{
  "accountNumbers": [
    "1234567890"
  ],
  "blockReason": "LOST_CARD",
  "blockDurationDays": 30
}
```

### Test Steps
1. Prepare request without authorization header
2. Send request to endpoint: /casa/v1/external/accounts/block
3. Verify response status code is 401
4. Verify error message indicates missing authorization

### Expected Response
**Status Code:** `401`
**Description:** Unauthorized - Missing or invalid authorization header

### Business Validation
- Verify block reason is valid
- Verify account can be blocked (not already blocked)
- Verify user has authorization to block account
- Verify blocking does not affect linked transactions

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 31. CASA_BLOCKACCOUNTS_-003 - POST /casa/v1/external/accounts/block {#casa_blockaccounts_-003}

**Feature:** Casa Management
**Description:** blockAccounts - Invalid authorization token
**Priority:** P1
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Invalid authorization token

### Test Objective
Verify blockAccounts handles invalid authorization token

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/accounts/block` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumbers": [
    "1234567890"
  ],
  "blockReason": "LOST_CARD",
  "blockDurationDays": 30
}
```

### Test Steps
1. Prepare request with invalid bearer token
2. Send request to endpoint: /casa/v1/external/accounts/block
3. Verify response status code is 401
4. Verify error message indicates invalid token

### Expected Response
**Status Code:** `401`
**Description:** Unauthorized - Invalid token signature

### Business Validation
- Verify block reason is valid
- Verify account can be blocked (not already blocked)
- Verify user has authorization to block account
- Verify blocking does not affect linked transactions

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 32. CASA_BLOCKACCOUNTS_-004 - POST /casa/v1/external/accounts/block {#casa_blockaccounts_-004}

**Feature:** Casa Management
**Description:** blockAccounts - Missing required client-id header
**Priority:** P1
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Missing required client-id header

### Test Objective
Verify blockAccounts handles missing required client-id header

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/accounts/block` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumbers": [
    "1234567890"
  ],
  "blockReason": "LOST_CARD",
  "blockDurationDays": 30
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/accounts/block
4. Verify response status code is 400
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Missing client-id header

### Business Validation
- Verify block reason is valid
- Verify account can be blocked (not already blocked)
- Verify user has authorization to block account
- Verify blocking does not affect linked transactions

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 33. CASA_BLOCKACCOUNTS_-006 - POST /casa/v1/external/accounts/block {#casa_blockaccounts_-006}

**Feature:** Casa Management
**Description:** blockAccounts - Missing required request body (for POST methods)
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Missing required request body (for POST methods)

### Test Objective
Verify blockAccounts handles missing required request body (for post methods)

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/accounts/block` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumbers": null,
  "blockReason": "LOST_CARD",
  "blockDurationDays": 30
}
```

### Test Steps
1. Prepare POST request without body
2. Send request to endpoint: /casa/v1/external/accounts/block
3. Verify response status code is 400
4. Verify error message indicates missing required parameters

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Missing required parameters

### Business Validation
- Verify block reason is valid
- Verify account can be blocked (not already blocked)
- Verify user has authorization to block account
- Verify blocking does not affect linked transactions

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 34. CASA_BLOCKACCOUNTS_-007 - POST /casa/v1/external/accounts/block {#casa_blockaccounts_-007}

**Feature:** Casa Management
**Description:** blockAccounts - Invalid data type in request parameters
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Invalid data type in request parameters

### Test Objective
Verify blockAccounts handles invalid data type in request parameters

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/accounts/block` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumbers": [
    "1234567890"
  ],
  "blockReason": "LOST_CARD",
  "blockDurationDays": 30
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/accounts/block
4. Verify response status code is 400
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Invalid parameter data type

### Business Validation
- Verify block reason is valid
- Verify account can be blocked (not already blocked)
- Verify user has authorization to block account
- Verify blocking does not affect linked transactions

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 35. CASA_BLOCKACCOUNTS_-009 - POST /casa/v1/external/accounts/block {#casa_blockaccounts_-009}

**Feature:** Casa Management
**Description:** blockAccounts - Boundary value testing - maximum allowed values
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Boundary value testing - maximum allowed values

### Test Objective
Verify blockAccounts handles boundary value testing - maximum allowed values

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/accounts/block` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumbers": [
    "1234567890"
  ],
  "blockReason": "LOST_CARD",
  "blockDurationDays": 30
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/accounts/block
4. Verify response status code is 400
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Value exceeds maximum allowed

### Business Validation
- Verify block reason is valid
- Verify account can be blocked (not already blocked)
- Verify user has authorization to block account
- Verify blocking does not affect linked transactions

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 36. CASA_BLOCKACCOUNTS_-005 - POST /casa/v1/external/accounts/block {#casa_blockaccounts_-005}

**Feature:** Casa Management
**Description:** blockAccounts - Invalid Content-Type header (for POST methods)
**Priority:** P1
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Invalid Content-Type header (for POST methods)

### Test Objective
Verify blockAccounts handles invalid content-type header (for post methods)

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/accounts/block` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumbers": [
    "1234567890"
  ],
  "blockReason": "LOST_CARD",
  "blockDurationDays": 30
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/accounts/block
4. Verify response status code is 415
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `415`
**Description:** Unsupported Media Type

### Business Validation
- Verify block reason is valid
- Verify account can be blocked (not already blocked)
- Verify user has authorization to block account
- Verify blocking does not affect linked transactions

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 37. CASA_REACTIVATEACCOUNT_-001 - POST /casa/v1/external/accounts/reactivate {#casa_reactivateaccount_-001}

**Feature:** Casa Management
**Description:** reactivateAccount - Successful API call with valid parameters
**Priority:** P0
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `positive`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Successful API call with valid parameters

### Test Objective
Verify reactivateAccount handles successful api call with valid parameters

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/accounts/reactivate` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "verificationCode": "123456",
  "reactivationReason": "FOUND_CARD"
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/accounts/reactivate
4. Verify response status code is 200
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `200`
**Description:** Request processed successfully

### Business Validation
- Verify account is in blocked state
- Verify verification code is correct
- Verify reactivation reason is valid
- Verify user has authorization to reactivate

### Test Type
Positive

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 38. CASA_REACTIVATEACCOUNT_-002 - POST /casa/v1/external/accounts/reactivate {#casa_reactivateaccount_-002}

**Feature:** Casa Management
**Description:** reactivateAccount - Missing authorization header
**Priority:** P1
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Test environment is accessible

### Test Scenario
Missing authorization header

### Test Objective
Verify reactivateAccount handles missing authorization header

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/accounts/reactivate` |
| Headers | 2 required |
| Request Body | JSON |

### Request Headers
- content-type: application/json
- env: UAT

### Request Body
```json
{
  "accountNumber": "1234567890",
  "verificationCode": "123456",
  "reactivationReason": "FOUND_CARD"
}
```

### Test Steps
1. Prepare request without authorization header
2. Send request to endpoint: /casa/v1/external/accounts/reactivate
3. Verify response status code is 401
4. Verify error message indicates missing authorization

### Expected Response
**Status Code:** `401`
**Description:** Unauthorized - Missing or invalid authorization header

### Business Validation
- Verify account is in blocked state
- Verify verification code is correct
- Verify reactivation reason is valid
- Verify user has authorization to reactivate

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 39. CASA_REACTIVATEACCOUNT_-003 - POST /casa/v1/external/accounts/reactivate {#casa_reactivateaccount_-003}

**Feature:** Casa Management
**Description:** reactivateAccount - Invalid authorization token
**Priority:** P1
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Invalid authorization token

### Test Objective
Verify reactivateAccount handles invalid authorization token

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/accounts/reactivate` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "verificationCode": "123456",
  "reactivationReason": "FOUND_CARD"
}
```

### Test Steps
1. Prepare request with invalid bearer token
2. Send request to endpoint: /casa/v1/external/accounts/reactivate
3. Verify response status code is 401
4. Verify error message indicates invalid token

### Expected Response
**Status Code:** `401`
**Description:** Unauthorized - Invalid token signature

### Business Validation
- Verify account is in blocked state
- Verify verification code is correct
- Verify reactivation reason is valid
- Verify user has authorization to reactivate

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 40. CASA_REACTIVATEACCOUNT_-004 - POST /casa/v1/external/accounts/reactivate {#casa_reactivateaccount_-004}

**Feature:** Casa Management
**Description:** reactivateAccount - Missing required client-id header
**Priority:** P1
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Missing required client-id header

### Test Objective
Verify reactivateAccount handles missing required client-id header

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/accounts/reactivate` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "verificationCode": "123456",
  "reactivationReason": "FOUND_CARD"
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/accounts/reactivate
4. Verify response status code is 400
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Missing client-id header

### Business Validation
- Verify account is in blocked state
- Verify verification code is correct
- Verify reactivation reason is valid
- Verify user has authorization to reactivate

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 41. CASA_REACTIVATEACCOUNT_-006 - POST /casa/v1/external/accounts/reactivate {#casa_reactivateaccount_-006}

**Feature:** Casa Management
**Description:** reactivateAccount - Missing required request body (for POST methods)
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Missing required request body (for POST methods)

### Test Objective
Verify reactivateAccount handles missing required request body (for post methods)

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/accounts/reactivate` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": null,
  "verificationCode": "123456",
  "reactivationReason": "FOUND_CARD"
}
```

### Test Steps
1. Prepare POST request without body
2. Send request to endpoint: /casa/v1/external/accounts/reactivate
3. Verify response status code is 400
4. Verify error message indicates missing required parameters

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Missing required parameters

### Business Validation
- Verify account is in blocked state
- Verify verification code is correct
- Verify reactivation reason is valid
- Verify user has authorization to reactivate

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 42. CASA_REACTIVATEACCOUNT_-007 - POST /casa/v1/external/accounts/reactivate {#casa_reactivateaccount_-007}

**Feature:** Casa Management
**Description:** reactivateAccount - Invalid data type in request parameters
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Invalid data type in request parameters

### Test Objective
Verify reactivateAccount handles invalid data type in request parameters

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/accounts/reactivate` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "verificationCode": 123456,
  "reactivationReason": "FOUND_CARD"
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/accounts/reactivate
4. Verify response status code is 400
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Invalid parameter data type

### Business Validation
- Verify account is in blocked state
- Verify verification code is correct
- Verify reactivation reason is valid
- Verify user has authorization to reactivate

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 43. CASA_REACTIVATEACCOUNT_-009 - POST /casa/v1/external/accounts/reactivate {#casa_reactivateaccount_-009}

**Feature:** Casa Management
**Description:** reactivateAccount - Boundary value testing - maximum allowed values
**Priority:** P2
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Boundary value testing - maximum allowed values

### Test Objective
Verify reactivateAccount handles boundary value testing - maximum allowed values

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/accounts/reactivate` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "verificationCode": "123456",
  "reactivationReason": "FOUND_CARD"
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/accounts/reactivate
4. Verify response status code is 400
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `400`
**Description:** Bad Request - Value exceeds maximum allowed

### Business Validation
- Verify account is in blocked state
- Verify verification code is correct
- Verify reactivation reason is valid
- Verify user has authorization to reactivate

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

## 44. CASA_REACTIVATEACCOUNT_-005 - POST /casa/v1/external/accounts/reactivate {#casa_reactivateaccount_-005}

**Feature:** Casa Management
**Description:** reactivateAccount - Invalid Content-Type header (for POST methods)
**Priority:** P1
**Source Worksheet:** Casa_API_Specification
**Generated Date:** 2026-07-20

### Tags
- `post`
- `negative`

### Environment
- SIT
- UAT

### Authentication
Bearer Token

### Preconditions
- Service endpoint is reachable
- Authentication credentials are available

### Test Scenario
Invalid Content-Type header (for POST methods)

### Test Objective
Verify reactivateAccount handles invalid content-type header (for post methods)

### Request Details
| Property | Value |
|----------|-------|
| Method | POST |
| Endpoint | `/casa/v1/external/accounts/reactivate` |
| Headers | 6 required |
| Request Body | JSON |

### Request Headers
- authorization: Bearer {token}
- client-id: mobile-banking
- content-type: application/json
- env: UAT
- x-request-id: {uuid}
- user-agent: MaybankMobileApp/v1.0

### Request Body
```json
{
  "accountNumber": "1234567890",
  "verificationCode": "123456",
  "reactivationReason": "FOUND_CARD"
}
```

### Test Steps
1. Prepare POST request with valid parameters
2. Add required headers (authorization, client-id, content-type)
3. Send request to endpoint: /casa/v1/external/accounts/reactivate
4. Verify response status code is 415
5. Verify response body matches expected schema
6. Verify business logic validation rules are applied

### Expected Response
**Status Code:** `415`
**Description:** Unsupported Media Type

### Business Validation
- Verify account is in blocked state
- Verify verification code is correct
- Verify reactivation reason is valid
- Verify user has authorization to reactivate

### Test Type
Negative

### Cleanup
- Verify no side effects or orphaned data remain
- Reset test data if necessary for subsequent test runs

---

