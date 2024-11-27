import React, { useContext } from "react";

import Flex from "@/components/Layout/Flex";
import Text from "@/components/Text";
import { filterTreeList, TreeLeaf, TreeNode } from "@/lib/assetsTree";
import {
  EnergyFilter,
  CriticalFilter,
  NameSearchFilter,
} from "@/lib/assetsTreeFilters";

import { AssetTreeContext } from "@/contexts/AssetTreeContext";

import AssetTreeNode from "./AssetsTreeNode";
import AssetTreeLeaf from "./AssetsTreeLeaf";

import styles from "./AssetsTreeView.module.scss";

interface AssetsTreeProps {
  data: Array<TreeNode | TreeLeaf>;
}

function AssetsTree({ data }: AssetsTreeProps) {
  const { filterState } = useContext(AssetTreeContext);
  const { energyFilterOn, criticalFilterOn, searchString } = filterState;
  const hasAnyFilterActive = Object.values(filterState).some(
    (value) => !!value,
  );

  const filters = [
    new NameSearchFilter(searchString),
    new EnergyFilter(energyFilterOn, "energy"),
    new CriticalFilter(criticalFilterOn, "alert"),
  ];

  const filterNodes = (node: TreeLeaf | TreeNode) => {
    return filters.every((filter) => filter.apply(node));
  };

  const filteredTree = hasAnyFilterActive
    ? filterTreeList(data, filterNodes)
    : data;

  if (filteredTree.length === 0) {
    return (
      <Flex
        style={{ paddingBottom: "60px" }}
        p="sm"
        align="center"
        justify="center"
        fluidH
      >
        <Text align="center" type="caption">
          Não foram encontrados ativos que correspondam aos filtros
          selecionados.
        </Text>
      </Flex>
    );
  }

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
