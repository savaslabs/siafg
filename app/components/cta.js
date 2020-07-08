import React from 'react';
import Highlight from 'react-highlighter';
import styled from 'styled-components';
import shareIcon from '../assets/share.svg';

const gradient1 = 'linear-gradient(135deg, #FFDD94 0%, #D1C6F3 100%)';
const gradientBorderBackground =
  'linear-gradient(#fff, #fff) padding-box, ${gradient1} border-box;';

const CTA = styled.a`
  color: #593ebf;
  font-weight: 600;
  font-size: ${props => props.size};
  background: ${props =>
    props.tertiary ? gradient1 : props.secondary ? gradientBorderBackground : 'white'};
  display: ${props => (props.inlineBlock ? 'inline-block' : 'inline')};
  border-radius: 3px;
  padding: 15px 40px;
  z-index: 2;
  ${props =>
    props.secondary &&
    `border: 5px solid transparent;
       position: relative;
       background:
       linear-gradient(#fff, #fff) padding-box,
       ${gradient1} border-box;
    `}
  ${props =>
    props.share &&
    `display: flex;
     cursor: pointer;
     align-items: center;
     white-space: nowrap;
     padding: 15px;
     font: inherit;
     font-weight: 600;
     &:before {
        content: url(${shareIcon});
        position: absolute;
        top: 15px;
      }
    `}
`;

const cta = props => {
  return (
    <CTA {...props} {...(props.primary && { className: 'shadow' })}>
      {props.share ? (
        <span style={{ paddingLeft: 40 }}>{props.text}</span>
      ) : props.search ? (
        <Highlight search={props.search}>{props.text}</Highlight>
      ) : (
        props.text
      )}
    </CTA>
  );
};

export default cta;
