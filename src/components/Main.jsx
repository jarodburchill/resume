import React from "react";
import styled from "styled-components";
import Summary from "./Summary";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";

const Container = styled.div`
  width: calc(((100vh / ${props => props.ratio}) / 3) * 2);
  height: 100vh;
  background: white;

  @media screen and (max-width: 600px) {
    width: 67vw;
    height: auto;
    padding-bottom: 2vw;
  }
`;

function Main() {
  return (
    <Container ratio={11 / 8.5}>
      <Summary />
      <Projects />
      <Education />
      <Experience />
    </Container>
  );
}

export default Main;
