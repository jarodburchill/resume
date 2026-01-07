import React from "react";
import Group from "./styles/Group";
import Description from "./styles/Description";
import Date from "./styles/Date";
import json from "../resume-data.json";
import styled from "styled-components";

const Location = styled.p`
  font-style: italic;
  padding-bottom: 0.5vw;
`;

const Title = styled.h4`
  padding-bottom: 0.5vw;
`;

const Subtitle = styled.p`
  font-weight: bold;
`;

const Position = ({ position }) => {
  return (
    <Group subgroup>
      <Title>{position.title}</Title>
      <Subtitle>{position.subtitle}</Subtitle>
      <Location>{position.location}</Location>
      <Date>
        {position.startDate} - {position.endDate}
      </Date>
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

const Education = () => {
  const education = json.education;

  return (
    <Group>
      <h3>{education.title}</h3>
      <hr />
      {education.data.map((position, index) => {
        return <Position key={index} position={position} />;
      })}
    </Group>
  );
};

export default Education;
