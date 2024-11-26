import { TreeLeaf } from "../assetsTree";
import { buildTree, findNode, filterTreeList } from "../assetsTree/assetsTree";
import {
  locations as mockedLocations,
  assets as mockedAssets,
  tree as mockedTree,
  treeList as mockedTreeList,
  filteredTreeList as mockedFilteredTreeList,
} from "@/lib/tests/fixtures";

describe("buildTree", () => {
  it("should create a tree structure with nested locations and assets", () => {
    const newTree = buildTree(mockedLocations, mockedAssets);

    expect(newTree).toEqual(mockedTreeList);
  });
});

describe("findNode", () => {
  it("should return a single node that matches the callback condition", () => {
    const result = findNode(mockedTree, (node) => node.id === "12");

    expect(result).toBeDefined();
    expect(result?.id).toBe("12");
    expect(result?.name).toBe("Component 5");
  });

  it("should return null if no node matches the callback", () => {
    const result = findNode(
      mockedTreeList[0],
      (node) => node.id === "nonexistent",
    );

    expect(result).toBeNull();
  });
});

describe("filterTreeList", () => {
  it("should filter out nodes based on the callback condition", () => {
    const result = filterTreeList(
      mockedTreeList,
      (node) => (node as TreeLeaf).status === "alert",
    );

    expect(result).toEqual(mockedFilteredTreeList);
  });
});
