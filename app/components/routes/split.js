import React, { useState, useEffect } from 'react';
import TitleArea from '../titleArea';
import Card from '../card';
import CardList from '../cardList';
import OptionList from '../optionList';
import styled from 'styled-components';
import {
  getRecordsList,
  getSingleRecord,
} from '../../services/airtable-service';
import { useHistory, useLocation } from 'react-router-dom';

const SplitScreenWrapper = styled.div`
  display: flex;
  flex-direction: flex-row;
  height: 100vh;
`;

const MainArea = styled.div`
  ${(props) =>
    (props.topic === 'question' &&
      ` text-align: center;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
    `) ||
    `
      width: 75%;
    `};
  background-color: transparent;
  padding-top: 100px;
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

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [options, setOptions] = useState([]);
  const [questionId, setQuestionId] = useState([]);
  const location = useLocation();
  const history = useHistory();

  const setActiveQuestion = (id) => {
    getSingleRecord('questions', id).then((record) => {
      const { question, description, options } = record.fields;
      setTitle(question);
      setDescription(description);
      setOptions(options);
      setQuestionId(record.id);
      history.push({ ...location, state: { ...location.state, currentQuestion: record.id} });
    });
  };

  useEffect(() => {
    if (!location.state) {
      setActiveQuestion('recXV64HY1DxzL65B');
    } else {
      setActiveQuestion(location.state.currentQuestion);
    }
  }, []);

  return (
    <>
      <SplitScreenWrapper>
        {topic === 'question' && (
          <TitleArea question title={title} description={description} />
        )}
        {topic === 'answer' && <TitleArea answer /*title={} description={}*/ />}
        {topic === 'archive' && (
          <TitleArea archive /*title={} description={}*/ />
        )}
        <MainArea topic={topic}>
          {topic === 'question' && (
            <OptionList options={options} />
          )}
          {topic === 'answer' && (
            <>
              <Card answer />
              {/* Render related articles */}
              {/* <CardList page='Resources' items={answers.fields.articles} /> */}
            </>
          )}
          {topic === 'archive' && <CardList page={page} />}
        </MainArea>
      </SplitScreenWrapper>
    </>
  );
};

export default Split;
