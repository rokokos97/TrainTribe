import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "100vh",
        margin: "20 auto",
        padding: "20px",
        border: "1px solid #black"
      }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
};

export default Layout;
