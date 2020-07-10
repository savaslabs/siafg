import React from 'react';
import styled from 'styled-components';
import ComponentLibrary from '../_componentLibrary';
import CTA from '../cta';
import Header from '../header';
import GlossaryTooltip from '../glossaryTooltip';

const FullPageWrapper = styled.div`
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  height: 100vh;
`;

const Full = () => {
  const welcomeText =
    'Lorem ipsum dolor sit gender, consectetur adipiscing elit, sed do sex tempor incididunt ut labore et dolore magna aliqua';

  return (
    <FullPageWrapper>
      <div className="container">
        <Header home />
        <main>
          <div>
            <h1>Should I Ask For Gender?</h1>
            <GlossaryTooltip textToReplace={welcomeText} paragraph />
          </div>
          <CTA size="24px" primary href="/quiz" text="Take Quiz" inlineBlock />
          {/* For development only */}
          <ComponentLibrary />
        </main>
      </div>
    </FullPageWrapper>
  );
};

export default Full;
