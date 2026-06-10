import React, { useState } from "react";
import "./this.css";
import { emails as emailData } from "../../../components/data";

export default function Email() {
  const [emails] = useState(emailData);
  const [selected, setSelected] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Inbox");

  return (
    <>
      <h1>Email</h1>

      <div className="email-layout">

        {/* LEFT MENU */}
        <div className="email-menu">
          <button className="new-mail-btn">+ New Mail</button>

          <ul>
            {["Inbox", "Sent", "Favorite", "Draft", "Important", "Scheduled"].map((item) => (
              <li
                key={item}
                className={activeMenu === item ? "active-menu" : ""}
                onClick={() => setActiveMenu(item)}
              >
                {item === "Inbox" && <span className="inbox-badge">2</span>}
                {item}
              </li>
            ))}
          </ul>

          <div className="categories">
            <p>Categories</p>
            <div className="category-item">
              <span className="dot yellow"></span> Work
            </div>
            <div className="category-item">
              <span className="dot red"></span> Side Projects
            </div>
            <div className="category-item add-category">
              + Add Categories
            </div>
          </div>
        </div>

        {/* MIDDLE EMAIL LIST */}
        <div className="email-list">
          <div className="email-list-header">
            <div className="d-flex align-items-center gap-2">
              <input type="checkbox" />
              <span>Today</span>
            </div>
            <span>•••</span>
          </div>

          {emails.map((email) => (
            <div
              key={email.id}
              className={`email-item ${selected?.id === email.id ? "active" : ""}`}
              onClick={() => {
                setSelected(email);
                setShowPreview(true);
              }}
            >
              <input type="checkbox" onClick={(e) => e.stopPropagation()} />
              <div className="email-avatar">
                {email.sender.charAt(0)}
              </div>
              <div className="email-info">
                <h6>{email.subject}</h6>
                <p>{email.preview}</p>
              </div>
              <span className="email-star">☆</span>
            </div>
          ))}

          <div className="email-pagination">
            Showing 1-5 from 100
            <div className="pages">
              <button>‹</button>
              <button className="active-page">1</button>
              <button>2</button>
              <button>3</button>
              <button>›</button>
            </div>
          </div>
        </div>

        {/* RIGHT PREVIEW - default hidden, click pe show */}
        <div className={`email-preview ${showPreview ? "show" : ""}`}>
          {selected && (
            <>
              <div className="preview-header">
                <span className="important-badge">Important</span>
                <div className="preview-icons">
                  <span>☆</span>
                  <span>®</span>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setShowPreview(false);
                      setSelected(null);
                    }}
                  >
                    ✕
                  </span>
                </div>
              </div>

              <h5>{selected.subject}</h5>

              <div className="preview-sender">
                <div className="sender-avatar">
                  {selected.sender.charAt(0)}
                </div>
                <span>{selected.sender}</span>
              </div>

              <p className="preview-body">
                Hi Bella,<br /><br />
                {selected.preview}<br /><br />
                Regards,<br />
                Samantha
              </p>

              <div className="reply-box">
                <input type="text" placeholder="Write your message here..." />
                <div className="reply-toolbar">
                  <span>B</span>
                  <span>I</span>
                  <span>U</span>
                </div>
                <button className="send-btn">➤ Send</button>
              </div>
            </>
          )}
        </div>

      </div>
    </>
  );
}