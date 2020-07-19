import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-animated-css';
import CTA from './cta';
import shareIcon from '../assets/share.svg';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const ShareCTA = styled(CTA)`
  ${breakpoint('lg')`
    display: flex;
    align-items: center;
    white-space: nowrap;
    font: inherit;
    font-weight: 600;
    margin: 25px 0 5px;
    height: auto;
    top: auto;
  `}

  appearance: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: inline-block;
  position: relative;
  height: 50px;
  top: 5px;
  left: 25px;

  &:before {
    content: url(${shareIcon});
    z-index: 2;

    ${breakpoint('lg')`
      position: absolute;
      top: 10px;
    `}
  }
`;

const share = () => {
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
    <>
      <ShareCTA
        text="Share Results"
        as="button"
        styletype="secondary"
        share
        display="inline-block"
        onClick={handleClick}
        ref={el => (shareButton = el)}
      />
      <Animated
        animationIn="slideInDown"
        animationOut="slideOutUp"
        animationInDuration={400}
        animationOutDuration={400}
        isVisible={showButtons}
        animateOnMount={false}
      >
        <div className="a2a_kit a2a_kit_size_32 a2a_default_style" data-a2a-icon-color="#593EBF">
          <a className="a2a_button_facebook" />
          <a className="a2a_button_twitter" />
          <a className="a2a_button_linkedin" />
          <a className="a2a_button_email" />
          <a className="a2a_button_copy_link" />
        </div>
      </Animated>
    </>
  );
};

export default share;
