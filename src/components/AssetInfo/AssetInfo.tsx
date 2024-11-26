"use client";

import React, { useContext } from "react";
import clsx from "clsx";

import Flex from "@/components/Layout/Flex";
import Text from "@/components/Text";
import Avatar from "@/components/Avatar";

import DotIcon from "@/icons/dot.svg";
import BoltIcon from "@/icons/bolt.svg";
import InboxIcon from "@/icons/inbox.svg";
import SensorIcon from "@/icons/sensor.svg";
import ReceptorIcon from "@/icons/md_outliner_router.svg";

import { AssetTreeContext } from "@/contexts/AssetTreeContext";
import { ComponentNode } from "@/lib/assetsTree";

import Divider from "../Divider";

import styles from "./AssetInfo.module.scss";

interface AssetInfoProps {
  className: string;
}

function AssetInfo({ className }: AssetInfoProps) {
  const { selectedAsset } = useContext(AssetTreeContext);
  const { name, gatewayId, sensorId, status, sensorType } =
    selectedAsset || ({} as ComponentNode);

  const isEnergy = sensorType === "energy";
  const StatusIcon = () => (isEnergy ? <BoltIcon /> : <DotIcon />);

  if (!selectedAsset)
    return (
      <section className={clsx(styles.container, className)}>
        <Flex p="md" fluidH align="center" justify="center">
          <Text align="center" type="caption" color="muted">
            Selecione um ativo para ver seus detalhes.
          </Text>
        </Flex>
      </section>
    );

  return (
    <section className={clsx(styles.container, className)}>
      <Flex as="header" align="center" className={styles.header}>
        <Text type="title">{name}</Text>
        <span className={clsx(status && styles[status])}>
          <StatusIcon />
        </span>
      </Flex>

      <div className={styles.content}>
        <Flex
          className={styles.descriptionSection}
          direction="row"
          gap="xl"
          p="xl"
        >
          <Flex
            direction="column"
            justify="center"
            align="center"
            gap="none"
            className={styles.imageContainer}
          >
            <InboxIcon width={"42px"} height={"42px"} />
            <Text size="md">Adicionar imagem do Ativo</Text>
          </Flex>

          <Flex
            style={{ flex: 1 }}
            direction="column"
            justify="center"
            gap="none"
          >
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
                {isEnergy ? (
                  <>
                    <Avatar size={24} initials="E" />
                    <Text type="caption">Elétrica</Text>
                  </>
                ) : (
                  <>
                    <Avatar size={24} initials="M" />
                    <Text type="caption">Mecânica</Text>
                  </>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex className={styles.componentsSection} p="xl">
          <Flex direction="column" gap="sm">
            <Text type="title" size="md">
              Sensor
            </Text>
            <Flex as="span" gap="xs">
              <SensorIcon />
              <Text type="caption">{sensorId}</Text>
            </Flex>
          </Flex>
          <Flex direction="column" gap="sm">
            <Text type="title" size="md">
              Receptor
            </Text>

            <Flex as="span" gap="xs">
              <ReceptorIcon />
              <Text type="caption">{gatewayId}</Text>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </section>
  );
}

export default AssetInfo;
