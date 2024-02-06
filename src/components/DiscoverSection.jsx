import React from 'react';
import { Box, Typography } from '@mui/material';
import discoverImg from '../assets/images/discover-img.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';

function DiscoverSection() {
  return (
    <Box sx={{
        height: '75vh',
        backgroundImage: `url(${discoverImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex'
    }}>
        <Box sx={{
            height: '100%',
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            position: 'relative'
        }}>
            <Box sx={{
                height: '100%',
                width: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.75)'
            }}>
                <Card sx={{ 
                        minWidth: { xs: '200px', sm: '275px' },
                        minHeight: 300,
                        position: 'absolute',
                        top: '50%',
                        right: '50%',
                        transform: 'translate(50%, -50%)',
                        padding: { xs: '1rem', sm: '2rem' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        backgroundColor: orange[800],
                        borderRadius: '0'
                    }}>
                    <CardContent sx={{
                        padding: 0
                    }}>
                        <Typography 
                            variant="h5" 
                            component="div"
                            sx={{
                                color: 'white',
                                marginBottom: '0.5rem',
                                textTransform: 'capitalize'
                            }}
                        >
                            Buy your first property
                        </Typography>
                        <Typography 
                            variant="body2"
                            sx={{
                                color: 'white'
                            }}
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, mollitia.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{
                        padding: 0
                    }}>
                        <Button 
                            variant='outlined'
                            href='/sale'
                            sx={{
                                marginTop: '2rem',
                                color: 'white',
                                borderColor: 'white',
                                '&:hover': {
                                    borderColor: 'white'
                                }
                            }}
                        >
                            Our properties
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box sx={{
                height: '100%',
                width: '50%'
            }}>

            </Box>
        </Box>
    </Box>
  )
}

export default DiscoverSection;