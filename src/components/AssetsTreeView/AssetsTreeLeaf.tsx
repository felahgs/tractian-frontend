import React, { HtmlHTMLAttributes } from "react";
import clsx from "clsx";

import { ComponentNode } from "@/lib/assetsTree";

import LocationIcon from "@/icons/location.svg";
import AssetIcon from "@/icons/asset.svg";
import ComponentIcon from "@/icons/component.svg";
import DotIcon from "@/icons/dot.svg";
import BoltIcon from "@/icons/bolt.svg";

import Flex from "@/components/Layout/Flex";
import Button from "@/components/Button";

import styles from "./AssetsTreeView.module.scss";

interface AssetTreeLeafProps extends HtmlHTMLAttributes<HTMLDivElement> {
  data: ComponentNode;
}

const assetIcon = {
  location: <LocationIcon />,
  asset: <AssetIcon />,
  component: <ComponentIcon />,
};

function AssetTreeLeaf({ data, ...rest }: AssetTreeLeafProps) {
  const { name, type } = data;
  const { status, sensorType } = data;

  const isEnergy = sensorType === "energy";

  const StatusIcon = () => (isEnergy ? <BoltIcon /> : <DotIcon />);

  const handleClick = () => console.log("selected asset", data);

  return (
    <Flex {...rest}>
      <Button onClick={handleClick} variant="text">
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
}

export default AssetTreeLeaf;
