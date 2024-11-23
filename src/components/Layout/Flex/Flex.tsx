"use client";
import React, { CSSProperties, ElementType } from "react";

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
  gap?: "small" | "medium" | "large" | CSSProperties["gap"];
  style?: React.CSSProperties;
  children?: React.ReactNode;
  p?: CSSProperties["padding"];
  pt?: CSSProperties["paddingTop"];
  pb?: CSSProperties["paddingBottom"];
  pl?: CSSProperties["paddingLeft"];
  pr?: CSSProperties["paddingRight"];
  h?: CSSProperties["height"];
  w?: CSSProperties["width"];
}

type FlexProps<T extends ElementType = "div"> = FlexPropsBase & {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const Flex = <T extends ElementType = "div">({
  children,
  as,
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  wrap = "nowrap",
  gap = "small",
  className = "",
  h,
  w,
  p,
  pt,
  pb,
  pl,
  pr,
}: FlexProps<T>) => {
  const Component = as || "div";

  const gapValues = {
    small: "8px",
    medium: "16px",
    large: "24px",
  };

  const calculatedGap =
    gap in gapValues ? gapValues[gap as keyof typeof gapValues] : gap;

  return (
    <>
      <Component className={`flex-component ${className}`}>
        {children}
      </Component>
      <style jsx>{`
        .flex-component {
          align-items: ${align};
          display: flex;
          flex-direction: ${direction};
          flex-wrap: ${wrap};
          gap: ${calculatedGap};
          height: ${h};
          justify-content: ${justify};
          padding: ${p};
          padding-left: ${pl};
          padding-right: ${pr};
          padding-top: ${pt};
          padding-bottom: ${pb};
          width: ${w};
        }
      `}</style>
    </>
  );
};

export default Flex;
