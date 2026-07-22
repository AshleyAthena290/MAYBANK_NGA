#!/usr/bin/env python3
"""Debug script to examine DDD sheet structure"""

import openpyxl

wb = openpyxl.load_workbook(r'input\api\DEP_App_Dashboard_DDD_API_Design_v1.xlsx', data_only=True)

# Sample a few sheets to understand structure
sample_sheets = ['init', 'getMenu', 'getUserHeader', 'getQuickActions']

for sheet_name in sample_sheets:
    print("=" * 100)
    print(f"SHEET: {sheet_name}")
    print("=" * 100)
    
    ws = wb[sheet_name]
    
    for i, row in enumerate(ws.iter_rows(values_only=True), 1):
        if i <= 25:
            # Only print non-empty rows
            if any(row):
                print(f"Row {i:2d}: {row}")
    
    print()
