import React from "react";
import Qualifications from "./Qualifications";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";

function Main() {
  return (
    <div className="main-container">
      <Qualifications />
      <Projects />
      <Education />
      <Experience />
    </div>
  );
}

export default Main;
