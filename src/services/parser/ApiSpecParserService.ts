import ExcelJS, { type CellValue, type Worksheet } from "exceljs";
import type { ApiScenario } from "../../types/apiSpec.js";

/** Maps a normalized column header to a canonical slot name */
type ColumnSlot =
  | "method"
  | "endpoint"
  | "description"
  | "requestHeaders"
  | "requestBody"
  | "pathParams"
  | "queryParams"
  | "responseSuccess"
  | "responseError"
  | "responseBody"
  | "validations"
  | "authentication"
  | "preconditions"
  | "testData"
  | "assertions"
  | "cleanup"
  | "fsdReference"
  | "tags"
  | "priority"
  | "environment";

interface ColumnMap {
  slot: ColumnSlot;
  columnIndex: number;
}

interface RawApiRow {
  worksheetName: string;
  rowNumber: number;
  cells: Map<ColumnSlot, string>;
}

export class ApiSpecParserService {
  public async parseWorkbook(inputPath: string): Promise<ApiScenario[]> {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(inputPath);

    const scenarios: ApiScenario[] = [];

    for (const worksheet of workbook.worksheets) {
      if (worksheet.actualRowCount === 0) {
        continue;
      }

      const sheetScenarios = this.parseWorksheet(worksheet);
      scenarios.push(...sheetScenarios);
    }

    return scenarios;
  }

  private parseWorksheet(worksheet: Worksheet): ApiScenario[] {
    const headerRowIndex = this.findHeaderRow(worksheet);

    if (headerRowIndex === null) {
      return this.parseSectionBased(worksheet);
    }

    return this.parseTabular(worksheet, headerRowIndex);
  }

  // ─── Tabular Parser ───────────────────────────────────────────────────────

