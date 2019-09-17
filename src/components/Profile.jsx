import React from "react";
import json from "../resume-data.json";

const Profile = () => {
  const profile = json.profile;

  return (
    <div className="padding">
      <h1>{profile.data.name}</h1>
      <h2>{profile.data.profession}</h2>
    </div>
  );
};

export default Profile;
