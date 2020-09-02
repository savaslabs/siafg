import React from 'react';
import Option from './Option';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const OptionListContainer = styled.div`
  max-width: 450px;
  margin: 0 auto 80px;
`;

const Legend = styled.legend`
  display: block;
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 21px;
  text-align: center;
  width: 100%;
  color: ${props => props.theme.colors.primaryPurple};

  ${breakpoint('lg')`
    font-size: 24px;
  `}
`;

const OptionsWrapper = styled.fieldset`
  border-width: 0;
  padding: 0;
  margin: 0;
`;

const optionList = ({ options }) => {
  return (
    <OptionListContainer>
      <Legend>Select Your Best Response</Legend>
      <OptionsWrapper>
        {options?.length > 0 &&
          options.map((option, index) => {
            return <Option option={option} key={option.__id} />;
          })}
      </OptionsWrapper>
    </OptionListContainer>
  );
};

export default optionList;
