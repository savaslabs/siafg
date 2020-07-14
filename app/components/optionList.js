import React from 'react';
import Option from './option';
import styled from 'styled-components';

const Legend = styled.legend`
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 24px;
  color: ${props => props.theme.colors.primaryPurple};
`;

const OptionsWrapper = styled.fieldset`
  border-width: 0;
`;

const optionList = ({ options }) => {
  return (
    <div style={{ maxWidth: 450, marginLeft: 'auto', marginRight: 'auto' }}>
      <Legend>Select Your Best Response</Legend>
      <OptionsWrapper>
        {options?.length > 0 &&
          options.map((option, index) => {
            return <Option option={option} key={index} />;
          })}
      </OptionsWrapper>
    </div>
  );
};

export default optionList;
