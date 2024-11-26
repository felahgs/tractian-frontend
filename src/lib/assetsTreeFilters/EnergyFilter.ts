import { TreeLeaf, TreeNode } from "@/lib/assetsTree";
import { FilterRule } from "./FilterRule.types";

export class EnergyFilter implements FilterRule {
  private energyFilterOn: boolean;
  private sensorType: string;

  constructor(energyFilterOn: boolean, sensorType: string) {
    this.energyFilterOn = energyFilterOn;
    this.sensorType = sensorType;
  }

  apply(node: TreeLeaf | TreeNode): boolean {
    if (node.type === "component") {
      if (this.energyFilterOn && node.sensorType !== this.sensorType) {
        return false;
      }
      return true;
    }
    return false;
  }
}
