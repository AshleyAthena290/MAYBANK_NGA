import { createLogger } from "./services/logger.js";
import { createProgram } from "./cli/program.js";

const logger = createLogger();
const program = createProgram(logger);

program.parseAsync(process.argv).catch((error: unknown) => {
  logger.error({ error }, "CLI execution failed");
  process.exitCode = 1;
});
