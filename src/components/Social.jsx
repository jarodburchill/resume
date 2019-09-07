import React from "react";
import data from "../resume-data.json";

function Social() {
  const social = data.social;

  return (
    <div className="global-padding">
      <h3>Social</h3>
      <hr />
      <p>{social.github}</p>
      <p>{social.linkedin}</p>
    </div>
  );
}

export default Social;
