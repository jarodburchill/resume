import React from "react";
import Project from "./Project";
import json from "../resume-data.json";

function Projects() {
  const projects = json.projects;

  return (
    <div className="padding">
      <h3>{projects.title}</h3>
      <hr />
      {projects.data.map((project, index) => {
        return <Project key={index} project={project} />;
      })}
    </div>
  );
}

export default Projects;
