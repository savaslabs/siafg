import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { routes } from '../constants';
import footerPolygon from '../assets/footer-polygon.svg';

const footer = () => {
  return (
    <Footer>
      <FooterContainer>
        <div class="container">
          <FooterMenu>
            <a href="https://savaslabs.com" target="_blank" rel="noreferrer">
              Savas Labs
              <span className="sr-only">Opens in new window</span>
            </a>
            <img src={footerPolygon} alt="" />
            <Link
              to={{
                state: {
                  position: 0,
                },
                pathname: '/about',
              }}
            >
              About
            </Link>
            <img src={footerPolygon} alt="" />
            <a href="mailto:info@savaslabs.com" rel="noreferrer">
              Share Feedback
              <span className="sr-only">Opens an email to info@savaslabs.com</span>
            </a>
          </FooterMenu>
        </div>
      </FooterContainer>
    </Footer>
  );
};

const Footer = styled.footer`
  width: 100vw;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  ${breakpoint('lg')`
    background: ${props => props.theme.colors.footerGradient};
      padding: 45px 0 45px 85px;
      z-index: 9;
  `}
`;

const FooterContainer = styled.div`
  width: 100%;
  display: none;
  justify-content: space-between;

  ${breakpoint('lg')`
    display: flex;
  `}
`;

const FooterMenu = styled.div`
  width: 100%;
  min-width: 450px;
  display: flex;
  justify-content: space-between;
`;

export default footer;
