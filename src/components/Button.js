import React from "react";
import "./button.css";

export default function Button({ fn, content, isBtnQuestion = false }) {
  return (
    <button onClick={fn} className={`btn ${isBtnQuestion ? "questions" : ""}`}>
      {content}
    </button>
  );
}
