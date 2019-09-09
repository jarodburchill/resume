import React from "react";
import data from "../resume-data.json";

function Skills() {
  const skills = data.skills;
  const frontend = skills.frontend;
  const backend = skills.backend;
  const database = skills.database;
  const other = skills.other;

  return (
    <div className="padding">
      <h3>Technical Skills</h3>
      <hr />
      <h4>Front-end</h4>
      {frontend.map((skill, index) => {
        return <p key={index}>{skill}</p>;
      })}
      <h4>Back-end</h4>
      {backend.map((skill, index) => {
        return <p key={index}>{skill}</p>;
      })}
      <h4>Database</h4>
      {database.map((skill, index) => {
        return <p key={index}>{skill}</p>;
      })}
      <h4>Other</h4>
      {other.map((skill, index) => {
        return <p key={index}>{skill}</p>;
      })}
    </div>
  );
}

export default Skills;
