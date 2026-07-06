import type { PipelineStage } from "../contracts/PipelineStage.js";
import type { PipelineContext } from "../context/PipelineContext.js";
import type { AppLogger } from "../../services/logger.js";

export class PipelineOrchestrator {
  public constructor(
    private readonly stages: PipelineStage[],
    private readonly logger: AppLogger
  ) {}

  public async run(context: PipelineContext): Promise<void> {
    for (const stage of this.stages) {
      this.logger.info({ stage: stage.name }, "Starting stage");
      await stage.execute(context);
      this.logger.info({ stage: stage.name }, "Completed stage");
    }
  }
}
