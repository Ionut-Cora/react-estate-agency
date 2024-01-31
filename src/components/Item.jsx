import React from 'react';
import { Paper, Button, Typography, Box, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

function Item(props) {

    const theme = createTheme();

    theme.typography.h1 = {
        color: orange[900],
        fontSize: '3rem',
        '@media (min-width:600px)': {
            fontSize: '4rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '5rem',
        },
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
            <Container sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: `${props.item.align}`
            }}>
                <Typography 
                    variant='h1'
                    sx={{
                        textTransform: 'capitalize',
                        width: { xs: '100%', md: `${props.item.textWidth}` },
                        textAlign: `${props.item.textAlign}`,
                        textShadow: '3px 4px 7px rgba(0,0,0,0.5)'
                    }}
                >
                    {props.item.name}
                </Typography>

                <Typography 
                    variant='body1' 
                    color='white'
                    sx={{
                        marginBottom: '1rem',
                        width: { xs: '100%', md: `${props.item.textWidth}` }
                    }}
                >
                    {props.item.description}
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' }
                }}>
                    <Button 
                        variant='contained' 
                        color='warning' 
                        size='large'
                        href='/rent'
                        sx={{
                            marginRight: { xs: 0, sm: '1rem' },
                            marginBottom: { xs: '0.5rem', sm: 0 }
                        }}
                    >
                        Rent a property
                    </Button>

                    <Button 
                        variant='outlined'
                        href='/sale'
                        sx={{
                            marginLeft: { xs: 0, sm: '1rem' },
                            marginTop: { xs: '0.5rem', sm: 0 },
                            color: 'white',
                            borderColor: 'white',
                            '&:hover': {
                                borderColor: 'white'
                            }
                        }}
                    >
                        Buy a property
                    </Button>
                </Box>
            </Container>
        </Paper>
    </ThemeProvider>
  )
}

export default Item;