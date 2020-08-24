import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Highlight from 'react-highlighter';
import GlossaryTooltip from './GlossaryTooltip';
import { Animated } from 'react-animated-css';
import breakpoint from 'styled-components-breakpoint';
import ReactMarkdown from 'react-markdown';

const CardWrapper = styled.article`
  box-shadow: 0px 4px 4px rgba(89, 62, 191, 0.3);
  transition: box-shadow 0.5s ease-out;
  padding: 20px;
  background: white;
  border-radius: 10px;
  position: relative;
  line-height: 1.5;
  font-size: 18px;

  ${breakpoint('sm')`
    & > div.resource-summary {	
      display: none;	
    }
  `}

  ${breakpoint('md')`
    & > div.resource-summary {	
      display: block;	
    }
  `}

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
  `}

  &:hover,
  &:focus {
    box-shadow: 4px 4px 15px rgba(89, 62, 191, 0.3);
  }
`;

const RelatedTermText = styled.span`
  white-space: nowrap;
  padding-right: 10px;
`;

const RelatedTermContainer = styled.span`
  display: flex;
  margin-top: 10px;
  width: 100%;

  ${breakpoint('lg')`
    margin-top: 0;
  `}
`;

const RelatedTermWrapper = styled.div`
  display: inline;
`;

const RelatedTerm = styled.button`
  margin-left: 12px;
  color: ${props => props.theme.colors.primaryPurple};
  font-weight: 600;
  appearance: none;
  border: 0;
  background: transparent;
  font-size: 20px;
  font-family: inherit;
  padding: 0;

  ${breakpoint('sm', 'lg')`
    font-size: 16px;
  `}

  &:first-child {
    margin-left: 0;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
    cursor: pointer;
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

  .answer-card {
    position: relative;
    z-index: 11;
  }
`;

const Card = ({ answer, term, explanation, resource, page, search, index, listLength }) => {
  // eslint-disable-next-line
  let title;

  const scrollToTerm = e => {
    // const mainArea = document.getElementById('main-area');
    const element = document.getElementById(e.currentTarget.value);
    // const { top } = element?.getBoundingClientRect();
    // console.log(element?.getBoundingClientRect());
    element.scrollIntoView({ behavior: 'smooth' });
  };

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
          <div className="resource-summary">
            <GlossaryTooltip textToReplace={resource?.fields.summary} />
          </div>
        )}

        {resource && (
          <Attribution>
            {resource.fields.source_author ? resource.fields.source_author : ''}
            {resource.fields.date && (
              <>
                <Separator>&ndash;</Separator>
                {new Date(resource.fields.date).toLocaleString('en-US', {
                  dateStyle: 'short',
                })}
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
      className={answer && 'answer-card'}
    >
      <HighlightMarkStyles />
      <CardWrapper {...renderId()} className="card">
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
              <RelatedTermContainer>
                <RelatedTermText>See also:</RelatedTermText>
                <RelatedTermWrapper>
                  {term.fields.related_term_names.map((related, index) => {
                    return (
                      <RelatedTerm
                        onClick={scrollToTerm}
                        value={cleanTerm(related)}
                        key={index}
                        search={search}
                      >
                        {related}
                      </RelatedTerm>
                    );
                  })}
                </RelatedTermWrapper>
              </RelatedTermContainer>
            )}
          </>
        )}
        {resource?.fields.link && (
          <CardLink href={resource?.fields.link} target="_blank">
            <span className="sr-only">{`Open ${resource?.fields.title} in new window.`}</span>
          </CardLink>
        )}
      </CardWrapper>
    </Animated>
  );
};

export default Card;
