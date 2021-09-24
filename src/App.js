import React, { Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import Blog from "./components/Blog";
import Navbar from "./components/Navbar";


const Blog = React.lazy(() => import("./components/Blog"));

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/blog">
              <Suspense fallback={<div>Loading...</div>}>
                <Blog />
              </Suspense>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
