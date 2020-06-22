import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { routes } from '../constants';

function header() {
  return (
    <header>
      {/* Logo */}
      <Link to='/welcome'/>
      {/* Menu */}
      <nav>
        <ul>
          {routes.slice(1).map((menuItem, idx) => {
            return (
              <li key={idx}>
                <NavLink to={`/${menuItem.toLowerCase()}`}>{menuItem}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default header;
