import React, { useState, useEffect, useContext } from 'react';
import TitleArea from '../TitleArea';
import Card from '../Card';
import CardList from '../CardList';
import OptionList from '../OptionList';
import Header from '../Header';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { entryQuestion } from '../../constants';
import { useHistory, useLocation } from 'react-router-dom';
import { ArchiveProvider } from '../../context/archiveContext';
import { AppDataContext } from '../../context/appDataContext';
import { Animated } from 'react-animated-css';
import { Helmet } from 'react-helmet';

const SplitScreenWrapper = styled.main`
  ${breakpoint('lg')`
    display: flex;
    flex-wrap: wrap;
    padding-top: 45px;
  `}

  & > div.animated:first-child {
    position: relative;
    z-index: 50;
  }
`;

const MainArea = styled.div`
  background-color: transparent;
  overflow-y: ${(props) => (props.topic === 'archive' || props.topic === 'answer' ? 'scroll' : '')};
  padding: 50px 0 0 0;
  width: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  height: ${(props) => props.topic === 'archive' ? props.mainAreaHeight : 'auto'};

  ${breakpoint('lg')`
    width: calc(66.66vw - 140px);
    left: 33.33vw;
    position: absolute;
    padding: 0 65px 0 75px;
    right: 0;
    height: ${(props) => props.mainAreaHeight};
  `}

  ${(props) =>
    props.topic === 'question' &&
    `
      text-align: center;
    `};

  &::-webkit-scrollbar {
    display: none;
  }
`;

const QuestionWrapper = styled.div`
  position: relative;

  ${breakpoint('md')`
    margin-bottom: 0;
  `}
`;

const Contact = styled.p`
  font-weight: 600;
  text-align: center;
  width: 100%;
  margin-bottom: 25px;

  ${breakpoint('lg')`
    text-align: right;
  `}
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
  const { questions, answers, options, resources, glossary } = appData;
  const [mainAreaHeight, setMainAreaHeight] = useState('100vh');

  // Read browser history state to determine what to render.
  useEffect(() => {
    /*
     * Get related resources for an answer.
     */
    const getRelatedResources = (id) => {
      const filteredResources = resources?.filter((record) =>
        record.fields.answers?.includes(id)
      );

      setRelatedResources(filteredResources ? filteredResources : []);
    };

    /*
     * Get options for a specific question.
     */
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

    /*
     * Get a single answer record.
     */
    const getActiveAnswer = (id) => {
      if (answers.length > 0 && resources.length > 0) {
        const answerRecord = answers?.find((record) => record.id === id).fields;
        setTitle(answerRecord?.title);
        setDescription('');
        setExplanation(answerRecord?.explanation);
        getRelatedResources(id);
      }
    };

    /*
     * Get a single question record based on ID.
     */
    const getActiveQuestion = (id) => {
      if (questions.length > 0 && options.length > 0) {
        const questionRecord = questions.find((record) => record.id === id)
          .fields;
        setTitle(questionRecord?.question);
        setDescription(questionRecord?.description);
        getQuestionOptions(questionRecord?.options);
      }
    };

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
  }, [
    location,
    appData,
    history,
    page,
    topic,
    answers,
    options,
    questions,
    resources,
  ]);

  useEffect(() => {
    const offset = document.getElementById('split-main')?.offsetTop;
    setMainAreaHeight(`calc(100vh - ${offset}px)`);
  }, []);

  const metaDescription =
    topic === 'answer'
      ? `${explanation.split('.')[0]}.`
      : topic === 'archive'
      ? `${page} related to asking for gender on forms.`
      : `Forms often present binary options to the user that can be alienating. See if it’s necessary to ask for gender by taking this quiz.`;

  const pageTitle =
    topic === 'question' || topic === 'answer'
      ? `Quiz | Should I Ask For Gender?`
      : `${title} | Should I Ask For Gender?`;

  return (
    <ArchiveProvider resources={resources} glossary={glossary}>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          property="og:title"
          content={pageTitle}
          data-react-helmet="true"
        />
        <meta
          name="twitter:title"
          content={pageTitle}
          data-react-helmet="true"
        />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          property="twitter:url"
          content={`https://shouldiaskforgender.com${location.pathname}`}
        />
        <meta
          property="og:url"
          content={`https://shouldiaskforgender.com${location.pathname}`}
        />
      </Helmet>
      <Header />
      <SplitScreenWrapper>
        <TitleArea title={title} description={description} topic={topic} />
        <MainArea
          topic={topic}
          mainAreaHeight={mainAreaHeight}
          id="split-main"
        >
          {topic === 'question' && (
            <QuestionWrapper>
              <Animated
                animationIn="fadeInUp"
                animationInDuration={300}
                animationInDelay={500}
              >
                <OptionList options={questionOptions} />{' '}
              </Animated>
              <Contact>
                Have an edit suggestion?{' '}
                <a href="mailto:info@savaslabs.com">Email us</a>.
              </Contact>
            </QuestionWrapper>
          )}
          {topic === 'answer' && (
            <>
              <Card answer explanation={explanation} />
              {/* Render related articles */}
              <CardList page="Answer" items={relatedResources} />
            </>
          )}
          {topic === 'archive' && (
            <>
              <CardList page={page} resources={resources} glossary={glossary} />
            </>
          )}
        </MainArea>
      </SplitScreenWrapper>
    </ArchiveProvider>
  );
};

export default Split;
