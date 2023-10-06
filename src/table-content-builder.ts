import { TableContentMap, TableRow, TableContent, Root } from "mdast";
import { RowContentBuilder, rowContentBuilder } from "./row-content-builder.js";

export class TableContentBuilder implements Record<keyof TableContentMap, any> {
  public tableRow(
    options: Omit<TableRow, "type" | "children"> = {},
    getChildren?: (builder: RowContentBuilder) => unknown,
  ): this {
    const builder = rowContentBuilder();
    getChildren?.(builder);
    const children = builder.build(false);

    this.state.push({
      type: "tableRow",
      children,
      ...options,
    });

    return this;
  }

  private state: Array<TableContent> = [];

  public build<IsRoot extends boolean = true>(
    isRoot: IsRoot = true as IsRoot,
  ): IsRoot extends true ? Root : Array<TableContent> {
    if (isRoot) {
      return {
        type: "root",
        children: this.state,
      } as any;
    }
    return this.state as any;
  }
}

export function tableContentBuilder() {
  return new TableContentBuilder();
}
