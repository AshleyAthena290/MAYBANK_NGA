import { describe, expect, it } from "vitest";
import { TestCaseGeneratorService } from "../../src/services/generation/TestCaseGeneratorService.js";
import type { Feature } from "../../src/core/models/Feature.js";
import type { FeatureLayerClassificationReport } from "../../src/services/classification/TestLayerClassifierService.js";

describe("TestCaseGeneratorService", () => {
  it("generates test case bundle from feature classification report", () => {
    const service = new TestCaseGeneratorService();

    const feature: Feature = {
      featureName: "ETB Onboarding",
      description: "Customer onboarding flow",
      flow: ["User opens onboarding screen"],
      uiElements: ["Submit Button"],
      validationRules: ["NRIC is mandatory"],
      businessRules: ["Only Malaysian customer is eligible"],
      apis: ["POST /customers/onboarding"],
      dependencies: ["OTP Service"],
      errorMessages: ["Invalid NRIC"],
      navigation: ["Home > Onboarding"],
      remarks: ["Mask sensitive fields"]
    };

    const classificationReport: FeatureLayerClassificationReport = {
      featureName: "ETB Onboarding",
      classifications: [
        {
          requirement: "Submit onboarding form",
          layers: [
            { layer: "UI", reason: "UI requirement" },
            { layer: "AutomationCandidate", reason: "Deterministic" }
          ]
        },
        {
          requirement: "POST /customers/onboarding",
          layers: [
            { layer: "API", reason: "API requirement" },
            { layer: "AutomationCandidate", reason: "Deterministic" }
          ]
        }
      ]
    };

    const bundle = service.generateForFeature(feature, classificationReport);

    expect(bundle.featureName).toBe("ETB Onboarding");
    expect(bundle.testCases).toHaveLength(2);
    expect(bundle.testCases[0]?.testCaseId).toBeDefined();
    expect(bundle.testCases[0]?.automationCandidate).toBe(true);
    expect(bundle.testCases[1]?.automationType).toBe("api");
  });
});
