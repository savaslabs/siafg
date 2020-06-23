import React from 'react'
import styled from 'styled-components'

const gradient1 = 'linear-gradient(135deg, #FFDD94 0%, #D1C6F3 100%)';

const CTA = styled.button`
  background: ${(props) =>
    props.tertiary
      ? gradient1
      : 'white'};
  border-radius: 3px;
  border: ${(props) => (props.secondary ? '5px' : 'none')};
  padding: 15px 40px;
  position: ${(props) => (props.secondary ? 'relative' : null)};
  ${(props) =>
    props.secondary &&`
      &:before {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -5px;
        border-radius: inherit;
        background: ${gradient1};
    `}a
`;

const cta = (props) => {
  return (
    <CTA
      {...props}
      {...(props.primary && { className: 'shadow' })}
      href='#'
    >
      Click me!
    </CTA>
  );
}

export default cta
