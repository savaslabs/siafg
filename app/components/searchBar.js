import React, { useState, useEffect, useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Animated } from 'react-animated-css';
import Fuse from 'fuse.js';
import styled from 'styled-components';
import { ArchiveContext } from '../context/archiveContext';
import { searchOptions } from '../constants';
import breakpoint from 'styled-components-breakpoint';
import clearSearch from '../assets/clear-search.svg';

const SearchContainer = styled.div`
  padding: 0 30px;

  ${breakpoint('md')`
    padding: 0 60px;
  `}

  ${breakpoint('lg')`
    padding: 0 0 0 84px;
  `}
`;

const SearchBar = styled.input`
  border-radius: 100px;
  border: 3px solid ${props => props.theme.colors.charcoal};
  padding: 11px 25px;
  width: 100%;
  max-width: 375px;
  font-size: 16px;
  appearance: none;
  display: block;

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-webkit-input-placeholder {
    font-style: italic;
  }
`;

const NoResultsText = styled.p`
  margin: 0;

  em {
    color: ${props => props.theme.colors.primaryPurple};
  }

  a {
    font-weight: bold;
  }
`;

const ClearSearch = styled.button`
  background: url(${clearSearch}) center/cover no-repeat;
  width: 15px;
  height: 15px;
  border: 0;
  position: relative;
  left: calc(100% - 35px);
  top: -35px;

  ${breakpoint('md')`
    left: 340px;
    top: -37px;
  `}

  ${breakpoint('lg')`
    left: calc(100% - 35px);
    top: -38px;
  `}
`;

const searchBar = () => {
  const {
    glossary,
    resources,
    searchResults,
    setSearchResults,
    searchTerm,
    setSearchTerm,
  } = useContext(ArchiveContext);
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  const [searchable, setSearchable] = useState([]);
  const [options, setOptions] = useState({});
  const inputRef = useRef(null);

  // Add resources to state, along with fuse options.
  useEffect(() => {
    if (resources !== undefined && path === 'resources') {
      searchOptions.keys = ['fields.source_author', 'fields.summary', 'fields.title'];
      setOptions(searchOptions);
      setSearchable(resources);
    }
  }, [resources]);

  // Add glossary to state, along with fuse options.
  useEffect(() => {
    if (glossary !== undefined && path === 'glossary') {
      searchOptions.keys = ['fields.definition', 'fields.term'];
      setOptions(searchOptions);
      setSearchable(glossary);
    }
  }, [glossary]);

  const handleSearch = async event => {
    setSearchTerm(event.target.value);

    if (searchable.length > 0) {
      const fuse = new Fuse(searchable, options);
      setSearchResults(fuse.search(event.target.value));
    }
  };

  const showButton = () => {
    const isFocused = inputRef.current?.matches(':focus');
    const isHovered = inputRef.current?.matches(':hover');
    return searchTerm.length > 0 && (isFocused || isHovered);
  };

  const clearSearchTerm = () => {
    setSearchTerm('');
  };

  return (
    <SearchContainer>
      <SearchBar
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        ref={inputRef}
      />
      {showButton() && <ClearSearch onClick={clearSearchTerm} />}
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={50}
        animationOutDuration={50}
        isVisible={searchResults.length === 0 && searchTerm.length > 1}
        animateOnMount={false}
        className="no-results"
      >
        <NoResultsText>
          <em>No results found</em>
          <br />
          <a href="mailto:info@savaslabs.com">Email us</a> to add a term.
        </NoResultsText>
      </Animated>
    </SearchContainer>
  );
};

export default searchBar;
