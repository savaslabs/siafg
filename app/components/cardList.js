import React from 'react';
import Card from './card';

const cardList = (props) => {
  const glossary = props.glossary;
  const resources = props.resources;

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
        {props.page === 'Glossary' && glossary && (
          glossary.map((term, idx) => {
            return (
              <li key={idx}>
                <Card term={term} page={props.page} />
              </li>
            );
          })
        )}
        {props.page === 'Resources' && resources && (
          resources.map((resource, idx) => {
            return (
              <li key={idx}>
                <Card resource={resource} page={props.page} />
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default cardList;
