import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import TitleArea from '../titleArea';
import styled from 'styled-components';
import { getRecordsList } from '../../services/airtable-service';

const options = [
  'Medical or Legal Reasons',
  'Demograpihc Information',
  'Profile Set Up',
  'Census Information',
];

const SplitScreenWrapper = styled.div`
  display: flex;
  flex-direction: flex-row;
`;

const MainArea = styled.div`
  width: 75%;
  background-color: transparent;
  padding-top: 100px;
`;

const Legend = styled.legend`
  margin-bottom: 30px;
`;

const Option = styled.label`
  padding: 30px 70px;
  background: white;
  border-radius: 10px;
  position: relative;
`;

const Split = ({ page, topic }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getRecordsList('questions').then((recordList) => {
      setQuestions(recordList);
    });
  }, []);

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    getRecordsList('answers').then((recordList) => {
      setAnswers(recordList);
    });
  }, []);

  let { url } = useRouteMatch();

  return (
    <>
      <SplitScreenWrapper>
        {topic === 'question' && <TitleArea question items={questions} />}
        {topic === 'answer' && <TitleArea answer items={answers} />}
        {topic === 'archive' && <TitleArea archive page={page} />}
        <MainArea>
          {page === 'Quiz' && topic === 'question' && (
            <>
              <Legend>Select Your Best Response</Legend>
              {answers.map((answer, index) => {
                return (
                  <Option
                    htmlFor={answer.fields.identifier}
                    key={index}
                    className='shadow'
                  >
                    <Link
                      to={`${url}/result_${answer.fields.identifier}`}
                      key={index}
                    >
                      {answer.fields.identifier}

                      <input
                        type='radio'
                        id={index}
                        value={answer.fields.identifer}
                        name='test'
                        aria-checked
                        data-next-step
                      />
                    </Link>
                  </Option>
                );
              })}
            </>
          )}
        </MainArea>
      </SplitScreenWrapper>
    </>
  );
}

export default Split;
