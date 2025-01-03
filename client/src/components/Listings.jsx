import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Listing from './Listing';

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch('/api/listings');
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchListings();
  }, []);

  return (
    <ListingsContainer>
      <Navbar />
      <h1>Available Listings</h1>
      <p>Browse through our available listings and find your perfect match.</p>
      <ListingsContent>
        {listings.map((listing) => (
          <Listing
            key={listing._id}
            title={listing.title}
            description={listing.description}
            price={listing.price}
            images={listing.images}
          />
        ))}
      </ListingsContent>
    </ListingsContainer>
  );
};

export default Listings;

const ListingsContainer = styled.div`
  text-align: center;
  padding-top: 65px;
  margin-top: -50px;
  min-height: 100vh;
  background-color: lightgray;

  h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2em;
    color: #555;
  }
`;

const ListingsContent = styled.div`
  border: 1px solid lightgreen;
  padding: 10px;
  height: 90vh;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
