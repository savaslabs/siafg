import React from 'react';
import SearchBar from './searchBar';
import Share from './share';
import CTA from './cta';
import styled from 'styled-components';

const TitleArea = styled.div`
  width: 25%;
  background-color: white;
  padding-top: 100px;
`;

const titleArea = (props) => {
  return (
    <>
      <TitleArea>
        <h1 className="sr-only">Quiz</h1>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        {props.tooltip && <span>{props.tooltip}</span>}
        {props.archive && <SearchBar />}
        {props.answer && <CTA tertiary text="Retake Quiz" href="/quiz" size="24px" />}
        {props.answer && <Share />}
      </TitleArea>
    </>
  );
};

export default titleArea;
