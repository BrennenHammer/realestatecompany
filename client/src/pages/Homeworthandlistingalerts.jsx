import React from 'react';
import styled from 'styled-components';
import homeWorthImage from '../images/homeworthimage.jpeg'; // Replace with your actual image path
import listingAlertImage from '../images/listingalertimage.jpeg'; // Replace with your actual image path
import Navbar from '../components/Navbar';
const HomeWorthListingAlerts = () => {
  return (
    <PageContainer>
             <Navbar />

      <Section>
        <TextContainer>
          <Header6>Find Your Home Worth</Header6>
          <Description6>
            Curious about your home's value? Get an instant and accurate home valuation today!
          </Description6>
          <InputContainer>
            <Input6 type="email" placeholder="Enter your email" />
            <SubmitButton>Get Home Worth</SubmitButton>
          </InputContainer>
        </TextContainer>
        <ImageContainer>
          <Image src={homeWorthImage} alt="Home Worth" />
        </ImageContainer>
      </Section>

      <Section>
        <ImageContainer>
          <Image src={listingAlertImage} alt="Listing Alert" />
        </ImageContainer>
        <TextContainer>
          <Header6>Sign Up for Listing Alerts</Header6>
          <Description6>
            Be the first to know about new listings in your area. Subscribe to get alerts directly to your inbox.
          </Description6>
          <InputContainer>
            <Input6 type="email" placeholder="Enter your email" />
            <SubmitButton>Subscribe</SubmitButton>
          </InputContainer>
        </TextContainer>
      </Section>
    </PageContainer>
  );
};

export default HomeWorthListingAlerts;

const PageContainer = styled.div`
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  height: 50vh; /* Full viewport height */
  width: 100%; /* Full page width */
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Header6 = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Description6 = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input6 = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%; /* Ensures the image does not exceed the viewport height */
  object-fit: cover;
  border-radius: 10px;
`;
