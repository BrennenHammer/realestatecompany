import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <h1>About Us</h1>
      <p>
        At [Your Company Name], we are committed to providing the best [products/services] 
        to our clients. Our team of professionals is dedicated to excellence, innovation, 
        and customer satisfaction.
      </p>
      <TeamSection>
        <h2>Meet Our Team</h2>
        <div>
          <MemberCard>
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </MemberCard>
          <MemberCard>
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </MemberCard>
        </div>
      </TeamSection>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  padding: 20px;
  text-align: center;

  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 30px;
    line-height: 1.6;
  }
`;

const TeamSection = styled.section`
  margin-top: 50px;

  h2 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const MemberCard = styled.div`
  text-align: center;
  max-width: 200px;

  img {
    width: 100%;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.2em;
    margin-bottom: 5px;
  }

  p {
    font-size: 1em;
    color: #777;
  }
`;
