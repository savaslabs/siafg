import React, { useContext, useState, useEffect } from 'react';
import reactStringReplace from 'react-string-replace';
import { AppDataContext } from '../context/appDataContext';
import ReactTooltip from 'react-tooltip';
import styled, { createGlobalStyle } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const ToolTipStyles = createGlobalStyle`

  .glossary-tooltip {
    max-width: 300px;
    font-size: 16px !important;
    line-height: 1.25;
    box-shadow: 0px 2px 12px 0px rgba(253, 229, 229, 0.1);

    ${breakpoint('lg')`
      max-width: 400px;
    `}

    &.show {
      opacity: 0.95 !important;
    }
  }
`;

const MatchSpan = styled.span`
  border-bottom: 1px dashed ${props => props.theme.colors.primaryPurple};
  position: relative;
  z-index: 100;
`;

const GlossaryTooltip = ({ textToReplace }) => {
  const { glossary, highlightedTerms } = useContext(AppDataContext);
  const [replacedText, setReplacedText] = useState('');

  const renderReplacementText = () => {
    let matchesFound = [];
    return reactStringReplace(textToReplace, highlightedTerms, (match, i) => {
      if (!matchesFound.includes(match)) {
        matchesFound = [...matchesFound, match];
        return (
          <MatchSpan data-tip data-for={`${match}-tooltip`} key={match + i}>
            {match}
            <ReactTooltip
              id={`${match}-tooltip`}
              effect="solid"
              place="bottom"
              backgroundColor="#181818"
              textColor="#fff"
              multiline
              className="glossary-tooltip"
            >
              <span key={i}>
                {
                  glossary.filter(term => {
                    return term?.fields.terms_to_highlight?.includes(match.toLowerCase());
                  })[0]?.fields.definition
                }
              </span>
            </ReactTooltip>
          </MatchSpan>
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

  return (
    <>
      <ToolTipStyles />
      <div>{replacedText}</div>
    </>
  );
};

export default GlossaryTooltip;
