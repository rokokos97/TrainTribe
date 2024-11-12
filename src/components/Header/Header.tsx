import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

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
      <Link
        to="/signIn"
        className={styles.icon}
      >
        <UserOutlined />
      </Link>
    </div>
  );
};

export default Header;
