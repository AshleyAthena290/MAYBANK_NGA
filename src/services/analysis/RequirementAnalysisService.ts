import type { Feature } from "../../core/models/Feature.js";

export interface RequirementAnalysisReport {
  featureName: string;
  missingRequirements: string[];
  ambiguities: string[];
  risks: string[];
  missingValidations: string[];
  securityConcerns: string[];
  apiDependencies: string[];
  uiDependencies: string[];
  backendDependencies: string[];
  testability: string[];
}

export class RequirementAnalysisService {
  public analyze(feature: Feature): RequirementAnalysisReport {
    const missingRequirements = this.findMissingRequirements(feature);
    const ambiguities = this.findAmbiguities(feature);
    const risks = this.findRisks(feature);
    const missingValidations = this.findMissingValidations(feature);
    const securityConcerns = this.findSecurityConcerns(feature);
    const apiDependencies = feature.apis;
    const uiDependencies = this.findUiDependencies(feature);
    const backendDependencies = this.findBackendDependencies(feature);
    const testability = this.findTestabilityNotes(feature, missingRequirements, ambiguities);

    return {
      featureName: feature.featureName,
      missingRequirements,
      ambiguities,
      risks,
      missingValidations,
      securityConcerns,
      apiDependencies,
      uiDependencies,
      backendDependencies,
      testability
    };
  }

  public analyzeAll(features: Feature[]): RequirementAnalysisReport[] {
    return features.map((feature) => this.analyze(feature));
  }

  private findMissingRequirements(feature: Feature): string[] {
    const missing: string[] = [];

    if (feature.description.length === 0) {
      missing.push("Feature description is missing.");
    }
    if (feature.flow.length === 0) {
      missing.push("User/system flow is missing.");
    }
    if (feature.uiElements.length === 0) {
      missing.push("UI element details are missing.");
    }
    if (feature.businessRules.length === 0) {
      missing.push("Business rules are missing.");
    }
    if (feature.dependencies.length === 0) {
      missing.push("Dependencies and prerequisites are missing.");
    }
    if (feature.navigation.length === 0) {
      missing.push("Navigation path details are missing.");
    }

    return missing;
  }

  private findAmbiguities(feature: Feature): string[] {
    const candidates = [
      feature.description,
      ...feature.flow,
      ...feature.businessRules,
      ...feature.remarks
    ];

    const patterns = [/\bTBD\b/i, /\bto be confirmed\b/i, /\bif needed\b/i, /\betc\.?$/i, /\bmaybe\b/i];

    return candidates.filter((line) => patterns.some((pattern) => pattern.test(line)));
  }

  private findRisks(feature: Feature): string[] {
    const risks: string[] = [];

    if (feature.apis.length > 0 && feature.dependencies.length === 0) {
      risks.push("API integration exists without explicit dependency mapping.");
    }

    if (feature.errorMessages.length === 0) {
      risks.push("Error handling behavior is not documented.");
    }

    if (feature.validationRules.length === 0) {
      risks.push("Input validation behavior is not documented.");
    }

    if (feature.flow.length > 0 && feature.navigation.length === 0) {
      risks.push("Flow exists but navigation path is missing, which can cause UX inconsistencies.");
    }

    return risks;
  }

  private findMissingValidations(feature: Feature): string[] {
    if (feature.validationRules.length > 0) {
      return [];
    }

    return [
      "No explicit validation rules were found for user input or business constraints.",
      "Boundary and negative validation cases are likely under-specified."
    ];
  }

  private findSecurityConcerns(feature: Feature): string[] {
    const concerns: string[] = [];
    const searchable = [
      feature.description,
      ...feature.flow,
      ...feature.validationRules,
      ...feature.businessRules,
      ...feature.remarks
    ].join(" ").toLowerCase();

    if (feature.apis.length > 0 && !/(auth|token|oauth|jwt|signature|encrypt|secure|permission)/i.test(searchable)) {
      concerns.push("APIs are referenced but authentication/authorization controls are not explicit.");
    }

    if (/(password|otp|pin|card|nric|ic number|identity)/i.test(searchable) && !/(mask|encrypt|secure|tokenize)/i.test(searchable)) {
      concerns.push("Sensitive data is present without explicit masking/encryption requirements.");
    }

    if (concerns.length === 0 && feature.apis.length === 0) {
      concerns.push("No direct API security concerns detected from current specification scope.");
    }

    return concerns;
  }

  private findUiDependencies(feature: Feature): string[] {
    return [...feature.uiElements, ...feature.navigation];
  }

  private findBackendDependencies(feature: Feature): string[] {
    const backendSignals = [...feature.apis, ...feature.dependencies].filter((line) =>
      /(api|service|backend|db|database|queue|event|core|orchestration|host)/i.test(line)
    );

    return Array.from(new Set(backendSignals));
  }

  private findTestabilityNotes(
    feature: Feature,
    missingRequirements: string[],
    ambiguities: string[]
  ): string[] {
    const notes: string[] = [];

    if (feature.flow.length > 0) {
      notes.push("Flow details are available for end-to-end scenario derivation.");
    } else {
      notes.push("Flow details are missing, reducing scenario traceability.");
    }

    if (feature.validationRules.length > 0) {
      notes.push("Validation rules can drive positive, negative, and boundary test design.");
    } else {
      notes.push("Validation rules are missing, increasing manual interpretation during test design.");
    }

    if (feature.apis.length > 0) {
      notes.push("API references support API and integration test layering.");
    }

    if (missingRequirements.length > 0 || ambiguities.length > 0) {
      notes.push("Specification gaps and ambiguities should be resolved before automation implementation.");
    }

    return notes;
  }
}
