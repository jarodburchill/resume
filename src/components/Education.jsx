import React from "react";
import Position from "./Position";
import data from "../resume-data.json";

function Education() {
  const education = data.education;

  return (
    <div className="global-padding">
      <h3>Education</h3>
      <hr />
      {education.map((position, index) => {
        return <Position key={index} position={position} />;
      })}
    </div>
  );
}

export default Education;
