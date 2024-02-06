import React from 'react';
import { Paper, Button, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function Item(props) {

    const theme = createTheme();

    theme.typography.h1 = {
        fontSize: '2rem',
        // '@media (min-width:600px)': {
        //     fontSize: '4rem',
        // },
        // [theme.breakpoints.up('md')]: {
        //     fontSize: '2rem',
        // },
    };

  return (
    <ThemeProvider theme={theme}>
        <Paper 
            sx={{
                backgroundImage: { xs: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props.item.img})`, md: `linear-gradient(${props.item.gradient}),url(${props.item.img})` },
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                height: '100vh',
                borderRadius: 0
            }}
        >
            <Box sx={{
                height: '100% ',
                display: 'flex',
                flexDirection: `${props.item.direction}`
            }}>
                <Box sx={{
                    height: '100%',
                    width: { xs: '100%', md: '50%' },
                    display: 'flex',
                    position: 'relative',
                    flexDirection: `${props.item.direction}`
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
                                    variant='h1'
                                    sx={{
                                        textTransform: 'capitalize',
                                        textShadow: '3px 4px 7px rgba(0,0,0,0.5)',
                                        color: 'white',
                                        marginBottom: '1rem'
                                    }}
                                >
                                    {props.item.name}
                                </Typography>
                                <Typography 
                                    variant='body1' 
                                    color='white'
                                    sx={{
                                        marginBottom: '1rem'
                                    }}
                                >
                                    {props.item.description}
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
        </Paper>
    </ThemeProvider>
  )
}

export default Item;