import React, { useContext } from 'react';
import { ArchiveContext } from '../context/archiveContext';

const searchBar = (props) => {
  const { glossary, resources, searchResults, setSearchResults } = useContext(
    ArchiveContext
  );

  return <input type="search" placeholder="search"></input>;
};

export default searchBar;
