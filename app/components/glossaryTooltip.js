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
              effect="solid"
              place="top"
              backgroundColor="#181818"
              textColor="#fff"
              multiline
              className="glossary-tooltip"
            >
              <span key={i}>
                {
                  glossary.filter(term => {
                    return term?.fields.terms_to_highlight?.includes(match);
                  })[0]?.fields.definition
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

  return <div style={{ lineHeight: 1.4 }}>{replacedText}</div>;
};

export default GlossaryTooltip;
