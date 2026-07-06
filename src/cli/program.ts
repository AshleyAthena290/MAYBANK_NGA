import { Command } from "commander";
import { createRunPipelineCommand } from "./commands/runPipelineCommand.js";
import { createApiSpecCommand } from "./commands/apiSpecCommand.js";
import { createApiSpecSheetCommand } from "./commands/apiSpecSheetCommand.js";
import { registerBddGenCommand } from "./commands/bddGenCommand.js";
import { registerApiTestRunnerCommand } from "./commands/apiTestRunnerCommand.js";
import type { AppLogger } from "../services/logger.js";

export function createProgram(logger: AppLogger): Command {
  const program = new Command();

  program
    .name("fsd-parser")
    .description("AI-powered QA workflow for FSD documents")
    .version("1.0.0");

  program
    .command("run")
    .description("Run pipeline on an input FSD workbook")
    .requiredOption("--input <path>", "Input FSD workbook path")
    .requiredOption("--outDir <path>", "Output directory for generated artifacts")
    .action(createRunPipelineCommand(logger));

  program
    .command("api-spec")
    .description("Parse an API spec Excel workbook and generate business-readable YAML scenarios")
    .requiredOption("--input <path>", "Input API spec workbook path")
    .requiredOption("--outDir <path>", "Output directory for generated YAML artifacts")
    .action(createApiSpecCommand(logger));

  program
    .command("api-spec-sheet")
    .description("Parse a single API spec detail sheet and generate a comprehensive business-readable YAML (positive + negative + edge cases)")
    .requiredOption("--input <path>", "Input API spec workbook path")
    .requiredOption("--sheet <name>", "Exact worksheet name to parse (e.g. GetPTMaintenanceTransferInit)")
    .requiredOption("--outDir <path>", "Output directory for generated YAML")
    .action(createApiSpecSheetCommand(logger));

  // Register new BDD test case generator command
  registerBddGenCommand(program);
  registerApiTestRunnerCommand(program, logger);

  return program;
}
