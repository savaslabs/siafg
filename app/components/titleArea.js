import React from 'react';
import SearchBar from './searchBar';
import Share from './share';
import CTA from './cta';
import styled from 'styled-components';
import GlossaryTooltip from './glossaryTooltip';

const TitleArea = styled.div`
  width: 25%;
  background-color: white;
  padding-top: 100px;
`;

const titleArea = props => {
  return (
    <>
      <TitleArea>
        <h1 className="sr-only">Quiz</h1>
        <h2>{props.title}</h2>
        <div>
          <GlossaryTooltip textToReplace={props.description} />
        </div>
        {props.topic === 'archive' && <SearchBar />}
        {props.topic === 'answer' && <CTA tertiary text="Retake Quiz" href="/quiz" size="24px" />}
        {props.topic === 'answer' && <Share />}
      </TitleArea>
    </>
  );
};

export default titleArea;
