import React, { useEffect, useContext } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import '@babel/polyfill';
import styled from 'styled-components';
import { routes } from './constants';
import Hexes from './components/hexes';
import Split from './components/routes/split';
import Full from './components/routes/full';
import NoMatch from './components/routes/noMatch';
import { ArchiveProvider } from './context/archiveContext';
import { AppDataContext } from './context/appDataContext';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants';
import { createGlobalStyle } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Helmet } from 'react-helmet';
import logo from './assets/logo.svg';

const GlobalStyles = createGlobalStyle`

  body {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.45;
    margin: 0;
    overflow-x: hidden;
    color: ${props => props.theme.colors.darkGray};

    ${breakpoint('md')`
      font-size: 20px;
    `}
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primaryPurple};

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    padding-inline-start: 0;
    list-style: none;
  }

  .container {
    ${breakpoint('sm')`
      padding: 0 30px;
    `}
    ${breakpoint('md')`
      padding: 0 60px;
    `}
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.colors.primaryPurple};
    line-height: initial;
  }

  h2 {
    font-size: 21px;

    ${breakpoint('lg')`
      font-size: 28px;
    `}
  }
`;

const SiteContainer = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const App = () => {
  const { getAllData } = useContext(AppDataContext);
  const location = useLocation();

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ArchiveProvider>
        <GlobalStyles />
        <Helmet>
          <meta property="og:title" content="Should I Ask For Gender?" data-react-helmet="true" />
          <meta
            name="description"
            content="Should you be asking users for gender? Take this quiz to help answer that question. We'll provide some feedback and resources to help you out."
            data-react-helmet="true"
          />
          <meta
            property="og:description"
            content="Should you be asking users for gender? Take this quiz to help answer that question. We'll provide some feedback and resources to help you out."
            data-react-helmet="true"
          />
          <link rel="logo" type="image/svg" href={logo} />
          <meta property="og:image" content={logo} />
        </Helmet>
        <SiteContainer page={location.pathname} className="container">
          <Hexes />
          <Switch>
            {routes.map((route, index) => {
              const path = route.toLowerCase();
              return route === 'Welcome' ? (
                <Route exact path={'/'} key={index} route={route}>
                  <Full page={route} />
                </Route>
              ) : (
                <Route exact path={`/${path}`} key={index} route={route}>
                  <Split page={route} topic={route === 'Quiz' ? 'question' : 'archive'} />
                </Route>
              );
            })}
            {/* Quiz Answer routes. */}
            <Route path="/quiz/:resultId">
              <Split page="quiz" topic="answer" />
            </Route>
            {/* No Match routes */}
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </SiteContainer>
      </ArchiveProvider>
    </ThemeProvider>
  );
};
export default App;
