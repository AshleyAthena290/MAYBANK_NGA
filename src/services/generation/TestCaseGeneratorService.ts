import type { Feature } from "../../core/models/Feature.js";
import type { FeatureLayerClassificationReport } from "../classification/TestLayerClassifierService.js";
import type { AutomationType, TestLayer } from "../../types/testLayers.js";

export interface GeneratedTestCase {
  testCaseId?: string;
  featureName?: string;
  requirement: string;
  objective: string;
  preconditions: string[];
  testData: string[];
  steps: string[];
  expectedResult: string;
  priority: "P1" | "P2" | "P3";
  layer: TestLayer;
  automationCandidate: boolean;
  automationType: AutomationType;
  dependencies: string[];
  negativeScenarios: string[];
  edgeCases: string[];
}

export interface FeatureTestCaseBundle {
  featureName: string;
  testCases: GeneratedTestCase[];
}

export class TestCaseGeneratorService {
  public generate(requirement: string): GeneratedTestCase[] {
    return [
      {
        requirement,
        objective: `Validate requirement: ${requirement}`,
        preconditions: ["System is reachable and user has required access"],
        testData: ["Representative valid input"],
        steps: ["Execute the requirement action"],
        expectedResult: "System behavior matches documented requirement",
        priority: "P2",
        layer: "Manual",
        automationCandidate: false,
        automationType: "none",
        dependencies: [],
        negativeScenarios: ["Invalid input is rejected with clear feedback"],
        edgeCases: ["Boundary input values are handled correctly"]
      }
    ];
  }

  public generateForFeature(
    feature: Feature,
    classificationReport: FeatureLayerClassificationReport
  ): FeatureTestCaseBundle {
    const testCases = classificationReport.classifications.map((classification, index) => {
      const selectedLayer = this.selectPrimaryLayer(classification.layers.map((layer) => layer.layer));
      const automationCandidate = classification.layers.some((layer) => layer.layer === "AutomationCandidate");
      const automationType = this.resolveAutomationType(classification.layers.map((layer) => layer.layer));

      return {
        testCaseId: this.buildTestCaseId(feature.featureName, index + 1),
        featureName: feature.featureName,
        requirement: classification.requirement,
        objective: `Verify ${classification.requirement.toLowerCase()}`,
        preconditions: this.buildPreconditions(feature),
        testData: this.buildTestData(feature, classification.requirement),
        steps: this.buildSteps(classification.requirement, selectedLayer, automationType),
        expectedResult: this.buildExpectedResult(classification.requirement),
        priority: this.resolvePriority(classification.requirement, classification.layers.map((layer) => layer.layer)),
        layer: selectedLayer,
        automationCandidate,
        automationType,
        dependencies: this.buildDependencies(feature),
        negativeScenarios: this.buildNegativeScenarios(feature, classification.requirement),
        edgeCases: this.buildEdgeCases(feature, classification.requirement)
      };
    });

    return {
      featureName: feature.featureName,
      testCases
    };
  }

  public generateAll(
    features: Feature[],
    classificationReports: FeatureLayerClassificationReport[]
  ): FeatureTestCaseBundle[] {
    const classificationLookup = new Map(
      classificationReports.map((report) => [report.featureName, report] as const)
    );

    return features.map((feature) => {
      const report = classificationLookup.get(feature.featureName);
      if (!report) {
        return {
          featureName: feature.featureName,
          testCases: []
        };
      }

      return this.generateForFeature(feature, report);
    });
  }

  private selectPrimaryLayer(layers: TestLayer[]): TestLayer {
    const preferredOrder: TestLayer[] = [
      "UI",
      "API",
      "Integration",
      "Accessibility",
      "Performance",
      "Security",
      "VisualRegression",
      "Manual"
    ];

    for (const preferred of preferredOrder) {
      if (layers.includes(preferred)) {
        return preferred;
      }
    }

    return "Manual";
  }

  private resolveAutomationType(layers: TestLayer[]): AutomationType {
    if (layers.includes("API")) {
      return "api";
    }
    if (layers.includes("Accessibility")) {
      return "accessibility";
    }
    if (layers.includes("VisualRegression")) {
      return "visual";
    }
    if (layers.includes("AutomationCandidate") || layers.includes("UI") || layers.includes("Integration")) {
      return "ui";
    }

    return "none";
  }

  private resolvePriority(requirement: string, layers: TestLayer[]): "P1" | "P2" | "P3" {
    const normalized = requirement.toLowerCase();
    if (
      layers.includes("Security") ||
      layers.includes("API") ||
      /\b(security|auth|otp|password|payment|card|nric|critical|mandatory)\b/.test(normalized)
    ) {
      return "P1";
    }

    if (layers.includes("Integration") || layers.includes("Performance") || layers.includes("Accessibility")) {
      return "P2";
    }

    return "P3";
  }

  private buildPreconditions(feature: Feature): string[] {
    const preconditions: string[] = ["Application is deployed and accessible"]; 

    if (feature.navigation.length > 0) {
      preconditions.push(`User can access navigation path: ${feature.navigation[0]}`);
    }

    if (feature.dependencies.length > 0) {
      preconditions.push(`Dependencies available: ${feature.dependencies.join(", ")}`);
    }

    return preconditions;
  }

  private buildTestData(feature: Feature, requirement: string): string[] {
    const data = [...feature.validationRules, ...feature.uiElements].slice(0, 5);
    if (data.length === 0) {
      data.push(`Representative data for: ${requirement}`);
    }

    return data;
  }

  private buildSteps(requirement: string, layer: TestLayer, automationType: AutomationType): string[] {
    const layerAction =
      layer === "API"
        ? "Send API request"
        : layer === "Accessibility"
          ? "Execute accessibility checks"
          : layer === "VisualRegression"
            ? "Capture baseline screenshot and compare"
            : "Perform user action in UI";

    return [
      "Prepare test data and environment",
      `${layerAction} for requirement: ${requirement}`,
      `Validate expected behavior using ${automationType === "none" ? "manual" : automationType} assertions`
    ];
  }

  private buildExpectedResult(requirement: string): string {
    return `System satisfies requirement: ${requirement}`;
  }

  private buildDependencies(feature: Feature): string[] {
    return Array.from(new Set([...feature.dependencies, ...feature.apis]));
  }

  private buildNegativeScenarios(feature: Feature, requirement: string): string[] {
    const scenarios = [
      ...feature.errorMessages.map((message) => `Trigger error path: ${message}`),
      ...feature.validationRules.map((rule) => `Invalid input violating rule: ${rule}`)
    ];

    if (scenarios.length === 0) {
      scenarios.push(`Invalid flow for requirement: ${requirement}`);
    }

    return scenarios.slice(0, 5);
  }

  private buildEdgeCases(feature: Feature, requirement: string): string[] {
    const edgeCases = [
      ...feature.validationRules.map((rule) => `Boundary value around rule: ${rule}`),
      "Null and empty input handling",
      "Maximum supported input length"
    ];

    if (/\b(timeout|latency|performance)\b/i.test(requirement)) {
      edgeCases.push("High-latency and retry behavior");
    }

    return Array.from(new Set(edgeCases)).slice(0, 5);
  }

  private buildTestCaseId(featureName: string, index: number): string {
    const slug = featureName
      .toUpperCase()
      .replace(/[^A-Z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");

    return `${slug || "FEATURE"}_TC_${String(index).padStart(3, "0")}`;
  }
}
