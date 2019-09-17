import React from "react";
import Skillset from "./Skillset";
import json from "../resume-data.json";

const Skills = () => {
  const skills = json.skills;

  return (
    <div className="padding">
      <h3>{skills.title}</h3>
      <hr />
      {skills.data.map((skillset, index) => {
        return <Skillset key={index} skillset={skillset} />;
      })}
    </div>
  );
};

export default Skills;
