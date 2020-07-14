import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { routes } from '../constants';
import logo from '../assets/logo.svg';
import darkLogo from '../assets/logo-dark.svg';

const Header = styled.header`
  ${breakpoint('sm')`
    z-index: 100;
    width: 100%;
    display: none;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
  `}

  ${breakpoint('lg')`
    display: flex;
  `}
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

const NavItem = styled(NavLink)`
  color: #593ebf;
  transition: border-width 0.1s ease-out;
  border-bottom: 0px solid #593ebf;
  padding-bottom: 5px;
  &:hover {
    border-width: 7px;
    text-decoration: none;
  }
`;

const header = ({ home }) => {
  return (
    <Header>
      {/* Logo */}
      <Link
        to={{
          state: {
            position: 0,
          },
          pathname: '/welcome',
        }}
      >
        <img src={home ? darkLogo : logo} alt="Home" />
      </Link>
      {/* Menu */}
      <nav>
        <Menu>
          {routes.slice(1).map((menuItem, idx) => {
            return (
              <MenuItem key={idx}>
                <NavItem to={`/${menuItem.toLowerCase()}`}>{menuItem}</NavItem>
              </MenuItem>
            );
          })}
        </Menu>
      </nav>
    </Header>
  );
};

export default header;
