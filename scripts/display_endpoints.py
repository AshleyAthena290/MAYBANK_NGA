import json

# Load the extracted data
with open(r'artifacts\api_endpoints_summary.json', encoding='utf-8') as f:
    data = json.load(f)

# Filter to only API endpoints with actual data
valid_endpoints = {k: v for k, v in data.items() if v.get('Method') != 'Unknown'}

print("=" * 100)
print("ECLIPSE ACCOUNT DASHBOARD API - COMPLETE SPECIFICATIONS")
print("=" * 100)
print(f"\nTotal API Endpoints: {len(valid_endpoints)}\n")

for endpoint_name, spec in valid_endpoints.items():
    print(f"\n{'─' * 100}")
    print(f"📌 {spec['Service'].upper()}")
    print(f"{'─' * 100}")
    
    print(f"\n🔹 REQUEST DETAILS")
    print(f"   HTTP Method:  {spec['Method']}")
    print(f"   URL:          {spec['URL']}")
    print(f"   Message Type: {spec['MessageType']}")
    
    # HTTP Headers
    if spec.get('HTTPHeaders'):
        print(f"\n🔹 HTTP HEADERS ({len(spec['HTTPHeaders'])} required)")
        for header in spec['HTTPHeaders']:
            mandatory = "✓ REQUIRED" if header['Mandatory'] == 'Y' else "✗ OPTIONAL"
            print(f"   • {header['Name']:<20} | {header['Type']:<10} | {mandatory:<12} | {header['Sample Value']}")
    
    # Request Body Parameters
    if spec.get('HTTPBody'):
        print(f"\n🔹 REQUEST BODY ({len(spec['HTTPBody'])} parameters)")
        for param in spec['HTTPBody']:
            mandatory = "✓ REQUIRED" if param['Mandatory'] == 'Y' else "✗ OPTIONAL"
            print(f"   • {param['Name']:<25} | Type: {param['Type']:<15} | {mandatory}")
            if param.get('Description') and param['Description'] != '-':
                print(f"     └─ {param['Description']}")
    
    # Request Parameters/Path Variables
    if spec.get('RequestParameters'):
        print(f"\n🔹 REQUEST PARAMETERS ({len(spec['RequestParameters'])} parameters)")
        for param in spec['RequestParameters']:
            mandatory = "✓ REQUIRED" if param['Mandatory'] == 'Y' else "✗ OPTIONAL"
            print(f"   • {param['Name']:<25} | Type: {param['Type']:<15} | {mandatory}")
            if param.get('Sample Value') and param['Sample Value'] != '-':
                print(f"     Sample: {param['Sample Value']}")
    
    if spec.get('PathVariables'):
        print(f"\n🔹 PATH VARIABLES ({len(spec['PathVariables'])} variables)")
        for var in spec['PathVariables']:
            mandatory = "✓ REQUIRED" if var['Mandatory'] == 'Y' else "✗ OPTIONAL"
            print(f"   • {var['Name']:<25} | Type: {var['Type']:<15} | {mandatory}")
    
    # Response Fields
    if spec.get('Response'):
        print(f"\n🔹 RESPONSE FIELDS ({len(spec['Response'])} fields)")
        for field in spec['Response'][:10]:
            print(f"   • {field['Name']:<25} | Type: {field['Type']}")
        if len(spec['Response']) > 10:
            print(f"   ... and {len(spec['Response']) - 10} more fields")
    
    # Error Responses
    if spec.get('ErrorResponses'):
        print(f"\n🔹 ERROR RESPONSES ({len(spec['ErrorResponses'])} codes)")
        for error in spec['ErrorResponses']:
            print(f"   • {error['Error Code']:<10} | {error['Error Message']}")

print(f"\n\n{'=' * 100}")
print("SUMMARY STATISTICS")
print(f"{'=' * 100}")
print(f"\nBy HTTP Method:")
methods = {}
for spec in valid_endpoints.values():
    method = spec['Method']
    methods[method] = methods.get(method, 0) + 1
for method, count in sorted(methods.items()):
    print(f"  • {method}: {count} endpoints")

total_headers = sum(len(s.get('HTTPHeaders', [])) for s in valid_endpoints.values())
total_body = sum(len(s.get('HTTPBody', [])) for s in valid_endpoints.values())
total_params = sum(len(s.get('RequestParameters', [])) for s in valid_endpoints.values())
total_response = sum(len(s.get('Response', [])) for s in valid_endpoints.values())

print(f"\nTotal Parameters:")
print(f"  • HTTP Headers: {total_headers}")
print(f"  • Body Parameters: {total_body}")
print(f"  • Request Parameters: {total_params}")
print(f"  • Response Fields: {total_response}")

