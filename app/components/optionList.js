import React from 'react';
import Option from './option';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const OptionListContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
`;

const Legend = styled.legend`
  display: block;
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 21px;
  color: ${props => props.theme.colors.primaryPurple};

  ${breakpoint('lg')`
    font-size: 21px;
  `}
`;

const OptionsWrapper = styled.fieldset`
  border-width: 0;
  padding: 0;
`;

const optionList = ({ options }) => {
  return (
    <OptionListContainer>
      <Legend>Select Your Best Response</Legend>
      <OptionsWrapper>
        {options?.length > 0 &&
          options.map((option, index) => {
            return <Option option={option} key={index} />;
          })}
      </OptionsWrapper>
    </OptionListContainer>
  );
};

export default optionList;
