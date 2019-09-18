import React from "react";
import Group from "./styles/Group";
import Header from "./styles/Header";
import Description from "./styles/Description";
import styled from "styled-components";

const Location = styled.p`
  font-style: italic;
`;

const Position = ({ position }) => {
  return (
    <Group subgroup>
      <Header>
        <h4>{position.title}</h4>
        <p>
          {position.startDate} - {position.endDate}
        </p>
      </Header>
      <Location>{position.location}</Location>
      <Description>
        <ul>
          {position.description.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </Description>
    </Group>
  );
};

export default Position;
