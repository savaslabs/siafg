import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-animated-css';
import CTA from './Cta';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { createGlobalStyle } from 'styled-components';

const ShareStyles = createGlobalStyle`
  .a2a_desktop {
    display: none;

    ${breakpoint('lg')`
      display: block;
    `}

    a {
      font-size: 0;
    }
  }

  .a2a_tablet {
    display: none;

    ${breakpoint('md', 'lg')`
      display: block;
      position: absolute;
      bottom: 0;
      right: -170px;
      padding: 10px 0;
      margin-left: 25px;
    `}

    a {
      font-size: 0;
    }
  }

  .a2a_mobile {
    position: absolute;
    background: white;
    display: flex;
    top: -15px;
    right: 0;
    padding: 12px;

    ${breakpoint('md')`
      display: none;
    `}

    a {
      font-size: 0;
    }
  }
`;

const ShareRef = styled.div`
  display: inline-block;
  position: relative;
  z-index: 5;

  ${breakpoint('lg')`
    display: block;
  `}
`;

const Share = () => {
  let shareButton = useRef();
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://static.addtoany.com/menu/page.js';
    shareButton.appendChild(script);

    const customScript = document.createElement('script');
    customScript.text = `
      var a2a_config = a2a_config || {};
      a2a_config.templates = a2a_config.templates || {};
      a2a_config.templates.twitter = {
        via: 'SavasLabs',
        related: 'SavasLabs',
      };
    `;
    shareButton.appendChild(customScript);
  }, []);

  const handleClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <ShareRef ref={el => (shareButton = el)}>
      <CTA
        text="Share Results"
        as="button"
        styletype="secondary"
        share
        display="inline-block"
        onClick={handleClick}
      />
      <ShareStyles />
      <Animated
        animationIn="slideInDown"
        animationOut="slideOutUp"
        animationInDuration={400}
        animationOutDuration={400}
        isVisible={showButtons}
        animateOnMount={false}
      >
        <div
          className="a2a_kit a2a_kit_size_32 a2a_default_style a2a_desktop"
          data-a2a-icon-color="#593EBF"
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
      </Animated>
      <Animated
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        animationInDuration={400}
        animationOutDuration={400}
        isVisible={showButtons}
        animateOnMount={false}
      >
        <div
          className="a2a_kit a2a_kit_size_32 a2a_default_style a2a_tablet"
          data-a2a-icon-color="#593EBF"
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
      </Animated>
      <Animated
        animationIn="fadeIn"
        animationInDuration={250}
        animationOut="fadeOut"
        animationOutDuration={250}
        isVisible={showButtons}
        animateOnMount={false}
      >
        <div
          className="a2a_kit a2a_kit_size_32 a2a_default_style a2a_mobile"
          data-a2a-icon-color="#593EBF"
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
      </Animated>
    </ShareRef>
  );
};

export default Share;
