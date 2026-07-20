import json
import json
from pathlib import Path

# Load the extracted endpoints
with open(r'artifacts\api_endpoints_summary.json', encoding='utf-8') as f:
    endpoints = json.load(f)

# Create comprehensive markdown report
report = []
report.append("# ECLIPSE Account Dashboard API - Comprehensive Specifications\n")
report.append("## Document: ECLIPSE_Account Dashboard_Casa_DDD_API_Design_v1_Workshop.xlsx\n")
report.append(f"**Total Endpoints: {len(endpoints)}**\n\n")

# Table of contents
report.append("## Table of Contents\n")
for i, endpoint_name in enumerate(endpoints.keys(), 1):
    endpoint = endpoints[endpoint_name]
    service_name = endpoint.get('Service', 'Unknown')
    anchor = endpoint_name.replace(' ', '-').replace('.', '').lower()
    report.append(f"{i}. [{service_name}](#{anchor})\n")

report.append("\n---\n\n")

# Detailed specifications for each endpoint
for endpoint_name, endpoint in endpoints.items():
    anchor = endpoint_name.replace(' ', '-').replace('.', '').lower()
    report.append(f"## {endpoint.get('Service', 'Unknown')}\n\n")
    report.append(f"**Sheet Name:** `{endpoint_name}`\n\n")
    
    report.append("### Request Details\n\n")
    
    # Basic info
    report.append(f"| Property | Value |\n")
    report.append(f"|----------|-------|\n")
    report.append(f"| **HTTP Method** | `{endpoint.get('Method', 'Unknown')}` |\n")
    report.append(f"| **URL** | `{endpoint.get('URL', 'Unknown')}` |\n")
    report.append(f"| **Message Type** | `{endpoint.get('MessageType', 'JSON')}` |\n\n")
    
    # HTTP Headers
    headers = endpoint.get('HTTPHeaders', [])
    if headers:
        report.append("#### HTTP Headers\n\n")
        report.append("| Name | Type | Length | Mandatory | Sample Value | Description |\n")
        report.append("|------|------|--------|-----------|--------------|-------------|\n")
        for header in headers:
            mandatory = "✓ Yes" if header.get('Mandatory') == 'Y' else "✗ No"
            report.append(f"| `{header.get('Name', '-')}` | {header.get('Type', '-')} | {header.get('Length', '-')} | {mandatory} | `{header.get('Sample Value', '-')}` | {header.get('Description', '-')} |\n")
        report.append("\n")
    
    # HTTP Body
    body = endpoint.get('HTTPBody', [])
    if body:
        report.append("#### HTTP Body Parameters\n\n")
        report.append("| Name | Type | Length | Mandatory | Sample Value | Description |\n")
        report.append("|------|------|--------|-----------|--------------|-------------|\n")
        for param in body:
            mandatory = "✓ Yes" if param.get('Mandatory') == 'Y' else "✗ No"
            report.append(f"| `{param.get('Name', '-')}` | {param.get('Type', '-')} | {param.get('Length', '-')} | {mandatory} | `{param.get('Sample Value', '-')}` | {param.get('Description', '-')} |\n")
        report.append("\n")
    
    # Request Parameters
    req_params = endpoint.get('RequestParameters', [])
    if req_params:
        report.append("#### Request Parameters\n\n")
        report.append("| Name | Type | Length | Mandatory | Sample Value | Description |\n")
        report.append("|------|------|--------|-----------|--------------|-------------|\n")
        for param in req_params:
            mandatory = "✓ Yes" if param.get('Mandatory') == 'Y' else "✗ No"
            report.append(f"| `{param.get('Name', '-')}` | {param.get('Type', '-')} | {param.get('Length', '-')} | {mandatory} | `{param.get('Sample Value', '-')}` | {param.get('Description', '-')} |\n")
        report.append("\n")
    
    # Response
    report.append("### Response Details\n\n")
    
    response_fields = endpoint.get('Response', [])
    if response_fields:
        report.append("#### Response Fields\n\n")
        report.append("| Name | Type | Length | Mandatory | Sample Value | Description |\n")
        report.append("|------|------|--------|-----------|--------------|-------------|\n")
        for field in response_fields:
            mandatory = "✓ Yes" if field.get('Mandatory') == 'Y' else "✗ No"
            report.append(f"| `{field.get('Name', '-')}` | {field.get('Type', '-')} | {field.get('Length', '-')} | {mandatory} | `{field.get('Sample Value', '-')}` | {field.get('Description', '-')} |\n")
        report.append("\n")
    
    # Error Responses
    errors = endpoint.get('ErrorResponses', [])
    if errors:
        report.append("#### Error Responses\n\n")
        report.append("| Error Code | Error Message | Description |\n")
        report.append("|------------|---------------|-------------|\n")
        for error in errors:
            report.append(f"| `{error.get('Error Code', '-')}` | {error.get('Error Message', '-')} | {error.get('Description', '-')} |\n")
        report.append("\n")
    
    # Business Rules section
    report.append("#### Business Rules & Validations\n\n")
    
    mandatory_headers = [h['Name'] for h in headers if h.get('Mandatory') == 'Y']
    mandatory_body = [p['Name'] for p in body if p.get('Mandatory') == 'Y']
    mandatory_params = [p['Name'] for p in req_params if p.get('Mandatory') == 'Y']
    
    if mandatory_headers:
        report.append(f"- **Mandatory Headers**: {', '.join(f'`{h}`' for h in mandatory_headers)}\n")
    if mandatory_body:
        report.append(f"- **Mandatory Body Fields**: {', '.join(f'`{b}`' for b in mandatory_body)}\n")
    if mandatory_params:
        report.append(f"- **Mandatory Parameters**: {', '.join(f'`{p}`' for p in mandatory_params)}\n")
    
    if errors:
        report.append(f"- **Possible Error Codes**: {', '.join(f'`{e['Error Code']}`' for e in errors)}\n")
    
    report.append("\n---\n\n")

# Add summary section
report.append("## API Specifications Summary\n\n")

report.append("### Endpoints by HTTP Method\n\n")
methods = {}
for endpoint_name, endpoint in endpoints.items():
    method = endpoint.get('Method', 'Unknown')
    if method not in methods:
        methods[method] = []
    methods[method].append(endpoint.get('Service', 'Unknown'))

for method in sorted(methods.keys()):
    report.append(f"**{method}**: {len(methods[method])} endpoints\n")
    for service in methods[method]:
        report.append(f"  - {service}\n")
    report.append("\n")

# Write to markdown file
output_file = r"artifacts\API_SPECIFICATIONS_COMPLETE.md"
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(''.join(report))

print(f"Markdown report generated: {output_file}")
print(f"Total endpoints documented: {len(endpoints)}")

