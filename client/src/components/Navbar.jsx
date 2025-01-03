import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Header>
      <HeaderName>
        <h1>D Real Estate</h1>
      </HeaderName>
      <Navigation>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/listings">Listings</NavItem>
        <NavItem href="/services">Services</NavItem>
        <NavItem href="/about">About Us</NavItem>
        <NavItem href="/events">Upcoming Events</NavItem>
      </Navigation>
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
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
    font-size: 2.8rem;
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
  color: black;
  margin: 0 5px;
  font-size: 1.3rem;
  font-weight: bold;
  margin-right: 50px;
  text-decoration: none;
  transition: color 0.2s;
   @media (max-width: 1000px){
    display: none;
    }
  &:hover {
    color: #007bff;
  }
   
`;
