import { FrontmatterContentMap, FrontmatterContent, Yaml, Root } from "mdast";

export class FrontmatterContentBuilder
  implements Record<keyof FrontmatterContentMap, any>
{
  public yaml(options: Omit<Yaml, "type">): this {
    this.state.push({
      type: "yaml",
      ...options,
    });

    return this;
  }

  private state: Array<FrontmatterContent> = [];

  public build<IsRoot>(
    isRoot: IsRoot = true as IsRoot,
  ): IsRoot extends true ? Root : Array<FrontmatterContent> {
    if (isRoot) {
      return {
        type: "root",
        children: this.state,
      } as any;
    }
    return this.state as any;
  }
}

export function frontmatterContentBuilder() {
  return new FrontmatterContentBuilder();
}
