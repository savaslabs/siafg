import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlighter';
import GlossaryTooltip from './glossaryTooltip';
import { Animated } from 'react-animated-css';
import breakpoint from 'styled-components-breakpoint';

const Card = styled.article`
  box-shadow: 0 8px 4px -4px rgba(89, 62, 191, 0.3);
  transition: box-shadow 0.5s ease-out;
  padding: 20px;
  background: white;
  border-radius: 10px;
  position: relative;
  line-height: 1.5;
  font-size: 18px;

  ${breakpoint('lg')`
    font-size: 20px;
    padding: 30px 70px;
  `}

  ${breakpoint('sm', 'lg')`
    h1 {
      font-size: 21px;
      margin-top: 0;
    }

    & > p {
      margin-bottom: 0;
    }

    & > div:not(.answer) {
      display: none;
    }
  `}

  &:hover {
    box-shadow: 0 8px 10px -4px rgba(89, 62, 191, 0.5);
  }
`;

const RelatedTerm = styled.a`
  margin-left: 10px;
  color: ${props => props.theme.colors.primaryPurple};
  font-weight: 600;

  ${breakpoint('sm', 'lg')`
    font-size: 16px;
  `}

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  padding: 0 11px;
`;

const Attribution = styled.span`
  font-weight: 600;
  color: ${props => props.theme.colors.charcoal};

  ${breakpoint('sm', 'lg')`
    font-size: 16px;
  `}
`;

const CardLink = styled.a`
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const HighlightMark = styled.mark`
  background-color: ${props => props.theme.colors.highlighter};
  color: inherit;
`;

const card = ({ answer, term, explanation, resource, page, search, index, listLength }) => {
  let title;

  // Process glossary term name for id or href.
  const cleanTerm = name => {
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
    return (
      <>
        {search ? (
          <p>
            <Highlight matchElement={HighlightMark} search={search}>
              {resource?.fields.summary}
            </Highlight>
          </p>
        ) : (
          <GlossaryTooltip textToReplace={resource?.fields.summary} />
        )}

        <p>
          {search && (
            <Highlight matchElement={HighlightMark} search={search}>
              {resource?.fields.source_author}
            </Highlight>
          )}
          {resource && (
            <Attribution>
              {resource.fields.source_author ? resource.fields.source_author : ''}
              {resource.fields.date && (
                <>
                  <Separator>&ndash;</Separator>
                  {new Date(resource.fields.date).toLocaleString('en-US', { dateStyle: 'short' })}
                </>
              )}
            </Attribution>
          )}
        </p>
      </>
    );
  };

  return (
    <Animated
      animationIn={answer ? 'fadeInDown' : 'fadeInUp'}
      animationOut="fadeOutUp"
      animationInDuration={index === 0 ? 800 : 500}
      animationOutDuration={800}
      animationInDelay={(listLength - index) * 15}
    >
      <Card {...renderId()}>
        <h1>
          {search ? (
            <Highlight matchElement={HighlightMark} search={search}>
              {renderH1()}
            </Highlight>
          ) : (
            renderH1()
          )}
        </h1>
        {explanation && (
          <div className="answer">
            <GlossaryTooltip textToReplace={explanation} className="answer" />
          </div>
        )}
        {renderResourceFields()}
        {page === 'Glossary' && (
          <>
            {term.fields.definition && (
              <p>
                {search ? (
                  <Highlight matchElement={HighlightMark} search={search}>
                    {term.fields.definition}
                  </Highlight>
                ) : (
                  term.fields.definition
                )}
              </p>
            )}
            {term.fields.related_term_names && (
              <div>
                See also:
                {term.fields.related_term_names.map((related, index) => {
                  return (
                    <RelatedTerm href={`#${cleanTerm(related)}`} key={index} search={search}>
                      {related}
                    </RelatedTerm>
                  );
                })}
              </div>
            )}
          </>
        )}
        <CardLink href={resource?.fields.link}></CardLink>
      </Card>
    </Animated>
  );
};

export default card;
