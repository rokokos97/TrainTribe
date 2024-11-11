import React from "react";
import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
function App(): React.JSX.Element {
  return (
    <section className={styles.App}>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          {/* <Route
            index
            element={<Layout />}
          /> */}
        </Route>
      </Routes>
    </section>
  );
}

export default App;
