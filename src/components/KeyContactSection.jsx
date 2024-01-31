import { Box, Container } from '@mui/material';
import React from 'react';
import KeyContactCard from './KeyContactCard';
import Person1Img from '../assets/images/person1.jpg';
import Person2Img from '../assets/images/person2.jpg';

function KeyContactSection() {
  return (
    <Box>
      <Container sx={{ 
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: { xs: 'space-around', lg: 'space-between' },
        alignItems: 'center'
    }}>
        <KeyContactCard img={Person1Img} name='John Smith' title='General Manager' tel='0900800700' />
        <KeyContactCard img={Person2Img} name='Mick Kane' title='Branch Manager' tel='0500400300' />
      </Container>
    </Box>
  )
}

export default KeyContactSection;