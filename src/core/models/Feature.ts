import { z } from "zod";

/**
 * Canonical feature representation consumed by all outputs and downstream stages.
 */
export interface Feature {
  featureName: string;
  description: string;
  flow: string[];
  uiElements: string[];
  validationRules: string[];
  businessRules: string[];
  apis: string[];
  dependencies: string[];
  errorMessages: string[];
  navigation: string[];
  remarks: string[];
}

export interface FeatureQualityReport {
  featureName: string;
  missingSections: string[];
  warnings: string[];
  isComplete: boolean;
}

const RequiredFeatureStringSchema = z.string().trim().min(1);
const OptionalFeatureStringSchema = z.string().trim().default("");

const FeatureStringArraySchema = z
  .array(z.string())
  .default([])
  .transform((items) => normalizeStringArray(items));

export const FeatureSchema = z.object({
  featureName: RequiredFeatureStringSchema,
  description: OptionalFeatureStringSchema,
  flow: FeatureStringArraySchema,
  uiElements: FeatureStringArraySchema,
  validationRules: FeatureStringArraySchema,
  businessRules: FeatureStringArraySchema,
  apis: FeatureStringArraySchema,
  dependencies: FeatureStringArraySchema,
  errorMessages: FeatureStringArraySchema,
  navigation: FeatureStringArraySchema,
  remarks: FeatureStringArraySchema
});

export type RawFeature = z.input<typeof FeatureSchema>;

/**
 * Validates and normalizes a feature payload into the canonical Feature object.
 */
export function parseFeature(rawFeature: RawFeature): Feature {
  return FeatureSchema.parse(rawFeature);
}

/**
 * Detects missing sections that reduce requirement quality and downstream testability.
 */
export function buildFeatureQualityReport(feature: Feature): FeatureQualityReport {
  const checks: Array<{ key: keyof Feature; label: string }> = [
    { key: "description", label: "Description" },
    { key: "flow", label: "Flow" },
    { key: "uiElements", label: "UI Elements" },
    { key: "validationRules", label: "Validation Rules" },
    { key: "businessRules", label: "Business Rules" },
    { key: "apis", label: "APIs" },
    { key: "dependencies", label: "Dependencies" },
    { key: "navigation", label: "Navigation" }
  ];

  const missingSections = checks
    .filter(({ key }) => isMissingSection(feature[key]))
    .map(({ label }) => label);

  const warnings = missingSections.map((section) => `Missing section: ${section}`);

  return {
    featureName: feature.featureName,
    missingSections,
    warnings,
    isComplete: missingSections.length === 0
  };
}

function normalizeStringArray(items: string[]): string[] {
  return Array.from(new Set(items.map((item) => item.trim()).filter((item) => item.length > 0)));
}

function isMissingSection(value: Feature[keyof Feature]): boolean {
  if (typeof value === "string") {
    return value.trim().length === 0;
  }

  return value.length === 0;
}
