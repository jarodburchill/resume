import React from "react";
import Group from "./styles/Group";

const Position = ({ position }) => {
  return (
    <Group subgroup>
      <div className="header">
        <h4>{position.title}</h4>
        <p>
          {position.startDate} - {position.endDate}
        </p>
      </div>
      <p className="location">{position.location}</p>
      <div className="description">
        <ul>
          {position.description.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </Group>
  );
};

export default Position;
