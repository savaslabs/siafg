import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { routes } from '../constants';
import logo from '../assets/logo.svg';
import darkLogo from '../assets/logo-dark.svg';

const Header = styled.header`
  z-index: 100;
  align-items: center;
  padding-top: 25px;

  .frosted {
    opacity: 0;
    width: 100vw;
    background: white;
    top: 0;
    height: 100vh;
    left: 0;
    position: fixed;
    transition: opacity 0.5s;
    z-index: 100;
    pointer-events: none;

    &.open {
      opacity: 0.85;
    }

    ${breakpoint('lg')`
      display: none;
    `}
  }

  ${breakpoint('lg')`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `}
`;

const LogoLink = styled(Link)`
  display: none;

  ${breakpoint('lg')`
    display: inline;
  `}
`;

const MenuToggle = styled.button`
  appearance: none;
  -webkit-appearance: none;
  transform: rotate(0deg);
  transition: 0.35s ease;
  position: absolute;
  z-index: 200;
  border: 0;
  padding: 0;
  align-self: flex-start;
  background: transparent;
  width: 25px;
  height: 18px;
  right: 30px;

  ${breakpoint('md')`
    display: 60px;
  `}

  ${breakpoint('lg')`
    display: none;
  `}

  span {
    transition: 0.35s ease;
    transform: rotate(0deg);
    transform-origin: left center;
    opacity: 1;
    display: block;
    height: 2.25px;
    width: 100%;
    background: black;
    position: absolute;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: 6px;
      transition: 0.2s ease;
    }

    &:nth-child(3) {
      top: 12px;
    }
  }

  &.open {
    span:nth-child(1) {
      transform: rotate(45deg);
      left: 1px;
      top: -1px;
    }

    span:nth-child(2) {
      width: 0%;
      opacity: 0;
    }

    span:nth-child(3) {
      transform: rotate(-45deg);
      top: auto;
      bottom: 0;
      left: 1px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.backgroundPurple};
  position: fixed;
  top: -20px;
  right: 0;
  width: 66vw;
  height: 100vh;
  z-index: 100;
  padding-top: 80px;
  transform: translateX(100vw);
  transition: 0.5s ease-out;
  box-shadow: -4px 0px 5px rgba(89, 62, 191, 0.1);

  &.open {
    transform: translateX(0);
  }

  ${breakpoint('lg')`
    flex-direction: row;
    background: transparent;
    width: 100%;
    padding-top: 0;
    position: static;
    justify-content: space-evenly;
    height: auto;
    box-shadow: none;
  `}
`;

const MenuItem = styled.li`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  padding-left: 20px;

  &:not(:first-child) {
    margin-top: 35px;

    ${breakpoint('lg')`
      margin-top: 0;
    `}
  }

  ${breakpoint('lg')`
    padding-left: 65px;
  `}
`;

const NavItem = styled(NavLink)`
  color: ${props => props.theme.colors.primaryPurple};
  transition: border-width 0.1s ease-out;
  border-bottom: 0px solid ${props => props.theme.colors.primaryPurple};
  padding-bottom: 5px;

  &.active {
    border-bottom: 4px solid ${props => props.theme.colors.primaryPurple};

    ${breakpoint('lg')`
      border-bottom: 7px solid ${props => props.theme.colors.primaryPurple};
      padding-bottom: 5px;
    `}
  }

  &:hover {
    border-width: 7px;
    text-decoration: none;
  }
`;

const header = ({ home }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = e => {
    setOpen(!open);
  };

  return (
    <Header>
      {/* Logo */}
      <LogoLink
        to={{
          state: {
            position: 0,
          },
          pathname: '/welcome',
        }}
      >
        <img src={home ? darkLogo : logo} alt="Home" />
      </LogoLink>
      {/* Menu */}
      <MenuToggle
        onClick={toggleMenu}
        className={open ? 'open' : ''}
        aria-controls="navigation"
        aria-expanded="false"
      >
        <span></span>
        <span></span>
        <span></span>
      </MenuToggle>
      <nav id="navigation">
        <div className={open ? 'frosted open' : 'frosted'}></div>
        <Menu className={open ? 'open' : ''}>
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
