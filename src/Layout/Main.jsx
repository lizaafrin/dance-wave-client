import React from "react";

import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import Footer from "../Pages/Shared/Footer";


const Main = () => {
  const location = useLocation();
  const noFooter = location.pathname.includes('login') || location.pathname.includes('signup');
  return (
    <div className="bg-lime-100">
      <Header></Header>
      <Outlet></Outlet>
      {noFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;