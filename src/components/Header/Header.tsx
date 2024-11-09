import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <p className={styles.title}>train tribe</p>
      <p className={styles.subtitle}>join the tribe, share the stride</p>
    </div>
  );
};

export default Header;
