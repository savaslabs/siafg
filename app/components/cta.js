import React from 'react';
import Highlight from 'react-highlighter';
import styled from 'styled-components';

const gradient1 = 'linear-gradient(135deg, #FFDD94 0%, #D1C6F3 100%)';

const CTA = styled.a`
  color: #593ebf;
  font-weight: 600;
  text-size: ${props => props.size};
  background: ${props => (props.tertiary ? gradient1 : 'white')};
  border-radius: 3px;
  padding: 15px 40px;
  ${props =>
    props.secondary &&
    `  border: 5px;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -5px;
        border-radius: inherit;
        background: ${gradient1};
      }`}
`;

const cta = props => {
  return (
    <CTA {...props} {...(props.primary && { className: 'shadow' })}>
      {props.search ? <Highlight search={props.search}>{props.text}</Highlight> : props.text}
    </CTA>
  );
};

export default cta;
