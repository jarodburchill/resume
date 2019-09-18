import React from "react";
import Group from "./styles/Group";

const Skillset = ({ skillset }) => {
  return (
    <Group subgroup>
      <h4>{skillset.title}</h4>
      {skillset.items.map((skill, index) => {
        return <p key={index}>{skill}</p>;
      })}
    </Group>
  );
};

export default Skillset;
