import React from "react";
import Spacing from "./styles/Spacing";
import json from "../resume-data.json";

const Summary = () => {
  const summary = json.summary;

  return (
    <Spacing>
      <h3>{summary.title}</h3>
      <hr />
      <div className="description">
        <ul>
          {summary.data.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </Spacing>
  );
};

export default Summary;
