import React from "react";
import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Questions from "./pages/Questions";
import Results from "./pages/Results";
import StarGame from "./pages/StarGame";

export default function App() {
  const [user, setUser] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <StarGame {...props} user={user} setUser={setUser} />
            )}
          />
          <Route
            path="/result"
            render={(props) => (
              <Results
                {...props}
                setScore={setScore}
                score={score}
                user={user}
              />
            )}
          />
          <Route
            path="/questions"
            render={(props) => <Questions {...props} setScore={setScore} />}
          />
        </Switch>
      </Router>
    </>
  );
}
