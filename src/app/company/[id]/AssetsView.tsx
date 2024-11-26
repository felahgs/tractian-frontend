"use client";

import AssetInfo from "@/components/AssetInfo/AssetInfo";
import AssetsTree from "@/components/AssetsTreeView/AssetsTreeView";
import Flex from "@/components/Layout/Flex";
import Text from "@/components/Text";
import Button from "@/components/Button/Button";

import { AssetData, CompanyData, LocationData } from "@/services/companies";

import ThunderboldSVG from "@/icons/thunderbolt.svg";
import CritcalSVG from "@/icons/exclamation_circle.svg.svg";

import styles from "./page.module.scss";
import { buildTree } from "@/lib/assetsTree/assetsTree";
import { AssetTreeContext } from "@/contexts/AssetTreeContext";
import { useState } from "react";
import { TreeLeaf } from "@/lib/assetsTree";

interface AssetsViewProps {
  company: CompanyData;
  locations: LocationData[];
  assets: AssetData[];
}

export default function AssetsView({
  company,
  locations,
  assets,
}: AssetsViewProps) {
  const { name: companyName } = company;
  const [selectedAsset, setSelectedAsset] = useState<TreeLeaf | null>(null);

  const assetsTree = buildTree(locations, assets);

  const handleSetActiveAsset = (newAsset: TreeLeaf) => {
    setSelectedAsset(newAsset);
  };

  return (
    <Flex as="section" direction="column" className={styles.container}>
      <Flex as="header" justify="space-between">
        <Flex align="center">
          <Text type="title">Ativos</Text>
          <Text type="caption" size={"sm"}>
            / {companyName} Unit
          </Text>
        </Flex>
        <Flex gap="sm">
          <Button icon={<ThunderboldSVG />} variant="secondary">
            Sensor de Energia
          </Button>
          <Button icon={<CritcalSVG />} variant="secondary">
            Crítico
          </Button>
        </Flex>
      </Flex>

      <Flex className={styles.assetViewContent} justify="space-between" fluidH>
        <AssetTreeContext.Provider
          value={{ selectedAsset, handleSetActiveAsset }}
        >
          <AssetsTree treeData={assetsTree} className={styles.assetTree} />
          <AssetInfo className={styles.assetInfo} />
        </AssetTreeContext.Provider>
      </Flex>
    </Flex>
  );
}
