import { AssetData, LocationData } from "@/services/companies";

export type TreeNode = LocationNode | AssetNode;
export type TreeLeaf = ComponentNode;

export type LocationNode = LocationData & {
  type: "location";
  children: Array<TreeNode | TreeLeaf>;
};

export type AssetNode = AssetData & {
  type: "asset";
  children: Array<TreeNode | TreeLeaf>;
};

export type ComponentNode = AssetData & {
  type: "component";
};
