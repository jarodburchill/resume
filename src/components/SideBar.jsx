import React from "react";
import Profile from "./Profile";
import Info from "./Info";
import Social from "./Social";
import styles from "./styles/SideBar.module.scss";

function SideBar() {
  return (
    <div className={styles.container}>
      <Profile />
      <Info />
      <Social />
    </div>
  );
}

export default SideBar;
