import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
const Services = () => {
  const services = [
    {
      title: 'Home Buying Assistance',
      description:
        'We guide you through every step of the home buying process, ensuring you find the perfect home that fits your needs and budget.',
      icon: '🏡',
    },
    {
      title: 'Home Selling Services',
      description:
        'Our team helps you sell your home quickly and at the best price with expert market analysis and personalized marketing strategies.',
      icon: '📈',
    },
    {
      title: 'Real Estate Investments',
      description:
        'Whether you’re a seasoned investor or just starting out, we provide insights and opportunities to grow your real estate portfolio.',
      icon: '💼',
    },
    {
      title: 'Market Analysis',
      description:
        'Get detailed reports and professional advice on the current real estate market to make informed decisions.',
      icon: '📊',
    },
    {
      title: 'Open House Events',
      description:
        'Join our open house events to explore properties and meet our agents in person.',
      icon: '🏠',
    },
    {
      title: 'Property Management',
      description:
        'We offer professional property management services to ensure your rental property is maintained and profitable.',
      icon: '🔑',
    },
  ];

  return (
    <ServicesContainer>
             <Navbar />

      <Header5>Our Services</Header5>
      <ServiceList>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <Icon>{service.icon}</Icon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServiceList>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header5 = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
`;

const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;
