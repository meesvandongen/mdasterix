import { ListContentMap, ListItem, ListContent, Root } from "mdast";
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
    const children = builder.build(false);

    this.state.push({
      type: "listItem",
      children,
      ...options,
    });

    return this;
  }

  private state: Array<ListContent> = [];

  public build<IsRoot extends boolean = true>(
    isRoot: IsRoot = true as IsRoot,
  ): IsRoot extends true ? Root : Array<ListContent> {
    if (isRoot) {
      return {
        type: "root",
        children: this.state,
      } as any;
    }
    return this.state as any;
  }
}

export function listContentBuilder() {
  return new ListContentBuilder();
}
