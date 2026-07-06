import { mkdtemp, readFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { describe, expect, it } from "vitest";
import { RequirementAnalysisReportWriterService } from "../../src/services/output/RequirementAnalysisReportWriterService.js";

describe("RequirementAnalysisReportWriterService", () => {
  it("writes one analysis report file per feature", async () => {
    const tempDir = await mkdtemp(join(tmpdir(), "fsd-analysis-"));

    try {
      const writer = new RequirementAnalysisReportWriterService();
      const paths = await writer.writeReports(
        [
          {
            featureName: "ETB Onboarding",
            missingRequirements: [],
            ambiguities: [],
            risks: ["Some risk"],
            missingValidations: [],
            securityConcerns: ["Some concern"],
            apiDependencies: ["POST /customers/onboarding"],
            uiDependencies: ["NRIC Field"],
            backendDependencies: ["OTP Service"],
            testability: ["Flow details are available"]
          }
        ],
        tempDir
      );

      expect(paths).toHaveLength(1);
      const content = await readFile(paths[0] as string, "utf-8");
      const parsed = JSON.parse(content) as { schemaVersion: string; report: { featureName: string } };
      expect(parsed.schemaVersion).toBe("1.0.0");
      expect(parsed.report.featureName).toBe("ETB Onboarding");
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });
});
