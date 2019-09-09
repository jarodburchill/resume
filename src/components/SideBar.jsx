import React from "react";
import Profile from "./Profile";
import Info from "./Info";
import Social from "./Social";
import Skills from "./Skills";

function SideBar() {
  return (
    <div className="sidebar-container">
      <Profile />
      <Info />
      <Social />
      <Skills />
    </div>
  );
}

export default SideBar;
