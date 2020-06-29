import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.scss';
import '@babel/polyfill';
import { routes } from './constants';
import Header from './components/header';
import Split from './components/routes/split';
import Full from './components/routes/full';
import NoMatch from './components/routes/noMatch';
import styled from 'styled-components';
import { getRecordsList } from './services/airtable-service';

const SiteContainer = styled.div`
  height: 100vh;
  position: relative;
`;

const App = () => {
  const [appData, setAppData] = useState({});
  const getAllData = () => {
    const tables = ['questions', 'resources', 'glossary', 'answers', 'options'];
    tables.forEach((table) => {
      getRecordsList(table)
        .then((res) => {
          setAppData(prevState => ({
            ...prevState,
            [table]: res
          }))
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      {appData.questions && (
        <SiteContainer className="container">
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
                  <Route exact path={`/${path}`} key={index} route={route}>
                    <Split
                      page={route}
                      topic={route === 'Quiz' ? 'question' : 'archive'}
                      appData={appData}
                    />
                  </Route>
                );
              })}
              {/* Quiz Answer routes. */}
              <Route path={`/quiz/:resultId`}>
                <Split page="quiz" topic="answer" appData={appData} />
              </Route>
              {/* No Match routes */}
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </main>
        </SiteContainer>
      )}
    </>
  );
};
export default App;
