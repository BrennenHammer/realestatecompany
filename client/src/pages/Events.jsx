import React from 'react';
import styled from 'styled-components';
import homeImage from '../images/homeImage.jpeg';

const Home = () => {
  return (
    <HomeContainer>
      <HeaderName>
        <h1>Real Estate</h1>
      </HeaderName>
      <ContentWrapper>
        <Name>
          Real Estate Name
        </Name>
        <Description>
          Find your dream home
        </Description>
        <CallToAction>
          <button>Learn More</button>
        </CallToAction>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  height: 100vh;
  background-image: url(${homeImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const HeaderName = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  h1 {
    font-size: 2.5rem;
    color: black;
    font-family: cursive;
    margin: 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 150px 20px 0; /* Adjusted padding */
`;

const Name = styled.div`
  font-size: 3.5rem;
  color: black;
  font-family: cursive;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const CallToAction = styled.div`
  button {
    padding: 15px 30px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
  }
`;