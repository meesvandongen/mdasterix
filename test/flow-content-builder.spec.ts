import { describe, expect, it } from "bun:test";
import { flowContentBuilder } from "../src/flow-content-builder.js";

describe("flow content builder", () => {
  it("definition", () => {
    expect(
      flowContentBuilder()
        .definition({ identifier: "foo", url: "http://example.com" })
        .build(),
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
      flowContentBuilder().footnoteDefinition({ identifier: "foo" }).build(),
    ).toEqual([
      {
        type: "footnoteDefinition",
        identifier: "foo",
        children: [],
      },
    ]);
  });

  it("blockquote", () => {
    expect(flowContentBuilder().blockquote().build()).toEqual([
      {
        type: "blockquote",
        children: [],
      },
    ]);
  });

  it("code", () => {
    expect(
      flowContentBuilder().code({ value: "foo", lang: "js" }).build(),
    ).toEqual([
      {
        type: "code",
        value: "foo",
        lang: "js",
      },
    ]);
  });

  it("heading", () => {
    expect(flowContentBuilder().heading({ depth: 1 }).build()).toEqual([
      {
        type: "heading",
        depth: 1,
        children: [],
      },
    ]);
  });

  it("html", () => {
    expect(flowContentBuilder().html({ value: "<div></div>" }).build()).toEqual(
      [
        {
          type: "html",
          value: "<div></div>",
        },
      ],
    );
  });

  it("list", () => {
    expect(flowContentBuilder().list({ ordered: true }).build()).toEqual([
      {
        type: "list",
        ordered: true,
        children: [],
      },
    ]);
  });

  it("paragraph", () => {
    expect(flowContentBuilder().paragraph().build()).toEqual([
      {
        type: "paragraph",
        children: [],
      },
    ]);
  });

  it("table", () => {
    expect(flowContentBuilder().table().build()).toEqual([
      {
        type: "table",
        children: [],
      },
    ]);
  });

  it("thematicBreak", () => {
    expect(flowContentBuilder().thematicBreak().build()).toEqual([
      {
        type: "thematicBreak",
      },
    ]);
  });
});
