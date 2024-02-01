import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';

function SecondHeaderItem(props) {

    const theme = createTheme();

    theme.typography.h1 = {
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: red[500],
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
        <Box sx={{
            height: '75vh',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${props.secondHeaderImg})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
        }}>
            <Container sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography variant='h1' >
                    {props.secondHeaderTitle}
                </Typography>

            </Container>
        </Box>
    </ThemeProvider>
  )
}

export default SecondHeaderItem;