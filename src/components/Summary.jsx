import React from "react";
import json from "../resume-data.json";

const Summary = () => {
  const summary = json.summary;

  return (
    <div className="padding">
      <h3>{summary.title}</h3>
      <hr />
      <div className="description">
        <ul>
          {summary.data.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Summary;
