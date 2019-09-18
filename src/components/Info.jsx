import React from "react";
import Group from "./styles/Group";
import Contact from "./styles/Contact";
import Icon from "./styles/Icon";
import json from "../resume-data.json";
import address from "../assets/address.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";

const Info = () => {
  const info = json.info;

  return (
    <Group>
      <h3>{info.title}</h3>
      <hr />
      <Contact>
        <Icon src={address} alt="Address" />
        <p>
          <a href={info.data.address.href}>{info.data.address.text}</a>
        </p>
      </Contact>
      <Contact>
        <Icon src={phone} alt="Phone" />
        <p>
          <a href={info.data.phone.href}>{info.data.phone.text}</a>
        </p>
      </Contact>
      <Contact>
        <Icon src={email} alt="Email" />
        <p>
          <a href={info.data.email.href}>{info.data.email.text}</a>
        </p>
      </Contact>
    </Group>
  );
};

export default Info;
