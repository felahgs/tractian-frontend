"use client";
import clsx from "clsx";
import React, { CSSProperties } from "react";

import styles from "./Text.module.scss";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  type?: "text" | "caption" | "title";
  color?: CSSProperties["color"];
  size?: "small" | "medium" | "large" | CSSProperties["fontSize"];
  weight?: "light" | "normal" | "bold" | CSSProperties["fontWeight"];
  align?: CSSProperties["textAlign"];
  lineHeight?: CSSProperties["lineHeight"];
  className?: string;
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  as = "p",
  type = "text",
  align = "left",
  lineHeight = "normal",
  weight,
  color,
  size,
  className = "",
  children,
  ...rest
}) => {
  const Component = as;

  const sizeValues = {
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  };

  const fontSize =
    size && size in sizeValues
      ? sizeValues[size as keyof typeof sizeValues]
      : size;

  return (
    <>
      <Component
        className={clsx("text-component", className, styles[type])}
        {...rest}
      >
        {children}
      </Component>
      <style jsx>{`
        .text-component {
          color: ${color};
          font-size: ${fontSize};
          font-weight: ${weight};
          text-align: ${align};
          line-height: ${lineHeight};
          margin: 0; /* Default to no margin for flexible use */
        }
      `}</style>
    </>
  );
};

export default Text;
