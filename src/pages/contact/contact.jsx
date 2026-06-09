import React, { useState, useEffect } from "react";
import ContactComponent from "./componets/this";
import "./contact.css";

export default function Contact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/contacts")
      .then(res => res.json())
      .then(data => setContacts(data));
  }, []);

  return (
    <div className="contact-page">
      <h1>Contact</h1>

      <div className="contact-grid">
        {contacts.map(contact => (
          <ContactComponent key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}