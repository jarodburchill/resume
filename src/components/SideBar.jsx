import React from "react";
import Profile from "./Profile";
import Contact from "./Contact";
import styles from "./styles/SideBar.module.scss";

function SideBar() {
  return (
    <div className={styles.container}>
      <Profile />
      <Contact />
    </div>
  );
}

export default SideBar;
