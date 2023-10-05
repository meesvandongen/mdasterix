import { ListContentMap, ListItem, ListContent } from "mdast";
import {
  FlowContentBuilder,
  flowContentBuilder,
} from "./flow-content-builder.js";

export class ListContentBuilder implements Record<keyof ListContentMap, any> {
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

  private state: Array<ListContent> = [];

  public build(): ListContent[] {
    return this.state;
  }
}

export function listContentBuilder() {
  return new ListContentBuilder();
}
