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
      {props.question &&
        props.items.map((question, index) => {
          return (
            <TitleArea key={index}>
              <h1 className='sr-only'>Quiz</h1>
              <h2>{question.fields.question}</h2>
              <p>{question.fields.description}</p>
              <span>Help Tooltip</span>
            </TitleArea>
          );
        })
      }
      {props.answer && props.items.map((answer, index) => {
        return (
          <TitleArea key={index}>
            <h1 className='sr-only'>Quiz Results</h1>
            <h2>{answer.fields.explanation}</h2>
            <CTA tertiary text='Retake Quiz' href='/quiz' size='24px' />
            <Share />
          </TitleArea>
        );
      })}
      {props.archive && props.page &&
      <TitleArea>
        <h1>{props.page}</h1>
        <SearchBar />
        <Share />
      </TitleArea>
    }
  </>
  )
}

export default titleArea;
