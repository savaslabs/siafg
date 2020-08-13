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
    padding: 0 0 20px 0;
    min-height: calc(100vh - 280px);
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

const Full = props => {
  const content =
    props.page === 'Welcome'
      ? {
          title: 'Should I Ask For Gender?',
          mainText: `Before working to design more inclusive gender form fields, ask yourself, "Should I be asking for 
          gender at all?" We're here to help with that. Click below to take the quiz and we'll provide some feedback 
          and resources to help you out.`,
        }
      : {
          title: 'About',
          mainText: `Often, forms ask for gender and present two options to the user: male or female. If you don’t fit 
        into one of those two identities, the limited options can be alienating. *Should I Ask for Gender?*  was created 
        by [Savas Labs](https://www.savaslabs.com/) to provide a resource for form designers to think critically in 
        advance of crafting forms and collecting data. There are several ways to address this challenge and empathize 
        with all users, but it starts with a simple question: Should I be asking for gender?`,
        };

  return (
    <>
      <FullPageWrapper>
        <div className="container">
          <Header home />
          <MainPageContent>
            <div>
              <SiteTitle>{content.title}</SiteTitle>
              <GlossaryTooltip textToReplace={content.mainText} paragraph />
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
        </div>
      </FullPageWrapper>
      <Footer />
    </>
  );
};

export default Full;
