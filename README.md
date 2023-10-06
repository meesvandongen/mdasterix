# mdasterix

Markdown AST Builder for usage with `@types/mdast`

## Install

```ts
npm i mdasterix
```

## Usage

```js
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
```

For information about the nodes, refer to the `mdast` docs. The builder methods
are named after the node types.

## Converting to Markdown

Use `mdast-util-to-markdown`
