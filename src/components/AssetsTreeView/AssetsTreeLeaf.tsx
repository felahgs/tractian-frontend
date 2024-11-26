import React, { HtmlHTMLAttributes, forwardRef, useContext } from "react";
import clsx from "clsx";

import { ComponentNode } from "@/lib/assetsTree";

import LocationIcon from "@/icons/location.svg";
import AssetIcon from "@/icons/asset.svg";
import ComponentIcon from "@/icons/component.svg";
import DotIcon from "@/icons/dot.svg";
import BoltIcon from "@/icons/bolt.svg";

import Flex from "@/components/Layout/Flex";
import Button from "@/components/Button";
import { AssetTreeContext } from "../../contexts/AssetTreeContext";

import styles from "./AssetsTreeView.module.scss";

interface AssetTreeLeafProps extends HtmlHTMLAttributes<HTMLDivElement> {
  data: ComponentNode;
}

const assetIcon = {
  location: <LocationIcon />,
  asset: <AssetIcon />,
  component: <ComponentIcon />,
};

const AssetTreeLeaf = forwardRef<HTMLDivElement, AssetTreeLeafProps>(
  ({ data, ...rest }, ref) => {
    const { id, name, type } = data;
    const { selectedAsset, handleSetActiveAsset } =
      useContext(AssetTreeContext);
    const { status, sensorType } = data;

    const isSelected = selectedAsset?.id === id;
    const isEnergy = sensorType === "energy";
    const StatusIcon = () => (isEnergy ? <BoltIcon /> : <DotIcon />);

    const handleClick = () => {
      handleSetActiveAsset(data);
    };

    return (
      <Flex fluid {...rest} ref={ref}>
        <Button
          fluid
          active={isSelected}
          className={clsx(isSelected && styles.nodeSelected)}
          onClick={handleClick}
          variant="text"
        >
          <Flex align="center" gap="sm">
            <Flex gap="none">
              <span
                style={{ paddingLeft: "8px" }}
                className={styles.iconContainer}
              >
                {assetIcon[type]}
              </span>
            </Flex>
            {name}
            <span className={clsx(styles.statusIcon, styles[status])}>
              <StatusIcon />
            </span>
          </Flex>
        </Button>
      </Flex>
    );
  },
);

AssetTreeLeaf.displayName = "AssetTreeLeaf";

export default AssetTreeLeaf;
