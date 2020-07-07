import React, { useState, createContext } from 'react';
export const ArchiveContext = createContext();

export const ArchiveProvider = ({ glossary, resources, children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState('');

  return (
    <ArchiveContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchResults,
        setSearchResults,
        glossary,
        resources,
      }}
    >
      {children}
    </ArchiveContext.Provider>
  );
};
