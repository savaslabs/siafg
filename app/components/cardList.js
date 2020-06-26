import React, { useState, useEffect, useMemo } from 'react';
import Card from './card';
// Only import this for search discovery
import SearchBar from './searchBar';
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
        {/* Temporarily pass this info to fake search bar */}
        {props.page === 'Glossary' && glossary && (
          <>
            <SearchBar glossary={glossary} />
            {glossary.map((term, idx) => {
              return (
                <li key={idx}>
                  <Card term={term} page={props.page} />
                </li>
              );
            })}
          </>
        )}
        {/* Temporarily pass this info to fake search bar */}
        {props.page === 'Resources' && resources && (
          <>
            <SearchBar resources={resources} />
            {resources.map((resource, idx) => {
              return (
                <li key={idx}>
                  <Card resource={resource} page={props.page} />
                </li>
              );
            })}
          </>
        )}
      </ul>
    </>
  );
};

export default cardList;
