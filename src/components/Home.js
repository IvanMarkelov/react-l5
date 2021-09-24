import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <p>Some home text</p>
      <Link to="/game">Let's Play</Link>
    </div>
  );
}

export function GamePage(props) {
  const  [guess, setGuess]  = useState("");
  const history = useHistory();

  const handleGuess = () => {
    if (guess === "chocolate") {
        history.push("/winner");
    }
  }

  return (
    <div>
      <h1>GamePage</h1>
      <input onChange={(e) => setGuess(e.target.value)} value={guess} type="text" />
      <button onClick={handleGuess}>Guess</button>
    </div>
  );
}

export function WinnerPage(props) {
  return (
    <div>
      <h1>WinnerPage</h1>
    </div>
  );
}
