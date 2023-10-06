import { describe, expect, it } from "bun:test";
import { listContentBuilder } from "../src/index.js";

describe("list content builder", () => {
  it("listItem", () => {
    expect(listContentBuilder().listItem().build(false)).toEqual([
      {
        type: "listItem",
        children: [],
      },
    ]);
  });

  it("uses root", () => {
    expect(listContentBuilder().listItem().build(true)).toEqual({
      type: "root",
      children: [
        {
          type: "listItem",
          children: [],
        },
      ],
    });
  });
});
