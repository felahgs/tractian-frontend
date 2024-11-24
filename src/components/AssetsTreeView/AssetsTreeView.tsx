import React from "react";

import styles from "./AssetsTreeView.module.scss";
import Flex from "../Layout/Flex";
import clsx from "clsx";

interface AssetsTreeViewProps {
  className: string;
}

function AssetsTreeView({ className }: AssetsTreeViewProps) {
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
      <div>Asset tree</div>
    </Flex>
  );
}

export default AssetsTreeView;
