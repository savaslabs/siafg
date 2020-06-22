import React from 'react';
import SearchBar from '../searchBar';
import Share from '../share';
import styled from 'styled-components';

const Split = ({ page }) => {
  const options = [
    'Medical or Legal Reasons',
    'Demograpihc Information',
    'Profile Set Up',
    'Census Information'
  ];

  const SplitScreenWrapper = styled.div`
    display: flex;
    flex-direction: flex-row;
  `;

  const TitleArea = styled.div`
    width: 25%;
    background-color: white;
    padding-top: 100px;
  `;

  const MainArea = styled.div`
    width: 75%;
    background-color: transparent;
    padding-top: 100px;
  `;

  return (
    <SplitScreenWrapper>
      <h1 className='sr-only'>{page}</h1>
      <TitleArea>
        <h2>Title Text</h2>
        <p>Description/Help Text</p>
        <span>Help Tooltip</span>
        <SearchBar />
        <Share />
      </TitleArea>
      <MainArea>
        {page === 'Quiz' &&
          <>
            <legend>Select Your Best Response</legend>
            {options.map((option, index) => {
              return (
                <label htmlFor={option} key={index}>
                  {option}
                  <input
                    type='radio'
                    id={index}
                    value={option}
                    name='q-1'
                    aria-checked
                    data-next-step
                  />
                </label>
              )
            })}
          </>
        }
      </MainArea>
    </SplitScreenWrapper>
  );
}

export default Split;
