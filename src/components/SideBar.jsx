import React from "react";
import Profile from "./Profile";
import Info from "./Info";
import Social from "./Social";
import Skills from "./Skills";
import styles from "./styles/SideBar.module.scss";

function SideBar() {
  return (
    <div className={styles.container}>
      <Profile />
      <Info />
      <Social />
      <Skills />
    </div>
  );
}

export default SideBar;
