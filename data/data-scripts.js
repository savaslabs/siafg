const fs = require('fs');
const path = require('path');
const airtableJson = require('airtable-json').default;

const dest = {
  resources: {
    path: 'src/assets/data',
    file: 'resources-data.json',
  },
  questions: {
    path: 'src/assets/data',
    file: 'questions-data.json',
  },
  glossary: {
    path: 'src/assets/data',
    file: 'glossary-data.json',
  },
  answers: {
    path: 'src/assets/data',
    file: 'answers-data.json',
  },
  options: {
    path: 'src/assets/data',
    file: 'options-data.json',
  },
  glossaryHighlightedTerms: {
    path: 'src/assets/data',
    file: 'glossaryHighlightedTerms-data.json',
  },
};

const airtable = async () => {
  let questions = await airtableJson({
    auth_key: 'keyIveHQ90JLZtwtw',
    base_name: 'appfCE2iZ73VsQ1nY',
    primary: 'questions',
    view: 'Grid view',
    populate: [
      {
        local: 'options',
        other: 'options',
      },
      {
        local: 'referencing_options',
        other: 'options',
      },
    ],
  });

  const QUESTIONS = path.join(dest.questions.path);
  if (!fs.existsSync(QUESTIONS)) fs.mkdirSync(QUESTIONS);

  fs.writeFileSync(
    path.join(dest.questions.path, dest.questions.file),
    JSON.stringify(questions, null, 2)
  );

  let answers = await airtableJson({
    auth_key: 'keyIveHQ90JLZtwtw',
    base_name: 'appfCE2iZ73VsQ1nY',
    primary: 'answers',
    view: 'Grid view',
    populate: [
      {
        local: 'articles',
        other: 'resources',
      },
      {
        local: 'referencing_options',
        other: 'options',
      },
    ],
  });

  const ANSWERS = path.join(dest.answers.path);
  if (!fs.existsSync(ANSWERS)) fs.mkdirSync(ANSWERS);

  fs.writeFileSync(
    path.join(dest.answers.path, dest.answers.file),
    JSON.stringify(answers, null, 2)
  );

  let options = await airtableJson({
    auth_key: 'keyIveHQ90JLZtwtw',
    base_name: 'appfCE2iZ73VsQ1nY',
    primary: 'options',
    view: 'Grid view',
    populate: [
      {
        local: 'next_question',
        other: 'questions',
      },
      {
        local: 'answer',
        other: 'answers',
      },
      {
        local: 'referencing_questions',
        other: 'questions',
      },
    ],
  });

  const OPTIONS = path.join(dest.options.path);
  if (!fs.existsSync(OPTIONS)) fs.mkdirSync(OPTIONS);
  fs.writeFileSync(
    path.join(dest.options.path, dest.options.file),
    JSON.stringify(options, null, 2)
  );

  let resources = await airtableJson({
    auth_key: 'keyIveHQ90JLZtwtw',
    base_name: 'appfCE2iZ73VsQ1nY',
    primary: 'resources',
    view: 'Grid view',
    populate: [
      {
        local: 'answers',
        other: 'answers',
      },
    ],
  });

  const RESOURCES = path.join(dest.resources.path);
  if (!fs.existsSync(RESOURCES)) fs.mkdirSync(RESOURCES);
  fs.writeFileSync(
    path.join(dest.resources.path, dest.resources.file),
    JSON.stringify(resources, null, 2)
  );

  let glossary = await airtableJson({
    auth_key: 'keyIveHQ90JLZtwtw',
    base_name: 'appfCE2iZ73VsQ1nY',
    primary: 'glossary',
    view: 'Grid view',
    populate: [
      {
        local: 'related_terms',
        other: 'glossary',
      },
      {
        local: 'glossary_highlighted_terms',
        other: 'glossary_highlighted_terms',
      },
    ],
  });

  const GLOSSARY = path.join(dest.glossary.path);
  if (!fs.existsSync(GLOSSARY)) fs.mkdirSync(GLOSSARY);
  fs.writeFileSync(
    path.join(dest.glossary.path, dest.glossary.file),
    JSON.stringify(glossary, null, 2)
  );

  let glossaryHighlightedTerms = await airtableJson({
    auth_key: 'keyIveHQ90JLZtwtw',
    base_name: 'appfCE2iZ73VsQ1nY',
    primary: 'glossary_highlighted_terms',
    view: 'Grid view',
    populate: [
      {
        local: 'glossary_terms',
        other: 'glossary',
      },
    ],
  });

  const GLOSSARY_TERMS = path.join(dest.glossaryHighlightedTerms.path);
  if (!fs.existsSync(GLOSSARY_TERMS)) fs.mkdirSync(GLOSSARY_TERMS);
  fs.writeFileSync(
    path.join(dest.glossaryHighlightedTerms.path, dest.glossaryHighlightedTerms.file),
    JSON.stringify(glossaryHighlightedTerms, null, 2)
  );
};

airtable();
