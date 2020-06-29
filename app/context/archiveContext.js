import React, { useState, createContext } from 'react';
export const ArchiveContext = createContext();

export const ArchiveProvider = props => {
  const [searchResults, setSearchResults] = useState([]);
  const { glossary, resources } = props

  return (
    <ArchiveContext.Provider value={{ searchResults, setSearchResults, glossary, resources }}>
      {props.children}
    </ArchiveContext.Provider>
  )
}
