import React, { useState, useEffect } from "react";
import star from "../assets/star.svg";
import fork from "../assets/fork.svg";

function Project({ project }) {
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
    <div className="group">
      <div className="header">
        <div>
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
        </div>
        <p>{project.startDate}</p>
      </div>
      <div className="description">
        <ul>
          {project.description.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Project;
