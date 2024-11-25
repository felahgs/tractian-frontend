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

  const assetsTree = buildTree(locations, assets);
  console.log("assetsTree", assetsTree);

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
        <AssetsTree treeData={assetsTree} className={styles.assetTree} />
        <AssetInfo className={styles.assetInfo} />
      </Flex>
    </Flex>
  );
}
