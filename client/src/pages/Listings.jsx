import React from 'react';
import styled from 'styled-components';

const Listings = () => {
  return (
    <ListingsContainer>
      <h1>Available Listings</h1>
      <p>Browse through our available listings and find your perfect match.</p>
    </ListingsContainer>
  );
};

export default Listings;

const ListingsContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #ffffff;
  min-height: 100vh;

  h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2em;
    color: #555;
  }
`;
