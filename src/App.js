import React from "react";
import {
  BrowserRouter,
  useLocation,
  useParams,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import "./App.css";

function App() {
  const history = useHistory();

  console.log(history);

  const handleClick = () => {
    history.push("/about");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <h1>Some Page</h1>
        <p>Some text</p>
        <button onClick={handleClick}>To About</button>
      </BrowserRouter>
    </div>
  );
}

export default App;
