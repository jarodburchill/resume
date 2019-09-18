import React from "react";
import Group from "./styles/Group";
import json from "../resume-data.json";

const Profile = () => {
  const profile = json.profile;

  return (
    <Group>
      <h1>{profile.data.name}</h1>
      <h2>{profile.data.profession}</h2>
    </Group>
  );
};

export default Profile;