  private parseTabular(worksheet: Worksheet, headerRowIndex: number): ApiScenario[] {
    const headerRow = worksheet.getRow(headerRowIndex);
    const columnMap = this.buildColumnMap(headerRow);

    if (columnMap.length === 0) {
      return [];
    }

    const rawRows: RawApiRow[] = [];

    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
      if (rowNumber <= headerRowIndex) {
        return;
      }

      const cells = new Map<ColumnSlot, string>();

      for (const mapping of columnMap) {
        const cellValue = this.resolveCellValue(worksheet, rowNumber, mapping.columnIndex);
        if (cellValue.length > 0) {
          cells.set(mapping.slot, cellValue);
        }
      }

      if (cells.size > 0) {
        rawRows.push({
          worksheetName: worksheet.name,
          rowNumber,
          cells
        });
      }
    });

    return rawRows
      .filter((row) => this.rowHasApiSignal(row))
      .map((row, index) => this.buildScenario(row, index + 1));
  }

  private findHeaderRow(worksheet: Worksheet): number | null {
    let found: number | null = null;

    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
      if (found !== null || rowNumber > 20) {
        return;
      }

      const values = this.rowToStrings(row);
      const headerSignals = values.filter((cell) =>
        /\b(method|endpoint|url|path|request|response|description|api|header|body|param|auth|status|validation)\b/i.test(cell)
      );

      if (headerSignals.length >= 2) {
        found = rowNumber;
      }
    });

    return found;
  }

  private buildColumnMap(headerRow: ExcelJS.Row): ColumnMap[] {
    const map: ColumnMap[] = [];
    const values = headerRow.values as Array<CellValue | undefined>;

    values.forEach((value, columnIndex) => {
      if (!value || columnIndex === 0) {
        return;
      }

      const normalized = String(value).toLowerCase().replace(/\s+/g, " ").trim();
      const slot = this.mapHeaderToSlot(normalized);

      if (slot) {
        map.push({ slot, columnIndex });
      }
    });

    return map;
  }

  private mapHeaderToSlot(header: string): ColumnSlot | null {
    if (/\bmethod\b/.test(header)) return "method";
    if (/\burl\b|\bpath\b|\bendpoint\b/.test(header)) return "endpoint";
    if (/\bdescription\b|\bsummary\b|\boverview\b|\bbusiness\b/.test(header)) return "description";
    if (/\brequest\s*header/.test(header)) return "requestHeaders";
    if (/\brequest\s*body\b|\brequest\s*payload\b/.test(header)) return "requestBody";
    if (/\bpath\s*param/.test(header)) return "pathParams";
    if (/\bquery\s*param\b|\brequest\s*param\b/.test(header)) return "queryParams";
    if (/\bsuccess\s*response\b|\bresponse\s*success\b|\bhttp\s*2[0-9]{2}/.test(header)) return "responseSuccess";
    if (/\berror\s*response\b|\bresponse\s*error\b|\bfailure\s*response\b|\bhttp\s*[4-5][0-9]{2}/.test(header)) return "responseError";
    if (/\bresponse\s*body\b|\bresponse\s*schema\b/.test(header)) return "responseBody";
    if (/\bvalidat/.test(header)) return "validations";
    if (/\bauth/.test(header)) return "authentication";
    if (/\bprecondition\b|\bprerequisite\b/.test(header)) return "preconditions";
    if (/\btest\s*data\b|\bsample\b/.test(header)) return "testData";
    if (/\bassertion\b|\bexpect/.test(header)) return "assertions";
    if (/\bcleanup\b|\brollback\b/.test(header)) return "cleanup";
    if (/\bfsd\b|\bfeature\s*ref\b|\btraceab/.test(header)) return "fsdReference";
    if (/\btag\b/.test(header)) return "tags";
    if (/\bpriority\b/.test(header)) return "priority";
    if (/\benvironment\b|\benv\b/.test(header)) return "environment";

    return null;
  }

  private rowHasApiSignal(row: RawApiRow): boolean {
    const method = row.cells.get("method") ?? "";
    const endpoint = row.cells.get("endpoint") ?? "";

    return (
      /^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)$/i.test(method.trim()) ||
      /^\//.test(endpoint.trim()) ||
      endpoint.length > 0
    );
  }

  // ─── Section-Based Fallback Parser ───────────────────────────────────────

  private parseSectionBased(worksheet: Worksheet): ApiScenario[] {
    const scenarios: ApiScenario[] = [];
    let ordinal = 0;

    const sections = new Map<string, string[]>();
    let currentSection = "general";

    worksheet.eachRow({ includeEmpty: false }, (row) => {
      const values = this.rowToStrings(row);
      if (values.length === 0) return;

      const firstCell = values[0] ?? "";
      const isHeading =
        values.length === 1 ||
        /^(method|endpoint|url|request|response|description|auth|precondition|validation|test data|assertion|cleanup|tag|priority|env|reference)/i.test(firstCell);

      if (isHeading && firstCell.length <= 80) {
        currentSection = firstCell.toLowerCase().trim();
        if (!sections.has(currentSection)) {
          sections.set(currentSection, []);
        }
      } else {
        const lines = sections.get(currentSection) ?? [];
        lines.push(values.join(" | "));
        sections.set(currentSection, lines);
      }
    });

    const httpMethod = this.extractFromMap(sections, ["method"]);
    const endpoint = this.extractFromMap(sections, ["endpoint", "url", "path"]);

    if (httpMethod || endpoint) {
      ordinal += 1;
      const row: RawApiRow = {
        worksheetName: worksheet.name,
        rowNumber: 1,
        cells: this.sectionsToRawCells(sections)
      };

      scenarios.push(this.buildScenario(row, ordinal));
    }

    return scenarios;
  }

  private sectionsToRawCells(sections: Map<string, string[]>): Map<ColumnSlot, string> {
    const cells = new Map<ColumnSlot, string>();
    const slotKeywords: Array<[ColumnSlot, string[]]> = [
      ["method", ["method"]],
      ["endpoint", ["endpoint", "url", "path"]],
      ["description", ["description", "summary", "overview"]],
      ["requestHeaders", ["request header", "header"]],
      ["requestBody", ["request body", "payload", "body"]],
      ["responseSuccess", ["success response", "response success"]],
      ["responseError", ["error response", "failure"]],
      ["validations", ["validation", "business rule"]],
      ["authentication", ["auth", "authentication"]],
      ["preconditions", ["precondition", "prerequisite"]],
      ["testData", ["test data", "sample"]],
      ["assertions", ["assertion", "expected"]],
      ["cleanup", ["cleanup", "rollback"]],
      ["fsdReference", ["fsd", "reference", "traceability"]],
      ["tags", ["tag"]],
      ["priority", ["priority"]],
      ["environment", ["environment", "env"]]
    ];

    for (const [slot, keywords] of slotKeywords) {
      const value = this.extractFromMap(sections, keywords);
      if (value) {
        cells.set(slot, value);
      }
    }

    return cells;
  }

  // ─── Scenario Builder ─────────────────────────────────────────────────────

  private buildScenario(row: RawApiRow, ordinal: number): ApiScenario {
    const method = (row.cells.get("method") ?? "GET").toUpperCase().trim();
    const endpoint = row.cells.get("endpoint") ?? "";
    const description = row.cells.get("description") ?? "";
    const authentication = row.cells.get("authentication") ?? "Bearer Token";
    const fsdReference = row.cells.get("fsdReference") ?? "";
    const priority = this.resolvePriority(row.cells.get("priority"), method, endpoint);
    const tags = this.buildTags(method, row.cells, row.worksheetName);
    const environments = this.buildEnvironments(row.cells.get("environment"));

    const id = this.buildId(row.worksheetName, ordinal);
    const title = this.buildTitle(method, endpoint, description);

    return {
      id,
      title,
      feature: this.normalizeFeatureName(row.worksheetName),
      description: description || `${method} ${endpoint}`,
      method,
      endpoint,
      authentication,
      environment: environments,
      tags,
      priority,
      preconditions: this.parseList(row.cells.get("preconditions")),
      testData: this.parseKeyValuePairs(row.cells.get("testData")),
      request: {
        headers: this.parseKeyValuePairs(row.cells.get("requestHeaders")),
        pathParams: this.parseKeyValuePairs(row.cells.get("pathParams")),
        queryParams: this.parseKeyValuePairs(row.cells.get("queryParams")),
        body: this.parseKeyValuePairs(row.cells.get("requestBody"))
      },
      response: {
        successStatusCode: this.parseStatusCode(row.cells.get("responseSuccess")) ?? 200,
        successDescription: this.extractResponseDescription(row.cells.get("responseSuccess")) ?? "Success",
        errorStatusCodes: this.parseErrorCodes(row.cells.get("responseError")),
        bodySchema: this.parseKeyValuePairs(row.cells.get("responseBody"))
      },
      assertions: [
        ...this.parseList(row.cells.get("assertions")),
        ...this.parseList(row.cells.get("validations"))
      ],
      cleanup: this.parseList(row.cells.get("cleanup")),
      references: {
        fsdFeature: fsdReference || row.worksheetName,
        sourceWorksheet: row.worksheetName,
        sourceRows: `Row ${row.rowNumber}`,
        apiSpecFile: ""
      },
      negativeScenarios: this.buildNegativeScenarios(method, endpoint, row.cells)
    };
  }

  // ─── Helpers ──────────────────────────────────────────────────────────────

  private buildId(worksheetName: string, ordinal: number): string {
    const slug = worksheetName
      .toUpperCase()
      .replace(/[^A-Z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");

    return `${slug || "API"}_${String(ordinal).padStart(3, "0")}`;
  }

  private buildTitle(method: string, endpoint: string, description: string): string {
    if (description && description.length > 0 && description.length <= 100) {
      return description;
    }

    return `${method} ${endpoint}`.trim();
  }

  private normalizeFeatureName(worksheetName: string): string {
    return worksheetName
      .replace(/[-_]+/g, " ")
      .split(" ")
      .map((word) => (word[0]?.toUpperCase() ?? "") + word.slice(1).toLowerCase())
      .join(" ")
      .trim();
  }

  private buildTags(method: string, cells: Map<ColumnSlot, string>, worksheetName: string): string[] {
    const tags: string[] = [method.toLowerCase()];
    const rawTags = cells.get("tags");

    if (rawTags) {
      tags.push(...rawTags.split(/[,;|]/g).map((tag) => tag.trim()).filter((tag) => tag.length > 0));
    }

    if (/auth|login|token|password|otp/i.test(worksheetName)) {
      tags.push("authentication");
    }

    if (/payment|transfer|fund/i.test(worksheetName)) {
      tags.push("payment");
    }

    if (cells.has("preconditions")) {
      tags.push("has-preconditions");
    }

    return Array.from(new Set(tags.map((tag) => tag.toLowerCase())));
  }

  private buildEnvironments(rawEnv: string | undefined): string[] {
    if (!rawEnv || rawEnv.length === 0) {
      return ["SIT", "UAT"];
    }

    return rawEnv
      .split(/[,;|/]/g)
      .map((env) => env.trim().toUpperCase())
      .filter((env) => env.length > 0);
  }

  private resolvePriority(rawPriority: string | undefined, method: string, endpoint: string): "P1" | "P2" | "P3" {
    if (rawPriority) {
      if (/p1|high|critical/i.test(rawPriority)) return "P1";
      if (/p2|medium|normal/i.test(rawPriority)) return "P2";
      if (/p3|low/i.test(rawPriority)) return "P3";
    }

    if (method === "POST" || method === "DELETE" || /auth|payment|token|transfer/i.test(endpoint)) {
      return "P1";
    }

    if (method === "PUT" || method === "PATCH") {
      return "P2";
    }

    return "P3";
  }

  private parseList(raw: string | undefined): string[] {
    if (!raw || raw.trim().length === 0) {
      return [];
    }

    return raw
      .split(/[\n;|]/)
      .map((item) => item.trim().replace(/^[-•*]\s*/, ""))
      .filter((item) => item.length > 0);
  }

  private parseKeyValuePairs(raw: string | undefined): Record<string, string> {
    if (!raw || raw.trim().length === 0) {
      return {};
    }

    const result: Record<string, string> = {};

    const lines = raw.split(/[\n;]/).map((line) => line.trim()).filter((line) => line.length > 0);

    for (const line of lines) {
      const separatorIndex = line.search(/[=:]/);
      if (separatorIndex > 0) {
        const key = line.slice(0, separatorIndex).trim();
        const value = line.slice(separatorIndex + 1).trim();
        if (key.length > 0) {
          result[key] = value;
        }
      } else {
        result[`field_${Object.keys(result).length + 1}`] = line;
      }
    }

    return result;
  }

  private parseStatusCode(raw: string | undefined): number | null {
    if (!raw) return null;
    const match = raw.match(/\b([2345]\d{2})\b/);
    return match ? parseInt(match[1] ?? "200", 10) : null;
  }

  private extractResponseDescription(raw: string | undefined): string | null {
    if (!raw) return null;
    return raw.replace(/^\d{3}\s*[-:–]?\s*/, "").trim() || null;
  }

  private parseErrorCodes(raw: string | undefined): Array<{ code: number; description: string }> {
    if (!raw || raw.trim().length === 0) return [];

    return raw
      .split(/[\n;|]/)
      .map((line) => line.trim())
      .filter((line) => /[45]\d{2}/.test(line))
      .map((line) => {
        const match = line.match(/([45]\d{2})\s*[-:–\s]+(.*)/);
        const code = parseInt(match?.[1] ?? "400", 10);
        const description = match?.[2]?.trim() || line;
        return { code, description };
      });
  }

  private buildNegativeScenarios(method: string, endpoint: string, cells: Map<ColumnSlot, string>): string[] {
    const scenarios: string[] = [];

    if (cells.has("validations") || cells.has("requestBody")) {
      scenarios.push("Send request with missing mandatory fields — expect 400 Bad Request");
    }

    if (/auth|token|login/i.test(endpoint) || cells.get("authentication") !== "None") {
      scenarios.push("Send request without authentication token — expect 401 Unauthorized");
    }

    if (method !== "GET") {
      scenarios.push("Send request with invalid data types — expect 422 Unprocessable Entity");
    }

    scenarios.push("Send request to non-existent resource — expect 404 Not Found");

    return scenarios;
  }

  private extractFromMap(sections: Map<string, string[]>, keywords: string[]): string {
    for (const keyword of keywords) {
      for (const [key, values] of sections.entries()) {
        if (key.includes(keyword) && values.length > 0) {
          return values.join("\n");
        }
      }
    }

    return "";
  }

  private rowToStrings(row: ExcelJS.Row): string[] {
    const values = row.values as Array<CellValue | undefined>;
    return values
      .slice(1)
      .map((value) => this.cellValueToText(value))
      .filter((value) => value.length > 0);
  }

  private resolveCellValue(worksheet: Worksheet, rowNumber: number, columnNumber: number): string {
    const cell = worksheet.getCell(rowNumber, columnNumber);
    const resolvedValue = cell.isMerged ? (cell.master?.value ?? cell.value) : cell.value;
    return this.cellValueToText(resolvedValue);
  }

  private cellValueToText(value: CellValue | undefined): string {
    if (value === undefined || value === null) return "";
    if (typeof value === "string") return value.trim();
    if (typeof value === "number" || typeof value === "boolean") return String(value);
    if (value instanceof Date) return value.toISOString();
    if (typeof value === "object" && "richText" in value && Array.isArray(value.richText)) {
      return value.richText.map((part) => part.text).join("").trim();
    }
    if (typeof value === "object" && "text" in value && typeof value.text === "string") {
      return value.text.trim();
    }
    if (typeof value === "object" && "result" in value) {
      return this.cellValueToText(value.result);
    }
    return "";
  }
}
