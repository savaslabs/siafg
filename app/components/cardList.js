import React, { useContext, useEffect } from 'react';
import Card from './card';
import { ArchiveContext } from '../context/archiveContext';
import { AppDataContext } from '../context/appDataContext';

const cardList = (props) => {
  const { glossary, resources } = useContext(AppDataContext);
  const { searchResults, searchTerm } = useContext(ArchiveContext);

  const renderResults = () => {
    if (searchResults !== undefined && searchResults.length > 0) {
      if (props.page === 'Glossary') {
        return (
          <>
            {searchResults.map((result, idx) => {
              return (
                <li key={idx}>
                  <Card
                    term={result.item}
                    search={searchTerm}
                    page={props.page}
                  />
                </li>
              );
          })}
        </>
        )

      } else if (props.page === 'Resources') {
        return (
          <>
            {searchResults.map((result, idx) => {
              return (
                <li key={idx}>
                  <Card
                    resource={result.item}
                    search={searchTerm}
                    page={props.page}
                    index={idx}
                  />
                </li>
              );
            })}
          </>
        )
      }
    } else {
      if (props.page === 'Glossary' && glossary) {
        return (
          <>
            {glossary.map((term, idx) => {
              return (
                <li key={idx}>
                  <Card term={term} page={props.page} />
                </li>
              );
            })}
          </>
        )
      } else if (props.page === 'Resources' && resources) {
        return (
          <>
            {resources.map((resource, idx) => {
              return (
                <li key={idx}>
                  <Card resource={resource} page={props.page} index={idx} />
                </li>
              );
            })}
          </>
        )
      }
    }
  }

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
        {renderResults()}
      </ul>
    </>
  );
};

export default cardList;
