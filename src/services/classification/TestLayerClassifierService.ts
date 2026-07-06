import type { Feature } from "../../core/models/Feature.js";
import type { TestLayer } from "../../types/testLayers.js";

export interface LayerClassification {
  requirement: string;
  layers: Array<{
    layer: TestLayer;
    reason: string;
  }>;
}

export interface FeatureLayerClassificationReport {
  featureName: string;
  classifications: LayerClassification[];
}

export class TestLayerClassifierService {
  public classify(requirement: string): LayerClassification {
    const normalized = requirement.toLowerCase();
    const layerReasons = new Map<TestLayer, string>();

    this.tryAddLayer(
      layerReasons,
      "UI",
      /\b(ui|screen|button|field|input|form|page|navigation|click|tap|display)\b/.test(normalized),
      "Requirement references end-user interface behavior."
    );

    this.tryAddLayer(
      layerReasons,
      "API",
      /\b(api|endpoint|service|request|response|http|rest|get|post|put|patch|delete)\b/.test(normalized),
      "Requirement references API contract or transport behavior."
    );

    this.tryAddLayer(
      layerReasons,
      "Integration",
      /\b(integration|dependency|downstream|upstream|orchestration|sync|async|queue|event)\b/.test(normalized),
      "Requirement depends on component or service interaction."
    );

    this.tryAddLayer(
      layerReasons,
      "Accessibility",
      /\b(accessibility|a11y|aria|screen reader|contrast|keyboard|focus order)\b/.test(normalized),
      "Requirement indicates accessibility conformance behavior."
    );

    this.tryAddLayer(
      layerReasons,
      "Performance",
      /\b(performance|latency|response time|throughput|load|stress|timeout|sla)\b/.test(normalized),
      "Requirement contains measurable performance criteria."
    );

    this.tryAddLayer(
      layerReasons,
      "Security",
      /\b(security|auth|authentication|authorization|token|otp|password|pin|encrypt|mask|permission|nric|card)\b/.test(normalized),
      "Requirement includes security or sensitive-data considerations."
    );

    this.tryAddLayer(
      layerReasons,
      "VisualRegression",
      /\b(visual|layout|alignment|style|font|color|theme|screenshot|baseline)\b/.test(normalized),
      "Requirement includes presentational consistency assertions."
    );

    const isAmbiguous = /\b(tbd|to be confirmed|if needed|manual verification|subjective)\b/.test(normalized);
    const isAutomatableSurface =
      layerReasons.has("UI") ||
      layerReasons.has("API") ||
      layerReasons.has("Integration") ||
      layerReasons.has("Security") ||
      layerReasons.has("Accessibility") ||
      layerReasons.has("VisualRegression") ||
      layerReasons.has("Performance");

    this.tryAddLayer(
      layerReasons,
      "Manual",
      isAmbiguous || layerReasons.size === 0,
      isAmbiguous
        ? "Requirement is ambiguous and needs manual exploratory validation."
        : "Requirement lacks deterministic signals for direct automation."
    );

    this.tryAddLayer(
      layerReasons,
      "AutomationCandidate",
      isAutomatableSurface && !isAmbiguous,
      "Requirement has deterministic assertions suitable for automation."
    );

    return {
      requirement,
      layers: Array.from(layerReasons.entries()).map(([layer, reason]) => ({ layer, reason }))
    };
  }

  public classifyFeature(feature: Feature): FeatureLayerClassificationReport {
    const requirements = this.buildRequirementInputs(feature);
    const classifications = requirements.map((requirement) => this.classify(requirement));

    return {
      featureName: feature.featureName,
      classifications
    };
  }

  public classifyAll(features: Feature[]): FeatureLayerClassificationReport[] {
    return features.map((feature) => this.classifyFeature(feature));
  }

  private buildRequirementInputs(feature: Feature): string[] {
    const inputs = [
      ...feature.flow,
      ...feature.uiElements,
      ...feature.validationRules,
      ...feature.businessRules,
      ...feature.apis,
      ...feature.dependencies,
      ...feature.errorMessages,
      ...feature.navigation,
      ...feature.remarks
    ];

    return Array.from(new Set(inputs.map((item) => item.trim()).filter((item) => item.length > 0)));
  }

  private tryAddLayer(
    layerReasons: Map<TestLayer, string>,
    layer: TestLayer,
    condition: boolean,
    reason: string
  ): void {
    if (condition) {
      layerReasons.set(layer, reason);
    }
  }
}
