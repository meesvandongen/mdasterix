import { describe, expect, it } from "bun:test";
import { listContentBuilder } from "../src/index.js";

describe("list content builder", () => {
  it("listItem", () => {
    expect(listContentBuilder().listItem().build()).toEqual([
      {
        type: "listItem",
        children: [],
      },
    ]);
  });
});
