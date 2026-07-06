import ExcelJS, { type CellValue, type Worksheet } from "exceljs";
import {
  buildFeatureQualityReport,
  parseFeature,
  type Feature,
  type FeatureQualityReport
} from "../../core/models/Feature.js";

interface StructuralRow {
  rowNumber: number;
  values: string[];
  combined: string;
  hasMergedCell: boolean;
}

interface SectionData {
  heading: string;
  lines: string[];
}

const EMPTY_FEATURE_NAME = "Untitled Feature";

export class WorkbookParserService {
  private featureQualityReports: FeatureQualityReport[] = [];

  public getFeatureQualityReports(): FeatureQualityReport[] {
    return [...this.featureQualityReports];
  }

  /**
   * Parses workbook using structural signals (sections, merged cells, and heading semantics)
   * instead of flat row-by-row extraction.
   */
  public async parseWorkbook(inputPath: string): Promise<Feature[]> {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(inputPath);

    const parsedFeatures = workbook.worksheets
      .map((worksheet) => this.extractFeatureFromWorksheet(worksheet))
      .filter((feature): feature is Feature => feature !== null)
      .map((feature) => parseFeature(feature));

    this.featureQualityReports = parsedFeatures.map((feature) => buildFeatureQualityReport(feature));

    return parsedFeatures;
  }

  private extractFeatureFromWorksheet(worksheet: Worksheet): Feature | null {
    if (worksheet.rowCount === 0 || worksheet.actualRowCount === 0) {
      return null;
    }

    const structuralRows = this.buildStructuralRows(worksheet);
    const nonBlankRows = structuralRows.filter((row) => row.combined.length > 0);

    if (nonBlankRows.length === 0) {
      return null;
    }

    const sections = this.detectSections(nonBlankRows);
    const featureName = this.detectFeatureName(worksheet.name, sections, nonBlankRows);

    return {
      featureName,
      description: this.collectSingleText(sections, ["description", "overview", "objective", "scope"]),
      flow: this.collectLines(sections, ["flow", "process flow", "workflow", "steps"]),
      uiElements: this.collectLines(sections, ["ui", "screen", "field", "component", "ui element"]),
      validationRules: this.collectLines(sections, ["validation", "mandatory", "constraint", "rule"]),
      businessRules: this.collectLines(sections, ["business rule", "business", "policy"]),
      apis: this.collectLines(sections, ["api", "apis", "endpoint", "service", "integration", "interface"]),
      dependencies: this.collectLines(sections, ["dependency", "dependencies", "dependent", "prerequisite", "assumption"]),
      errorMessages: this.collectLines(sections, ["error", "warning", "exception", "message"]),
      navigation: this.collectLines(sections, ["navigation", "journey", "redirect", "route", "menu"]),
      remarks: this.collectLines(sections, ["remark", "remarks", "note", "comment"])
    };
  }

