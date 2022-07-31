import React from 'react';

function NavBar() {

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">
            Home
            </a>
          </li>
          <li>
            <a href='/recipelist'>
              My Bar
            </a>
          </li>
          <li>
            <a href='/login'>
              Login/Logout
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;