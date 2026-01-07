import React from "react";
import Group from "./styles/Group";
import styled from "styled-components";

const Skill = styled.p`
  padding-bottom: 0.5vw;
`;

const Skillset = ({ skillset }) => {
  return (
    <Group subgroup>
      {skillset.items.map((skill, index) => {
        return <Skill key={index}>{skill}</Skill>;
      })}
    </Group>
  );
};

export default Skillset;
