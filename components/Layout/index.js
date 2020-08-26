import React from "react";
import styles from "./styles.module.scss";

const Layout = ({ children, home = false }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
