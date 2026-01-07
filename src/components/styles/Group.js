import styled from "styled-components";

const Group = styled.div`
  padding: ${(props) => (props.subgroup ? "0" : "2vh 2vh 0 2vh")};
  margin: ${(props) => (props.subgroup ? "1vh 0 0 0" : "0")};
  @media screen and (max-width: 600px) {
    padding: ${(props) => (props.subgroup ? "0" : "2vh 2vw 0 2vw")};
    margin: ${(props) => (props.subgroup ? "1vw 0 0 0" : "0")};
  }
`;

export default Group;
