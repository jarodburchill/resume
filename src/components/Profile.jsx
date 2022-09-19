import React from "react";
import styled from "styled-components";
import Group from "./styles/Group";
import json from "../resume-data.json";

const Profession = styled.h2`
  font-size: 2.5vh;
  @media screen and (max-width: 600px) {
    font-size: 2.5vw;
  }
`;

const Profile = () => {
  const profile = json.profile;

  return (
    <Group>
      <h1>{profile.data.name}</h1>
      <Profession>{profile.data.profession}</Profession>
    </Group>
  );
};

export default Profile;
