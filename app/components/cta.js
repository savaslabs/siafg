import React from 'react';
import Highlight from 'react-highlighter';
import styled from 'styled-components';
import shareIcon from '../assets/share.svg';
import { Link } from 'react-router-dom';

const gradient1 = 'linear-gradient(135deg, #FFDD94 0%, #D1C6F3 100%)';
const hoverGradient = 'linear-gradient(135deg, #FFF4DC 0%, #D4C7FF 100%)';
const gradientBorderBackground =
  'linear-gradient(#fff, #fff) padding-box, ${gradient1} border-box;';
const gradientBorderBackgroundHover = `${hoverGradient} padding-box, ${hoverGradient} border-box;`;

const CTA = styled(Link)`
  color: #593ebf;
  font-weight: 600;
  font-size: ${props => props.size};
  background: ${props =>
    props.styletype === 'tertiary'
      ? gradient1
      : props.styletype === 'secondary'
      ? gradientBorderBackground
      : 'white'};
  display: ${props => (props.display ? props.display : 'inline')};
  border-radius: 3px;
  padding: 15px 40px;
  z-index: 2;
  position: relative;
  &:after {
    content: '';
    opacity: 0;
    background: ${hoverGradient};
    border: inherit;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: opacity 300ms ease;
  }
  &:hover,
  &:focus {
    &:after {
      opacity: 1;
    }
  }
  ${props =>
    props.styletype === 'secondary' &&
    `border: 5px solid transparent;
       background:
       linear-gradient(#fff, #fff) padding-box,
       ${gradient1} border-box;
       &:after {
        content: '';
        background: ${gradientBorderBackgroundHover};
        left: -5px;
        top: -5px;
      }
    `}
  ${props =>
    props.share &&
    `display: flex;
     cursor: pointer;
     align-items: center;
     white-space: nowrap;
     padding: 15px 20px;
     font: inherit;
     font-weight: 600;
     margin-top: 25px;
     margin-bottom: 5px;
     &:before {
        content: url(${shareIcon});
        position: absolute;
        top: 15px;
        z-index: 2;
      }
      &:after {
        content: '';
        background: ${gradientBorderBackgroundHover};
        left: -5px;
      }
    `}
`;

const Text = styled.span`
  position: relative;
  z-index: 2;
`;

const ShareText = styled.span`
  padding-left: 40px;
  position: relative;
  z-index: 2;
`;

const cta = props => {
  return (
    <CTA {...props} {...(props.styletype === 'primary' && { className: 'shadow' })}>
      {props.share ? (
        <ShareText>{props.text}</ShareText>
      ) : props.search ? (
        <Highlight search={props.search}>
          <Text>{props.text}</Text>
        </Highlight>
      ) : (
        <Text>{props.text}</Text>
      )}
    </CTA>
  );
};

export default cta;
