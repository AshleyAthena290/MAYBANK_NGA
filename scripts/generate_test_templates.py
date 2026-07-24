import json
import csv
from typing import List, Dict

# Load the extracted endpoints
with open(r'artifacts\api_endpoints_summary.json', encoding='utf-8') as f:
    endpoints = json.load(f)

# Create test case templates
test_cases = []

for endpoint_name, endpoint in endpoints.items():
    service_name = endpoint.get('Service', 'Unknown')
    method = endpoint.get('Method', 'Unknown')
    url = endpoint.get('URL', 'Unknown')
    
    # Get mandatory fields
    mandatory_headers = [h['Name'] for h in endpoint.get('HTTPHeaders', []) if h.get('Mandatory') == 'Y']
    mandatory_body = [p['Name'] for p in endpoint.get('HTTPBody', []) if p.get('Mandatory') == 'Y']
    mandatory_params = [p['Name'] for p in endpoint.get('RequestParameters', []) if p.get('Mandatory') == 'Y']
    errors = endpoint.get('ErrorResponses', [])
    
    # Test Case 1: Happy Path - Successful Request
    test_cases.append({
        'Endpoint': service_name,
        'Sheet': endpoint_name,
        'HTTP_Method': method,
        'URL': url,
        'Test_Case_ID': f'{service_name.replace(" ", "_")}_TC001',
        'Test_Name': f'{service_name} - Happy Path (Valid Request)',
        'Description': f'Verify successful response when {service_name} is called with valid mandatory parameters',
        'Preconditions': 'User is authenticated; Valid authentication token available',
        'Test_Steps': 'Send HTTP ' + method + ' request to ' + url + ' with all mandatory headers and body parameters',
        'Expected_Result': 'HTTP 200 OK response with valid response structure',
        'Test_Type': 'Positive',
        'Priority': 'High',
        'Mandatory_Headers': ', '.join(mandatory_headers) if mandatory_headers else 'None',
        'Mandatory_Body': ', '.join(mandatory_body) if mandatory_body else 'None',
        'Mandatory_Params': ', '.join(mandatory_params) if mandatory_params else 'None'
    })
    
    # Test Case 2: Missing Mandatory Header
    if mandatory_headers:
        for header in mandatory_headers[:2]:  # Test first 2 mandatory headers
            test_cases.append({
                'Endpoint': service_name,
                'Sheet': endpoint_name,
                'HTTP_Method': method,
                'URL': url,
                'Test_Case_ID': f'{service_name.replace(" ", "_")}_TC002_{header}',
                'Test_Name': f'{service_name} - Missing Mandatory Header ({header})',
                'Description': f'Verify error response when mandatory header "{header}" is missing',
                'Preconditions': 'User is authenticated; Valid authentication token available',
                'Test_Steps': f'Send HTTP {method} request to {url} without the "{header}" header',
                'Expected_Result': 'HTTP 400/401 error response indicating missing header',
                'Test_Type': 'Negative',
                'Priority': 'High',
                'Mandatory_Headers': ', '.join(h for h in mandatory_headers if h != header),
                'Mandatory_Body': ', '.join(mandatory_body) if mandatory_body else 'None',
                'Mandatory_Params': ', '.join(mandatory_params) if mandatory_params else 'None'
            })
    
    # Test Case 3: Missing Mandatory Body Parameter
    if mandatory_body:
        for param in mandatory_body[:2]:  # Test first 2 mandatory body params
            test_cases.append({
                'Endpoint': service_name,
                'Sheet': endpoint_name,
                'HTTP_Method': method,
                'URL': url,
                'Test_Case_ID': f'{service_name.replace(" ", "_")}_TC003_{param}',
                'Test_Name': f'{service_name} - Missing Mandatory Body Parameter ({param})',
                'Description': f'Verify error response when mandatory body parameter "{param}" is missing',
                'Preconditions': 'User is authenticated; Valid authentication token available',
                'Test_Steps': f'Send HTTP {method} request to {url} without the "{param}" in request body',
                'Expected_Result': 'HTTP 400 Bad Request response indicating missing parameter',
                'Test_Type': 'Negative',
                'Priority': 'High',
                'Mandatory_Headers': ', '.join(mandatory_headers) if mandatory_headers else 'None',
                'Mandatory_Body': ', '.join(b for b in mandatory_body if b != param),
                'Mandatory_Params': ', '.join(mandatory_params) if mandatory_params else 'None'
            })
    
    # Test Case 4: Invalid Data Type
    if endpoint.get('HTTPBody'):
        test_cases.append({
            'Endpoint': service_name,
            'Sheet': endpoint_name,
            'HTTP_Method': method,
            'URL': url,
            'Test_Case_ID': f'{service_name.replace(" ", "_")}_TC004',
            'Test_Name': f'{service_name} - Invalid Data Type in Body',
            'Description': 'Verify error response when body parameter has incorrect data type',
            'Preconditions': 'User is authenticated; Valid authentication token available',
            'Test_Steps': f'Send HTTP {method} request with string value for a numeric field',
            'Expected_Result': 'HTTP 400 Bad Request response indicating data type mismatch',
            'Test_Type': 'Negative',
            'Priority': 'High',
            'Mandatory_Headers': ', '.join(mandatory_headers) if mandatory_headers else 'None',
            'Mandatory_Body': ', '.join(mandatory_body) if mandatory_body else 'None',
            'Mandatory_Params': ', '.join(mandatory_params) if mandatory_params else 'None'
        })
    
    # Test Case 5: Authentication Failure
    test_cases.append({
        'Endpoint': service_name,
        'Sheet': endpoint_name,
        'HTTP_Method': method,
        'URL': url,
        'Test_Case_ID': f'{service_name.replace(" ", "_")}_TC005',
        'Test_Name': f'{service_name} - Invalid Authentication Token',
        'Description': 'Verify error response when authentication token is invalid or expired',
        'Preconditions': 'None',
        'Test_Steps': f'Send HTTP {method} request with invalid/expired authorization header',
        'Expected_Result': 'HTTP 401 Unauthorized response',
        'Test_Type': 'Negative',
        'Priority': 'High',
        'Mandatory_Headers': 'authorization (invalid)', 
        'Mandatory_Body': ', '.join(mandatory_body) if mandatory_body else 'None',
        'Mandatory_Params': ', '.join(mandatory_params) if mandatory_params else 'None'
    })
    
    # Test Cases for each error response
    for i, error in enumerate(errors[:3], start=6):  # First 3 error scenarios
        test_cases.append({
            'Endpoint': service_name,
            'Sheet': endpoint_name,
            'HTTP_Method': method,
            'URL': url,
            'Test_Case_ID': f'{service_name.replace(" ", "_")}_TC{i:03d}',
            'Test_Name': f'{service_name} - Error Code {error.get("Error Code")}',
            'Description': f'Verify error response for: {error.get("Error Message", "Unknown error")}',
            'Preconditions': 'User is authenticated',
            'Test_Steps': f'Send HTTP {method} request that triggers error code {error.get("Error Code")}',
            'Expected_Result': f'HTTP response with error code {error.get("Error Code")}: {error.get("Error Message")}',
            'Test_Type': 'Negative',
            'Priority': 'Medium',
            'Mandatory_Headers': ', '.join(mandatory_headers) if mandatory_headers else 'None',
            'Mandatory_Body': ', '.join(mandatory_body) if mandatory_body else 'None',
            'Mandatory_Params': ', '.join(mandatory_params) if mandatory_params else 'None'
        })

# Write to CSV
output_file = r'artifacts\TEST_CASE_TEMPLATES.csv'
if test_cases:
    keys = test_cases[0].keys()
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=keys)
        writer.writeheader()
        writer.writerows(test_cases)

print(f"Test case templates generated: {output_file}")
print(f"Total test cases created: {len(test_cases)}")
print(f"\nTest Case Distribution:")
positive = sum(1 for tc in test_cases if tc['Test_Type'] == 'Positive')
negative = sum(1 for tc in test_cases if tc['Test_Type'] == 'Negative')
print(f"  - Positive: {positive}")
print(f"  - Negative: {negative}")

