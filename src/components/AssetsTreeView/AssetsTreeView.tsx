import React from "react";

import styles from "./AssetsTreeView.module.scss";
import Flex from "../Layout/Flex";
import clsx from "clsx";

import { LocationNode } from "@/lib/assetsTree";
import AssetsTree from "./AssetsTree";

interface AssetsTreeViewProps {
  treeData: LocationNode[];
  className: string;
}

function AssetsTreeView({ treeData, className }: AssetsTreeViewProps) {
  return (
    <Flex direction="column" className={clsx(styles.container, className)}>
      <div className={clsx(styles.inputContainer)}>
        <input
          placeholder="Buscar Ativo ou Local"
          type="text"
          name="search"
          id="search-asset"
        />
      </div>
      <AssetsTree data={treeData} />
    </Flex>
  );
}

export default AssetsTreeView;
