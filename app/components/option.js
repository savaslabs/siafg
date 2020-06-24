import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSingleRecord } from '../services/airtable-service';
import { useLocation, useHistory } from 'react-router-dom';

const option = ({ option }) => {
  const [value, setValue] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [nextQuestion, setNextQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    getSingleRecord('options', option).then((record) => {
      const { value, display_text, next_question, answer } = record.fields;
      setValue(value);
      setDisplayText(display_text);
      setAnswer(answer);
      setNextQuestion(next_question);
    });
  }, [option]);

  const handleClick = e => {
    const nextPage = e.target.dataset.nextPage;
    const answer = e.target.dataset.answer;
    Object.assign(location, {
      state: { activeId: nextPage || answer },
      pathname: answer ? `/quiz/${answer}` : location.pathname
    })
    history.push(location);
  }

  return (
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
  );
};

export default option;
