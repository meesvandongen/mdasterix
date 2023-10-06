import { RowContentMap, TableCell, RowContent, Root } from "mdast";
import {
  PhrasingContentBuilder,
  phrasingContentBuilder,
} from "./phrasing-content-builder.js";

export class RowContentBuilder implements Record<keyof RowContentMap, any> {
  public tableCell(
    options: Omit<TableCell, "type" | "children"> = {},
    getChildren?: (builder: PhrasingContentBuilder) => unknown,
  ): this {
    const builder = phrasingContentBuilder();
    getChildren?.(builder);
    const children = builder.build(false);
    this.state.push({
      type: "tableCell",
      children,
      ...options,
    });

    return this;
  }

  private state: Array<RowContent> = [];

  public build<IsRoot extends boolean = true>(
    isRoot: IsRoot = true as IsRoot,
  ): IsRoot extends true ? Root : Array<RowContent> {
    if (isRoot) {
      return {
        type: "root",
        children: this.state,
      } as any;
    }
    return this.state as any;
  }
}

export function rowContentBuilder() {
  return new RowContentBuilder();
}
