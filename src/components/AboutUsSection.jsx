import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import AboutImg from '../assets/images/about-img.jpg';

function AboutUsSection() {
  return (
    <Box sx={{ marginBottom: '3rem' }}>
        <Container>
            <Box sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }
            }}>
                <Box sx={{ 
                    width: { xs: '100%', md: '50%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingRight: { xs: 0, md: '1rem' }
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
                        About us
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempora eos dolor officia cum nihil molestiae pariatur numquam repudiandae tempore, impedit facilis, laudantium voluptas harum accusamus alias itaque. Possimus quaerat quia iste iusto tenetur. Quod numquam vero quibusdam quam aliquid aspernatur quisquam ab quasi minima reprehenderit, facilis animi fugiat quia.
                    </Typography>
                    <Box sx={{
                        marginTop: '1rem'
                    }}>
                        <Link to='/about' >
                            <Button 
                                variant='contained'
                                color='warning'
                            >
                                More about us
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box 
                    sx={{ 
                        width: { xs: '100%', md: '50%' },
                        display: 'flex',
                        justifyContent: 'center',
                        paddingLeft: { md: 0, lg: '6rem' },
                        paddingTop: { xs: '2rem', md: 0 }
                    }}>
                    <img 
                        src={AboutImg} 
                        alt="" 
                        style={{ 
                            height: 'auto', 
                            maxWidth: '100%',
                            borderRadius: '5px' 
                        }} 
                    />
                </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default AboutUsSection;