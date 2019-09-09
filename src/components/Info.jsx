import React from "react";
import data from "../resume-data.json";
import address from "../assets/address.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";

function Info() {
  const info = data.info;

  return (
    <div className="padding">
      <h3>Information</h3>
      <hr />
      <span className="contact">
        <img src={address} alt="Address" />
        <p>{info.address}</p>
      </span>
      <span className="contact">
        <img src={phone} alt="Phone" />
        <p>{info.phone}</p>
      </span>
      <span className="contact">
        <img src={email} alt="Email" />
        <p>{info.email}</p>
      </span>
    </div>
  );
}

export default Info;
