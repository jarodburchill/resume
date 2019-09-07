import React from "react";
import data from "../resume-data.json";
import styles from "./styles/Social.module.scss";

function Social() {
  const social = data.social;

  return (
    <div className={styles.container}>
      <h2>Social</h2>
      <hr />
      <h3>{social.github}</h3>
      <h3>{social.linkedin}</h3>
    </div>
  );
}

export default Social;
