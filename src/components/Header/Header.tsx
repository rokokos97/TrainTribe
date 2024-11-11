import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <p
        className={styles.title}
      >
        train tribe
      </p>
    </div>
  );
};

export default Header;
