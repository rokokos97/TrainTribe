import React from "react";
import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import MainPage from "./components/MainPage/MainPage";
import JoinTheTribe from "./components/JoinTheTribe/JoinTheTribe";
import ShareTheStribe from "./components/ShareTheStribe/ShareTheStribe";
import Page404 from "./components/Page404/Page404";
import LoginLayout from "./components/LoginLayout/LoginLayout";
function App(): React.JSX.Element {
  return (
    <section className={styles.App}>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<MainPage />}
          />
          <Route
            path="/joinTheTribe"
            element={<JoinTheTribe />}
          />
          <Route
            path="/shareTheStribe"
            element={<ShareTheStribe />}
          />
          <Route
            path="/signIn/*"
            element={<LoginLayout />}
          />
          <Route
            path="*"
            element={<Page404 />}
          />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
