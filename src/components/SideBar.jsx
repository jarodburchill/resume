import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import Info from "./Info";
import Social from "./Social";
import Skills from "./Skills";

const Container = styled.div`
  width: calc((100vh / ${(props) => props.ratio}) / 3);
  height: 100vh;
  background: rgb(215, 215, 215);

  @media screen and (max-width: 600px) {
    width: 33vw;
    height: auto;
    padding-bottom: 2vw;
  }
`;

const SideBar = () => {
  return (
    <Container ratio={11 / 8.5}>
      <Profile />
      <Info />
      <Social />
      <Skills />
    </Container>
  );
};

export default SideBar;
