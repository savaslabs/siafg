import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.scss';
import '@babel/polyfill';
import { routes } from './constants';
import Header from './components/header';
import Split from './components/routes/split';
import Full from './components/routes/full';
import NoMatch from './components/routes/noMatch';
import styled from 'styled-components';

const SiteContainer = styled.div`
  height: 100vh;
  position: relative;
`;

const App = () => {
  return (
    <SiteContainer className='container'>
      <Header />
      <main>
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
          <Route path={`/quiz/:resultId`}>
            <Split page='quiz' topic='answer' />
          </Route>
          {/* No Match routes */}
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </main>
    </SiteContainer>
  );
}
export default App;
