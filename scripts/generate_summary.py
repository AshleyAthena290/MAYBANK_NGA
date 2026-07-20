import json
from datetime import datetime

# Load the extracted endpoints
with open(r'artifacts\api_endpoints_summary.json', encoding='utf-8') as f:
    endpoints = json.load(f)

# Create quick reference guide
report = []

report.append("# API Extraction Analysis - Quick Reference Guide\n\n")
report.append(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
report.append("**Source File:** ECLIPSE_Account Dashboard_Casa_DDD_API_Design_v1_Workshop.xlsx\n\n")

# Executive Summary
report.append("## Executive Summary\n\n")
report.append(f"- **Total API Endpoints:** {len(endpoints)}\n")

methods = {}
for endpoint in endpoints.values():
    method = endpoint.get('Method', 'Unknown')
    methods[method] = methods.get(method, 0) + 1

report.append(f"- **HTTP Methods Used:**\n")
for method in sorted(methods.keys()):
    report.append(f"  - {method}: {methods[method]} endpoints\n")

report.append("\n")

# Statistics
total_headers = sum(len(e.get('HTTPHeaders', [])) for e in endpoints.values())
total_body_params = sum(len(e.get('HTTPBody', [])) for e in endpoints.values())
total_req_params = sum(len(e.get('RequestParameters', [])) for e in endpoints.values())
total_response_fields = sum(len(e.get('Response', [])) for e in endpoints.values())
total_errors = sum(len(e.get('ErrorResponses', [])) for e in endpoints.values())

report.append("## Detailed Statistics\n\n")
report.append(f"| Metric | Count |\n")
report.append(f"|--------|-------|\n")
report.append(f"| Total API Endpoints | {len(endpoints)} |\n")
report.append(f"| HTTP Headers (All Endpoints) | {total_headers} |\n")
report.append(f"| Body Parameters | {total_body_params} |\n")
report.append(f"| Request Parameters | {total_req_params} |\n")
report.append(f"| Response Fields | {total_response_fields} |\n")
report.append(f"| Error Response Codes | {total_errors} |\n")
report.append(f"| Average Errors per Endpoint | {total_errors / len(endpoints):.1f} |\n\n")

# Common Requirements
report.append("## Common API Requirements\n\n")

# Find common headers
all_headers = {}
for endpoint in endpoints.values():
    for header in endpoint.get('HTTPHeaders', []):
        name = header['Name']
        all_headers[name] = all_headers.get(name, 0) + 1

mandatory_in_all = [h for h, count in all_headers.items() if count == len(endpoints)]

report.append("### Universal Headers (Required for ALL Endpoints)\n\n")
if mandatory_in_all:
    report.append("These headers are required for **every** API endpoint:\n\n")
    for header in sorted(mandatory_in_all):
        report.append(f"- `{header}` (Bearer token, Client ID, etc.)\n")
else:
    report.append("No universal headers required for all endpoints.\n")

report.append("\n")

# Most Common Parameters
report.append("### Common Mandatory Parameters\n\n")
param_frequency = {}
for endpoint in endpoints.values():
    for param in endpoint.get('HTTPBody', []):
        if param.get('Mandatory') == 'Y':
            name = param['Name']
            param_frequency[name] = param_frequency.get(name, 0) + 1

if param_frequency:
    report.append("**Body Parameters appearing in multiple endpoints:**\n\n")
    for param, count in sorted(param_frequency.items(), key=lambda x: x[1], reverse=True)[:10]:
        report.append(f"- `{param}` ({count} endpoints)\n")
else:
    report.append("No common body parameters across endpoints.\n")

report.append("\n")

# API Endpoint Index
report.append("## Endpoint Index\n\n")

for i, (endpoint_name, endpoint) in enumerate(endpoints.items(), 1):
    service = endpoint.get('Service', 'Unknown')
    method = endpoint.get('Method', 'Unknown')
    headers_count = len(endpoint.get('HTTPHeaders', []))
    body_count = len(endpoint.get('HTTPBody', []))
    params_count = len(endpoint.get('RequestParameters', []))
    response_count = len(endpoint.get('Response', []))
    error_count = len(endpoint.get('ErrorResponses', []))
    
    report.append(f"### {i}. {service}\n\n")
    report.append(f"| Property | Details |\n")
    report.append(f"|----------|----------|\n")
    report.append(f"| **Method** | `{method}` |\n")
    report.append(f"| **URL** | `{endpoint.get('URL', 'Unknown')}` |\n")
    report.append(f"| **HTTP Headers** | {headers_count} |\n")
    report.append(f"| **Body Parameters** | {body_count} |\n")
    report.append(f"| **Request Params** | {params_count} |\n")
    report.append(f"| **Response Fields** | {response_count} |\n")
    report.append(f"| **Error Codes** | {error_count} |\n")
    report.append(f"| **Sheet Name** | `{endpoint_name}` |\n")
    report.append("\n")

# Test Case Generation Guide
report.append("---\n\n")
report.append("## Test Case Generation Guide\n\n")

report.append("### Recommended Test Coverage by Endpoint\n\n")
report.append("For **each endpoint**, generate at least these test cases:\n\n")
report.append("1. **Happy Path Tests** (Positive)\n")
report.append("   - Valid request with all mandatory parameters → HTTP 200 OK\n\n")

report.append("2. **Mandatory Field Validation** (Negative)\n")
report.append("   - Missing each mandatory header → HTTP 401/400\n")
report.append("   - Missing each mandatory body parameter → HTTP 400\n\n")

report.append("3. **Data Type Validation** (Negative)\n")
report.append("   - Invalid data types in body → HTTP 400\n")
report.append("   - Out of range values → HTTP 400\n\n")

report.append("4. **Authentication Tests** (Negative)\n")
report.append("   - Invalid/expired token → HTTP 401\n")
report.append("   - Missing authorization header → HTTP 401\n\n")

report.append("5. **Error Scenario Tests** (Negative)\n")
report.append(f"   - Cover all {total_errors} defined error codes\n\n")

report.append("### Total Test Cases (Auto-Generated)\n\n")
report.append("A CSV file `TEST_CASE_TEMPLATES.csv` has been generated with:\n\n")
report.append("- **21 Happy Path tests** (1 per endpoint)\n")
report.append("- **21 Negative tests** (Authentication, validation, error scenarios)\n")
report.append("- **Total: 42 test cases** ready for customization\n\n")

# Usage Instructions
report.append("---\n\n")
report.append("## Generated Files & Usage\n\n")

report.append("### 1. `api_endpoints_summary.json`\n")
report.append("- **Format:** Structured JSON containing all extracted API specifications\n")
report.append("- **Use:** Integration with automation tools, API testing frameworks\n")
report.append("- **Content:** Complete endpoint definitions with all parameters, headers, responses\n\n")

report.append("### 2. `API_SPECIFICATIONS_COMPLETE.md`\n")
report.append("- **Format:** Markdown documentation\n")
report.append("- **Use:** Reference documentation for development and testing teams\n")
report.append("- **Content:** Detailed tables for each endpoint with all specifications\n\n")

report.append("### 3. `TEST_CASE_TEMPLATES.csv`\n")
report.append("- **Format:** CSV spreadsheet\n")
report.append("- **Use:** Import into test management tools (TestRail, Jira, etc.)\n")
report.append("- **Content:** 42 pre-designed test cases ready for customization\n\n")

report.append("### 4. `API_EXTRACTION_SUMMARY.md` (This file)\n")
report.append("- **Format:** Markdown\n")
report.append("- **Use:** Quick reference and overview\n")
report.append("- **Content:** Summary statistics and analysis\n\n")

# API URLs Pattern
report.append("---\n\n")
report.append("## API Base URLs\n\n")

base_urls = set()
for endpoint in endpoints.values():
    url = endpoint.get('URL', '')
    if url and '{' in url:
        # Extract base URL pattern
        base_url = url.split('}')[0] + '}'
        base_urls.add(base_url)

if base_urls:
    report.append("The APIs use the following base URL pattern:\n\n")
    for url in sorted(base_urls):
        report.append(f"- `{url}`\n\n")
        report.append("  **Variables:**\n")
        report.append("  - `{Eclipse-IP}`: Eclipse server IP address\n")
        report.append("  - `{EclipsePort}`: Eclipse server port\n")

# Authentication Requirements
report.append("\n---\n\n")
report.append("## Authentication & Security\n\n")

auth_headers = set()
for endpoint in endpoints.values():
    for header in endpoint.get('HTTPHeaders', []):
        if 'authorization' in header['Name'].lower() or 'api' in header['Name'].lower():
            auth_headers.add(header['Name'])

report.append("### Required Security Headers\n\n")
for header in sorted(auth_headers):
    report.append(f"- `{header}`\n")

report.append("\n### Authentication Flow\n\n")
report.append("1. Obtain Bearer token from authentication service\n")
report.append("2. Include token in `authorization` header as: `Bearer <ACCESS_TOKEN>`\n")
report.append("3. Include `client-id` for channel identification\n")
report.append("4. Include `env` to specify environment (UAT, PROD, etc.)\n")

# Write summary
output_file = r'artifacts\API_EXTRACTION_SUMMARY.md'
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(''.join(report))

print(f"Summary report generated: {output_file}")

