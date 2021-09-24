import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <a href="/profile">Profile</a>
        <a href="/dialogs">Dialogs</a>
      </nav>
      <BrowserRouter>
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/profile" component={Profile} />
      </BrowserRouter>
    </div>
  );
}

function Dialogs(props) {
  return <div>DIALOGS</div>;
}

function Profile(props) {
  return <div>PROFILE</div>;
}

export default App;
