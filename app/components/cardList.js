import React, { useState, useEffect, useMemo } from 'react';
import Card from './card';
import { getRecordsList } from '../services/airtable-service';

const cardList = (props) => {
  const [glossary, setGlossary] = useState([]);
  const [resources, setResources] = useState([]);
  useEffect(() => {
    if (props.page === 'Glossary') {
      getRecordsList('glossary').then((recordList) => {
        setGlossary(recordList);
      });
    } else if (props.page === 'Resources') {
      getRecordsList('resources').then((recordList) => {
        setResources(recordList);
      });
    }
  }, []);

  return (
    <>
      {props.page === 'Answer' ? <h2>Related Articles</h2> : null}
      <ul>
        {props.items &&
          props.items.map((resource, idx) => (
            <li key={idx}>
              <Card page={props.page} resource={resource} />
            </li>
          ))}
        {props.page === 'Glossary' &&
          glossary &&
          glossary.map((term, idx) => {
            return (
              <li key={idx}>
                <Card term={term} page={props.page} />
              </li>
            );
          })}
        {props.page === 'Resources' &&
          resources &&
          resources.map((resource, idx) => {
            return (
              <li key={idx}>
                <Card resource={resource} page={props.page} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default cardList;
