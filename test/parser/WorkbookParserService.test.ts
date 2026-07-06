import ExcelJS from "exceljs";
import { describe, expect, it } from "vitest";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { WorkbookParserService } from "../../src/services/parser/WorkbookParserService.js";

async function withTempWorkbook(
  build: (workbook: ExcelJS.Workbook) => Promise<void> | void,
  run: (filePath: string) => Promise<void>
): Promise<void> {
  const tempDir = await mkdtemp(join(tmpdir(), "fsd-parser-"));
  const filePath = join(tempDir, "fixture.xlsx");

  try {
    const workbook = new ExcelJS.Workbook();
    await build(workbook);
    const buffer = await workbook.xlsx.writeBuffer();
    await writeFile(filePath, Buffer.from(buffer));
    await run(filePath);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
}

describe("WorkbookParserService", () => {
  it("parses structured sections into feature fields", async () => {
    await withTempWorkbook(
      (workbook) => {
        const sheet = workbook.addWorksheet("Onboarding");
        sheet.addRow(["Feature Name", "ETB Onboarding"]);
        sheet.addRow(["Description", "Customer onboarding flow"]);
        sheet.addRow([]);
        sheet.addRow(["Flow"]);
        sheet.addRow(["", "1. Open app"]);
        sheet.addRow(["", "2. Fill personal details"]);
        sheet.addRow(["UI Elements"]);
        sheet.addRow(["", "NRIC Field"]);
        sheet.addRow(["Validation Rules"]);
        sheet.addRow(["", "NRIC is mandatory"]);
        sheet.addRow(["Business Rules"]);
        sheet.addRow(["", "Only Malaysian customer is eligible"]);
        sheet.addRow(["APIs"]);
        sheet.addRow(["", "POST /customers/onboarding"]);
        sheet.addRow(["Dependencies"]);
        sheet.addRow(["", "OTP Service"]);
        sheet.addRow(["Error Messages"]);
        sheet.addRow(["", "Invalid NRIC"]);
        sheet.addRow(["Navigation"]);
        sheet.addRow(["", "Home > Onboarding > Review"]);
        sheet.addRow(["Remarks"]);
        sheet.addRow(["", "Requires product team sign-off"]);
      },
      async (filePath) => {
        const parser = new WorkbookParserService();
        const features = await parser.parseWorkbook(filePath);

        expect(features).toHaveLength(1);
        expect(features[0]?.featureName).toBe("ETB Onboarding");
        expect(features[0]?.description).toContain("Customer onboarding flow");
        expect(features[0]?.flow).toContain("1. Open app");
        expect(features[0]?.uiElements).toContain("NRIC Field");
        expect(features[0]?.validationRules).toContain("NRIC is mandatory");
        expect(features[0]?.businessRules).toContain("Only Malaysian customer is eligible");
        expect(features[0]?.apis).toContain("POST /customers/onboarding");
        expect(features[0]?.dependencies).toContain("OTP Service");
        expect(features[0]?.errorMessages).toContain("Invalid NRIC");
        expect(features[0]?.navigation).toContain("Home > Onboarding > Review");
        expect(features[0]?.remarks).toContain("Requires product team sign-off");
      }
    );
  });

  it("supports multiple worksheets and merged heading cells", async () => {
    await withTempWorkbook(
      (workbook) => {
        const sheet1 = workbook.addWorksheet("Feature A");
        sheet1.addRow(["Feature Name", "Account Linking"]);
        sheet1.addRow(["Flow"]);
        sheet1.addRow(["", "Navigate to account linking"]);

        const sheet2 = workbook.addWorksheet("Feature B");
        sheet2.addRow(["Feature Name"]);
        sheet2.mergeCells("A1:C1");
        sheet2.getCell("A1").value = "Feature Name: Card Activation";
        sheet2.addRow(["Validation Rules"]);
        sheet2.addRow(["", "Activation code must be 6 digits"]);
      },
      async (filePath) => {
        const parser = new WorkbookParserService();
        const features = await parser.parseWorkbook(filePath);

        expect(features).toHaveLength(2);
        expect(features.map((feature) => feature.featureName)).toEqual([
          "Account Linking",
          "Card Activation"
        ]);
        expect(features[1]?.validationRules).toContain("Activation code must be 6 digits");
      }
    );
  });

  it("produces quality reports for incomplete sections", async () => {
    await withTempWorkbook(
      (workbook) => {
        const sheet = workbook.addWorksheet("Light Spec");
        sheet.addRow(["Feature Name", "Quick Transfer"]);
        sheet.addRow(["UI Elements"]);
        sheet.addRow(["", "Amount Field"]);
      },
      async (filePath) => {
        const parser = new WorkbookParserService();
        await parser.parseWorkbook(filePath);
        const reports = parser.getFeatureQualityReports();

        expect(reports).toHaveLength(1);
        expect(reports[0]?.featureName).toBe("Quick Transfer");
        expect(reports[0]?.isComplete).toBe(false);
        expect(reports[0]?.missingSections).toContain("Description");
        expect(reports[0]?.missingSections).toContain("Flow");
      }
    );
  });
});
