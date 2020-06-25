import React, { useState, useEffect } from 'react';
import TitleArea from '../titleArea';
import Card from '../card';
import CardList from '../cardList';
import OptionList from '../optionList';
import styled from 'styled-components';
import {
  getRecordsList,
  getSingleRecord,
  getSelectedRecords,
} from '../../services/airtable-service';
import { entryQuestion } from '../../constants';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

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
  /*
   * Full list of questions not being used in code at present,
   * but keeping code in case we need it. If still commented
   * out at end of project, remove.

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getRecordsList('questions').then((recordList) => {
      setQuestions(recordList);
    });
  }, []);
  */

  /*
   * Full list of answers not being used in code at present,
   * but keeping code in case we need it. If still commented
   * out at end of project, remove.

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    getRecordsList('answers').then((recordList) => {
      setAnswers(recordList);
    });
  }, []);
  */

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tooltip, setTooltip] = useState('');
  const [explanation, setExplanation] = useState('');
  const [resources, setResources] = useState([]);
  const [options, setOptions] = useState([]);
  const location = useLocation();
  const history = useHistory();

  /*
   * Get a single record based on ID and store its data
   * in state to pass to child components.
   */
  const getActiveQuestion = (id) => {
    getSingleRecord('questions', id).then((record) => {
      const { question, description, options, tooltip } = record.fields;
      setTitle(question);
      setDescription(description);
      setOptions(options);
      setTooltip(tooltip);
    });
  };

  const getRelatedResources = (table, view) => {
    getRecordsList(table, {
      params: {
        view
      },
    }).then((res) => {
      setResources(res);
    });
  };

  const getActiveAnswer = (id) => {
    getSingleRecord('answers', id).then((record) => {
      const { title, explanation, identifier } = record.fields;
      setTitle(title);
      setDescription('');
      setExplanation(explanation);
      getRelatedResources('resources', identifier);
    });
  };

  // Read browser history state to determine what to render.
  useEffect(() => {
    if (!location.state && topic === 'question') {
      /*
       * If no question is defined in browser history state,
       * use the default entry question.
       */
      getActiveQuestion(entryQuestion);
      Object.assign(location, {
        state: { activeId: entryQuestion },
      });
      // Replace instead of push so they don't have to hit back twice.
      history.replace(location);
    } else if (location.state && topic === 'question') {
      getActiveQuestion(location.state.activeId);
    } else if (topic === 'archive') {
      setTitle(page);
      setDescription('');
    } else if (topic === 'answer') {
      getActiveAnswer(location.pathname.replace('/quiz/', ''));
    }
  }, [location]);

  return (
    <>
      <SplitScreenWrapper>
        <TitleArea title={title} description={description} tooltip={tooltip} topic={topic} />
        <MainArea topic={topic}>
          {topic === 'question' && <OptionList options={options} />}
          {topic === 'answer' && (
            <>
              <Card answer formattedText={explanation} />
              {/* Render related articles */}
              <CardList page="Answer" items={resources} />
            </>
          )}
          {topic === 'archive' && <CardList page={page} />}
        </MainArea>
      </SplitScreenWrapper>
    </>
  );
};

export default Split;
