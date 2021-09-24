import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    <nav>
      <h3 className="logo">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </h3>
      <ul>
        <li>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/admin">
            Admin
          </NavLink>
        </li>
      </ul>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "logout" : "login"}</button>
    </nav>
  );
}
