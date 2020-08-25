import React, { useContext } from 'react';
import { AppDataContext } from '../context/appDataContext';
import reactStringReplace from 'react-string-replace';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown/with-html';

const MatchSpan = styled.span`
  border-bottom: 1px dashed ${props => props.theme.colors.primaryPurple};
  position: relative;
  z-index: 100;
`;

const GlossaryTooltip = ({ textToReplace }) => {
  const { glossary, highlightedTerms } = useContext(AppDataContext);
  const renderReplacementText = text => {
    let matchesFound = [];
    return reactStringReplace(text, highlightedTerms, (match, i) => {
      if (!matchesFound.includes(match)) {
        matchesFound = [...matchesFound, match];
        return (
          <React.Fragment key={match + i}>
            <MatchSpan data-tip data-for={`${match}-tooltip`} key={match + i}>
              {match}
            </MatchSpan>
            <ReactTooltip
              id={`${match}-tooltip`}
              effect="solid"
              place="bottom"
              backgroundColor="#181818"
              textColor="#fff"
              className="glossary-tooltip"
              wrapper="span"
              key={`${match}-${i}-tooltip`}
            >
              <span key={`${match}-${i}-definition`}>
                {
                  glossary.filter(term => {
                    const termMatches = term?.terms_to_highlight.split('|');
                    return termMatches.includes(match.toLowerCase());
                  })[0]?.definition
                }
              </span>
            </ReactTooltip>
          </React.Fragment>
        );
      } else {
        return match;
      }
    });
  };

  return (
    <ReactMarkdown
      source={textToReplace}
      renderers={{ text: text => renderReplacementText(text.value) }}
    />
  );
};

export default GlossaryTooltip;
