import { TreeLeaf, TreeNode } from "@/lib/assetsTree";
import { FilterRule } from "./FilterRule.types";
import { StatusType } from "@/services/companies";

export class CriticalFilter implements FilterRule {
  private criticalFilterOn: boolean;
  private status: StatusType;

  constructor(criticalFilterOn: boolean, status: StatusType) {
    this.criticalFilterOn = criticalFilterOn;
    this.status = status;
  }

  apply(node: TreeLeaf | TreeNode): boolean {
    if (!this.criticalFilterOn) return true;
    if (node.type === "component") {
      if (node.status !== this.status) {
        return false;
      }
      return true;
    }
    return false;
  }
}
