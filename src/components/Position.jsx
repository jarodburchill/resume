import React from "react";

const Position = ({ position }) => {
  return (
    <div className="group">
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
    </div>
  );
};

export default Position;
