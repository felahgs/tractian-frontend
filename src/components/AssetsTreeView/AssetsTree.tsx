import React, { useContext } from "react";

import Flex from "@/components/Layout/Flex";
import { filterTreeList, TreeLeaf, TreeNode } from "@/lib/assetsTree";
import { EnergyFilter, CriticalFilter } from "@/lib/assetsTreeFilters";

import { AssetTreeContext } from "@/contexts/AssetTreeContext";

import AssetTreeNode from "./AssetsTreeNode";
import AssetTreeLeaf from "./AssetsTreeLeaf";

import styles from "./AssetsTreeView.module.scss";

interface AssetsTreeProps {
  data: Array<TreeNode | TreeLeaf>;
}

function AssetsTree({ data }: AssetsTreeProps) {
  const { filterState } = useContext(AssetTreeContext);
  const { energyFilterOn, criticalFilterOn } = filterState;
  const hasAnyFilterActive = Object.values(filterState).some(
    (value) => !!value,
  );

  const filters = [
    new EnergyFilter(energyFilterOn, "energy"),
    new CriticalFilter(criticalFilterOn, "alert"),
  ];

  const filterNodes = (node: TreeLeaf | TreeNode) => {
    return filters.every((filter) => filter.apply(node));
  };

  const filteredTree = hasAnyFilterActive
    ? filterTreeList(data, filterNodes)
    : data;

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
