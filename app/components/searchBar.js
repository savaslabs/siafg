import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Fuse from 'fuse.js';
import { ArchiveContext } from '../context/archiveContext';
import { searchOptions } from '../constants';
import styled from 'styled-components';

const SearchBar = styled.input`
  border-radius: 100px;
  border: 3px solid #181818;
  padding: 11px 25px;

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
      searchOptions['keys'] = ['fields.source_author', 'fields.summary', 'fields.title'];
      setOptions(searchOptions);
      setSearchable(resources);
    }
  }, [resources]);

  // Add glossary to state, along with fuse options.
  useEffect(() => {
    if (glossary !== undefined && path === 'glossary') {
      searchOptions['keys'] = ['fields.definition', 'fields.term', 'fields.related_term_names'];
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
    <SearchBar type="search" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
  );
};

export default searchBar;
