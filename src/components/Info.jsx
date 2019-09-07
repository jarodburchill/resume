import React from "react";
import styles from "./styles/Info.module.scss";
import data from "../resume-data.json";

function Info() {
  const info = data.info;

  return (
    <div className={styles.container}>
      <h2>Info</h2>
      <hr />
      <h3 className={styles.vw}>{info.address}</h3>
      <h3>{info.phone}</h3>
      <h3>{info.email}</h3>
    </div>
  );
}

export default Info;
