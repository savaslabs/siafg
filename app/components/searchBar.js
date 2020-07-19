import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Fuse from 'fuse.js';
import styled from 'styled-components';
import { ArchiveContext } from '../context/archiveContext';
import { searchOptions } from '../constants';
import breakpoint from 'styled-components-breakpoint';

const SearchContainer = styled.div`
  padding: 0 30px;

  ${breakpoint('lg')`
    padding: 0 0 0 84px;
  `}
`;

const SearchBar = styled.input`
  border-radius: 100px;
  border: 3px solid ${props => props.theme.colors.charcoal};
  padding: 11px 25px;
  width: 100%;

  &::-webkit-input-placeholder {
    font-style: italic;
  }
`;

const searchBar = () => {
  const { glossary, resources, setSearchResults, searchTerm, setSearchTerm } = useContext(
    ArchiveContext
  );
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  const [searchable, setSearchable] = useState([]);
  const [options, setOptions] = useState({});

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
      searchOptions.keys = ['fields.definition', 'fields.term', 'fields.related_term_names'];
      setOptions(searchOptions);
      setSearchable(glossary);
    }
  }, [glossary]);

  const handleSearch = async event => {
    setSearchTerm(event.target.value);

    if (searchable.length > 0) {
      const fuse = new Fuse(searchable, options);
      const foundResults = await fuse.search(searchTerm);
      setSearchResults(foundResults);
    }
  };

  return (
    <SearchContainer>
      <SearchBar type="search" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
    </SearchContainer>
  );
};

export default searchBar;
