import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { routes } from '../constants';
import logo from '../assets/logo.svg';
import darkLogo from '../assets/logo-dark.svg';
import home from '../assets/home.svg';

const Header = styled.header`
  z-index: 100;
  align-items: center;
  padding-top: 25px;

  ${breakpoint('lg')`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `}
`;

const FrostedOverlay = styled.div`
  ${breakpoint('lg')`
    display: none;
  `}
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
`;

const LogoLink = styled(Link)`
  display: none;

  ${breakpoint('lg')`
    display: inline;
    position; relative;
  `}
`;

const MenuToggle = styled.button`
  appearance: none;
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
  top: -20px;
  right: 0;
  z-index: 100;

  ${breakpoint('sm', 'lg')`
    flex-direction: column;
    background: ${props => props.theme.colors.backgroundPurple};
    position: fixed;
    transform: translateX(100vw);
    transition: .5s ease-out;
    padding-top: 80px;
    box-shadow: -4px 0px 5px rgba(89, 62, 191, .1);
    width: 66.66vw;
    max-width: 250px;
    height: 100vh;
    &.open {
      transform: translateX(0);
    }
  `}

  ${breakpoint('lg')`
    justify-content: space-evenly;
  `}
`;

const MenuItem = styled.li`
  ${breakpoint('lg')`
    padding-left: 65px;
  `}

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

const HomeIcon = styled(NavItem)`
  ${breakpoint('sm', 'lg')`
    &:after {
      content: url(${home});
    }
  `}
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
          pathname: '/',
        }}
      >
        <img src={home ? darkLogo : logo} alt="Home" />
      </LogoLink>
      {/* Menu */}
      <MenuToggle
        onClick={toggleMenu}
        className={open ? 'open' : null}
        aria-controls="navigation"
        aria-expanded="false"
      >
        <span></span>
        <span></span>
        <span></span>
      </MenuToggle>
      <nav id="navigation">
        <FrostedOverlay className={open ? 'open' : null}></FrostedOverlay>
        <Menu className={open ? 'open' : ''}>
          <MenuItem>
            <HomeIcon
              to={{
                state: {
                  position: 0,
                },
                pathname: '/',
              }}
              exact={true}
            />
          </MenuItem>
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
