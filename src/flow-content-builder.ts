import {
  BlockContentMap,
  DefinitionContentMap,
  Definition,
  FootnoteDefinition,
  Blockquote,
  Code,
  Heading,
  Html,
  List,
  Paragraph,
  Table,
  ThematicBreak,
  BlockContent,
  DefinitionContent,
} from "mdast";
import { ListContentBuilder } from "./list-content-builder.js";
import {
  PhrasingContentBuilder,
  phrasingContentBuilder,
} from "./phrasing-content-builder.js";
import { TableContentBuilder } from "./table-content-builder.js";

export class FlowContentBuilder
  implements Record<keyof BlockContentMap & DefinitionContentMap, any>
{
  public definition(options: Omit<Definition, "type">): this {
    this.state.push({
      type: "definition",
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

  public code(options: Omit<Code, "type">): this {
    this.state.push({
      type: "code",
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

  public list(
    options: Omit<List, "type" | "children">,
    getChildren?: (builder: ListContentBuilder) => unknown,
  ): this {
    const builder = new ListContentBuilder();
    getChildren?.(builder);
    const children = builder.build();

    this.state.push({
      type: "list",
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

  public table(
    options: Omit<Table, "type" | "children"> = {},
    getChildren?: (builder: TableContentBuilder) => unknown,
  ): this {
    const builder = new TableContentBuilder();
    getChildren?.(builder);
    const children = builder.build();

    this.state.push({
      type: "table",
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

  private state: Array<BlockContent | DefinitionContent> = [];

  public build(): Array<BlockContent | DefinitionContent> {
    return this.state;
  }
}

export function flowContentBuilder() {
  return new FlowContentBuilder();
}
