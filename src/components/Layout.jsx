import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <img className="fixed-image" src="/images/富士山2.jpg" alt="富士山" />
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
