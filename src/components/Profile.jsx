import React from "react";
import data from "../resume-data.json";

function Profile() {
  const profile = data.profile;

  return (
    <div className="global-padding">
      <h1>{profile.name}</h1>
      <h2>{profile.profession}</h2>
    </div>
  );
}

export default Profile;
