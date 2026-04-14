import React from "react";
import "./NoteCard.css";

export default function NoteCard({ title, content }) {
  return (
    <div className="note-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

