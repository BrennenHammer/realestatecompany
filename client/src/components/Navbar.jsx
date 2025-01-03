import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Header>
      <HeaderName>
        <h1>D Real Estate</h1>
      </HeaderName>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </MenuButton>
      <Navigation menuOpen={menuOpen}>
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const HeaderName = styled.div`
  h1 {
    font-size: 2.4rem;
    color: black;
    font-family: cursive;
    margin: 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  border-radius: 5px;
  padding: 0px 7px;
  margin-right: 80px;
  border: 2px solid black;
  font-size: 1.8rem;
  cursor: pointer;
  @media (max-width: 1000px) {
    display: block;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  margin-top: 10px;
  @media (max-width: 1000px) {
    display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: -20px;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 5px;
    border-radius: 5px;
    width: 160px;
  }
`;

const NavItem = styled.a`
  color: black;
  margin: 0 15px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: #007bff;
  }

  @media (max-width: 1000px) {
    margin: 10px 0;
    text-align: center;
    width: 50%;

  font-size: 1.0rem;
  }
`;
