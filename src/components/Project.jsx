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
    <>
      <div className="global-header">
        <div>
          <h4>{project.title}</h4>
          <span className="star">
            <p>{starCount}</p>
            <img src={star} alt="GitHub Stars" />
          </span>
          <span className="fork">
            <p>{forkCount}</p>
            <img src={fork} alt="GitHub Forks" />
          </span>
        </div>
        <p>{project.startDate}</p>
      </div>
      <div className="global-description">
        <ul>
          {project.description.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Project;
