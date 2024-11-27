import { NameSearchFilter } from "../assetsTreeFilters/NameSearchFilter";
import { TreeLeaf, TreeNode } from "@/lib/assetsTree";

describe("NameSearchFilter", () => {
  let filter: NameSearchFilter;
  const sampleNode: TreeLeaf = {
    type: "component",
    sensorType: "vibration",
    path: new Map([["123", "Sensor A"]]),
  } as TreeLeaf;

  const nonComponentNode: TreeNode = {
    type: "location",
    path: new Map([["123", "Location A"]]),
  } as TreeNode;

  beforeEach(() => {
    filter = new NameSearchFilter("sensor");
  });

  test("should return true if searched string is found in the node path", () => {
    expect(filter.apply(sampleNode)).toBe(true);
  });

  test("should return false if searched string is not found in the node path", () => {
    filter = new NameSearchFilter("Waldo");
    expect(filter.apply(sampleNode)).toBe(false);
  });

  test("should return true if searched string is case-insensitive", () => {
    filter = new NameSearchFilter("SENSOR");
    expect(filter.apply(sampleNode)).toBe(true);
  });

  test("should return false if node type is not component", () => {
    expect(filter.apply(nonComponentNode)).toBe(false);
  });
});
