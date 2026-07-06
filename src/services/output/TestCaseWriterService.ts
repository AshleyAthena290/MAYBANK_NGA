import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { FeatureTestCaseBundle } from "../generation/TestCaseGeneratorService.js";

interface TestCaseDocument {
  schemaVersion: "1.0.0";
  generatedAt: string;
  bundle: FeatureTestCaseBundle;
}

export class TestCaseWriterService {
  public async writeBundles(bundles: FeatureTestCaseBundle[], outputDir: string): Promise<string[]> {
    const testCaseDir = join(outputDir, "test-cases");
    await mkdir(testCaseDir, { recursive: true });

    const filePaths: string[] = [];
    const usedSlugs = new Map<string, number>();

    for (const bundle of bundles) {
      const baseSlug = this.toFileSlug(bundle.featureName);
      const duplicateCount = usedSlugs.get(baseSlug) ?? 0;
      usedSlugs.set(baseSlug, duplicateCount + 1);
      const uniqueSlug = duplicateCount === 0 ? baseSlug : `${baseSlug}-${duplicateCount + 1}`;

      const document: TestCaseDocument = {
        schemaVersion: "1.0.0",
        generatedAt: new Date().toISOString(),
        bundle
      };

      const filePath = join(testCaseDir, `${uniqueSlug}.test-cases.json`);
      await writeFile(filePath, JSON.stringify(document, null, 2), "utf-8");
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
}
