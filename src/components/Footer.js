import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import footerPolygon from '../assets/footer-polygon.svg';
import { LabsLogo } from './LabsLogo';
import { LabsLogoMobile } from './LabsLogoMobile';

const Footer = props => {
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
    <FooterWrapper
      id="site-footer"
      isSplitScreen={props.split}
      menuEmbed={props.menuEmbed}
      as={props.menuEmbed ? 'div' : 'footer'}
    >
      <FooterContainer isSplitScreen={props.split}>
        <LogoLink
          href="https://savaslabs.com/labs"
          target="_blank"
          rel="noopener noreferrer"
          isSplitScreen={props.split}
        >
          <span className="sr-only">
            Open the Labs page of the Savas Labs website in new window.
          </span>
          <LabsLogoMobile />
          <LabsLogo />
        </LogoLink>
        <FooterMenu ref={el => (footerSocial = el)} isSplitScreen={props.split}>
          <div>
            <FooterLink href="/about" isSplitScreen={props.split}>
              About
              <span className="sr-only">Opens the about page</span>
            </FooterLink>
            <FooterLink
              href="mailto:info@savaslabs.com"
              rel="noreferrer"
              isSplitScreen={props.split}
            >
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
  width: 100vw;
  background: ${props => props.theme.colors.footerPurple};
  z-index: 100;
  margin-left: -60px;
  display: flex;
  position: relative;

  ${breakpoint('sm', 'md')`
    margin-left: -30px;
    padding: 30px 0 35px;
  `}

  ${breakpoint('md', 'lg')`
    padding: 30px 0 50px;
  `}

  ${breakpoint('sm', 'lg')`
    display: none;

    ${props =>
      props.menuEmbed &&
      `
      display: flex;
      padding: 30px 0 35px;
      background: transparent;
      transition: .5s ease-out;
      bottom: 0;
      display: flex;
      z-index: 300;
      margin: auto 0 50px;
    `}
  `}

  ${breakpoint('lg')`
    ${props =>
      props.isSplitScreen &&
      `
      width: calc(33.33vw - 35px);
      background: transparent;
    `}

    ${props =>
      props.menuEmbed &&
      `
      padding: 0;
      height: 0;
      width: 0;
      pointer-events: none;
      font-size: 0;
      opacity: 0;
      display: none;
    `}
  `}

  .a2a_kit {
    font-size: 0;
    display: flex;
    margin-top: 5px;
    justify-content: flex-end;

    ${breakpoint('sm', 'lg')`
      justify-content: center;
    `}

    ${breakpoint('lg')`
      ${props =>
        props.isSplitScreen &&
        `
          margin-right: -10px;
      `};
    `}
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${breakpoint('sm', 'lg')`
    flex-direction: column;
    align-items: center;
  `}

  ${breakpoint('md')`
    padding: 0 60px;
  `}

  ${breakpoint('lg')`
    ${props =>
      props.isSplitScreen &&
      `
      width: calc(100% - 60px);
      margin-top: 10px;
      padding: 0 0 0 60px;
    `}
  `}
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  margin-left: 70px;

  ${breakpoint('sm', 'lg')`
    margin-left: 0;
  `};

  ${breakpoint('lg')`
    ${props =>
      props.isSplitScreen &&
      `
        margin-left: -10px;
        width: 100px;
        height: 55px;
        align-items: center;
    `}
  `}
`;

const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: -10px;

  ${breakpoint('lg')`
    ${props =>
      props.isSplitScreen &&
      `
        font-size: 16px;
        text-align: right;
    `}
  `}
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.footerText};
  font-weight: 600;
  display: inline-block;
  position: relative;
  &:not(:last-child) {
    margin-right: 40px;
    &:after {
      content: '';
      background: url(${footerPolygon}) center/cover;
      width: 10px;
      height: 10px;
      position: absolute;
      right: -25px;
      top: 10px;
    }

    ${breakpoint('lg')`
      ${props =>
        props.isSplitScreen &&
        `
        margin-right: 20px;
        &:after {
          right: -15px;
          top: 6px;
        }
      `}
    `}
  }
`;

export default Footer;
