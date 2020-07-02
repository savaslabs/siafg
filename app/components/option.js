import React, { useState, useEffect } from 'react';
import { getSingleRecord } from '../services/airtable-service';
import { useLocation, useHistory } from 'react-router-dom';

const option = ({ option }) => {
  const location = useLocation();
  const history = useHistory();
  const { value, display_text, next_question, answer } = option;
  const displayText = display_text;
  const nextQuestion = next_question;

  const handleClick = e => {
    const nextPage = e.target.dataset.nextPage;
    const answer = e.target.dataset.answer;
    Object.assign(location, {
      state: { activeId: nextPage || answer },
      pathname: answer ? `/quiz/${answer}` : location.pathname,
    });
    history.push(location);
  };

  return (
    <>
      {displayText && value && (
        <div htmlFor={value} className="shadow card">
          {displayText}
          <input
            type="radio"
            id={`option-${value}`}
            value={value}
            name={value}
            aria-checked
            data-next-page={nextQuestion}
            data-answer={answer}
            onClick={handleClick}
          />
        </div>
      )}
    </>
  );
};

export default option;
