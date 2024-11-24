import React, { CSSProperties } from "react";

import styles from "./Divider.module.scss";
import clsx from "clsx";

interface DividerProps {
  vertical?: boolean;
  p?: CSSProperties["padding"];
}

function Divider({ vertical, p = "24px 0" }: DividerProps) {
  return (
    <div style={{ padding: p }}>
      <div className={clsx(styles.divider, vertical && styles.vertical)} />
    </div>
  );
}

export default Divider;
