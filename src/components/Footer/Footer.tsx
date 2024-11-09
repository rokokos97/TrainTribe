import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div
      className={styles.Footer}
    >
      <section className={styles.section}>
        <button className={styles.button}>
          about
        </button>
        <button className={styles.button}>
          help
        </button>
        <button className={styles.button}>
          tarm & conditions
        </button>
      </section>
      <p>© 2024 TrainTribe</p>
    </div>
  );
};

export default Footer;
