"use client";
import React, { ElementType } from "react";
import clsx from "clsx"; // Import clsx
import styles from "./Flex.module.scss"; // Import the SASS styles

interface FlexPropsBase extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "center" | "flex-end" | "stretch";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  p?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  fluid?: boolean;
  fluidH?: boolean;
}

type FlexProps<T extends ElementType = "div"> = FlexPropsBase & {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const Flex = React.forwardRef(
  <T extends ElementType = "div">(
    {
      children,
      as,
      direction = "row",
      justify = "flex-start",
      align = "stretch",
      wrap = "nowrap",
      gap = "md",
      p = "none",
      className = "",
      fluid = false,
      fluidH = false,
      ...rest
    }: FlexProps<T>,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const Component = as || "div";

    const classes = clsx(
      styles["flex-component"],
      styles[`flex-direction-${direction}`],
      styles[`justify-${justify}`],
      styles[`align-${align}`],
      styles[`wrap-${wrap}`],
      styles[`gap-${gap}`],
      styles[`padding-${p}`],
      fluid && styles.fluid,
      fluidH && styles.fluidH,

      className,
    );

    return (
      <Component ref={ref} className={classes} {...rest}>
        {children}
      </Component>
    );
  },
);

Flex.displayName = "Flex";

export default Flex;
