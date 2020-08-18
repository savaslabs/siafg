import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import CTA from '../Cta';
import Header from '../Header';
import GlossaryTooltip from '../GlossaryTooltip';
import { entryQuestion } from '../../constants';
import Footer from '../Footer';

const FullPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  ${breakpoint('lg')`
    height: ${(props) => props.height};
  `}
`;

const MainPageContent = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50%;

  ${breakpoint('md')`
    max-width: 75%;
    padding-top: 25%;

    h1 {
      max-width: 500px;
    }
  `}

  ${breakpoint('lg')`
    max-width: 60%;
    max-width: 700px;
    padding: 0 0 20px 84px;
    justify-content: center;
  `}

  h1 {
    margin-top: 0;
  }
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

const Full = (props) => {
  const [mainHeight, setMainHeight] = useState('0');

  useEffect(() => {
    let footerHeight = document.getElementById('site-footer')?.clientHeight;
    if (footerHeight < 133) footerHeight = 133;
    setMainHeight(`calc(100vh - ${footerHeight}px)`);
  }, []);

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
      <FullPageWrapper height={mainHeight}>
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
      </FullPageWrapper>
      <Footer />
    </>
  );
};

export default Full;
