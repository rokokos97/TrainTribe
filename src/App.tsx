import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main";

function App(): React.JSX.Element {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
