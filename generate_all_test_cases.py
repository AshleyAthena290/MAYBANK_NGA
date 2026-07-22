#!/usr/bin/env python3
"""Generate comprehensive test cases for ALL 21 APIs"""

import json
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment
from datetime import datetime
import os

# Load all APIs
with open('all_apis_complete.json', 'r') as f:
    data = json.load(f)

apis = data['apis']

print("=" * 150)
print("GENERATING TEST CASES FOR ALL APIs")
print("=" * 150)

class TestCaseGenerator:
    def __init__(self, apis):
        self.apis = apis
        self.test_cases = []
        self.tc_counter = 1
    
    def generate_all_test_cases(self):
        """Generate test cases for all APIs"""
        for api_idx, api in enumerate(self.apis, 1):
            self.generate_for_api(api, api_idx)
        return self.test_cases
    
    def generate_for_api(self, api, api_num):
        """Generate test cases for a single API"""
        
        # Get method info
        method = api['method']
        endpoint = api['url']
        service = api['service']
        
        # Number of headers
        num_headers = len(api.get('headers', []))
        num_body = len(api.get('body_params', []))
        num_query = len(api.get('query_params', []))
        num_response = len(api.get('response_fields', []))
        
        # POSITIVE TEST CASES
        # TC1: Valid request with all mandatory headers
        self.test_cases.append({
            'id': f'TC_API{api_num:02d}_{self.tc_counter:03d}',
            'api_num': api_num,
            'title': f'{service} - Valid request with all mandatory headers',
            'type': 'Positive',
            'category': 'Happy Path / Valid Request',
            'endpoint': endpoint,
            'method': method,
            'service': service,
            'preconditions': 'User is authenticated; Valid bearer token available; System is operational',
            'test_steps': f'1. Prepare {method} request to {endpoint}\n2. Include all mandatory headers with valid values\n3. Ensure Content-Type is application/json\n4. Send the API request\n5. Verify response is received within expected time',
            'input_data': f'{method} {endpoint}\nHeaders: Authorization (Bearer token), X-APP-VERSION, X-APP-PLATFORM, X-APP-OS-VERSION, X-APP-LOCALE\nBody: {"API body parameters" if method in ["POST", "PUT"] else "N/A"}',
            'expected_result': f'HTTP 200 OK; Response contains success: true; Response includes message object with code and key; Data object is populated with expected schema',
            'priority': 'High'
        })
        self.tc_counter += 1
        
        # TC2: Valid request with optional headers (if there are optional headers)
        if num_headers > 0:
            self.test_cases.append({
                'id': f'TC_API{api_num:02d}_{self.tc_counter:03d}',
                'api_num': api_num,
                'title': f'{service} - Valid request with optional headers included',
                'type': 'Positive',
                'category': 'Happy Path / Optional Fields',
                'endpoint': endpoint,
                'method': method,
                'service': service,
                'preconditions': 'User is authenticated; Valid bearer token available',
                'test_steps': f'1. Prepare {method} request to {endpoint}\n2. Include all mandatory headers\n3. Include optional headers (Accept, X-MB-API-Key, etc.)\n4. Send the API request\n5. Verify successful response',
                'input_data': f'{method} {endpoint}\nHeaders: All mandatory + optional headers with valid values',
                'expected_result': 'HTTP 200 OK; Response is processed successfully with optional headers included',
                'priority': 'Medium'
            })
            self.tc_counter += 1
        
        # NEGATIVE TEST CASES
        # TC: Missing Authorization header
        self.test_cases.append({
            'id': f'TC_API{api_num:02d}_{self.tc_counter:03d}',
            'api_num': api_num,
            'title': f'{service} - Missing Authorization header',
            'type': 'Negative',
            'category': 'Authentication / Missing Header',
            'endpoint': endpoint,
            'method': method,
            'service': service,
            'preconditions': 'N/A',
            'test_steps': f'1. Prepare {method} request to {endpoint}\n2. Omit the Authorization header\n3. Include other required headers\n4. Send the API request\n5. Verify error response',
            'input_data': f'{method} {endpoint}\nHeaders: (All except Authorization)',
            'expected_result': 'HTTP 401 Unauthorized; Response indicates missing or invalid authentication token; Error message returned',
            'priority': 'High'
        })
        self.tc_counter += 1
        
        # TC: Invalid/Expired token
        self.test_cases.append({
            'id': f'TC_API{api_num:02d}_{self.tc_counter:03d}',
            'api_num': api_num,
            'title': f'{service} - Invalid/Expired authentication token',
            'type': 'Negative',
            'category': 'Authentication / Invalid Token',
            'endpoint': endpoint,
            'method': method,
            'service': service,
            'preconditions': 'N/A',
            'test_steps': f'1. Prepare {method} request to {endpoint}\n2. Set Authorization header with expired/invalid token\n3. Include other required headers\n4. Send the API request\n5. Verify authentication failure response',
            'input_data': f'{method} {endpoint}\nHeaders: Authorization (Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwMDAwMDB9.invalid)',
            'expected_result': 'HTTP 401 Unauthorized; Response indicates invalid/expired token; Appropriate error code returned',
            'priority': 'High'
        })
        self.tc_counter += 1
        
        # TC: Invalid HTTP method
        self.test_cases.append({
            'id': f'TC_API{api_num:02d}_{self.tc_counter:03d}',
            'api_num': api_num,
            'title': f'{service} - Incorrect HTTP method',
            'type': 'Negative',
            'category': 'HTTP Protocol / Invalid Method',
            'endpoint': endpoint,
            'method': method,
            'service': service,
            'preconditions': 'N/A',
            'test_steps': f'1. Prepare request with incorrect HTTP method (e.g., POST instead of {method})\n2. Target endpoint: {endpoint}\n3. Include valid headers and body\n4. Send the request\n5. Verify method not allowed error',
            'input_data': f'{"POST" if method == "GET" else "GET"} {endpoint}\nHeaders: All required headers',
            'expected_result': 'HTTP 405 Method Not Allowed; Response indicates unsupported HTTP method',
            'priority': 'High'
        })
        self.tc_counter += 1
        
        # TC: Malformed JSON (for POST/PUT methods)
        if method in ['POST', 'PUT']:
            self.test_cases.append({
                'id': f'TC_API{api_num:02d}_{self.tc_counter:03d}',
                'api_num': api_num,
                'title': f'{service} - Malformed JSON in request body',
                'type': 'Negative',
                'category': 'Format / Malformed Payload',
                'endpoint': endpoint,
                'method': method,
                'service': service,
                'preconditions': 'N/A',
                'test_steps': f'1. Prepare {method} request to {endpoint}\n2. Send malformed JSON body (missing closing bracket, extra comma)\n3. Include valid headers\n4. Send the request\n5. Verify error response',
                'input_data': f'{method} {endpoint}\nHeaders: Valid headers\nBody: {{"key": "value", }}',
                'expected_result': 'HTTP 400 Bad Request; Response indicates malformed JSON/invalid payload; Error details provided',
                'priority': 'High'
            })
            self.tc_counter += 1
            
            # TC: Empty request body
            self.test_cases.append({
                'id': f'TC_API{api_num:02d}_{self.tc_counter:03d}',
                'api_num': api_num,
                'title': f'{service} - Empty request body',
                'type': 'Negative',
                'category': 'Format / Empty Payload',
                'endpoint': endpoint,
                'method': method,
                'service': service,
                'preconditions': 'N/A',
                'test_steps': f'1. Prepare {method} request to {endpoint}\n2. Send empty or null request body\n3. Include valid headers\n4. Send the request\n5. Verify error response',
                'input_data': f'{method} {endpoint}\nHeaders: Valid headers\nBody: (empty)',
                'expected_result': 'HTTP 400 Bad Request; Response indicates empty or invalid request body; Descriptive error message',
                'priority': 'Medium'
            })
            self.tc_counter += 1
        
        # TC: Missing mandatory query parameter (if applicable)
        if num_query > 0:
            self.test_cases.append({
                'id': f'TC_API{api_num:02d}_{self.tc_counter:03d}',
                'api_num': api_num,
                'title': f'{service} - Missing mandatory query parameter',
                'type': 'Negative',
                'category': 'Parameter Validation / Missing Field',
                'endpoint': endpoint,
                'method': method,
                'service': service,
                'preconditions': 'N/A',
                'test_steps': f'1. Prepare {method} request to {endpoint}\n2. Omit mandatory query parameters\n3. Include valid headers\n4. Send the request\n5. Verify error response',
                'input_data': f'{method} {endpoint}\nHeaders: Valid headers\nQuery: (missing required parameters)',
                'expected_result': 'HTTP 400 Bad Request; Response indicates missing required query parameter; Error message specifies missing field',
                'priority': 'High'
            })
            self.tc_counter += 1
        
        # TC: Invalid data type
        self.test_cases.append({
            'id': f'TC_API{api_num:02d}_{self.tc_counter:03d}',
            'api_num': api_num,
            'title': f'{service} - Invalid data type in request',
            'type': 'Negative',
            'category': 'Data Validation / Type Mismatch',
            'endpoint': endpoint,
            'method': method,
            'service': service,
            'preconditions': 'N/A',
            'test_steps': f'1. Prepare {method} request to {endpoint}\n2. Send parameter with incorrect data type (string instead of number, etc.)\n3. Include valid headers\n4. Send the request\n5. Verify validation error',
            'input_data': f'{method} {endpoint}\nHeaders: Valid headers\nBody/Query: Parameter with wrong data type (e.g., "abc" for numeric field)',
            'expected_result': 'HTTP 400 Bad Request; Response indicates invalid data type; Field name and expected type in error message',
            'priority': 'Medium'
        })
        self.tc_counter += 1
        
        # TC: SQL Injection attempt
        self.test_cases.append({
            'id': f'TC_API{api_num:02d}_{self.tc_counter:03d}',
            'api_num': api_num,
            'title': f'{service} - SQL Injection payload in request',
            'type': 'Negative',
            'category': 'Security / SQL Injection',
            'endpoint': endpoint,
            'method': method,
            'service': service,
            'preconditions': 'N/A',
            'test_steps': f'1. Prepare {method} request to {endpoint}\n2. Include SQL injection payload in parameter (e.g., "; DROP TABLE users; --)\n3. Send the request with valid headers\n4. Verify API safely handles input\n5. Confirm no SQL injection executed',
            'input_data': f'{method} {endpoint}\nPayload: "; DROP TABLE users; --',
            'expected_result': 'HTTP 400/200; Input is sanitized and safely handled; SQL payload is not executed; No database manipulation occurs',
            'priority': 'High'
        })
        self.tc_counter += 1
        
        # TC: XSS attempt
        self.test_cases.append({
            'id': f'TC_API{api_num:02d}_{self.tc_counter:03d}',
            'api_num': api_num,
            'title': f'{service} - XSS payload in request',
            'type': 'Negative',
            'category': 'Security / XSS Attack',
            'endpoint': endpoint,
            'method': method,
            'service': service,
            'preconditions': 'N/A',
            'test_steps': f'1. Prepare {method} request to {endpoint}\n2. Include XSS payload in parameter (e.g., <script>alert("XSS")</script>)\n3. Send the request with valid headers\n4. Verify API safely handles input\n5. Confirm script is not executed',
            'input_data': f'{method} {endpoint}\nPayload: <script>alert("XSS")</script>',
            'expected_result': 'HTTP 400/200; XSS payload is sanitized or rejected; Script is not executed; Response is safe',
            'priority': 'High'
        })
        self.tc_counter += 1
        
        # TC: Special characters handling
        self.test_cases.append({
            'id': f'TC_API{api_num:02d}_{self.tc_counter:03d}',
            'api_num': api_num,
            'title': f'{service} - Special characters in request parameter',
            'type': 'Negative',
            'category': 'Input Validation / Special Characters',
            'endpoint': endpoint,
            'method': method,
            'service': service,
            'preconditions': 'N/A',
            'test_steps': f'1. Prepare {method} request to {endpoint}\n2. Include special characters in parameter (e.g., @#$%^&*())\n3. Send the request with valid headers\n4. Verify response\n5. Check if input is properly encoded/escaped',
            'input_data': f'{method} {endpoint}\nPayload with special characters: @#$%^&*()',
            'expected_result': 'HTTP 400/200; Special characters are properly handled/encoded; Response indicates validation result',
            'priority': 'Medium'
        })
        self.tc_counter += 1
        
        # TC: Out-of-range values (boundary test)
        self.test_cases.append({
            'id': f'TC_API{api_num:02d}_{self.tc_counter:03d}',
            'api_num': api_num,
            'title': f'{service} - Out-of-range / Boundary violation',
            'type': 'Negative',
            'category': 'Boundary Testing / Range Validation',
            'endpoint': endpoint,
            'method': method,
            'service': service,
            'preconditions': 'N/A',
            'test_steps': f'1. Prepare {method} request to {endpoint}\n2. Set numeric parameter to value exceeding defined limits\n3. Include valid headers\n4. Send the request\n5. Verify validation error',
            'input_data': f'{method} {endpoint}\nPayload: Parameter value exceeds max length/range (e.g., negative for positive-only field)',
            'expected_result': 'HTTP 400 Bad Request; Response indicates value out of range; Field constraints specified in error',
            'priority': 'Medium'
        })
        self.tc_counter += 1

# Generate all test cases
generator = TestCaseGenerator(apis)
test_cases = generator.generate_all_test_cases()

print(f"\n✓ Generated {len(test_cases)} test cases for {len(apis)} APIs")
print(f"\nTest case distribution:")
positive_cases = len([tc for tc in test_cases if tc['type'] == 'Positive'])
negative_cases = len([tc for tc in test_cases if tc['type'] == 'Negative'])
print(f"  Positive: {positive_cases}")
print(f"  Negative: {negative_cases}")

# Save to JSON first
with open('all_test_cases_complete.json', 'w') as f:
    json.dump({
        'timestamp': datetime.now().isoformat(),
        'total_apis': len(apis),
        'total_test_cases': len(test_cases),
        'positive_cases': positive_cases,
        'negative_cases': negative_cases,
        'test_cases': test_cases
    }, f, indent=2)

print(f"\n✓ Test cases saved to all_test_cases_complete.json")
