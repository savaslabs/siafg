import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import footerPolygon from '../assets/footer-polygon.svg';

const footer = () => {
  return (
    <Footer>
      <div className="container">
        <FooterMenu>
          <FooterLink href="https://savaslabs.com" target="_blank" rel="noreferrer">
            Savas Labs
            <span className="sr-only">Opens in new window</span>
          </FooterLink>
          <FooterLink href="mailto:info@savaslabs.com" rel="noreferrer">
            Share Feedback
            <span className="sr-only">Opens an email to info@savaslabs.com</span>
          </FooterLink>
          <FooterLink href="/about">
            About
            <span className="sr-only">Opens the about page</span>
          </FooterLink>
        </FooterMenu>
      </div>
    </Footer>
  );
};

const Footer = styled.footer`
  ${breakpoint('sm')`
    display: none;
  `}

  ${breakpoint('lg')`
    display: inherit;
    width: 100vw;
    background: ${props => props.theme.colors.footerGradient};
    padding: 34px 0;
    z-index: 9;
    margin-left: -60px;
  `}
`;

const FooterMenu = styled.div`
  width: 100%;
  min-width: 450px;
  display: flex;
`;

const FooterLink = styled.a`
  &:not(:last-child) {
    &:after {
      content: url(${footerPolygon});
      margin: 0 25px;
    }
  }
`;

export default footer;
