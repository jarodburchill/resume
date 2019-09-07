import React from "react";
import Projects from "./Projects";
import Education from "./Education";
import styles from "../styles/Main.module.scss";

function Main() {
  return (
    <div className={styles.container}>
      <Projects />
      <Education />
    </div>
  );
}

export default Main;
