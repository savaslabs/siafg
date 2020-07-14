import React from 'react';
import Highlight from 'react-highlighter';
import styled from 'styled-components';
import shareIcon from '../assets/share.svg';
import { Link } from 'react-router-dom';

const CTA = styled(Link)`
  color: ${props => props.theme.colors.primaryPurple};
  font-weight: 600;
  font-size: ${props => props.size};
  background: ${props =>
    props.styletype === 'tertiary'
      ? props.theme.colors.primaryGradient
      : props.styletype === 'secondary'
      ? props.theme.colors.gradientBorder
      : 'white'};
  box-shadow: ${props =>
    props.styletype === 'primary' ? '0 8px 4px -4px rgba(89, 62, 191, 0.3)' : ''};
  display: ${props => (props.display ? props.display : 'inline')};
  border-radius: 3px;
  border: ${props => (props.styletype === 'secondary' ? '5px solid transparent' : 0)};
  padding: 15px 40px;
  z-index: 2;
  position: relative;
  &:after {
    content: '';
    opacity: 0;
    background: ${props =>
      props.styletype === 'secondary'
        ? props.theme.colors.gradientBorderHover
        : props.theme.colors.hoverGradient};
    border: inherit;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    position: absolute;
    top: ${props => (props.styletype === 'secondary' ? '-5px' : 0)};
    left: ${props => (props.styletype === 'secondary' ? '-5px' : 0)};
    z-index: 1;
    transition: opacity 300ms ease;
  }
  &:hover,
  &:focus {
    text-decoration: none;

    &:after {
      opacity: 1;
    }
  }
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
    <CTA {...props}>
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
