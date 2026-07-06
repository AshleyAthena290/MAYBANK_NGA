import { mkdtemp, readFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { describe, expect, it } from "vitest";
import { PlaywrightGeneratorService } from "../../src/services/generation/PlaywrightGeneratorService.js";
import type { FeatureTestCaseBundle } from "../../src/services/generation/TestCaseGeneratorService.js";

describe("PlaywrightGeneratorService", () => {
  it("generates playwright artifacts for automation candidate test cases", async () => {
    const tempDir = await mkdtemp(join(tmpdir(), "fsd-pw-"));

    try {
      const service = new PlaywrightGeneratorService();
      const bundles: FeatureTestCaseBundle[] = [
        {
          featureName: "ETB Onboarding",
          testCases: [
            {
              testCaseId: "ETB_TC_001",
              featureName: "ETB Onboarding",
              requirement: "Submit onboarding form",
              objective: "Verify onboarding form submission",
              preconditions: ["User logged in"],
              testData: ["Valid NRIC"],
              steps: ["Open screen", "Submit form"],
              expectedResult: "Submission succeeds",
              priority: "P1",
              layer: "UI",
              automationCandidate: true,
              automationType: "ui",
              dependencies: ["OTP Service"],
              negativeScenarios: ["Invalid NRIC"],
              edgeCases: ["Boundary NRIC value"]
            }
          ]
        }
      ];

      const artifacts = await service.generateAll(bundles, tempDir);

      expect(artifacts).toHaveLength(1);
      expect(artifacts[0]?.testFilePath).toContain("playwright");
      expect(artifacts[0]?.fixturePath).toBeDefined();
      expect(artifacts[0]?.dataFilePath).toBeDefined();

      const testContent = await readFile(artifacts[0]?.testFilePath as string, "utf-8");
      expect(testContent).toContain("test(");
      expect(testContent).toContain("Submit onboarding form");
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });
});
