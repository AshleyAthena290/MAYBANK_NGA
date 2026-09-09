import { dump as yamlDump } from 'js-yaml';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { ApiScenario } from '../../types/apiSpec.js';
import { createLogger } from '../logger.js';

const logger = createLogger();

interface BddTestCase {
  id: string;
  title: string;
  feature: string;
  description: string;
  tags: string[];
  priority: string;
  environment: string[];
  authentication: string;
  preconditions: string[];
  testData: Record<string, string>;
  request: {
    method: string;
    url: string;
    endpoint: string;
    baseUrl: string;
    headers: Record<string, string>;
    pathParams?: Record<string, string>;
    queryParams?: Record<string, string>;
    body?: Record<string, unknown> | undefined;
  };
  response: {
    successStatusCode: number;
    successDescription: string;
    schema: Record<string, unknown>;
    expectedFields: Array<{
      fieldPath: string;
      type: string;
      mandatory: boolean;
      description?: string;
      parentField?: string;
      constraints?: {
        minValue?: number;
        maxValue?: number;
        minItems?: number;
        maxItems?: number;
        minLength?: number;
        maxLength?: number;
        pattern?: string;
        format?: string;
        allowedValues?: string[];
      };
    }>;
    errorScenarios?: Array<{
      statusCode: number;
      description: string;
      errorMessage: string;
    }>;
  };
  assertions: Array<{
    description: string;
    type: 'status' | 'field-exists' | 'field-type' | 'field-mandatory' | 'field-value' | 'constraint' | 'custom';
    target?: string;
    expectedValue?: unknown;
    constraint?: string;
  }>;
  cleanup?: string[];
  references: {
    fsdFeature?: string;
    sourceWorksheet?: string;
    sourceRows?: string;
    apiSpecFile?: string;
  };
}

/** Result of a scenario-generation step: the cases produced, and the next free id counter to use. */
interface GeneratedBatch {
  cases: BddTestCase[];
  nextCounter: number;
}

/**
 * Generates BDD-style YAML test case files for API endpoints.
 * One file per business scenario, suitable for test runners and QA teams.
 *
 * Scenario generation is spec-driven: what gets generated for a given API depends on what that
 * API's actual spec declares (its headers, its documented negative scenarios, whether it has a
 * request body, whether auth is required) rather than a fixed set of scenarios applied to every API.
 */
export class BddYamlTestCaseGeneratorService {
  /**
   * Generate BDD YAML test cases from an API scenario.
   * Creates positive scenarios, then negative/edge/boundary scenarios gated on spec applicability.
   */
  generateTestCases(
    apiScenario: ApiScenario,
    featureName: string,
    apiName: string,
    fullUrl?: string,
    responseFields?: Array<{ name: string; type: string; description: string; mandatory?: boolean; parentField?: string }>
  ): BddTestCase[] {
    const testCases: BddTestCase[] = [];

    // 1. Positive scenario(s) (happy path) — one per enumerated placeholder value when applicable.
    testCases.push(...this.createPositiveScenarios(apiScenario, featureName, apiName, fullUrl, responseFields));

    // IDs 002+ are shared sequentially across negative/edge/boundary, since the negative list is
    // now variable-length (driven by the spec) rather than a fixed count.
    let counter = 2;

    const negative = this.createNegativeScenarios(apiScenario, featureName, apiName, fullUrl, counter);
    testCases.push(...negative.cases);
    counter = negative.nextCounter;

    const edge = this.createEdgeCaseScenarios(apiScenario, featureName, apiName, fullUrl, counter);
    testCases.push(...edge.cases);
    counter = edge.nextCounter;

    const boundary = this.createBoundaryScenarios(apiScenario, featureName, apiName, fullUrl, counter);
    testCases.push(...boundary.cases);
    counter = boundary.nextCounter;

    return testCases;
  }

  // ---------------------------------------------------------------------------------------------
  // Spec-applicability helpers — these decide *whether* a scenario type makes sense for this API,
  // instead of always generating it.
  // ---------------------------------------------------------------------------------------------

  /** Methods that conventionally carry a request body. */
  private methodHasBody(method: string): boolean {
    return ['POST', 'PUT', 'PATCH'].includes((method || '').toUpperCase());
  }

  /** True only when the API both uses a body-bearing method AND the spec actually declares body fields.
   *  This is what gates boundary scenarios and the "empty request body" edge case — an endpoint like
   *  a path-param-only "dismiss" action has nothing to bound, so these scenarios are skipped for it. */
  private isBodyApplicable(scenario: ApiScenario): boolean {
    return this.methodHasBody(scenario.method) && Object.keys(scenario.request?.body || {}).length > 0;
  }

  /** True when the spec's own headers already include something correlation/idempotency-related,
   *  which is what the "duplicate correlation id" edge case actually needs to be meaningful. */
  private hasCorrelationOrIdempotencyHeader(scenario: ApiScenario): boolean {
    const headers = scenario.request?.headers || {};
    return Object.keys(headers).some((key) => /correlation|idempoten/i.test(key));
  }

  /** Finds the header key (if any) in a header set that represents an auth credential,
   *  regardless of whether the spec calls it "Authorization", "X-Api-Key", "Access-Token", etc. */
  private findAuthHeaderKey(headers: Record<string, string>): string | undefined {
    return Object.keys(headers).find((key) => /auth|api-key|apikey|token/i.test(key));
  }

  // ---------------------------------------------------------------------------------------------
  // Headers — always derived from the spec's own request.headers, never a fixed template.
  // ---------------------------------------------------------------------------------------------

  /** Builds request headers starting from what the spec actually captured for this API
   *  (`scenario.request.headers`), only filling gaps that are missing entirely. This means an API
   *  whose spec lists just Authorization + User-Context keeps exactly that, while an API whose spec
   *  lists more headers keeps those too — nothing is invented or discarded. */
  private buildHeaders(scenario: ApiScenario): Record<string, string> {
    const headers: Record<string, string> = { ...(scenario.request?.headers || {}) };
    const hasHeader = (name: string) => Object.keys(headers).some((key) => key.toLowerCase() === name.toLowerCase());

    if (!hasHeader('Content-Type') && this.methodHasBody(scenario.method)) {
      headers['Content-Type'] = 'application/json';
    }
    if (!hasHeader('Accept')) {
      headers['Accept'] = 'application/json';
    }

    const hasAuthHeader = this.findAuthHeaderKey(headers) !== undefined;
    const authScheme = (scenario.authentication || '').toLowerCase();
    if (!hasAuthHeader && authScheme && authScheme !== 'none') {
      if (authScheme.includes('bearer') || authScheme.includes('oauth')) {
        headers['Authorization'] = 'Bearer <token>';
      } else if (authScheme.includes('api-key') || authScheme.includes('apikey')) {
        headers['X-API-Key'] = '<api-key>';
      } else if (authScheme.includes('basic')) {
        headers['Authorization'] = 'Basic <base64-encoded-credentials>';
      }
    }

    return headers;
  }

