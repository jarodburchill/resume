import React from "react";
import Group from "./styles/Group";

import json from "../resume-data.json";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

const Social = () => {
  const social = json.social;

  return (
    <Group>
      <h3>{social.title}</h3>
      <hr />
      <span className="contact">
        <img src={github} alt="GitHub" />
        <p>
          <a href={social.data.github.href}>{social.data.github.text}</a>
        </p>
      </span>
      <span className="contact">
        <img src={linkedin} alt="LinkedIn" id="linkedin" />
        <p>
          <a href={social.data.linkedin.href}>{social.data.linkedin.text}</a>
        </p>
      </span>
    </Group>
  );
};

export default Social;
