import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const OptionWrapper = styled.div`
  box-shadow: 0 8px 4px -4px rgba(89, 62, 191, 0.3);
  padding: 30px 70px;
  background: white;
  border-radius: 10px;
  position: relative;
  line-height: 1.5;
  font-size: 20px;
  z-index: 2;
  cursor: pointer;

  &:after {
    content: '';
    opacity: 0;
    background: ${props => props.theme.colors.hoverGradient};
    border-radius: inherit;
    pointer-events: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: opacity 300ms ease;
  }

  &:hover,
  &:focus {
    &:after {
      opacity: 1;
    }
  }

  label {
    cursor: pointer;
    pointer-events: none;
  }

  &:not(:first-child) {
    margin-top: 18px;
  }
}
`;

const OptionInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0;
`;

const option = ({ option }) => {
  const location = useLocation();
  const history = useHistory();
  const { value, display_text, next_question, answer } = option;
  const displayText = display_text;
  const nextQuestion = next_question;
  let position = location.state.position || 0;

  const handleClick = e => {
    if (e.type === 'click' || e.code === 'Enter') {
      const { nextPage } = e.target.dataset;
      const { answer } = e.target.dataset;

      Object.assign(location, {
        state: {
          activeId: nextPage || answer,
          position: answer ? position : (position += 1),
        },
        pathname: answer ? `/quiz/${answer}` : location.pathname,
      });
      history.push(location);
    }
  };

  return (
    <>
      {displayText && value && (
        <OptionWrapper htmlFor={value}>
          <label style={{ position: 'relative', zIndex: 2 }}>{displayText}</label>
          <OptionInput
            type="radio"
            id={`option-${value}`}
            value={value}
            name={value}
            aria-checked
            data-next-page={nextQuestion}
            data-answer={answer}
            onClick={handleClick}
            onKeyUp={handleClick}
          />
        </OptionWrapper>
      )}
    </>
  );
};

export default option;
