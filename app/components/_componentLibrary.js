import React from 'react'
import Card from './card'
import CardList from './cardList'
import CTA from './cta'
import SearchBar from './searchBar'
import Share from './share'

const componentLibrary = () => {
  return (
    <>
      <h2>Components</h2>
      <Card title='Just a card' />
      <CardList />
      {/* White with purple border */}
      <CTA primary />
      {/* White with gradient border */}
      <CTA secondary />
      {/* Gradient */}
      <CTA tertiary />
      <SearchBar />
      <Share />
    </>
  );
}

export default componentLibrary
