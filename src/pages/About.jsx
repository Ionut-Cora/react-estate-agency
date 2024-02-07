import React from 'react';
import Navigation from '../components/Navigation';
import SecondHeader from '../components/SecondHeader';
import AboutHeaderImg from '../assets/images/about-header-img.jpg';
import { Box, Container } from '@mui/material';
import Footer from '../components/Footer';
import ReviewsSection from '../components/ReviewsComponents/ReviewsSection';
import WhyChooseUs from '../components/WhyChooseUsComponents/WhyChooseUs';
import reviewImgAbout from '../assets/images/review-img-about.jpg';

function About() {
  return (
    <Box>
        <Navigation />
        <SecondHeader title='About us' img={AboutHeaderImg} imgPosition='center' />
        <WhyChooseUs />
        <Box sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${reviewImgAbout})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <Container>
            <ReviewsSection />
          </Container>
        </Box>
        <Footer />
    </Box>
  )
}

export default About;