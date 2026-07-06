import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { RequirementAnalysisReport } from "../analysis/RequirementAnalysisService.js";

interface RequirementAnalysisDocument {
  schemaVersion: "1.0.0";
  generatedAt: string;
  report: RequirementAnalysisReport;
}

export class RequirementAnalysisReportWriterService {
  public async writeReports(reports: RequirementAnalysisReport[], outputDir: string): Promise<string[]> {
    const analysisDir = join(outputDir, "analysis");
    await mkdir(analysisDir, { recursive: true });

    const filePaths: string[] = [];
    const usedSlugs = new Map<string, number>();

    for (const report of reports) {
      const baseSlug = this.toFileSlug(report.featureName);
      const duplicateCount = usedSlugs.get(baseSlug) ?? 0;
      usedSlugs.set(baseSlug, duplicateCount + 1);
      const uniqueSlug = duplicateCount === 0 ? baseSlug : `${baseSlug}-${duplicateCount + 1}`;

      const document: RequirementAnalysisDocument = {
        schemaVersion: "1.0.0",
        generatedAt: new Date().toISOString(),
        report
      };

      const filePath = join(analysisDir, `${uniqueSlug}.analysis.json`);
      const markdownPath = join(analysisDir, `${uniqueSlug}.analysis.md`);
      await writeFile(filePath, JSON.stringify(document, null, 2), "utf-8");
      await writeFile(markdownPath, this.renderMarkdownReport(document), "utf-8");
      filePaths.push(filePath);
    }

    return filePaths;
  }

  private toFileSlug(value: string): string {
    const normalized = value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    return normalized.length > 0 ? normalized : "untitled-feature";
  }

  private renderMarkdownReport(document: RequirementAnalysisDocument): string {
    const { report, generatedAt, schemaVersion } = document;

    return [
      `# Requirement Analysis - ${report.featureName}`,
      "",
      `- Generated At: ${generatedAt}`,
      `- Schema Version: ${schemaVersion}`,
      "",
      this.renderSection("Missing Requirements", report.missingRequirements),
      this.renderSection("Ambiguities", report.ambiguities),
      this.renderSection("Risks", report.risks),
      this.renderSection("Missing Validations", report.missingValidations),
      this.renderSection("Security Concerns", report.securityConcerns),
      this.renderSection("API Dependencies", report.apiDependencies),
      this.renderSection("UI Dependencies", report.uiDependencies),
      this.renderSection("Backend Dependencies", report.backendDependencies),
      this.renderSection("Testability Notes", report.testability)
    ].join("\n");
  }

  private renderSection(title: string, items: string[]): string {
    const lines = items.length > 0 ? items.map((item) => `- ${item}`) : ["- None"];
    return [`## ${title}`, "", ...lines, ""].join("\n");
  }
}
