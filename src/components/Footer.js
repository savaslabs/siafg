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
    <FooterWrapper id="site-footer" isSplitScreen={props.split}>
      <FooterContainer isSplitScreen={props.split}>
        <LogoLink
          href="https://savaslabs.com"
          target="_blank"
          rel="noopener noreferrer"
          isSplitScreen={props.split}
        >
          <span className="sr-only">Open Savas Labs website in new window.</span>
          <LabsLogoMobile />
          <LabsLogo />
        </LogoLink>
        <FooterMenu ref={el => (footerSocial = el)} isSplitScreen={props.split}>
          <div>
            <FooterLink href="/about">
              About
              <span className="sr-only">Opens the about page</span>
            </FooterLink>
            {!props.split && (
              <FooterLink href="mailto:info@savaslabs.com" rel="noreferrer">
                Share Feedback
                <span className="sr-only">Opens an email to info@savaslabs.com</span>
              </FooterLink>
            )}
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
  width: ${props => (props.isSplitScreen ? 'calc(33.33vw - 35px)' : '100vw')};
  background: ${props =>
    props.isSplitScreen ? 'transparent' : props.theme.colors.backgroundPurple};
  padding: 10px 0;
  z-index: 9;
  margin-left: -60px;
  margin-top: ${props => (props.isSplitScreen ? '-140px' : 0)};
  display: flex;
  position: relative;

  ${breakpoint('sm', 'lg')`
    padding: 30px 0 35px;
    background: transparent;
    transform: translateX(100vw);
    transition: .5s ease-out;
    position: fixed;
    bottom: 0;
    display: flex;
    z-index: 300;

    &.menu-open {
      transform: translateX(0);
    }
  `}

  ${breakpoint('md', 'lg')`
    padding: 30px 0 50px;
  `}

  ${breakpoint('sm', 'md')`
    margin-left: -30px;
    padding: 30px 0 35px;
  `}

  .a2a_kit {
    font-size: 0;
    display: flex;
    margin-top: 5px;
    justify-content: flex-end;
    ${props =>
      props.isSplitScreen &&
      `
        margin-right: -10px;
        a {
          padding: 0;
          margin: 0;
        }
        .a2a_svg {
          margin: 0;
        }
      `};

    ${breakpoint('sm', 'lg')`
      justify-content: center;
    `}
  }
`;

const FooterContainer = styled.div`
  width: ${props => (props.isSplitScreen ? 'calc(100% - 60px)' : '100%')};
  display: flex;
  justify-content: space-between;
  margin-top: ${props => (props.isSplitScreen ? '10px' : 0)};

  ${breakpoint('sm', 'lg')`
    flex-direction: column;
    align-items: center;
  `}

  ${breakpoint('md')`
    padding: ${props => (props.isSplitScreen ? '0 0 0 60px' : '0 60px')}
  `}
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  margin-left: 70px;
  ${props =>
    props.isSplitScreen &&
    `
      margin-left: -10px;
      width: 125px;
    `}
  ${breakpoint('sm', 'lg')`
    margin-left: 0;
  `};
`;

const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: -10px;

  ${props =>
    props.isSplitScreen &&
    `
      font-size: 16px;
      text-align: right;
    `}
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.footerText};
  font-weight: 600;
  display: inline-block;
  &:not(:last-child) {
    &:after {
      content: url(${footerPolygon});
      margin: 0 15px;
    }
  }
`;

export default Footer;
