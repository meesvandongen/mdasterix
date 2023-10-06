import { describe, expect, it } from "bun:test";
import { rowContentBuilder } from "../src/index.js";

describe("row content builder", () => {
  it("tableCell", () => {
    expect(rowContentBuilder().tableCell().build(false)).toEqual([
      {
        type: "tableCell",
        children: [],
      },
    ]);
  });
  it("uses root", () => {
    expect(rowContentBuilder().tableCell().build(true)).toEqual({
      type: "root",
      children: [
        {
          type: "tableCell",
          children: [],
        },
      ],
    });
  });
});
