import React from "react";
import Spacing from "./styles/Spacing";
import Position from "./Position";
import json from "../resume-data.json";

const Experience = () => {
  const experience = json.experience;

  return (
    <Spacing>
      <h3>{experience.title}</h3>
      <hr />
      {experience.data.map((position, index) => {
        return <Position key={index} position={position} />;
      })}
    </Spacing>
  );
};

export default Experience;
