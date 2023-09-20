import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
        <main>{children}</main>
        <Footer />
    </>
  );
};

export default Layout;
