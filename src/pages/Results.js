import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import Card from "../components/Card";
import "./result.css";

export default function Results({ setScore, user, score }) {
  return (
    <Card>
      <h3 className="result_score">
        {score} de {data.length}
      </h3>
      <p>Buen resultado, {user}</p>
      <Link to="/" className="result_link" onClick={() => setScore(0)}>
        Tomar el quiz de nuevo
      </Link>
    </Card>
  );
}
