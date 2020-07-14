import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import CTA from '../cta';
import Header from '../header';
import GlossaryTooltip from '../glossaryTooltip';
import { entryQuestion } from '../../constants';

const FullPageWrapper = styled.div`
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  height: 100vh;
`;

const MainPageContent = styled.main`
  ${breakpoint('lg')`
      padding-left: 84px;
      max-width: 500px;
  `};
`;

const SiteTitle = styled.h1`
  font-size: 64px;
  margin: 80px 0 35px;
`;

const Full = () => {
  const welcomeText =
    'Lorem ipsum dolor sit gender, consectetur adipiscing elit, sed do sex tempor incididunt ut labore et dolore magna aliqua';

  return (
    <FullPageWrapper>
      <div className="container">
        <Header home />
        <MainPageContent>
          <div>
            <SiteTitle>Should I Ask For Gender?</SiteTitle>
            <GlossaryTooltip textToReplace={welcomeText} paragraph />
          </div>
          <div style={{ marginTop: 35 }}>
            <CTA
              size="24px"
              styletype="primary"
              to={{
                state: {
                  activeId: entryQuestion,
                  position: 1,
                },
                pathname: '/quiz',
              }}
              text="Take Quiz"
              display="inline-block"
            />
          </div>

          {/* For development only
          <ComponentLibrary /> */}
        </MainPageContent>
      </div>
    </FullPageWrapper>
  );
};

export default Full;
