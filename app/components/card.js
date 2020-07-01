import React, { useContext } from 'react';
import CTA from './cta';
import styled from 'styled-components';
import Highlight from 'react-highlighter';
import reactStringReplace from 'react-string-replace';
import { GlossaryHighlightContext } from '../context/glossaryHighlightContext';

const Article = styled.article`
  color: black;
`;

const card = ({ answer, term, formattedText, resource, page, search }) => {
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

  const renderResourceFields = () => {
    let replacedSummary;
    const Terms = useContext(GlossaryHighlightContext);
    const { highlightedTerms } = Terms;
    if (highlightedTerms) {
      const regexVal = highlightedTerms[0]?.fields.glossary_regex_terms.replace(
        /\s/g,
        '\\s'
      );

      if (regexVal) {
        const regex = new RegExp(`(\\b${regexVal}\\b)`, 'g');
        console.log(regex);
        console.log(resource.fields.summary);
        replacedSummary = reactStringReplace(
          resource.fields.summary,
          regex,
          (match, i) => (
            <span key={match + i} style={{ color: 'red' }} title="Some title">
              {match}
            </span>
          )
        );
      }
    }
    switch (page) {
      case 'Resources' || 'Answer':
        return (
          <>
            <p>
              {search ? (
                <Highlight search={search}>{resource.fields.summary}</Highlight>
              ) : (
                replacedSummary
              )}
            </p>
            <p>
              {search ? (
                <Highlight search={search}>
                  {resource.fields.source_author}
                </Highlight>
              ) : (
                resource.fields.source_author
              )}
              | {resource.fields.date}
            </p>
            <a href={resource.fields.link}></a>
          </>
        );
    }
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
      {formattedText}
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
