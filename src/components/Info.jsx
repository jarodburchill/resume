import React from "react";
import Spacing from "./styles/Spacing";
import json from "../resume-data.json";
import address from "../assets/address.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";

const Info = () => {
  const info = json.info;

  return (
    <Spacing>
      <h3>{info.title}</h3>
      <hr />
      <span className="contact">
        <img src={address} alt="Address" />
        <p>
          <a href={info.data.address.href}>{info.data.address.text}</a>
        </p>
      </span>
      <span className="contact">
        <img src={phone} alt="Phone" />
        <p>
          <a href={info.data.phone.href}>{info.data.phone.text}</a>
        </p>
      </span>
      <span className="contact">
        <img src={email} alt="Email" />
        <p>
          <a href={info.data.email.href}>{info.data.email.text}</a>
        </p>
      </span>
    </Spacing>
  );
};

export default Info;
