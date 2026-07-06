import ExcelJS from "exceljs";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { describe, expect, it } from "vitest";
import { ApiSpecParserService } from "../../src/services/parser/ApiSpecParserService.js";
import { ApiSpecYamlGeneratorService } from "../../src/services/output/ApiSpecYamlGeneratorService.js";

async function withTempApiSpecWorkbook(
  build: (workbook: ExcelJS.Workbook) => void,
  run: (filePath: string) => Promise<void>
): Promise<void> {
  const tempDir = await mkdtemp(join(tmpdir(), "fsd-api-"));
  const filePath = join(tempDir, "api-spec.xlsx");

  try {
    const workbook = new ExcelJS.Workbook();
    build(workbook);
    const buffer = await workbook.xlsx.writeBuffer();
    await writeFile(filePath, Buffer.from(buffer));
    await run(filePath);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
}

describe("ApiSpecParserService", () => {
  it("parses a tabular API spec sheet into scenarios", async () => {
    await withTempApiSpecWorkbook(
      (workbook) => {
        const sheet = workbook.addWorksheet("Local Transfer");
        sheet.addRow(["Method", "Endpoint", "Description", "Request Body", "Response Success", "Response Error", "Validation"]);
        sheet.addRow(["POST", "/transfers/local", "Initiate local fund transfer", "amount=100;currency=MYR;toAccount=1234", "200 - Transfer initiated", "400 - Invalid amount", "Amount must be positive"]);
        sheet.addRow(["GET", "/transfers/local/{id}", "Retrieve transfer status", "", "200 - Transfer details", "404 - Transfer not found", ""]);
      },
      async (filePath) => {
        const parser = new ApiSpecParserService();
        const scenarios = await parser.parseWorkbook(filePath);

        expect(scenarios.length).toBe(2);
        expect(scenarios[0]?.method).toBe("POST");
        expect(scenarios[0]?.endpoint).toBe("/transfers/local");
        expect(scenarios[0]?.feature).toBe("Local Transfer");
        expect(scenarios[0]?.response.successStatusCode).toBe(200);
        expect(scenarios[0]?.response.errorStatusCodes[0]?.code).toBe(400);
        expect(scenarios[1]?.method).toBe("GET");
        expect(scenarios[1]?.priority).toBe("P1"); // /transfers/local/{id} contains 'transfer' keyword → P1
      }
    );
  });

  it("assigns P1 priority to POST and auth-related endpoints", async () => {
    await withTempApiSpecWorkbook(
      (workbook) => {
        const sheet = workbook.addWorksheet("Auth");
        sheet.addRow(["Method", "Endpoint", "Description"]);
        sheet.addRow(["POST", "/auth/token", "Generate authentication token"]);
        sheet.addRow(["DELETE", "/transfers/payment", "Cancel payment transfer"]);
      },
      async (filePath) => {
        const parser = new ApiSpecParserService();
        const scenarios = await parser.parseWorkbook(filePath);

        expect(scenarios.every((scenario) => scenario.priority === "P1")).toBe(true);
      }
    );
  });
});

describe("ApiSpecYamlGeneratorService", () => {
  it("generates one YAML file per scenario with required metadata fields", async () => {
    const tempDir = await mkdtemp(join(tmpdir(), "fsd-yaml-"));

    try {
      const generator = new ApiSpecYamlGeneratorService();
      const scenarios = [
        {
          id: "LOCAL_TRANSFER_001",
          title: "Initiate local fund transfer",
          feature: "Local Transfer",
          description: "Initiates a local transfer between accounts",
          method: "POST",
          endpoint: "/transfers/local",
          authentication: "Bearer Token",
          environment: ["SIT", "UAT"],
          tags: ["post", "payment"],
          priority: "P1" as const,
          preconditions: ["User is authenticated"],
          testData: { amount: "100.00", currency: "MYR" },
          request: {
            headers: { "Content-Type": "application/json" },
            pathParams: {},
            queryParams: {},
            body: { amount: 100 }
          },
          response: {
            successStatusCode: 200,
            successDescription: "Transfer initiated successfully",
            errorStatusCodes: [{ code: 400, description: "Invalid amount" }],
            bodySchema: { transferId: "string" }
          },
          assertions: ["Transfer ID is returned", "Status is PENDING"],
          cleanup: ["Reverse the transfer if test fails"],
          references: {
            fsdFeature: "Fund Transfer",
            sourceWorksheet: "Local Transfer",
            sourceRows: "Row 2",
            apiSpecFile: "api-spec.xlsx"
          },
          negativeScenarios: ["Send without auth — expect 401"]
        }
      ];

      const paths = await generator.generate(scenarios, tempDir, "api-spec.xlsx");

      expect(paths).toHaveLength(1);
      const content = await readFile(paths[0] as string, "utf-8");
      expect(content).toContain("id: LOCAL_TRANSFER_001");
      expect(content).toContain("method: POST");
      expect(content).toContain("endpoint: /transfers/local");
      expect(content).toContain("author: AI");
      expect(content).toContain("priority: P1");
      expect(content).toContain("authentication: Bearer Token");
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });
});
