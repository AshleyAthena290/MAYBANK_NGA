import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { FeatureLayerClassificationReport } from "../classification/TestLayerClassifierService.js";

interface ClassificationDocument {
  schemaVersion: "1.0.0";
  generatedAt: string;
  report: FeatureLayerClassificationReport;
}

export class TestLayerClassificationWriterService {
  public async writeReports(reports: FeatureLayerClassificationReport[], outputDir: string): Promise<string[]> {
    const classificationDir = join(outputDir, "classification");
    await mkdir(classificationDir, { recursive: true });

    const filePaths: string[] = [];
    const usedSlugs = new Map<string, number>();

    for (const report of reports) {
      const baseSlug = this.toFileSlug(report.featureName);
      const duplicateCount = usedSlugs.get(baseSlug) ?? 0;
      usedSlugs.set(baseSlug, duplicateCount + 1);
      const uniqueSlug = duplicateCount === 0 ? baseSlug : `${baseSlug}-${duplicateCount + 1}`;

      const document: ClassificationDocument = {
        schemaVersion: "1.0.0",
        generatedAt: new Date().toISOString(),
        report
      };

      const filePath = join(classificationDir, `${uniqueSlug}.classification.json`);
      const markdownPath = join(classificationDir, `${uniqueSlug}.classification.md`);
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

  private renderMarkdownReport(document: ClassificationDocument): string {
    const { report, generatedAt, schemaVersion } = document;
    const classificationBlocks = report.classifications.length > 0
      ? report.classifications.map((classification) => {
          const layerLines = classification.layers.length > 0
            ? classification.layers.map((layer) => `- ${layer.layer}: ${layer.reason}`)
            : ["- No layers assigned"];

          return [
            `### Requirement: ${classification.requirement}`,
            "",
            ...layerLines,
            ""
          ].join("\n");
        })
      : ["- No classifications available", ""];

    return [
      `# Test Layer Classification - ${report.featureName}`,
      "",
      `- Generated At: ${generatedAt}`,
      `- Schema Version: ${schemaVersion}`,
      `- Total Requirements Classified: ${report.classifications.length}`,
      "",
      "## Classification Details",
      "",
      ...classificationBlocks
    ].join("\n");
  }
}
