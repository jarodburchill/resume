import React from "react";
import Position from "./Position";
import json from "../resume-data.json";

const Experience = () => {
  const experience = json.experience;

  return (
    <div className="padding">
      <h3>{experience.title}</h3>
      <hr />
      {experience.data.map((position, index) => {
        return <Position key={index} position={position} />;
      })}
    </div>
  );
};

export default Experience;
