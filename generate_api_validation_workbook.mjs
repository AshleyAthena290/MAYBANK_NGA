#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import ExcelJS from 'exceljs';
import * as yaml from 'js-yaml';

const args = process.argv.slice(2);
const valueAfter = (name) => {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : undefined;
};
const inputRoot = valueAfter('--input');
const output = valueAfter('--output');
if (!inputRoot || !output) {
  console.error('Usage: node generate_api_validation_workbook.mjs --input <yaml-root> --output <xlsx>');
  process.exit(2);
}

const headers = ['Test Case ID', 'Test Case Title', 'Test Type', 'Test Category', 'HTTP Method', 'Endpoint', 'Pre-conditions', 'Test Steps', 'Input Data', 'Expected Result', 'Priority'];
const headerFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF17365D' } };
const priorityFill = {
  High: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF4CCCC' } },
  Medium: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFF2CC' } },
  Low: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD9EAD3' } },
};
const widths = [8, 34, 18, 24, 12, 52, 38, 48, 58, 68, 12];

function text(value) {
  if (value === null || value === undefined) return '';
  if (typeof value === 'object') return JSON.stringify(value, null, 2);
  return String(value);
}
function block(value) {
  if (value === null || value === undefined || value === '' || (typeof value === 'object' && Object.keys(value).length === 0)) return '{}';
  return yaml.dump(value, { noRefs: true, sortKeys: false, lineWidth: -1 }).trim();
}
function priority(value) { return ({ P1: 'High', P2: 'Medium', P3: 'Low' })[text(value).toUpperCase()] || 'Medium'; }
function type(tags, title) {
  const set = new Set((tags || []).map((tag) => text(tag).toLowerCase()));
  const lower = title.toLowerCase();
  if (set.has('edge-case') || set.has('resilience') || lower.includes('timeout') || lower.includes('downstream')) return 'Edge/Resilience';
  if (set.has('boundary')) return 'Boundary';
  if (set.has('negative')) return 'Negative';
  return 'Positive';
}
function category(tags, title) {
  const set = new Set((tags || []).map((tag) => text(tag).toLowerCase()));
  const lower = title.toLowerCase();
  if (set.has('authentication')) return 'Authentication';
  if (set.has('security')) return 'Security';
  if (set.has('authorization') || lower.includes('role')) return 'Authorization';
  if (lower.includes('rate') || lower.includes('thrott')) return 'Rate Limiting';
  if (lower.includes('content-type') || set.has('http')) return 'HTTP Protocol';
  if (set.has('boundary')) return 'Boundary Testing';
  if (set.has('validation')) return 'Field Validation';
  if (lower.includes('duplicate') || lower.includes('timeout') || lower.includes('empty')) return 'Error Handling';
  return set.has('business') ? 'Business Rule' : 'API Contract';
}
function expected(caseData) {
  const response = caseData.response || {};
  const lines = [];
  if (response.successStatusCode !== undefined) lines.push(`HTTP status: ${response.successStatusCode}`);
  if (response.successDescription) lines.push(`Response description: ${response.successDescription}`);
  for (const assertion of caseData.assertions || []) lines.push(`Assertion: ${text(assertion)}`);
  for (const field of ['schema', 'bodySchema', 'expectedFields']) if (response[field]) lines.push(`${field}:\n${block(response[field])}`);
  if (response.errorScenarios) lines.push(`Error scenarios:\n${block(response.errorScenarios)}`);
  if (response.errorStatusCodes) lines.push(`Error status codes:\n${block(response.errorStatusCodes)}`);
  return lines.length ? lines.join('\n') : 'Assumption: The YAML does not define an expected status code or response body.';
}
function row(caseData) {
  const request = caseData.request || {};
  const title = text(caseData.title || caseData.id);
  return [
    text(caseData.id), title, type(caseData.tags, title), category(caseData.tags, title),
    text(request.method || caseData.method), text(request.url || request.endpoint || caseData.endpoint),
    block(caseData.preconditions || []),
    ['1. Prepare the pre-conditions and test data described for this scenario.', `2. Send the ${request.method || 'specified'} request to the endpoint with the listed headers, parameters, and body.`, '3. Capture the HTTP status code and response body.', '4. Compare the response with every expected result and assertion.'].join('\n'),
    block({ headers: request.headers || {}, pathParams: request.pathParams || {}, queryParams: request.queryParams || {}, body: request.body || {} }),
    expected(caseData), priority(caseData.priority),
  ];
}
function allYamlFiles(directory) {
  const result = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...allYamlFiles(full));
    else if (entry.isFile() && entry.name.endsWith('.yaml') && entry.name !== '_index.yaml') result.push(full);
  }
  return result.sort();
}
function loadInputs() {
  const grouped = new Map();
  const inventory = [];
  for (const entry of fs.readdirSync(inputRoot, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    if (!entry.isDirectory() || entry.name.toLowerCase() === 'test cases') continue;
    const cases = [];
    for (const yamlFile of allYamlFiles(path.join(inputRoot, entry.name))) {
      const data = yaml.load(fs.readFileSync(yamlFile, 'utf8')) || {};
      if (!data || typeof data !== 'object' || !data.id) continue;
      cases.push({ values: row(data), file: yamlFile, data });
    }
    if (cases.length) {
      const first = cases[0].data;
      const request = first.request || {};
      const refs = first.references || {};
      inventory.push({ api: entry.name, method: text(request.method || first.method), endpoint: text(request.url || request.endpoint || first.endpoint), sourceWorksheet: text(refs.sourceWorksheet) || 'Assumption: not present in YAML', apiSpecFile: text(refs.apiSpecFile) || 'Assumption: not present in YAML' });
      grouped.set(entry.name, cases);
    }
  }
  return { grouped, inventory };
}
function formatCaseSheet(ws, cases) {
  ws.views = [{ state: 'frozen', ySplit: 1 }];
  ws.autoFilter = { from: 'A1', to: `K${Math.max(1, cases.length + 1)}` };
  headers.forEach((header, index) => {
    const cell = ws.getCell(1, index + 1);
    cell.value = header; cell.fill = headerFill; cell.font = { bold: true, color: { argb: 'FFFFFFFF' } }; cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
  });
  cases.forEach(({ values, file, data }, rowIndex) => {
    const rowNumber = rowIndex + 2;
    values.forEach((value, columnIndex) => { ws.getCell(rowNumber, columnIndex + 1).value = value; ws.getCell(rowNumber, columnIndex + 1).alignment = { vertical: 'top', wrapText: true }; });
    ws.getCell(rowNumber, 1).note = `Source YAML: ${file}\nSource worksheet: ${text((data.references || {}).sourceWorksheet)}\nAPI spec file: ${text((data.references || {}).apiSpecFile)}`;
    ws.getCell(rowNumber, 11).fill = priorityFill[values[10]];
    ws.getRow(rowNumber).height = 92;
  });
  widths.forEach((width, index) => { ws.getColumn(index + 1).width = width; });
  ws.getRow(1).height = 34;
}
function addHeader(row, values) {
  values.forEach((value, index) => { const cell = row.getCell(index + 1); cell.value = value; cell.fill = headerFill; cell.font = { bold: true, color: { argb: 'FFFFFFFF' } }; });
}
async function main() {
  const { grouped, inventory } = loadInputs();
  if (!grouped.size) throw new Error(`No executable YAML scenarios found under ${inputRoot}`);
  const allCases = [...grouped.values()].flat();
  const counts = Object.fromEntries(['Positive', 'Negative', 'Boundary', 'Edge/Resilience'].map((key) => [key, allCases.filter((item) => item.values[2] === key).length]));
  const categories = [...new Set(allCases.map((item) => item.values[3]))].sort().map((key) => [key, allCases.filter((item) => item.values[3] === key).length]);
  const workbook = new ExcelJS.Workbook();
  const summary = workbook.addWorksheet('Summary');
  summary.getCell('A1').value = 'ECLIPSE App Dashboard API Validation Test Cases'; summary.getCell('A1').font = { bold: true, size: 16, color: { argb: 'FF17365D' } };
  summary.getCell('A3').value = 'Generated date'; summary.getCell('B3').value = new Date().toISOString();
  [['Total APIs covered', grouped.size], ['Total test cases', allCases.length], ...Object.entries(counts)].forEach(([label, value], index) => { summary.getCell(index + 5, 1).value = label; summary.getCell(index + 5, 1).font = { bold: true }; summary.getCell(index + 5, 2).value = value; summary.getCell(index + 5, 2).font = { bold: true }; });
  const categoryStart = 12; summary.getCell(categoryStart, 1).value = 'Test category breakdown'; summary.getCell(categoryStart, 1).font = { bold: true, size: 12 }; addHeader(summary.getRow(categoryStart + 1), ['Category', 'Count']);
  categories.forEach(([key, count], index) => { summary.getCell(categoryStart + 2 + index, 1).value = key; summary.getCell(categoryStart + 2 + index, 2).value = count; });
  const inventoryStart = categoryStart + categories.length + 5; summary.getCell(inventoryStart, 1).value = 'API inventory'; summary.getCell(inventoryStart, 1).font = { bold: true, size: 12 }; addHeader(summary.getRow(inventoryStart + 1), ['API folder', 'HTTP Method', 'Endpoint', 'Source worksheet', 'API spec file']);
  inventory.forEach((item, index) => { ['api', 'method', 'endpoint', 'sourceWorksheet', 'apiSpecFile'].forEach((key, column) => { summary.getCell(inventoryStart + 2 + index, column + 1).value = item[key]; summary.getCell(inventoryStart + 2 + index, column + 1).alignment = { vertical: 'top', wrapText: true }; }); });
  [28, 18, 52, 34, 42].forEach((width, index) => { summary.getColumn(index + 1).width = width; });
  summary.views = [{ state: 'frozen', ySplit: inventoryStart + 1 }];
  const validation = workbook.addWorksheet('Validation Areas'); validation.getCell('A1').value = 'KEY VALIDATION AREAS COVERED'; validation.getCell('A1').font = { bold: true, size: 14, color: { argb: 'FF17365D' } }; addHeader(validation.getRow(3), ['Area', 'Coverage']);
  const areas = ['Field validation: mandatory, optional, null, and omitted fields.', 'Authentication: missing and invalid credentials.', 'Authorization: role and permission checks where represented.', 'Business rules: assertions, duplicates, and contract behavior.', 'Data types and formats: schema, enum, date, numeric, and format assertions.', 'Boundary conditions: minimum, maximum, null, omitted, and invalid boundaries.', 'Error handling: malformed or empty requests and downstream failures.', 'Security: security-tagged authentication and invalid-input scenarios.', 'HTTP protocol: method, endpoint, content type, and status checks.', 'Rate limiting/performance: included when represented; otherwise not defined.'];
  areas.forEach((area, index) => { const [name, ...rest] = area.split(':'); validation.getCell(index + 4, 1).value = name; validation.getCell(index + 4, 2).value = rest.join(':'); validation.getCell(index + 4, 2).alignment = { wrapText: true, vertical: 'top' }; validation.getRow(index + 4).height = 34; }); validation.getColumn(1).width = 30; validation.getColumn(2).width = 110;
  for (const [api, cases] of grouped) formatCaseSheet(workbook.addWorksheet(api.slice(0, 31)), cases);
  formatCaseSheet(workbook.addWorksheet('All Test Cases'), allCases);
  fs.mkdirSync(path.dirname(output), { recursive: true }); await workbook.xlsx.writeFile(output);
  console.log(`Generated ${output} with ${grouped.size} APIs and ${allCases.length} test cases`);
}
main().catch((error) => { console.error(error.stack || error); process.exit(1); });
