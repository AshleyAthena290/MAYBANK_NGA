import openpyxl

# Get more detailed view of one API sheet structure
xlsx_path = 'input/api/P&T_Local_Transfer_DDD_API_Spec_v1.xlsx'
wb = openpyxl.load_workbook(xlsx_path)
ws = wb['GetPTMaintenanceTransferInit']

print("=== Full Sheet Structure: GetPTMaintenanceTransferInit ===\n")
for row_idx, row in enumerate(ws.iter_rows(values_only=True), 1):
    if row_idx <= 50:  # First 50 rows
        non_empty = [f"Col{i}:{v}" for i, v in enumerate(row, 1) if v]
        if non_empty:
            print(f"Row {row_idx}: {' | '.join(non_empty[:5])}")
    else:
        break