  /** Corrupts an existing auth header value for the "invalid authentication" scenario,
   *  preserving its scheme prefix (e.g. "Bearer ...") when one is present. */
  private corruptAuthValue(value: string | undefined): string {
    if (!value) return 'invalid_token_12345';
    if (/^Bearer\s+/i.test(value)) return 'Bearer invalid_token_12345';
    if (/^Basic\s+/i.test(value)) return 'Basic aW52YWxpZDppbnZhbGlk';
    return 'invalid_token_12345';
  }

  private pad(counter: number): string {
    return String(counter).padStart(3, '0');
  }

  // ---------------------------------------------------------------------------------------------
  // Error status resolution — prefer what the spec actually documents over a hardcoded guess.
  // ---------------------------------------------------------------------------------------------

  /** Looks up a real documented status code for a given negative-scenario description by matching
   *  keywords against `scenario.response.errorStatusCodes`; falls back to a sensible default status
   *  only when the spec doesn't document one for this case. */
  private resolveExpectedErrorStatus(scenario: ApiScenario, description: string): number {
    const lower = description.toLowerCase();
    const documented = scenario.response?.errorStatusCodes || [];

    const matched = documented.find((err) => {
      const errDesc = (err.description || '').toLowerCase();
      return errDesc.length > 0 && (lower.includes(errDesc) || errDesc.includes(lower) || this.sharesKeyword(lower, errDesc));
    });
    if (matched) return matched.code;

    if (/auth/.test(lower)) return 401;
    if (/forbidden|permission|access denied/.test(lower)) return 403;
    if (/not found/.test(lower)) return 404;
    if (/duplicate|conflict/.test(lower)) return 409;
    if (/timeout/.test(lower)) return 504;
    if (/rate limit|too many/.test(lower)) return 429;
    return 400;
  }

  /** True if two phrases share a meaningfully long word (crude but effective keyword overlap check). */
  private sharesKeyword(a: string, b: string): boolean {
    const wordsA = new Set(a.split(/\W+/).filter((word) => word.length > 3));
    return b.split(/\W+/).some((word) => wordsA.has(word));
  }

  private findErrorDescription(scenario: ApiScenario, code: number): string | undefined {
    return scenario.response?.errorStatusCodes?.find((err) => err.code === code)?.description;
  }

  // ---------------------------------------------------------------------------------------------
  // Positive scenarios (unchanged behaviour, aside from using buildHeaders and folding in
  // scenario.assertions)
  // ---------------------------------------------------------------------------------------------

  /**
   * Expands into one positive scenario per enumerated placeholder value (e.g. 6 context-path
   * values, 3 accountType values), so every combination axis is exercised at least once. When no
   * placeholder enums exist, returns a single scenario matching the previous behaviour.
   */
  private createPositiveScenarios(
    scenario: ApiScenario,
    featureName: string,
    apiName: string,
    fullUrl?: string,
    responseFields?: Array<{ name: string; type: string; description: string; mandatory?: boolean; parentField?: string }>
  ): BddTestCase[] {
    const enums = scenario.placeholderEnums;
    if (!enums || Object.keys(enums).length === 0) {
      return [this.createPositiveScenario(scenario, featureName, apiName, fullUrl, responseFields)];
    }

    const defaults: Record<string, string> = {};
    for (const [token, values] of Object.entries(enums)) {
      if (values[0] !== undefined) {
        defaults[token] = values[0];
      }
    }

    const scenarios: BddTestCase[] = [
      this.createPositiveScenario(scenario, featureName, apiName, fullUrl, responseFields, undefined, defaults),
    ];

    for (const [token, values] of Object.entries(enums)) {
      for (const value of values.slice(1)) {
        const overrides = { ...defaults, [token]: value };
        const idSuffix = `${this.slugify(token)}-${this.slugify(value)}`;
        scenarios.push(
          this.createPositiveScenario(scenario, featureName, apiName, fullUrl, responseFields, idSuffix, overrides)
        );
      }
    }

    return scenarios;
  }

  private createPositiveScenario(
    scenario: ApiScenario,
    featureName: string,
    apiName: string,
    fullUrl?: string,
    responseFields?: Array<{ name: string; type: string; description: string; mandatory?: boolean; parentField?: string }>,
    idSuffix?: string,
    placeholderValues?: Record<string, string>
  ): BddTestCase {
    const resolvedUrl = placeholderValues
      ? this.substitutePlaceholders(fullUrl || scenario.endpoint, placeholderValues)
      : fullUrl || scenario.endpoint;
    const { baseUrl, endpoint } = this.extractUrlParts(resolvedUrl);

    const body = this.methodHasBody(scenario.method)
      ? (placeholderValues
          ? this.applyPlaceholderValues(scenario.request?.body, placeholderValues)
          : scenario.request?.body)
      : undefined;
    const pathParams = placeholderValues
      ? this.applyPlaceholderValues(scenario.request?.pathParams, placeholderValues)
      : scenario.request?.pathParams || {};

    const { fields: resolvedResponseFields, validationSourceNote } = this.resolveResponseFieldsForContext(
      scenario,
      responseFields || [],
      placeholderValues
    );

    const expectedFields = this.buildExpectedFields(resolvedResponseFields);
    const assertions = this.buildStructuredAssertions(expectedFields, scenario);

    return {
      id: idSuffix ? `${apiName}-001-positive-${idSuffix}` : `${apiName}-001-positive`,
      title: idSuffix
        ? `${scenario.method} ${resolvedUrl} - Happy Path (${idSuffix})`
        : `${scenario.method} ${scenario.endpoint} - Happy Path`,
      feature: featureName,
      description: scenario.description || `Successful execution of ${apiName}`,
      tags: ['positive', 'smoke', 'regression', ...scenario.tags],
      priority: 'P1',
      environment: scenario.environment || ['SIT', 'UAT', 'PROD'],
      authentication: scenario.authentication || 'OAuth2',
      preconditions: scenario.preconditions || [
        'Valid API credentials configured',
        'Service is up and running',
      ],
      testData: validationSourceNote
        ? { ...(scenario.testData || {}), responseValidationSource: validationSourceNote }
        : scenario.testData || {},
      request: {
        method: scenario.method,
        url: resolvedUrl,
        endpoint: endpoint,
        baseUrl: baseUrl,
        headers: this.buildHeaders(scenario),
        pathParams,
        queryParams: scenario.request?.queryParams || {},
        body,
      },
      response: {
        successStatusCode: 200,
        successDescription: 'Request processed successfully',
        schema: scenario.response?.bodySchema || {},
        expectedFields,
        errorScenarios: scenario.response?.errorStatusCodes?.map((err) => ({
          statusCode: err.code,
          description: err.description,
          errorMessage: `${err.code} ${err.description}`,
        })) || [],
      },
      assertions,
      cleanup: scenario.cleanup || [],
      references: scenario.references,
    };
  }

