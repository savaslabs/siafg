import React, { useState, createContext } from 'react';
import { tables } from '../constants';
import { getRecordsList } from '../services/airtable-service';

export const AppDataContext = createContext();

export const AppDataProvider = props => {
  const [appData, setAppData] = useState({});
  const [questions, setQuestions] = useState([]);
  const [resources, setResources] = useState([]);
  const [glossary, setGlossary] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [options, setOptions] = useState([]);
  const [highlightedTerms, setHighlightedTerms] = useState('');
  const [matchedTerms, setMatchedTerms] = useState([]);

  const getAllData = async () => {
    await tables.forEach(async table => {
      const res = await getRecordsList(table, { params: { view: 'Grid view' } });
      switch (table) {
        case 'questions':
          setQuestions(res);
          break;
        case 'resources':
          setResources(res);
          break;
        case 'glossary':
          console.log(res);
          setGlossary(res);
          break;
        case 'answers':
          setAnswers(res);
          break;
        case 'options':
          setOptions(res);
          break;
        case 'glossary_highlighted_terms':
          const termsRegexString = res[0]?.fields.glossary_regex_terms?.replace(/\s/g, '\\s');
          const termsRegex = new RegExp(`\\b(${termsRegexString})\\b`, 'g');
          setHighlightedTerms(termsRegex);
          break;

        default:
          break;
      }
    });
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
