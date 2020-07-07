import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-animated-css';
import styled from 'styled-components';
import CTA from './cta';

const ShareButton = styled.button``;

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
    <div ref={el => (shareButton = el)}>
      <CTA
        text="Share Results"
        as="button"
        size="20px"
        secondary
        share
        inlineBlock
        onClick={handleClick}
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
    </div>
  );
};

export default share;
