import { describe, expect, it } from "bun:test";
import { rowContentBuilder } from "../src/index.js";

describe("row content builder", () => {
  it("tableCell", () => {
    expect(rowContentBuilder().tableCell().build()).toEqual([
      {
        type: "tableCell",
        children: [],
      },
    ]);
  });
});
