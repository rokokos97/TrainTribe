import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className={styles.Footer}>
      <section className={styles.section}>
        <Link
          to="/about"
          className={styles.buttonSmall}
        >
            about
        </Link>
        <Link
          to="/term&conditions"
          className={styles.button}
        >
          tarm & conditions
        </Link>
        <Link
          to="/help"
          className={styles.buttonSmall}
        >
          help
        </Link>
      </section>
      <p>© 2024 TrainTribe</p>
    </div>
  );
};

export default Footer;
