import React from "react";

function Project({ project }) {
  return (
    <>
      <div className="global-header">
        <h4>{project.title}</h4>
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
