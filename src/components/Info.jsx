import React from "react";
import data from "../resume-data.json";

function Info() {
  const info = data.info;

  return (
    <div className="global-padding">
      <h3>Information</h3>
      <hr />
      <p>{info.address}</p>
      <p>{info.phone}</p>
      <p>{info.email}</p>
    </div>
  );
}

export default Info;
