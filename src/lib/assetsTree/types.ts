import { AssetData, LocationData } from "@/services/companies";

export type TreeNodeCallback = (
  node: TreeLeaf | TreeNode,
  path?: TreeLeaf | TreeNode,
) => boolean;

export type TreeNode = LocationNode | AssetNode;
export type TreeLeaf = ComponentNode;

export type LocationNode = LocationData & {
  type: "location";
  children: Array<TreeNode | TreeLeaf>;
  path: Map<string, string>;
};

export type AssetNode = AssetData & {
  type: "asset";
  children: Array<TreeNode | TreeLeaf>;
  path: Map<string, string>;
};

export type ComponentNode = AssetData & {
  type: "component";
  path: Map<string, string>;
};
