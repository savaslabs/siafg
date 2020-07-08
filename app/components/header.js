import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../constants';
import logo from '../assets/logo.svg';
import darkLogo from '../assets/logo-dark.svg';

const Header = styled.header`
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const MenuItem = styled.li`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  padding-left: 65px;
`;

const header = ({ home }) => {
  return (
    <Header>
      {/* Logo */}
      <Link to="/welcome">
        <img src={home ? darkLogo : logo} alt="Home" />
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
};

export default header;
