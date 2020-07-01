import React, { useState, createContext } from 'react';

export const GlossaryHighlightContext = createContext();

export const GlossaryHighlightProvider = props => {
  const [highlightedTerms, setHighlightedTerms] = useState([]);

  return (
    <GlossaryHighlightContext.Provider value={{ highlightedTerms, setHighlightedTerms }}>
      {props.children}
    </GlossaryHighlightContext.Provider>
  )
}
