import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.Footer}>
      <section className={styles.section}>
        <button className={styles.buttonSmall}>about</button>
        <button className={styles.button}>tarm & conditions</button>
        <button className={styles.buttonSmall}>help</button>
      </section>
      <p>© 2024 TrainTribe</p>
    </div>
  );
};

export default Footer;
