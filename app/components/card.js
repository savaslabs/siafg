import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Highlight from 'react-highlighter';
import GlossaryTooltip from './glossaryTooltip';
import { Animated } from 'react-animated-css';
import breakpoint from 'styled-components-breakpoint';
import ReactMarkdown from 'react-markdown';

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

const RelatedTermText = styled.span`
  white-space: nowrap;
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

const Attribution = styled.p`
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

const HighlightMarkStyles = createGlobalStyle`
  .card mark {
    background-color: ${props => props.theme.colors.highlighter};
    color: inherit;
  }
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
          <>
            <ReactMarkdown
              source={resource?.fields.summary}
              renderers={{
                text: text => {
                  return <Highlight search={search}>{text.value}</Highlight>;
                },
              }}
            />
          </>
        ) : (
          // ReactMarkdown is handled in GlossaryTooltip.
          <GlossaryTooltip textToReplace={resource?.fields.summary} />
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
      <HighlightMarkStyles />
      <Card {...renderId()} className="card">
        <h1>{search ? <Highlight search={search}>{renderH1()}</Highlight> : renderH1()}</h1>
        {explanation && (
          <div className="answer">
            <GlossaryTooltip textToReplace={explanation} className="answer" />
          </div>
        )}
        {renderResourceFields()}
        {page === 'Glossary' && (
          <>
            {term.fields.definition && (
              <>
                {search ? (
                  <ReactMarkdown
                    source={term.fields.definition}
                    renderers={{
                      text: text => {
                        return <Highlight search={search}>{text.value}</Highlight>;
                      },
                    }}
                  />
                ) : (
                  <ReactMarkdown source={term.fields.definition} />
                )}
              </>
            )}
            {term.fields.related_term_names && (
              <div>
                <RelatedTermText>See also:</RelatedTermText>
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
        {resource?.fields.link && <CardLink href={resource?.fields.link} />}
      </Card>
    </Animated>
  );
};

export default card;
