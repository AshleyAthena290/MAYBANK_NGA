import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { Feature } from "../../core/models/Feature.js";

interface FeatureJsonChunk {
  section: keyof Feature;
  content: string;
  tokensHint: number;
}

interface FeatureJsonDocument {
  schemaVersion: "1.0.0";
  generatedAt: string;
  featureId: string;
  featureName: string;
  sourceType: "FSD";
  content: Feature;
  chunks: FeatureJsonChunk[];
  retrievalHints: {
    keywords: string[];
    hasApis: boolean;
    hasValidations: boolean;
    hasBusinessRules: boolean;
  };
}

export class JsonGeneratorService {
  public async generate(features: Feature[], outputDir: string): Promise<string[]> {
    const jsonDir = join(outputDir, "json");
    await mkdir(jsonDir, { recursive: true });

    const filePaths: string[] = [];
    const usedSlugs = new Map<string, number>();

    for (const feature of features) {
      const baseSlug = this.toFileSlug(feature.featureName);
      const duplicateCount = usedSlugs.get(baseSlug) ?? 0;
      usedSlugs.set(baseSlug, duplicateCount + 1);
      const uniqueSlug = duplicateCount === 0 ? baseSlug : `${baseSlug}-${duplicateCount + 1}`;

      const document = this.toFeatureJsonDocument(feature, uniqueSlug);
      const filePath = join(jsonDir, `${uniqueSlug}.json`);
      await writeFile(filePath, JSON.stringify(document, null, 2), "utf-8");
      filePaths.push(filePath);
    }

    return filePaths;
  }

  private toFeatureJsonDocument(feature: Feature, featureId: string): FeatureJsonDocument {
    const chunks = this.buildChunks(feature);

    return {
      schemaVersion: "1.0.0",
      generatedAt: new Date().toISOString(),
      featureId,
      featureName: feature.featureName,
      sourceType: "FSD",
      content: feature,
      chunks,
      retrievalHints: {
        keywords: this.buildKeywords(feature),
        hasApis: feature.apis.length > 0,
        hasValidations: feature.validationRules.length > 0,
        hasBusinessRules: feature.businessRules.length > 0
      }
    };
  }

  private buildChunks(feature: Feature): FeatureJsonChunk[] {
    const keys: Array<keyof Feature> = [
      "description",
      "flow",
      "uiElements",
      "validationRules",
      "businessRules",
      "apis",
      "dependencies",
      "errorMessages",
      "navigation",
      "remarks"
    ];

    return keys
      .map((key) => {
        const value = feature[key];
        const content = typeof value === "string" ? value : value.join("\n");
        return {
          section: key,
          content: content.trim(),
          tokensHint: this.estimateTokens(content)
        };
      })
      .filter((chunk) => chunk.content.length > 0);
  }

  private estimateTokens(content: string): number {
    const words = content.trim().split(/\s+/).filter((word) => word.length > 0);
    return Math.ceil(words.length * 1.2);
  }

  private buildKeywords(feature: Feature): string[] {
    const values = [
      feature.featureName,
      ...feature.uiElements,
      ...feature.validationRules,
      ...feature.businessRules,
      ...feature.apis,
      ...feature.dependencies,
      ...feature.navigation
    ];

    const keywords = values
      .flatMap((value) => value.toLowerCase().split(/[^a-z0-9]+/))
      .map((value) => value.trim())
      .filter((value) => value.length >= 3);

    return Array.from(new Set(keywords));
  }

  private toFileSlug(value: string): string {
    const normalized = value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    return normalized.length > 0 ? normalized : "untitled-feature";
  }
}
