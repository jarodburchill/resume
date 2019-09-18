import React from "react";
import Group from "./styles/Group";
import Description from "./styles/Description";
import json from "../resume-data.json";

const Summary = () => {
  const summary = json.summary;

  return (
    <Group>
      <h3>{summary.title}</h3>
      <hr />
      <Group subgroup>
        <Description>
          <ul>
            {summary.data.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </Description>
      </Group>
    </Group>
  );
};

export default Summary;
