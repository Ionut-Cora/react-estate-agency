import React from 'react';
// import SecondHeader from '../SecondHeader';
import { Box, Container, Typography } from '@mui/material';
import ImageGallerySlider from '../ImageGallerySlider';
import { orange } from '@mui/material/colors';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
// import MortgageCalculator from '../MortgageCalculator';

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
                    width: { xs: '100%', md: '60%' }
                  }}>
                    <ImageGallerySlider images={props.propertyImages} />
                  </Box>
                  <Box sx={{
                    width: { xs: '100%', md: '40%' },
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
                  <Typography 
                      variant='body1'
                      sx={{
                          marginY: '1rem'
                      }}
                  >
                      {props.propertyLongDescription}
                  </Typography>
                  <Box sx={{
                          display: 'flex'
                      }}>
                          <Box sx={{
                              display: 'flex'
                          }}>
                              <BedOutlinedIcon />
                              <Typography 
                                  variant='body1'
                                  sx={{
                                      fontWeight: 'bold',
                                      marginLeft: '4px'
                                  }}
                              >
                                  {props.propertyBedrooms}
                              </Typography>
                          </Box>
                          <Box sx={{
                              display: 'flex',
                              marginX: '1rem'
                          }}>
                              <BathtubOutlinedIcon />
                              <Typography 
                                  variant='body1'
                                  sx={{
                                      fontWeight: 'bold',
                                      marginLeft: '4px'
                                  }}
                              >
                                  {props.propertyBathrooms}
                              </Typography>
                          </Box>
                          <Box sx={{
                              display: 'flex'
                          }}>
                              <ChairOutlinedIcon />
                              <Typography 
                                  variant='body1'
                                  sx={{
                                      fontWeight: 'bold',
                                      marginLeft: '4px'
                                  }}
                              >
                                  {props.propertyLivingrooms}
                              </Typography>
                          </Box>
                      </Box>
                  </Box>
            </Box>

            {/* <MortgageCalculator fullPropertyPrice={props.fullPrice} /> */}

        </Container>
    </Box>
  )
}

export default RentSaleProperty;