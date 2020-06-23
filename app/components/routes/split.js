import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import TitleArea from '../titleArea';
import Card from '../card';
import CardList from '../cardList';
import styled from 'styled-components';
import { getRecordsList } from '../../services/airtable-service';

const SplitScreenWrapper = styled.div`
  display: flex;
  flex-direction: flex-row;
  height: 100vh;
`;

const MainArea = styled.div`
  ${(props) =>
    props.topic === 'question' &&
    ` text-align: center;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
    ` ||
    `
      width: 75%;
    `
  };
  background-color: transparent;
  padding-top: 100px;
`;

const Legend = styled.legend`
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 30px;
  color: #593ebf;
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
        <MainArea topic={topic}>
          {topic === 'question' && (
            <>
              <Legend>Select Your Best Response</Legend>
              {answers.map((answer, index) => {
                return (
                  <div
                    htmlFor={answer.fields.identifier}
                    key={index}
                    className='shadow card'
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
                  </div>
                );
              })}
            </>
          )}
          {topic === 'answer' && (
            <>
              <Card answer />
              {/* Render related articles */}
              {/* <CardList page='Resources' items={answers.fields.articles} /> */}
            </>
          )}
          {topic === 'archive' && (
            <CardList page={page} />
          )}
        </MainArea>
      </SplitScreenWrapper>
    </>
  );
}

export default Split;
