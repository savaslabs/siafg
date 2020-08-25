import React, { useState, createContext } from 'react';
import QuestionData from '../assets/data/questions-data.json';
import ResourceData from '../assets/data/resources-data.json';
import GlossaryData from '../assets/data/glossary-data.json';
import AnswersData from '../assets/data/answers-data.json';
import OptionsData from '../assets/data/options-data.json';
import HighlightedTermsData from '../assets/data/glossaryHighlightedTerms-data.json'

export const AppDataContext = createContext();

export const AppDataProvider = props => {
  const [questions, setQuestions] = useState([]);
  const [resources, setResources] = useState([]);
  const [glossary, setGlossary] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [options, setOptions] = useState([]);
  const [highlightedTerms, setHighlightedTerms] = useState('');
  const [matchedTerms, setMatchedTerms] = useState([]);

  const getAllData = () => {
    setQuestions(QuestionData);
    setResources(ResourceData);
    setGlossary(GlossaryData);
    setAnswers(AnswersData);
    setOptions(OptionsData);
    const termsRegexString = HighlightedTermsData[0]?.glossary_regex_terms?.replace(/\s/g, '\\s');
    const termsRegex = new RegExp(`\\b(${termsRegexString})\\b`, 'gi');
    setHighlightedTerms(termsRegex);
  };

  return (
    <AppDataContext.Provider
      value={{
        getAllData,
        questions,
        resources,
        glossary,
        answers,
        options,
        highlightedTerms,
        matchedTerms,
        setMatchedTerms,
      }}
    >
      {props.children}
    </AppDataContext.Provider>
  );
};
