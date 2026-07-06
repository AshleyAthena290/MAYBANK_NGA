import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { PlaywrightArtifact } from "../generation/PlaywrightGeneratorService.js";

interface PlaywrightArtifactManifest {
  schemaVersion: "1.0.0";
  generatedAt: string;
  artifacts: PlaywrightArtifact[];
}

export class PlaywrightArtifactManifestWriterService {
  public async writeManifest(artifacts: PlaywrightArtifact[], outputDir: string): Promise<string> {
    const rootDir = join(outputDir, "playwright");
    await mkdir(rootDir, { recursive: true });

    const manifestPath = join(rootDir, "artifacts.manifest.json");
    const manifest: PlaywrightArtifactManifest = {
      schemaVersion: "1.0.0",
      generatedAt: new Date().toISOString(),
      artifacts
    };

    await writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf-8");
    return manifestPath;
  }
}
