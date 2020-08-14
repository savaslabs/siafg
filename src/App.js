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

const GlobalStyles = createGlobalStyle`

  body {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.45;
    margin: 0;
    overflow: hidden;

    color: ${props => props.theme.colors.darkGray};
    max-height: 100vh;

    ${breakpoint('md')`
      font-size: 20px;
    `}

    ${breakpoint('lg')`
      overflow-y: scroll;
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
