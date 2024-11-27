import { CriticalFilter } from "../assetsTreeFilters/CriticalFilter";
import { TreeLeaf } from "@/lib/assetsTree";
import { nonComponentNode, sampleNode } from "./utils";

describe("CriticalFilter", () => {
  let filter: CriticalFilter;

  beforeEach(() => {
    filter = new CriticalFilter(true, "operating");
  });

  test("should return true if critical filter is off", () => {
    filter = new CriticalFilter(false, "operating");
    expect(filter.apply(sampleNode)).toBe(true);
  });

  test("should return false if status does not match", () => {
    filter = new CriticalFilter(true, "operating");
    const inactiveNode: TreeLeaf = {
      ...sampleNode,
      status: "alert",
    };
    expect(filter.apply(inactiveNode)).toBe(false);
  });

  test("should return true if status matches and critical filter is on", () => {
    expect(filter.apply(sampleNode)).toBe(true);
  });

  test("should return false if node type is not component", () => {
    expect(filter.apply(nonComponentNode)).toBe(false);
  });
});
