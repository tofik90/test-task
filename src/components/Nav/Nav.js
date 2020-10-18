import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink className="nav__link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
