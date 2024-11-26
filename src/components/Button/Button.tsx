import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "text";
  icon?: ReactNode;
  fluid?: boolean;
  conpact?: boolean;
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  conpact = false,
  icon,
  children,
  active,
  fluid,
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`variant_${variant}`],
        fluid && styles.fluid,
        conpact && styles.conpact,
        active && styles.active,
        className,
      )}
      {...rest}
    >
      <div className={styles.content}>
        {icon}
        {children}
      </div>
    </button>
  );
};

export default Button;
