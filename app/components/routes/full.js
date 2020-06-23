import React from 'react';
import ComponentLibrary from '../_componentLibrary';
import CTA from '../cta'
import styled from 'styled-components';

const Full = () => {
  const FullPageWrapper = styled.div`
    padding-top: 100px;
  `;
  return (
    <FullPageWrapper>
      <h1>Should I Ask For Gender?</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <CTA size='33px' primary href='/quiz' text='Take Quiz' />
      {/* For development only */}
      <ComponentLibrary />
    </FullPageWrapper>
  );
}

export default Full;
