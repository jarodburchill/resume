import React from "react";
import Group from "./styles/Group";
import Position from "./Position";
import json from "../resume-data.json";

const Education = () => {
  const education = json.education;

  return (
    <Group>
      <h3>{education.title}</h3>
      <hr />
      {education.data.map((position, index) => {
        return <Position key={index} position={position} />;
      })}
    </Group>
  );
};

export default Education;
