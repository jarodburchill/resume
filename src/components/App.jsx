import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Resume from "./Resume";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(70, 70, 70);
`;

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Resume />
    </Container>
  );
};

export default App;
