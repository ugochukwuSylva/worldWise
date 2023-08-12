import React from "react";
import styles from "../components/Sidebar.module.css";
import Logo from "../components/Logo";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import AppNav from "../components/AppNav";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </aside>
  );
}

export default Sidebar;
