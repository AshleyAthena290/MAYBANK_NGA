import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import ExcelJS from "exceljs";

export interface TestExecutionResult {
  id: string;
  filePath: string;
  method: string;
  url: string;
  statusCode: number;
  passed: boolean;
  assertionResults: AssertionResult[];
  error?: string;
}

export interface AssertionResult {
  description: string;
  passed: boolean;
  details?: string;
}

export interface ReportGeneratorOptions {
  outputDir?: string;
  timestamp?: Date;
  executionTime?: number; // in milliseconds
}

export class ReportGenerator {
  async generateReports(
    results: TestExecutionResult[],
    options?: ReportGeneratorOptions
  ): Promise<{ htmlPath: string; excelPath: string }> {
    const outputDir = options?.outputDir ?? "./artifacts/reports";
    const timestamp = options?.timestamp ?? new Date();
    const executionTime = options?.executionTime ?? 0;

    await mkdir(outputDir, { recursive: true });

    const timestampStr = timestamp.toISOString().replace(/[:.]/g, "-").slice(0, -5);
    const htmlPath = join(outputDir, `test-report-${timestampStr}.html`);
    const excelPath = join(outputDir, `test-report-${timestampStr}.xlsx`);

    const htmlContent = this.generateHtmlReport(results, timestamp, executionTime);
    const excelBuffer = await this.generateExcelReport(results, timestamp, executionTime);

    await writeFile(htmlPath, htmlContent, "utf-8");
    await writeFile(excelPath, excelBuffer);

    return { htmlPath, excelPath };
  }

  private generateHtmlReport(
    results: TestExecutionResult[],
    timestamp: Date,
    executionTime: number
  ): string {
    const passedCount = results.filter((r) => r.passed).length;
    const failedCount = results.length - passedCount;
    const passPercentage = results.length > 0 ? ((passedCount / results.length) * 100).toFixed(2) : "0.00";

    const rows = results
      .map(
        (result, idx) =>
          `<tr class="${result.passed ? "pass" : "fail"}">
        <td>${idx + 1}</td>
        <td>${this.escapeHtml(result.id)}</td>
        <td>${result.method}</td>
        <td class="url-cell">${this.escapeHtml(result.url)}</td>
        <td>${result.statusCode}</td>
        <td>${result.passed ? "✓ PASS" : "✗ FAIL"}</td>
        <td>${this.getAssertionSummary(result)}</td>
      </tr>`
      )
      .join("\n");

    const assertionDetails = results
      .filter((r) => !r.passed || r.error)
      .map(
        (result) =>
          `<div class="detail-section">
        <h4>${this.escapeHtml(result.id)}</h4>
        <p><strong>URL:</strong> ${this.escapeHtml(result.url)}</p>
        <p><strong>Status Code:</strong> ${result.statusCode}</p>
        ${
          result.error
            ? `<p class="error"><strong>Error:</strong> ${this.escapeHtml(result.error)}</p>`
            : ""
        }
        <table class="assertion-table">
          <thead>
            <tr>
              <th>Assertion</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            ${result.assertionResults
              .map(
                (assertion) =>
                  `<tr class="${assertion.passed ? "pass" : "fail"}">
              <td>${this.escapeHtml(assertion.description)}</td>
              <td>${assertion.passed ? "✓ PASS" : "✗ FAIL"}</td>
              <td>${assertion.details ? this.escapeHtml(assertion.details) : "-"}</td>
            </tr>`
              )
              .join("\n")}
          </tbody>
        </table>
      </div>`
      )
      .join("\n");

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>API Test Execution Report</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f5f5f5;
      color: #333;
      line-height: 1.6;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 20px;
    }

    header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px;
      border-radius: 8px;
      margin-bottom: 30px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    h1 {
      margin-bottom: 10px;
      font-size: 2em;
    }

