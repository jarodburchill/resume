import React from "react";
import styles from "./styles/Profile.module.scss";
import data from "../resume-data.json";

function Profile() {
  const profile = data.profile;

  return (
    <div className={styles.container}>
      <h1>{profile.name}</h1>
      <h2>{profile.profession}</h2>
    </div>
  );
}

export default Profile;
