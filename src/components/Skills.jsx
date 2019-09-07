import React from "react";
import styles from "./styles/Skills.module.scss";
import data from "../resume-data.json";

function Skills() {
  const frontend = data.skills.frontend;

  return (
    <div className={styles.container}>
      <h2>Skills</h2>
      <hr />
      <h3>Front-end</h3>
      {frontend.map((skill, index) => {
        return <p key={index}>{skill}</p>;
      })}
    </div>
  );
}

export default Skills;
