import React, { useState, useEffect } from 'react'
import Fuse from 'fuse.js';
import { searchOptions } from '../constants';

const searchBar = (props) => {
  const [searchable, setSearchable] = useState([]);
  const [options, setOptions] = useState({});

  // Add glossary or resources to state, along with fuse options.
  useEffect(() => {
    if (props.resourses) {
      searchOptions['keys'] = [
        'fields.source_author',
        'fields.summary',
        'fields.title',
      ];
      setOptions(searchOptions);
      setSearchable(props.resources);
    } else if (props.glossary) {
      searchOptions['keys'] = ['fields.definition', 'fields.term', 'fields.related_term_names'];
      setOptions(searchOptions);
      setSearchable(props.glossary);
    }
  }, [props]);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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
    <>
      <input
        type='search'
        placeholder='search'
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
      {/* @todo: create context for these results to pass data to cardList */}
      {searchResults && searchResults.map((result, i) => {
        console.log('result.matches', result.matches);
        console.log('result.item', result.item);
      })}
    </>
  );
}

export default searchBar
