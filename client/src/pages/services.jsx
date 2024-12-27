import React from 'react';
import styled from 'styled-components';

const Services = () => {
  return (
    <ServicesContainer>
      <h1>Our Services</h1>
      <p>Explore the wide range of services we offer to meet your needs.</p>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #eef2f5;
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
