import React, { useState } from "react";
import "./kanban1.css";

const initialData = {
  todo: {
    title: "To-do",
    cards: [
      { id: 1, tag: "Design", text: "Sed dignissaf lorem reprehenderit. Lorem ipsum dolor interdum interdum teretur. Ab sit asperiores architecto reprehenderit." },
      { id: 2, tag: "Development", text: "Sed dignissaf lorem reprehenderit. Lorem ipsum dolor interdum interdum teretur. Ab sit asperiores architecto reprehenderit." },
    ]
  },
  inprogress: {
    title: "In-Progress",
    cards: [
      { id: 3, tag: "Design", text: "Sed dignissaf lorem reprehenderit. Lorem ipsum dolor interdum interdum teretur. Ab sit asperiores architecto reprehenderit." },
    ]
  },
  completed: {
    title: "Completed",
    cards: [
      { id: 4, tag: "Research", text: "Sed dignissaf lorem reprehenderit. Lorem ipsum dolor interdum interdum teretur. Ab sit asperiores architecto reprehenderit." },
      { id: 5, tag: "Design", text: "Sed dignissaf lorem reprehenderit. Lorem ipsum dolor interdum interdum teretur. Ab sit asperiores architecto reprehenderit." },
      { id: 6, tag: "Development", text: "Sed dignissaf lorem reprehenderit. Lorem ipsum dolor interdum interdum teretur. Ab sit asperiores architecto reprehenderit." },
    ]
  },
  review: {
    title: "Review",
    cards: [
      { id: 7, tag: "Design", text: "Sed dignissaf lorem reprehenderit. Lorem ipsum dolor interdum interdum teretur. Ab sit asperiores architecto reprehenderit." },
      { id: 8, tag: "Research", text: "Sed dignissaf lorem reprehenderit. Lorem ipsum dolor interdum interdum teretur. Ab sit asperiores architecto reprehenderit." },
    ]
  },
  revision: {
    title: "Revision",
    cards: [
      { id: 9, tag: "Design", text: "Sed dignissaf lorem reprehenderit. Lorem ipsum dolor interdum interdum teretur. Ab sit asperiores architecto reprehenderit." },
    ]
  }
};

const tagColors = {
  Design: "#4F45B6",
  Development: "#F8C140",
  Research: "#FF6B6B",
};

export default function Kanban1() {
  const [data] = useState(initialData);

  return (
    <div className="kanban-page">

      {/* Header */}
      <div className="kanban-header">
        <h1>Kanban</h1>
      </div>

      {/* Toolbar */}
      <div className="kanban-toolbar">
        <div className="kanban-project">
          <span>Project #1</span>
          <span className="toolbar-tag">Board</span>
          <span>★</span>
          <span className="toolbar-tag">Board ▼</span>
          <span className="toolbar-tag">🔒 Private</span>
        </div>

        <div className="kanban-avatars">
          <div className="avatar">Z</div>
          <div className="avatar">A</div>
          <div className="avatar">B</div>
          <div className="avatar plus">5+</div>
          <button className="add-btn">+</button>
          <span>•••</span>
        </div>
      </div>

      {/* Columns */}
      <div className="kanban-board">
        {Object.entries(data).map(([key, column]) => (
          <div key={key} className="kanban-column">

            {/* Column Header */}
            <div className="column-header">
              <span>{column.title}</span>
              <span>•••</span>
            </div>

            {/* Add Card Button */}
            <button className="add-card-btn">+ Add card</button>

            {/* Cards */}
            {column.cards.map(card => (
              <div key={card.id} className="kanban-card">
                <div
                  className="card-tag"
                  style={{ color: tagColors[card.tag] || "#4F45B6" }}
                >
                  • {card.tag}
                </div>
                <p>{card.text}</p>
                <div className="card-footer">
                  <div className="card-avatars">
                    <div className="small-avatar">U</div>
                    <div className="small-avatar">V</div>
                  </div>
                  <span className="card-link">🔗</span>
                </div>
              </div>
            ))}

          </div>
        ))}
      </div>

    </div>
  );
}