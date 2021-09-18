import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import StoreContext from "./StoreContext";

const store = {
  id: 15,
  name: "Store",
};

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
