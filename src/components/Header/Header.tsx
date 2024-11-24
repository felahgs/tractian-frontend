"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Button from "@/components/Button";
import Flex from "@/components/Layout/Flex";
import GoldSVG from "@/icons/gold.svg";

import styles from "./Header.module.scss";

interface HeaderProps {
  companies: {
    id: string;
    name: string;
  }[];
}

function Header({ companies = [] }: HeaderProps) {
  const pathname = usePathname();

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      className={styles.container}
    >
      <Image height={15} width={103} src={"/logo.png"} alt="tractian logo" />
      <Flex>
        {companies.map((company) => (
          <Link key={company.id} href={`/company/${company.id}`}>
            <Button
              // onClick={handleClick(company.id)}

              active={pathname.includes(company.id)}
              conpact
            >
              <GoldSVG />
              {company.name}
            </Button>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}

export default Header;
