import React from "react";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import styles from "../styles/Main.module.scss";

function Main() {
  return (
    <div className={styles.container}>
      <Projects />
      <Education />
      <Experience />
    </div>
  );
}

export default Main;
