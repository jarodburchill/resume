import React from "react";
import Group from "./styles/Group";
import Header from "./styles/Header";

const Position = ({ position }) => {
  return (
    <Group subgroup>
      <Header>
        <h4>{position.title}</h4>
        <p>
          {position.startDate} - {position.endDate}
        </p>
      </Header>
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
