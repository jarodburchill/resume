import React from "react";
import styles from "./styles/Skills.module.scss";
import data from "../resume-data.json";

function Skills() {
  const skills = data.skills;
  const frontend = skills.frontend;
  const backend = skills.backend;
  const database = skills.database;
  const other = skills.other;

  return (
    <div className={styles.container}>
      <h2>Skills</h2>
      <hr />
      <h3 className={styles.groupName}>Front-end</h3>
      {frontend.map((skill, index) => {
        return <p key={index}>{skill}</p>;
      })}
      <h3 className={styles.groupName}>Back-end</h3>
      {backend.map((skill, index) => {
        return <p key={index}>{skill}</p>;
      })}
      <h3 className={styles.groupName}>Database</h3>
      {database.map((skill, index) => {
        return <p key={index}>{skill}</p>;
      })}
      <h3 className={styles.groupName}>Other</h3>
      {other.map((skill, index) => {
        return <p key={index}>{skill}</p>;
      })}
    </div>
  );
}

export default Skills;
