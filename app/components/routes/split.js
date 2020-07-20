import React, { useState, useEffect, useContext } from 'react';
import TitleArea from '../titleArea';
import Card from '../card';
import CardList from '../cardList';
import OptionList from '../optionList';
import Header from '../header';
import styled, { createGlobalStyle } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { entryQuestion } from '../../constants';
import { useHistory, useLocation } from 'react-router-dom';
import { ArchiveProvider } from '../../context/archiveContext';
import { AppDataContext } from '../../context/appDataContext';
import { Animated } from 'react-animated-css';
import forward from '../../assets/forward.svg';
import back from '../../assets/back.svg';

const GradientOverlayAnimationStyle = createGlobalStyle`

  .gradient-overlay-anim {
    background: ${props => props.theme.colors.scrollGradient};
    pointer-events: none !important;
    height: 100px;
    left: 30px;
    width: calc(100vw - 60px);
    position: fixed;
    z-index: 20;

    ${breakpoint('lg')`
      left: 33.33vw;
      margin-left: 75px;
      margin-right: 60px;
      height: 300px;
      width: calc(66.66vw - 135px);
    `}
  }
`;

const SplitScreenWrapper = styled.main`
  ${breakpoint('sm')`
    padding-top: 5%;
  `}
  ${breakpoint('lg')`
    display: flex;
    flex-wrap: wrap;
  `}
`;

const MainArea = styled.div`
  ${breakpoint('lg')`
    width: calc(66.66vw - 140px);
    left: 33.33vw;
    position: absolute;
    padding: 0 65px 0 75px;
    margin: 0 0 0 auto;
    max-height: 100vh;
    height: auto;
    right: 0;
  `}

  ${props =>
    props.topic === 'question' &&
    `
      text-align: center;
    `};
  background-color: transparent;
  max-height: 100vh;
  overflow: scroll;
  padding: 0;
  width: auto;
  margin: 50px auto 0;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollGradient = styled.div`
  background: ${props => props.theme.colors.scrollGradient};
  pointer-events: none;
  height: 100px;
  left: 30px;
  width: calc(100vw - 60px);
  position: fixed;
  z-index: 20;

  ${breakpoint('lg')`
    left: 33.33vw;
    margin-left: 75px;
    margin-right: 60px;
    height: 300px;
    width: calc(66.66vw - 135px);
  `}
`;

const QuestionWrapper = styled.div`
  margin-bottom: 350px;

  ${breakpoint('md')`
    margin-bottom: 0;
  `}
`;

const Contact = styled.p`
  font-weight: 600;
  text-align: center;
  width: 100%;
  margin-bottom: 50px;

  ${breakpoint('lg')`
    position: fixed;
    right: 30px;
    text-align: right;
    width: auto;
    margin: 0;
    bottom: 30px;
  `}
`;

const QuizNavigation = styled.div`
  margin: 40px auto;
`;

const PrevQuestion = styled.button`
  ${breakpoint('lg')`
    display: none;
  `}

  appearance: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  transition: opacity 0.2;

  &:after {
    content: url(${back});
  }

  &:disabled {
    cursor: auto;
    opacity: 0.5;
  }
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
  const [backDisabled, setBackDisabled] = useState(true);
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

  useEffect(() => {
    if (location.state?.activeId === entryQuestion) {
      setBackDisabled(true);
    } else {
      setBackDisabled(false);
    }
  }, [location.state?.activeId]);

  const goBack = e => {
    history.goBack();
  };

  return (
    <ArchiveProvider resources={resources} glossary={glossary}>
      <Header />
      <SplitScreenWrapper>
        <TitleArea title={title} description={description} topic={topic} />
        <MainArea topic={topic}>
          {topic === 'question' && (
            <QuestionWrapper>
              <Animated animationIn="fadeInUp" animationInDuration={300} animationInDelay={500}>
                <OptionList options={questionOptions} />{' '}
              </Animated>
              <QuizNavigation>
                <PrevQuestion showBack={backDisabled} disabled={backDisabled} onClick={goBack}>
                  <span className="sr-only">Previous Question</span>
                </PrevQuestion>
              </QuizNavigation>
              <Contact>
                Have an edit suggestion? <a href="mailto:info@savaslabs.com">Email us</a>.
              </Contact>
            </QuestionWrapper>
          )}
          <GradientOverlayAnimationStyle />
          {topic === 'answer' && (
            <>
              <Animated
                animationIn="fadeIn"
                animationInDuration={800}
                animationInDelay={1200}
                className="gradient-overlay-anim"
              >
                <ScrollGradient />
              </Animated>
              <Card answer explanation={explanation} />
              {/* Render related articles */}
              <CardList page="Answer" items={relatedResources} />
            </>
          )}
          {topic === 'archive' && (
            <>
              <Animated
                animationIn="fadeIn"
                animationInDuration={800}
                animationInDelay={1500}
                className="gradient-overlay-anim"
              >
                <ScrollGradient />
              </Animated>
              <CardList page={page} resources={resources} glossary={glossary} />
            </>
          )}
        </MainArea>
      </SplitScreenWrapper>
    </ArchiveProvider>
  );
};

export default Split;
