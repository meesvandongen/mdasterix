import { expect, describe, it } from "bun:test";
import { rootContentBuilder } from "../src/root-content-builder.js";

describe("root content builder", () => {
  it("blockquote", () => {
    expect(rootContentBuilder().blockquote().build()).toEqual({
      children: [
        {
          children: [],
          type: "blockquote",
        },
      ],
      type: "root",
    });
  });

  it("text", () => {
    expect(rootContentBuilder().text({ value: "hello" }).build()).toEqual({
      children: [{ type: "text", value: "hello" }],
      type: "root",
    });
  });

  it("break", () => {
    expect(rootContentBuilder().break().build()).toEqual({
      children: [{ type: "break" }],
      type: "root",
    });
  });

  it("code", () => {
    expect(
      rootContentBuilder().code({ value: "foo", lang: "js" }).build(),
    ).toEqual({
      children: [{ type: "code", value: "foo", lang: "js" }],
      type: "root",
    });
  });

  it("definition", () => {
    expect(
      rootContentBuilder()
        .definition({
          identifier: "foo",
          url: "http://example.com",
        })
        .build(),
    ).toEqual({
      children: [
        { type: "definition", identifier: "foo", url: "http://example.com" },
      ],
      type: "root",
    });
  });

  it("delete", () => {
    expect(rootContentBuilder().delete().build()).toEqual({
      children: [
        {
          type: "delete",
          children: [],
        },
      ],
      type: "root",
    });
  });

  it("emphasis", () => {
    expect(rootContentBuilder().emphasis().build()).toEqual({
      children: [
        {
          type: "emphasis",
          children: [],
        },
      ],
      type: "root",
    });
  });

  it("footnoteDefinition", () => {
    expect(
      rootContentBuilder().footnoteDefinition({ identifier: "foo" }).build(),
    ).toEqual({
      children: [
        {
          type: "footnoteDefinition",
          identifier: "foo",
          children: [],
        },
      ],
      type: "root",
    });
  });

  it("footnoteReference", () => {
    expect(
      rootContentBuilder().footnoteReference({ identifier: "foo" }).build(),
    ).toEqual({
      children: [{ type: "footnoteReference", identifier: "foo" }],
      type: "root",
    });
  });

  it("heading", () => {
    expect(rootContentBuilder().heading({ depth: 1 }).build()).toEqual({
      children: [
        {
          type: "heading",
          depth: 1,
          children: [],
        },
      ],
      type: "root",
    });
  });

  it("html", () => {
    expect(rootContentBuilder().html({ value: "<p>foo</p>" }).build()).toEqual({
      children: [{ type: "html", value: "<p>foo</p>" }],
      type: "root",
    });
  });

  it("image", () => {
    expect(
      rootContentBuilder()
        .image({ url: "http://example.com", alt: "foo" })
        .build(),
    ).toEqual({
      children: [{ type: "image", url: "http://example.com", alt: "foo" }],
      type: "root",
    });
  });

  it("imageReference", () => {
    expect(
      rootContentBuilder()
        .imageReference({
          identifier: "foo",
          alt: "bar",
          referenceType: "full",
        })
        .build(),
    ).toEqual({
      children: [
        {
          type: "imageReference",
          identifier: "foo",
          alt: "bar",
          referenceType: "full",
        },
      ],
      type: "root",
    });
  });

  it("inlineCode", () => {
    expect(rootContentBuilder().inlineCode({ value: "foo" }).build()).toEqual({
      children: [{ type: "inlineCode", value: "foo" }],
      type: "root",
    });
  });

  it("link", () => {
    expect(
      rootContentBuilder()
        .link({
          url: "http://example.com",
          title: "foo",
        })
        .build(),
    ).toEqual({
      children: [
        {
          type: "link",
          url: "http://example.com",
          title: "foo",
          children: [],
        },
      ],
      type: "root",
    });
  });

  it("linkReference", () => {
    expect(
      rootContentBuilder()
        .linkReference({
          identifier: "foo",
          referenceType: "full",
        })
        .build(),
    ).toEqual({
      children: [
        {
          type: "linkReference",
          identifier: "foo",
          referenceType: "full",
          children: [],
        },
      ],
      type: "root",
    });
  });

  it("list", () => {
    expect(rootContentBuilder().list({ ordered: false }).build()).toEqual({
      children: [
        {
          type: "list",
          ordered: false,
          children: [],
        },
      ],
      type: "root",
    });
  });

  it("listItem", () => {
    expect(rootContentBuilder().listItem().build()).toEqual({
      children: [
        {
          type: "listItem",
          children: [],
        },
      ],
      type: "root",
    });
  });

  it("paragraph", () => {
    expect(rootContentBuilder().paragraph().build()).toEqual({
      children: [
        {
          type: "paragraph",
          children: [],
        },
      ],
      type: "root",
    });
  });

  it("strong", () => {
    expect(rootContentBuilder().strong().build()).toEqual({
      children: [
        {
          type: "strong",
          children: [],
        },
      ],
      type: "root",
    });
  });

  it("table", () => {
    expect(
      rootContentBuilder()
        .table({ align: ["left", "center"] })
        .build(),
    ).toEqual({
      children: [
        {
          type: "table",
          align: ["left", "center"],
          children: [],
        },
      ],
      type: "root",
    });
  });

  it("tableRow", () => {
    expect(rootContentBuilder().tableRow().build()).toEqual({
      children: [
        {
          type: "tableRow",
          children: [],
        },
      ],
      type: "root",
    });
  });

  it("tableCell", () => {
    expect(rootContentBuilder().tableCell().build()).toEqual({
      children: [
        {
          type: "tableCell",
          children: [],
        },
      ],
      type: "root",
    });
  });

  it("thematicBreak", () => {
    expect(rootContentBuilder().thematicBreak().build()).toEqual({
      children: [
        {
          type: "thematicBreak",
        },
      ],
      type: "root",
    });
  });

  it("yaml", () => {
    expect(rootContentBuilder().yaml({ value: "foo" }).build()).toEqual({
      children: [
        {
          type: "yaml",
          value: "foo",
        },
      ],
      type: "root",
    });
  });
});
