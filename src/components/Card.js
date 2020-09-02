import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Highlight from 'react-highlighter';
import GlossaryTooltip from './GlossaryTooltip';
import { Animated } from 'react-animated-css';
import breakpoint from 'styled-components-breakpoint';
import ReactMarkdown from 'react-markdown';

const CardWrapper = styled.article`
  border: solid 1px ${props => (props.isFocused ? props.theme.colors.primaryPurple : 'transparent')};
  box-shadow: 0px 4px 4px rgba(89, 62, 191, 0.3);
  transition: box-shadow 0.5s ease-out, border-color 0.2s;
  padding: 20px;
  background: white;
  border-radius: 10px;
  position: relative;
  line-height: 1.5;
  font-size: 18px;

  h1 {
    font-size: 24px;
    margin-top: 0;
  }

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
    padding: 30px 70px;
  `}

  ${breakpoint('sm', 'lg')`
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

  // For Cards with a CardLink, that element will get focus during keyboard
  // navigation. When that happens, we'll update the Card component's state so
  // we can give the entire Card a focus style.
  const [focused, setFocused] = useState(false);

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
      return { id: cleanTerm(term.term) };
    }
  };

  // Conditionally render level one heading.
  const renderH1 = () => {
    if (answer) {
      return (title = "And Here's Why...");
    } else if (page === 'Glossary') {
      return (title = term.term);
    } else {
      return (title = resource.title);
    }
  };

  const renderResourceFields = () => {
    return (
      <>
        {search ? (
          <>
            <ReactMarkdown
              source={resource?.summary}
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
            <GlossaryTooltip textToReplace={resource?.summary} />
          </div>
        )}

        {resource && (
          <Attribution>
            {resource.source_author ? resource.source_author : ''}
            {resource.date && (
              <>
                <Separator>&ndash;</Separator>
                {new Date(resource.date).toLocaleDateString('en-US', {
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
      <CardWrapper {...renderId()} className="card" isFocused={focused}>
        <h1>{search ? <Highlight search={search}>{renderH1()}</Highlight> : renderH1()}</h1>
        {explanation && (
          <div className="answer">
            <GlossaryTooltip textToReplace={explanation} className="answer" />
          </div>
        )}
        {renderResourceFields()}
        {page === 'Glossary' && (
          <>
            {term.definition && (
              <>
                {search ? (
                  <ReactMarkdown
                    source={term.definition}
                    renderers={{
                      text: text => {
                        return <Highlight search={search}>{text.value}</Highlight>;
                      },
                    }}
                  />
                ) : (
                  <ReactMarkdown source={term.definition} />
                )}
              </>
            )}
            {term.related_term_names && (
              <RelatedTermContainer>
                <RelatedTermText>See also:</RelatedTermText>
                <RelatedTermWrapper>
                  {term.related_term_names.map((related, index) => {
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
        {resource?.link && (
          <CardLink
            href={resource?.link}
            target="_blank"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          >
            <span className="sr-only">{`Open ${resource?.title} in new window.`}</span>
          </CardLink>
        )}
      </CardWrapper>
    </Animated>
  );
};

export default Card;
