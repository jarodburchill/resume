import React from "react";
import data from "../resume-data.json";

function Qualifications() {
  const summary = data.summary;

  return (
    <div className="padding">
      <h3>Summary</h3>
      <hr />
      <div className="description">
        <ul>
          {summary.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Qualifications;
