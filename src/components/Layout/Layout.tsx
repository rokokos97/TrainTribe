import React from "react";
import styles from "./Layout.module.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Outlet} from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className={styles.Layout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
