import React from "react";
import Spacing from "./styles/Spacing";
import json from "../resume-data.json";

const Profile = () => {
  const profile = json.profile;

  return (
    <Spacing>
      <h1>{profile.data.name}</h1>
      <h2>{profile.data.profession}</h2>
    </Spacing>
  );
};

export default Profile;
