import { z } from "zod";
import { access, mkdir } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import { ApiSpecParserService } from "../../services/parser/ApiSpecParserService.js";
import { ApiSpecYamlGeneratorService } from "../../services/output/ApiSpecYamlGeneratorService.js";
import type { AppLogger } from "../../services/logger.js";

const ApiSpecCommandOptionsSchema = z.object({
  input: z.string().min(1),
  outDir: z.string().min(1)
});

export interface ApiSpecCommandOptions {
  input: string;
  outDir: string;
}

export function createApiSpecCommand(logger: AppLogger) {
  return async (rawOptions: ApiSpecCommandOptions): Promise<void> => {
    const options = ApiSpecCommandOptionsSchema.parse(rawOptions);
    await access(options.input);

    const sourceFileName = basename(options.input);
    const nameWithoutExt = sourceFileName.slice(
      0,
      Math.max(0, sourceFileName.length - extname(sourceFileName).length)
    );
    const outputNamespace = nameWithoutExt
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "api-spec";

    const scopedOutputDir = join(options.outDir, outputNamespace);
    await mkdir(scopedOutputDir, { recursive: true });

    logger.info({ inputFile: sourceFileName, outputDir: scopedOutputDir }, "Starting API spec parsing");

    const parser = new ApiSpecParserService();
    const scenarios = await parser.parseWorkbook(options.input);

    logger.info({ scenariosFound: scenarios.length }, "Workbook parsed");

    if (scenarios.length === 0) {
      logger.warn("No API scenarios detected in workbook. Check that sheets contain Method/Endpoint columns or section headers.");
      return;
    }

    const generator = new ApiSpecYamlGeneratorService();

    const [yamlPaths, indexPath] = await Promise.all([
      generator.generate(scenarios, scopedOutputDir, options.input),
      generator.generateIndex(scenarios, scopedOutputDir, options.input)
    ]);

    logger.info(
      {
        scenariosGenerated: yamlPaths.length,
        indexFile: indexPath,
        outputNamespace,
        outputDir: scopedOutputDir
      },
      "API spec YAML generation completed"
    );
  };
}
