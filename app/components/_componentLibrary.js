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
      <CTA primary href='#' text='Click Me!' />
      {/* White with gradient border */}
      <CTA secondary href='#' text='Click Me!' />
      {/* Gradient */}
      <CTA tertiary href='#' text='Click Me!' />
      <SearchBar />
      <Share />
    </>
  );
}

export default componentLibrary
