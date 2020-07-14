import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import SearchBar from './searchBar';
import Share from './share';
import CTA from './cta';
import GlossaryTooltip from './glossaryTooltip';
import { entryQuestion } from '../constants';
import triangle from '../assets/triangle--right.svg';

const TitleArea = styled.div`
  ${breakpoint('sm')`
    width: 100%;
    left: 0;
    margin: 0 auto;
    padding: 0;
  `}

  ${breakpoint('lg')`
    width: calc(33vw - 84px);
    margin: 0;
  `}
`;

const TitleAreaContent = styled.div`
  ${breakpoint('sm')`
    padding-left: 0;
    margin-top: 0;
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
  ${breakpoint('lg')`
    padding-left: 84px;
  `};
`;

const titleArea = props => {
  return (
    <>
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
    </>
  );
};

export default titleArea;
