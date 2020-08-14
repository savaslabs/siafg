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
  }
`;

const ShareRef = styled.div`
  display: inline-block;
  position: relative;
  z-index: 5;
`;

const Share = () => {
  let shareButton = useRef();
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://static.addtoany.com/menu/page.js';
    shareButton.appendChild(script);
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
          <a className="a2a_button_facebook" />
          <a className="a2a_button_twitter" />
          <a className="a2a_button_linkedin" />
          <a className="a2a_button_email" />
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
          <a className="a2a_button_facebook" />
          <a className="a2a_button_twitter" />
          <a className="a2a_button_linkedin" />
          <a className="a2a_button_email" />
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
          <a className="a2a_button_facebook" />
          <a className="a2a_button_twitter" />
          <a className="a2a_button_linkedin" />
          <a className="a2a_button_email" />
        </div>
      </Animated>
    </ShareRef>
  );
};

export default Share;
