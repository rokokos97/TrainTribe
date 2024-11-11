import React from "react";
import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import MainPage from "./components/MainPage/MainPage";
import JoinTheTribe from "./components/JoinTheTribe/JoinTheTribe";
import ShareTheStribe from "./components/ShareTheStribe/ShareTheStribe";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Page404 from "./components/Page404/Page404";
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
            path="/signIn"
            element={<SignIn/>}
          />
          <Route
            path="*"
            element={<SignUp/>}
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
