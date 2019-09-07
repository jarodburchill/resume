import React from "react";
import styles from "./styles/Contact.module.scss";
import data from "../resume-data.json";

function Contact() {
  const contact = data.contact;

  return (
    <div className={styles.container}>
      <h3 className={styles.vw}>{contact.address}</h3>
      <h3>{contact.phone}</h3>
      <h3>{contact.email}</h3>
    </div>
  );
}

export default Contact;
