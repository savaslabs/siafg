import React from 'react';
import Highlight from 'react-highlighter';
import styled from 'styled-components';
import shareIcon from '../assets/share.svg';
import { Link } from 'react-router-dom';
import breakpoint from 'styled-components-breakpoint';

const CTA = styled(Link)`
  ${breakpoint('lg')`
    font-size: 21px;
    padding: 15px 30px;
  `}
  color: ${props => props.theme.colors.primaryPurple};
  font-weight: 600;
  text-align: center;
  font-size: ${props =>
    props.styletype === 'tertiary' ? '18px' : props.styletype === 'secondary' ? '18px' : '21px'};
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
  padding: 10px 20px;
  position: relative;

  ${breakpoint('sm', 'md')`
    ${props =>
      props.share &&
      `
      font-size: 0;
      border: 0;
      padding: 0;
      margin: 0;
      font-size: 18px;
      position: relative;
      left: 15px;

      &:before {
        content: url(${shareIcon});
        position: absolute;
        z-index: 2;
        bottom: -5px;
      }
    `}
  `}

  ${breakpoint('md')`
    ${props =>
      props.share &&
      `display: flex;
        cursor: pointer;
        align-items: center;
        padding: 10px 20px;
        font: inherit;
        font-weight: 600;
        font-size: 18px;
        margin-left: 25px;

        &:before {
          content: url(${shareIcon});
          position: absolute;
          top: 0;
          bottom: auto;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: center;
        }

      `}
  `}

  ${breakpoint('lg')`
    ${props =>
      props.share &&
      `
      margin: 25px 0 5px 0;
      font-size: 21px;
      padding: 15px 20px;
    `}
  `}


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
`;

const Text = styled.span`
  position: relative;
  z-index: 2;
`;

const ShareText = styled.span`
  ${breakpoint('sm', 'md')`
    font-size: 0;
  `}

  ${breakpoint('md')`
    padding-left: 40px;
    position: relative;
    z-index: 2;
  `}
`;

const Cta = props => {
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

export default Cta;
