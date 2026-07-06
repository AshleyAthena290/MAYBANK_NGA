/**
 * Canonical model for a parsed API business scenario.
 * All fields use plain language — no automation or code artefacts.
 */
export interface ApiScenario {
  /** Stable unique identifier derived from worksheet + ordinal */
  id: string;

  /** Human-readable test title: method + endpoint or business summary */
  title: string;

  /** Feature or module this scenario belongs to */
  feature: string;

  /** Plain-language description of business intent */
  description: string;

  /** HTTP method: GET | POST | PUT | PATCH | DELETE */
  method: string;

  /** Endpoint path relative to base URL */
  endpoint: string;

  /** Authentication scheme (e.g. Bearer Token, OAuth2, API Key, None) */
  authentication: string;

  /** Environment targets (e.g. SIT, UAT, PROD) */
  environment: string[];

  /** Business-readable tags for filtering */
  tags: string[];

  /** Priority level: P1 | P2 | P3 */
  priority: "P1" | "P2" | "P3";

  /** Conditions that must be true before the scenario executes */
  preconditions: string[];

  /** Reusable test data: field name → example value */
  testData: Record<string, string>;

  /** HTTP request definition */
  request: {
    headers: Record<string, string>;
    pathParams: Record<string, string>;
    queryParams: Record<string, string>;
    body: Record<string, unknown>;
  };

  /** Expected HTTP response */
  response: {
    successStatusCode: number;
    successDescription: string;
    errorStatusCodes: Array<{ code: number; description: string }>;
    bodySchema: Record<string, string>;
  };

  /** Business assertions and validation rules */
  assertions: string[];

  /** Post-scenario cleanup or rollback instructions */
  cleanup: string[];

  /** Traceability back to source documents */
  references: {
    fsdFeature: string;
    sourceWorksheet: string;
    sourceRows: string;
    apiSpecFile: string;
  };

  /** Negative and edge-case scenarios */
  negativeScenarios: string[];
}
