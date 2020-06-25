import React from 'react'
import { useLocation } from 'react-router-dom'
import infoIcon from '../assets/info.svg'
import styled from 'styled-components'

const TooltipText = styled.span`
  display: none;
  margin-left: -30px;
  background: #4f4f4f;
  color: white;
  text-align: center;
  border-radius: 10px;
  padding: 5px;
  position: absolute;
  text-size: 12px;
  opacity: 0;
  left: 50%:
  bottom: 110%;
  transition-duration: 300ms;
  transition-property: opacity;
`;

const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  &:after {
    content: url(${infoIcon});
    position: absolute;
    width: 34px;
    height: 34px;
  }

  &:hover,
  &:focus {
    cursor: help;

    ${TooltipText} {
      display: block;
      opacity: 1;

      &::after {
        content: '';
        position: absolute;
        margin-left: -5px;
        border-width: 5px;
        top: 100%;
        left: 50%;
        border-color: #4f4f4f transparent transparent transparent;
      }
    }
  }
`;

const tooltip = ({ text }) => {
  const location = useLocation();
  return (
    <Tooltip
      tabIndex='0'
      role='tooltip'
      aria-describedby={`#${location.state.activeId}`}
    >
      <TooltipText id={location.state.activeId}>{text}</TooltipText>
    </Tooltip>
  );
}

export default tooltip
