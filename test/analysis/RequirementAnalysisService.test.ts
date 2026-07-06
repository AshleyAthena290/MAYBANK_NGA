import { describe, expect, it } from "vitest";
import { RequirementAnalysisService } from "../../src/services/analysis/RequirementAnalysisService.js";
import type { Feature } from "../../src/core/models/Feature.js";

describe("RequirementAnalysisService", () => {
  it("detects missing requirement sections and validation/security risks", () => {
    const service = new RequirementAnalysisService();
    const feature: Feature = {
      featureName: "Card Activation",
      description: "Activate card using OTP",
      flow: ["User enters OTP"],
      uiElements: ["OTP Input"],
      validationRules: [],
      businessRules: [],
      apis: ["POST /cards/activate"],
      dependencies: [],
      errorMessages: [],
      navigation: [],
      remarks: ["TBD approval flow"]
    };

    const report = service.analyze(feature);

    expect(report.featureName).toBe("Card Activation");
    expect(report.missingRequirements.length).toBeGreaterThan(0);
    expect(report.missingValidations.length).toBeGreaterThan(0);
    expect(report.ambiguities.some((item) => /tbd/i.test(item))).toBe(true);
    expect(report.risks.length).toBeGreaterThan(0);
    expect(report.securityConcerns.length).toBeGreaterThan(0);
    expect(report.apiDependencies).toContain("POST /cards/activate");
  });

  it("returns low-gap analysis when feature is complete", () => {
    const service = new RequirementAnalysisService();
    const feature: Feature = {
      featureName: "ETB Onboarding",
      description: "End-to-end onboarding flow",
      flow: ["Open app", "Submit onboarding form", "Verify OTP"],
      uiElements: ["NRIC Field", "Submit Button"],
      validationRules: ["NRIC required", "OTP must be 6 digits"],
      businessRules: ["Only Malaysian customer is eligible"],
      apis: ["POST /customers/onboarding"],
      dependencies: ["OTP Service", "Customer Profile Service"],
      errorMessages: ["Invalid NRIC", "OTP expired"],
      navigation: ["Home > Onboarding > Review"],
      remarks: ["Mask sensitive information", "Use token-based auth"]
    };

    const report = service.analyze(feature);

    expect(report.missingRequirements).toEqual([]);
    expect(report.missingValidations).toEqual([]);
    expect(report.testability.length).toBeGreaterThan(0);
  });
});
