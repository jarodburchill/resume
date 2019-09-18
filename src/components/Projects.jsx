import React from "react";
import Spacing from "./styles/Spacing";
import Project from "./Project";
import json from "../resume-data.json";

const Projects = () => {
  const projects = json.projects;

  return (
    <Spacing>
      <h3>{projects.title}</h3>
      <hr />
      {projects.data.map((project, index) => {
        return <Project key={index} project={project} />;
      })}
    </Spacing>
  );
};

export default Projects;
