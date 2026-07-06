export const TEST_LAYERS = [
  "UI",
  "API",
  "Integration",
  "Accessibility",
  "Performance",
  "Security",
  "VisualRegression",
  "Manual",
  "AutomationCandidate"
] as const;

export type TestLayer = (typeof TEST_LAYERS)[number];

export type AutomationType = "ui" | "api" | "accessibility" | "visual" | "none";
