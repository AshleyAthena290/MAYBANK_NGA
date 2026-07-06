import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { dump as yamlDump } from "js-yaml";
import type { DeepApiSpec, ApiSpecField } from "../parser/DeepApiSpecParserService.js";

interface TestScenario {
  id: string;
  title: string;
  category: "positive" | "negative" | "edge-case";
  description: string;
  preconditions: string[];
  requestHeaders: Record<string, string>;
  requestBody: string | null;
  expectedStatusCode: number;
  expectedOutcome: string;
  businessRule: string;
  assertions: string[];
}

interface HeaderSpec {
  name: string;
  type: string;
  mandatory: boolean;
  description: string;
  format: string;
  example: string;
}

interface FieldSpec {
  name: string;
  parentField: string;
  type: string;
  mandatory: boolean;
  description: string;
  remark: string;
}

export class ComprehensiveApiYamlGeneratorService {
  public async generate(spec: DeepApiSpec, outputDir: string, sourceFileName: string): Promise<string> {
    const apiDir = join(outputDir, "api");
    await mkdir(apiDir, { recursive: true });

    const document = this.buildDocument(spec, sourceFileName);
    const content = this.renderYaml(document);

    const slug = this.toSlug(spec.apiName || spec.sourceWorksheet);
    const filePath = join(apiDir, `${slug}.comprehensive.yaml`);
    await writeFile(filePath, content, "utf-8");

    return filePath;
  }

  private buildDocument(spec: DeepApiSpec, sourceFileName: string): object {
    const mandatoryHeaders = spec.requestHeaders.filter((h) => h.mandatory);
    const optionalHeaders = spec.requestHeaders.filter((h) => !h.mandatory);
    const scenarios = this.buildTestScenarios(spec);

    return {
      metadata: {
        id: this.toId(spec.apiName || spec.sourceWorksheet),
        title: spec.apiDescription || spec.apiName,
        feature: this.normalizeFeature(spec.sourceWorksheet),
        apiName: spec.apiName,
        author: "AI",
        generatedDate: new Date().toISOString().slice(0, 10),
        sourceWorksheet: spec.sourceWorksheet,
        apiSpecFile: sourceFileName,
        version: this.extractVersion(spec.url)
      },

      businessIntent: [
        spec.apiDescription,
        "This API must be called before the user begins any transfer flow.",
        "The response populates all dropdowns, configuration options, and constraints displayed to the user."
      ],

      endpoint: {
        method: spec.method,
        url: spec.url,
        contentType: "application/json",
        authentication: "Required — see request headers section"
      },

      authentication: {
        scheme: "Token-based",
        headerName: "X-MB-Authorization",
        description: "A unique authorization token that identifies the calling session. Must follow the defined format.",
        tokenFormat: this.getHeaderFormat(spec.requestHeaders, "X-MB-Authorization"),
        isMandatory: true
      },

      request: {
        body: "None — this is a GET request with no request body",
        headers: {
          mandatoryHeaders: mandatoryHeaders.map((h) => this.mapHeaderField(h)),
          optionalHeaders: optionalHeaders.map((h) => this.mapHeaderField(h))
        }
      },

      response: {
        successStatusCode: 200,
        description: "Returns all transfer initialization data needed to populate the transfer UI",
        responseBodyStructure: this.buildResponseStructure(spec.responseFields),
        ...(spec.responseSample.trim().length > 0
          ? { responseSample: this.parseJsonSafely(spec.responseSample) }
          : {})
      },

      testScenarios: {
        positive: scenarios.filter((s) => s.category === "positive"),
        negative: scenarios.filter((s) => s.category === "negative"),
        edgeCases: scenarios.filter((s) => s.category === "edge-case")
      },

      assertions: this.buildAssertions(spec),

      businessRules: this.buildBusinessRules(spec),

      references: {
        sourceWorksheet: spec.sourceWorksheet,
        apiSpecFile: sourceFileName,
        relatedEndpoints: this.suggestRelatedEndpoints(spec)
      }
    };
  }

