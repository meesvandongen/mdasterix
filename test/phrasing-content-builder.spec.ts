import { describe, expect, it } from "bun:test";
import { phrasingContentBuilder } from "../src/index.js";

describe("phrasing content builder", () => {
  it("break", () => {
    expect(phrasingContentBuilder().break().build()).toEqual([
      {
        type: "break",
      },
    ]);
  });

  it("delete", () => {
    expect(phrasingContentBuilder().delete().build()).toEqual([
      {
        type: "delete",
        children: [],
      },
    ]);
  });

  it("emphasis", () => {
    expect(phrasingContentBuilder().emphasis().build()).toEqual([
      {
        type: "emphasis",
        children: [],
      },
    ]);
  });

  it("footnoteReference", () => {
    expect(
      phrasingContentBuilder()
        .footnoteReference({
          identifier: "foo",
        })
        .build(),
    ).toEqual([
      {
        type: "footnoteReference",
        identifier: "foo",
      },
    ]);
  });

  it("html", () => {
    expect(
      phrasingContentBuilder()
        .html({
          value: "<p>foo</p>",
        })
        .build(),
    ).toEqual([
      {
        type: "html",
        value: "<p>foo</p>",
      },
    ]);
  });

  it("image", () => {
    expect(
      phrasingContentBuilder()
        .image({
          url: "http://example.com",
          alt: "foo",
        })
        .build(),
    ).toEqual([
      {
        type: "image",
        url: "http://example.com",
        alt: "foo",
      },
    ]);
  });

  it("imageReference", () => {
    expect(
      phrasingContentBuilder()
        .imageReference({
          identifier: "foo",
          referenceType: "collapsed",
        })
        .build(),
    ).toEqual([
      {
        type: "imageReference",
        identifier: "foo",
        referenceType: "collapsed",
      },
    ]);
  });

  it("inlineCode", () => {
    expect(
      phrasingContentBuilder()
        .inlineCode({
          value: "foo",
        })
        .build(),
    ).toEqual([
      {
        type: "inlineCode",
        value: "foo",
      },
    ]);
  });

  it("link", () => {
    expect(
      phrasingContentBuilder()
        .link({
          url: "http://example.com",
        })
        .build(),
    ).toEqual([
      {
        type: "link",
        url: "http://example.com",
        children: [],
      },
    ]);
  });

  it("linkReference", () => {
    expect(
      phrasingContentBuilder()
        .linkReference({
          identifier: "foo",
          referenceType: "shortcut",
        })
        .build(),
    ).toEqual([
      {
        type: "linkReference",
        identifier: "foo",
        referenceType: "shortcut",
        children: [],
      },
    ]);
  });

  it("strong", () => {
    expect(phrasingContentBuilder().strong().build()).toEqual([
      {
        type: "strong",
        children: [],
      },
    ]);
  });

  it("text", () => {
    expect(
      phrasingContentBuilder()
        .text({
          value: "foo",
        })
        .build(),
    ).toEqual([
      {
        type: "text",
        value: "foo",
      },
    ]);
  });
});
