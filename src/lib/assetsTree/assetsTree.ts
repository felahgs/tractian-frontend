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

export function findNode(
  tree: TreeNode | TreeLeaf, // Single tree node (or leaf)
  callback: (node: TreeLeaf | TreeNode) => boolean,
): TreeLeaf | TreeNode | null {
  let result: TreeLeaf | TreeNode | null = null;

  const searchRecursively = (node: TreeNode | TreeLeaf) => {
    if (callback(node)) {
      result = node;
      return;
    }

    if ((node as TreeNode).children) {
      (node as TreeNode).children.forEach((child) => {
        if (!result) {
          searchRecursively(child);
        }
      });
    }
  };

  searchRecursively(tree);

  return result;
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
    const node = map.get(item.id) as TreeLeaf | TreeNode;
    if (item.parentId) {
      return addNodeToParent(map, node, item.parentId);
    }

    return treeList.push(node);
  });

  assets.forEach((item) => {
    const node = map.get(item.id) as TreeLeaf | TreeNode;
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

  if (parent) {
    parent.children.push(node);
  }
}

export function filterTreeList(
  treeList: Array<TreeLeaf | TreeNode>,
  callback: (node: TreeLeaf | TreeNode) => boolean,
): Array<TreeLeaf | TreeNode> {
  const filteredList: Array<TreeLeaf | TreeNode> = [];

  function filterTreeRecursive(node: TreeLeaf | TreeNode) {
    const hasChildren = node.type !== "component" && node.children.length > 0;

    const updatedNode = { ...node };

    if (hasChildren) {
      (updatedNode as TreeNode).children = [];
      node.children.forEach((child) => {
        if (findNode(child, callback)) {
          (updatedNode as TreeNode).children.push(filterTreeRecursive(child));
        }
      });
    }

    return updatedNode;
  }

  treeList.forEach((tree) => {
    if (findNode(tree, callback)) {
      filteredList.push(filterTreeRecursive(tree));
    }
  });

  return filteredList;
}
