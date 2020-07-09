import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const option = ({ option }) => {
  const location = useLocation();
  const history = useHistory();
  const { value, display_text, next_question, answer } = option;
  const displayText = display_text;
  const nextQuestion = next_question;
  let position = location.state.position || 0;

  const handleClick = e => {
    if (!event.code || event.code === 'Enter') {
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
        <div htmlFor={value} className="shadow card option">
          <span style={{ position: 'relative', zIndex: 2 }}>{displayText}</span>
          <input
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
        </div>
      )}
    </>
  );
};

export default option;
