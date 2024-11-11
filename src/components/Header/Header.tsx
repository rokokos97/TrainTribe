import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <Link to="/">
        <p
          className={styles.title}
        >
          train tribe
        </p>
      </Link>
    </div>
  );
};

export default Header;
