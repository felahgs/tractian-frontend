"use client";

// import Image from "next/image";
import React from "react";
import clsx from "clsx";

import Flex from "@/components/Layout/Flex";
import Text from "@/components/Text";

import styles from "./AssetInfo.module.scss";
import Divider from "../Divider";
import Avatar from "@/components/Avatar";

import SVG from "@/icons/globe.svg";

interface AssetInfoProps {
  className: string;
}

function AssetInfo({ className }: AssetInfoProps) {
  return (
    <section className={clsx(styles.container, className)}>
      <Flex as="header" align="center" className={styles.header}>
        <Text type="title">MOTORS H12D - Stage 3</Text>
        <Text>icon</Text>
        <SVG width="12px" height="12px" />
      </Flex>

      <div className={styles.content}>
        <Flex
          className={styles.descriptionSection}
          direction="row"
          gap="xl"
          p="xl"
        >
          <Flex
            justify="center"
            align="center"
            className={styles.imageContainer}
          >
            {/* <Image width={336} height={226} src="" alt="asset-image" /> */}
          </Flex>

          <Flex direction="column" justify="center" gap="none" fluid>
            <Flex direction="column" gap="none">
              <Text type="title" size="md">
                Tipo de Equipamento
              </Text>
              <Text type="caption">Motor Elétrico (Trifásico)</Text>
            </Flex>

            <Divider />

            <Flex direction="column" gap="none">
              <Text type="title" size="md">
                Responsáveis
              </Text>
              <Flex>
                <Avatar size={24} initials="E" />
                <Text type="caption">Elétrica</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex className={styles.componentsSection} p="xl">
          <Flex direction="column" gap="sm">
            <Text type="title" size="md">
              Sensor
            </Text>
            <Text type="caption">(icon)TFV655</Text>
          </Flex>
          <Flex direction="column" gap="sm">
            <Text type="title" size="md">
              Receptor
            </Text>
            <Text type="caption">(icon)YTF265</Text>
          </Flex>
        </Flex>
      </div>
    </section>
  );
}

export default AssetInfo;
