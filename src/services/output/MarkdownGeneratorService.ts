import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { Feature } from "../../core/models/Feature.js";

export class MarkdownGeneratorService {
  public async generate(features: Feature[], outputDir: string): Promise<string[]> {
    const markdownDir = join(outputDir, "markdown");
    await mkdir(markdownDir, { recursive: true });

    const filePaths: string[] = [];
    const usedSlugs = new Map<string, number>();

    for (const feature of features) {
      const baseSlug = this.toFileSlug(feature.featureName);
      const duplicateCount = usedSlugs.get(baseSlug) ?? 0;
      usedSlugs.set(baseSlug, duplicateCount + 1);
      const uniqueSlug = duplicateCount === 0 ? baseSlug : `${baseSlug}-${duplicateCount + 1}`;

      const markdownContent = this.renderFeatureMarkdown(feature);
      const filePath = join(markdownDir, `${uniqueSlug}.md`);
      await writeFile(filePath, markdownContent, "utf-8");
      filePaths.push(filePath);
    }

    return filePaths;
  }

  private renderFeatureMarkdown(feature: Feature): string {
    const sections = [
      this.renderParagraphSection("Description", feature.description),
      this.renderListSection("Flow", feature.flow),
      this.renderListSection("UI Elements", feature.uiElements),
      this.renderListSection("Validation Rules", feature.validationRules),
      this.renderListSection("Business Rules", feature.businessRules),
      this.renderListSection("APIs", feature.apis),
      this.renderListSection("Dependencies", feature.dependencies),
      this.renderListSection("Error Messages", feature.errorMessages),
      this.renderListSection("Navigation", feature.navigation),
      this.renderListSection("Remarks", feature.remarks)
    ];

    return [
      `# Feature: ${feature.featureName}`,
      "",
      "## AI Reasoning Summary",
      "Use this feature specification as the single source for requirement extraction, risk analysis, and test generation.",
      "",
      ...sections,
      "",
      "## Prompting Hints",
      "- Keep requirement statements atomic.",
      "- Map validations to positive, negative, and boundary tests.",
      "- Use dependencies and APIs to derive integration scenarios."
    ].join("\n");
  }

  private renderParagraphSection(title: string, value: string): string {
    if (value.trim().length === 0) {
      return [`## ${title}`, "- Not specified"].join("\n");
    }

    return [`## ${title}`, value.trim()].join("\n");
  }

  private renderListSection(title: string, values: string[]): string {
    if (values.length === 0) {
      return [`## ${title}`, "- Not specified"].join("\n");
    }

    const items = values.map((value) => `- ${value.trim()}`);
    return [`## ${title}`, ...items].join("\n");
  }

  private toFileSlug(value: string): string {
    const normalized = value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    return normalized.length > 0 ? normalized : "untitled-feature";
  }
}