  private buildTestScenarios(spec: DeepApiSpec): TestScenario[] {
    const mandatoryHeaders = spec.requestHeaders.filter((h) => h.mandatory);
    const fullHeaders = Object.fromEntries(
      mandatoryHeaders.map((h) => [h.name, this.getHeaderExample(h)])
    );

    const scenarios: TestScenario[] = [];

    // ── Positive ────────────────────────────────────────────────────────────

    scenarios.push({
      id: "TC-POS-001",
      title: "Successful retrieval of transfer initialization data",
      category: "positive",
      description:
        "Call the endpoint with all mandatory headers present and valid. Expect a 200 response containing all transfer modes, recurring options, and reference data.",
      preconditions: [
        "Service is deployed and reachable",
        "A valid authorization token is available",
        "The environment identifier is correct"
      ],
      requestHeaders: fullHeaders,
      requestBody: null,
      expectedStatusCode: 200,
      expectedOutcome: "Response contains transferModes, recurringOptions, purposes, transferDetailOptions, and additionalDetails",
      businessRule: "System must return initialization data for all active transfer configurations before the user begins a transfer.",
      assertions: [
        "Response status code is 200",
        "Response body contains field: transferModes (Array)",
        "transferModes contains at least one entry",
        "Each transferMode entry contains: code, name, fee, perTransactionMinAmount, perTransactionMaxAmount, isActive",
        "recurringOptions contains frequencies list",
        "purposes list is not empty",
        "Response body contains transferDetailOptions",
        "Response timestamp is in ISO 8601 format",
        "correlationId in response matches X-Correlation-Id in request header"
      ]
    });

    // ── Negative ─────────────────────────────────────────────────────────────

    for (const header of mandatoryHeaders) {
      const headersWithoutThis = { ...fullHeaders };
      delete headersWithoutThis[header.name];

      scenarios.push({
        id: `TC-NEG-${String(scenarios.filter(s => s.category === "negative").length + 1).padStart(3, "0")}`,
        title: `Request rejected when mandatory header "${header.name}" is missing`,
        category: "negative",
        description: `Send the request without the required "${header.name}" header. The API should reject the request and return an appropriate error.`,
        preconditions: ["Service is deployed and reachable"],
        requestHeaders: headersWithoutThis,
        requestBody: null,
        expectedStatusCode: 400,
        expectedOutcome: `Request rejected with 400 Bad Request — mandatory header ${header.name} is missing`,
        businessRule: `${header.name} is mandatory: ${header.description || "Required for every request"}`,
        assertions: [
          "Response status code is 400 or 401",
          `Error message references missing header: ${header.name}`,
          "Response body does not contain transfer initialization data"
        ]
      });
    }

    scenarios.push({
      id: `TC-NEG-${String(scenarios.filter(s => s.category === "negative").length + 1).padStart(3, "0")}`,
      title: "Request rejected with invalid authorization token",
      category: "negative",
      description: "Send the request with a malformed or expired X-MB-Authorization token. The API should return 401 Unauthorized.",
      preconditions: ["Service is deployed and reachable"],
      requestHeaders: { ...fullHeaders, "X-MB-Authorization": "INVALID_TOKEN_VALUE" },
      requestBody: null,
      expectedStatusCode: 401,
      expectedOutcome: "Request rejected with 401 Unauthorized — authorization token is invalid",
      businessRule: "Only requests with valid authorization tokens may retrieve initialization data.",
      assertions: [
        "Response status code is 401",
        "Response does not contain transfer initialization data",
        "Response includes an error message describing the authentication failure"
      ]
    });

    scenarios.push({
      id: `TC-NEG-${String(scenarios.filter(s => s.category === "negative").length + 1).padStart(3, "0")}`,
      title: "Request rejected with incorrect Content-Type header",
      category: "negative",
      description: "Send the request with Content-Type set to an unsupported media type (e.g. text/plain). The server should reject it.",
      preconditions: ["Service is deployed and reachable", "Valid authorization token available"],
      requestHeaders: { ...fullHeaders, "Content-Type": "text/plain" },
      requestBody: null,
      expectedStatusCode: 415,
      expectedOutcome: "Request rejected with 415 Unsupported Media Type",
      businessRule: "The API only accepts requests that declare application/json as the expected response format.",
      assertions: [
        "Response status code is 415",
        "Response body does not contain transfer initialization data"
      ]
    });

    // ── Edge Cases ───────────────────────────────────────────────────────────

    scenarios.push({
      id: "TC-EDGE-001",
      title: "Duplicate X-Correlation-Id reused across multiple requests",
      category: "edge-case",
      description: "Send two consecutive requests with identical X-Correlation-Id values. Verify whether the service detects and handles duplicate correlation IDs gracefully.",
      preconditions: ["Service is deployed and reachable", "A valid authorization token is available"],
      requestHeaders: fullHeaders,
      requestBody: null,
      expectedStatusCode: 200,
      expectedOutcome: "Both requests succeed independently OR second request returns an appropriate conflict/duplicate response",
      businessRule: "Correlation IDs are used for end-to-end tracing. Whether they must be unique per request depends on the service implementation.",
      assertions: [
        "Second request does not fail with an unexpected 500 error",
        "Response from second request contains valid initialization data or a clear error"
      ]
    });

    scenarios.push({
      id: "TC-EDGE-002",
      title: "Expired authorization token",
      category: "edge-case",
      description: "Send the request using an authorization token that was previously valid but has since expired. Verify the service correctly rejects the expired token.",
      preconditions: ["Service is deployed", "An expired but correctly formatted authorization token is available"],
      requestHeaders: { ...fullHeaders, "X-MB-Authorization": "SGOLM010101001_0001" },
      requestBody: null,
      expectedStatusCode: 401,
      expectedOutcome: "Request rejected with 401 Unauthorized — token has expired",
      businessRule: "Authorization tokens have a validity window. Expired tokens must not be accepted.",
      assertions: [
        "Response status code is 401",
        "Error message indicates token expiry or authentication failure"
      ]
    });

    scenarios.push({
      id: "TC-EDGE-003",
      title: "Correct response when all transfer modes are inactive",
      category: "edge-case",
      description: "In a test environment configured with all transfer modes deactivated (isActive: false), verify that the API still returns a valid 200 response with an empty or fully inactive transferModes array.",
      preconditions: [
        "Service is deployed in a test environment",
        "All transfer modes are set to inactive in backend configuration"
      ],
      requestHeaders: fullHeaders,
      requestBody: null,
      expectedStatusCode: 200,
      expectedOutcome: "Response returns 200 with transferModes array — each entry has isActive: false, or the array is empty",
      businessRule: "The API must not fail when no transfer modes are active. The channel must handle an empty or all-inactive list gracefully.",
      assertions: [
        "Response status code is 200",
        "transferModes is present in response (may be empty array)",
        "If entries exist, all have isActive: false",
        "Response structure remains valid even with empty arrays"
      ]
    });

    scenarios.push({
      id: "TC-EDGE-004",
      title: "Response time under normal load is within acceptable SLA",
      category: "edge-case",
      description: "Send the request under normal conditions and measure the response time. Verify the endpoint responds within the defined performance threshold.",
      preconditions: ["Service is deployed and running under normal load"],
      requestHeaders: fullHeaders,
      requestBody: null,
      expectedStatusCode: 200,
      expectedOutcome: "Response is received within the defined SLA threshold (typically under 3 seconds for initialization APIs)",
      businessRule: "Initialization data must be available quickly as it is a prerequisite for the user-facing transfer flow.",
      assertions: [
        "Response status code is 200",
        "Response time is within acceptable threshold",
        "Response body is complete and not truncated"
      ]
    });

    scenarios.push({
      id: "TC-EDGE-005",
      title: "Request with additional unknown headers is tolerated",
      category: "edge-case",
      description: "Send the request with all mandatory headers plus additional unknown custom headers. Verify the service processes the request without error.",
      preconditions: ["Service is deployed and reachable", "Valid authorization token available"],
      requestHeaders: { ...fullHeaders, "X-Custom-Unknown-Header": "test-value" },
      requestBody: null,
      expectedStatusCode: 200,
      expectedOutcome: "Request succeeds normally — unknown headers are ignored by the service",
      businessRule: "Services should tolerate additional headers for forward compatibility.",
      assertions: [
        "Response status code is 200",
        "Response body contains valid transfer initialization data"
      ]
    });

    return scenarios;
  }

