import React, { useContext } from "react";

import Flex from "@/components/Layout/Flex";
import { filterTreeList, TreeLeaf, TreeNode } from "@/lib/assetsTree";

import AssetTreeNode from "./AssetsTreeNode";
import AssetTreeLeaf from "./AssetsTreeLeaf";

import styles from "./AssetsTreeView.module.scss";
import { AssetTreeContext } from "@/contexts/AssetTreeContext";

interface AssetsTreeProps {
  data: Array<TreeNode | TreeLeaf>;
}

function AssetsTree({ data }: AssetsTreeProps) {
  const { filterState } = useContext(AssetTreeContext);
  const { energyFilterOn, criticalFilterOn } = filterState;

  const filterNodes = (node: TreeLeaf | TreeNode) => {
    if (node.type === "component") {
      if (energyFilterOn && node.sensorType !== "energy") {
        return false;
      }
      if (criticalFilterOn && node.status !== "alert") {
        return false;
      }
      return true;
    }

    return false;
  };

  const filteredTree = filterTreeList(data, filterNodes);

  return (
    <Flex p="sm" gap="none" className={styles.nodeTree} direction="column">
      {filteredTree.map((item) =>
        item.type === "component" ? (
          <AssetTreeLeaf key={item.id} data={item} />
        ) : (
          <AssetTreeNode key={item.id} data={item} />
        ),
      )}
    </Flex>
  );
}

export default AssetsTree;
