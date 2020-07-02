import React, { useContext, useState, useEffect } from 'react';
import reactStringReplace from 'react-string-replace';
import { AppDataContext } from '../context/appDataContext';
import ReactTooltip from 'react-tooltip';

const GlossaryTooltip = ({ textToReplace }) => {
  const { glossary, highlightedTerms } = useContext(AppDataContext);
  const [replacedText, setReplacedText] = useState('');

  const renderReplacementText = () => {
    return reactStringReplace(textToReplace, highlightedTerms, (match, i) => {
      if (i === 1) {
        return (
          <span
            style={{ borderBottom: '1px dashed #593EBF', paddingBottom: 2 }}
            data-tip
            data-for={`${match}-tooltip`}
            key={match + i}
          >
            {match}
            <ReactTooltip
              id={`${match}-tooltip`}
              data-effect="solid"
              data-place="top"
              backgroundColor="#fff"
              textColor="#593EBF"
              border
              borderColor="#593EBF"
              multiline
              className="glossary-tooltip"
            >
              <span key={i}>
                {
                  glossary.filter((term) => {
                    return term?.fields.terms_to_highlight?.includes(match);
                  })[0].fields.definition
                }
              </span>
            </ReactTooltip>
          </span>
        );
      } else {
        return match;
      }
    });
  };

  useEffect(() => {
    if (highlightedTerms) {
      setReplacedText(renderReplacementText());
    }
  }, [highlightedTerms, textToReplace]);

  return <>{replacedText}</>;
};

export default GlossaryTooltip;
