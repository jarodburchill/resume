import React from "react";
import data from "../resume-data.json";
import styles from "./styles/Social.module.scss";

function Social() {
  const social = data.social;

  return (
    <div className={styles.container}>
      <h2>Social</h2>
      <hr />
      <p>{social.github}</p>
      <p>{social.linkedin}</p>
    </div>
  );
}

export default Social;
