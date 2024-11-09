import React from "react";
import styles from "./Layout.module.scss";

const Layout: React.FC = () => {
  return (
    <div className={styles.Layout}>
      <button className={styles.button}>join the tribe</button>
      <button className={styles.button}>share the stribe</button>
    </div>
  );
};

export default Layout;
