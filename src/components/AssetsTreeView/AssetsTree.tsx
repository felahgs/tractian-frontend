import React from "react";

import Flex from "@/components/Layout/Flex";
import { TreeLeaf, TreeNode } from "@/lib/assetsTree";

import AssetTreeNode from "./AssetsTreeNode";
import AssetTreeLeaf from "./AssetsTreeLeaf";

import styles from "./AssetsTreeView.module.scss";

interface AssetsTreeProps {
  data: Array<TreeNode | TreeLeaf>;
}

function AssetsTree({ data }: AssetsTreeProps) {
  return (
    <Flex p="sm" gap="none" className={styles.nodeTree} direction="column">
      {data.map((item) =>
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