  private buildResponseStructure(fields: ApiSpecField[]): object {
    const topLevel = fields.filter((f) => !f.parentField || f.parentField === "-" || f.parentField === "");
    const result: Record<string, object | string> = {};

    for (const field of topLevel) {
      const children = fields.filter(
        (f) => f.parentField === field.name
      );

      if (children.length > 0) {
        result[field.name] = {
          type: field.type,
          description: field.description,
          fields: Object.fromEntries(
            children.map((child) => [
              child.name,
              {
                type: child.type,
                description: child.description,
                ...(child.remark ? { note: child.remark } : {})
              }
            ])
          )
        };
      } else {
        result[field.name] = {
          type: field.type,
          description: field.description,
          ...(field.remark ? { note: field.remark } : {})
        };
      }
    }

    return result;
  }

  private buildAssertions(spec: DeepApiSpec): object {
    return {
      statusCode: [
        "On success: 200 OK",
        "On missing mandatory header: 400 Bad Request or 401 Unauthorized",
        "On invalid token: 401 Unauthorized",
        "On unsupported media type: 415 Unsupported Media Type",
        "On service error: 500 Internal Server Error"
      ],
      responseStructure: [
        "Response body must be valid JSON",
        "Root-level fields must include: transferModes, recurringOptions, purposes, transferDetailOptions, additionalDetails",
        "transferModes must be an array (may be empty)",
        "Each transferMode must contain: code, name, fee, perTransactionMinAmount, perTransactionMaxAmount, isActive",
        "recurringOptions.frequencies must be an array with at least one entry",
        "purposes must be an array",
        "transferDetailOptions must contain: sourceOfFunds, recipientTypes, recipientCitizenships",
        "additionalDetails must contain: recipientStatuses, recipientCategories, relationships, transactionCategories"
      ],
      businessBehaviour: [
        "isActive flag on each transferMode must reflect the live backend configuration",
        "operatingHoursLabel must match the availability schedule of the mode",
        "perTransactionMinAmount must be less than perTransactionMaxAmount",
        "fee values must be non-negative numbers",
        "recurringOptions.minStartDate must be a valid ISO date (YYYY-MM-DD)",
        "recurringOptions.maxStartDate must be later than minStartDate",
        "correlationId in the response must match the X-Correlation-Id header sent in the request",
        "Timestamp in the response must be in ISO 8601 format"
      ],
      security: [
        "X-MB-Authorization token must be validated before any data is returned",
        "Requests from unauthorized callers must receive 401 — no partial data returned",
        "X-Correlation-Id must be logged end-to-end for traceability"
      ]
    };
  }

