import Image from "next/image";

import AssetInfo from "@/components/AssetInfo/AssetInfo";
import AssetsTree from "@/components/AssetsTreeView/AssetsTreeView";
import Flex from "@/components/Layout/Flex";
import Text from "@/components/Text";
import Button from "@/components/Button/Button";

import ThunderboldSVG from "@/icons/thunderbolt.svg";
import CritcalSVG from "@/icons/exclamation_circle.svg.svg";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <Flex as="section" direction="column" className={styles.section}>
      <Flex as="header" justify="space-between">
        <Flex align="center">
          <Text type="title">Ativos</Text>
          <Text type="caption" size={"sm"}>
            / Apex Unit
          </Text>
        </Flex>
        <Flex gap="sm">
          <Button
            icon={
              <Image
                className={styles.icon}
                height={16}
                width={16}
                src={ThunderboldSVG}
                alt="icon"
              />
            }
            variant="secondary"
          >
            Sensor de Energia
          </Button>
          <Button
            icon={
              <Image
                className={styles.icon}
                height={16}
                width={16}
                src={CritcalSVG}
                alt="icon"
              />
            }
            variant="secondary"
          >
            Crítico
          </Button>
        </Flex>
      </Flex>

      <Flex justify="space-between" fluidH>
        <AssetsTree className={styles.assetTree} />
        <AssetInfo className={styles.assetInfo} />
      </Flex>
    </Flex>
  );
}
