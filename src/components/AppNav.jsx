import React from "react";
import styles from "../components/AppNav.module.css";
import { NavLink } from "react-router-dom";

function AppNavBar() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">countries</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AppNavBar;
