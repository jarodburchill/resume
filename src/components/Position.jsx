import React from "react";

function Position({ position }) {
  return (
    <>
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
    </>
  );
}

export default Position;
