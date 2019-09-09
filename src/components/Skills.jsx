import React from "react";
import Skillset from "./Skillset";
import data from "../resume-data.json";

function Skills() {
  const skills = data.skills;

  return (
    <div className="padding">
      <h3>Technical Skills</h3>
      <hr />
      {skills.map((skillset, index) => {
        return <Skillset key={index} skillset={skillset} />;
      })}
    </div>
  );
}

export default Skills;
