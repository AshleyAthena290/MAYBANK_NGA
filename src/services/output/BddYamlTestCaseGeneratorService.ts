import { dump as yamlDump } from 'js-yaml';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
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
    body?: Record<string, unknown>;
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

/**
 * Generates BDD-style YAML test case files for API endpoints.
 * One file per business scenario, suitable for test runners and QA teams.
 */
export class BddYamlTestCaseGeneratorService {
  /**
   * Generate BDD YAML test cases from an API scenario.
   * Creates positive, negative, and edge-case scenarios.
   */
  generateTestCases(
    apiScenario: ApiScenario,
    featureName: string,
    apiName: string,
    fullUrl?: string,
    responseFields?: Array<{ name: string; type: string; description: string; mandatory?: boolean; parentField?: string }>
  ): BddTestCase[] {
    const testCases: BddTestCase[] = [];

    // 1. Positive scenario (happy path)
    testCases.push(this.createPositiveScenario(apiScenario, featureName, apiName, fullUrl, responseFields));

    // 2. Negative scenarios
    const negativeScenarios = this.createNegativeScenarios(apiScenario, featureName, apiName, fullUrl);
    testCases.push(...negativeScenarios);

    // 3. Edge cases
    const edgeCases = this.createEdgeCaseScenarios(apiScenario, featureName, apiName, fullUrl);
    testCases.push(...edgeCases);

    return testCases;
  }

