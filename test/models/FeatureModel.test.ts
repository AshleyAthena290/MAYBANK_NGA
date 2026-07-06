import { describe, expect, it } from "vitest";
import { buildFeatureQualityReport, parseFeature } from "../../src/core/models/Feature.js";

describe("Feature model hardening", () => {
  it("normalizes and deduplicates array values", () => {
    const feature = parseFeature({
      featureName: "  ETB Onboarding  ",
      description: "  Customer onboarding  ",
      flow: [" Open app ", "Open app", ""],
      uiElements: [" NRIC Field "],
      validationRules: [" Mandatory NRIC "],
      businessRules: [" Rule A "],
      apis: [" POST /onboarding "],
      dependencies: [" OTP Service "],
      errorMessages: [" Invalid NRIC "],
      navigation: [" Home > Onboarding "],
      remarks: [" Note 1 ", "Note 1"]
    });

    expect(feature.featureName).toBe("ETB Onboarding");
    expect(feature.description).toBe("Customer onboarding");
    expect(feature.flow).toEqual(["Open app"]);
    expect(feature.remarks).toEqual(["Note 1"]);
  });

  it("reports missing quality sections", () => {
    const feature = parseFeature({
      featureName: "Profile Update",
      description: "",
      flow: [],
      uiElements: ["Name Field"],
      validationRules: [],
      businessRules: [],
      apis: [],
      dependencies: [],
      errorMessages: [],
      navigation: [],
      remarks: []
    });

    const report = buildFeatureQualityReport(feature);

    expect(report.isComplete).toBe(false);
    expect(report.missingSections).toContain("Description");
    expect(report.missingSections).toContain("Flow");
    expect(report.missingSections).toContain("APIs");
    expect(report.warnings.length).toBeGreaterThan(0);
  });
});
