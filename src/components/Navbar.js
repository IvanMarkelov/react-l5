import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h5>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </h5>
      <h5>
        <NavLink className="nav-link" to="/blog">
          Blog
        </NavLink>
      </h5>
    </nav>
  );
}