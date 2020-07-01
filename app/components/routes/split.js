import React, { useState, useEffect, useContext } from 'react';
import TitleArea from '../titleArea';
import Card from '../card';
import CardList from '../cardList';
import OptionList from '../optionList';
import styled from 'styled-components';
import { entryQuestion } from '../../constants';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { ArchiveProvider } from '../../context/archiveContext';
import { GlossaryHighlightContext } from '../../context/glossaryHighlightContext';

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

const Split = ({ page, topic, appData }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [explanation, setExplanation] = useState('');
  const [relatedResources, setRelatedResources] = useState([]);
  const [questionOptions, setQuestionOptions] = useState([]);
  const location = useLocation();
  const history = useHistory();
  const {
    questions,
    answers,
    options,
    resources,
    glossary,
    glossary_highlighted_terms,
  } = appData;
  const Terms = useContext(GlossaryHighlightContext);

  /*
   * Get a single record based on ID and store its data
   * in state to pass to child components.
   */
  const getActiveQuestion = (id) => {
    const questionRecord = questions?.find((record) => record.id === id).fields;
    setTitle(questionRecord?.question);
    setDescription(questionRecord?.description);
    getQuestionOptions(questionRecord?.options);
  };

  const getRelatedResources = (id) => {
    const filteredResources = resources?.filter((record) =>
      record.fields.answers?.includes(id)
    );

    setRelatedResources(filteredResources ? filteredResources : []);
  };

  const getQuestionOptions = (optionArr) => {
    let optionList = [];
    optionArr.forEach((opt) => {
      optionList = [
        ...optionList,
        options?.find((record) => record.id === opt).fields,
      ];
    });

    setQuestionOptions(optionList[0] ? optionList : []);
  };

  const getActiveAnswer = (id) => {
    const answerRecord = answers?.find((record) => record.id === id).fields;
    setTitle(answerRecord?.title);
    setDescription('');
    setExplanation(answerRecord?.explanation);
    getRelatedResources(id);
  };

  const setHighlightedTerms = () => {
    Terms.setHighlightedTerms(glossary_highlighted_terms);
  }

  // Read browser history state to determine what to render.
  useEffect(() => {
    setHighlightedTerms();
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
  }, [location, appData]);

  return (
    <ArchiveProvider resources={resources} glossary={glossary}>
        <SplitScreenWrapper>
          <TitleArea title={title} description={description} topic={topic} />
          <MainArea topic={topic}>
            {topic === 'question' && <OptionList options={questionOptions} />}
            {topic === 'answer' && (
              <>
                <Card answer formattedText={explanation} />
                {/* Render related articles */}
                <CardList page="Answer" items={relatedResources} />
              </>
            )}
            {topic === 'archive' && (
              <CardList page={page} resources={resources} glossary={glossary} />
            )}
          </MainArea>
        </SplitScreenWrapper>
    </ArchiveProvider>
  );
};

export default Split;
