import React from 'react';
import Option from './option';
import styled from 'styled-components';

const Legend = styled.legend`
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 30px;
  color: #593ebf;
`;

const optionList = ({ options }) => {
  return (
    <>
      <Legend>Select Your Best Response</Legend>
      {options?.length > 0 &&
        options.map((option, index) => {
          return <Option option={option} key={index} />;
        })
      }
    </>
  );
};

export default optionList;
