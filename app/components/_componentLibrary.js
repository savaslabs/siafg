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
      {/* @todo: update to use primary props. */}
      <CTA color='white-on-white' />
      {/* @todo: update to use secondary props. */}
      <CTA color='white-on-gradient' />
      {/* @todo: update to use tertiary props. */}
      <CTA color='gradient' />
      <SearchBar />
      <Share />
    </>
  );
}

export default componentLibrary
