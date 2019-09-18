import React from "react";
import Group from "./styles/Group";

import Project from "./Project";
import json from "../resume-data.json";

const Projects = () => {
  const projects = json.projects;

  return (
    <Group>
      <h3>{projects.title}</h3>
      <hr />
      {projects.data.map((project, index) => {
        return <Project key={index} project={project} />;
      })}
    </Group>
  );
};

export default Projects;
