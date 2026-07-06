import ExcelJS from 'exceljs';

const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile('input/api/P&T_Local_Transfer_DDD_API_Spec_v1.xlsx');

console.log('Available sheets in API spec:');
workbook.worksheets.forEach((ws, idx) => {
  console.log(`${idx + 1}. ${ws.name}`);
});
