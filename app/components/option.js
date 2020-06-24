import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSingleRecord } from '../services/airtable-service';
import { useLocation } from 'react-router-dom';

const option = ({ option }) => {
  const [value, setValue] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [nextQuestion, setNextQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const location = useLocation();

  useEffect(() => {
    getSingleRecord('options', option).then((record) => {
      const { value, display_text, next_question, answer } = record.fields;
      setValue(value);
      setDisplayText(display_text);
      setAnswer(answer);
      location.state = { currentQuestion: next_question };
    });
  }, []);

  return (
    <div htmlFor={value} className="shadow card">
      <Link to={location}>
        {displayText}
        <input
          type="radio"
          id={`option-${value}`}
          value={value}
          name={value}
          aria-checked
        />
      </Link>
    </div>
  );
};

export default option;
