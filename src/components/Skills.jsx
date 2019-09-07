import React from "react";
import styles from "./styles/Skills.module.scss";
import data from "../resume-data.json";

function Skills() {
  const frontend = data.skills.frontend;

  return (
    <div className={styles.container}>
      <h2>Skills</h2>
      <hr />
      {frontend.map((skill, index) => {
        return <h3 key={index}>{skill}</h3>;
      })}
    </div>
  );
}

export default Skills;
