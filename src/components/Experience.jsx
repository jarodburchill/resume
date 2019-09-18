import React from "react";
import Group from "./styles/Group";
import Position from "./Position";
import json from "../resume-data.json";

const Experience = () => {
  const experience = json.experience;

  return (
    <Group>
      <h3>{experience.title}</h3>
      <hr />
      {experience.data.map((position, index) => {
        return <Position key={index} position={position} />;
      })}
    </Group>
  );
};

export default Experience;
