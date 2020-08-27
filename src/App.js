import React, { useEffect, useContext } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from './constants';
import Hexes from './components/Hexes';
import Split from './components/routes/Split';
import Full from './components/routes/Full';
import NoMatch from './components/routes/NoMatch';
import { ArchiveProvider } from './context/archiveContext';
import { AppDataContext } from './context/appDataContext';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants';
import { createGlobalStyle } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-61514316-5');
ReactGA.pageview(window.location.pathname + window.location.search);

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.45;
    margin: 0;
    color: ${props => props.theme.colors.darkGray};
    max-height: 100vh;
    overflow-x: hidden;
    ${breakpoint('md')`
      font-size: 20px;
    `}

    &.overflow-hidden {
      overflow: hidden;
    }
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

  .glossary-tooltip {
    width: 70vw;
    font-size: 16px !important;
    line-height: 1.25;
    box-shadow: 0px 2px 12px 0px rgba(253, 229, 229, 0.1);

    ${breakpoint('sm', 'md')`
      left: 30px !important;
      margin-top: 3px !important;

      &:after {
        display: none;
      }
    `}

    ${breakpoint('md')`
      width: 400px;
    `}

    &.show {
      opacity: 0.95 !important;
    }
  }

`;

const SiteContainer = styled.div`
  height: 100vh;
  position: relative;
`;

const App = () => {
  const { getAllData } = useContext(AppDataContext);
  const location = useLocation();

  useEffect(() => {
    getAllData();
    // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ArchiveProvider>
        <GlobalStyles />
        <SiteContainer page={location.pathname} className="container">
          <Hexes />
          <Switch>
            {routes.map((route, index) => {
              const path = route.toLowerCase();
              return route === 'Welcome' || route === 'About' ? (
                <Route
                  exact
                  path={route === 'Welcome' ? '/' : `/${path}`}
                  key={index}
                  route={route}
                >
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
