import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import Main from "./Main";

const Container = styled.div`
  width: calc(100vh / (${(props) => props.ratio}));
  height: 100vh;
  display: flex;
  box-shadow: 0px 1px 15px rgb(0, 0, 0);

  @media screen and (max-width: 600px) {
    width: 100vw;
    height: max-content;
  }

  @media print {
    box-shadow: none;
  }
`;

const Resume = () => {
  return (
    <Container ratio={11 / 8.5}>
      <SideBar />
      <Main />
    </Container>
  );
};

export default Resume;
