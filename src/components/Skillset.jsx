import React from "react";

const Skillset = ({ skillset }) => {
  return (
    <div className="skillset">
      <h4>{skillset.title}</h4>
      {skillset.items.map((skill, index) => {
        return <p key={index}>{skill}</p>;
      })}
    </div>
  );
};

export default Skillset;
