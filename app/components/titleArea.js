import React from 'react';
import SearchBar from './searchBar';
import Share from './share';
import CTA from './cta';
import Tooltip from './tooltip';
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
        <h1 className='sr-only'>Quiz</h1>
        <h2>{props.title}</h2>
        {props.tooltip && <Tooltip text={props.tooltip} />}
        <p>{props.description}</p>
        {props.topic === 'archive' && <SearchBar />}
        {props.topic === 'answer' && (
          <CTA tertiary text='Retake Quiz' href='/quiz' size='24px' />
        )}
        {props.topic === 'answer' && <Share />}
      </TitleArea>
    </>
  );
};

export default titleArea;
