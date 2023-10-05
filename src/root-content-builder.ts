import {
  RootContentMap,
  Blockquote,
  Text,
  Break,
  Code,
  Definition,
  Delete,
  Emphasis,
  FootnoteDefinition,
  FootnoteReference,
  Heading,
  Html,
  Image,
  ImageReference,
  InlineCode,
  Link,
  LinkReference,
  List,
  ListItem,
  Paragraph,
  Strong,
  Table,
  TableRow,
  TableCell,
  ThematicBreak,
  Yaml,
  RootContent,
  Root,
} from "mdast";
import {
  FlowContentBuilder,
  flowContentBuilder,
} from "./flow-content-builder.js";
import {
  ListContentBuilder,
  listContentBuilder,
} from "./list-content-builder.js";
import {
  PhrasingContentBuilder,
  phrasingContentBuilder,
} from "./phrasing-content-builder.js";
import {
  TableContentBuilder,
  tableContentBuilder,
} from "./table-content-builder.js";
import { RowContentBuilder, rowContentBuilder } from "./row-content-builder.js";

export class RootContentBuilder implements Record<keyof RootContentMap, any> {
  public blockquote(
    options: Omit<Blockquote, "type" | "children"> = {},
    getChildren?: (builder: FlowContentBuilder) => unknown,
  ): this {
    const builder = flowContentBuilder();
    getChildren?.(builder);
    const children = builder.build();
    this.state.push({
      type: "blockquote",
      children,
      ...options,
    });
    return this;
  }

  public text(options: Omit<Text, "type">): this {
    this.state.push({
      type: "text",
      ...options,
    });
    return this;
  }

  public break(options: Omit<Break, "type"> = {}): this {
    this.state.push({
      type: "break",
      ...options,
    });
    return this;
  }

  public code(options: Omit<Code, "type">): this {
    this.state.push({
      type: "code",
      ...options,
    });
    return this;
  }

  public definition(options: Omit<Definition, "type">): this {
    this.state.push({
      type: "definition",
      ...options,
    });
    return this;
  }

  public delete(
    options: Omit<Delete, "type" | "children"> = {},
    getChildren?: (builder: PhrasingContentBuilder) => unknown,
  ): this {
    const builder = phrasingContentBuilder();
    getChildren?.(builder);
    const children = builder.build();

    this.state.push({
      type: "delete",
      children,
      ...options,
    });
    return this;
  }

  public emphasis(
    options: Omit<Emphasis, "type" | "children"> = {},
    getChildren?: (builder: PhrasingContentBuilder) => unknown,
  ): this {
    const builder = phrasingContentBuilder();
    getChildren?.(builder);
    const children = builder.build();

    this.state.push({
      type: "emphasis",
      children,
      ...options,
    });
    return this;
  }

  public footnoteDefinition(
    options: Omit<FootnoteDefinition, "type" | "children">,
    getChildren?: (builder: FlowContentBuilder) => unknown,
  ): this {
    const builder = flowContentBuilder();
    getChildren?.(builder);
    const children = builder.build();

    this.state.push({
      type: "footnoteDefinition",
      children,
      ...options,
    });

    return this;
  }

  public footnoteReference(options: Omit<FootnoteReference, "type">): this {
    this.state.push({
      type: "footnoteReference",
      ...options,
    });

    return this;
  }

  public heading(
    options: Omit<Heading, "type" | "children">,
    getChildren?: (builder: PhrasingContentBuilder) => unknown,
  ): this {
    const builder = phrasingContentBuilder();
    getChildren?.(builder);
    const children = builder.build();

    this.state.push({
      type: "heading",
      children,
      ...options,
    });

    return this;
  }

  public html(options: Omit<Html, "type">): this {
    this.state.push({
      type: "html",
      ...options,
    });

    return this;
  }

  public image(options: Omit<Image, "type">): this {
    this.state.push({
      type: "image",
      ...options,
    });

    return this;
  }

