import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { routes } from '../constants';
import logo from '../assets/logo.svg';
import styled from 'styled-components';

const Header = styled.header`
  z-index: 100;
  position: absolute;
  width: 100%;
  padding: 0;
  top: 0;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const MenuItem = styled.li`
  font-weight: 700;
  font-size: 36;
  line-height: 1.2;
`;

const header = () => {
  return (
    <Header className='container'>
      {/* Logo */}
      <Link to='/welcome'>
        <img src={logo} alt='Home' />
      </Link>
      {/* Menu */}
      <nav>
        <Menu>
          {routes.slice(1).map((menuItem, idx) => {
            return (
              <MenuItem key={idx}>
                <NavLink to={`/${menuItem.toLowerCase()}`}>{menuItem}</NavLink>
              </MenuItem>
            );
          })}
        </Menu>
      </nav>
    </Header>
  );
}

export default header;
