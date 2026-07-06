import type { Feature } from "../models/Feature.js";
import type { FeatureQualityReport } from "../models/Feature.js";
import type { RequirementAnalysisReport } from "../../services/analysis/RequirementAnalysisService.js";
import type { FeatureLayerClassificationReport } from "../../services/classification/TestLayerClassifierService.js";
import type { FeatureTestCaseBundle } from "../../services/generation/TestCaseGeneratorService.js";
import type { PlaywrightArtifact } from "../../services/generation/PlaywrightGeneratorService.js";

export interface PipelineContext {
  inputPath: string;
  outputDir: string;
  features: Feature[];
  featureQualityReports: FeatureQualityReport[];
  requirementAnalysisReports: RequirementAnalysisReport[];
  testLayerClassificationReports: FeatureLayerClassificationReport[];
  testCaseBundles: FeatureTestCaseBundle[];
  playwrightArtifacts: PlaywrightArtifact[];
  markdownPaths: string[];
  jsonPaths: string[];
  requirementAnalysisPaths: string[];
  testLayerClassificationPaths: string[];
  testCasePaths: string[];
  playwrightManifestPath: string;
}

export function createPipelineContext(inputPath: string, outputDir: string): PipelineContext {
  return {
    inputPath,
    outputDir,
    features: [],
    featureQualityReports: [],
    requirementAnalysisReports: [],
    testLayerClassificationReports: [],
    testCaseBundles: [],
    playwrightArtifacts: [],
    markdownPaths: [],
    jsonPaths: [],
    requirementAnalysisPaths: [],
    testLayerClassificationPaths: [],
    testCasePaths: [],
    playwrightManifestPath: ""
  };
}
