import { LocationData, AssetData } from "@/services/companies";
import { TreeLeaf, TreeNode } from "./types";

export function buildTree(locations: LocationData[], assets: AssetData[]) {
  const map = new Map();
  const treeList: Array<TreeNode | TreeLeaf> = [];

  createLocationNodesMap(map, locations);
  createAssetsNodesMap(map, assets);
  buildTreesFromMap(treeList, map, locations, assets);

  return treeList;
}

function createLocationNodesMap(
  map: Map<string, TreeLeaf | TreeNode>,
  locations: LocationData[],
) {
  locations.forEach((item) => {
    map.set(item.id, { ...item, type: "location", children: [] });
  });
}

function createAssetsNodesMap(
  map: Map<string, TreeLeaf | TreeNode>,
  assets: AssetData[],
) {
  assets.forEach((item) => {
    map.set(
      item.id,
      item.sensorType !== null
        ? { ...item, type: "component" }
        : { ...item, type: "asset", children: [] },
    );
  });
}

function buildTreesFromMap(
  treeList: Array<TreeLeaf | TreeNode>,
  map: Map<string, TreeLeaf | TreeNode>,
  locations: LocationData[],
  assets: AssetData[],
) {
  locations.forEach((item) => {
    const node = map.get(item.id);
    if (!node) return;

    if (item.parentId) {
      return addNodeToParent(map, node, item.parentId);
    }

    return treeList.push(node);
  });

  assets.forEach((item) => {
    const node = map.get(item.id);
    if (!node) return;

    if (item.locationId) {
      return addNodeToParent(map, node, item.locationId);
    }

    if (item.parentId) {
      return addNodeToParent(map, node, item.parentId);
    }

    return treeList.push(node);
  });
}

function addNodeToParent(
  map: Map<string, TreeLeaf | TreeNode>,
  node: TreeLeaf | TreeNode,
  parentId: string,
) {
  const parent = map.get(parentId) as TreeNode;
  if (!parent) return;

  if (parent) {
    parent.children.push(node);
  }
}
