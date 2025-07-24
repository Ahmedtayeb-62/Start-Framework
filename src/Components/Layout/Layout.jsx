import React from "react";
import { Outlet } from "react-router-dom";
import Mainnav from "../Mainnav/Mainnav";
import Footer from "../Footer/Footer";
import Zoomp1 from "../Zoomp1/Zoomp1";

export default function Layout() {
  return (
    <div>
      <Mainnav />
      <Outlet />
      <Footer />
    </div>
  );
}
