import React from 'react';
import Card from './card';

const cardList = () => {
  const list = [ 'card 1', 'card 2'];
  return (
    <>
      <p>I'm a card list</p>
      <ul>
        {list.map((title, idx) => (
          <li key={idx}>
            <Card title={title} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default cardList;
