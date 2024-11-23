import React from "react";
import Image from "next/image";

import Button from "../Button/Button";
// import logo from "../../../public/logo.png";
import { ReactComponent as Gold } from "../../../public/icons/gold.svg";

import styles from "./Header.module.scss";
import Flex from "@/components/Layout/Flex";

function Header() {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      className={styles.container}
    >
      <Image height={15} width={103} src={"/logo.png"} alt="tractian logo" />
      <Flex>
        <Button active conpact>
          <Gold />
          Apex Unit
        </Button>
        <Button conpact>Tobias Unit</Button>
        <Button conpact>Jaguar Unit</Button>
      </Flex>
    </Flex>
  );
}

export default Header;
