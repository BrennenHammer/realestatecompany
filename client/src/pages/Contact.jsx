import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
const About = () => {
    return (
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
    )
}
export default About;