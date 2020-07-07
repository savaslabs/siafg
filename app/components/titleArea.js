import React from 'react';
import styled from 'styled-components';
import SearchBar from './searchBar';
import Share from './share';
import CTA from './cta';
import GlossaryTooltip from './glossaryTooltip';

const TitleArea = styled.div`
  width: 33%;
`;

const TitleAreaContent = styled.div`
  padding: 0 100px 0 84px;
  margin-top: 0;
`;

const titleArea = props => {
  return (
    <>
      <TitleArea>
        <h1 className="sr-only">Quiz</h1>
        <TitleAreaContent as="h2">{props.title}</TitleAreaContent>
        {props.topic === 'archive' && <SearchBar />}
        <TitleAreaContent>
          <GlossaryTooltip textToReplace={props.description} />
          {props.topic === 'answer' && (
            <CTA tertiary inlineBlock text="Retake Quiz" href="/quiz" size="20px" />
          )}
          {props.topic === 'answer' && <Share />}
        </TitleAreaContent>
      </TitleArea>
    </>
  );
};

export default titleArea;
