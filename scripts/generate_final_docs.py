import json
import csv
from datetime import datetime
from pathlib import Path

# Load extracted data
with open(r'artifacts\api_endpoints_summary.json', encoding='utf-8') as f:
    all_data = json.load(f)

# Filter valid endpoints
endpoints = {k: v for k, v in all_data.items() if v.get('Method') != 'Unknown'}

# ============================================================================
# 1. CREATE COMPREHENSIVE MARKDOWN REPORT
# ============================================================================

report_lines = []
report_lines.append("# ECLIPSE Account Dashboard - Complete API Specifications\n")
report_lines.append(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
report_lines.append("**Source:** ECLIPSE_Account Dashboard_Casa_DDD_API_Design_v1_Workshop.xlsx\n\n")

# Table of Contents
report_lines.append("## Table of Contents\n\n")
for i, endpoint_name in enumerate(endpoints.keys(), 1):
    service = endpoints[endpoint_name].get('Service', 'Unknown')
    report_lines.append(f"{i}. [{service}](#{service.lower()})\n")

report_lines.append("\n---\n\n")

# Detailed endpoint specifications
for endpoint_name, spec in endpoints.items():
    service = spec.get('Service', 'Unknown')
    method = spec.get('Method', 'Unknown')
    url = spec.get('URL', 'Unknown')
    
    report_lines.append(f"## {service}\n\n")
    report_lines.append(f"### Request\n\n")
    report_lines.append(f"| Attribute | Value |\n")
    report_lines.append(f"|-----------|-------|\n")
    report_lines.append(f"| **Method** | `{method}` |\n")
    report_lines.append(f"| **URL** | `{url}` |\n")
    report_lines.append(f"| **Content-Type** | `{spec.get('MessageType', 'JSON')}` |\n\n")
    
    # HTTP Headers
    headers = spec.get('HTTPHeaders', [])
    if headers:
        report_lines.append(f"#### HTTP Headers\n\n")
        report_lines.append(f"| Header | Type | Mandatory | Sample Value | Description |\n")
        report_lines.append(f"|--------|------|-----------|--------------|-------------|\n")
        for h in headers:
            mandatory = "✓" if h.get('Mandatory') == 'Y' else "✗"
            report_lines.append(f"| `{h['Name']}` | {h['Type']} | {mandatory} | `{h['Sample Value']}` | {h['Description']} |\n")
        report_lines.append("\n")
    
    # Path Variables
    path_vars = spec.get('PathVariables', [])
    if path_vars:
        report_lines.append(f"#### Path Variables\n\n")
        report_lines.append(f"| Variable | Type | Mandatory | Description |\n")
        report_lines.append(f"|----------|------|-----------|-------------|\n")
        for v in path_vars:
            mandatory = "✓" if v.get('Mandatory') == 'Y' else "✗"
            report_lines.append(f"| `{v['Name']}` | {v['Type']} | {mandatory} | {v['Description']} |\n")
        report_lines.append("\n")
    
    # Request Body
    body = spec.get('HTTPBody', [])
    if body:
        report_lines.append(f"#### Request Body\n\n")
        report_lines.append(f"| Parameter | Type | Mandatory | Description |\n")
        report_lines.append(f"|-----------|------|-----------|-------------|\n")
        for b in body:
            mandatory = "✓" if b.get('Mandatory') == 'Y' else "✗"
            report_lines.append(f"| `{b['Name']}` | {b['Type']} | {mandatory} | {b['Description']} |\n")
        report_lines.append("\n")
    
    # Request Parameters
    req_params = spec.get('RequestParameters', [])
    if req_params:
        report_lines.append(f"#### Request Parameters\n\n")
        report_lines.append(f"| Parameter | Type | Mandatory | Sample | Description |\n")
        report_lines.append(f"|-----------|------|-----------|--------|-------------|\n")
        for p in req_params:
            mandatory = "✓" if p.get('Mandatory') == 'Y' else "✗"
            report_lines.append(f"| `{p['Name']}` | {p['Type']} | {mandatory} | {p['Sample Value']} | {p['Description']} |\n")
        report_lines.append("\n")
    
    # Response
    response = spec.get('Response', [])
    if response:
        report_lines.append(f"#### Response Structure\n\n")
        report_lines.append(f"| Field | Type | Description |\n")
        report_lines.append(f"|-------|------|-------------|\n")
        for r in response:
            report_lines.append(f"| `{r['Name']}` | {r['Type']} | {r['Description']} |\n")
        report_lines.append("\n")
    
    report_lines.append("---\n\n")

# Summary section
report_lines.append("## API Summary\n\n")
report_lines.append(f"**Total Endpoints:** {len(endpoints)}\n\n")
report_lines.append("### Endpoints by Method\n\n")

methods_map = {}
for spec in endpoints.values():
    m = spec['Method']
    if m not in methods_map:
        methods_map[m] = []
    methods_map[m].append(spec['Service'])

for method in sorted(methods_map.keys()):
    report_lines.append(f"**{method}** ({len(methods_map[method])} endpoints):\n")
    for service in sorted(methods_map[method]):
        report_lines.append(f"- {service}\n")
    report_lines.append("\n")

# Common Requirements
report_lines.append("### Common Requirements\n\n")
report_lines.append("All endpoints require the following headers:\n")
report_lines.append("- `authorization`: Bearer token for authentication\n")
report_lines.append("- `client-id`: Client identifier per channel\n")
report_lines.append("- `env`: Environment (UAT, PROD, etc.)\n\n")

# Save markdown report
md_file = r'artifacts\API_SPECIFICATIONS_FINAL.md'
with open(md_file, 'w', encoding='utf-8') as f:
    f.writelines(report_lines)

# ============================================================================
# 2. CREATE TEST CASE TEMPLATES (ADVANCED)
# ============================================================================

test_cases = []

for endpoint_name, spec in endpoints.items():
    service = spec['Service']
    method = spec['Method']
    url = spec['URL']
    
    mandatory_headers = [h['Name'] for h in spec.get('HTTPHeaders', []) if h.get('Mandatory') == 'Y']
    mandatory_body = [b['Name'] for b in spec.get('HTTPBody', []) if b.get('Mandatory') == 'Y']
    mandatory_params = [p['Name'] for p in spec.get('RequestParameters', []) if p.get('Mandatory') == 'Y']
    
    # TC-001: Happy Path
    test_cases.append({
        'Endpoint': service,
        'Test_ID': f'{service.replace(" ", "_").replace("-", "_").replace("(", "").replace(")", "")}_001_HappyPath',
        'Test_Name': f'{service} - Happy Path',
        'Type': 'Positive',
        'Priority': 'P0',
        'HTTP_Method': method,
        'Description': f'Verify successful {method} request to {service} endpoint with all mandatory parameters',
        'Preconditions': 'Valid authentication token, User has necessary permissions',
        'Test_Steps': f'1. Prepare {method} request to {url}\n2. Include all mandatory headers: {", ".join(mandatory_headers)}\n3. Include all mandatory body/parameters\n4. Send request',
        'Expected_Result': 'HTTP 200 OK response with valid response structure',
        'Mandatory_Headers': ', '.join(mandatory_headers),
        'Mandatory_Body_Params': ', '.join(mandatory_body),
        'Mandatory_Path_Params': ', '.join(mandatory_params)
    })
    
    # TC-002: Missing Authorization Header
    if 'authorization' in mandatory_headers:
        test_cases.append({
            'Endpoint': service,
            'Test_ID': f'{service.replace(" ", "_").replace("-", "_").replace("(", "").replace(")", "")}_002_MissingAuth',
            'Test_Name': f'{service} - Missing Authorization Header',
            'Type': 'Negative',
            'Priority': 'P0',
            'HTTP_Method': method,
            'Description': 'Verify error when authorization header is missing',
            'Preconditions': 'None',
            'Test_Steps': f'1. Prepare {method} request without authorization header\n2. Include other mandatory headers\n3. Send request',
            'Expected_Result': 'HTTP 401 Unauthorized response',
            'Mandatory_Headers': ', '.join([h for h in mandatory_headers if h != 'authorization']),
            'Mandatory_Body_Params': ', '.join(mandatory_body),
            'Mandatory_Path_Params': ', '.join(mandatory_params)
        })
    
    # TC-003: Invalid Authorization Token
    if 'authorization' in mandatory_headers:
        test_cases.append({
            'Endpoint': service,
            'Test_ID': f'{service.replace(" ", "_").replace("-", "_").replace("(", "").replace(")", "")}_003_InvalidToken',
            'Test_Name': f'{service} - Invalid Authorization Token',
            'Type': 'Negative',
            'Priority': 'P1',
            'HTTP_Method': method,
            'Description': 'Verify error when authorization token is invalid/expired',
            'Preconditions': 'None',
            'Test_Steps': f'1. Prepare {method} request\n2. Include authorization header with invalid token "Bearer invalid_token_12345"\n3. Send request',
            'Expected_Result': 'HTTP 401 Unauthorized response',
            'Mandatory_Headers': ', '.join(mandatory_headers),
            'Mandatory_Body_Params': ', '.join(mandatory_body),
            'Mandatory_Path_Params': ', '.join(mandatory_params)
        })
    
    # TC-004: Missing Mandatory Body Parameters
    for i, body_param in enumerate(mandatory_body[:2], 4):
        test_cases.append({
            'Endpoint': service,
            'Test_ID': f'{service.replace(" ", "_").replace("-", "_").replace("(", "").replace(")", "")}_0{i}_MissingBodyParam',
            'Test_Name': f'{service} - Missing {body_param} Parameter',
            'Type': 'Negative',
            'Priority': 'P1',
            'HTTP_Method': method,
            'Description': f'Verify error when mandatory body parameter "{body_param}" is missing',
            'Preconditions': 'Valid authentication token',
            'Test_Steps': f'1. Prepare {method} request\n2. Include all headers and parameters except "{body_param}"\n3. Send request',
            'Expected_Result': 'HTTP 400 Bad Request response indicating missing required parameter',
            'Mandatory_Headers': ', '.join(mandatory_headers),
            'Mandatory_Body_Params': ', '.join([b for b in mandatory_body if b != body_param]),
            'Mandatory_Path_Params': ', '.join(mandatory_params)
        })
    
    # TC-005+: Invalid Data Type
    if mandatory_body:
        test_cases.append({
            'Endpoint': service,
            'Test_ID': f'{service.replace(" ", "_").replace("-", "_").replace("(", "").replace(")", "")}_006_InvalidDataType',
            'Test_Name': f'{service} - Invalid Data Type',
            'Type': 'Negative',
            'Priority': 'P2',
            'HTTP_Method': method,
            'Description': 'Verify error when body parameter has invalid data type',
            'Preconditions': 'Valid authentication token',
            'Test_Steps': f'1. Prepare {method} request\n2. Include all mandatory parameters\n3. Set a numeric parameter to a string value\n4. Send request',
            'Expected_Result': 'HTTP 400 Bad Request response indicating data type mismatch',
            'Mandatory_Headers': ', '.join(mandatory_headers),
            'Mandatory_Body_Params': ', '.join(mandatory_body),
            'Mandatory_Path_Params': ', '.join(mandatory_params)
        })

# Save test cases to CSV
csv_file = r'artifacts\TEST_CASES_COMPREHENSIVE.csv'
if test_cases:
    keys = test_cases[0].keys()
    with open(csv_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=keys)
        writer.writeheader()
        writer.writerows(test_cases)

print(f"✓ API Specifications Report: {md_file}")
print(f"✓ Test Cases CSV: {csv_file}")
print(f"\nGenerated:")
print(f"  - {len(endpoints)} API endpoints documented")
print(f"  - {len(test_cases)} test cases created")

