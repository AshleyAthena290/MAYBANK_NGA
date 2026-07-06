import { mkdtemp, readFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { describe, expect, it } from "vitest";
import { JsonGeneratorService } from "../../src/services/output/JsonGeneratorService.js";
import type { Feature } from "../../src/core/models/Feature.js";

describe("JsonGeneratorService", () => {
  it("generates one RAG-ready json document per feature", async () => {
    const tempDir = await mkdtemp(join(tmpdir(), "fsd-json-"));

    try {
      const generator = new JsonGeneratorService();
      const features: Feature[] = [
        {
          featureName: "ETB Onboarding",
          description: "Customer onboarding journey",
          flow: ["Open app", "Submit onboarding form"],
          uiElements: ["NRIC Field", "Submit Button"],
          validationRules: ["NRIC is mandatory"],
          businessRules: ["Only Malaysian customer is eligible"],
          apis: ["POST /customers/onboarding"],
          dependencies: ["OTP Service"],
          errorMessages: ["Invalid NRIC"],
          navigation: ["Home > Onboarding > Review"],
          remarks: ["Requires compliance sign-off"]
        }
      ];

      const filePaths = await generator.generate(features, tempDir);
      expect(filePaths).toHaveLength(1);

      const content = await readFile(filePaths[0] as string, "utf-8");
      const parsed = JSON.parse(content) as {
        schemaVersion: string;
        featureName: string;
        sourceType: string;
        content: Feature;
        chunks: Array<{ section: string; content: string; tokensHint: number }>;
        retrievalHints: { hasApis: boolean; hasValidations: boolean; hasBusinessRules: boolean; keywords: string[] };
      };

      expect(parsed.schemaVersion).toBe("1.0.0");
      expect(parsed.featureName).toBe("ETB Onboarding");
      expect(parsed.sourceType).toBe("FSD");
      expect(parsed.content.apis).toContain("POST /customers/onboarding");
      expect(parsed.chunks.some((chunk) => chunk.section === "validationRules")).toBe(true);
      expect(parsed.retrievalHints.hasApis).toBe(true);
      expect(parsed.retrievalHints.keywords.length).toBeGreaterThan(0);
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });

  it("supports empty sections without failing document generation", async () => {
    const tempDir = await mkdtemp(join(tmpdir(), "fsd-json-empty-"));

    try {
      const generator = new JsonGeneratorService();
      const features: Feature[] = [
        {
          featureName: "Feature X",
          description: "",
          flow: [],
          uiElements: [],
          validationRules: [],
          businessRules: [],
          apis: [],
          dependencies: [],
          errorMessages: [],
          navigation: [],
          remarks: []
        }
      ];

      const filePaths = await generator.generate(features, tempDir);
      const content = await readFile(filePaths[0] as string, "utf-8");
      const parsed = JSON.parse(content) as {
        chunks: Array<{ section: string; content: string }>;
        retrievalHints: { hasApis: boolean; hasValidations: boolean; hasBusinessRules: boolean };
      };

      expect(parsed.chunks).toEqual([]);
      expect(parsed.retrievalHints.hasApis).toBe(false);
      expect(parsed.retrievalHints.hasValidations).toBe(false);
      expect(parsed.retrievalHints.hasBusinessRules).toBe(false);
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });
});
