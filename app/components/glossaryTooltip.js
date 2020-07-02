import React, { useContext, useState, useEffect } from 'react';
import reactStringReplace from 'react-string-replace';
import { AppDataContext } from '../context/appDataContext';
import ReactTooltip from 'react-tooltip';

const GlossaryTooltip = ({ textToReplace, cardIndex }) => {
  const { glossary, highlightedTerms } = useContext(AppDataContext);
  const [replacedText, setReplacedText] = useState('');

  const renderReplacementText = () => {
    return reactStringReplace(textToReplace, highlightedTerms, (match, i) => (
      <div key={match + i} style={{ display: 'inline-block' }}>
        <span
          style={{ borderBottom: '2px solid #D1C6F3' }}
          data-tip
          data-for={`${match}-tooltip`}
        >
          {match}
        </span>
        <ReactTooltip id={`${match}-tooltip`}>
          <p>
            {glossary
              .filter((term) => {
                return term.fields.terms_to_highlight?.includes(match);
              })
              .map((termVal, i) => {
                return <span key={i}>{termVal.fields.definition}</span>;
              })}
          </p>
        </ReactTooltip>
      </div>
    ));
  };

  useEffect(() => {
    if (highlightedTerms) {
      setReplacedText(renderReplacementText());
    }
  }, [highlightedTerms]);

  return <>{replacedText}</>;
};

export default GlossaryTooltip;