  private buildBusinessRules(spec: DeepApiSpec): string[] {
    const rules: string[] = [
      "This API must be called before any transfer initiation to load required configuration.",
      "The channel must not allow a user to proceed to transfer entry without a successful response from this endpoint.",
      "Transfer modes returned with isActive: false must not be presented as available options in the UI.",
      "The fee displayed to the user must exactly match the value returned in the transferModes.fee field.",
      "Transaction amount entered by the user must respect perTransactionMinAmount and perTransactionMaxAmount per selected mode.",
      "Recurring transfer options (frequencies, minStartDate, maxStartDate) must be used to populate scheduling UI controls.",
      "Purpose codes returned by this API must be submitted in subsequent transfer initiation requests.",
      "Source of fund codes returned must match what is expected by downstream transfer APIs.",
      "Windowed transfer modes (availabilityType: WINDOWED) must respect operating hours enforced by the backend."
    ];

    return rules;
  }

  private suggestRelatedEndpoints(spec: DeepApiSpec): string[] {
    const related = [
      "GET /pt/maintenance/v1/ext/transfers/countries — Retrieve country list",
      "GET /pt/maintenance/v1/ext/banks — Retrieve active banks",
      "GET /pt/{product}/v1/ext/source-accounts — Retrieve source accounts",
      "POST /pt/intrabank/v1/pre-check — Intrabank pre-monetary check",
      "POST /pt/interbank/v1/pre-check — Interbank pre-monetary check"
    ];

    return related;
  }

  private mapHeaderField(h: ApiSpecField): HeaderSpec {
    return {
      name: h.name,
      type: h.type,
      mandatory: h.mandatory,
      description: h.description,
      format: h.format || "-",
      example: this.getHeaderExample(h)
    };
  }

  private getHeaderExample(h: ApiSpecField): string {
    if (h.name === "X-MB-Authorization") return "SGOLM010726001_0001";
    if (h.name === "X-MB-ENV") return "SIT";
    if (h.name === "X-Correlation-Id") return "d9b2d63d-a233-4123-8478-316827018c1e";
    if (h.name === "Content-Type") return "application/json";
    if (h.name === "Accept") return "application/json";
    if (h.name === "X-MB-Client-Id") return "MAE-MOBILE";
    if (h.name === "X-MB-API-Key") return "api-key-value";
    return h.format || "-";
  }

  private getHeaderFormat(headers: ApiSpecField[], name: string): string {
    const header = headers.find((h) => h.name === name);
    return header?.format || header?.description || "-";
  }

  private extractVersion(url: string): string {
    const match = url.match(/\/(v\d+)\//);
    return match?.[1] ?? "v1";
  }

  private normalizeFeature(worksheetName: string): string {
    return worksheetName
      .replace(/([A-Z])/g, " $1")
      .replace(/^Get\s*/i, "")
      .replace(/^Post\s*/i, "")
      .trim();
  }

  private toId(name: string): string {
    return name.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "").toUpperCase();
  }

  private toSlug(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "api-spec";
  }

  private parseJsonSafely(raw: string): unknown {
    try {
      return JSON.parse(raw) as unknown;
    } catch {
      return raw;
    }
  }

  private renderYaml(document: unknown): string {
    const header = [
      "# ─────────────────────────────────────────────────────────────────────────────",
      "# API Specification — Single Source of Truth",
      "# Generated by FSD Parser (AI-powered QA Workflow)",
      "#",
      "# Audience: QA Engineers · Business Analysts · Product Owners · Developers",
      "# Purpose:  Covers all positive, negative, and edge-case test scenarios.",
      "# ─────────────────────────────────────────────────────────────────────────────",
      ""
    ].join("\n");

    const content = yamlDump(document, {
      indent: 2,
      lineWidth: 140,
      noRefs: true,
      sortKeys: false
    });

    return header + content;
  }
}
