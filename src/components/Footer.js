import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import footerPolygon from '../assets/footer-polygon.svg';
import { LabsLogo } from './LabsLogo';

const Footer = () => {
  let footerSocial = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://static.addtoany.com/menu/page.js';
    footerSocial.appendChild(script);

    const customScript = document.createElement('script');
    customScript.text = `
      var a2a_config = a2a_config || {};
      a2a_config.templates = a2a_config.templates || {};
      a2a_config.templates.twitter = {
        via: 'SavasLabs',
        related: 'SavasLabs',
      };
    `;
    footerSocial.appendChild(customScript);
  }, []);

  return (
    <FooterWrapper id="site-footer">
      <FooterContainer>
        <LogoLink href="https://savaslabs.com" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Open Savas Labs website in new window.</span>
          <LabsLogo />
        </LogoLink>
        <FooterMenu ref={el => (footerSocial = el)}>
          <div>
            <FooterLink href="/about">
              About
              <span className="sr-only">Opens the about page</span>
            </FooterLink>
            <FooterLink href="mailto:info@savaslabs.com" rel="noreferrer">
              Share Feedback
              <span className="sr-only">Opens an email to info@savaslabs.com</span>
            </FooterLink>
          </div>
          <div
            className="a2a_kit a2a_kit_size_32 a2a_default_style"
            data-a2a-icon-color="transparent,#635685"
          >
            <a className="a2a_button_facebook" href="/">
              Share on Facebook
            </a>
            <a className="a2a_button_twitter" href="/">
              Share on Twitter
            </a>
            <a className="a2a_button_linkedin" href="/">
              Share on LinkedIn
            </a>
            <a className="a2a_button_email" href="/">
              Share by Email
            </a>
          </div>
        </FooterMenu>
      </FooterContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  ${breakpoint('sm')`
    display: none;
  `}
  ${breakpoint('lg')`
    width: 100vw;
    background: ${props => props.theme.colors.footerPurple};
    padding: 10px 0;
    z-index: 9;
    margin-left: -60px;
    display: flex;
  `}

  .a2a_kit {
    font-size: 0;
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
  }
`;

const FooterContainer = styled.div`
  padding: 0 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  margin-left: 70px;
`;

const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: -10px;
  & > div:first-child {
    display: flex;
  }
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.footerText};
  font-weight: 600;
  &:not(:last-child) {
    &:after {
      content: url(${footerPolygon});
      margin: 0 15px;
    }
  }
`;

export default Footer;
