import React, { useState, useEffect } from "react";
import Group from "./styles/Group";
import Header from "./styles/Header";
import Description from "./styles/Description";
import Icon from "./styles/Icon";
import styled from "styled-components";
import star from "../assets/star.svg";
import fork from "../assets/fork.svg";

const ProjectName = styled.div`
  display: flex;
  align-items: center;
`;

const ProjectStats = styled.span`
  display: flex;
  align-items: center;
  margin: 0 0 0 1vh;
  ${Icon} {
    margin: 0 1vh 0 0.5vh;
  }

  @media screen and (max-width: 600px) {
    margin: 0 0 0 1vw;
    ${Icon} {
      margin: 0 1vw 0 0.5vw;
    }
  }
`;

const Project = ({ project }) => {
  const [starCount, setStarCount] = useState(0);
  const [forkCount, setForkCount] = useState(0);

  useEffect(() => {
    getProjectStats();
  });

  const getProjectStats = async () => {
    const response = await fetch(project.api);
    const data = await response.json();
    setStarCount(data.stargazers_count);
    setForkCount(data.forks_count);
  };

  return (
    <Group subgroup>
      <Header>
        <ProjectName>
          <h4>
            <a href={project.href}>{project.title}</a>
          </h4>
          <ProjectStats>
            <p>{starCount}</p>
            <Icon src={star} alt="GitHub Stars" />
            <p>{forkCount}</p>
            <Icon src={fork} width={1.25} alt="GitHub Forks" />
          </ProjectStats>
        </ProjectName>
        <p>{project.startDate}</p>
      </Header>
      <Description>
        <ul>
          {project.description.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </Description>
    </Group>
  );
};

export default Project;
