import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Layout />,
    children: [
      {
        id: "login",
        path: "login",
        element: <SignIn />
      },
      {
        id: "register",
        path: "register",
        element: <SignUp />
      }
    ]
  }
]);
function App(): React.JSX.Element {
  return (
    <section className={styles.App}>
      <Header />
      <RouterProvider
        router={router}
        fallbackElement={<p>Initial Load...</p>}
      />
      <Footer />
    </section>
  );
}

export default App;
