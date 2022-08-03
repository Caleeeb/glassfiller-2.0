import React from "react";
import './index.scss';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";




const NavBar = () => (
  <div>
    <nav>
      <NavLink
        exact="true"
        activeclassname="active"
        className="home-nav"
        to="/"
      >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="mybar-nav"
        to="/mybar"
      >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="login-nav"
        to="/login"
      >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="signup-nav"
        to="/signup"
      >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
    </nav>
  </div>
);

export default NavBar;
