import { mkdir, writeFile } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import { dump as yamlDump } from "js-yaml";
import type { ApiScenario } from "../../types/apiSpec.js";

export interface ApiSpecYamlDocument {
  metadata: {
    id: string;
    title: string;
    feature: string;
    description: string;
    author: "AI";
    generatedDate: string;
    sourceWorksheet: string;
    sourceRows: string;
    apiSpecFile: string;
  };
  tags: string[];
  priority: string;
  environment: string[];
  authentication: string;
  preconditions: string[];
  testData: Record<string, string>;
  request: {
    method: string;
    endpoint: string;
    headers: Record<string, string>;
    pathParams: Record<string, string>;
    queryParams: Record<string, string>;
    body: Record<string, unknown>;
  };
  response: {
    success: {
      statusCode: number;
      description: string;
      bodySchema: Record<string, string>;
    };
    errorCases: Array<{ statusCode: number; description: string }>;
  };
  assertions: string[];
  negativeScenarios: string[];
  cleanup: string[];
  references: {
    fsdFeature: string;
    sourceWorksheet: string;
    apiSpecFile: string;
  };
}

export class ApiSpecYamlGeneratorService {
  public async generate(
    scenarios: ApiScenario[],
    outputDir: string,
    inputFilePath: string
  ): Promise<string[]> {
    const apiSpecDir = join(outputDir, "api");
    await mkdir(apiSpecDir, { recursive: true });

    const sourceFileName = basename(inputFilePath);
    const filePaths: string[] = [];
    const usedSlugs = new Map<string, number>();

    for (const scenario of scenarios) {
      const scenarioWithSource: ApiScenario = {
        ...scenario,
        references: {
          ...scenario.references,
          apiSpecFile: sourceFileName
        }
      };

      const baseSlug = this.toFileSlug(scenario.id);
      const duplicateCount = usedSlugs.get(baseSlug) ?? 0;
      usedSlugs.set(baseSlug, duplicateCount + 1);
      const uniqueSlug = duplicateCount === 0 ? baseSlug : `${baseSlug}-${duplicateCount + 1}`;

      const document = this.toYamlDocument(scenarioWithSource);
      const yamlContent = this.renderYaml(document);

      const filePath = join(apiSpecDir, `${uniqueSlug}.scenario.yaml`);
      await writeFile(filePath, yamlContent, "utf-8");
      filePaths.push(filePath);
    }

    return filePaths;
  }

  public async generateIndex(
    scenarios: ApiScenario[],
    outputDir: string,
    inputFilePath: string
  ): Promise<string> {
    const apiSpecDir = join(outputDir, "api");
    await mkdir(apiSpecDir, { recursive: true });

    const sourceFileName = basename(inputFilePath);
    const indexWithoutExt = sourceFileName.slice(0, Math.max(0, sourceFileName.length - extname(sourceFileName).length));
    const indexSlug = indexWithoutExt.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

    const groupedByFeature = new Map<string, ApiScenario[]>();
    for (const scenario of scenarios) {
      const group = groupedByFeature.get(scenario.feature) ?? [];
      group.push(scenario);
      groupedByFeature.set(scenario.feature, group);
    }

    const index = {
      metadata: {
        title: `API Specification Index — ${sourceFileName}`,
        author: "AI" as const,
        generatedDate: new Date().toISOString().slice(0, 10),
        sourceFile: sourceFileName,
        totalScenarios: scenarios.length
      },
      features: Array.from(groupedByFeature.entries()).map(([feature, featureScenarios]) => ({
        feature,
        scenarioCount: featureScenarios.length,
        scenarios: featureScenarios.map((scenario) => ({
          id: scenario.id,
          title: scenario.title,
          method: scenario.method,
          endpoint: scenario.endpoint,
          priority: scenario.priority,
          tags: scenario.tags
        }))
      }))
    };

    const indexYaml = this.renderYaml(index);
    const indexPath = join(apiSpecDir, `${indexSlug}.index.yaml`);
    await writeFile(indexPath, indexYaml, "utf-8");

    return indexPath;
  }

  private toYamlDocument(scenario: ApiScenario): ApiSpecYamlDocument {
    return {
      metadata: {
        id: scenario.id,
        title: scenario.title,
        feature: scenario.feature,
        description: scenario.description,
        author: "AI",
        generatedDate: new Date().toISOString().slice(0, 10),
        sourceWorksheet: scenario.references.sourceWorksheet,
        sourceRows: scenario.references.sourceRows,
        apiSpecFile: scenario.references.apiSpecFile
      },
      tags: scenario.tags,
      priority: scenario.priority,
      environment: scenario.environment,
      authentication: scenario.authentication,
      preconditions: scenario.preconditions.length > 0
        ? scenario.preconditions
        : ["Service endpoint is reachable", "Authentication credentials are available"],
      testData: scenario.testData,
      request: {
        method: scenario.method,
        endpoint: scenario.endpoint,
        headers: scenario.request.headers,
        pathParams: scenario.request.pathParams,
        queryParams: scenario.request.queryParams,
        body: scenario.request.body
      },
      response: {
        success: {
          statusCode: scenario.response.successStatusCode,
          description: scenario.response.successDescription,
          bodySchema: scenario.response.bodySchema
        },
        errorCases: scenario.response.errorStatusCodes.map((error) => ({
          statusCode: error.code,
          description: error.description
        }))
      },
      assertions: scenario.assertions.length > 0
        ? scenario.assertions
        : [`Response status is ${scenario.response.successStatusCode}`, "Response body matches expected schema"],
      negativeScenarios: scenario.negativeScenarios,
      cleanup: scenario.cleanup,
      references: {
        fsdFeature: scenario.references.fsdFeature,
        sourceWorksheet: scenario.references.sourceWorksheet,
        apiSpecFile: scenario.references.apiSpecFile
      }
    };
  }

  private renderYaml(document: unknown): string {
    const header = [
      "# Generated by FSD Parser — AI-powered QA Workflow",
      "# DO NOT EDIT: This file is regenerated on each pipeline run.",
      "# For business intent, see the FSD Markdown artifacts.",
      ""
    ].join("\n");

    const content = yamlDump(document, {
      indent: 2,
      lineWidth: 120,
      noRefs: true,
      sortKeys: false
    });

    return header + content;
  }

  private toFileSlug(value: string): string {
    const normalized = value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    return normalized.length > 0 ? normalized : "scenario";
  }
}
