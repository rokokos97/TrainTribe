import React from "react";
import styles from "./MainPage.module.scss";
import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <div className={styles.MainPage}>
      <Link
        to="/joinTheTribe"
        className={styles.button}
      >
        join the tribe
      </Link>
      <Link
        to="/shareTheStribe"
        className={styles.button}
      >
        share the stribe
      </Link>
    </div>
  );
};

export default MainPage;
