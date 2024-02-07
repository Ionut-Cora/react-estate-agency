import React from 'react';
import { Box } from '@mui/material';
import discoverImg from '../assets/images/discover-img.jpg';
import DiscoverCard from './DiscoverCard';

function DiscoverSection() {
  return (
    <Box sx={{
        height: '75vh',
        backgroundImage: `url(${discoverImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex'
    }}>
        <DiscoverCard variant='h5' name='Buy your first property' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, mollitia.' buttonTitle='Our properties' buttonLink='/sale' />
    </Box>
  )
}

export default DiscoverSection;