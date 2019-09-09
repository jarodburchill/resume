import React from "react";
import data from "../resume-data.json";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Social() {
  const social = data.social;

  return (
    <div className="padding">
      <h3>Social</h3>
      <hr />
      <span className="contact">
        <img src={github} alt="GitHub" />
        <p>{social.github}</p>
      </span>
      <span className="contact">
        <img src={linkedin} alt="LinkedIn" id="linkedin" />
        <p>{social.linkedin}</p>
      </span>
    </div>
  );
}

export default Social;
