import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { GeneratedTestCase } from "./TestCaseGeneratorService.js";
import type { FeatureTestCaseBundle } from "./TestCaseGeneratorService.js";

export interface PlaywrightArtifact {
  testFilePath: string;
  pageObjectPath?: string;
  fixturePath?: string;
  dataFilePath?: string;
}

export class PlaywrightGeneratorService {
  public generate(testCases: GeneratedTestCase[]): PlaywrightArtifact[] {
    const automatable = testCases.filter((testCase) => testCase.automationCandidate);
    return automatable.map((testCase, index) => ({
      testFilePath: `generated/test-${index + 1}.spec.ts`,
      dataFilePath: `generated/data-${index + 1}.json`
    }));
  }

  public async generateAll(bundles: FeatureTestCaseBundle[], outputDir: string): Promise<PlaywrightArtifact[]> {
    const rootDir = join(outputDir, "playwright");
    const testsDir = join(rootDir, "tests");
    const pageObjectsDir = join(rootDir, "page-objects");
    const fixturesDir = join(rootDir, "fixtures");
    const dataDir = join(rootDir, "data");
    const helpersDir = join(rootDir, "helpers");

    await Promise.all([
      mkdir(testsDir, { recursive: true }),
      mkdir(pageObjectsDir, { recursive: true }),
      mkdir(fixturesDir, { recursive: true }),
      mkdir(dataDir, { recursive: true }),
      mkdir(helpersDir, { recursive: true })
    ]);

    const fixturePath = join(fixturesDir, "base.fixture.ts");
    const helperPath = join(helpersDir, "assertions.ts");

    await writeFile(fixturePath, this.renderFixtureTemplate(), "utf-8");
    await writeFile(helperPath, this.renderHelperTemplate(), "utf-8");

    const artifacts: PlaywrightArtifact[] = [];

    for (const bundle of bundles) {
      const automatableCases = bundle.testCases.filter((testCase) => testCase.automationCandidate);
      if (automatableCases.length === 0) {
        continue;
      }

      const slug = this.toFileSlug(bundle.featureName);
      const testFilePath = join(testsDir, `${slug}.spec.ts`);
      const dataFilePath = join(dataDir, `${slug}.test-data.json`);

      const needsPageObject = automatableCases.some((testCase) =>
        ["ui", "accessibility", "visual"].includes(testCase.automationType)
      );
      const pageObjectPath = needsPageObject ? join(pageObjectsDir, `${slug}.page.ts`) : undefined;

      await writeFile(testFilePath, this.renderSpecFile(bundle.featureName, slug, automatableCases, needsPageObject), "utf-8");
      await writeFile(dataFilePath, JSON.stringify(automatableCases, null, 2), "utf-8");

      if (pageObjectPath) {
        await writeFile(pageObjectPath, this.renderPageObjectTemplate(bundle.featureName), "utf-8");
      }

      const artifact: PlaywrightArtifact = {
        testFilePath,
        fixturePath,
        dataFilePath
      };

      if (pageObjectPath) {
        artifact.pageObjectPath = pageObjectPath;
      }

      artifacts.push(artifact);
    }

    return artifacts;
  }

  private renderSpecFile(
    featureName: string,
    slug: string,
    testCases: GeneratedTestCase[],
    includePageObject: boolean
  ): string {
    const imports = [
      'import { test, expect } from "@playwright/test";',
      'import { buildApiHeaders, assertA11yStub, assertVisualStub } from "../helpers/assertions";'
    ];

    if (includePageObject) {
      imports.push(`import { ${this.toClassName(featureName)}Page } from "../page-objects/${slug}.page";`);
    }

    const blocks = testCases.map((testCase) => this.renderTestCaseBlock(testCase, includePageObject, featureName));

    return [
      ...imports,
      "",
      `test.describe("${featureName}", () => {`,
      ...blocks,
      "});",
      ""
    ].join("\n");
  }

  private renderTestCaseBlock(testCase: GeneratedTestCase, includePageObject: boolean, featureName: string): string {
    const title = `${testCase.testCaseId ?? "TC"} | ${testCase.requirement.replace(/"/g, "'")}`;

    if (testCase.automationType === "api") {
      return [
        `  test("${title}", async ({ request }) => {`,
        "    const response = await request.post(\"/\", {",
        "      headers: buildApiHeaders(),",
        "      data: {}",
        "    });",
        "    expect(response.ok()).toBeTruthy();",
        "  });"
      ].join("\n");
    }

    if (testCase.automationType === "accessibility") {
      return [
        `  test("${title}", async ({ page }) => {`,
        "    await page.goto(\"/\");",
        includePageObject
          ? `    const pageObject = new ${this.toClassName(featureName)}Page(page);\n    await pageObject.open();`
          : "",
        "    await assertA11yStub(page);",
        "  });"
      ].filter((line) => line.length > 0).join("\n");
    }

    if (testCase.automationType === "visual") {
      return [
        `  test("${title}", async ({ page }) => {`,
        "    await page.goto(\"/\");",
        includePageObject
          ? `    const pageObject = new ${this.toClassName(featureName)}Page(page);\n    await pageObject.open();`
          : "",
        "    await assertVisualStub(page);",
        "  });"
      ].filter((line) => line.length > 0).join("\n");
    }

    return [
      `  test("${title}", async ({ page }) => {`,
      "    await page.goto(\"/\");",
      includePageObject
        ? `    const pageObject = new ${this.toClassName(featureName)}Page(page);\n    await pageObject.open();`
        : "",
      "    await expect(page.locator(\"body\")).toBeVisible();",
      "  });"
    ].filter((line) => line.length > 0).join("\n");
  }

  private renderPageObjectTemplate(featureName: string): string {
    const className = `${this.toClassName(featureName)}Page`;

    return [
      'import type { Page } from "@playwright/test";',
      "",
      `export class ${className} {`,
      "  public constructor(private readonly page: Page) {}",
      "",
      "  public async open(): Promise<void> {",
      "    await this.page.goto(\"/\");",
      "  }",
      "",
      "  public async assertLoaded(): Promise<void> {",
      "    await this.page.locator(\"body\").waitFor();",
      "  }",
      "}"
    ].join("\n");
  }

  private renderFixtureTemplate(): string {
    return [
      'import { test as base } from "@playwright/test";',
      "",
      "export const test = base.extend<{ baseUrl: string }>({",
      "  baseUrl: [process.env.BASE_URL ?? \"/\", { option: true }]",
      "});",
      "",
      "export { expect } from \"@playwright/test\";"
    ].join("\n");
  }

  private renderHelperTemplate(): string {
    return [
      'import type { Page } from "@playwright/test";',
      "",
      "export function buildApiHeaders(): Record<string, string> {",
      "  return {",
      '    \"content-type\": \"application/json\"',
      "  };",
      "}",
      "",
      "export async function assertA11yStub(page: Page): Promise<void> {",
      "  await page.locator(\"body\").waitFor();",
      "}",
      "",
      "export async function assertVisualStub(page: Page): Promise<void> {",
      "  await page.locator(\"body\").screenshot();",
      "}"
    ].join("\n");
  }

  private toFileSlug(value: string): string {
    const normalized = value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    return normalized.length > 0 ? normalized : "untitled-feature";
  }

  private toClassName(value: string): string {
    const tokens = value
      .replace(/[^a-zA-Z0-9]+/g, " ")
      .trim()
      .split(/\s+/)
      .filter((token) => token.length > 0)
      .map((token) => token[0]?.toUpperCase() + token.slice(1).toLowerCase());

    return tokens.length > 0 ? tokens.join("") : "Feature";
  }
}
