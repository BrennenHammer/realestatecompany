import { Link } from 'react-router-dom';

import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import homeImage from '../images/homeImage.jpeg';
import homeWorthImage from '../images/homeworthimage.jpeg';
import listingAlertImage from '../images/listingalertimage.jpeg';

const Home = () => {
  const sampleEvents = [
    { id: 1, title: 'Open House - Luxury Villa', date: '2024-01-10', location: '123 Oceanview Drive' },
    { id: 2, title: 'First-Time Homebuyer Seminar', date: '2024-01-15', location: 'Real Estate Office' },
    { id: 3, title: 'Community Real Estate Expo', date: '2024-01-20', location: 'Downtown Convention Center' },
  ];
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
    <HomeContainer>
      <Linkadmin to="/login">Admin Login</Linkadmin>      <Navbar />
      <ContentWrapper>
        <Name>Default Real Estate</Name>
        <Description>Find your dream home</Description>
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
      <ServicesContainer>
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
      <PageContainer>
        <Section>
          <TextContainer>
            <Header6>Find Your Home Worth</Header6>
            <Description6>
              Curious about your home's value? Get an instant and accurate home valuation today!
            </Description6>
            <InputContainer>
              <Input6 type="email" placeholder="Enter your email" />
              <SubmitButton6>Get Home Worth</SubmitButton6>
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
              <SubmitButton6>Subscribe</SubmitButton6>
            </InputContainer>
          </TextContainer>
        </Section>
      </PageContainer>
      <AboutContainer>
        <Content>
          <h1>About Us</h1>
          <p>
            At <span>[Your Company Name]</span>, we are driven by a dedication to excellence and a passion for delivering top-tier <span>[products/services]</span>. Founded on the principles of integrity and innovation, we work tirelessly to meet the needs of our clients while setting new benchmarks in quality. Our journey is guided by a single vision: making a meaningful impact in everything we do.
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
      <ContactSection>
        <ContactHeader>Contact Me</ContactHeader>
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
    </HomeContainer>
  );
  
};

export default Home;

const HomeContainer = styled.div`
  height: 110vh;
  width: 100%;
  background-image: url(${homeImage});
  background-size: cover;
  background-position: center;
  position: relative;
  border-bottom: 10px solid gray;
`;
const Linkadmin = styled(Link)`
  position: relative;
  margin-left: 85%;
  top: 5px;
  color: white;
  background-color: none;
  text-decoration: none;
  border: none;
  cursor: pointer;
  @media (max-width: 700px){
  margin-left: 70%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 79px 20px 0;
`;

const Name = styled.div`
  font-size: 3.3rem;
  color: black;
  font-weight: bold;
  font-family: cursive;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.9rem;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`;

const CallToAction = styled.div`
  button {
    padding: 15px 30px;
    font-size: 17px;
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
    font-size: 2.4em;
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
  max-width: 100%;
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
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
`;

const EventCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  border: 1px solid lightgrey;
  padding: 50px;
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
  background-color: lightgrey;
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
    font-size: 1.0em;
    line-height: 1.5;
    color: black;

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
    font-size: 1.6em;
    color: black;
    margin-bottom: 20px;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    border: 4px solid #d0d0d0;
    margin-bottom: 15px;
  }
`;

const Caption = styled.p`
  font-size: 1em;
  color: black;
  margin-top: 10px;
`;

const ContactSection = styled.div`
  margin-top: -27px;
  background: lightgrey;
  border-top: 2px solid white;
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
  padding: 8px;
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
  background-color: black;
  border: none;
  margin-bottom: 5px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const ServicesContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  background-color: lightgrey;
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
  border: 1px solid grey;
  background-color: white;
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
const PageContainer = styled.div`
  width: 100%;
  background-color: lightgrey;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  height: 50vh; /* Adjust height for better visibility */
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    height: auto; /* Let content determine height */
    padding: 20px; /* Add padding for spacing */
  }
`;


const TextContainer = styled.div`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
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

const SubmitButton6 = styled.button`
  padding: 10px 10px;
  margin-bottom: 5px;
  font-size: 1rem;
  background-color: black;
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
  padding-right: 20px;

  @media (max-width: 768px) {
    margin-bottom: -20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%; /* Ensures the image does not exceed the viewport height */
  object-fit: cover;
  border-radius: 2px;
`;