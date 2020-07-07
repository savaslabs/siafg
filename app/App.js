import React, { useEffect, useContext } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './index.scss';
import '@babel/polyfill';
import styled from 'styled-components';
import { routes } from './constants';
import Split from './components/routes/split';
import Full from './components/routes/full';
import NoMatch from './components/routes/noMatch';
import { ArchiveProvider } from './context/archiveContext';
import { AppDataContext } from './context/appDataContext';

const splitGradient = 'linear-gradient(90deg, #fff 0%, #fff 33%, #f9f8ff 33%, #f9f8ff 100%)';
const SiteContainer = styled.div`
  height: 100vh;
  position: relative;
  background: ${props => (props.page === '/welcome' ? '#f9f8ff' : splitGradient)};
  overflow: hidden;
`;

const App = () => {
  const { getAllData } = useContext(AppDataContext);
  const location = useLocation();

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <ArchiveProvider>
      <SiteContainer page={location.pathname} className="container">
        <Switch>
          {routes.map((route, index) => {
            const path = route.toLowerCase();
            return route === 'Welcome' ? (
              <Route exact path={['/', `/${path}`]} key={index} route={route}>
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
  );
};
export default App;
