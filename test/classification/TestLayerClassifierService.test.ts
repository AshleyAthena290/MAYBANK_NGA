import { describe, expect, it } from "vitest";
import { TestLayerClassifierService } from "../../src/services/classification/TestLayerClassifierService.js";
import type { Feature } from "../../src/core/models/Feature.js";

describe("TestLayerClassifierService", () => {
  it("classifies API security requirement with automation candidate", () => {
    const service = new TestLayerClassifierService();

    const result = service.classify("POST /customers/onboarding requires token auth and masked NRIC");
    const layers = result.layers.map((item) => item.layer);

    expect(layers).toContain("API");
    expect(layers).toContain("Security");
    expect(layers).toContain("AutomationCandidate");
  });

  it("classifies ambiguous requirement as manual", () => {
    const service = new TestLayerClassifierService();

    const result = service.classify("UI should look good if needed - TBD");
    const layers = result.layers.map((item) => item.layer);

    expect(layers).toContain("Manual");
  });

  it("builds feature-level classification report", () => {
    const service = new TestLayerClassifierService();
    const feature: Feature = {
      featureName: "ETB Onboarding",
      description: "Customer onboarding",
      flow: ["User opens onboarding screen"],
      uiElements: ["Submit Button"],
      validationRules: ["NRIC is mandatory"],
      businessRules: ["Only Malaysian customer is eligible"],
      apis: ["POST /customers/onboarding"],
      dependencies: ["OTP Service"],
      errorMessages: ["Invalid NRIC"],
      navigation: ["Home > Onboarding"],
      remarks: ["Mask sensitive data"]
    };

    const report = service.classifyFeature(feature);

    expect(report.featureName).toBe("ETB Onboarding");
    expect(report.classifications.length).toBeGreaterThan(0);
    expect(report.classifications.some((item) => item.layers.some((layer) => layer.layer === "AutomationCandidate"))).toBe(true);
  });
});
