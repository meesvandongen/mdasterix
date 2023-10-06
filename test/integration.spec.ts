import { describe, it, expect } from "bun:test";
import { flowContentBuilder } from "../src/index.js";

describe("integration", () => {
  it("works", () => {
    const value = flowContentBuilder()
      .heading({ depth: 1 }, (phrasingBuilder) => {
        phrasingBuilder.text({ value: "Heading" });
      })
      .paragraph({}, (phrasingBuilder) => {
        phrasingBuilder.text({ value: "Paragraph" });
      })
      .table(
        {
          align: ["left", "right"],
        },
        (tableContentBuilder) => {
          [1, 2, 3].forEach((i) => {
            tableContentBuilder.tableRow({}, (rowContentBuilder) => {
              rowContentBuilder
                .tableCell({}, (phrasingBuilder) => {
                  phrasingBuilder.text({ value: `${i}-1` });
                })
                .tableCell({}, (phrasingBuilder) => {
                  phrasingBuilder.text({ value: `${i}-2` });
                });
            });
          });
        },
      )
      .blockquote({}, (flowContentBuilder) => {
        flowContentBuilder.paragraph({}, (phrasingBuilder) => {
          phrasingBuilder.text({ value: "Blockquote" });
        });
      })
      .build();

    expect(value).toMatchSnapshot();
  });
});
