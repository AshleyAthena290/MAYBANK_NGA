import type { Feature } from "../../core/models/Feature.js";
import type { GeneratedTestCase } from "../generation/TestCaseGeneratorService.js";

export class PromptTemplateService {
  public buildRequirementAnalysisPrompt(feature: Feature): string {
    return [
      "You are a Senior QA Architect and Requirements Analyst.",
      "Analyze the feature and produce a structured report in JSON.",
      "",
      "Required report sections:",
      "1. missingRequirements",
      "2. ambiguities",
      "3. risks",
      "4. missingValidations",
      "5. securityConcerns",
      "6. apiDependencies",
      "7. uiDependencies",
      "8. backendDependencies",
      "9. testability",
      "",
      "Rules:",
      "- Keep each item atomic and testable.",
      "- Prefer evidence-based statements grounded in the feature context.",
      "- Flag unclear acceptance criteria explicitly.",
      "",
      "Feature context:",
      this.renderFeatureContext(feature)
    ].join("\n");
  }

  public buildGapAnalysisPrompt(feature: Feature): string {
    return [
      "You are a QA Gap Analysis Specialist.",
      "Identify requirement and test-design gaps from the feature specification.",
      "",
      "Return JSON with:",
      "1. requirementGaps",
      "2. dependencyGaps",
      "3. validationCoverageGaps",
      "4. securityCoverageGaps",
      "5. nonFunctionalGaps",
      "6. recommendations",
      "",
      "Rules:",
      "- Distinguish between documented behavior and assumptions.",
      "- Include impact and suggested mitigation for each gap.",
      "- Highlight missing negative and edge-case behavior.",
      "",
      "Feature context:",
      this.renderFeatureContext(feature)
    ].join("\n");
  }

  public buildTestLayerClassificationPrompt(feature: Feature): string {
    return [
      "You are a Test Strategy Architect.",
      "Classify each requirement into one or more test layers and explain why.",
      "",
      "Available layers:",
      "- UI",
      "- API",
      "- Integration",
      "- Accessibility",
      "- Performance",
      "- Security",
      "- Visual Regression",
      "- Manual",
      "- Automation Candidate",
      "",
      "Return JSON array items with:",
      "1. requirement",
      "2. selectedLayers (array)",
      "3. rationalePerLayer (array of {layer, reason})",
      "4. automationCandidate",
      "",
      "Feature context:",
      this.renderFeatureContext(feature)
    ].join("\n");
  }

  public buildTestCaseGenerationPrompt(feature: Feature): string {
    return [
      "You are a Senior QA Test Designer.",
      "Generate high-quality test cases from the feature specification.",
      "",
      "Each test case must include:",
      "1. requirement",
      "2. objective",
      "3. preconditions",
      "4. testData",
      "5. steps",
      "6. expectedResult",
      "7. priority",
      "8. layer",
      "9. automationCandidate",
      "10. automationType",
      "11. dependencies",
      "12. negativeScenarios",
      "13. edgeCases",
      "",
      "Rules:",
      "- Cover positive, negative, and boundary paths.",
      "- Keep steps executable and deterministic.",
      "- Include data variation for validations and business rules.",
      "",
      "Feature context:",
      this.renderFeatureContext(feature)
    ].join("\n");
  }

  public buildPlaywrightGenerationPrompt(feature: Feature, testCases: GeneratedTestCase[]): string {
    const normalizedCases = testCases.filter((testCase) => testCase.automationCandidate);

    return [
      "You are a Playwright Automation Architect.",
      "Generate Playwright artifacts only for automation-candidate test cases.",
      "",
      "Required outputs:",
      "1. Playwright test files",
      "2. Page Object (when applicable)",
      "3. Fixtures",
      "4. Test data",
      "5. Assertions",
      "6. Helper methods",
      "",
      "Supported test types:",
      "- UI tests",
      "- API tests",
      "- Accessibility tests",
      "- Visual regression tests",
      "",
      "Rules:",
      "- Use async/await.",
      "- Follow Playwright best practices.",
      "- Keep reusable setup in fixtures and helpers.",
      "",
      "Feature context:",
      this.renderFeatureContext(feature),
      "",
      "Automation candidate test cases:",
      JSON.stringify(normalizedCases, null, 2)
    ].join("\n");
  }

  private renderFeatureContext(feature: Feature): string {
    return [
      `Feature Name: ${feature.featureName}`,
      `Description: ${feature.description || "Not specified"}`,
      this.renderListLine("Flow", feature.flow),
      this.renderListLine("UI Elements", feature.uiElements),
      this.renderListLine("Validation Rules", feature.validationRules),
      this.renderListLine("Business Rules", feature.businessRules),
      this.renderListLine("APIs", feature.apis),
      this.renderListLine("Dependencies", feature.dependencies),
      this.renderListLine("Error Messages", feature.errorMessages),
      this.renderListLine("Navigation", feature.navigation),
      this.renderListLine("Remarks", feature.remarks)
    ].join("\n");
  }

  private renderListLine(label: string, values: string[]): string {
    if (values.length === 0) {
      return `${label}: Not specified`;
    }

    return `${label}: ${values.join(" | ")}`;
  }
}
