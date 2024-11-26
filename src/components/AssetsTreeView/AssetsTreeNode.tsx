import React, { HtmlHTMLAttributes, useState, forwardRef } from "react";

import { TreeNode } from "@/lib/assetsTree";

import LocationIcon from "@/icons/location.svg";
import AssetIcon from "@/icons/asset.svg";
import ComponentIcon from "@/icons/component.svg";
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

const AssetTreeNode = forwardRef<HTMLDivElement, AssetTreeNodeProps>(
  ({ data, ...rest }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const { name, type } = data;
    const hasChildren = data.children.length > 0;
    const Chevron = () => (isOpen ? <ArrowDown /> : <ArrowRight />);

    const handleClick = () => setIsOpen(!isOpen);

    return (
      <Flex fluid direction="column" gap="none" ref={ref} {...rest}>
        <Button onClick={handleClick} variant="text">
          <Flex align="center" gap="sm">
            <Flex gap="none">
              {hasChildren ? (
                <>
                  <span className={styles.iconContainer}>
                    <Chevron />
                  </span>
                  <span className={styles.iconContainer}>
                    {assetIcon[type]}
                  </span>
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
  },
);

AssetTreeNode.displayName = "AssetTreeNode";

export default AssetTreeNode;
