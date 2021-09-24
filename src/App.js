import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useLocation,
  useParams,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Home, { GamePage, WinnerPage } from "./components/Home";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import { Admin } from "./components/Admin";
import { PrivateRoute } from "./components/PrivateRoute";
import { PrivateRouteClean } from "./components/PrivateRouteClean";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/blog">
              <Blog />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            {/* <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute> */}
            <PrivateRouteClean component={Admin} path="/admin" />
          
            <Route path="/game">
              <GamePage />
            </Route>            
            
            <Route path="/winner">
              <WinnerPage />
            </Route>
          
          </Switch>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;
