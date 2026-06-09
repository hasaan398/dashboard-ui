import React, { useState } from "react";
import { contacts } from "../../../components/data";
import "./this.css";

function ContactCard({ contact }) {
  return (
    <div className="contact-card">
      <div className="contact-card-top">
        <span className="star">☆</span>
        <span className="dots">•••</span>
      </div>

      <div className="contact-avatar">
        {contact.name.charAt(0)}
        <span className={`status-dot ${contact.online ? "online" : "offline"}`}></span>
      </div>

      <h6>{contact.name}</h6>
      <p>{contact.role}</p>

      <div className="contact-actions">
        <button>✉</button>
        <button>📞</button>
        <button>💬</button>
      </div>
    </div>
  );
}

export default function Contact() {
  const [contactList] = useState(contacts);

  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <div className="contact-grid">
        {contactList.map(contact => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}