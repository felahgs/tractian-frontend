import React, { HtmlHTMLAttributes, useState } from "react";
// import clsx from "clsx";

import { TreeNode } from "@/lib/assetsTree";
// import { ComponentNode, TreeNode } from "@/lib/assetsTree";

import LocationIcon from "@/icons/location.svg";
import AssetIcon from "@/icons/asset.svg";
import ComponentIcon from "@/icons/component.svg";
// import DotIcon from "@/icons/dot.svg";
// import BoltIcon from "@/icons/bolt.svg";
import ArrowDown from "@/icons/arrow_down.svg";
import ArrowRight from "@/icons/arrow_right.svg";

import Flex from "@/components/Layout/Flex";
import Button from "@/components/Button";

import styles from "./AssetsTreeView.module.scss";
import AssetTreeLeaf from "./AssetsTreeLeaf";

interface AssetTreeNodeProps extends HtmlHTMLAttributes<HTMLDivElement> {
  data: TreeNode;
}

const assetIcon = {
  location: <LocationIcon />,
  asset: <AssetIcon />,
  component: <ComponentIcon />,
};

function AssetTreeNode({ data, ...rest }: AssetTreeNodeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { name, type } = data;
  // const { status, sensorType } = data as ComponentNode;

  // const isComponent = type === "component";
  // const isEnergy = sensorType === "energy";
  // const hasChildren = !isComponent && data.children.length > 0;
  const hasChildren = data.children.length > 0;

  const Chevron = () => (isOpen ? <ArrowDown /> : <ArrowRight />);
  // const StatusIcon = () => (isEnergy ? <BoltIcon /> : <DotIcon />);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <Flex direction="column" gap="none" {...rest}>
      <Button onClick={handleClick} variant="text">
        <Flex align="center" gap="sm">
          <Flex gap="none">
            {hasChildren ? (
              <>
                <span className={styles.iconContainer}>
                  <Chevron />
                </span>
                <span className={styles.iconContainer}>{assetIcon[type]}</span>
              </>
            ) : (
              <span
                style={{ paddingLeft: "8px" }}
                className={styles.iconContainer}
              >
                {assetIcon[type]}
              </span>
            )}
          </Flex>
          {name}
          {/* {isComponent && (
            <span className={clsx(styles[status])}>
              <StatusIcon />
            </span>
          )} */}
        </Flex>
      </Button>
      {isOpen &&
        data.children?.map((child) =>
          child.type === "component" ? (
            <AssetTreeLeaf
              style={{ paddingLeft: "20px" }}
              key={child.id}
              data={child}
            />
          ) : (
            <AssetTreeNode
              style={{ paddingLeft: "20px" }}
              key={child.id}
              data={child}
            />
          ),
        )}
    </Flex>
  );
}

export default AssetTreeNode;
