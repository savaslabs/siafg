import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import SearchBar from './searchBar';
import Share from './share';
import CTA from './cta';
import GlossaryTooltip from './glossaryTooltip';
import { entryQuestion } from '../constants';
import triangle from '../assets/triangle--right.svg';
import { Animated } from 'react-animated-css';

const TitleArea = styled.div`
  width: 100vw;
  margin-left: -30px;
  margin-top: -40px;
  padding: 80px 0 50px 0;
  background: white;
  text-align: center;
  line-height: 1.3;
  box-shadow: 0px 2px 10px rgba(89, 62, 191, 0.3);

  ${breakpoint('md')`
    margin-left: -60px;
    margin-top: -50px;
    text-align: left;
  `}

  ${breakpoint('lg')`
    width: calc(33vw - 84px);
    margin: 0;
    padding: 0;
    line-height: inherit;
    box-shadow: none;
  `}
`;

const TitleAreaContent = styled.div`
  padding: 0 30px;
  margin-top: 0;
  max-width: 600px;

  ${breakpoint('md')`
    padding: 0 70px;
  `}

  ${breakpoint('lg')`
    padding: 0 0 0 84px;
    max-width: none;
    ${props =>
      props.isTitle &&
      `position: relative;
      &:after {
        content: url(${triangle});
        position: absolute;
        right: -55px;
        top: 5px;
      }
    `};
  `};
`;

const titleArea = props => {
  return (
    <Animated
      animationIn="fadeInLeft"
      animationOut="fadeOutLeft"
      animationInDuration={800}
      animationOutDuration={800}
    >
      <TitleArea>
        <h1 className="sr-only">Quiz</h1>
        <TitleAreaContent as="h2" isTitle>
          {props.title}
        </TitleAreaContent>
        {props.topic === 'archive' && <SearchBar />}
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
              size="20px"
              styletype="secondary"
            />
          )}
          {props.topic === 'answer' && <Share />}
        </TitleAreaContent>
      </TitleArea>
    </Animated>
  );
};

export default titleArea;
