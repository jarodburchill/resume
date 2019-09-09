import React from "react";
import json from "../resume-data.json";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Social() {
  const social = json.social;

  return (
    <div className="padding">
      <h3>{social.title}</h3>
      <hr />
      <span className="contact">
        <img src={github} alt="GitHub" />
        <p>{social.data.github}</p>
      </span>
      <span className="contact">
        <img src={linkedin} alt="LinkedIn" id="linkedin" />
        <p>{social.data.linkedin}</p>
      </span>
    </div>
  );
}

export default Social;
