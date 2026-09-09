import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import ExcelJS from "exceljs";

export interface TestExecutionResult {
  id: string;
  title?: string | undefined;
  feature?: string | undefined;
  tags?: string[] | undefined;
  filePath: string;
  method: string;
  url: string;
  expectedStatusCode?: number | undefined;
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
  executionTime?: number;
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

  private generateHtmlReport(results: TestExecutionResult[], timestamp: Date, executionTime: number): string {
    const passedCount = results.filter((result) => result.passed).length;
    const failedCount = results.length - passedCount;
    const passPercentage = results.length > 0 ? ((passedCount / results.length) * 100).toFixed(2) : "0.00";

    const groups = this.groupResultsByBracket(results);

    const groupSections = Array.from(groups.entries()).map(([groupName, groupResults]) => {
      const groupPassed = groupResults.filter((result) => result.passed).length;
      const groupFailed = groupResults.length - groupPassed;

      const categories = this.groupResultsByCategory(groupResults);
      const categorySections = Array.from(categories.entries()).map(([categoryName, categoryResults]) => {
        const categoryPassed = categoryResults.filter((result) => result.passed).length;
        const categoryFailed = categoryResults.length - categoryPassed;

        const rows = categoryResults.map((result, index) => {
          const statusMismatch = result.expectedStatusCode !== undefined && result.expectedStatusCode !== result.statusCode;
          return `<tr class="${result.passed ? "pass" : "fail"}">
        <td>${index + 1}</td>
        <td>${this.escapeHtml(this.humanizeTestId(result.id))}</td>
        <td>${this.escapeHtml(result.title ?? "-")}</td>
        <td>${this.escapeHtml(result.method)}</td>
        <td>${this.escapeHtml(result.url)}</td>
        <td>${result.expectedStatusCode ?? "-"}</td>
        <td class="${statusMismatch ? "status-mismatch" : ""}">${result.statusCode || "-"}</td>
        <td>${result.passed ? "PASS" : "FAIL"}</td>
        <td>${this.getAssertionNotes(result)}</td>
      </tr>`;
        }).join("\n");

        return `<div class="test-category">
        <h3>${this.escapeHtml(categoryName)} <span class="group-tally">(<span class="tally-pass">${categoryPassed} passed</span> / <span class="tally-fail">${categoryFailed} failed</span>)</span></h3>
        <table>
          <colgroup>
            <col class="col-index"><col class="col-id"><col class="col-title"><col class="col-method">
            <col class="col-endpoint"><col class="col-expected"><col class="col-actual"><col class="col-result"><col class="col-notes">
          </colgroup>
          <thead>
            <tr>
              <th>#</th><th>Test ID</th><th>Title / Scenario</th><th>Method</th><th>Endpoint</th>
              <th>Expected Code</th><th>Actual Response Status</th><th>Result</th><th>Notes</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
      }).join("\n");

      return `<section class="test-group">
      <h2>${this.escapeHtml(groupName)} <span class="group-tally">(<span class="tally-pass">${groupPassed} passed</span> / <span class="tally-fail">${groupFailed} failed</span>)</span></h2>
      ${categorySections}
    </section>`;
    }).join("\n");

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>API Test Execution Report</title>
  <style>
    body { font-family: sans-serif; margin: 2rem; color: #333; }
    table {
      width: 100%;
      table-layout: fixed;
      border-collapse: collapse;
      margin-bottom: 1rem;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 0.6rem;
      text-align: left;
      vertical-align: top;
      overflow-wrap: break-word;
      word-break: break-word;
    }
    col.col-index { width: 3%; }
    col.col-id { width: 14%; }
    col.col-title { width: 16%; }
    col.col-method { width: 6%; }
    col.col-endpoint { width: 20%; }
    col.col-expected { width: 8%; }
    col.col-actual { width: 10%; }
    col.col-result { width: 7%; }
    col.col-notes { width: 16%; }
    th { background: #667eea; color: white; }
    .pass { background: #f0fdf4; }
    .fail { background: #fef2f2; }
    .status-mismatch { color: #b3261e; font-weight: bold; }
    .test-group { margin-top: 2.5rem; }
    .test-category { margin-top: 1.25rem; }
    .test-category h3 { margin-bottom: 0.5rem; font-size: 1rem; }
    .group-tally { font-weight: normal; font-size: 0.85rem; }
    .tally-pass { color: #1e7a34; font-weight: 600; }
    .tally-fail { color: #b3261e; font-weight: 600; }
    ul.notes { margin: 0; padding-left: 1.1rem; font-size: 0.8rem; color: #555; }
    ul.notes li { margin-bottom: 0.25rem; }
    .ok { color: #1e7a34; font-weight: bold; font-size: 0.8rem; }

    .generated-badge {
      display: inline-block;
      background: #f5f6fa;
      border: 1px solid #e0e2ec;
      border-radius: 6px;
      padding: 0.4rem 0.9rem;
      font-size: 0.85rem;
      color: #555;
      margin: 0.5rem 0 1.5rem;
    }

    .summary-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin: 1.5rem 0 2rem;
    }
    .stat-card {
      flex: 1;
      min-width: 140px;
      padding: 1rem 1.25rem;
      border-radius: 8px;
      background: #f5f6fa;
      border: 1px solid #e0e2ec;
    }
    .stat-card .stat-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #666;
      margin-bottom: 0.35rem;
    }
    .stat-card .stat-value {
      font-size: 1.6rem;
      font-weight: bold;
    }
    .stat-card.total .stat-value { color: #667eea; }
    .stat-card.passed { background: #f0fdf4; border-color: #c8ecd4; }
    .stat-card.passed .stat-value { color: #1e7a34; }
    .stat-card.failed { background: #fef2f2; border-color: #f6cdd0; }
    .stat-card.failed .stat-value { color: #b3261e; }
    .stat-card.rate .stat-value {
      color: ${Number(passPercentage) >= 80 ? "#1e7a34" : Number(passPercentage) >= 50 ? "#b8860b" : "#b3261e"};
    }
    .stat-card.time .stat-value { color: #555; }
  </style>
</head>
<body>
  <h1>API Test Execution Report</h1>
  <div class="generated-badge">Generated: ${this.escapeHtml(this.formatTimestamp(timestamp))}</div>

  <div class="summary-bar">
    <div class="stat-card time">
      <div class="stat-label">Execution Time</div>
      <div class="stat-value">${(executionTime / 1000).toFixed(2)}s</div>
    </div>
    <div class="stat-card total">
      <div class="stat-label">Total Tests</div>
      <div class="stat-value">${results.length}</div>
    </div>
    <div class="stat-card passed">
      <div class="stat-label">Passed</div>
      <div class="stat-value">${passedCount}</div>
    </div>
    <div class="stat-card failed">
      <div class="stat-label">Failed</div>
      <div class="stat-value">${failedCount}</div>
    </div>
    <div class="stat-card rate">
      <div class="stat-label">Pass Rate</div>
      <div class="stat-value">${passPercentage}%</div>
    </div>
  </div>

  ${groupSections}
</body>
</html>`;
  }

  /** Splits an API's test results into category subsections (Positive, Negative, Boundary, Edge
   *  Case), driven entirely by the `tags` already present on each generated test case — no new
   *  detection logic needed. Priority order handles tests with multiple tags (e.g. a boundary test
   *  also tagged "positive"): boundary > edge-case > negative > positive > Other. Only categories
   *  that actually have results are included, in a fixed, readable order. */
  private groupResultsByCategory(results: TestExecutionResult[]): Map<string, TestExecutionResult[]> {
    const buckets = new Map<string, TestExecutionResult[]>();
    const order = ["Positive", "Negative", "Boundary", "Edge Case", "Other"];

    for (const result of results) {
      const category = this.categorizeByTag(result.tags);
      const existing = buckets.get(category);
      if (existing) {
        existing.push(result);
      } else {
        buckets.set(category, [result]);
      }
    }

    const ordered = new Map<string, TestExecutionResult[]>();
    for (const category of order) {
      const bucket = buckets.get(category);
      if (bucket && bucket.length > 0) {
        ordered.set(category, bucket);
      }
    }
    return ordered;
  }

  private categorizeByTag(tags: string[] | undefined): string {
    const tagSet = new Set((tags || []).map((tag) => tag.toLowerCase()));
    if (tagSet.has("boundary")) return "Boundary";
    if (tagSet.has("edge-case")) return "Edge Case";
    if (tagSet.has("negative")) return "Negative";
    if (tagSet.has("positive")) return "Positive";
    return "Other";
  }

  /** Groups by the test id prefix (e.g. "dismissAction-001-positive" -> "dismissAction"),
   *  since `feature` in the YAML is typically a shared project/spec-level label rather than
   *  a per-endpoint one. Falls back to `feature`, then "Uncategorized", only if the id doesn't
   *  match the expected "{name}-{number}-{description}" pattern. */
  /** Formats a timestamp unambiguously (e.g. "06 Sep 2026, 6:07:54 PM") instead of relying on
   *  locale-dependent toLocaleString(), which can render as ambiguous numeric formats like "9/6/2026". */
  private formatTimestamp(date: Date): string {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = String(date.getDate()).padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    if (hours === 0) hours = 12;

    return `${day} ${month} ${year}, ${hours}:${minutes}:${seconds} ${meridiem}`;
  }

  private groupResultsByBracket(results: TestExecutionResult[]): Map<string, TestExecutionResult[]> {
    const groups = new Map<string, TestExecutionResult[]>();

    for (const result of results) {
      const idMatch = result.id.match(/^(.+?)-\d+(?:-.*)?$/);
      const featureName = result.feature?.trim();
      const groupName = idMatch?.[1] ?? (featureName && featureName.length > 0 ? featureName : "Uncategorized");

      const existing = groups.get(groupName);
      if (existing) {
        existing.push(result);
      } else {
        groups.set(groupName, [result]);
      }
    }

    return groups;
  }

  /** Turns "dismissAction-001-positive" into "dismissAction - 001 - Positive" for display,
   *  keeping the API name segment and number as-is, capitalizing the trailing description. */
  private humanizeTestId(id: string): string {
    const parts = id.split("-");
    if (parts.length < 2) return id;

    const [namePart, numberPart, ...rest] = parts;
    if (namePart === undefined) return id;
    if (numberPart === undefined) return id;

    const suffix = rest.length > 0
      ? rest.join(" ").replace(/^./, (c) => c.toUpperCase())
      : undefined;

    return suffix ? `${namePart} - ${numberPart} - ${suffix}` : `${namePart} - ${numberPart}`;
  }

  /** Renders a single readable note: an execution error, a plain "all passed" line, or a bullet list of just the failed assertions. */
  private getAssertionNotes(result: TestExecutionResult): string {
    if (result.error) {
      return `<ul class="notes"><li>Execution error: ${this.escapeHtml(result.error)}</li></ul>`;
    }

    const failed = result.assertionResults.filter((assertion) => !assertion.passed);
    if (failed.length === 0) {
      return `<span class="ok">✓ All assertions passed</span>`;
    }

    const items = failed
      .map((assertion) => `<li>${this.escapeHtml(assertion.description)}${assertion.details ? ` — ${this.escapeHtml(assertion.details)}` : ""}</li>`)
      .join("");
    return `<ul class="notes">${items}</ul>`;
  }

  private async generateExcelReport(
    results: TestExecutionResult[],
    timestamp: Date,
    executionTime: number
  ): Promise<Buffer> {
    const workbook = new ExcelJS.Workbook();
    const passedCount = results.filter((result) => result.passed).length;
    const failedCount = results.length - passedCount;
    const passPercentage = results.length > 0 ? ((passedCount / results.length) * 100).toFixed(2) : "0.00";

    const PASS_FILL: ExcelJS.Fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFDFF5E1" } };
    const FAIL_FILL: ExcelJS.Fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFDE2E1" } };
    const HEADER_FILL: ExcelJS.Fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF667EEA" } };
    const GROUP_FILL: ExcelJS.Fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFE4E7F7" } };
    const HEADER_FONT: Partial<ExcelJS.Font> = { bold: true, color: { argb: "FFFFFFFF" } };
    const GROUP_FONT: Partial<ExcelJS.Font> = { bold: true, size: 13, color: { argb: "FF2B2F77" } };
    const THIN_BORDER: Partial<ExcelJS.Borders> = {
      top: { style: "thin", color: { argb: "FFD0D0D0" } },
      left: { style: "thin", color: { argb: "FFD0D0D0" } },
      bottom: { style: "thin", color: { argb: "FFD0D0D0" } },
      right: { style: "thin", color: { argb: "FFD0D0D0" } }
    };

    // --- Summary sheet ---
    const summary = workbook.addWorksheet("Summary");
    summary.columns = [{ width: 26 }, { width: 30 }];
    summary.mergeCells("A1:B1");
    summary.getCell("A1").value = "API Test Execution Report";
    summary.getCell("A1").font = { bold: true, size: 16 };

    const summaryRows: Array<[string, string | number]> = [
      ["Report Generated", this.formatTimestamp(timestamp)],
      ["Execution Time (s)", (executionTime / 1000).toFixed(2)],
      ["Total Tests", results.length],
      ["Passed", passedCount],
      ["Failed", failedCount],
      ["Pass Rate", `${passPercentage}%`]
    ];
    summaryRows.forEach(([label, value], index) => {
      const row = summary.getRow(index + 3);
      row.getCell(1).value = label;
      row.getCell(1).font = { bold: true };
      row.getCell(2).value = value;
      if (label === "Passed") row.getCell(2).font = { bold: true, color: { argb: "FF1E7A34" } };
      if (label === "Failed") row.getCell(2).font = { bold: true, color: { argb: "FFB3261E" } };
      if (label === "Pass Rate") row.getCell(2).font = { bold: true };
    });

    // --- Test Results sheet (grouped by API name, Notes column replaces Assertions Passed) ---
    const testResults = workbook.addWorksheet("Test Results");
    const columns: Array<{ header: string; key: string; width: number }> = [
      { header: "#", key: "index", width: 6 },
      { header: "Test ID", key: "id", width: 34 },
      { header: "Title / Scenario", key: "title", width: 40 },
      { header: "Feature", key: "feature", width: 22 },
      { header: "Method", key: "method", width: 9 },
      { header: "Endpoint", key: "url", width: 46 },
      { header: "Expected Code", key: "expectedStatus", width: 14 },
      { header: "Actual Response Status", key: "actualStatus", width: 20 },
      { header: "Result", key: "result", width: 10 },
      { header: "Notes", key: "notes", width: 55 }
    ];
    testResults.columns = columns;

    const headerRow = testResults.getRow(1);
    headerRow.eachCell((cell) => {
      cell.fill = HEADER_FILL;
      cell.font = HEADER_FONT;
      cell.alignment = { vertical: "middle", horizontal: "center" };
      cell.border = THIN_BORDER;
    });
    headerRow.height = 20;

    const lastColumnLetter = this.columnLetter(columns.length);
    const groups = this.groupResultsByBracket(results);
    let overallIndex = 0;

    for (const [groupName, groupResults] of groups.entries()) {
      const groupPassed = groupResults.filter((result) => result.passed).length;
      const groupFailed = groupResults.length - groupPassed;

      const groupRow = testResults.addRow({});
      testResults.mergeCells(`A${groupRow.number}:${lastColumnLetter}${groupRow.number}`);
      groupRow.height = 22;
      groupRow.eachCell({ includeEmpty: true }, (cell) => {
        cell.fill = GROUP_FILL;
        cell.border = THIN_BORDER;
      });
      const groupCell = groupRow.getCell(1);
      groupCell.value = `${groupName}  (${groupPassed} passed / ${groupFailed} failed)`;
      groupCell.font = GROUP_FONT;
      groupCell.alignment = { vertical: "middle", horizontal: "left" };

      groupResults.forEach((result) => {
        overallIndex += 1;
        const statusMismatch = result.expectedStatusCode !== undefined && result.expectedStatusCode !== result.statusCode;
        const notes = this.getAssertionNotesPlain(result);

        const row = testResults.addRow({
          index: overallIndex,
          id: this.humanizeTestId(result.id),
          title: result.title ?? "-",
          feature: result.feature ?? "-",
          method: result.method,
          url: result.url,
          expectedStatus: result.expectedStatusCode ?? "-",
          actualStatus: result.statusCode || "-",
          result: result.passed ? "PASS" : "FAIL",
          notes
        });

        const fill = result.passed ? PASS_FILL : FAIL_FILL;
        row.eachCell((cell) => {
          cell.fill = fill;
          cell.border = THIN_BORDER;
          cell.alignment = { vertical: "top", wrapText: true };
        });
        row.getCell("result").font = {
          bold: true,
          color: { argb: result.passed ? "FF1E7A34" : "FFB3261E" }
        };
        if (statusMismatch) {
          row.getCell("actualStatus").font = { bold: true, color: { argb: "FFB3261E" } };
        }

        const noteLineCount = notes.split("\n").length;
        row.height = Math.max(18, noteLineCount * 15);
      });
    }

    testResults.views = [{ state: "frozen", ySplit: 1 }];

    return (await workbook.xlsx.writeBuffer()) as unknown as Buffer;
  }

  /** Converts a 1-based column number to its Excel letter (e.g. 10 -> "J"), for merge-range strings. */
  private columnLetter(columnNumber: number): string {
    let remaining = columnNumber;
    let letters = "";
    while (remaining > 0) {
      const remainder = (remaining - 1) % 26;
      letters = String.fromCharCode(65 + remainder) + letters;
      remaining = Math.floor((remaining - 1) / 26);
    }
    return letters;
  }

  /** Plain-text version of getAssertionNotes for Excel cells: an execution error, "All assertions passed",
   *  or a newline-separated bullet list of just the failed assertions (readable with wrapText enabled). */
  private getAssertionNotesPlain(result: TestExecutionResult): string {
    if (result.error) {
      return `Execution error: ${result.error}`;
    }

    const failed = result.assertionResults.filter((assertion) => !assertion.passed);
    if (failed.length === 0) {
      return "All assertions passed";
    }

    return failed
      .map((assertion) => `• ${assertion.description}${assertion.details ? ` — ${assertion.details}` : ""}`)
      .join("\n");
  }

  private escapeHtml(text: string): string {
    const map: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return text.replace(/[&<>"']/g, (character) => map[character] ?? character);
  }
}