import React, { useState, useEffect } from 'react'
import { getSingleRecord } from '../services/airtable-service';
import styled from 'styled-components';

const Article = styled.article`
  color: black;
`;
const card = ({ answer, term, resource, page, formattedText }) => {
  // const [terms, setTerms] = useState([]);

  // // Fetch related Terms for each Glossary Item.
  // useEffect(() => {
  //   return () => {
  //     term.fields.relatedTerms.map((term, index) => {
  //       getSingleRecord('glossary', term).then((record) => {
  //         setTerms(record);
  //       });
  //     });
  //   };
  // }, [term]);

  // Conditionally render level one heading.
  const h1 = () => {
    if (answer) {
      return <h1>And Here's Why...</h1>
    } else if (page === 'Glossary') {
      return <h1>{term.fields.term}</h1>
    } else {
      return <h1>{resource.fields.title}</h1>
    }
  };

  return (
    <Article className='shadow card'>
      {h1()}
      {formattedText}
      {page === 'Resources' || page === 'Answer' && (
        <>
          <p>{resource.fields.summary}</p>
          <p>{resource.fields.source_author} | {resource.fields.date}</p>
          <a href={resource.fields.link}></a>
        </>
      )}
      {/* Render each related term as a CTA */}
      {/* {page === 'Glossary' && terms && (
        <>
          {terms.map((word, index) => {
            return <CTA text={word} href='#' />;
          })}
        </>
      )} */}
    </Article>
  );
}

export default card
