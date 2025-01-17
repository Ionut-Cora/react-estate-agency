import React from 'react';
// import SecondHeader from '../SecondHeader';
import { Box, Container, Typography } from '@mui/material';
import ImageGallerySlider from '../ImageGallerySlider';
import { orange } from '@mui/material/colors';
import PropertyIcons from '../PropertyIcons';

function RentSaleProperty(props) {
  return (
    <Box>
        {/* <SecondHeader title={props.propertyAddress} img={props.propertyImage}  /> */}
        <Container>
            <Box sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  marginY: '2rem'
                }}>
                  <Box sx={{
                    width: { xs: '100%', md: '50%' }
                  }}>
                    <ImageGallerySlider images={props.propertyImages} />
                  </Box>
                  <Box sx={{
                    width: { xs: '100%', md: '50%' },
                    paddingLeft: { xs: 0, md: '2rem' },
                    marginTop: { xs: '2rem', md: 0 }
                  }}>
                    <Typography 
                      variant='h2'
                      sx={{
                        fontSize: '1.4em',
                        fontWeight: 'bold'
                      }}
                    >
                        {props.propertyAddress}
                    </Typography>
                    <Typography 
                      variant='h3'
                      sx={{
                          fontSize: '1.2em',
                          textTransform: 'uppercase',
                          color: orange[500],
                          marginTop: '0.5rem'
                      }}
                    >
                      £{props.propertyPrice} per month
                    </Typography>
                    <PropertyIcons bedrooms={props.propertyBedrooms} bathrooms={props.propertyBathrooms} livingrooms={props.propertyLivingrooms} />
                    <Typography 
                      variant='body1'
                      sx={{
                        marginY: '1rem',
                        textAlign: 'left'
                      }}
                    >
                      {props.propertyLongDescription}
                    </Typography>
                  </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default RentSaleProperty;