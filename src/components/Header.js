import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { routes } from '../constants';
import logo from '../assets/logo.svg';
import darkLogo from '../assets/logo-dark.svg';
import home from '../assets/home.svg';
import Footer from '../components/Footer';

const HeaderWrapper = styled.header`
  z-index: 200;
  align-items: center;
  top: 25px;
  position: relative;

  ${breakpoint('lg')`
    display: flex;
    justify-content: space-between;
  `}
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
  right: 0;

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

const NavWrapper = styled.nav`
  ${breakpoint('sm', 'lg')`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    text-align: center;
    background: ${props => props.theme.colors.backgroundPurple};
    transform: translateX(100vw);
    transition: .5s ease-out;
    padding-top: 50px;
    display: flex;
  `}

  &.open {
    transform: translateX(0);
    overflow-y: scroll;
  }
`;

const Menu = styled.ul`
  display: flex;
  top: -20px;
  right: 0;
  z-index: 100;

  ${breakpoint('sm', 'lg')`
    margin-top: 0;
    flex-direction: column;
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

  ${breakpoint('lg')`
    display: none;
  `}
`;

const Header = ({ home }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = e => {
    setOpen(!open);
    document.getElementById('site-footer').classList.toggle('menu-open');
  };

  useEffect(() => {
    if (open) {
      document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
    } else {
      document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
    }
  }, [open]);

  return (
    <HeaderWrapper id="site-header">
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
        aria-label="navigation toggle"
      >
        <span></span>
        <span></span>
        <span></span>
      </MenuToggle>
      <NavWrapper id="navigation" className={open ? 'open' : ''}>
        <Menu>
          <MenuItem>
            <HomeIcon
              to={{
                state: {
                  position: 0,
                },
                pathname: '/',
              }}
              exact={true}
            >
              <span className="sr-only">Home</span>
            </HomeIcon>
          </MenuItem>
          {routes.slice(1).map((menuItem, idx) => {
            // Do not render the About item at desktop width.
            if (menuItem === 'About' && open === false) {
              return null;
            } else {
              return (
                <MenuItem key={idx}>
                  <NavItem to={`/${menuItem.toLowerCase()}`}>{menuItem}</NavItem>
                </MenuItem>
              );
            }
          })}
        </Menu>
        {open && <Footer menuEmbed />}
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
