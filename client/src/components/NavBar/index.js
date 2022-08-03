import React from "react";
import './index.scss';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer, faHome, faLaptop} from "@fortawesome/free-solid-svg-icons";



const NavBar = () => (
  <header className="flex-row px-1 myb-1">
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
      <NavLink
        exact="true"
        activeclassname="active"
        className="home-nav"
        to="/home"
      > 
      
     
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
</li>
<li className="mx-2">
      <NavLink
        exact="true"
        activeclassname="active"
        className="mybar-nav"
        to="/mybar"
      >
        <FontAwesomeIcon icon={faBeer} color="#4d4d4e" />
      </NavLink>
      </li>

      <li className="mx-2">
      <NavLink
        exact="true"
        activeclassname="active"
        className="login-nav"
        to="/login"
      >
        <FontAwesomeIcon icon={faLaptop} color="#4d4d4e" />
      </NavLink> 
      </li> 
      </ul>
      
    </nav>
  </header>
);

export default NavBar;
