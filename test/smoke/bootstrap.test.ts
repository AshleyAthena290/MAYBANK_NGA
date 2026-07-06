import { describe, expect, it } from "vitest";
import { createPipelineContext } from "../../src/core/context/PipelineContext.js";

describe("pipeline context bootstrap", () => {
  it("creates empty collections", () => {
    const context = createPipelineContext("input.xlsx", "artifacts");

    expect(context.features).toEqual([]);
    expect(context.markdownPaths).toEqual([]);
    expect(context.jsonPaths).toEqual([]);
  });
});
