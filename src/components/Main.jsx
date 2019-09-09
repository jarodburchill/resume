import React from "react";
import Summary from "./Summary";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";

function Main() {
  return (
    <div className="main-container">
      <Summary />
      <Projects />
      <Education />
      <Experience />
    </div>
  );
}

export default Main;
