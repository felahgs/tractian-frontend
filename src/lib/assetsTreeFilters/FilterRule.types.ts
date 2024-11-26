import { TreeLeaf, TreeNode } from "@/lib/assetsTree";

export interface FilterRule {
  apply: (node: TreeLeaf | TreeNode) => boolean;
}
