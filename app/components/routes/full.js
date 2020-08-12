import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import CTA from '../cta';
import Header from '../header';
import GlossaryTooltip from '../glossaryTooltip';
import { entryQuestion } from '../../constants';
import Footer from '../footer';

const FullPageWrapper = styled.div`
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  height: 100vh;

  ${breakpoint('lg')`
    overflow-y: scroll;
  `}
`;

const MainPageContent = styled.main`
  padding: 25% 0;

  ${breakpoint('md')`
    max-width: 75%;

    h1 {
      max-width: 500px;
    }
  `}

  ${breakpoint('lg')`
    max-width: 60%;
    max-width: 700px;
    padding: 0 0 0 84px;
    margin-bottom: 140px;
  `}
`;

const SiteTitle = styled.h1`
  font-size: 33px;
  margin-bottom: 20px;

  ${breakpoint('md')`
    font-size: 52px;
    margin-bottom: 35px;
  `}

  ${breakpoint('lg')`
    font-size: 64px;
  `}
`;

const Full = () => {
  const welcomeText = `Before working to design more inclusive gender form fields, ask yourself, "Should I be asking for gender at all?" We're here to help with that. Click below to take the quiz and we'll provide some feedback and resources to help you out.`;

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
        <Footer />
      </div>
    </FullPageWrapper>
  );
};

export default Full;
