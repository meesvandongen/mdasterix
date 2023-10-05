import { TableContentMap, TableRow, TableContent } from "mdast";
import { RowContentBuilder, rowContentBuilder } from "./row-content-builder.js";

export class TableContentBuilder implements Record<keyof TableContentMap, any> {
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

  private state: Array<TableContent> = [];

  public build(): TableContent[] {
    return this.state;
  }
}

export function tableContentBuilder() {
  return new TableContentBuilder();
}
