import React from "react";
import styles from "./styles/Info.module.scss";
import data from "../resume-data.json";

function Info() {
  const info = data.info;

  return (
    <div className={styles.container}>
      <h2>Information</h2>
      <hr />
      <p>{info.address}</p>
      <p>{info.phone}</p>
      <p>{info.email}</p>
    </div>
  );
}

export default Info;
