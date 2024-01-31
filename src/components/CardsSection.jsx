import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CardItem from './CardItem';
import cardsItems from '../assets/cardsItems';

function CardsSection() {
  return (
    <Container sx={{ marginTop: '1rem' }}>
        <Typography 
            variant='h2'
            sx={{
                fontSize: 'clamp(1.8rem, 1.3654rem + 0.9065vw, 2rem)',
                textTransform: 'uppercase',
                fontWeight: '600'
            }}
        >
            Recently added
        </Typography>
        <Box sx={{
            display: 'flex', 
            justifyContent: { xs: 'center', md: 'space-around', lg: 'space-between' },
            marginTop: '1rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
        }}>
            {
                cardsItems.map( (item, i) => <CardItem key={i} item={item} title={item.title} address={item.address} price={item.price} image={item.img} url={item.url} /> )
            }
        </Box>
    </Container>
  )
}

export default CardsSection;