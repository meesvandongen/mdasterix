import { describe, expect, it } from "bun:test";
import { tableContentBuilder } from "../src/index.js";

describe("table content builder", () => {
  it("tableCell", () => {
    expect(tableContentBuilder().tableRow().build()).toEqual([
      {
        type: "tableRow",
        children: [],
      },
    ]);
  });
});
