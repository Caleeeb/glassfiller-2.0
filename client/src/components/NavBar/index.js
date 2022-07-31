import React from 'react';

function Nav() {

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
              Login
            </a>
          </li>
          {/* <li>
            
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;