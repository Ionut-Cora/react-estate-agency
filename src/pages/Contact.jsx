import React from 'react';
import Navigation from '../components/Navigation';
import SecondHeader from '../components/SecondHeader';
import ContactHeaderImg from '../assets/images/contact-header-img.jpg';
import ContactCardsSection from '../components/ContactPageComponents/ContactCardsSection';
import Footer from '../components/Footer';
import { Box, Container, Typography } from '@mui/material';
import ContactForm from '../components/ContactPageComponents/ContactForm';
import { grey } from '@mui/material/colors';

function Contact() {
  return (
    <Box>
        <Navigation />
        <SecondHeader title='Get in touch' img={ContactHeaderImg} imgPosition='center' direction='row-reverse' />
        <Box sx={{
          backgroundColor: grey[100],
          paddingY: '3rem'
        }}>
          <ContactCardsSection />
        </Box>
        <Container sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          marginY: '3rem'
        }}>
          <Box sx={{
            width: { xs: '100%', md: '40%' },
            paddingRight: { xs: 0, md: '1rem' }
          }}>
            <Typography 
              variant='h3'
              sx={{
                fontSize: '1.5rem'
              }}
            >
              Contact
            </Typography>
            <Typography 
              variant='h2'
              sx={{
                fontSize: '3.5rem'
              }}
            >
              Send a message
            </Typography>
          </Box>
          <ContactForm />
        </Container>
        <Footer />
    </Box>
  )
}

export default Contact;