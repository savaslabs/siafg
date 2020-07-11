import React from 'react';
import CTA from './cta';
import SearchBar from './searchBar';
import Share from './share';

const componentLibrary = () => {
  return (
    <>
      <h2>Components</h2>
      {/* White with purple border */}
      <CTA styletype="primary" to="#" text="Click Me!" />
      {/* White with gradient border */}
      <CTA secondary to="#" text="Click Me!" />
      {/* Gradient */}
      <CTA styletype="primary" to="#" text="Click Me!" />
      <Share />
    </>
  );
};

export default componentLibrary;
