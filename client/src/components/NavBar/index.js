import React from "react";
import { NavLink } from "react-router-dom";

// function NavBar() {

//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <a href="/">
//             Home
//             </a>
//           </li>
//           <li>
//             <a href='/recipelist'>
//               My Bar
//             </a>
//           </li>
//           <li>
//             <a href='/login'>
//               Login/Logout
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

const NavBar = () => (
  <header>
    <nav>

      <NavLink
        exact="true"
        activeclassname="active"
        className="home-nav"
        to="/home"
      >
        {/* <FontAwesomeIcon icon={fahome} color="#4d4d4e" /> */}
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="mybar-nav"
        to="/mybar"
      >
        {/* <FontAwesomeIcon icon={fahome} color="#4d4d4e" /> */}
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="login-nav"
        to="/login"
      >
        {/* <FontAwesomeIcon icon={fahome} color="#4d4d4e" /> */}
      </NavLink>
    </nav>
  </header>
);

export default NavBar;
