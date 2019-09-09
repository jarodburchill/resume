import React from "react";
import json from "../resume-data.json";
import address from "../assets/address.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";

function Info() {
  const info = json.info;

  return (
    <div className="padding">
      <h3>{info.title}</h3>
      <hr />
      <span className="contact">
        <img src={address} alt="Address" />
        <p>{info.data.address}</p>
      </span>
      <span className="contact">
        <img src={phone} alt="Phone" />
        <p>{info.data.phone}</p>
      </span>
      <span className="contact">
        <img src={email} alt="Email" />
        <p>{info.data.email}</p>
      </span>
    </div>
  );
}

export default Info;
