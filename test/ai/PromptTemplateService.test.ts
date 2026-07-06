import { describe, expect, it } from "vitest";
import { PromptTemplateService } from "../../src/services/ai/PromptTemplateService.js";
import type { Feature } from "../../src/core/models/Feature.js";

const sampleFeature: Feature = {
  featureName: "ETB Onboarding",
  description: "Customer onboarding journey",
  flow: ["Open app", "Submit onboarding form"],
  uiElements: ["NRIC Field", "Submit Button"],
  validationRules: ["NRIC is mandatory"],
  businessRules: ["Only Malaysian customer is eligible"],
  apis: ["POST /customers/onboarding"],
  dependencies: ["OTP Service"],
  errorMessages: ["Invalid NRIC"],
  navigation: ["Home > Onboarding > Review"],
  remarks: ["Requires compliance sign-off"]
};

describe("PromptTemplateService", () => {
  it("builds requirement analysis prompt with required sections", () => {
    const service = new PromptTemplateService();

    const prompt = service.buildRequirementAnalysisPrompt(sampleFeature);

    expect(prompt).toContain("missingRequirements");
    expect(prompt).toContain("securityConcerns");
    expect(prompt).toContain("Feature Name: ETB Onboarding");
  });

  it("builds gap analysis and test layer classification prompts", () => {
    const service = new PromptTemplateService();

    const gapPrompt = service.buildGapAnalysisPrompt(sampleFeature);
    const layerPrompt = service.buildTestLayerClassificationPrompt(sampleFeature);

    expect(gapPrompt).toContain("validationCoverageGaps");
    expect(layerPrompt).toContain("Automation Candidate");
    expect(layerPrompt).toContain("selectedLayers");
  });

  it("builds test case and playwright generation prompts", () => {
    const service = new PromptTemplateService();

    const testCasePrompt = service.buildTestCaseGenerationPrompt(sampleFeature);
    const playwrightPrompt = service.buildPlaywrightGenerationPrompt(sampleFeature, [
      {
        requirement: "User submits onboarding form",
        objective: "Validate form submission",
        preconditions: ["User on onboarding page"],
        testData: ["Valid NRIC"],
        steps: ["Fill form", "Tap submit"],
        expectedResult: "Form submitted",
        priority: "P1",
        layer: "UI",
        automationCandidate: true,
        automationType: "ui",
        dependencies: ["OTP Service"],
        negativeScenarios: ["Invalid NRIC"],
        edgeCases: ["Very long name"]
      }
    ]);

    expect(testCasePrompt).toContain("negativeScenarios");
    expect(playwrightPrompt).toContain("Playwright Automation Architect");
    expect(playwrightPrompt).toContain("automationCandidate");
  });
});
