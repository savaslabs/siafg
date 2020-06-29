import React, { useState, createContext } from 'react';
export const ArchiveContext = createContext();

export const ArchiveProvider = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { glossary, resources } = props

  return (
    <ArchiveContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchResults,
        setSearchResults,
        glossary,
        resources
      }}
    >
      {props.children}
    </ArchiveContext.Provider>
  )
}
