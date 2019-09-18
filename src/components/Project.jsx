import React, { useState, useEffect } from "react";
import Group from "./styles/Group";
import Header from "./styles/Header";
import Description from "./styles/Description";
import styled from "styled-components";
import star from "../assets/star.svg";
import fork from "../assets/fork.svg";

const ProjectName = styled.div`
  display: flex;
  align-items: center;
`;

const Project = ({ project }) => {
  const [starCount, setStarCount] = useState(0);
  const [forkCount, setForkCount] = useState(0);

  useEffect(() => {
    getRepoStats();
  });

  const getRepoStats = async () => {
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
          <span className="repo">
            <p>{starCount}</p>
            <img src={star} alt="GitHub Stars" id="star" />
          </span>
          <span className="repo">
            <p>{forkCount}</p>
            <img src={fork} alt="GitHub Forks" id="fork" />
          </span>
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
