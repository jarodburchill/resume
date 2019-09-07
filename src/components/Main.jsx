import React from "react";
import Qualifications from "./Qualifications";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import styles from "../styles/Main.module.scss";

function Main() {
  return (
    <div className={styles.container}>
      <Qualifications />
      <Projects />
      <Education />
      <Experience />
    </div>
  );
}

export default Main;
