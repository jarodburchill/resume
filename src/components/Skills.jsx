import React from "react";
import Spacing from "./styles/Spacing";
import Skillset from "./Skillset";
import json from "../resume-data.json";

const Skills = () => {
  const skills = json.skills;

  return (
    <Spacing>
      <h3>{skills.title}</h3>
      <hr />
      {skills.data.map((skillset, index) => {
        return <Skillset key={index} skillset={skillset} />;
      })}
    </Spacing>
  );
};

export default Skills;
