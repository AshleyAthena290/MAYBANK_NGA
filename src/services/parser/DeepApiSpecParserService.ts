import ExcelJS, { type CellValue, type Worksheet } from "exceljs";

export interface ApiSpecField {
  name: string;
  parentField: string;
  type: string;
  length: string;
  mandatory: boolean;
  format: string;
  description: string;
  remark: string;
}

export interface DeepApiSpec {
  apiName: string;
  apiDescription: string;
  method: string;
  url: string;
  messageType: string;
  sourceWorksheet: string;
  requestHeaders: ApiSpecField[];
  requestBodyFields: ApiSpecField[];
  requestSample: string;
  responseFields: ApiSpecField[];
  responseSample: string;
}

export class DeepApiSpecParserService {
  public async parseSheet(inputPath: string, sheetName: string): Promise<DeepApiSpec> {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(inputPath);

    const worksheet = workbook.worksheets.find(
      (ws) => ws.name.toLowerCase() === sheetName.toLowerCase()
    );

    if (!worksheet) {
      const available = workbook.worksheets.map((ws) => ws.name).join(", ");
      throw new Error(`Sheet "${sheetName}" not found. Available sheets: ${available}`);
    }

    return this.parseWorksheet(worksheet);
  }

  public async listSheets(inputPath: string): Promise<string[]> {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(inputPath);
    return workbook.worksheets.map((ws) => ws.name);
  }

  private parseWorksheet(worksheet: Worksheet): DeepApiSpec {
    const rowData = this.readAllRows(worksheet);

    const spec: DeepApiSpec = {
      apiName: "",
      apiDescription: "",
      method: "",
      url: "",
      messageType: "JSON",
      sourceWorksheet: worksheet.name,
      requestHeaders: [],
      requestBodyFields: [],
      requestSample: "",
      responseFields: [],
      responseSample: ""
    };

    let currentSection = "";
    let currentSubSection = "";
    let fieldColumns: FieldColumnMap | null = null;
    let isReadingFields = false;

    for (const row of rowData) {
      const label = row.label.trim().toLowerCase();
      // positional values (preserves column alignment for table rows)
      const rawValues = row.rawValues;
      // deduplicated non-empty values (for metadata / sub-section detection)
      const uniqueValues = Array.from(new Set(rawValues.filter((v) => v.length > 0)));

      // ── Metadata rows ─────────────────────────────────────────────────────
      if (label === "api name") { spec.apiName = uniqueValues[0] ?? ""; continue; }
      if (label === "api description") { spec.apiDescription = uniqueValues[0] ?? ""; continue; }
      if (label === "method") { spec.method = (uniqueValues[0] ?? "").toUpperCase(); continue; }
      if (label === "url") { spec.url = uniqueValues[0] ?? ""; continue; }
      if (label === "message type") { spec.messageType = uniqueValues[0] ?? "JSON"; continue; }

      // ── Sample section labels ─────────────────────────────────────────────
      if (label === "request sample") {
        currentSection = "request-sample";
        isReadingFields = false;
        fieldColumns = null;
        const sample = uniqueValues[0] ?? "";
        if (sample) spec.requestSample = sample;
        continue;
      }
      if (label === "response sample") {
        currentSection = "response-sample";
        isReadingFields = false;
        fieldColumns = null;
        const sample = uniqueValues[0] ?? "";
        if (sample) spec.responseSample = sample;
        continue;
      }

      // ── Collect sample content ────────────────────────────────────────────
      if (currentSection === "response-sample" || currentSection === "request-sample") {
        const joined = uniqueValues[0] ?? "";
        if (joined && joined.startsWith("{")) {
          if (currentSection === "response-sample") spec.responseSample = joined;
          else spec.requestSample = joined;
        }
        continue;
      }

      // ── Request / Response section ────────────────────────────────────────
      if (label === "request" || label === "response") {
        // Enter new section when label changes
        if (currentSection !== label) {
          currentSection = label;
          currentSubSection = "";
          fieldColumns = null;
          isReadingFields = false;
        }

        if (uniqueValues.length === 0) continue;

        const firstValue = (uniqueValues[0] ?? "").toLowerCase().trim();

        // Sub-section keyword
        if (this.isSubSectionKeyword(firstValue)) {
          currentSubSection = firstValue;
          fieldColumns = null;
          isReadingFields = false;
          continue;
        }

        // Field column header row — use positional rawValues
        if (this.isFieldHeaderRow(uniqueValues)) {
          fieldColumns = this.buildFieldColumnMap(rawValues);
          isReadingFields = true;
          continue;
        }

        // Field data row — use positional rawValues with column map
        if (isReadingFields && fieldColumns) {
          const field = this.parseFieldRow(rawValues, fieldColumns);
          if (field) {
            if (currentSection === "request") {
              if (currentSubSection.includes("header")) {
                spec.requestHeaders.push(field);
              } else {
                spec.requestBodyFields.push(field);
              }
            } else {
              spec.responseFields.push(field);
            }
          }
        }

        continue;
      }
    }

    return spec;
  }

