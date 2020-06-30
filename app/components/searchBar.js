import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Fuse from 'fuse.js';
import { ArchiveContext } from '../context/archiveContext';
import { searchOptions } from '../constants';

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
      searchOptions['keys'] = [
        'fields.source_author',
        'fields.summary',
        'fields.title',
      ];
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

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

  const handleEnter = async (event) => {
    if (event.keyCode === 13) {
      if (searchable.length > 0) {
        const fuse = new Fuse(searchable, options);
        const foundResults = await fuse.search(searchTerm);
        setSearchResults(foundResults);
      }
    }
  }

  return (
      <input
        type='search'
        placeholder='search'
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
  )
};

export default searchBar;
