import React from "react";
import Group from "./styles/Group";
import json from "../resume-data.json";

const Summary = () => {
  const summary = json.summary;

  return (
    <Group>
      <h3>{summary.title}</h3>
      <hr />
      <Group subgroup>
        <div className="description">
          <ul>
            {summary.data.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </Group>
    </Group>
  );
};

export default Summary;
