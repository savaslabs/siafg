import React, { useContext, useEffect } from 'react';
import Card from './card';
import { ArchiveContext } from '../context/archiveContext';
import { AppDataContext } from '../context/appDataContext';
import styled from 'styled-components';

const CardListContainer = styled.ul`
  margin-top: 0;
`;

const CardListItem = styled.li`
  &:not(:first-child) {
    margin-top: 25px;
  }

  &:last-child {
    margin-bottom: 250px;
  }
`;

const cardList = props => {
  const { glossary, resources } = useContext(AppDataContext);
  const { searchResults, searchTerm } = useContext(ArchiveContext);

  const renderResults = () => {
    if (searchResults !== undefined && searchResults.length > 0) {
      if (props.page === 'Glossary') {
        return (
          <>
            {searchResults.map((result, idx) => {
              return (
                <CardListItem key={idx}>
                  <Card term={result.item} search={searchTerm} page={props.page} />
                </CardListItem>
              );
            })}
          </>
        );
      }
      if (props.page === 'Resources') {
        return (
          <>
            {searchResults.map((result, idx) => {
              return (
                <CardListItem key={idx}>
                  <Card resource={result.item} search={searchTerm} page={props.page} index={idx} />
                </CardListItem>
              );
            })}
          </>
        );
      }
    } else {
      if (props.page === 'Glossary' && glossary) {
        return (
          <>
            {glossary.map((term, idx) => {
              return (
                <CardListItem key={idx}>
                  <Card term={term} page={props.page} />
                </CardListItem>
              );
            })}
          </>
        );
      }
      if (props.page === 'Resources' && resources) {
        return (
          <>
            {resources.map((resource, idx) => {
              return (
                <CardListItem key={idx}>
                  <Card resource={resource} page={props.page} index={idx} />
                </CardListItem>
              );
            })}
          </>
        );
      }
    }
  };

  return (
    <>
      {props.page === 'Answer' ? <h2>Related Articles</h2> : null}
      <CardListContainer>
        {props.items &&
          props.items.map((resource, idx) => (
            <CardListItem key={idx}>
              <Card page={props.page} resource={resource} />
            </CardListItem>
          ))}
        {renderResults()}
      </CardListContainer>
    </>
  );
};

export default cardList;
