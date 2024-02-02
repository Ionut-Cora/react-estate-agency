import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import whyChooseUsItems from '../../assets/whyChooseUsItems';
import WhyChooseUsCard from './WhyChooseUsCard';

function WhyChooseUs() {
  return (
    <Container sx={{
      paddingY: '3rem'
    }}>
            <Typography 
              variant='h2'
              sx={{
                fontSize: 'clamp(1.8rem, 1.3654rem + 0.9065vw, 2rem)',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                marginBottom: '1rem'
            }}
            >
              Why choose us
            </Typography>
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between'
            }}>
              {
                whyChooseUsItems.map((item) => <WhyChooseUsCard key={item.id} title={item.title} description={item.description} backgroundImage={item.backgroundImage} logo={item.logo} />)
              }
            </Box>
    </Container>
  )
}

export default WhyChooseUs;