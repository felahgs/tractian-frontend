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
import { useReducer, useState } from "react";
import { TreeLeaf } from "@/lib/assetsTree";
import { initialState, treeFilterReducer } from "../../reducer/reducer";
import {
  TOGGLE_CRITICAL_FILTER,
  TOGGLE_ENERGY_FILTER,
} from "@/app/reducer/action";

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
  const [filterState, dispatchFilterState] = useReducer(
    treeFilterReducer,
    initialState,
  );
  const { energyFilterOn, criticalFilterOn } = filterState;
  const assetsTree = buildTree(locations, assets);

  const handleSetActiveAsset = (newAsset: TreeLeaf) => {
    setSelectedAsset(newAsset);
  };

  const handleEnergyFilterToggle = () => {
    dispatchFilterState({ type: TOGGLE_ENERGY_FILTER });
  };

  const handleCriticalFilterToggle = () => {
    dispatchFilterState({ type: TOGGLE_CRITICAL_FILTER });
  };

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
          <Button
            active={energyFilterOn}
            icon={<ThunderboldSVG />}
            variant="secondary"
            onClick={handleEnergyFilterToggle}
          >
            Sensor de Energia
          </Button>
          <Button
            active={criticalFilterOn}
            icon={<CritcalSVG />}
            variant="secondary"
            onClick={handleCriticalFilterToggle}
          >
            Crítico
          </Button>
        </Flex>
      </Flex>

      <Flex className={styles.assetViewContent} justify="space-between" fluidH>
        <AssetTreeContext.Provider
          value={{
            selectedAsset,
            filterState,
            handleSetActiveAsset,
            dispatchFilterState,
          }}
        >
          <AssetsTree treeData={assetsTree} className={styles.assetTree} />
          <AssetInfo className={styles.assetInfo} />
        </AssetTreeContext.Provider>
      </Flex>
    </Flex>
  );
}
