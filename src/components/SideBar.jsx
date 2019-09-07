import React from "react";
import Profile from "./Profile";
import Contact from "./Contact";
import Social from "./Social";
import styles from "./styles/SideBar.module.scss";

function SideBar() {
  return (
    <div className={styles.container}>
      <Profile />
      <Contact />
      <Social />
    </div>
  );
}

export default SideBar;