  private createPositiveScenario(
    scenario: ApiScenario,
    featureName: string,
    apiName: string,
    fullUrl?: string,
    responseFields?: Array<{ name: string; type: string; description: string; mandatory?: boolean; parentField?: string }>
  ): BddTestCase {
    const { baseUrl, endpoint } = this.extractUrlParts(fullUrl || scenario.endpoint);

    // Build expected fields with constraints
    const expectedFields = this.buildExpectedFields(responseFields || []);

    // Build structured assertions
    const assertions = this.buildStructuredAssertions(expectedFields);

    return {
      id: `${apiName}-001-positive`,
      title: `${scenario.method} ${scenario.endpoint} - Happy Path`,
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
      testData: scenario.testData || {},
      request: {
        method: scenario.method,
        url: fullUrl || scenario.endpoint,
        endpoint: endpoint,
        baseUrl: baseUrl,
        headers: this.buildDefaultHeaders(scenario.authentication),
        pathParams: scenario.request?.pathParams || {},
        queryParams: scenario.request?.queryParams || {},
        body: scenario.request?.body,
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

  private createNegativeScenarios(
    scenario: ApiScenario,
    featureName: string,
    apiName: string,
    fullUrl?: string
  ): BddTestCase[] {
    const negativeScenarios: BddTestCase[] = [];
    const baseScenario = this.createPositiveScenario(scenario, featureName, apiName, fullUrl);

    // Scenario: Missing authentication
    negativeScenarios.push({
      ...baseScenario,
      id: `${apiName}-002-missing-auth`,
      title: `${scenario.method} ${scenario.endpoint} - Missing Authentication`,
      description: 'Request without authentication credentials should fail',
      tags: ['negative', 'authentication', 'security'],
      priority: 'P2',
      request: {
        ...baseScenario.request,
        headers: {}, // No auth headers
      },
      response: {
        successStatusCode: 401,
        successDescription: 'Unauthorized - Authentication required',
        schema: {
          error: 'string',
          message: 'string',
        },
        expectedFields: [
          {
            fieldPath: 'error',
            type: 'String',
            mandatory: true,
            description: 'Error code',
          },
          {
            fieldPath: 'message',
            type: 'String',
            mandatory: true,
            description: 'Error message',
          },
        ],
      },
      assertions: [
        {
          description: 'Response status code is 401',
          type: 'status',
          expectedValue: 401,
        },
        {
          description: "Field 'error' exists and is of type String",
          type: 'field-type',
          target: 'error',
          expectedValue: 'String',
        },
        {
          description: "Error message indicates missing authentication",
          type: 'custom',
        },
      ],
    });

    // Scenario: Invalid authentication
    negativeScenarios.push({
      ...baseScenario,
      id: `${apiName}-003-invalid-auth`,
      title: `${scenario.method} ${scenario.endpoint} - Invalid Authentication`,
      description: 'Request with invalid credentials should fail',
      tags: ['negative', 'authentication', 'security'],
      priority: 'P2',
      request: {
        ...baseScenario.request,
        headers: {
          ...this.buildDefaultHeaders(scenario.authentication),
          Authorization: 'Bearer invalid_token_12345',
        },
      },
      response: {
        successStatusCode: 401,
        successDescription: 'Unauthorized - Invalid credentials',
        schema: {
          error: 'string',
          message: 'string',
        },
        expectedFields: [
          {
            fieldPath: 'error',
            type: 'String',
            mandatory: true,
          },
        ],
      },
      assertions: [
        {
          description: 'Response status code is 401',
          type: 'status',
          expectedValue: 401,
        },
        {
          description: 'Error message indicates invalid authentication',
          type: 'custom',
        },
      ],
    });

    // Scenario: Invalid content type
    negativeScenarios.push({
      ...baseScenario,
      id: `${apiName}-004-invalid-content-type`,
      title: `${scenario.method} ${scenario.endpoint} - Invalid Content-Type`,
      description: 'Request with invalid Content-Type should fail',
      tags: ['negative', 'validation'],
      priority: 'P2',
      request: {
        ...baseScenario.request,
        headers: {
          ...baseScenario.request.headers,
          'Content-Type': 'application/xml',
        },
      },
      response: {
        successStatusCode: 400,
        successDescription: 'Bad Request - Invalid Content-Type',
        schema: {
          error: 'string',
          message: 'string',
        },
        expectedFields: [],
      },
      assertions: [
        {
          description: 'Response status code is 400',
          type: 'status',
          expectedValue: 400,
        },
        {
          description: 'Error message indicates invalid content type',
          type: 'custom',
        },
      ],
    });

    return negativeScenarios;
  }

  private createEdgeCaseScenarios(
    scenario: ApiScenario,
    featureName: string,
    apiName: string,
    fullUrl?: string
  ): BddTestCase[] {
    const edgeCases: BddTestCase[] = [];
    const baseScenario = this.createPositiveScenario(scenario, featureName, apiName, fullUrl);

    // Edge case: Duplicate Correlation ID
    edgeCases.push({
      ...baseScenario,
      id: `${apiName}-005-duplicate-correlation-id`,
      title: `${scenario.method} ${scenario.endpoint} - Duplicate Correlation ID`,
      description: 'Same request with duplicate correlation ID should be idempotent',
      tags: ['edge-case', 'idempotency'],
      priority: 'P2',
      preconditions: [
        ...baseScenario.preconditions,
        'First request with correlation ID has been processed',
      ],
      request: {
        ...baseScenario.request,
        headers: {
          ...baseScenario.request.headers,
          'X-Correlation-Id': 'duplicate-correlation-123',
        },
      },
      assertions: [
        {
          description: 'Response status code is 200 (or 202 for idempotent)',
          type: 'custom',
        },
        {
          description: 'Same response as first request',
          type: 'custom',
        },
        {
          description: 'No duplicate processing occurred',
          type: 'custom',
        },
      ],
    });

    // Edge case: Request timeout
    edgeCases.push({
      ...baseScenario,
      id: `${apiName}-006-request-timeout`,
      title: `${scenario.method} ${scenario.endpoint} - Request Timeout`,
      description: 'Request exceeding timeout threshold should fail gracefully',
      tags: ['edge-case', 'performance'],
      priority: 'P3',
      response: {
        successStatusCode: 504,
        successDescription: 'Gateway Timeout',
        schema: {
          error: 'string',
          message: 'string',
        },
        expectedFields: [],
      },
      assertions: [
        {
          description: 'Response status code is 504',
          type: 'status',
          expectedValue: 504,
        },
        {
          description: 'Error message indicates timeout',
          type: 'custom',
        },
      ],
    });

    // Edge case: Empty/malformed request body
    edgeCases.push({
      ...baseScenario,
      id: `${apiName}-007-empty-request-body`,
      title: `${scenario.method} ${scenario.endpoint} - Empty Request Body`,
      description: 'Request with empty body should be properly rejected',
      tags: ['edge-case', 'validation'],
      priority: 'P2',
      request: {
        ...baseScenario.request,
        body: {},
      },
      response: {
        successStatusCode: 400,
        successDescription: 'Bad Request - Invalid or missing required fields',
        schema: {
          error: 'string',
          message: 'string',
        },
        expectedFields: [],
      },
      assertions: [
        {
          description: 'Response status code is 400',
          type: 'status',
          expectedValue: 400,
        },
        {
          description: 'Error message lists missing required fields',
          type: 'custom',
        },
      ],
    });

    return edgeCases;
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
    const header = `# BDD Test Case - ${testCase.feature}
# Generated for: ${testCase.title}
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
# ${featureName} - ${apiName}
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

  private buildDefaultHeaders(authentication: string): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Correlation-Id': 'test-correlation-id-' + Date.now(),
    };

    // Add auth headers based on scheme
    if (authentication?.toLowerCase().includes('bearer') || authentication?.toLowerCase().includes('oauth')) {
      headers['Authorization'] = 'Bearer <token>';
    } else if (authentication?.toLowerCase().includes('api-key')) {
      headers['X-API-Key'] = '<api-key>';
    } else if (authentication?.toLowerCase().includes('basic')) {
      headers['Authorization'] = 'Basic <base64-encoded-credentials>';
    }

    return headers;
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

  private buildStructuredAssertions(
    expectedFields: Array<{
      fieldPath: string;
      type: string;
      mandatory: boolean;
      description?: string;
      constraints?: Record<string, unknown>;
    }>
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
      // Field exists assertion
      assertions.push({
        description: `Field '${field.fieldPath}' exists in response`,
        type: 'field-exists',
        target: field.fieldPath,
      });

      // Field type assertion
      assertions.push({
        description: `Field '${field.fieldPath}' is of type '${field.type}'`,
        type: 'field-type',
        target: field.fieldPath,
        expectedValue: field.type,
      });

      // Mandatory field assertion
      if (field.mandatory) {
        assertions.push({
          description: `Field '${field.fieldPath}' is mandatory and not null/empty`,
          type: 'field-mandatory',
          target: field.fieldPath,
        });
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
