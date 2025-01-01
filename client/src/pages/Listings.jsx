import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
const Listings = () => {
  return (
    <ListingsContainer>
             <Navbar />
      <h1>Available Listings</h1>
      <p>Browse through our available listings and find your perfect match.</p>
      <ListingsContent>
    <div>Listing 1</div>
    <div>Listing 2</div>
    <div>Listing 3</div>
    <div>Listing 1</div>
    <div>Listing 2</div>
    <div>Listing 3</div>
    <ListingButton>All listings</ListingButton>
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
const ListingButton = styled.button`
background-color: black;
color: white;
position: relative;
left: 100%;
top: 50%;
justify-content: center;
align-items: center;
font-size: 1.2rem;
height: 50px;
@media (max-width: 780px) {
left: 50%;
}
`
