"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useFloating,
  useInteractions,
  useListNavigation,
} from "@floating-ui/react";

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
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const { refs, context } = useFloating({
    open: true,
  });

  const listRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleNavigate = (index: number | null) => {
    if (index !== null) {
      setActiveIndex(index);
    }
  };

  const listNavigation = useListNavigation(context, {
    listRef,
    activeIndex,
    orientation: "both",
    loop: true,
    onNavigate: handleNavigate,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [listNavigation],
  );

  const pathname = usePathname();

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      className={styles.container}
    >
      <Image
        height={15}
        width={103}
        priority
        src={"/logo.svg"}
        alt="tractian logo"
      />
      <div ref={refs.setReference} {...getReferenceProps()} />
      <Flex ref={refs.setFloating} {...getFloatingProps()}>
        {companies.map((company, index) => (
          <Link
            tabIndex={activeIndex === index ? 0 : -1}
            ref={(node) => {
              listRef.current[index] = node;
            }}
            {...getItemProps()}
            key={company.id}
            href={`/company/${company.id}`}
          >
            <Button
              tabIndex={-1}
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
