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
    <div className="App">
      <Box>
          <Navigation />
          <SecondHeader title='Get in touch' img={ContactHeaderImg} imgPosition='center' direction='row-reverse' />
          <Container sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            marginY: '3rem'
          }}>
            <Box sx={{
              width: '100%'
            }}>
              <Typography 
                variant='h2'
                sx={{
                  fontSize: 'clamp(1.8rem, 1.3654rem + 0.9065vw, 2rem)',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  marginBottom: '2rem'
                }}
              >
                Send a message
              </Typography>
              <ContactForm />
            </Box>
          </Container>
          <Box sx={{
            backgroundColor: grey[100],
            paddingY: '3rem'
          }}>
            <ContactCardsSection />
          </Box>
          <Footer />
      </Box>
    </div>
  )
}

export default Contact;