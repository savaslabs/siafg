import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import footerPolygon from '../assets/footer-polygon.svg';

const footer = () => {
  return (
    <Footer>
      <FooterContainer>
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
