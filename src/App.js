import React from "react";
import "./App.css";
import StoreContext from "./StoreContext";

const MyPostsContainer = () => (
  <StoreContext.Consumer>
    {(store) => (
      <h1>
        My Posts id: {store.id}, value: {store.name}
      </h1>
    )}
  </StoreContext.Consumer>
);

const Profile = () => (
  <div>
    <MyPostsContainer />
  </div>
);

function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
