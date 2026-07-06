import ExcelJS from 'exceljs';

const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile('input/FSD_Local_Transfer_v2.0@20260612.xlsx');

console.log('Available sheets:');
workbook.worksheets.forEach((ws, idx) => {
  console.log(`${idx + 1}. ${ws.name}`);
});
