import React from "react";
import data from "../resume-data.json";

function Qualifications() {
  const qualifications = data.qualifications;

  return (
    <div className="padding">
      <h3>Summary of Qualifications</h3>
      <hr />
      <div className="description">
        <ul>
          {qualifications.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Qualifications;
