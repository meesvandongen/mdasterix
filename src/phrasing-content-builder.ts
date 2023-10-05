import {
  PhrasingContentMap,
  Break,
  Delete,
  Emphasis,
  FootnoteReference,
  Html,
  Image,
  ImageReference,
  InlineCode,
  Link,
  LinkReference,
  Strong,
  Text,
  PhrasingContent,
} from "mdast";

export class PhrasingContentBuilder
  implements Record<keyof PhrasingContentMap, any>
{
  public break(options: Omit<Break, "type"> = {}): this {
    this.state.push({
      type: "break",
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

  public footnoteReference(options: Omit<FootnoteReference, "type">): this {
    this.state.push({
      type: "footnoteReference",
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

  public text(options: Omit<Text, "type">): this {
    this.state.push({
      type: "text",
      ...options,
    });
    return this;
  }

  private state: Array<PhrasingContent> = [];

  public build(): PhrasingContent[] {
    return this.state;
  }
}

export function phrasingContentBuilder() {
  return new PhrasingContentBuilder();
}
