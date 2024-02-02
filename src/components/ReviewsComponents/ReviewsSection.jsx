import React from 'react';
import ReviewCard from './ReviewCard';
import { Box, Typography } from '@mui/material';

function ReviewsSection() {
  return (
    <Box sx={{
      paddingY: '3rem'
    }}>
      <Typography 
        variant='h2'
        sx={{
          fontSize: 'clamp(1.8rem, 1.3654rem + 0.9065vw, 2rem)',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          marginBottom: '1rem',
          color: 'white'
        }}
      >
        What our customers are saying?
      </Typography>
      <ReviewCard />
    </Box>
  )
}

export default ReviewsSection;