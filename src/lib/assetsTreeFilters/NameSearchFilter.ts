import { TreeLeaf, TreeNode } from "@/lib/assetsTree";
import { FilterRule } from "./FilterRule.types";

export class NameSearchFilter implements FilterRule {
  private searchedString: string;

  constructor(searchedString: string) {
    this.searchedString = searchedString;
  }

  apply(node: TreeLeaf | TreeNode): boolean {
    const searchedString = this.searchedString.toLocaleLowerCase();
    return Array.from(node.path).some(([, value]) =>
      value.toLowerCase().includes(searchedString),
    );
  }
}
