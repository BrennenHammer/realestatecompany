import React from 'react';
import styled from 'styled-components';

const Listing = ({ title, description, price, images }) => {
  return (
    <StyledListing>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>${price}</p>
      {images.map((image, index) => (
        <img src={image} alt={`Image ${index + 1}`} />
      ))}
    </StyledListing>
  );
};

const StyledListing = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default Listing;