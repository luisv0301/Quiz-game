import React from "react";
import { useHistory } from "react-router";
import "./starGame.css";

import Card from "../components/Card";
import Button from "../components/Button";

const StarGame = ({ user, setUser }) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/questions");
  };

  return (
    <Card>
      <h3>Start game</h3>
      <form>
        <input
          type="text"
          placeholder="Ingresa un nombre de usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="input"
        />
        <Button fn={handleSubmit} content="Comenzar" />
      </form>
    </Card>
  );
};

export default StarGame;