  public imageReference(options: Omit<ImageReference, "type">): this {
    this.state.push({
      type: "imageReference",
      ...options,
    });

    return this;
  }

  public inlineCode(options: Omit<InlineCode, "type">): this {
    this.state.push({
      type: "inlineCode",
      ...options,
    });

    return this;
  }

  public link(
    options: Omit<Link, "type" | "children">,
    getChildren?: (builder: PhrasingContentBuilder) => unknown,
  ): this {
    const builder = phrasingContentBuilder();
    getChildren?.(builder);
    const children = builder.build();

    this.state.push({
      type: "link",
      children,
      ...options,
    });

    return this;
  }

  public linkReference(
    options: Omit<LinkReference, "type" | "children">,
    getChildren?: (builder: PhrasingContentBuilder) => unknown,
  ): this {
    const builder = phrasingContentBuilder();
    getChildren?.(builder);
    const children = builder.build();

    this.state.push({
      type: "linkReference",
      children,
      ...options,
    });

    return this;
  }

  public list(
    options: Omit<List, "type" | "children">,
    getChildren?: (builder: ListContentBuilder) => unknown,
  ): this {
    const builder = listContentBuilder();
    getChildren?.(builder);
    const children = builder.build();

    this.state.push({
      type: "list",
      children,
      ...options,
    });

    return this;
  }

  public listItem(
    options: Omit<ListItem, "type" | "children"> = {},
    getChildren?: (builder: FlowContentBuilder) => unknown,
  ): this {
    const builder = flowContentBuilder();
    getChildren?.(builder);
    const children = builder.build();

    this.state.push({
      type: "listItem",
      children,
      ...options,
    });

    return this;
  }

  public paragraph(
    options: Omit<Paragraph, "type" | "children"> = {},
    getChildren?: (builder: PhrasingContentBuilder) => unknown,
  ): this {
    const builder = phrasingContentBuilder();
    getChildren?.(builder);
    const children = builder.build();

    this.state.push({
      type: "paragraph",
      children,
      ...options,
    });

    return this;
  }

  public strong(
    options: Omit<Strong, "type" | "children"> = {},
    getChildren?: (builder: PhrasingContentBuilder) => unknown,
  ): this {
    const builder = phrasingContentBuilder();
    getChildren?.(builder);
    const children = builder.build();

    this.state.push({
      type: "strong",
      children,
      ...options,
    });

    return this;
  }

  public table(
    options: Omit<Table, "type" | "children">,
    getChildren?: (builder: TableContentBuilder) => unknown,
  ): this {
    const builder = tableContentBuilder();
    getChildren?.(builder);
    const children = builder.build();

    this.state.push({
      type: "table",
      children,
      ...options,
    });

    return this;
  }

  public tableRow(
    options: Omit<TableRow, "type" | "children"> = {},
    getChildren?: (builder: RowContentBuilder) => unknown,
  ): this {
    const builder = rowContentBuilder();
    getChildren?.(builder);
    const children = builder.build();

    this.state.push({
      type: "tableRow",
      children,
      ...options,
    });

    return this;
  }

  public tableCell(
    options: Omit<TableCell, "type" | "children"> = {},
    getChildren?: (builder: PhrasingContentBuilder) => unknown,
  ): this {
    const builder = phrasingContentBuilder();
    getChildren?.(builder);
    const children = builder.build();
    this.state.push({
      type: "tableCell",
      children,
      ...options,
    });

    return this;
  }

  public thematicBreak(
    options: Omit<ThematicBreak, "type" | "children"> = {},
  ): this {
    this.state.push({
      type: "thematicBreak",
      ...options,
    });

    return this;
  }

  public yaml(options: Omit<Yaml, "type" | "children">): this {
    this.state.push({
      type: "yaml",
      ...options,
    });

    return this;
  }

  private state: RootContent[] = [];

  public build(): Root {
    return {
      type: "root",
      children: this.state,
    };
  }
}

export function rootContentBuilder() {
  return new RootContentBuilder();
}
