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

const SearchOutline = styled.div`
  border-radius: 100px;
  border: 3px solid ${(props) => props.theme.colors.charcoal};
  padding: 11px 25px;
  max-width: 375px;
  display: flex;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  font-size: 16px;
  appearance: none;
  border: 0;
  margin: 0;
  background: none;
  width: calc(100% - 20px);

  &:focus {
    outline: none;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-webkit-input-placeholder {
    font-style: italic;
  }
`;

const NoResultsText = styled.p`
  height: auto;
  margin: inherit;
  padding-top: 10px;

  em {
    color: ${(props) => props.theme.colors.primaryPurple};
  }

  a {
    font-weight: bold;
  }
`;

const ClearSearch = styled.button`
  background: url(${clearSearch}) center/cover no-repeat;
  width: 15px;
  height: 15px;
  align-self: center;
  border: 0;
`;

const SearchBar = () => {
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
    if (resources && path === 'resources') {
      searchOptions.keys = [
        'source_author',
        'summary',
        'title',
      ];
      setOptions(searchOptions);
      setSearchable(resources);
    }
  }, [resources, path]);

  // Add glossary to state, along with fuse options.
  useEffect(() => {
    if (glossary && path === 'glossary') {
      searchOptions.keys = ['definition', 'term'];
      setOptions(searchOptions);
      setSearchable(glossary);
    }
  }, [glossary, path]);

  const handleSearch = async (event) => {
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
      <SearchOutline>
        <SearchInput
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          ref={inputRef}
          aria-label="Enter search term."
        />
        {showButton() && (
          <ClearSearch onClick={clearSearchTerm}>
            <span className="sr-only">Clear Search</span>
          </ClearSearch>
        )}
      </SearchOutline>
      {searchResults.length === 0 && searchTerm.length > 1 && (
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDuration={50}
          animationOutDuration={50}
          animateOnMount={false}
          className="no-results"
        >
          <NoResultsText>
            <em>No results found</em>
            <br />
            <a href="mailto:info@savaslabs.com">Email us</a> to add a term.
          </NoResultsText>
        </Animated>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