  private readAllRows(worksheet: Worksheet): Array<{ label: string; rawValues: string[] }> {
    const rows: Array<{ label: string; rawValues: string[] }> = [];

    worksheet.eachRow({ includeEmpty: false }, (row) => {
      const rawValues = row.values as Array<CellValue | undefined>;
      // Keep ALL values including empty strings to preserve column alignment
      const allValues = rawValues.slice(1).map((v) => this.cellToText(v));
      const label = allValues[0] ?? "";
      const rawData = allValues.slice(1); // everything after column A, positional
      rows.push({ label, rawValues: rawData });
    });

    return rows;
  }

  private isSubSectionKeyword(text: string): boolean {
    return (
      text === "http header" ||
      text === "http body" ||
      text === "no request body" ||
      text === "http headers" ||
      text === "request body"
    );
  }

  private isFieldHeaderRow(values: string[]): boolean {
    const lower = values.map((v) => v.toLowerCase());
    return (
      lower.includes("name") &&
      (lower.includes("type") || lower.includes("description"))
    );
  }

  private buildFieldColumnMap(values: string[]): FieldColumnMap {
    const map: FieldColumnMap = {
      name: -1, parentField: -1, type: -1, length: -1,
      mandatory: -1, format: -1, description: -1, remark: -1
    };

    values.forEach((value, index) => {
      const normalized = value.toLowerCase().replace(/\s+/g, " ").trim();
      if (normalized === "name") map.name = index;
      else if (normalized.includes("parent")) map.parentField = index;
      else if (normalized === "type") map.type = index;
      else if (normalized === "length") map.length = index;
      else if (normalized === "mandatory") map.mandatory = index;
      else if (normalized === "format") map.format = index;
      else if (normalized === "description" && map.description === -1) map.description = index;
      else if (normalized === "remark" && map.remark === -1) map.remark = index;
    });

    return map;
  }

  private parseFieldRow(values: string[], cols: FieldColumnMap): ApiSpecField | null {
    const name = cols.name >= 0 ? (values[cols.name] ?? "") : "";
    if (!name || name.toLowerCase() === "name" || name === "-" || name === "no request body") {
      return null;
    }

    return {
      name,
      parentField: cols.parentField >= 0 ? (values[cols.parentField] ?? "-") : "-",
      type: cols.type >= 0 ? (values[cols.type] ?? "String") : "String",
      length: cols.length >= 0 ? (values[cols.length] ?? "-") : "-",
      mandatory: cols.mandatory >= 0
        ? /^y(es)?$/i.test(values[cols.mandatory] ?? "")
        : false,
      format: cols.format >= 0 ? (values[cols.format] ?? "") : "",
      description: cols.description >= 0 ? (values[cols.description] ?? "") : "",
      remark: cols.remark >= 0 ? (values[cols.remark] ?? "") : ""
    };
  }

  private firstUnique(values: string[]): string {
    const unique = Array.from(new Set(values.filter((v) => v.length > 0)));
    return unique[0] ?? "";
  }

  private cellToText(value: CellValue | undefined): string {
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
      return this.cellToText(value.result);
    }
    return "";
  }
}

interface FieldColumnMap {
  name: number;
  parentField: number;
  type: number;
  length: number;
  mandatory: number;
  format: number;
  description: number;
  remark: number;
}
