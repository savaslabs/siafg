import React from 'react';
import ComponentLibrary from '../_componentLibrary';
import styled from 'styled-components';

const Full = () => {
  const FullPageWrapper = styled.div`
    padding-top: 100px;
  `;
  return (
    <FullPageWrapper>
      <h1>Should I Ask For Gender?</h1>
      {/* For development only */}
      <ComponentLibrary />
    </FullPageWrapper>
  );
}

export default Full;
