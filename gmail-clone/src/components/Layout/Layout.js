
import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
        <Outlet /> 
      </div>
    </>
  );
};

export default Layout;