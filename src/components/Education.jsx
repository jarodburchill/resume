import React from "react";
import Position from "./Position";
import json from "../resume-data.json";

function Education() {
  const education = json.education;

  return (
    <div className="padding">
      <h3>{education.title}</h3>
      <hr />
      {education.data.map((position, index) => {
        return <Position key={index} position={position} />;
      })}
    </div>
  );
}

export default Education;
