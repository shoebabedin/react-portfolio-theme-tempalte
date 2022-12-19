import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";

const Layout = () => {
 
  return (
    <>
      <Preloader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
