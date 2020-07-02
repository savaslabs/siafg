import React from 'react';
import ComponentLibrary from '../_componentLibrary';
import CTA from '../cta';
import styled from 'styled-components';
import GlossaryTooltip from '../glossaryTooltip';

const FullPageWrapper = styled.div`
  padding-top: 100px;
`;

const Full = () => {
  const welcomeText =
    'Lorem ipsum dolor sit gender, consectetur adipiscing elit, sed do sex tempor incididunt ut labore et dolore magna aliqua';

  return (
    <FullPageWrapper>
      <div>
        <h1>Should I Ask For Gender?</h1>
        <GlossaryTooltip textToReplace={welcomeText} paragraph />
      </div>
      <CTA size="33px" primary href="/quiz" text="Take Quiz" style={{ display: 'inline-block'}} />
      {/* For development only */}
      <ComponentLibrary />
    </FullPageWrapper>
  );
};

export default Full;
