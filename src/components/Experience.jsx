import React from "react";
import Position from "./Position";
import data from "../resume-data.json";

function Experience() {
  const experience = data.experience;

  return (
    <div className="global-padding">
      <h3>Work Experience</h3>
      <hr />
      {experience.map((position, index) => {
        return <Position key={index} position={position} />;
      })}
    </div>
  );
}

export default Experience;
