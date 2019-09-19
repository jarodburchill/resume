import styled from "styled-components";

const Icon = styled.img`
  width: ${props => (props.width ? props.width : "1.75")}vh;
  margin: 0 0.75vh 0 0;

  @media screen and (max-width: 600px) {
    width: ${props => (props.width ? props.width : "1.75")}vw;
    margin: 0 0.75vw 0 0;
  }
`;

export default Icon;
