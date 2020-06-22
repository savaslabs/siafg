import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.scss';
import '@babel/polyfill';
import { routes } from './constants';
import Header from './components/header';
import Split from './components/routes/split';
import Full from './components/routes/full';

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          {routes.map((route, index) => {
            const path = route.toLowerCase();
            return route === 'Welcome' ? (
              <Route
                exact
                path={['/', `/${path}`]}
                key={index}
                route={route}
              >
                <Full page={route} />
              </Route>
            ) : (
              <Route path={`/${path}`} key={index} route={route}>
                <Split page={route} />
              </Route>
            );
          })}
        </Switch>
      </main>
    </>
  );
}
export default App;
