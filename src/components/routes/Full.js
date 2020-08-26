import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import CTA from '../Cta';
import Header from '../Header';
import GlossaryTooltip from '../GlossaryTooltip';
import { entryQuestion } from '../../constants';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';

const FullPageWrapper = styled.div`
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${breakpoint('lg')`
    min-height: ${props => props.mainHeight};
  `}
`;

const MainPageContent = styled.main`
  padding: 20% 0;
  display: flex;
  flex-direction: column;
  padding: 40% 0;

  ${breakpoint('md')`
    max-width: 75%;
    padding: 25% 0;

    h1 {
      max-width: 500px;
    }
  `}

  ${breakpoint('lg')`
    max-width: 60%;
    max-width: 700px;
    padding: 30px 0 30px 84px;
    min-height: calc(100vh - 308px);
    justify-content: center;
  `}

  h1 {
    margin-top: 0;
  }

  &.overflow-hidden {
    overflow: hidden;
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

const Full = props => {
  const [mainHeight, setMainHeight] = useState('0');

  useEffect(() => {
    let footerHeight = document.getElementById('site-footer')?.clientHeight;
    if (footerHeight < 133) footerHeight = 133;
    setMainHeight(`calc(100vh - 100px -${footerHeight}px )`);
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
      <FullPageWrapper mainHeight={mainHeight}>
        <Helmet>
          <title>{content.title}</title>
          <meta property="og:title" content={content.title} data-react-helmet="true" />
          <meta
            property="og:description"
            content={
              'Forms often present binary options to the user that can be alienating. See if it’s necessary to ask for gender by taking this quiz."'
            }
          />
        </Helmet>
        <div className="container">
          <Header home />
          <MainPageContent>
            <div>
              <SiteTitle>{content.title}</SiteTitle>
              <GlossaryTooltip textToReplace={content.mainText} paragraph />
            </div>
            <div>
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
