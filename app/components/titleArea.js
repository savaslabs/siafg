import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import SearchBar from './searchBar';
import Share from './share';
import CTA from './cta';
import GlossaryTooltip from './glossaryTooltip';
import { entryQuestion } from '../constants';
import { Animated } from 'react-animated-css';
import triangleDown from '../assets/triangle--down.svg';

const TitleArea = styled.div`
  width: 100vw;
  margin-left: -30px;
  margin-top: -40px;
  padding: 65px 0 40px 0;
  background: white;
  text-align: ${props => (props.isArchive ? 'left' : 'center')};
  line-height: 1.3;
  box-shadow: 0px 2px 10px rgba(89, 62, 191, 0.3);
  position: relative;
  z-index: 50;

  ${breakpoint('sm', 'lg')`
    &:after {
      content: url(${triangleDown});
      position: absolute;
      bottom: -35px;
      left: calc(50% - 45px);
      filter: drop-shadow(0px 7px 3px rgba(89, 62, 191, 0.125));
      z-index: 50;
    }
  `}

  ${breakpoint('md')`
    margin-left: -60px;
    margin-top: -70px;
    text-align: left;
  `}

  ${breakpoint('lg')`
    width: calc(33.33vw - 84px);
    margin: 0;
    background: transparent;
    padding: 0;
    line-height: inherit;
    box-shadow: none;
  `}

  h2,
  p {
    margin-top: 0;
  }
`;

const TitleAreaContent = styled.div`
  padding: 0 30px;
  margin-top: 15px;
  max-width: 600px;
  max-height: 25vh;

  ${breakpoint('sm', 'md')`
    position: relative;
    z-index: 1;
    width: fit-content;
    margin: 0 auto 15px;
  `};

  ${breakpoint('md')`
    padding: 0 70px;
  `}

  ${breakpoint('lg')`
    padding: 0 0 0 84px;
    max-width: none;
    max-height: none;
    margin-left: 0;
    margin-top: 40px;
  `};
`;

const titleArea = props => {
  return (
    <Animated
      animationIn={props.topic === 'archive' ? 'fadeInUp' : 'fadeInDown'}
      animationInDuration={props.topic === 'answer' ? 0 : 300}
      animationInDelay={props.topic === 'answer' ? 0 : 600}
    >
      <TitleArea isArchive={props.topic === 'archive'} id="title-area">
        <h1 className="sr-only">Quiz</h1>
        <TitleAreaContent as="h2" isTitle>
          {props.title}
        </TitleAreaContent>
        {props.topic === 'archive' ? (
          <SearchBar />
        ) : (
          <TitleAreaContent>
            <GlossaryTooltip textToReplace={props.description} />
            {props.topic === 'answer' && (
              <CTA
                to={{
                  state: {
                    activeId: entryQuestion,
                    position: 1,
                  },
                  pathname: '/quiz',
                }}
                display="inline-block"
                text="Retake Quiz"
                styletype="secondary"
              />
            )}
            {props.topic === 'answer' && <Share />}
          </TitleAreaContent>
        )}
      </TitleArea>
    </Animated>
  );
};

export default titleArea;
