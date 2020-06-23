import React from 'react';
import Option from './option';
import styled from 'styled-components';

const Legend = styled.legend`
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 30px;
  color: #593ebf;
`;

const optionList = ({ answers }) => {

  return (
    <>
      <Legend>Select Your Best Response</Legend>
      {answers &&
        answers.map((answer, index) => {
          return <Option answer={answer} key={index} />
        })
      };
  </>
  )
}

export default optionList;
