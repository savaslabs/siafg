import React, { useContext, useEffect } from 'react';
import Card from './card';
import { ArchiveContext } from '../context/archiveContext';
import { AppDataContext } from '../context/appDataContext';
import styled, { css } from 'styled-components';

const generateZIndex = index => {
  if (index === 0) {
    return css`
      z-index: 10;
    `;
  } else {
    return css`
      z-index: ${10 - index > 0 ? 10 - index : 0};
    `;
  }
};

const CardListContainer = styled.ul`
  margin-top: 0;
  padding-bottom: 30px;
`;

const CardListItem = styled.li`
  position: relative;
  ${props => generateZIndex(props.index)};

  &:not(:first-child) {
    margin-top: 25px;
  }
`;

const cardList = props => {
  const { glossary, resources } = useContext(AppDataContext);
  const { searchResults, searchTerm } = useContext(ArchiveContext);

  const renderResults = () => {
    if (searchResults.length === 0 || searchTerm.length === 0) {
      if (props.page === 'Glossary' && glossary) {
        return (
          <>
            {glossary
              .sort((a, b) => {
                return a.fields.term - b.fields.term;
              })
              .map((term, idx) => {
                return (
                  <CardListItem key={idx} index={idx}>
                    <Card term={term} page={props.page} index={idx} listLength={glossary.length} />
                  </CardListItem>
                );
              })}
          </>
        );
      }
      if (props.page === 'Resources' && resources) {
        return (
          <>
            {resources
              .sort((a, b) => {
                return a.fields.date - b.fields.date;
              })
              .map((resource, idx) => {
                return (
                  <CardListItem key={idx} index={idx}>
                    <Card
                      resource={resource}
                      page={props.page}
                      index={idx}
                      listLength={resources.length}
                    />
                  </CardListItem>
                );
              })}
          </>
        );
      }
    } else {
      if (props.page === 'Glossary') {
        return (
          <>
            {searchResults.map((result, idx) => {
              return (
                <CardListItem key={idx} index={idx} index={idx}>
                  <Card
                    term={result.item}
                    search={searchTerm}
                    page={props.page}
                    index={idx}
                    listLength={searchResults.length}
                  />
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
                <CardListItem key={idx} index={idx}>
                  <Card
                    resource={result.item}
                    search={searchTerm}
                    page={props.page}
                    index={idx}
                    listLength={searchResults.length}
                  />
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
            <CardListItem key={idx} index={idx} listLength={props.items.length}>
              <Card page={props.page} resource={resource} index={idx} />
            </CardListItem>
          ))}
        {renderResults()}
      </CardListContainer>
    </>
  );
};

export default cardList;
