import React, { useContext } from 'react';
import CTA from './cta';
import styled from 'styled-components';
import Highlight from 'react-highlighter';
import reactStringReplace from 'react-string-replace';
import { AppDataContext } from '../context/appDataContext';
import ReactTooltip from 'react-tooltip';

const Article = styled.article`
  color: black;
`;

const card = ({ answer, term, explanation, resource, page, search }) => {
  let title;

  // Process glossary term name for id or href.
  const cleanTerm = (name) => {
    return name.toLowerCase().replace(/ /g, '_');
  };

  // Conditionally render id for glossary term articles.
  const renderId = () => {
    if (page === 'Glossary') {
      return { id: cleanTerm(term.fields.term) };
    }
  };

  // Conditionally render level one heading.
  const renderH1 = () => {
    if (answer) {
      return (title = "And Here's Why...");
    } else if (page === 'Glossary') {
      return (title = term.fields.term);
    } else {
      return (title = resource.fields.title);
    }
  };

  const { glossary, highlightedTerms } = useContext(AppDataContext);
  let replacedSummary;
  const renderResourceFields = () => {
    if (highlightedTerms) {
      replacedSummary = reactStringReplace(
        resource?.fields.summary,
        highlightedTerms,
        (match, i) => (
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
        )
      );
    }

    return (
      <>
        {search ? (
          <p>
            <Highlight search={search}>{resource?.fields.summary}</Highlight>
          </p>
        ) : (
          replacedSummary
        )}

        <p>
          {search && (
            <Highlight search={search}>
              {resource?.fields.source_author}
            </Highlight>
          )}
          {resource && (
            <span>
              {resource.fields.source_author} | {resource.fields.date}
            </span>
          )}
        </p>
        <a href={resource?.fields.link}></a>
      </>
    );
  };

  return (
    <Article className="shadow card" {...renderId()}>
      <h1>
        {search ? (
          <Highlight search={search}>{renderH1()}</Highlight>
        ) : (
          renderH1()
        )}
      </h1>
      {explanation}
      {renderResourceFields()}
      {page === 'Glossary' && (
        <>
          {term.fields.definition && (
            <p>
              {search ? (
                <Highlight search={search}>{term.fields.definition}</Highlight>
              ) : (
                term.fields.definition
              )}
            </p>
          )}
          {term.fields.related_term_names &&
            term.fields.related_term_names.map((related, index) => {
              return (
                <CTA
                  tertiary
                  text={related}
                  size="24px"
                  href={`#${cleanTerm(related)}`}
                  key={index}
                  search={search}
                />
              );
            })}
        </>
      )}
    </Article>
  );
};

export default card;
