import { mkdtemp, readFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { describe, expect, it } from "vitest";
import { MarkdownGeneratorService } from "../../src/services/output/MarkdownGeneratorService.js";
import type { Feature } from "../../src/core/models/Feature.js";

describe("MarkdownGeneratorService", () => {
  it("generates one markdown file per feature with preserved hierarchy", async () => {
    const tempDir = await mkdtemp(join(tmpdir(), "fsd-md-"));

    try {
      const generator = new MarkdownGeneratorService();
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
      expect(content).toContain("# Feature: ETB Onboarding");
      expect(content).toContain("## Description");
      expect(content).toContain("## Flow");
      expect(content).toContain("- Open app");
      expect(content).toContain("## APIs");
      expect(content).toContain("POST /customers/onboarding");
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });

  it("writes not specified for empty sections", async () => {
    const tempDir = await mkdtemp(join(tmpdir(), "fsd-md-empty-"));

    try {
      const generator = new MarkdownGeneratorService();
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

      expect(content).toContain("## Description");
      expect(content).toContain("- Not specified");
      expect(content).toContain("## Remarks");
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });
});