  private buildStructuralRows(worksheet: Worksheet): StructuralRow[] {
    const rows: StructuralRow[] = [];

    worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
      const rowValues = row.values as Array<CellValue | undefined>;
      const hasMergedCell = this.rowContainsMergedCell(worksheet, rowNumber, rowValues.length);
      const values = this.deduplicate(
        rowValues
        .slice(1)
        .map((value, index) => {
          const resolvedValue = hasMergedCell ? this.resolveMergedCellValue(worksheet, rowNumber, index + 1, value) : value;
          return this.cellValueToText(resolvedValue);
        })
        .filter((value) => value.length > 0)
      );

      rows.push({
        rowNumber,
        values,
        combined: values.join(" | "),
        hasMergedCell
      });
    });

    return rows;
  }

  private detectSections(rows: StructuralRow[]): SectionData[] {
    const sections: SectionData[] = [];
    let activeSection: SectionData | null = null;

    for (const row of rows) {
      if (this.isLikelySectionHeading(row)) {
        const heading = this.normalizeHeading(row.values[0] ?? row.combined);
        activeSection = {
          heading,
          lines: []
        };
        sections.push(activeSection);

        if (row.values.length > 1) {
          activeSection.lines.push(row.values.slice(1).join(" | "));
        }
        continue;
      }

      if (activeSection === null) {
        activeSection = {
          heading: "general",
          lines: []
        };
        sections.push(activeSection);
      }

      const normalizedLine = this.normalizeLine(row.combined);
      if (normalizedLine.length > 0) {
        activeSection.lines.push(normalizedLine);
      }
    }

    return sections.map((section) => ({
      heading: section.heading,
      lines: this.deduplicate(section.lines.filter((line) => line.length > 0))
    }));
  }

  private detectFeatureName(worksheetName: string, sections: SectionData[], rows: StructuralRow[]): string {
    const titleSection = sections.find((section) => this.matchesKeywords(section.heading, ["feature", "module", "title", "name"]));

    if (titleSection?.lines.length) {
      const titleLine = titleSection.lines[0];
      if (titleLine) {
        return this.cleanFeatureName(titleLine);
      }
    }

    const firstMeaningful = rows.find((row) => row.combined.length > 0)?.combined;
    if (firstMeaningful && firstMeaningful.length > 0) {
      return this.cleanFeatureName(firstMeaningful);
    }

    return worksheetName?.trim().length > 0 ? worksheetName.trim() : EMPTY_FEATURE_NAME;
  }

  private collectLines(sections: SectionData[], keywords: string[]): string[] {
    const targeted = sections
      .filter((section) => this.matchesKeywords(section.heading, keywords))
      .flatMap((section) => section.lines);

    if (targeted.length > 0) {
      return this.deduplicate(targeted.map((line) => this.normalizeLine(line)).filter((line) => line.length > 0));
    }

    const inferred = sections
      .flatMap((section) => section.lines)
      .filter((line) => this.matchesInlineSectionPattern(line, keywords));

    return this.deduplicate(inferred.map((line) => this.normalizeLine(line)).filter((line) => line.length > 0));
  }

  private collectSingleText(sections: SectionData[], keywords: string[]): string {
    const lines = this.collectLines(sections, keywords);
    return lines.length > 0 ? lines.join(" ") : "";
  }

  private isLikelySectionHeading(row: StructuralRow): boolean {
    if (row.values.length === 0) {
      return false;
    }

    const firstRawValue = row.values[0];
    if (!firstRawValue) {
      return false;
    }

    const firstValue = this.normalizeHeading(firstRawValue);

    if (firstValue.length === 0) {
      return false;
    }

    if (row.values.length === 1 && firstValue.length <= 60 && /[:：]$/.test(firstRawValue)) {
      return true;
    }

    if (row.hasMergedCell && row.values.length === 1 && firstValue.length <= 100) {
      return true;
    }

    if (this.looksLikeListItem(firstRawValue)) {
      return false;
    }

    return this.matchesKeywords(firstValue, [
      "feature",
      "description",
      "overview",
      "flow",
      "workflow",
      "ui",
      "screen",
      "validation",
      "business",
      "rule",
      "api",
      "apis",
      "dependency",
      "dependencies",
      "error",
      "navigation",
      "remark",
      "remarks",
      "note"
    ]);
  }

  private normalizeHeading(value: string): string {
    return value.replace(/[:：]/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
  }

  private normalizeLine(value: string): string {
    return value.replace(/\s+/g, " ").trim();
  }

  private matchesKeywords(text: string, keywords: string[]): boolean {
    const normalized = this.normalizeHeading(text);

    return keywords.some((keyword) => {
      const normalizedKeyword = keyword.toLowerCase().trim();
      if (normalizedKeyword.length === 0) {
        return false;
      }

      const escaped = normalizedKeyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
      const pattern = new RegExp(`(^|\\b)${escaped}(\\b|$)`, "i");
      return pattern.test(normalized);
    });
  }

  private cleanFeatureName(value: string): string {
    const cleaned = value
      .replace(/^feature\s*name\s*[:：-]?\s*/i, "")
      .replace(/^feature\s*[:：-]?\s*/i, "")
      .replace(/^module\s*[:：-]?\s*/i, "")
      .trim();

    const firstToken = cleaned
      .split("|")
      .map((token) => token.trim())
      .find((token) => token.length > 0);

    return firstToken && firstToken.length > 0 ? firstToken : EMPTY_FEATURE_NAME;
  }

  private matchesInlineSectionPattern(line: string, keywords: string[]): boolean {
    const normalized = this.normalizeHeading(line);
    return keywords.some((keyword) => normalized.startsWith(keyword.toLowerCase()));
  }

  private looksLikeListItem(value: string): boolean {
    const trimmed = value.trim();
    return /^(\d+[.)-]\s+|[-*•]\s+)/.test(trimmed);
  }

  private rowContainsMergedCell(worksheet: Worksheet, rowNumber: number, maxColumns: number): boolean {
    for (let column = 1; column <= maxColumns; column += 1) {
      const cell = worksheet.getCell(rowNumber, column);
      if (cell.isMerged) {
        return true;
      }
    }

    return false;
  }

  private resolveMergedCellValue(
    worksheet: Worksheet,
    rowNumber: number,
    columnNumber: number,
    fallbackValue: CellValue | undefined
  ): CellValue | undefined {
    const cell = worksheet.getCell(rowNumber, columnNumber);
    if (!cell.isMerged) {
      return fallbackValue;
    }

    return cell.master?.value ?? fallbackValue;
  }

  private cellValueToText(value: CellValue | undefined): string {
    if (value === undefined || value === null) {
      return "";
    }

    if (typeof value === "string") {
      return value.trim();
    }

    if (typeof value === "number" || typeof value === "boolean") {
      return String(value).trim();
    }

    if (value instanceof Date) {
      return value.toISOString();
    }

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

  private deduplicate(items: string[]): string[] {
    return Array.from(new Set(items));
  }
}
