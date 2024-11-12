import React from "react";
import styles from "./LoginLayout.module.scss";

import { Routes, Route } from "react-router-dom";

import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import Page404 from "../Page404/Page404";

const LoginLayout: React.FC = () => {
  return <div className={styles.LoginLayout}>
    <h2 className={styles.subtitle}>Hello and Welcome</h2>
    <Routes>
      <Route
        index
        element={<SignIn />}
      />
      <Route
        path="/signUp"
        element={<SignUp />}
      />
      <Route
        path="*"
        element={<Page404 />}
      />
    </Routes>
  </div>;
};

export default LoginLayout;
