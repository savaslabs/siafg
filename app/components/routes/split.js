import React, { useState, useEffect, useContext } from 'react';
import TitleArea from '../titleArea';
import Card from '../card';
import CardList from '../cardList';
import OptionList from '../optionList';
import Header from '../header';
import styled from 'styled-components';
import { entryQuestion } from '../../constants';
import { useHistory, useLocation } from 'react-router-dom';
import { ArchiveProvider } from '../../context/archiveContext';
import { AppDataContext } from '../../context/appDataContext';

const SplitScreenWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  padding-top: 5%;
`;

const MainArea = styled.div`
  ${props =>
    props.topic === 'question' &&
    ` text-align: center;
    `};
  background-color: transparent;
  max-height: 100vh;
  overflow: scroll;
  padding-left: 75px;
  padding-right: 60px;
  position: absolute;
  left: 33vw;
  width: calc(66vw - 135px);
  margin-right: 0;
  margin-left: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollGradient = styled.div`
  background: linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 25%);
  pointer-events: none;
  height: 300px;
  width: calc(66vw - 135px);
  position: fixed;
  z-index: 20;
  left: 33vw;
  margin-left 75px;
  margin-right: 60px;
`;

const Split = ({ page, topic }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [explanation, setExplanation] = useState('');
  const [relatedResources, setRelatedResources] = useState([]);
  const [questionOptions, setQuestionOptions] = useState([]);
  const location = useLocation();
  const history = useHistory();
  const appData = useContext(AppDataContext);
  const { questions, answers, options, resources, glossary, highlightedTerms } = appData;
  const [isScrolling, setIsScrolling] = useState(0);

  /*
   * Get a single question record based on ID.
   */
  const getActiveQuestion = id => {
    if (questions.length > 0 && options.length > 0) {
      const questionRecord = questions.find(record => record.id === id).fields;
      setTitle(questionRecord?.question);
      setDescription(questionRecord?.description);
      getQuestionOptions(questionRecord?.options);
    }
  };

  /*
   * Get related resources for an answer.
   */
  const getRelatedResources = id => {
    const filteredResources = resources?.filter(record => record.fields.answers?.includes(id));

    setRelatedResources(filteredResources ? filteredResources : []);
  };

  /*
   * Get options for a specific question.
   */
  const getQuestionOptions = optionArr => {
    let optionList = [];
    optionArr.forEach(opt => {
      optionList = [...optionList, options?.find(record => record.id === opt).fields];
    });

    setQuestionOptions(optionList[0] ? optionList : []);
  };

  /*
   * Get a single answer record.
   */
  const getActiveAnswer = id => {
    if (answers.length > 0 && resources.length > 0) {
      const answerRecord = answers?.find(record => record.id === id).fields;
      setTitle(answerRecord?.title);
      setDescription('');
      setExplanation(answerRecord?.explanation);
      getRelatedResources(id);
    }
  };

  // Read browser history state to determine what to render.
  useEffect(() => {
    switch (topic) {
      case 'question':
        /*
         * If no question is defined in browser history state,
         * use the default entry question.
         */
        if (!location.state) {
          getActiveQuestion(entryQuestion);
          Object.assign(location, {
            state: { activeId: entryQuestion, position: 1 },
          });
          // Replace instead of push so they don't have to hit back twice.
          history.replace(location);
        } else {
          getActiveQuestion(location.state.activeId);
        }
        break;

      case 'archive':
        setTitle(page);
        setDescription('');
        break;

      case 'answer':
        getActiveAnswer(location.pathname.replace('/quiz/', ''));
        break;

      default:
        break;
    }
  }, [location, appData]);

  const handleScroll = e => {
    // console.log({ height: e.target.scrollHeight, scrollTop: e.target.scrollTop});
    setIsScrolling(e.target.scrollTop);
  };

  return (
    <ArchiveProvider resources={resources} glossary={glossary}>
      <Header />
      <SplitScreenWrapper>
        <TitleArea title={title} description={description} topic={topic} />
        <MainArea topic={topic} onScroll={handleScroll}>
          {topic === 'question' && <OptionList options={questionOptions} />}
          {topic === 'answer' && (
            <>
              <ScrollGradient />
              <Card answer explanation={explanation} scroll={isScrolling} />
              {/* Render related articles */}
              <CardList page="Answer" items={relatedResources} scroll={isScrolling} />
            </>
          )}
          {topic === 'archive' && (
            <>
              <ScrollGradient />
              <CardList page={page} resources={resources} glossary={glossary} />
            </>
          )}
        </MainArea>
      </SplitScreenWrapper>
    </ArchiveProvider>
  );
};

export default Split;
