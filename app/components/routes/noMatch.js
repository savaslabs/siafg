import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NoMatchWrapper = styled.div`
  padding-top: 50vh;
  text-align: center;
`;

const noMatch = () => {
  let location = useLocation();

  return (
    <NoMatchWrapper>
      <h1>No match for {location.pathname}</h1>
    </NoMatchWrapper>
  );
}

export default noMatch;
