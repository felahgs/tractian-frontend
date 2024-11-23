import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  conpact?: boolean;
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  conpact = false,
  icon,
  children,
  active,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        conpact && styles.conpact,
        active && styles.active,
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
