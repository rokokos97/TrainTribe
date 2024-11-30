import React from "react";
import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";

function App(): React.JSX.Element {
  return (
    <section className={styles.App}>
      <Routes>
        <Route>
        </Route>
      </Routes>
      Hello world
    </section>
  );
}

export default App;
