import React from 'react';
import styled from 'styled-components';

const Events = () => {
  const sampleEvents = [
    { id: 1, title: 'Open House - Luxury Villa', date: '2024-01-10', location: '123 Oceanview Drive' },
    { id: 2, title: 'First-Time Homebuyer Seminar', date: '2024-01-15', location: 'Real Estate Office' },
    { id: 3, title: 'Community Real Estate Expo', date: '2024-01-20', location: 'Downtown Convention Center' },
  ];
  return (
    <EventsContainer>
      <Header3>Upcoming Events</Header3>
      <Description3>
        Explore our upcoming real estate events. Attend open houses, seminars, and expos to find your dream home or learn more about the market.
      </Description3>
      <EventList>
        {sampleEvents.map((event) => (
          <EventCard key={event.id}>
            <EventTitle>{event.title}</EventTitle>
            <EventDetails>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
            </EventDetails>
          </EventCard>
        ))}
      </EventList>
    </EventsContainer>
  );
};

export default Events;

const EventsContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header3 = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const Description3 = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #555;
`;

const EventList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const EventCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const EventTitle = styled.h2`
  font-size: 1.5rem;
  color: #222;
  margin-bottom: 10px;
`;

const EventDetails = styled.div`
  font-size: 1rem;
  color: #555;
`;