  /** Replaces `{token}` placeholders in a URL/path with resolved values, leaving unknown tokens untouched. */
  private substitutePlaceholders(text: string, values: Record<string, string>): string {
    return text.replace(/\{([^}]+)\}/g, (match, token) => values[token] ?? match);
  }

  /**
   * When the scenario varies a "context-path"-style placeholder and a matching sample response
   * exists in the source spec (e.g. "Casa Response Sample"), use it to build accurate expected
   * fields. Otherwise falls back to the generic response schema and flags the gap for QA.
   */
  private resolveResponseFieldsForContext(
    scenario: ApiScenario,
    genericFields: Array<{ name: string; type: string; description: string; mandatory?: boolean; parentField?: string }>,
    placeholderValues?: Record<string, string>
  ): {
    fields: Array<{ name: string; type: string; description: string; mandatory?: boolean; parentField?: string }>;
    validationSourceNote?: string;
  } {
    const contextValue = Object.entries(placeholderValues || {}).find(([token]) =>
      token.toLowerCase().includes('context-path')
    )?.[1];

    if (!contextValue || !scenario.contextResponseSamples) {
      return { fields: genericFields };
    }

    const sampleKey = Object.keys(scenario.contextResponseSamples).find(
      (key) => key.toLowerCase() === contextValue.toLowerCase()
    );

    if (!sampleKey) {
      return {
        fields: genericFields,
        validationSourceNote: `No sample response documented for context-path '${contextValue}' in the source spec; validated against the generic response schema only.`,
      };
    }

    const safeSampleKey: string = sampleKey;
    const sampleJson = scenario.contextResponseSamples[safeSampleKey];
    if (sampleJson === undefined) {
      return { fields: genericFields };
    }
    const sampleFields = this.extractFieldsFromSampleJson(sampleJson);
    return {
      fields: sampleFields.length > 0 ? sampleFields : genericFields,
      validationSourceNote: `Validated against the '${sampleKey}' sample response from the source spec.`,
    };
  }

  /** Flattens a sample response JSON string into dot-notation fields, mirroring the source spec's response schema shape. */
  private extractFieldsFromSampleJson(
    sampleJson: string
  ): Array<{ name: string; type: string; description: string; parentField?: string }> {
    try {
      const parsed = JSON.parse(sampleJson) as unknown;
      return this.flattenJsonFields(parsed);
    } catch {
      return [];
    }
  }

  private flattenJsonFields(
    obj: unknown,
    parentPath = '',
    depth = 0,
    maxDepth = 3
  ): Array<{ name: string; type: string; description: string; parentField?: string }> {
    const fields: Array<{ name: string; type: string; description: string; parentField?: string }> = [];

    if (depth > maxDepth || !obj || typeof obj !== 'object') {
      return fields;
    }

    if (Array.isArray(obj)) {
      if (obj.length > 0) {
        fields.push(...this.flattenJsonFields(obj[0], `${parentPath}[]`, depth + 1, maxDepth));
      }
      return fields;
    }

    for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
      const fieldPath = parentPath ? `${parentPath}.${key}` : key;
      const field: { name: string; type: string; description: string; parentField?: string } = {
        name: key,
        type: this.jsonValueType(value),
        description: `Field: ${key}`,
      };
      if (parentPath) {
        field.parentField = parentPath;
      }
      fields.push(field);

      if (value && typeof value === 'object' && depth < maxDepth) {
        fields.push(...this.flattenJsonFields(value, fieldPath, depth + 1, maxDepth));
      }
    }

    return fields;
  }

  private jsonValueType(value: unknown): string {
    if (value === null) return 'Null';
    if (Array.isArray(value)) return value.length > 0 ? `Array<${this.jsonValueType(value[0])}>` : 'Array';
    if (typeof value === 'object') return 'Object';
    if (typeof value === 'boolean') return 'Boolean';
    if (typeof value === 'number') return Number.isInteger(value) ? 'Integer' : 'Decimal';
    return 'String';
  }

  /** Overrides matching keys (case-insensitive) in a body/pathParams record with resolved placeholder values. */
  private applyPlaceholderValues<T extends Record<string, unknown> | undefined>(
    record: T,
    values: Record<string, string>
  ): T {
    if (!record) {
      return record;
    }

    const updated: Record<string, unknown> = { ...record };
    for (const [token, value] of Object.entries(values)) {
      const matchingKey = Object.keys(updated).find((key) => key.toLowerCase() === token.toLowerCase());
      if (matchingKey) {
        updated[matchingKey] = value;
      }
    }

    return updated as T;
  }

  private slugify(value: string): string {
    return value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  /** First value of each enumerated placeholder axis, used as the default substitution for non-positive scenarios. */
  private defaultPlaceholderValues(scenario: ApiScenario): Record<string, string> | undefined {
    if (!scenario.placeholderEnums) {
      return undefined;
    }

    const defaults: Record<string, string> = {};
    for (const [token, values] of Object.entries(scenario.placeholderEnums)) {
      if (values[0] !== undefined) {
        defaults[token] = values[0];
      }
    }

    return Object.keys(defaults).length > 0 ? defaults : undefined;
  }

  // ---------------------------------------------------------------------------------------------
  // Negative scenarios — driven by scenario.negativeScenarios when the spec documents any;
  // falls back to generic auth/content-type scenarios only when nothing is documented, and even
  // then only when relevant (auth scenarios require auth to be required; content-type requires a body).
  // ---------------------------------------------------------------------------------------------

  private createNegativeScenarios(
    scenario: ApiScenario,
    featureName: string,
    apiName: string,
    fullUrl: string | undefined,
    startCounter: number
  ): GeneratedBatch {
    const baseScenario = this.createPositiveScenario(
      scenario, featureName, apiName, fullUrl, undefined, undefined, this.defaultPlaceholderValues(scenario)
    );

    const documented = (scenario.negativeScenarios || []).map((text) => text.trim()).filter((text) => text.length > 0);

    let counter = startCounter;
    const cases: BddTestCase[] = [];

    if (documented.length > 0) {
      for (const description of documented) {
        cases.push(this.buildNegativeScenarioFromText(scenario, baseScenario, apiName, description, counter));
        counter += 1;
      }
      return { cases, nextCounter: counter };
    }

    // No documented negative scenarios for this API — fall back to generic ones, gated on relevance.
    const requiresAuth = (scenario.authentication || '').toLowerCase() !== 'none' && !!scenario.authentication;
    if (requiresAuth) {
      cases.push(this.buildMissingAuthScenario(scenario, baseScenario, apiName, counter));
      counter += 1;
      cases.push(this.buildInvalidAuthScenario(scenario, baseScenario, apiName, counter));
      counter += 1;
    }

    if (this.methodHasBody(scenario.method)) {
      cases.push(this.buildInvalidContentTypeScenario(scenario, baseScenario, apiName, counter));
      counter += 1;
    }

    // Auto-derived field-level negatives (Tier 2): for every real, filled-in header and query param
    // this specific API actually uses, generate a "missing" and an "invalid value" case. Skips the
    // auth header (already covered above) and technical headers (Content-Type/Accept/User-Agent),
    // and skips anything still left as an unfilled "<value>" placeholder since there's nothing
    // meaningful to remove or corrupt yet.
    const authHeaderKey = this.findAuthHeaderKey(baseScenario.request.headers);
    for (const headerName of Object.keys(baseScenario.request.headers)) {
      if (authHeaderKey && headerName.toLowerCase() === authHeaderKey.toLowerCase()) continue;
      if (this.isTechnicalHeader(headerName)) continue;

      const headerValue = baseScenario.request.headers[headerName];
      if (!this.hasRealValue(headerValue)) continue;

      cases.push(this.buildMissingHeaderScenario(scenario, baseScenario, apiName, headerName, counter));
      counter += 1;
      cases.push(this.buildInvalidHeaderScenario(scenario, baseScenario, apiName, headerName, counter));
      counter += 1;
    }

    const queryParams = baseScenario.request.queryParams || {};
    for (const paramName of Object.keys(queryParams)) {
      const paramValue = queryParams[paramName];
      if (!this.hasRealValue(paramValue)) continue;

      cases.push(this.buildMissingQueryParamScenario(scenario, baseScenario, apiName, paramName, counter));
      counter += 1;
      cases.push(this.buildInvalidQueryParamScenario(scenario, baseScenario, apiName, paramName, counter));
      counter += 1;
    }

    return { cases, nextCounter: counter };
  }

  /** True if the spec provided a real, filled-in value — not empty and not an unfilled "<value>" placeholder. */
  private hasRealValue(value: string | undefined): boolean {
    return typeof value === 'string' && value.trim().length > 0 && value.trim() !== '<value>';
  }

  /** Headers whose "missing"/"invalid" negative cases are already covered elsewhere (auth) or aren't
   *  meaningful to test this way (transport-level headers, not business data). */
  private isTechnicalHeader(headerName: string): boolean {
    return /^(content-type|accept|user-agent)$/i.test(headerName);
  }

  /** Corrupts a header/param value generically: truncates JSON-looking values into invalid JSON,
   *  otherwise replaces with an obviously-invalid token. No business-specific validation rules are
   *  known at this layer, so this is intentionally generic rather than field-aware. */
  private corruptGenericValue(value: string | undefined): string {
    if (!value || value.trim().length === 0) {
      return 'INVALID_VALUE';
    }
    const trimmed = value.trim();
    if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
      return trimmed.slice(0, Math.max(1, trimmed.length - 1));
    }
    return 'INVALID_VALUE';
  }

  private buildMissingHeaderScenario(
    scenario: ApiScenario,
    baseScenario: BddTestCase,
    apiName: string,
    headerName: string,
    counter: number
  ): BddTestCase {
    const headers = { ...baseScenario.request.headers };
    delete headers[headerName];

    const description = `Missing '${headerName}' header`;
    const statusCode = this.resolveExpectedErrorStatus(scenario, `missing ${headerName}`);

    return {
      ...baseScenario,
      id: `${apiName}-${this.pad(counter)}-missing-${this.slugify(headerName)}-header`,
      title: `${scenario.method} ${scenario.endpoint} - ${description}`,
      description,
      tags: ['negative', 'header', ...scenario.tags],
      priority: 'P2',
      request: { ...baseScenario.request, headers },
      response: {
        successStatusCode: statusCode,
        successDescription: this.findErrorDescription(scenario, statusCode) ?? `Bad Request - ${headerName} header is required`,
        schema: { error: 'string', message: 'string' },
        expectedFields: [],
      },
      assertions: [
        { description: `Response status code is ${statusCode}`, type: 'status', expectedValue: statusCode },
        { description, type: 'custom' },
      ],
    };
  }

  private buildInvalidHeaderScenario(
    scenario: ApiScenario,
    baseScenario: BddTestCase,
    apiName: string,
    headerName: string,
    counter: number
  ): BddTestCase {
    const headers = { ...baseScenario.request.headers };
    headers[headerName] = this.corruptGenericValue(headers[headerName]);

    const description = `Invalid value for '${headerName}' header`;
    const statusCode = this.resolveExpectedErrorStatus(scenario, `invalid ${headerName}`);

    return {
      ...baseScenario,
      id: `${apiName}-${this.pad(counter)}-invalid-${this.slugify(headerName)}-header`,
      title: `${scenario.method} ${scenario.endpoint} - ${description}`,
      description,
      tags: ['negative', 'header', ...scenario.tags],
      priority: 'P2',
      request: { ...baseScenario.request, headers },
      response: {
        successStatusCode: statusCode,
        successDescription: this.findErrorDescription(scenario, statusCode) ?? `Bad Request - ${headerName} header is invalid`,
        schema: { error: 'string', message: 'string' },
        expectedFields: [],
      },
      assertions: [
        { description: `Response status code is ${statusCode}`, type: 'status', expectedValue: statusCode },
        { description, type: 'custom' },
      ],
    };
  }

  private buildMissingQueryParamScenario(
    scenario: ApiScenario,
    baseScenario: BddTestCase,
    apiName: string,
    paramName: string,
    counter: number
  ): BddTestCase {
    const queryParams = { ...(baseScenario.request.queryParams || {}) };
    delete queryParams[paramName];

    const description = `Missing '${paramName}' query parameter`;
    const statusCode = this.resolveExpectedErrorStatus(scenario, `missing ${paramName}`);

    return {
      ...baseScenario,
      id: `${apiName}-${this.pad(counter)}-missing-${this.slugify(paramName)}-param`,
      title: `${scenario.method} ${scenario.endpoint} - ${description}`,
      description,
      tags: ['negative', 'query-param', ...scenario.tags],
      priority: 'P2',
      request: { ...baseScenario.request, queryParams },
      response: {
        successStatusCode: statusCode,
        successDescription: this.findErrorDescription(scenario, statusCode) ?? `Bad Request - ${paramName} query parameter is required`,
        schema: { error: 'string', message: 'string' },
        expectedFields: [],
      },
      assertions: [
        { description: `Response status code is ${statusCode}`, type: 'status', expectedValue: statusCode },
        { description, type: 'custom' },
      ],
    };
  }

  private buildInvalidQueryParamScenario(
    scenario: ApiScenario,
    baseScenario: BddTestCase,
    apiName: string,
    paramName: string,
    counter: number
  ): BddTestCase {
    const queryParams = { ...(baseScenario.request.queryParams || {}) };
    queryParams[paramName] = this.corruptGenericValue(queryParams[paramName]);

    const description = `Invalid value for '${paramName}' query parameter`;
    const statusCode = this.resolveExpectedErrorStatus(scenario, `invalid ${paramName}`);

    return {
      ...baseScenario,
      id: `${apiName}-${this.pad(counter)}-invalid-${this.slugify(paramName)}-param`,
      title: `${scenario.method} ${scenario.endpoint} - ${description}`,
      description,
      tags: ['negative', 'query-param', ...scenario.tags],
      priority: 'P2',
      request: { ...baseScenario.request, queryParams },
      response: {
        successStatusCode: statusCode,
        successDescription: this.findErrorDescription(scenario, statusCode) ?? `Bad Request - ${paramName} query parameter is invalid`,
        schema: { error: 'string', message: 'string' },
        expectedFields: [],
      },
      assertions: [
        { description: `Response status code is ${statusCode}`, type: 'status', expectedValue: statusCode },
        { description, type: 'custom' },
      ],
    };
  }

  /** Builds a negative scenario directly from a business-authored description in the spec
   *  (`scenario.negativeScenarios`), resolving a real expected status code where the spec documents one. */
  private buildNegativeScenarioFromText(
    scenario: ApiScenario,
    baseScenario: BddTestCase,
    apiName: string,
    description: string,
    counter: number
  ): BddTestCase {
    const idSlug = this.slugify(description).split('-').slice(0, 6).join('-') || 'scenario';
    const statusCode = this.resolveExpectedErrorStatus(scenario, description);

    return {
      ...baseScenario,
      id: `${apiName}-${this.pad(counter)}-${idSlug}`,
      title: `${scenario.method} ${scenario.endpoint} - ${description}`,
      description,
      tags: ['negative', ...scenario.tags],
      priority: 'P2',
      response: {
        successStatusCode: statusCode,
        successDescription: this.findErrorDescription(scenario, statusCode) ?? description,
        schema: { error: 'string', message: 'string' },
        expectedFields: [],
      },
      assertions: [
        { description: `Response status code is ${statusCode}`, type: 'status', expectedValue: statusCode },
        { description, type: 'custom' },
      ],
    };
  }

  private buildMissingAuthScenario(
    scenario: ApiScenario,
    baseScenario: BddTestCase,
    apiName: string,
    counter: number
  ): BddTestCase {
    const headers = { ...baseScenario.request.headers };
    const authKey = this.findAuthHeaderKey(headers);
    if (authKey) delete headers[authKey];

    const statusCode = this.resolveExpectedErrorStatus(scenario, 'missing authentication');

    return {
      ...baseScenario,
      id: `${apiName}-${this.pad(counter)}-missing-auth`,
      title: `${scenario.method} ${scenario.endpoint} - Missing Authentication`,
      description: 'Request without authentication credentials should fail',
      tags: ['negative', 'authentication', 'security'],
      priority: 'P2',
      request: { ...baseScenario.request, headers },
      response: {
        successStatusCode: statusCode,
        successDescription: this.findErrorDescription(scenario, statusCode) ?? 'Unauthorized - Authentication required',
        schema: { error: 'string', message: 'string' },
        expectedFields: [
          { fieldPath: 'error', type: 'String', mandatory: true, description: 'Error code' },
          { fieldPath: 'message', type: 'String', mandatory: true, description: 'Error message' },
        ],
      },
      assertions: [
        { description: `Response status code is ${statusCode}`, type: 'status', expectedValue: statusCode },
        { description: "Field 'error' exists and is of type String", type: 'field-type', target: 'error', expectedValue: 'String' },
        { description: 'Error message indicates missing authentication', type: 'custom' },
      ],
    };
  }

  private buildInvalidAuthScenario(
    scenario: ApiScenario,
    baseScenario: BddTestCase,
    apiName: string,
    counter: number
  ): BddTestCase {
    const headers = { ...baseScenario.request.headers };
    const authKey = this.findAuthHeaderKey(headers) ?? 'Authorization';
    headers[authKey] = this.corruptAuthValue(headers[authKey]);

    const statusCode = this.resolveExpectedErrorStatus(scenario, 'invalid authentication');

    return {
      ...baseScenario,
      id: `${apiName}-${this.pad(counter)}-invalid-auth`,
      title: `${scenario.method} ${scenario.endpoint} - Invalid Authentication`,
      description: 'Request with invalid credentials should fail',
      tags: ['negative', 'authentication', 'security'],
      priority: 'P2',
      request: { ...baseScenario.request, headers },
      response: {
        successStatusCode: statusCode,
        successDescription: this.findErrorDescription(scenario, statusCode) ?? 'Unauthorized - Invalid credentials',
        schema: { error: 'string', message: 'string' },
        expectedFields: [{ fieldPath: 'error', type: 'String', mandatory: true }],
      },
      assertions: [
        { description: `Response status code is ${statusCode}`, type: 'status', expectedValue: statusCode },
        { description: 'Error message indicates invalid authentication', type: 'custom' },
      ],
    };
  }

  private buildInvalidContentTypeScenario(
    scenario: ApiScenario,
    baseScenario: BddTestCase,
    apiName: string,
    counter: number
  ): BddTestCase {
    const headers = { ...baseScenario.request.headers, 'Content-Type': 'application/xml' };
    const statusCode = this.resolveExpectedErrorStatus(scenario, 'invalid content type');

    return {
      ...baseScenario,
      id: `${apiName}-${this.pad(counter)}-invalid-content-type`,
      title: `${scenario.method} ${scenario.endpoint} - Invalid Content-Type`,
      description: 'Request with invalid Content-Type should fail',
      tags: ['negative', 'validation'],
      priority: 'P2',
      request: { ...baseScenario.request, headers },
      response: {
        successStatusCode: statusCode,
        successDescription: this.findErrorDescription(scenario, statusCode) ?? 'Bad Request - Invalid Content-Type',
        schema: { error: 'string', message: 'string' },
        expectedFields: [],
      },
      assertions: [
        { description: `Response status code is ${statusCode}`, type: 'status', expectedValue: statusCode },
        { description: 'Error message indicates invalid content type', type: 'custom' },
      ],
    };
  }

  // ---------------------------------------------------------------------------------------------
  // Edge cases — gated on whether the spec has what each edge case actually needs.
  // ---------------------------------------------------------------------------------------------

  private createEdgeCaseScenarios(
    scenario: ApiScenario,
    featureName: string,
    apiName: string,
    fullUrl: string | undefined,
    startCounter: number
  ): GeneratedBatch {
    const baseScenario = this.createPositiveScenario(
      scenario, featureName, apiName, fullUrl, undefined, undefined, this.defaultPlaceholderValues(scenario)
    );

    let counter = startCounter;
    const cases: BddTestCase[] = [];

    // Only meaningful if the spec's own headers actually include a correlation/idempotency header.
    if (this.hasCorrelationOrIdempotencyHeader(scenario)) {
      const correlationKey = Object.keys(baseScenario.request.headers).find((key) => /correlation|idempoten/i.test(key))!;
      cases.push({
        ...baseScenario,
        id: `${apiName}-${this.pad(counter)}-duplicate-correlation-id`,
        title: `${scenario.method} ${scenario.endpoint} - Duplicate Correlation ID`,
        description: 'Same request with duplicate correlation ID should be idempotent',
        tags: ['edge-case', 'idempotency'],
        priority: 'P2',
        preconditions: [...baseScenario.preconditions, 'First request with correlation ID has been processed'],
        request: {
          ...baseScenario.request,
          headers: { ...baseScenario.request.headers, [correlationKey]: 'duplicate-correlation-123' },
        },
        assertions: [
          { description: 'Response status code is 200 (or 202 for idempotent)', type: 'custom' },
          { description: 'Same response as first request', type: 'custom' },
          { description: 'No duplicate processing occurred', type: 'custom' },
        ],
      });
      counter += 1;
    }

    // Timeout handling is a generic infrastructure concern applicable to any HTTP endpoint.
    cases.push({
      ...baseScenario,
      id: `${apiName}-${this.pad(counter)}-request-timeout`,
      title: `${scenario.method} ${scenario.endpoint} - Request Timeout`,
      description: 'Request exceeding timeout threshold should fail gracefully',
      tags: ['edge-case', 'performance'],
      priority: 'P3',
      response: {
        successStatusCode: 504,
        successDescription: this.findErrorDescription(scenario, 504) ?? 'Gateway Timeout',
        schema: { error: 'string', message: 'string' },
        expectedFields: [],
      },
      assertions: [
        { description: 'Response status code is 504', type: 'status', expectedValue: 504 },
        { description: 'Error message indicates timeout', type: 'custom' },
      ],
    });
    counter += 1;

    // Only meaningful if the API actually expects body fields to begin with.
    if (this.isBodyApplicable(scenario)) {
      const statusCode = this.resolveExpectedErrorStatus(scenario, 'empty request body');
      cases.push({
        ...baseScenario,
        id: `${apiName}-${this.pad(counter)}-empty-request-body`,
        title: `${scenario.method} ${scenario.endpoint} - Empty Request Body`,
        description: 'Request with empty body should be properly rejected',
        tags: ['edge-case', 'validation'],
        priority: 'P2',
        request: { ...baseScenario.request, body: {} },
        response: {
          successStatusCode: statusCode,
          successDescription: this.findErrorDescription(scenario, statusCode) ?? 'Bad Request - Invalid or missing required fields',
          schema: { error: 'string', message: 'string' },
          expectedFields: [],
        },
        assertions: [
          { description: `Response status code is ${statusCode}`, type: 'status', expectedValue: statusCode },
          { description: 'Error message lists missing required fields', type: 'custom' },
        ],
      });
      counter += 1;
    }

    return { cases, nextCounter: counter };
  }

  // ---------------------------------------------------------------------------------------------
  // Boundary scenarios — now genuinely data-driven: generated per-field, only for fields that
  // actually have a captured min/max/length constraint (scenario.requestBodyFieldSpecs). No
  // constraint data anywhere on this API means zero boundary tests, rather than the old generic
  // "3 tests about an amount" applied blindly to every API with a body. Real values are injected
  // at the field's own nested path, not left as narrative placeholder text.
  // ---------------------------------------------------------------------------------------------

  private createBoundaryScenarios(
    scenario: ApiScenario,
    featureName: string,
    apiName: string,
    fullUrl: string | undefined,
    startCounter: number
  ): GeneratedBatch {
    const constrainedFields = (scenario.requestBodyFieldSpecs || []).filter(
      (field) => field.constraints && Object.keys(field.constraints).length > 0
    );

    if (constrainedFields.length === 0) {
      return { cases: [], nextCounter: startCounter };
    }

    const baseScenario = this.createPositiveScenario(
      scenario, featureName, apiName, fullUrl, undefined, undefined, this.defaultPlaceholderValues(scenario)
    );

    let counter = startCounter;
    const cases: BddTestCase[] = [];

    for (const field of constrainedFields) {
      const path = field.fieldPath.split('.');
      const constraints = field.constraints!;

      if (constraints.minLength !== undefined) {
        cases.push(this.buildLengthBoundaryScenario(scenario, baseScenario, apiName, field.fieldPath, path, 'min', constraints.minLength, counter, false));
        counter += 1;
      }
      if (constraints.maxLength !== undefined) {
        cases.push(this.buildLengthBoundaryScenario(scenario, baseScenario, apiName, field.fieldPath, path, 'max', constraints.maxLength, counter, false));
        counter += 1;
        cases.push(this.buildLengthBoundaryScenario(scenario, baseScenario, apiName, field.fieldPath, path, 'exceeds', constraints.maxLength + 1, counter, true));
        counter += 1;
      }
      if (constraints.minValue !== undefined) {
        cases.push(this.buildValueBoundaryScenario(scenario, baseScenario, apiName, field.fieldPath, path, 'min', constraints.minValue, counter, false));
        counter += 1;
      }
      if (constraints.maxValue !== undefined) {
        cases.push(this.buildValueBoundaryScenario(scenario, baseScenario, apiName, field.fieldPath, path, 'max', constraints.maxValue, counter, false));
        counter += 1;
        cases.push(this.buildValueBoundaryScenario(scenario, baseScenario, apiName, field.fieldPath, path, 'exceeds', constraints.maxValue + 1, counter, true));
        counter += 1;
      }
    }

    return { cases, nextCounter: counter };
  }

  /** Returns a deep-cloned copy of a request body with `value` set at the given dot path,
   *  creating intermediate nested objects as needed. Used to inject a real boundary value into
   *  exactly the field being tested, leaving every other field's value untouched. */
  private setValueAtPath(
    body: Record<string, unknown> | undefined,
    path: string[],
    value: unknown
  ): Record<string, unknown> {
    const clone: Record<string, unknown> = JSON.parse(JSON.stringify(body || {}));
    let current: Record<string, unknown> = clone;

    for (let i = 0; i < path.length - 1; i += 1) {
      const key = path[i];
      if (key === undefined) continue;
      if (typeof current[key] !== 'object' || current[key] === null || Array.isArray(current[key])) {
        current[key] = {};
      }
      current = current[key] as Record<string, unknown>;
    }

    const lastKey = path[path.length - 1];
    if (lastKey !== undefined) {
      current[lastKey] = value;
    }
    return clone;
  }

  private buildLengthBoundaryScenario(
    scenario: ApiScenario,
    baseScenario: BddTestCase,
    apiName: string,
    fieldPath: string,
    path: string[],
    kind: 'min' | 'max' | 'exceeds',
    length: number,
    counter: number,
    isNegative: boolean
  ): BddTestCase {
    const value = 'A'.repeat(Math.max(0, length));
    const body = this.setValueAtPath(baseScenario.request.body, path, value);
    const label = kind === 'min' ? 'Minimum Length' : kind === 'max' ? 'Maximum Length' : 'Exceeds Maximum Length';
    const statusCode = isNegative ? this.resolveExpectedErrorStatus(scenario, `${fieldPath} exceeds maximum length`) : 200;
    const description = isNegative
      ? `Request with '${fieldPath}' exceeding its maximum length (${length} characters) should be rejected`
      : `Request with '${fieldPath}' at its ${label.toLowerCase()} (${length} characters) should succeed`;

    return {
      ...baseScenario,
      id: `${apiName}-${this.pad(counter)}-boundary-${this.slugify(fieldPath)}-${kind}-length`,
      title: `${scenario.method} ${scenario.endpoint} - ${fieldPath} ${label}`,
      description,
      tags: ['boundary', 'validation', isNegative ? 'negative' : 'positive'],
      priority: 'P2',
      request: { ...baseScenario.request, body },
      response: isNegative
        ? {
            successStatusCode: statusCode,
            successDescription: this.findErrorDescription(scenario, statusCode) ?? `Bad Request - ${fieldPath} exceeds maximum length`,
            schema: { error: 'string', message: 'string' },
            expectedFields: [],
          }
        : baseScenario.response,
      assertions: isNegative
        ? [
            { description: `Response status code is ${statusCode}`, type: 'status', expectedValue: statusCode },
            { description: `Error message indicates '${fieldPath}' exceeds maximum length`, type: 'custom' },
          ]
        : [
            { description: 'Response status code is 200', type: 'status', expectedValue: 200 },
            { description: `Request with '${fieldPath}' at ${label.toLowerCase()} boundary is accepted`, type: 'custom' },
          ],
    };
  }

  private buildValueBoundaryScenario(
    scenario: ApiScenario,
    baseScenario: BddTestCase,
    apiName: string,
    fieldPath: string,
    path: string[],
    kind: 'min' | 'max' | 'exceeds',
    value: number,
    counter: number,
    isNegative: boolean
  ): BddTestCase {
    const body = this.setValueAtPath(baseScenario.request.body, path, value);
    const label = kind === 'min' ? 'Minimum Value' : kind === 'max' ? 'Maximum Value' : 'Exceeds Maximum Value';
    const statusCode = isNegative ? this.resolveExpectedErrorStatus(scenario, `${fieldPath} exceeds allowed value`) : 200;
    const description = isNegative
      ? `Request with '${fieldPath}' exceeding its maximum allowed value (${value}) should be rejected`
      : `Request with '${fieldPath}' at its ${label.toLowerCase()} (${value}) should succeed`;

    return {
      ...baseScenario,
      id: `${apiName}-${this.pad(counter)}-boundary-${this.slugify(fieldPath)}-${kind}-value`,
      title: `${scenario.method} ${scenario.endpoint} - ${fieldPath} ${label}`,
      description,
      tags: ['boundary', 'validation', isNegative ? 'negative' : 'positive'],
      priority: 'P2',
      request: { ...baseScenario.request, body },
      response: isNegative
        ? {
            successStatusCode: statusCode,
            successDescription: this.findErrorDescription(scenario, statusCode) ?? `Bad Request - ${fieldPath} exceeds allowed value`,
            schema: { error: 'string', message: 'string' },
            expectedFields: [],
          }
        : baseScenario.response,
      assertions: isNegative
        ? [
            { description: `Response status code is ${statusCode}`, type: 'status', expectedValue: statusCode },
            { description: `Error message indicates '${fieldPath}' exceeds the allowed value`, type: 'custom' },
          ]
        : [
            { description: 'Response status code is 200', type: 'status', expectedValue: 200 },
            { description: `Request with '${fieldPath}' at ${label.toLowerCase()} boundary is accepted`, type: 'custom' },
          ],
    };
  }

  /**
   * Write test case YAML files to disk
   */
  writeTestCasesToDisk(
    testCases: BddTestCase[],
    outputDir: string,
    featureName: string,
    apiName: string
  ): string[] {
    const writtenFiles: string[] = [];

    // Create directory structure: artifacts/api/feature-name/api-name/
    const apiDir = join(outputDir, 'api', this.sanitizeForPath(featureName), this.sanitizeForPath(apiName));
    mkdirSync(apiDir, { recursive: true });

    // Write each test case to its own YAML file
    for (const testCase of testCases) {
      const filename = `${testCase.id}.yaml`;
      const filepath = join(apiDir, filename);

      const yamlContent = this.renderYamlWithHeader(testCase);
      writeFileSync(filepath, yamlContent, 'utf-8');
      writtenFiles.push(filepath);

      logger.info(`Generated test case: ${testCase.id} -> ${filepath}`);
    }

    // Generate index file listing all test cases
    const indexContent = this.generateIndexFile(testCases, featureName, apiName);
    const indexPath = join(apiDir, '_index.yaml');
    writeFileSync(indexPath, indexContent, 'utf-8');
    writtenFiles.push(indexPath);

    logger.info(`Test cases written to directory ${apiDir}: ${testCases.length} files`);

    return writtenFiles;
  }

  private renderYamlWithHeader(testCase: BddTestCase): string {
    const header = `# BDD Test Case - ${this.toCommentSafeText(testCase.feature)}
# Generated for: ${this.toCommentSafeText(testCase.title)}
# Purpose: API endpoint test case for QA, BA, and business user review
# Note: This is a business-readable specification, not a technical implementation
---
`;

    const yamlBody = yamlDump(testCase, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
    });

    return header + yamlBody;
  }

  private generateIndexFile(
    testCases: BddTestCase[],
    featureName: string,
    apiName: string
  ): string {
    const index = {
      feature: featureName,
      apiName,
      description: `Test cases for ${apiName} endpoint`,
      totalScenarios: testCases.length,
      scenarios: testCases.map((tc) => ({
        id: tc.id,
        title: tc.title,
        type: tc.priority === 'P1' ? 'critical' : tc.tags.includes('negative') ? 'negative' : 'positive',
        tags: tc.tags,
        priority: tc.priority,
      })),
      generatedAt: new Date().toISOString(),
    };

    const header = `# Test Case Index
# ${this.toCommentSafeText(featureName)} - ${this.toCommentSafeText(apiName)}
# Generated: ${new Date().toISOString()}
---
`;

    const yamlBody = yamlDump(index, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
    });

    return header + yamlBody;
  }

  /** Collapses any embedded newlines/whitespace so the value is safe to place inside a single-line `#` comment. */
  private toCommentSafeText(value: string): string {
    return value.replace(/\s+/g, ' ').trim();
  }

  private extractUrlParts(url: string): { baseUrl: string; endpoint: string } {
    // If URL contains host information, extract base URL and endpoint
    if (url.includes('://')) {
      try {
        const urlObj = new URL(url);
        const baseUrl = `${urlObj.protocol}//${urlObj.host}`;
        const endpoint = urlObj.pathname + urlObj.search + urlObj.hash;
        return { baseUrl, endpoint };
      } catch {
        // If URL parsing fails, treat the whole thing as endpoint
        return { baseUrl: 'https://{Payment-IP}:{Payment-PORT}', endpoint: url };
      }
    } else {
      // Just a path, use placeholder base URL
      return { baseUrl: 'https://{Payment-IP}:{Payment-PORT}', endpoint: url };
    }
  }

  private buildExpectedFields(
    responseFields: Array<{ name: string; type: string; description: string; mandatory?: boolean; parentField?: string }>
  ): Array<{
    fieldPath: string;
    type: string;
    mandatory: boolean;
    description?: string;
    parentField?: string;
    constraints?: Record<string, unknown>;
  }> {
    return responseFields.map((field) => {
      const result: {
        fieldPath: string;
        type: string;
        mandatory: boolean;
        description?: string;
        parentField?: string;
        constraints?: Record<string, unknown>;
      } = {
        fieldPath: field.parentField ? `${field.parentField}.${field.name}` : field.name,
        type: field.type,
        mandatory: field.mandatory ?? false,
        constraints: this.inferConstraints(field.type),
      };

      if (field.description) {
        result.description = field.description;
      }
      if (field.parentField) {
        result.parentField = field.parentField;
      }

      return result;
    });
  }

  private inferConstraints(fieldType: string): Record<string, unknown> {
    const constraints: Record<string, unknown> = {};
    const lowerType = fieldType.toLowerCase();

    // Add type-specific constraints
    if (lowerType.includes('array')) {
      constraints.minItems = 0;
    } else if (lowerType.includes('decimal') || lowerType.includes('number')) {
      constraints.minValue = 0;
    } else if (lowerType.includes('string')) {
      constraints.minLength = 1;
    }

    return constraints;
  }

  /** Builds structured assertions from expected response fields, then folds in the spec's own
   *  plain-language business assertions (`scenario.assertions`) so documented business rules
   *  actually show up in the generated test case instead of being silently dropped. */
  private buildStructuredAssertions(
    expectedFields: Array<{
      fieldPath: string;
      type: string;
      mandatory: boolean;
      description?: string;
      constraints?: Record<string, unknown>;
    }>,
    scenario?: ApiScenario
  ): Array<{
    description: string;
    type: 'status' | 'field-exists' | 'field-type' | 'field-mandatory' | 'field-value' | 'constraint' | 'custom';
    target?: string;
    expectedValue?: unknown;
    constraint?: string;
  }> {
    const assertions: Array<{
      description: string;
      type: 'status' | 'field-exists' | 'field-type' | 'field-mandatory' | 'field-value' | 'constraint' | 'custom';
      target?: string;
      expectedValue?: unknown;
      constraint?: string;
    }> = [];

    // Add status code assertion
    assertions.push({
      description: 'Response status code is 200',
      type: 'status',
      expectedValue: 200,
    });

    // Add field-level assertions (limit to top-level fields only to keep file size reasonable)
    const topLevelFields = expectedFields.filter((f) => !f.fieldPath.includes('.') && !f.fieldPath.includes('[]'));

    for (const field of topLevelFields.slice(0, 15)) {
      // Limit to first 15 fields
      assertions.push({
        description: `Field '${field.fieldPath}' exists in response`,
        type: 'field-exists',
        target: field.fieldPath,
      });

      assertions.push({
        description: `Field '${field.fieldPath}' is of type '${field.type}'`,
        type: 'field-type',
        target: field.fieldPath,
        expectedValue: field.type,
      });

      if (field.mandatory) {
        assertions.push({
          description: `Field '${field.fieldPath}' is mandatory and not null/empty`,
          type: 'field-mandatory',
          target: field.fieldPath,
        });
      }
    }

    // Fold in the spec's own business-authored assertions, if any.
    for (const businessAssertion of scenario?.assertions || []) {
      const text = businessAssertion.trim();
      if (text.length > 0) {
        assertions.push({ description: text, type: 'custom' });
      }
    }

    return assertions;
  }

  private sanitizeForPath(str: string): string {
    return str
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }
}