import { z } from "zod";
import { access, mkdir } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import { DeepApiSpecParserService } from "../../services/parser/DeepApiSpecParserService.js";
import { ComprehensiveApiYamlGeneratorService } from "../../services/output/ComprehensiveApiYamlGeneratorService.js";
import type { AppLogger } from "../../services/logger.js";

const ApiSpecSheetCommandOptionsSchema = z.object({
  input: z.string().min(1),
  sheet: z.string().min(1),
  outDir: z.string().min(1)
});

export interface ApiSpecSheetCommandOptions {
  input: string;
  sheet: string;
  outDir: string;
}

export function createApiSpecSheetCommand(logger: AppLogger) {
  return async (rawOptions: ApiSpecSheetCommandOptions): Promise<void> => {
    const options = ApiSpecSheetCommandOptionsSchema.parse(rawOptions);
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

    logger.info(
      { inputFile: sourceFileName, sheet: options.sheet, outputDir: scopedOutputDir },
      "Starting deep API spec sheet parsing"
    );

    const parser = new DeepApiSpecParserService();

    let spec;
    try {
      spec = await parser.parseSheet(options.input, options.sheet);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      logger.error({ message }, "Failed to parse sheet");

      const available = await parser.listSheets(options.input);
      logger.info({ availableSheets: available }, "Available sheets in workbook");
      return;
    }

    logger.info(
      {
        apiName: spec.apiName,
        method: spec.method,
        url: spec.url,
        requestHeaders: spec.requestHeaders.length,
        responseFields: spec.responseFields.length
      },
      "Sheet parsed successfully"
    );

    const generator = new ComprehensiveApiYamlGeneratorService();
    const yamlPath = await generator.generate(spec, scopedOutputDir, sourceFileName);

    logger.info(
      {
        yamlFile: yamlPath,
        outputNamespace,
        sheet: options.sheet
      },
      "Comprehensive YAML generated"
    );
  };
}
