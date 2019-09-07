import React from "react";
import styles from "./styles/Info.module.scss";
import data from "../resume-data.json";

function Info() {
  const info = data.info;

  return (
    <div className={styles.container}>
      <h3>Information</h3>
      <hr />
      <p>{info.address}</p>
      <p>{info.phone}</p>
      <p>{info.email}</p>
    </div>
  );
}

export default Info;
