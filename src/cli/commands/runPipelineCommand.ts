import { z } from "zod";
import { access } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import { createPipelineContext } from "../../core/context/PipelineContext.js";
import { PipelineOrchestrator } from "../../core/pipeline/PipelineOrchestrator.js";
import { WorkbookParserService } from "../../services/parser/WorkbookParserService.js";
import { RequirementAnalysisService } from "../../services/analysis/RequirementAnalysisService.js";
import { TestLayerClassifierService } from "../../services/classification/TestLayerClassifierService.js";
import { TestCaseGeneratorService } from "../../services/generation/TestCaseGeneratorService.js";
import { PlaywrightGeneratorService } from "../../services/generation/PlaywrightGeneratorService.js";
import { MarkdownGeneratorService } from "../../services/output/MarkdownGeneratorService.js";
import { JsonGeneratorService } from "../../services/output/JsonGeneratorService.js";
import { RequirementAnalysisReportWriterService } from "../../services/output/RequirementAnalysisReportWriterService.js";
import { TestLayerClassificationWriterService } from "../../services/output/TestLayerClassificationWriterService.js";
import { TestCaseWriterService } from "../../services/output/TestCaseWriterService.js";
import { PlaywrightArtifactManifestWriterService } from "../../services/output/PlaywrightArtifactManifestWriterService.js";
import type { AppLogger } from "../../services/logger.js";

const RunCommandOptionsSchema = z.object({
  input: z.string().min(1),
  outDir: z.string().min(1)
});

export interface RunCommandOptions {
  input: string;
  outDir: string;
}

class ParseWorkbookStage {
  public readonly name = "parse-workbook";

  public constructor(private readonly parser: WorkbookParserService) {}

  public async execute(context: ReturnType<typeof createPipelineContext>): Promise<void> {
    context.features = await this.parser.parseWorkbook(context.inputPath);
    context.featureQualityReports = this.parser.getFeatureQualityReports();
  }
}

class GenerateMarkdownStage {
  public readonly name = "generate-markdown";

  public constructor(private readonly markdownGenerator: MarkdownGeneratorService) {}

  public async execute(context: ReturnType<typeof createPipelineContext>): Promise<void> {
    context.markdownPaths = await this.markdownGenerator.generate(context.features, context.outputDir);
  }
}

class GenerateJsonStage {
  public readonly name = "generate-json";

  public constructor(private readonly jsonGenerator: JsonGeneratorService) {}

  public async execute(context: ReturnType<typeof createPipelineContext>): Promise<void> {
    context.jsonPaths = await this.jsonGenerator.generate(context.features, context.outputDir);
  }
}

class RequirementAnalysisStage {
  public readonly name = "requirement-analysis";

  public constructor(
    private readonly requirementAnalysisService: RequirementAnalysisService,
    private readonly reportWriter: RequirementAnalysisReportWriterService
  ) {}

  public async execute(context: ReturnType<typeof createPipelineContext>): Promise<void> {
    context.requirementAnalysisReports = this.requirementAnalysisService.analyzeAll(context.features);
    context.requirementAnalysisPaths = await this.reportWriter.writeReports(
      context.requirementAnalysisReports,
      context.outputDir
    );
  }
}

class TestLayerClassificationStage {
  public readonly name = "test-layer-classification";

  public constructor(
    private readonly classifierService: TestLayerClassifierService,
    private readonly writerService: TestLayerClassificationWriterService
  ) {}

  public async execute(context: ReturnType<typeof createPipelineContext>): Promise<void> {
    context.testLayerClassificationReports = this.classifierService.classifyAll(context.features);
    context.testLayerClassificationPaths = await this.writerService.writeReports(
      context.testLayerClassificationReports,
      context.outputDir
    );
  }
}

class TestCaseGenerationStage {
  public readonly name = "test-case-generation";

  public constructor(
    private readonly testCaseGeneratorService: TestCaseGeneratorService,
    private readonly testCaseWriterService: TestCaseWriterService
  ) {}

  public async execute(context: ReturnType<typeof createPipelineContext>): Promise<void> {
    context.testCaseBundles = this.testCaseGeneratorService.generateAll(
      context.features,
      context.testLayerClassificationReports
    );
    context.testCasePaths = await this.testCaseWriterService.writeBundles(context.testCaseBundles, context.outputDir);
  }
}

class PlaywrightGenerationStage {
  public readonly name = "playwright-generation";

  public constructor(
    private readonly playwrightGeneratorService: PlaywrightGeneratorService,
    private readonly manifestWriterService: PlaywrightArtifactManifestWriterService
  ) {}

  public async execute(context: ReturnType<typeof createPipelineContext>): Promise<void> {
    context.playwrightArtifacts = await this.playwrightGeneratorService.generateAll(
      context.testCaseBundles,
      context.outputDir
    );
    context.playwrightManifestPath = await this.manifestWriterService.writeManifest(
      context.playwrightArtifacts,
      context.outputDir
    );
  }
}

export function createRunPipelineCommand(logger: AppLogger) {
  return async (rawOptions: RunCommandOptions): Promise<void> => {
    const options = RunCommandOptionsSchema.parse(rawOptions);
    await access(options.input);

    const outputNamespace = deriveOutputNamespace(options.input);
    const scopedOutputDir = join(options.outDir, outputNamespace);
    const context = createPipelineContext(options.input, scopedOutputDir);
    const orchestrator = new PipelineOrchestrator(
      [
        new ParseWorkbookStage(new WorkbookParserService()),
        new GenerateMarkdownStage(new MarkdownGeneratorService()),
        new GenerateJsonStage(new JsonGeneratorService()),
        new RequirementAnalysisStage(
          new RequirementAnalysisService(),
          new RequirementAnalysisReportWriterService()
        ),
        new TestLayerClassificationStage(
          new TestLayerClassifierService(),
          new TestLayerClassificationWriterService()
        ),
        new TestCaseGenerationStage(
          new TestCaseGeneratorService(),
          new TestCaseWriterService()
        ),
        new PlaywrightGenerationStage(
          new PlaywrightGeneratorService(),
          new PlaywrightArtifactManifestWriterService()
        )
      ],
      logger
    );

    await orchestrator.run(context);

    logger.info(
      {
        featuresDetected: context.features.length,
        incompleteFeatures: context.featureQualityReports.filter((report) => !report.isComplete).length,
        markdownDocumentsGenerated: context.markdownPaths.length,
        jsonDocumentsGenerated: context.jsonPaths.length,
        requirementAnalysisGenerated: context.requirementAnalysisPaths.length,
        testLayerClassificationsGenerated: context.testLayerClassificationPaths.length,
        testCasesGenerated: context.testCaseBundles.reduce((total, bundle) => total + bundle.testCases.length, 0),
        playwrightArtifactsGenerated: context.playwrightArtifacts.length,
        playwrightManifestPath: context.playwrightManifestPath,
        outputNamespace,
        outputDir: context.outputDir
      },
      "Pipeline bootstrap completed"
    );
  };
}

function deriveOutputNamespace(inputPath: string): string {
  const fileName = basename(inputPath);
  const withoutExtension = fileName.slice(0, Math.max(0, fileName.length - extname(fileName).length));
  const normalized = withoutExtension
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalized.length > 0 ? normalized : "fsd-run";
}
