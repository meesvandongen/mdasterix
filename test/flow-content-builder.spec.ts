import { describe, expect, it } from "bun:test";
import { flowContentBuilder } from "../src/index.js";

describe("flow content builder", () => {
  it("definition", () => {
    expect(
      flowContentBuilder()
        .definition({ identifier: "foo", url: "http://example.com" })
        .build(false),
    ).toEqual([
      {
        type: "definition",
        identifier: "foo",
        url: "http://example.com",
      },
    ]);
  });

  it("footnoteDefinition", () => {
    expect(
      flowContentBuilder()
        .footnoteDefinition({ identifier: "foo" })
        .build(false),
    ).toEqual([
      {
        type: "footnoteDefinition",
        identifier: "foo",
        children: [],
      },
    ]);
  });

  it("blockquote", () => {
    expect(flowContentBuilder().blockquote().build(false)).toEqual([
      {
        type: "blockquote",
        children: [],
      },
    ]);
  });

  it("code", () => {
    expect(
      flowContentBuilder().code({ value: "foo", lang: "js" }).build(false),
    ).toEqual([
      {
        type: "code",
        value: "foo",
        lang: "js",
      },
    ]);
  });

  it("heading", () => {
    expect(flowContentBuilder().heading({ depth: 1 }).build(false)).toEqual([
      {
        type: "heading",
        depth: 1,
        children: [],
      },
    ]);
  });

  it("html", () => {
    expect(
      flowContentBuilder().html({ value: "<div></div>" }).build(false),
    ).toEqual([
      {
        type: "html",
        value: "<div></div>",
      },
    ]);
  });

  it("list", () => {
    expect(flowContentBuilder().list({ ordered: true }).build(false)).toEqual([
      {
        type: "list",
        ordered: true,
        children: [],
      },
    ]);
  });

  it("paragraph", () => {
    expect(flowContentBuilder().paragraph().build(false)).toEqual([
      {
        type: "paragraph",
        children: [],
      },
    ]);
  });

  it("table", () => {
    expect(flowContentBuilder().table().build(false)).toEqual([
      {
        type: "table",
        children: [],
      },
    ]);
  });

  it("thematicBreak", () => {
    expect(flowContentBuilder().thematicBreak().build(false)).toEqual([
      {
        type: "thematicBreak",
      },
    ]);
  });

  it("uses root", () => {
    expect(flowContentBuilder().paragraph().build(true)).toEqual({
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [],
        },
      ],
    });
  });
});
