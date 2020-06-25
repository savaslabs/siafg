import React from 'react'
import CTA from './cta';
import styled from 'styled-components';

const Article = styled.article`
  color: black;
`;

const card = ({ answer, term, formattedText, resource, page }) => {
  let title;

  // Process glossay term name for id or href.
  const cleanTerm = name => {
    return name.toLowerCase().replace(/ /g, '_');
  };

  // Conditionally render id for glossary term articles.
  const renderId = () => {
    if (page === 'Glossary') {
      return (
        { id: cleanTerm(term.fields.term) }
      )
    }
  };

  // Conditionally render level one heading.
  const renderH1 = () => {
    if (answer) {
      return title = "And Here's Why...";
    } else if (page === 'Glossary') {
      return title = term.fields.term;
    } else {
      return title = resource.fields.title;
    }
  };

  const renderResourceFields = () => {
    if (page === 'Resources' || page === 'Answer') {
      return (
        <>
          <p>{resource.fields.summary}</p>
          <p>
            {resource.fields.source_author} | {resource.fields.date}
          </p>
          <a href={resource.fields.link}></a>
        </>
      )
    }
  }

  return (
    <Article className='shadow card' {...renderId()}>
      <h1>{renderH1()}</h1>
      {formattedText}
      {renderResourceFields()}
      {page === 'Glossary' && (
        <>
          {term.fields.definition && (<p>{term.fields.definition}</p>)}
          {term.fields.related_term_names && term.fields.related_term_names.map(
            (related, index) => {
              return (
                <CTA
                  tertiary
                  text={related}
                  size='24px'
                  href={`#${cleanTerm(related)}`}
                  key={index}
                />
              );
            }
          )}
        </>
      )}
    </Article>
  );
}

export default card
