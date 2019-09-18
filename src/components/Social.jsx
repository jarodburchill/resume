import React from "react";
import Group from "./styles/Group";
import Contact from "./styles/Contact";
import Icon from "./styles/Icon";
import json from "../resume-data.json";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

const Social = () => {
  const social = json.social;

  return (
    <Group>
      <h3>{social.title}</h3>
      <hr />
      <Contact>
        <Icon src={github} alt="GitHub" />
        <p>
          <a href={social.data.github.href}>{social.data.github.text}</a>
        </p>
      </Contact>
      <Contact>
        <Icon src={linkedin} alt="LinkedIn" />
        <p>
          <a href={social.data.linkedin.href}>{social.data.linkedin.text}</a>
        </p>
      </Contact>
    </Group>
  );
};

export default Social;
