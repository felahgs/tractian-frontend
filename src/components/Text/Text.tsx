"use client";
import clsx from "clsx";
import React, { CSSProperties } from "react";
import styles from "./Text.module.scss";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  type?: "text" | "caption" | "title";
  color?: CSSProperties["color"];
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "light" | "normal" | "bold";
  align?: CSSProperties["textAlign"];
  className?: string;
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  as = "p",
  type = "text",
  align = "left",
  weight,
  color,
  size,
  className = "",
  children,
  ...rest
}) => {
  const Component = as;
  const isHeader = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(as);

  const textClass = isHeader ? "" : styles[type || "text"];
  const sizeClass = size ? styles[size] : "";
  const weightClass = weight ? styles[weight] : "";
  const alignClass = align ? styles[align] : "";

  return (
    <Component
      className={clsx(
        styles.textComponent,
        type && textClass,
        sizeClass,
        weightClass,
        alignClass,
        className,
      )}
      style={{ color }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Text;
