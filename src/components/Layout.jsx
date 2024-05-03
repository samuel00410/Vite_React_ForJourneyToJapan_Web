import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <img className="fixed-image" src="/images/富士山2.jpg" alt="富士山" />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
