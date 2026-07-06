import { mkdtemp, readFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { describe, expect, it } from "vitest";
import { TestLayerClassificationWriterService } from "../../src/services/output/TestLayerClassificationWriterService.js";

describe("TestLayerClassificationWriterService", () => {
  it("writes one classification artifact per feature", async () => {
    const tempDir = await mkdtemp(join(tmpdir(), "fsd-classification-"));

    try {
      const writer = new TestLayerClassificationWriterService();
      const paths = await writer.writeReports(
        [
          {
            featureName: "ETB Onboarding",
            classifications: [
              {
                requirement: "Submit onboarding form",
                layers: [
                  {
                    layer: "UI",
                    reason: "Requirement references end-user interface behavior."
                  },
                  {
                    layer: "AutomationCandidate",
                    reason: "Requirement has deterministic assertions suitable for automation."
                  }
                ]
              }
            ]
          }
        ],
        tempDir
      );

      expect(paths).toHaveLength(1);
      const content = await readFile(paths[0] as string, "utf-8");
      const parsed = JSON.parse(content) as {
        schemaVersion: string;
        report: { featureName: string; classifications: Array<{ requirement: string }> };
      };

      expect(parsed.schemaVersion).toBe("1.0.0");
      expect(parsed.report.featureName).toBe("ETB Onboarding");
      expect(parsed.report.classifications[0]?.requirement).toBe("Submit onboarding form");
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });
});
