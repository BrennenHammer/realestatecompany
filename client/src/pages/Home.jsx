import React from 'react';
import styled from 'styled-components';
import homeImage from '../images/homeImage.jpeg';

const Home = () => {
  const sampleEvents = [
    { id: 1, title: 'Open House - Luxury Villa', date: '2024-01-10', location: '123 Oceanview Drive' },
    { id: 2, title: 'First-Time Homebuyer Seminar', date: '2024-01-15', location: 'Real Estate Office' },
    { id: 3, title: 'Community Real Estate Expo', date: '2024-01-20', location: 'Downtown Convention Center' },
  ];
  return (
    <HomeContainer>
      <Header>
        <HeaderName>
          <h1>D Real Estate</h1>
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
          Default Real Estate
        </Name>
        <Description>
          Find your dream home
        </Description>
        <CallToAction>
          <button>Learn More</button>
        </CallToAction>
      </ContentWrapper>
      <ListingsContainer>
      <h1>Available Listings</h1>
      <p>Browse through our available listings and find your perfect match.</p>
      <ListingsContent>
    <div>Listing 1</div>
    <div>Listing 2</div>
    <div>Listing 3</div>
    <div>Listing 1</div>
    <div>Listing 2</div>
    <div>Listing 3</div>
    <ListingButton>All listings</ListingButton>
  </ListingsContent>
    </ListingsContainer>
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
    <AboutContainer>
      <Header4>About Us</Header4>
      <Description4>
        Welcome to D Real Estate, your personal partner in buying, selling, and investing in properties. With my experience and a passion for helping clients find their dream homes, I pride myself on offering unparalleled service and expertise.
      </Description4>
      <MissionSection>
        <MissionHeader>Our Mission</MissionHeader>
        <MissionText>
          At D Real Estate, my mission is to simplify the real estate process and provide personalized solutions tailored to your unique needs. Whether you're a first-time buyer or a seasoned investor, I am here to guide you every step of the way.
        </MissionText>
      </MissionSection>
      <ContactSection>
        <ContactHeader>Contact me</ContactHeader>
        <ContactDetails>
          <p><strong>Email:</strong> contact@drealestate.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Office Address:</strong> 123 Main Street, Suite 101, Hometown, USA</p>
          <p><strong>Hours:</strong> Monday - Friday: 9 AM - 6 PM</p>
        </ContactDetails>
        <ContactForm>
          <FormHeader>Get in Touch</FormHeader>
          <Form>
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <TextArea placeholder="Your Message" />
            <SubmitButton>Send Message</SubmitButton>
          </Form>
        </ContactForm>
      </ContactSection>
    </AboutContainer>
    </HomeContainer>
    
  );
};

export default Home;

const HomeContainer = styled.div`
  height: 100vh;
  background-image: url(${homeImage});
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  border-bottom: 10px solid gray;
`;

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
  padding: 80px 20px 0;
`;

const Name = styled.div`
  font-size: 3.3rem;
  color: black;
  font-weight: bold;
  font-family: cursive;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 2.0rem;
  font-weight: bold;
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

const ListingsContainer = styled.div`
  text-align: center;
  background-color: #ffffff;
  padding-top: 65px;
  margin-top: -190px;
  min-height: 100vh;
  background-color: lightgray;

  h1 {
    font-size: 2.5em;
    margin-bottom: 10px;

  }

  p {
    font-size: 1.2em;
    color: #555;
  }
`;
const ListingsContent = styled.div`
border: 1px solid lightgreen;
padding: 10px;
height: 90vh;
margin-top: 30px;
display: grid;
grid-template-columns: repeat(3, 1fr);
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
@media (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const ListingButton = styled.button`
background-color: black;
color: white;
position: relative;
left: 100%;
top: 50%;
justify-content: center;
align-items: center;
font-size: 1.2rem;
height: 50px;
@media (max-width: 780px) {
left: 50%;
}
`
const EventsContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  background-color: lightgray;
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
  background-color: white;
  border-radius: 5px;
  border: 1px solid grey;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const EventCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  border: 1px solid lightgrey;
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
const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: grey;
  padding: 20px;
`;

const Header4 = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description4 = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 40px;
`;

const MissionSection = styled.div`
  margin-bottom: 40px;
`;

const MissionHeader = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 10px;
`;

const MissionText = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

const ContactSection = styled.div`
  margin-top: 40px;
`;

const ContactHeader = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;

const ContactDetails = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 40px;

  p {
    margin: 10px 0;
  }
`;

const ContactForm = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormHeader = styled.h3`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  height: 100px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
