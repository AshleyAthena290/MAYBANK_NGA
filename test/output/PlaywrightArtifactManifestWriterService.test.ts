import { mkdtemp, readFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { describe, expect, it } from "vitest";
import { PlaywrightArtifactManifestWriterService } from "../../src/services/output/PlaywrightArtifactManifestWriterService.js";

describe("PlaywrightArtifactManifestWriterService", () => {
  it("writes manifest file for generated playwright artifacts", async () => {
    const tempDir = await mkdtemp(join(tmpdir(), "fsd-pw-manifest-"));

    try {
      const writer = new PlaywrightArtifactManifestWriterService();
      const manifestPath = await writer.writeManifest(
        [
          {
            testFilePath: "playwright/tests/sample.spec.ts",
            pageObjectPath: "playwright/page-objects/sample.page.ts",
            fixturePath: "playwright/fixtures/base.fixture.ts",
            dataFilePath: "playwright/data/sample.json"
          }
        ],
        tempDir
      );

      const content = await readFile(manifestPath, "utf-8");
      const parsed = JSON.parse(content) as { schemaVersion: string; artifacts: Array<{ testFilePath: string }> };
      expect(parsed.schemaVersion).toBe("1.0.0");
      expect(parsed.artifacts[0]?.testFilePath).toBe("playwright/tests/sample.spec.ts");
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });
});
