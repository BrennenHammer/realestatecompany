import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <AboutContainer>
      <Navbar />

       <Content>
        <h1>About Us</h1>
        <p>
          At <span>[Your Company Name]</span>, we are driven by a dedication to excellence and 
          a passion for delivering top-tier <span>[products/services]</span>. Founded on the principles 
          of integrity and innovation, we work tirelessly to meet the needs of our clients while 
          setting new benchmarks in quality. Our journey is guided by a single vision: making a 
          meaningful impact in everything we do.
        </p>
      </Content>

      <ImageSection>
        <h2>About Our Founder</h2>
        <img src="https://via.placeholder.com/300x300" alt="Founder Portrait" />
        <Caption>
          [Your Founder’s Name]—the visionary behind our mission, inspiring us every step of the way.
        </Caption>
      </ImageSection>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
  min-height: 100vh;
  padding: 40px 20px;
  text-align: center;
`;

const Content = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2em;
    color: black;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1em;
    line-height: 1.6;
    color: #333;

    span {
      color: black;
      font-weight: bold;
    }
  }
`;

const ImageSection = styled.section`
  margin-top: 40px;
  text-align: center;

  h2 {
    font-size: 1.8em;
    color: black;
    margin-bottom: 20px;
  }

  img {
    width: 250px;
    height: 250px;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    border: 4px solid #d0d0d0;
    margin-bottom: 15px;
  }
`;

const Caption = styled.p`
  font-size: 1em;
  color: #555;
  margin-top: 10px;
`;
