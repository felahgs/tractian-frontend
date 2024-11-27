import React from "react";

import styles from "./Spinner.module.scss";

function Spinner() {
  return <div role="status" className={styles.spinner}></div>;
}

export default Spinner;
