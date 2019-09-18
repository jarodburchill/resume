import styled from "styled-components";

const Spacing = styled.div`
  padding: ${props => (props.subgroup ? "0" : "1vh 2vh 0 2vh")};
  margin: ${props => (props.subgroup ? "0.5vh 0 0 0" : "0")};
  @media screen and (max-width: 600px) {
    padding: ${props => (props.subgroup ? "0" : "1vh 2vw 0 2vw")};
    margin: ${props => (props.subgroup ? "0.5vw 0 0 0" : "0")};
  }
`;

export default Spacing;
