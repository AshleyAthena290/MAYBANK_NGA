import type { PipelineContext } from "../context/PipelineContext.js";

export interface PipelineStage {
  readonly name: string;
  execute(context: PipelineContext): Promise<void>;
}
