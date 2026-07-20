import json

with open(r'artifacts\api_endpoints_summary.json', encoding='utf-8') as f:
    data = json.load(f)

# Show successful endpoints
successful = ['getAutoSweep', 'setAutoSweep', 'setLinkedCard', 'blockAccounts', 'reactivateAccount']

for endpoint_key in successful:
    if endpoint_key in data:
        print(f"\n{'='*80}")
        print(f"ENDPOINT: {endpoint_key}")
        print(f"{'='*80}")
        
        endpoint = data[endpoint_key]
        print(f"Service: {endpoint.get('Service')}")
        print(f"Method: {endpoint.get('Method')}")
        print(f"URL: {endpoint.get('URL')}")
        print(f"Message Type: {endpoint.get('MessageType')}")
        
        print(f"\nHTTP Headers: {len(endpoint.get('HTTPHeaders', []))} items")
        for h in endpoint.get('HTTPHeaders', [])[:3]:
            print(f"  • {h['Name']:<20} | Type: {h['Type']:<10} | Mandatory: {h['Mandatory']}")
        if len(endpoint.get('HTTPHeaders', [])) > 3:
            print(f"  ... and {len(endpoint.get('HTTPHeaders', [])) - 3} more")
        
        print(f"\nHTTP Body: {len(endpoint.get('HTTPBody', []))} items")
        for b in endpoint.get('HTTPBody', [])[:3]:
            print(f"  • {b['Name']:<20} | Type: {b['Type']}")
        if len(endpoint.get('HTTPBody', [])) > 3:
            print(f"  ... and {len(endpoint.get('HTTPBody', [])) - 3} more")
        
        print(f"\nRequest Parameters: {len(endpoint.get('RequestParameters', []))} items")
        for p in endpoint.get('RequestParameters', [])[:3]:
            print(f"  • {p['Name']:<20} | Type: {p['Type']}")
        
        print(f"\nResponse Fields: {len(endpoint.get('Response', []))} items")
        print(f"Error Responses: {len(endpoint.get('ErrorResponses', []))} items")

