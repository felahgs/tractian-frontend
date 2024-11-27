import { EnergyFilter } from "../assetsTreeFilters/EnergyFilter";
import { TreeLeaf } from "@/lib/assetsTree";
import { nonComponentNode, sampleNode } from "./utils";

describe("EnergyFilter", () => {
  let filter: EnergyFilter;

  beforeEach(() => {
    filter = new EnergyFilter(true, "vibration");
  });

  test("should return true if energy filter is off", () => {
    filter = new EnergyFilter(false, "vibration");
    expect(filter.apply(sampleNode)).toBe(true);
  });

  test("should return false if sensor type does not match", () => {
    filter = new EnergyFilter(true, "humidity");
    const humidityNode: TreeLeaf = { ...sampleNode, sensorType: "energy" };
    expect(filter.apply(humidityNode)).toBe(false);
  });

  test("should return true if sensor type matches and energy filter is on", () => {
    expect(filter.apply(sampleNode)).toBe(true);
  });

  test("should return false if node type is not component", () => {
    expect(filter.apply(nonComponentNode)).toBe(false);
  });
});
