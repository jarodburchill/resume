import React from "react";
import Spacing from "./styles/Spacing";
import Position from "./Position";
import json from "../resume-data.json";

const Education = () => {
  const education = json.education;

  return (
    <Spacing>
      <h3>{education.title}</h3>
      <hr />
      {education.data.map((position, index) => {
        return <Position key={index} position={position} />;
      })}
    </Spacing>
  );
};

export default Education;
