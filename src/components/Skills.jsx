import React from "react";
import Group from "./styles/Group";
import Skillset from "./Skillset";
import json from "../resume-data.json";

const Skills = () => {
  const skills = json.skills;

  return (
    <Group>
      <h3>{skills.title}</h3>
      <hr />
      {skills.data.map((skillset, index) => {
        return <Skillset key={index} skillset={skillset} />;
      })}
    </Group>
  );
};

export default Skills;
