import { TreeLeaf, TreeNode } from "../assetsTree";

export const sampleNode = {
  type: "component",
  status: "operating",
  sensorType: "vibration",
  path: new Map([["123", "Component A"]]),
} as TreeLeaf;

export const nonComponentNode: TreeNode = {
  type: "location",
  path: new Map([["123", "Location A"]]),
} as TreeNode;
