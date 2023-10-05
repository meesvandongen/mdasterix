import { RowContentMap, TableCell, RowContent } from "mdast";
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
    const children = builder.build();
    this.state.push({
      type: "tableCell",
      children,
      ...options,
    });

    return this;
  }

  private state: Array<RowContent> = [];

  public build(): RowContent[] {
    return this.state;
  }
}

export function rowContentBuilder() {
  return new RowContentBuilder();
}
