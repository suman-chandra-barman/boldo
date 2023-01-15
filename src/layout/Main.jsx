import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
const Main = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
