import { describe, expect, it } from "bun:test";
import { tableContentBuilder } from "../src/index.js";

describe("table content builder", () => {
  it("tableCell", () => {
    expect(tableContentBuilder().tableRow().build(false)).toEqual([
      {
        type: "tableRow",
        children: [],
      },
    ]);
  });

  it("uses root", () => {
    expect(tableContentBuilder().tableRow().build(true)).toEqual({
      type: "root",
      children: [
        {
          type: "tableRow",
          children: [],
        },
      ],
    });
  });
});
