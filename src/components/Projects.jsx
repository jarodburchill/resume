import React from "react";
import Project from "./Project";
import data from "../resume-data.json";

function Projects() {
  const projects = data.projects;

  return (
    <div className="global-padding">
      <h3>Projects</h3>
      <hr />
      {projects.map((project, index) => {
        return <Project key={index} project={project} />;
      })}
    </div>
  );
}

export default Projects;
