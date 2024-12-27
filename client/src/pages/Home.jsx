import React from 'react';
import styled from 'styled-components';
import homeImage from '../images/homeImage.jpeg';

const Home = () => {
  return (
    <HomeContainer>
      <Header>
        <HeaderName>
          <h1>Real Estate</h1>
        </HeaderName>
        <Navigation>
          <NavItem href="/listings">Listings</NavItem>
          <NavItem href="/services">Services</NavItem>
          <NavItem href="/about">About Us</NavItem>
          <NavItem href="/events">Upcoming Events</NavItem>
        </Navigation>
      </Header>
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

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const HeaderName = styled.div`
  h1 {
    font-size: 2.5rem;
    color: black;
    font-family: cursive;
    margin: 0;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItem = styled.a`
  color: white;
  margin: 0 0px;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 50px;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #007bff;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 150px 20px 0;
`;

const Name = styled.div`
  font-size: 3.5rem;
  color: black;
  font-family: cursive;
  margin-bottom: 50px;
`;

const Description = styled.p`
  font-size: 1.7rem;
  color: black;
  margin-bottom: 20px;
`;

const CallToAction = styled.div`
  button {
    padding: 15px 30px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;