    .summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }

    .summary-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .summary-card h3 {
      color: #666;
      font-size: 0.9em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .summary-card .value {
      font-size: 2em;
      font-weight: bold;
    }

    .summary-card.passed .value {
      color: #27ae60;
    }

    .summary-card.failed .value {
      color: #e74c3c;
    }

    .summary-card.total .value {
      color: #667eea;
    }

    .summary-card.percentage .value {
      color: #f39c12;
    }

    .progress-bar {
      width: 100%;
      height: 8px;
      background-color: #ecf0f1;
      border-radius: 4px;
      overflow: hidden;
      margin-top: 10px;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #27ae60, #2ecc71);
      border-radius: 4px;
      transition: width 0.3s ease;
    }

    .metadata {
      background: white;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 30px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      font-size: 0.9em;
      color: #666;
    }

    .metadata p {
      margin-bottom: 8px;
    }

    .metadata strong {
      color: #333;
    }

    .results-section {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .results-section h2 {
      background-color: #667eea;
      color: white;
      padding: 15px 20px;
      font-size: 1.3em;
      margin: 0;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th {
      background-color: #f8f9fa;
      padding: 12px;
      text-align: left;
      font-weight: 600;
      color: #333;
      border-bottom: 2px solid #dee2e6;
      font-size: 0.9em;
    }

    td {
      padding: 12px;
      border-bottom: 1px solid #dee2e6;
    }

    tr:hover {
      background-color: #f9f9f9;
    }

    tr.pass {
      background-color: #f0fdf4;
    }

    tr.fail {
      background-color: #fef2f2;
    }

    .url-cell {
      font-family: 'Courier New', monospace;
      font-size: 0.85em;
      word-break: break-all;
      color: #667eea;
    }

    .details-section {
      margin-top: 40px;
    }

    .details-section h2 {
      color: #333;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #667eea;
    }

    .detail-section {
      background: white;
      padding: 20px;
      border-left: 4px solid #667eea;
      margin-bottom: 20px;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .detail-section h4 {
      color: #667eea;
      margin-bottom: 10px;
    }

    .detail-section p {
      margin-bottom: 8px;
      font-size: 0.95em;
    }

    .detail-section .error {
      color: #e74c3c;
      background-color: #fadbd8;
      padding: 8px 12px;
      border-radius: 4px;
      margin: 10px 0;
    }

    .assertion-table {
      margin-top: 10px;
      font-size: 0.9em;
    }

    .assertion-table th {
      background-color: #ecf0f1;
      padding: 10px;
    }

    .assertion-table td {
      padding: 10px;
    }

    .assertion-table tr.pass {
      background-color: #f0fdf4;
    }

    .assertion-table tr.fail {
      background-color: #fef2f2;
    }

    footer {
      text-align: center;
      padding: 20px;
      color: #666;
      font-size: 0.9em;
      margin-top: 40px;
      border-top: 1px solid #ddd;
    }

    @media print {
      body {
        background-color: white;
      }

      .container {
        max-width: 100%;
      }

      header {
        page-break-after: avoid;
      }

      .results-section {
        page-break-inside: avoid;
      }

      .detail-section {
        page-break-inside: avoid;
      }

      tr {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>API Test Execution Report</h1>
      <p>Comprehensive test results and assertions</p>
    </header>

    <div class="summary">
      <div class="summary-card passed">
        <h3>Passed</h3>
        <div class="value">${passedCount}</div>
      </div>
      <div class="summary-card failed">
        <h3>Failed</h3>
        <div class="value">${failedCount}</div>
      </div>
      <div class="summary-card total">
        <h3>Total</h3>
        <div class="value">${results.length}</div>
      </div>
      <div class="summary-card percentage">
        <h3>Pass Rate</h3>
        <div class="value">${passPercentage}%</div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${passPercentage}%"></div>
        </div>
      </div>
    </div>

    <div class="metadata">
      <p><strong>Report Generated:</strong> ${timestamp.toLocaleString()}</p>
      <p><strong>Total Execution Time:</strong> ${(executionTime / 1000).toFixed(2)}s</p>
      <p><strong>Average Time per Test:</strong> ${results.length > 0 ? ((executionTime / results.length) / 1000).toFixed(3) : 0}s</p>
    </div>

    <div class="results-section">
      <h2>Test Results Summary</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Test ID</th>
            <th>Method</th>
            <th>URL</th>
            <th>Status Code</th>
            <th>Result</th>
            <th>Assertions</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>

    ${
      assertionDetails
        ? `<div class="details-section">
      <h2>Detailed Results</h2>
      ${assertionDetails}
    </div>`
        : ""
    }

    <footer>
      <p>Generated by FSD Parser API Test Runner | ${new Date().getFullYear()}</p>
    </footer>
  </div>
</body>
</html>`;
  }

  private async generateExcelReport(
    results: TestExecutionResult[],
    timestamp: Date,
    executionTime: number
  ): Promise<Buffer> {
    const workbook = new ExcelJS.Workbook();

    // Summary Sheet
    const summarySheet = workbook.addWorksheet("Summary");
    this.setupSummarySheet(summarySheet, results, timestamp, executionTime);

    // Results Sheet
    const resultsSheet = workbook.addWorksheet("Test Results");
    this.setupResultsSheet(resultsSheet, results);

    // Assertions Sheet
    const assertionsSheet = workbook.addWorksheet("Assertions");
    this.setupAssertionsSheet(assertionsSheet, results);

    // Details Sheet (for failed tests)
    const failedTests = results.filter((r) => !r.passed || r.error);
    if (failedTests.length > 0) {
      const detailsSheet = workbook.addWorksheet("Failed Details");
      this.setupFailedDetailsSheet(detailsSheet, failedTests);
    }

    return (await workbook.xlsx.writeBuffer()) as unknown as Buffer;
  }

  private setupSummarySheet(
    sheet: ExcelJS.Worksheet,
    results: TestExecutionResult[],
    timestamp: Date,
    executionTime: number
  ): void {
    const passedCount = results.filter((r) => r.passed).length;
    const failedCount = results.length - passedCount;
    const passPercentage = results.length > 0 ? ((passedCount / results.length) * 100).toFixed(2) : "0.00";

    // Set column widths
    sheet.columns = [
      { width: 30 },
      { width: 20 }
    ];

    // Header
    const headerRow = sheet.addRow(["API Test Execution Report"]);
    headerRow.font = { bold: true, size: 14, color: { argb: "FFFFFFFF" } };
    headerRow.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF667eea" } };
    headerRow.alignment = { horizontal: "center", vertical: "middle" };
    sheet.mergeCells("A1:B1");

    sheet.addRow([]);

    // Summary Statistics
    const metrics = [
      ["Metric", "Value"],
      ["Total Tests", results.length],
      ["Passed", passedCount],
      ["Failed", failedCount],
      ["Pass Rate (%)", passPercentage],
      ["Execution Time (s)", (executionTime / 1000).toFixed(2)],
      ["Avg Time per Test (s)", results.length > 0 ? ((executionTime / results.length) / 1000).toFixed(3) : 0],
      ["Report Generated", timestamp.toLocaleString()]
    ];

    metrics.forEach((row, idx) => {
      const newRow = sheet.addRow(row);
      if (idx === 0) {
        newRow.font = { bold: true, color: { argb: "FFFFFFFF" } };
        newRow.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF667eea" } };
      } else {
        newRow.font = { bold: idx <= 4 };
      }
    });
  }

  private setupResultsSheet(sheet: ExcelJS.Worksheet, results: TestExecutionResult[]): void {
    sheet.columns = [
      { width: 5 },
      { width: 35 },
      { width: 10 },
      { width: 50 },
      { width: 12 },
      { width: 10 },
      { width: 40 }
    ];

    const headerRow = sheet.addRow(["#", "Test ID", "Method", "URL", "Status Code", "Result", "Assertions"]);
    headerRow.font = { bold: true, color: { argb: "FFFFFFFF" } };
    headerRow.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF667eea" } };

    results.forEach((result, idx) => {
      const row = sheet.addRow([
        idx + 1,
        result.id,
        result.method,
        result.url,
        result.statusCode,
        result.passed ? "PASS" : "FAIL",
        this.getAssertionSummary(result)
      ]);

      if (result.passed) {
        row.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFf0fdf4" } };
        row.font = { color: { argb: "FF27ae60" } };
      } else {
        row.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFfef2f2" } };
        row.font = { color: { argb: "FFe74c3c" } };
      }

      // Wrap text for long URLs
      row.getCell(4).alignment = { wrapText: true, vertical: "middle" };
    });

    // Freeze header row
    sheet.views = [{ state: "frozen", ySplit: 1 }];
  }

  private setupAssertionsSheet(sheet: ExcelJS.Worksheet, results: TestExecutionResult[]): void {
    sheet.columns = [
      { width: 30 },
      { width: 35 },
      { width: 12 },
      { width: 50 }
    ];

    const headerRow = sheet.addRow(["Test ID", "Assertion Description", "Status", "Details"]);
    headerRow.font = { bold: true, color: { argb: "FFFFFFFF" } };
    headerRow.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF667eea" } };

    results.forEach((result) => {
      result.assertionResults.forEach((assertion) => {
        const row = sheet.addRow([
          result.id,
          assertion.description,
          assertion.passed ? "PASS" : "FAIL",
          assertion.details || "-"
        ]);

        if (assertion.passed) {
          row.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFf0fdf4" } };
        } else {
          row.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFfef2f2" } };
        }

        row.getCell(4).alignment = { wrapText: true, vertical: "middle" };
      });
    });

    sheet.views = [{ state: "frozen", ySplit: 1 }];
  }

  private setupFailedDetailsSheet(sheet: ExcelJS.Worksheet, failedTests: TestExecutionResult[]): void {
    sheet.columns = [
      { width: 30 },
      { width: 50 },
      { width: 12 },
      { width: 50 }
    ];

    const headerRow = sheet.addRow(["Test ID", "URL", "Status Code", "Error / Failed Assertions"]);
    headerRow.font = { bold: true, color: { argb: "FFFFFFFF" } };
    headerRow.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFe74c3c" } };

    failedTests.forEach((result) => {
      const failedAssertions = result.assertionResults
        .filter((a) => !a.passed)
        .map((a) => `${a.description} (${a.details})`)
        .join("\n");

      const errorMsg = result.error
        ? `ERROR: ${result.error}`
        : failedAssertions || "No details";

      const row = sheet.addRow([
        result.id,
        result.url,
        result.statusCode,
        errorMsg
      ]);

      row.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFfef2f2" } };
      row.font = { color: { argb: "FFe74c3c" } };
      row.getCell(2).alignment = { wrapText: true, vertical: "middle" };
      row.getCell(4).alignment = { wrapText: true, vertical: "middle" };
    });

    sheet.views = [{ state: "frozen", ySplit: 1 }];
  }

  private getAssertionSummary(result: TestExecutionResult): string {
    if (result.error) {
      return "Execution Error";
    }
    const passed = result.assertionResults.filter((a) => a.passed).length;
    const total = result.assertionResults.length;
    return `${passed}/${total} passed`;
  }

  private escapeHtml(text: string): string {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return text.replace(/[&<>"']/g, (char) => map[char] || char);
  }
}
